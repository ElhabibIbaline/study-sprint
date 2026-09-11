import { Link } from "react-router-dom";
import { annales } from "../data/annales";

function Annales() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Me mettre en condition</p>
        <h1>Annales corrigées</h1>
        <p>Entraîne-toi dans les conditions réelles du concours, avec une correction détaillée pour chaque question.</p>
      </header>

      <div className="hub-grid">
        {Object.entries(annales).map(([cle, annale]) => (
          <Link key={cle} to={`/annales/${cle}`} className="hub-card">
            <div><strong>{annale.titre}</strong><p>{annale.questions.length} questions</p></div>
            <span className="hub-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Annales;