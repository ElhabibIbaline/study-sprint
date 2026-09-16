import { useState } from "react";
import { Link } from "react-router-dom";
import { astuces, categoriesAstuces } from "../data/astuces";

function Astuces() {
  const [categorie, setCategorie] = useState("langue");
  const filtrees = astuces.filter((a) => a.categorie === categorie);

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Règles, exceptions et pièges récurrents</p>
        <h1>Astuces & règles</h1>
        <p>
          Certains pièges reviennent à chaque session, sous une forme différente. Chaque fiche
          présente la règle, son exception, et un exemple tiré des annales — clique pour la
          déplier.
        </p>
      </header>

      <div className="flashcard-deck-tabs" role="group" aria-label="Choisir une catégorie">
        {Object.entries(categoriesAstuces).map(([cle, label]) => (
          <button
            key={cle}
            className={`flashcard-deck-tab${categorie === cle ? " flashcard-deck-tab--active" : ""}`}
            onClick={() => setCategorie(cle)}
          >
            {label} ({astuces.filter((a) => a.categorie === cle).length})
          </button>
        ))}
      </div>

      <div className="astuce-list">
        {filtrees.map((a) => (
          <details className="astuce-card" key={a.titre}>
            <summary>
              <strong>{a.titre}</strong>
              {a.repere && <small>{a.repere}</small>}
            </summary>
            <div className="astuce-card__body">
              <div className="method-rule"><strong>La règle</strong><p>{a.regle}</p></div>
              <div className="method-warning"><strong>⚠️ L'exception</strong><p>{a.exception}</p></div>
              <div className="example-box"><span>Exemple</span><p>{a.exemple}</p></div>
            </div>
          </details>
        ))}
      </div>

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Passer à la pratique</p>
          <h2>Applique ces règles sur un quiz ou un sprint chrono.</h2>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="home-button home-button--light" to="/sprint">Sprint chrono</Link>
          <Link className="home-button home-button--primary" to="/quiz">Faire un quiz</Link>
        </div>
      </section>
    </div>
  );
}

export default Astuces;
