import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesGlossaire, glossaire } from "../data/glossaire";

function Glossaire() {
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("toutes");

  const termes = useMemo(() => {
    const texte = recherche.trim().toLowerCase();
    return glossaire
      .filter((mot) => categorie === "toutes" || mot.categorie === categorie)
      .filter(
        (mot) =>
          texte === "" ||
          mot.terme.toLowerCase().includes(texte) ||
          mot.definition.toLowerCase().includes(texte),
      )
      .sort((a, b) => a.terme.localeCompare(b.terme, "fr"));
  }, [recherche, categorie]);

  return (
    <div className="learning-page glossary-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Vocabulaire du concours</p>
        <h1>Le glossaire administratif et fiscal.</h1>
        <p>
          {glossaire.length} termes utilisés dans les épreuves et dans le métier d'agent des
          finances publiques : fiscalité, finances publiques, statut de fonctionnaire et
          institutions.
        </p>
      </header>

      <div className="glossary-toolbar">
        <input
          type="search"
          className="glossary-search"
          placeholder="Rechercher un mot ou une définition…"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          aria-label="Rechercher dans le glossaire"
        />
        <div className="glossary-filters" role="group" aria-label="Filtrer par catégorie">
          <button
            className={`glossary-chip${categorie === "toutes" ? " glossary-chip--active" : ""}`}
            onClick={() => setCategorie("toutes")}
          >
            Toutes ({glossaire.length})
          </button>
          {Object.entries(categoriesGlossaire).map(([cle, label]) => (
            <button
              key={cle}
              className={`glossary-chip${categorie === cle ? " glossary-chip--active" : ""}`}
              onClick={() => setCategorie(cle)}
            >
              {label} ({glossaire.filter((m) => m.categorie === cle).length})
            </button>
          ))}
        </div>
      </div>

      {termes.length === 0 ? (
        <p className="glossary-empty">Aucun terme ne correspond à ta recherche.</p>
      ) : (
        <div className="glossary-grid">
          {termes.map((mot) => (
            <details className="glossary-card" key={mot.terme}>
              <summary>
                <span className={`glossary-card__tag glossary-card__tag--${mot.categorie}`}>
                  {categoriesGlossaire[mot.categorie]}
                </span>
                <strong>{mot.terme}</strong>
              </summary>
              <p>{mot.definition}</p>
            </details>
          ))}
        </div>
      )}

      <section className="article-cta">
        <div>
          <p className="home-eyebrow">Mémoriser le vocabulaire</p>
          <h2>Flashcards, jeu d'association ou quiz : à toi de choisir.</h2>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="home-button home-button--light" to="/flashcards">
            Réviser en flashcards
          </Link>
          <Link className="home-button home-button--light" to="/jeu-association">
            Jouer au jeu d'association
          </Link>
          <Link className="home-button home-button--primary" to="/quiz/vocabulaire">
            Faire le quiz vocabulaire
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Glossaire;
