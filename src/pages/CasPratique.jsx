import { Link } from "react-router-dom";
import { casPratiques } from "../data/casPratique";

function CasPratique() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">S'entraîner en conditions réelles</p>
        <h1>Cas pratiques</h1>
        <p>
          Des sujets complets — dossier documentaire, questions et corrigés indicatifs — pour
          appliquer la méthode du cas pratique sur un exercice entier, du début à la fin.
        </p>
      </header>

      <div className="hub-grid">
        {Object.entries(casPratiques).map(([cle, cas]) => (
          <Link key={cle} to={`/cas-pratique/${cle}`} className="hub-card">
            <div><strong>{cas.titre}</strong><p>{cas.documents.length} documents · {cas.questions.length} questions · {cas.duree}</p></div>
            <span className="hub-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Revoir la méthode d'abord</p>
          <h2>Pas encore à l'aise avec la méthode du cas pratique ?</h2>
        </div>
        <Link className="home-button home-button--primary" to="/methodologie/cas-pratique">
          Revoir la méthode
        </Link>
      </section>
    </div>
  );
}

export default CasPratique;
