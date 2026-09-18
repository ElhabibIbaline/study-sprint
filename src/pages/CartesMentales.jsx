import { Link } from "react-router-dom";
import { cartesMentales } from "../data/cartesMentales";

function CartesMentales() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Synthèse visuelle</p>
        <h1>Cartes mentales</h1>
        <p>
          Six vues d'ensemble pour réviser d'un coup d'œil. Chaque branche est cliquable et
          t'emmène directement pratiquer ou approfondir le sujet.
        </p>
      </header>

      {cartesMentales.map((carte) => (
        <section className="mindmap" key={carte.id} aria-label={carte.titre}>
          <h2 className="mindmap__titre">{carte.titre}</h2>
          <div className="mindmap__hub">{carte.hub}</div>
          <div className="mindmap__connector" aria-hidden="true">↓</div>
          <div className="mindmap__branches">
            {carte.branches.map((branche) => (
              <Link
                to={branche.lien}
                className={`mindmap__branch mindmap__branch--${branche.couleur}`}
                key={branche.titre}
              >
                <span className="mindmap__branch__icone" aria-hidden="true">{branche.icone}</span>
                <strong>{branche.titre}</strong>
                <ul>
                  {branche.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <span className="mindmap__branch__arrow" aria-hidden="true">Pratiquer →</span>
              </Link>
            ))}
          </div>
          {carte.cta && (
            <div className="mindmap__cta">
              <Link className="home-button home-button--primary" to={carte.cta.lien}>
                {carte.cta.texte} <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </section>
      ))}

      <section className="article-cta" style={{ marginTop: "1rem" }}>
        <div>
          <p className="home-eyebrow">Une idée de carte en plus ?</p>
          <h2>Astuces détaillées, glossaire et méthodologie complète.</h2>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="home-button home-button--light" to="/astuces">Astuces & règles</Link>
          <Link className="home-button home-button--primary" to="/methodologie">Méthodologie</Link>
        </div>
      </section>
    </div>
  );
}

export default CartesMentales;
