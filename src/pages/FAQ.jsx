import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesFaq, faq } from "../data/faq";

const TAG_CLASSE = {
  synthese: "glossary-card__tag--finances",
  support: "glossary-card__tag--fonctionPublique",
  general: "glossary-card__tag--institutions",
};

function FAQ() {
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("toutes");

  const questions = useMemo(() => {
    const texte = recherche.trim().toLowerCase();
    return faq
      .filter((q) => categorie === "toutes" || q.categorie === categorie)
      .filter(
        (q) =>
          texte === "" ||
          q.question.toLowerCase().includes(texte) ||
          q.reponse.toLowerCase().includes(texte),
      );
  }, [recherche, categorie]);

  return (
    <div className="learning-page glossary-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Les questions qui reviennent le plus souvent</p>
        <h1>FAQ — Note de synthèse, support de communication & cas pratique</h1>
        <p>
          Quel plan choisir pour la note de synthèse, quel format utiliser pour un support de
          communication, et les autres questions importantes sur le déroulement de l'épreuve.
          Clique sur une question pour voir la réponse.
        </p>
      </header>

      <div className="glossary-toolbar">
        <input
          type="search"
          className="glossary-search"
          placeholder="Rechercher une question…"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          aria-label="Rechercher dans la FAQ"
        />
        <div className="glossary-filters" role="group" aria-label="Filtrer par catégorie">
          <button
            className={`glossary-chip${categorie === "toutes" ? " glossary-chip--active" : ""}`}
            onClick={() => setCategorie("toutes")}
          >
            Toutes ({faq.length})
          </button>
          {Object.entries(categoriesFaq).map(([cle, label]) => (
            <button
              key={cle}
              className={`glossary-chip${categorie === cle ? " glossary-chip--active" : ""}`}
              onClick={() => setCategorie(cle)}
            >
              {label} ({faq.filter((q) => q.categorie === cle).length})
            </button>
          ))}
        </div>
      </div>

      {questions.length === 0 ? (
        <p className="glossary-empty">Aucune question ne correspond à ta recherche.</p>
      ) : (
        <div className="astuce-list">
          {questions.map((q) => (
            <details className="astuce-card" key={q.question}>
              <summary>
                <span className={`glossary-card__tag ${TAG_CLASSE[q.categorie]}`}>
                  {categoriesFaq[q.categorie]}
                </span>
                <strong>{q.question}</strong>
              </summary>
              <div className="astuce-card__body">
                <p>{q.reponse}</p>
              </div>
            </details>
          ))}
        </div>
      )}

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Passer à la pratique</p>
          <h2>Revois la méthode complète ou entraîne-toi sur un cas pratique entier.</h2>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="home-button home-button--light" to="/methodologie/cas-pratique">
            Revoir la méthode
          </Link>
          <Link className="home-button home-button--primary" to="/cas-pratique">
            S'entraîner sur un cas pratique
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
