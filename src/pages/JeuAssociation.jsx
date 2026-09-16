import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesGlossaire, glossaire } from "../data/glossaire";
import { enregistrerJeuTermine } from "../utils/progression";

const NIVEAUX = [
  { paires: 6, label: "Facile · 6 paires" },
  { paires: 8, label: "Moyen · 8 paires" },
  { paires: 10, label: "Difficile · 10 paires" },
];

function melanger(tableau) {
  const copie = [...tableau];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

function cleMeilleurTemps(categorie, paires) {
  return `jeu-association-record::${categorie}::${paires}`;
}

function chargerRecord(categorie, paires) {
  try {
    const brut = localStorage.getItem(cleMeilleurTemps(categorie, paires));
    return brut ? Number(brut) : null;
  } catch {
    return null;
  }
}

function sauvegarderRecord(categorie, paires, temps) {
  try {
    localStorage.setItem(cleMeilleurTemps(categorie, paires), String(temps));
  } catch {
    // stockage indisponible : le record ne sera pas conservé
  }
}

function genererCartes(categorie, nombrePaires) {
  const pool = categorie === "toutes" ? glossaire : glossaire.filter((m) => m.categorie === categorie);
  const choisis = melanger(pool).slice(0, nombrePaires);
  const cartes = [];
  choisis.forEach((mot, i) => {
    cartes.push({ id: `${i}-terme`, paireId: i, type: "terme", contenu: mot.terme });
    cartes.push({ id: `${i}-definition`, paireId: i, type: "definition", contenu: mot.definition });
  });
  return melanger(cartes);
}

function formaterTemps(ms) {
  const secondes = Math.floor(ms / 1000);
  const min = Math.floor(secondes / 60);
  const sec = String(secondes % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function JeuAssociation() {
  const [categorie, setCategorie] = useState("toutes");
  const [niveau, setNiveau] = useState(6);
  const [cartes, setCartes] = useState(null);
  const [revelees, setRevelees] = useState([]);
  const [trouvees, setTrouvees] = useState(new Set());
  const [erreurs, setErreurs] = useState(0);
  const [debut, setDebut] = useState(null);
  const [tempsEcoule, setTempsEcoule] = useState(0);
  const [termine, setTermine] = useState(false);
  const [record, setRecord] = useState(() => chargerRecord("toutes", 6));
  const [bloque, setBloque] = useState(false);
  const enregistreRef = useRef(false);

  useEffect(() => {
    if (!debut || termine) return undefined;
    const interval = setInterval(() => setTempsEcoule(Date.now() - debut), 200);
    return () => clearInterval(interval);
  }, [debut, termine]);

  function demarrer(nouvelleCategorie = categorie, nouveauNiveau = niveau) {
    setCategorie(nouvelleCategorie);
    setNiveau(nouveauNiveau);
    setCartes(genererCartes(nouvelleCategorie, nouveauNiveau));
    setRevelees([]);
    setTrouvees(new Set());
    setErreurs(0);
    setTermine(false);
    setTempsEcoule(0);
    setDebut(Date.now());
    setRecord(chargerRecord(nouvelleCategorie, nouveauNiveau));
    setBloque(false);
    enregistreRef.current = false;
  }

  function retournerCarte(index) {
    if (bloque || termine) return;
    const carte = cartes[index];
    if (revelees.includes(index) || trouvees.has(carte.paireId)) return;
    if (revelees.length === 2) return;

    const nouvellesRevelees = [...revelees, index];
    setRevelees(nouvellesRevelees);

    if (nouvellesRevelees.length === 2) {
      const [i1, i2] = nouvellesRevelees;
      const c1 = cartes[i1];
      const c2 = cartes[i2];
      const correspond = c1.paireId === c2.paireId && c1.type !== c2.type;

      if (correspond) {
        const nouvellesTrouvees = new Set(trouvees);
        nouvellesTrouvees.add(c1.paireId);
        setTrouvees(nouvellesTrouvees);
        setRevelees([]);

        if (nouvellesTrouvees.size === niveau && !enregistreRef.current) {
          enregistreRef.current = true;
          const tempsFinal = Date.now() - debut;
          setTermine(true);
          setTempsEcoule(tempsFinal);
          const meilleur = chargerRecord(categorie, niveau);
          if (meilleur === null || tempsFinal < meilleur) {
            sauvegarderRecord(categorie, niveau, tempsFinal);
            setRecord(tempsFinal);
          }
          enregistrerJeuTermine(erreurs === 0);
        }
      } else {
        setErreurs((e) => e + 1);
        setBloque(true);
        setTimeout(() => {
          setRevelees([]);
          setBloque(false);
        }, 800);
      }
    }
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Mémorisation ludique · chronométré</p>
        <h1>Jeu d'association</h1>
        <p>
          Retrouve les paires terme / définition le plus vite possible et avec le moins d'erreurs.
          Même contenu que le glossaire, sous une forme plus rapide et plus fun.
        </p>
      </header>

      {!cartes || termine ? (
        <div className="jeu-configuration">
          {termine && (
            <div className="jeu-resultat">
              <h2>Partie terminée !</h2>
              <div className="stats-row">
                <div className="stat-tile"><dt>{formaterTemps(tempsEcoule)}</dt><dd>temps</dd></div>
                <div className="stat-tile"><dt>{erreurs}</dt><dd>erreur{erreurs > 1 ? "s" : ""}</dd></div>
                <div className="stat-tile"><dt>{record !== null ? formaterTemps(record) : "—"}</dt><dd>meilleur temps</dd></div>
              </div>
            </div>
          )}

          <h2 style={{ marginTop: termine ? "2rem" : 0 }}>Choisis un thème et une difficulté</h2>
          <div className="glossary-filters" role="group" aria-label="Choisir un thème" style={{ marginBottom: "1.25rem" }}>
            <button
              className={`glossary-chip${categorie === "toutes" ? " glossary-chip--active" : ""}`}
              onClick={() => setCategorie("toutes")}
            >
              Toutes
            </button>
            {Object.entries(categoriesGlossaire).map(([cle, label]) => (
              <button
                key={cle}
                className={`glossary-chip${categorie === cle ? " glossary-chip--active" : ""}`}
                onClick={() => setCategorie(cle)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="glossary-filters" role="group" aria-label="Choisir une difficulté" style={{ marginBottom: "1.75rem" }}>
            {NIVEAUX.map((n) => (
              <button
                key={n.paires}
                className={`glossary-chip${niveau === n.paires ? " glossary-chip--active" : ""}`}
                onClick={() => setNiveau(n.paires)}
              >
                {n.label}
              </button>
            ))}
          </div>

          <button className="home-button home-button--primary" onClick={() => demarrer()}>
            {termine ? "Rejouer" : "Démarrer la partie"} <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : (
        <>
          <div className="jeu-barre">
            <span className="jeu-chrono">⏱ {formaterTemps(tempsEcoule)}</span>
            <span>{trouvees.size} / {niveau} paires trouvées</span>
            <span>{erreurs} erreur{erreurs > 1 ? "s" : ""}</span>
            {record !== null && <span className="jeu-record">🏅 record : {formaterTemps(record)}</span>}
          </div>

          <div className="memory-grid" style={{ "--colonnes": niveau <= 6 ? 4 : niveau <= 8 ? 4 : 5 }}>
            {cartes.map((carte, index) => {
              const estRevelee = revelees.includes(index);
              const estTrouvee = trouvees.has(carte.paireId);
              return (
                <button
                  key={carte.id}
                  className={`memory-card${estRevelee || estTrouvee ? " memory-card--revele" : ""}${estTrouvee ? " memory-card--trouve" : ""}`}
                  onClick={() => retournerCarte(index)}
                  disabled={estTrouvee}
                >
                  {estRevelee || estTrouvee ? carte.contenu : "?"}
                </button>
              );
            })}
          </div>
        </>
      )}

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Préférer un format plus posé ?</p>
          <h2>Retourne aux flashcards avec révision espacée.</h2>
        </div>
        <Link className="home-button home-button--primary" to="/flashcards">Ouvrir les flashcards</Link>
      </section>
    </div>
  );
}

export default JeuAssociation;
