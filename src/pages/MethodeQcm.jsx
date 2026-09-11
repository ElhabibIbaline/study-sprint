import { Link } from "react-router-dom";

function MethodeQcm() {
  return (
    <div className="learning-page">
      <Link className="back-link" to="/methodologie">← Toutes les méthodologies</Link>
      <header className="learning-hero learning-hero--method learning-hero--qcm">
        <div><p className="home-eyebrow">Décider vite, contrôler mieux</p><h1>Réussir le QCM</h1><p>Une stratégie pour sécuriser les connaissances, maîtriser l’incertitude et conserver dix minutes de vérification.</p></div>
        <dl className="exam-facts"><div><dt>1 h 30</dt><dd>durée</dd></div><div><dt>1</dt><dd>coefficient</dd></div><div><dt>3</dt><dd>passages</dd></div></dl>
      </header>

      <div className="method-layout">
        <nav className="method-toc" aria-label="Sommaire de la méthode QCM">
          <span>Sommaire</span><a href="#objectif-qcm">Ce qui est évalué</a><a href="#strategie-qcm">Les trois passages</a><a href="#temps-qcm">Chronomètre</a><a href="#doute-qcm">Gérer le doute</a><a href="#domaines-qcm">Méthode par domaine</a><a href="#pieges-qcm">Pièges fréquents</a><a href="#entrainement-qcm">Plan d’entraînement</a><a href="#controle-qcm">Contrôle final</a>
        </nav>

        <article className="method-content">
          <section className="lesson-section" id="objectif-qcm">
            <span className="lesson-number">01</span><h2>Ce qui est évalué</h2>
            <p>L’épreuve vérifie les connaissances de base en mathématiques et raisonnement logique, ainsi que les connaissances générales : histoire, géographie, enseignement moral et civique, numérique, actualité et missions des ministères économiques et financiers.</p>
            <div className="method-rule"><strong>Votre double objectif</strong><p>Trouver les réponses connues rapidement et empêcher les questions difficiles de voler du temps aux questions accessibles.</p></div>
          </section>

          <section className="lesson-section" id="strategie-qcm">
            <span className="lesson-number">02</span><h2>La stratégie des trois passages</h2>
            <ol className="step-list step-list--passes"><li><strong>Passage 1 — sécuriser.</strong><p>Répondez aux questions immédiatement maîtrisées. Marquez S et avancez dès qu’un blocage dépasse environ une minute.</p></li><li><strong>Passage 2 — raisonner.</strong><p>Revenez sur les réponses I. Éliminez les propositions impossibles, posez les calculs et recherchez le mot décisif.</p></li><li><strong>Passage 3 — arbitrer.</strong><p>Traitez les X selon la règle de notation annoncée, puis contrôlez quelques réponses S à risque.</p></li></ol>
          </section>

          <section className="lesson-section" id="temps-qcm">
            <span className="lesson-number">03</span><h2>Un chronomètre sur 90 minutes</h2>
            <div className="timeline"><div><span>0–5</span><strong>Lire les consignes</strong><small>Notation et grille</small></div><div><span>5–45</span><strong>Premier passage</strong><small>Réponses sûres</small></div><div><span>45–70</span><strong>Deuxième passage</strong><small>Questions incertaines</small></div><div><span>70–80</span><strong>Troisième passage</strong><small>Arbitrages</small></div><div><span>80–90</span><strong>Contrôle final</strong><small>Grille et erreurs</small></div></div>
            <p>Ces repères sont une base d’entraînement. Ajustez-les au nombre de questions indiqué le jour de l’épreuve.</p>
          </section>

          <section className="lesson-section" id="doute-qcm">
            <span className="lesson-number">04</span><h2>Gérer le doute avec S / I / X</h2>
            <div className="confidence-grid"><div><strong>S · Sûre</strong><p>Réponse connue ou démontrée. À contrôler si elle contient une date, un pourcentage ou une déduction.</p></div><div><strong>I · Incertaine</strong><p>Deux choix restent possibles. À reprendre au deuxième passage avec élimination.</p></div><div><strong>X · En attente</strong><p>Aucune piste fiable. À arbitrer seulement après avoir sécurisé le reste.</p></div></div>
            <div className="method-warning"><strong>La consigne de notation prime</strong><p>Lisez la règle concernant les mauvaises réponses et les abstentions avant de décider. Ne transposez jamais automatiquement le barème d’un entraînement.</p></div>
          </section>

          <section className="lesson-section" id="domaines-qcm">
            <span className="lesson-number">05</span><h2>Une méthode par domaine</h2>
            <div className="domain-grid"><div><strong>Mathématiques</strong><p>Écrivez l’opération, vérifiez l’unité et estimez l’ordre de grandeur.</p></div><div><strong>Logique</strong><p>Traduisez les relations et refusez les conclusions non prouvées.</p></div><div><strong>Histoire-géographie</strong><p>Associez chaque date à un événement et chaque institution à une mission.</p></div><div><strong>EMC et institutions</strong><p>Distinguez principe, compétence, territoire et hiérarchie des normes.</p></div><div><strong>Numérique</strong><p>Maîtrisez sécurité, données, usages et vocabulaire essentiel.</p></div><div><strong>Actualité et ministères</strong><p>Révisez par fiches : fait, date, acteur, mission et conséquence.</p></div></div>
          </section>

          <section className="lesson-section" id="pieges-qcm">
            <span className="lesson-number">06</span><h2>Neutraliser les pièges fréquents</h2>
            <ul className="check-list"><li>Lire les négations : « ne… pas », « sauf », « incorrect ».</li><li>Se méfier des mots absolus : toujours, jamais, uniquement, tous.</li><li>Calculer un pourcentage par rapport à la valeur de départ.</li><li>Distinguer hausse en points et hausse en pourcentage.</li><li>Ne pas conclure l’inverse d’une implication logique.</li><li>Contrôler le numéro de question avant de cocher.</li></ul>
          </section>

          <section className="lesson-section" id="entrainement-qcm">
            <span className="lesson-number">07</span><h2>Plan d’entraînement en quatre semaines</h2>
            <div className="week-grid"><div><span>Semaine 1</span><strong>Diagnostic</strong><p>Deux séries sans chronomètre. Classer chaque erreur par cause.</p></div><div><span>Semaine 2</span><strong>Précision</strong><p>Séries ciblées par matière et création de fiches-règles.</p></div><div><span>Semaine 3</span><strong>Vitesse</strong><p>Séries de 20 questions chronométrées avec S/I/X.</p></div><div><span>Semaine 4</span><strong>Simulation</strong><p>Épreuve complète, correction détaillée puis reprise des erreurs.</p></div></div>
            <div className="example-box"><span>Indicateur utile</span><p>Suivez séparément le score, le temps moyen par question et les erreurs commises sur des réponses marquées S.</p></div>
          </section>

          <section className="lesson-section lesson-section--final" id="controle-qcm">
            <span className="lesson-number">08</span><h2>Les dix dernières minutes</h2>
            <div className="final-checks"><div><strong>Grille</strong><label><input type="checkbox" /> Les réponses sont au bon numéro.</label><label><input type="checkbox" /> Aucun décalage de ligne.</label></div><div><strong>Calculs</strong><label><input type="checkbox" /> Unités, signes et pourcentages sont cohérents.</label><label><input type="checkbox" /> L’ordre de grandeur confirme le résultat.</label></div><div><strong>Confiance</strong><label><input type="checkbox" /> Les réponses I ont été arbitrées.</label><label><input type="checkbox" /> Quelques réponses S à risque sont contrôlées.</label></div><div><strong>Consignes</strong><label><input type="checkbox" /> La règle de notation est respectée.</label><label><input type="checkbox" /> La copie ne contient aucune marque interdite.</label></div></div>
            <Link className="home-button home-button--primary lesson-action" to="/quiz">Appliquer la méthode sur un quiz</Link>
          </section>

          <p className="official-note">Format vérifié pour le concours 2026. <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032409140/2026-05-23" target="_blank" rel="noreferrer">Consulter le texte officiel</a>.</p>
        </article>
      </div>
    </div>
  );
}

export default MethodeQcm;
