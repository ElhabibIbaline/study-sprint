import { useState } from "react";
import { Link } from "react-router-dom";
import { categoriesGlossaire, glossaire } from "../data/glossaire";
import { paquetsRegles } from "../data/flashcardsRegles";
import { enregistrerFlashcardRevue, enregistrerPaquetMaitrise } from "../utils/progression";

const CLE_STOCKAGE = "flashcards-srs-v1";
const INTERVALLES_JOURS = [0, 1, 3, 7, 16];
const UN_JOUR_MS = 24 * 60 * 60 * 1000;

const PAQUETS = {
  vocabulaire: { label: "Vocabulaire", data: glossaire, categories: categoriesGlossaire },
  calcul: { label: paquetsRegles.calcul.label, data: paquetsRegles.calcul.cartes, categories: paquetsRegles.calcul.categories },
  orthographe: { label: paquetsRegles.orthographe.label, data: paquetsRegles.orthographe.cartes, categories: paquetsRegles.orthographe.categories },
};

function idCarte(paquet, terme) {
  return `${paquet}::${terme}`;
}

function chargerSrs() {
  try {
    const brut = localStorage.getItem(CLE_STOCKAGE);
    return brut ? JSON.parse(brut) : {};
  } catch {
    return {};
  }
}

function sauvegarderSrs(etat) {
  try {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(etat));
  } catch {
    // stockage indisponible (navigation privée, quota...) : la session continue sans persistance
  }
}

function metaCarte(srs, id) {
  return srs[id] || { boite: 0, prochaine: 0 };
}

