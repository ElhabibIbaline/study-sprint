import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesGlossaire, glossaire } from "../data/glossaire";

function melanger(tableau) {
  const copie = [...tableau];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

function nouveauPaquet(categorie) {
  const source = categorie === "toutes" ? glossaire : glossaire.filter((m) => m.categorie === categorie);
  return melanger(source);
}

function Flashcards() {
  const [categorie, setCategorie] = useState("toutes");
  const [paquet, setPaquet] = useState(() => nouveauPaquet("toutes"));
  const [total, setTotal] = useState(paquet.length);
  const [maitrisees, setMaitrisees] = useState(0);
  const [retournee, setRetournee] = useState(false);

  const carte = paquet[0];
  const progression = total === 0 ? 0 : Math.round((maitrisees / total) * 100);

  function changerCategorie(cle) {
    const frais = nouveauPaquet(cle);
    setCategorie(cle);
    setPaquet(frais);
    setTotal(frais.length);
    setMaitrisees(0);
    setRetournee(false);
  }

  function recommencer() {
    changerCategorie(categorie);
  }

  function jeSavais() {
    setPaquet((d) => d.slice(1));
    setMaitrisees((m) => m + 1);
    setRetournee(false);
  }

  function aRevoir() {
    setPaquet((d) => (d.length > 1 ? [...d.slice(1), d[0]] : d));
    setRetournee(false);
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Mémorisation active</p>
        <h1>Flashcards</h1>
        <p>
          Lis le terme, essaie de formuler sa définition dans ta tête, puis retourne la carte
          pour vérifier. Sois honnête : c'est ce qui rend la répétition utile.
        </p>
      </header>

      <div className="glossary-filters" role="group" aria-label="Choisir un thème" style={{ marginBottom: "1.5rem" }}>
        <button
          className={`glossary-chip${categorie === "toutes" ? " glossary-chip--active" : ""}`}
          onClick={() => changerCategorie("toutes")}
        >
          Toutes ({glossaire.length})
        </button>
        {Object.entries(categoriesGlossaire).map(([cle, label]) => (
          <button
            key={cle}
            className={`glossary-chip${categorie === cle ? " glossary-chip--active" : ""}`}
            onClick={() => changerCategorie(cle)}
          >
            {label} ({glossaire.filter((m) => m.categorie === cle).length})
          </button>
        ))}
      </div>

      <div className="flashcard-progress" aria-label="Progression">
        <div className="flashcard-progress__bar"><div style={{ width: `${progression}%` }} /></div>
        <span>{maitrisees} / {total} maîtrisées</span>
      </div>

      {!carte ? (
        <div className="flashcard-done">
          <h2>Paquet terminé !</h2>
          <p>Tu as révisé les {total} termes de ce thème.</p>
          <button className="home-button home-button--primary" onClick={recommencer}>Recommencer ce paquet</button>
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
                  <span className={`glossary-card__tag glossary-card__tag--${carte.categorie}`}>
                    {categoriesGlossaire[carte.categorie]}
                  </span>
                  <strong>{carte.terme}</strong>
                  <small>Clique pour révéler la définition</small>
                </div>
                <div className="flashcard__face flashcard__face--verso">
                  <p>{carte.definition}</p>
                </div>
              </div>
            </button>
          </div>

          {retournee && (
            <div className="flashcard-actions">
              <button className="flashcard-action flashcard-action--revoir" onClick={aRevoir}>
                ↻ À revoir
              </button>
              <button className="flashcard-action flashcard-action--su" onClick={jeSavais}>
                ✓ Je savais
              </button>
            </div>
          )}

          <p className="flashcard-remaining">{paquet.length} carte{paquet.length > 1 ? "s" : ""} restante{paquet.length > 1 ? "s" : ""} dans ce passage.</p>
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
