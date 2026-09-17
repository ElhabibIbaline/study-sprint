import { Link } from "react-router-dom";
import { cartesMentales } from "../data/cartesMentales";

function CartesMentales() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Synthèse visuelle</p>
        <h1>Cartes mentales</h1>
        <p>
          Trois vues d'ensemble pour réviser d'un coup d'œil : le concours, le QCM et le cas
          pratique. Chaque carte condense en quelques branches ce qui est développé en détail
          ailleurs sur le site.
        </p>
      </header>

      {cartesMentales.map((carte) => (
        <section className="mindmap" key={carte.id} aria-label={carte.titre}>
          <h2 className="mindmap__titre">{carte.titre}</h2>
          <div className="mindmap__hub">{carte.hub}</div>
          <div className="mindmap__connector" aria-hidden="true">↓</div>
          <div className="mindmap__branches">
            {carte.branches.map((branche) => (
              <div className={`mindmap__branch mindmap__branch--${branche.couleur}`} key={branche.titre}>
                <strong>{branche.titre}</strong>
                <ul>
                  {branche.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="article-cta" style={{ marginTop: "1rem" }}>
        <div>
          <p className="home-eyebrow">Aller plus loin sur chaque branche</p>
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