function melanger(tableau) {
  const copie = [...tableau];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

function cartesFiltrees(paquet, categorie) {
  const source = PAQUETS[paquet].data;
  return categorie === "toutes" ? source : source.filter((c) => c.categorie === categorie);
}

function construireFile(paquet, categorie, srs, avance) {
  const maintenant = Date.now();
  const candidats = cartesFiltrees(paquet, categorie);
  const dues = avance
    ? candidats
    : candidats.filter((c) => metaCarte(srs, idCarte(paquet, c.terme)).prochaine <= maintenant);
  return melanger(dues);
}

function Flashcards() {
  const [paquet, setPaquet] = useState("vocabulaire");
  const [categorie, setCategorie] = useState("toutes");
  const [srs, setSrs] = useState(chargerSrs);
  const [file, setFile] = useState(() => construireFile("vocabulaire", "toutes", chargerSrs(), false));
  const [dueInitial, setDueInitial] = useState(file.length);
  const [modeAvance, setModeAvance] = useState(false);
  const [retournee, setRetournee] = useState(false);

  const config = PAQUETS[paquet];
  const carte = file[0];
  const carteId = carte && idCarte(paquet, carte.terme);
  const carteMeta = carte && metaCarte(srs, carteId);

  const totalFiltre = cartesFiltrees(paquet, categorie).length;
  const maitrisees = cartesFiltrees(paquet, categorie).filter(
    (c) => metaCarte(srs, idCarte(paquet, c.terme)).boite >= INTERVALLES_JOURS.length - 1,
  ).length;

  function changerPaquet(cle) {
    setPaquet(cle);
    setCategorie("toutes");
    setModeAvance(false);
    setRetournee(false);
    const nouvelleFile = construireFile(cle, "toutes", srs, false);
    setFile(nouvelleFile);
    setDueInitial(nouvelleFile.length);
  }

  function changerCategorie(cle) {
    setCategorie(cle);
    setModeAvance(false);
    setRetournee(false);
    const nouvelleFile = construireFile(paquet, cle, srs, false);
    setFile(nouvelleFile);
    setDueInitial(nouvelleFile.length);
  }

  function reviserEnAvance() {
    setModeAvance(true);
    setRetournee(false);
    const nouvelleFile = construireFile(paquet, categorie, srs, true);
    setFile(nouvelleFile);
    setDueInitial(nouvelleFile.length);
  }

  function reinitialiserPaquet() {
    const idsPaquet = config.data.map((c) => idCarte(paquet, c.terme));
    const nouveauSrs = { ...srs };
    idsPaquet.forEach((id) => delete nouveauSrs[id]);
    setSrs(nouveauSrs);
    sauvegarderSrs(nouveauSrs);
    setModeAvance(false);
    setRetournee(false);
    const nouvelleFile = construireFile(paquet, categorie, nouveauSrs, false);
    setFile(nouvelleFile);
    setDueInitial(nouvelleFile.length);
  }

  function noter(acquise) {
    const meta = metaCarte(srs, carteId);
    const nouvelleBoite = acquise ? Math.min(meta.boite + 1, INTERVALLES_JOURS.length - 1) : 0;
    const prochaine = acquise ? Date.now() + INTERVALLES_JOURS[nouvelleBoite] * UN_JOUR_MS : Date.now();
    const nouveauSrs = { ...srs, [carteId]: { boite: nouvelleBoite, prochaine } };
    setSrs(nouveauSrs);
    sauvegarderSrs(nouveauSrs);
    setRetournee(false);
    enregistrerFlashcardRevue();
    const toutMaitrise = config.data.every(
      (c) => metaCarte(nouveauSrs, idCarte(paquet, c.terme)).boite >= INTERVALLES_JOURS.length - 1,
    );
    if (toutMaitrise) enregistrerPaquetMaitrise(paquet);
    if (acquise) {
      setFile((f) => f.slice(1));
    } else {
      setFile((f) => (f.length > 1 ? [...f.slice(1), f[0]] : f));
    }
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Mémorisation active · révision espacée</p>
        <h1>Flashcards</h1>
        <p>
          Chaque carte connue s'éloigne dans le temps (1, 3, 7, 16 jours...), chaque carte
          hésitante revient tout de suite. Reviens régulièrement : seules les cartes dues
          aujourd'hui te sont proposées.
        </p>
      </header>

      <div className="flashcard-deck-tabs" role="group" aria-label="Choisir un paquet">
        {Object.entries(PAQUETS).map(([cle, p]) => (
          <button
            key={cle}
            className={`flashcard-deck-tab${paquet === cle ? " flashcard-deck-tab--active" : ""}`}
            onClick={() => changerPaquet(cle)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="glossary-filters" role="group" aria-label="Filtrer par thème" style={{ marginBottom: "1.5rem" }}>
        <button
          className={`glossary-chip${categorie === "toutes" ? " glossary-chip--active" : ""}`}
          onClick={() => changerCategorie("toutes")}
        >
          Toutes ({config.data.length})
        </button>
        {Object.entries(config.categories).map(([cle, label]) => (
          <button
            key={cle}
            className={`glossary-chip${categorie === cle ? " glossary-chip--active" : ""}`}
            onClick={() => changerCategorie(cle)}
          >
            {label} ({config.data.filter((c) => c.categorie === cle).length})
          </button>
        ))}
      </div>

      <div className="flashcard-progress" aria-label="Progression">
        <div className="flashcard-progress__bar"><div style={{ width: `${totalFiltre === 0 ? 0 : Math.round((maitrisees / totalFiltre) * 100)}%` }} /></div>
        <span>{maitrisees} / {totalFiltre} en boîte maîtrisée</span>
      </div>

      {!carte ? (
        <div className="flashcard-done">
          {dueInitial === 0 ? (
            <>
              <h2>Rien à réviser pour l'instant</h2>
              <p>Aucune carte n'est due aujourd'hui sur ce thème — reviens plus tard, ou révise en avance.</p>
            </>
          ) : (
            <>
              <h2>Session terminée !</h2>
              <p>Tu as revu {dueInitial} carte{dueInitial > 1 ? "s" : ""} sur ce thème pour aujourd'hui.</p>
            </>
          )}
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="home-button home-button--secondary" onClick={reviserEnAvance}>Réviser quand même</button>
            <button className="home-button home-button--primary" onClick={reinitialiserPaquet}>Réinitialiser ce paquet</button>
          </div>
        </div>
      ) : (
        <>
          <div className="flashcard-stage">
            <button
              type="button"
              className={`flashcard${retournee ? " flashcard--retournee" : ""}`}
              onClick={() => setRetournee((r) => !r)}
              aria-label="Retourner la carte"
            >
              <div className="flashcard__inner">
                <div className="flashcard__face flashcard__face--recto">
                  <div className="flashcard__meta">
                    <span className={`glossary-card__tag glossary-card__tag--${carte.categorie}`}>
                      {config.categories[carte.categorie]}
                    </span>
                    <span className="flashcard__boite">Boîte {carteMeta.boite + 1}/5</span>
                  </div>
                  <strong>{carte.terme}</strong>
                  <small>Clique pour révéler la réponse</small>
                </div>
                <div className="flashcard__face flashcard__face--verso">
                  <p>{carte.definition}</p>
                </div>
              </div>
            </button>
          </div>

          {retournee && (
            <div className="flashcard-actions">
              <button className="flashcard-action flashcard-action--revoir" onClick={() => noter(false)}>
                ↻ À revoir bientôt
              </button>
              <button className="flashcard-action flashcard-action--su" onClick={() => noter(true)}>
                ✓ Je savais
              </button>
            </div>
          )}

          <p className="flashcard-remaining">
            {file.length} carte{file.length > 1 ? "s" : ""} restante{file.length > 1 ? "s" : ""}
            {modeAvance ? " (révision en avance, hors planning)" : " dans la session du jour"}.
          </p>
        </>
      )}

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Voir toutes les définitions</p>
          <h2>Besoin de parcourir le glossaire complet ?</h2>
        </div>
        <Link className="home-button home-button--primary" to="/glossaire">Ouvrir le glossaire</Link>
      </section>
    </div>
  );
}

export default Flashcards;
