import { useState } from "react";
import { Link } from "react-router-dom";
import { BADGES, calculerSerie, chargerProgression } from "../utils/progression";

function Progression() {
  const [etat, setEtat] = useState(chargerProgression);
  const serie = calculerSerie(etat);

  function reinitialiser() {
    if (!window.confirm("Réinitialiser toute ta progression (séries, badges, statistiques) ? Cette action est irréversible.")) {
      return;
    }
    try {
      localStorage.removeItem("progression-v1");
    } catch {
      // stockage indisponible, rien à effacer
    }
    setEtat(chargerProgression());
  }

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Ta progression</p>
        <h1>Séries et badges</h1>
        <p>Chaque quiz, annale ou session de flashcards fait avancer ta série et débloque des badges. Reviens régulièrement pour ne pas la casser.</p>
      </header>

      <div className="streak-banner">
        <span className="streak-banner__flame" aria-hidden="true">🔥</span>
        <div>
          <strong>{serie}</strong>
          <span>{serie > 1 ? "jours consécutifs" : "jour actif"}</span>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-tile"><dt>{etat.quizTermines}</dt><dd>quiz terminés</dd></div>
        <div className="stat-tile"><dt>{etat.quizParfaits}</dt><dd>quiz sans faute</dd></div>
        <div className="stat-tile"><dt>{etat.annalesTerminees.length} / 5</dt><dd>annales terminées</dd></div>
        <div className="stat-tile"><dt>{etat.flashcardsRevues}</dt><dd>flashcards révisées</dd></div>
        <div className="stat-tile"><dt>{etat.paquetsMaitrises.length} / 3</dt><dd>paquets maîtrisés</dd></div>
        <div className="stat-tile"><dt>{etat.sprintsTermines}</dt><dd>sprints joués</dd></div>
        <div className="stat-tile"><dt>{etat.meilleurScoreSprint}</dt><dd>meilleur score sprint</dd></div>
      </div>

      <h2 style={{ marginTop: "2.5rem" }}>Badges ({BADGES.filter((b) => b.condition(etat)).length} / {BADGES.length})</h2>
      <div className="badge-grid">
        {BADGES.map((badge) => {
          const debloque = badge.condition(etat);
          return (
            <div key={badge.id} className={`badge-card${debloque ? "" : " badge-card--verrouille"}`}>
              <span className="badge-card__icon" aria-hidden="true">{debloque ? "🏆" : "🔒"}</span>
              <strong>{badge.titre}</strong>
              <p>{badge.description}</p>
            </div>
          );
        })}
      </div>

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Continuer la série</p>
          <h2>Fais un quiz ou révise tes flashcards aujourd'hui.</h2>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="home-button home-button--primary" to="/sprint">Faire un sprint chrono</Link>
          <Link className="home-button home-button--light" to="/quiz">Faire un quiz</Link>
          <Link className="home-button home-button--light" to="/flashcards">Réviser des flashcards</Link>
        </div>
      </section>

      <button className="progression-reset" onClick={reinitialiser}>Réinitialiser ma progression</button>
    </div>
  );
}

export default Progression;
