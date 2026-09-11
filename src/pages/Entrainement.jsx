import { Link } from "react-router-dom";
import { cours } from "../data/cours";

function Entrainement() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Renforcer mes bases</p>
        <h1>Entraînement</h1>
        <p>Des petits cours pour revoir les notions clés, avec des exercices corrigés pour t'entraîner.</p>
      </header>

      <div className="hub-grid">
        {Object.entries(cours).map(([cle, c]) => (
          <Link key={cle} to={`/entrainement/${cle}`} className="hub-card">
            <div><strong>{c.titre}</strong><p>{c.exercices.length} exercices</p></div>
            <span className="hub-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Entrainement;