import { Link } from "react-router-dom";

function Methodologie() {
  return (
    <div className="learning-page method-hub">
      <header className="learning-hero">
        <p className="home-eyebrow">Apprendre une méthode, puis l’automatiser</p>
        <h1>Deux épreuves, deux stratégies.</h1>
        <p>
          Le QCM demande de décider vite et avec précision. Le cas pratique demande
          de sélectionner, organiser et rédiger. Choisissez la méthode à travailler.
        </p>
      </header>

      <section className="method-choice-grid" aria-label="Choisir une méthodologie">
        <Link className="method-choice method-choice--case" to="/methodologie/cas-pratique">
          <span className="method-choice__tag">Épreuve d’admissibilité</span>
          <h2>Méthode du cas pratique</h2>
          <p>Les 13 points de la méthode complète : commande, dossier, synthèse, supports, style et relecture.</p>
          <ul><li>3 heures · coefficient 2</li><li>13 chapitres de référence</li><li>Modèles et grille finale</li></ul>
          <strong>Étudier la méthode <span aria-hidden="true">→</span></strong>
        </Link>

        <Link className="method-choice method-choice--qcm" to="/methodologie/qcm">
          <span className="method-choice__tag">Épreuve de préadmissibilité</span>
          <h2>Méthode du QCM</h2>
          <p>Une stratégie en trois passages pour sécuriser les réponses sûres, gérer les hésitations et préserver le contrôle.</p>
          <ul><li>1 h 30 · coefficient 1</li><li>Repères S / I / X</li><li>Plan d’entraînement progressif</li></ul>
          <strong>Étudier la méthode <span aria-hidden="true">→</span></strong>
        </Link>
      </section>

      <section className="learning-routine" aria-labelledby="routine-title">
        <div><p className="home-eyebrow">Routine recommandée</p><h2 id="routine-title">Une séance utile en 45 minutes</h2></div>
        <ol><li><span>10 min</span><strong>Relire une règle de méthode</strong></li><li><span>25 min</span><strong>L’appliquer sur un exercice</strong></li><li><span>10 min</span><strong>Corriger et noter l’erreur</strong></li></ol>
      </section>
    </div>
  );
}

export default Methodologie;
