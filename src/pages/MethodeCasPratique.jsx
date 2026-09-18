import { Link } from "react-router-dom";

const chapitres = [
  ["attentes", "1. Ce que le correcteur évalue"], ["etapes", "2. Les cinq étapes"],
  ["temps", "3. Gérer les trois heures"], ["questions", "4. Questions courtes"],
  ["synthese", "5. Réussir la synthèse"], ["support", "6. Support de communication"],
  ["calculs", "7. Calculs et graphiques"], ["style", "8. Style administratif"],
  ["langue", "9. Maîtriser la langue"], ["copie", "10. Présenter la copie"],
  ["erreurs", "11. Erreurs coûteuses"], ["astuces", "12. Astuces utiles"],
  ["controle", "13. Contrôle final"],
];

function allerVersSection(event, id) {
  event.preventDefault();
  const cible = document.getElementById(id);
  if (cible) cible.scrollIntoView({ behavior: "smooth", block: "start" });
}

function MethodeCasPratique() {
  return (
    <div className="learning-page">
      <Link className="back-link" to="/methodologie">← Toutes les méthodologies</Link>
      <header className="learning-hero learning-hero--method">
        <div><p className="home-eyebrow">Méthode complète · 13 points</p><h1>Réussir le cas pratique</h1><p>Comprendre la commande, exploiter le dossier et produire une copie complète, claire et professionnelle.</p></div>
        <dl className="exam-facts"><div><dt>3 h</dt><dd>durée</dd></div><div><dt>2</dt><dd>coefficient</dd></div><div><dt>13</dt><dd>chapitres</dd></div></dl>
      </header>

      <div className="method-layout">
        <nav className="method-toc" aria-label="Sommaire du cas pratique"><span>Sommaire</span>{chapitres.map(([id, titre]) => <a key={id} href={`#${id}`} onClick={(e) => allerVersSection(e, id)}>{titre}</a>)}</nav>
        <article className="method-content">
          <section className="lesson-section" id="attentes">
            <span className="lesson-number">01</span><h2>Ce que le correcteur évalue</h2>
            <p>Six qualités rapportent des points : comprendre exactement la consigne, sélectionner l’information utile, reformuler, structurer, écrire correctement et terminer l’ensemble du sujet.</p>
            <div className="method-rule"><strong>Règle essentielle</strong><p>La consigne commande tout : action, quantité, format, destinataire, longueur et sources à utiliser.</p></div>
          </section>

          <section className="lesson-section" id="etapes">
            <span className="lesson-number">02</span><h2>Les cinq étapes de la méthode</h2>
            <ol className="step-list">
              <li><strong>Lire toutes les questions.</strong><p>Encadrez le verbe de commande, le nombre d’éléments, le format, la longueur et le destinataire.</p></li>
              <li><strong>Créer une grille de travail.</strong><p>Pour chaque question, notez le travail demandé et les informations à rechercher.</p></li>
              <li><strong>Lire activement le dossier.</strong><p>Repérez constats, causes, conséquences, avantages, risques, solutions, acteurs et chiffres.</p></li>
              <li><strong>Construire au brouillon.</strong><p>Préparez seulement le plan, les titres, les mots-clés et les chiffres utiles.</p></li>
              <li><strong>Rédiger puis contrôler.</strong><p>Après chaque partie, vérifiez contenu, format, longueur et clarté.</p></li>
            </ol>
          </section>

          <section className="lesson-section" id="temps">
            <span className="lesson-number">03</span><h2>Gérer les trois heures</h2>
            <div className="time-grid"><div><strong>10 min</strong><span>Questions et grille</span></div><div><strong>30 min</strong><span>Lecture active</span></div><div><strong>40–45 min</strong><span>Réponses courtes</span></div><div><strong>45–50 min</strong><span>Rédaction longue</span></div><div><strong>30–35 min</strong><span>Support demandé</span></div><div><strong>10–15 min</strong><span>Relecture</span></div></div>
            <div className="method-warning"><strong>Règle de sécurité</strong><p>Fixez une heure limite à chaque partie. Une réponse simple et complète vaut mieux qu’une partie parfaite suivie d’une page blanche.</p></div>
          </section>

          <section className="lesson-section" id="questions">
            <span className="lesson-number">04</span><h2>Répondre aux questions courtes</h2>
            <p>Commencez par la réponse, puis donnez l’explication et une preuve tirée du dossier. Si trois éléments sont demandés, rendez-les visibles : premièrement, deuxièmement, enfin.</p>
            <div className="example-box"><span>Structure gagnante</span><p><strong>Réponse directe → explication → preuve du dossier → conclusion utile.</strong></p></div>
            <p>Évitez la longue introduction, la copie d’un paragraphe, le résumé document par document, l’opinion personnelle et les informations extérieures.</p>
          </section>

          <section className="lesson-section" id="synthese">
            <span className="lesson-number">05</span><h2>Réussir la synthèse : y a-t-il un plan type ?</h2>
            <p>Oui : il n'existe pas un plan unique imposé, mais quatre familles de plans couvrent la quasi-totalité des sujets. Le bon choix dépend du verbe et de la logique de la consigne, jamais du hasard.</p>

            <ol className="step-list">
              <li><strong>1. Reformuler la consigne en une question.</strong><p>« Présentez les enjeux et les réponses apportées » devient : « Quels sont les enjeux de X, et comment y répond-on ? ». Cette question guide tout le plan.</p></li>
              <li><strong>2. Trier les documents par idée, jamais par numéro.</strong><p>Sur un brouillon, listez 4 à 6 idées-clés et notez sous chacune les documents qui l'alimentent, avec un mot-clé ou un chiffre précis.</p></li>
              <li><strong>3. Choisir le plan qui correspond à la logique du sujet.</strong><p>Voir les quatre plans types ci-dessous : un seul suffit presque toujours.</p></li>
              <li><strong>4. Rédiger une introduction courte.</strong><p>Une phrase d'accroche factuelle (un chiffre ou un constat du dossier), la question posée, puis l'annonce des 2 ou 3 parties.</p></li>
              <li><strong>5. Rédiger le développement, un paragraphe = une idée.</strong><p>Chaque paragraphe suit la même mécanique : l'idée en une phrase → un argument ou une explication → une preuve chiffrée ou citée du dossier.</p></li>
              <li><strong>6. Conclure sans idée nouvelle.</strong><p>Une ou deux phrases qui répondent explicitement à la question posée en introduction — rien de plus.</p></li>
            </ol>

            <div className="method-rule"><strong>Les 4 plans types</strong><p>Identifiez lequel correspond à votre sujet avant d'écrire la moindre ligne.</p></div>
            <div className="plan-grid">
              <div><strong>Constat / réponses</strong><span>Sujet « Quels problèmes, quelles solutions ? » — la situation et ses difficultés, puis les réponses apportées.</span></div>
              <div><strong>Avantages / limites</strong><span>Sujet « Faut-il... ? », « Quel bilan ? » — les apports d'une mesure, puis ses risques ou ses limites.</span></div>
              <div><strong>Causes / conséquences</strong><span>Sujet « Pourquoi... ? », « Quels effets ? » — les facteurs explicatifs, puis leurs effets concrets.</span></div>
              <div><strong>Situation / perspectives</strong><span>Sujet « Où en est-on ? », « Quelle évolution ? » — l'état actuel, puis les adaptations à venir.</span></div>
            </div>

            <div className="example-box">
              <span>Voir un exemple complet</span>
              <p>Une synthèse entièrement rédigée, avec son plan et son corrigé indicatif, est disponible dans l'<Link to="/cas-pratique">exercice de cas pratique</Link>.</p>
            </div>
          </section>

          <section className="lesson-section" id="support">
            <span className="lesson-number">06</span><h2>Réussir un support de communication : quel plan pour quel format ?</h2>
            <p className="official-note" style={{ textAlign: "left" }}>
              Le texte officiel mentionne cette épreuve « le cas échéant » — elle est un peu moins
              systématique que la synthèse, mais reste apparue dans la plupart des sessions
              récentes. Détail sur <Link to="/concours">la page Concours</Link>. Prépare-la comme
              si elle allait tomber.
            </p>
            <p>Contrairement à la synthèse, un support de communication ne se construit pas en parties argumentées : il suit un gabarit fixe, propre à son format. Commencez toujours par identifier qui parle, à qui, dans quel but, avec quelles informations et pour quelle action attendue.</p>

            <div className="plan-grid">
              <div><strong>Courriel</strong><span>Objet → formule d'appel → contexte en une phrase → informations classées (puces si possible) → action ou délai attendu → formule de politesse.</span></div>
              <div><strong>Fiche informative</strong><span>Titre → objectif en une phrase → public visé → étapes numérotées → délais et précautions → contact utile.</span></div>
              <div><strong>Note de service</strong><span>Objet → rappel bref du contexte → consigne(s) précise(s) → date d'application → signataire.</span></div>
              <div><strong>Support visuel (affiche, encart)</strong><span>Titre accrocheur et court → message clé unique → 2-3 chiffres ou repères → coordonnées ou renvoi pour en savoir plus.</span></div>
            </div>

            <ul className="check-list">
              <li>Une idée par ligne ou par puce : jamais de paragraphe dense dans un support.</li>
              <li>Le ton reste neutre et factuel, même dans un format court.</li>
              <li>L'action attendue du lecteur doit être explicite et non déductible.</li>
            </ul>
            <div className="method-rule"><strong>Action ≠ indicateur</strong><p>Une action décrit ce que le service fait. Un indicateur décrit ce qui sera mesuré.</p></div>

            <div className="example-box">
              <span>Voir un exemple complet</span>
              <p>Un courriel type entièrement rédigé, avec son corrigé indicatif, est disponible dans l'<Link to="/cas-pratique">exercice de cas pratique</Link>.</p>
            </div>
          </section>

          <section className="lesson-section" id="calculs">
            <span className="lesson-number">07</span><h2>Calculs, tableaux et graphiques</h2>
            <p>Présentez toujours l’opération, le résultat, l’unité et une phrase d’interprétation. Un taux passant de 20 % à 25 % gagne 5 points, mais augmente relativement de 25 %.</p>
            <ul className="check-list"><li><strong>Courbe :</strong> évolution dans le temps.</li><li><strong>Barres :</strong> comparaison de catégories.</li><li><strong>Diagramme circulaire :</strong> répartition d’un total.</li></ul>
            <p>Un graphique complet comporte un titre, des axes, des unités, une échelle régulière, des valeurs lisibles et une légende si nécessaire.</p>
          </section>

          <section className="lesson-section" id="style">
            <span className="lesson-number">08</span><h2>Adopter le style administratif</h2>
            <p>Restez neutre, précis, sobre et compréhensible dès la première lecture. Écrivez une idée par phrase et employez des verbes précis : permet, entraîne, favorise, limite, prévoit ou nécessite.</p>
            <div className="do-dont"><div><strong>À préférer</strong><p>« Trois difficultés apparaissent… »<br />« Toutefois… »<br />« Par conséquent… »</p></div><div><strong>À éviter</strong><p>« Je trouve que… »<br />« Énormément de personnes… »<br />« Comme tout le monde le sait… »</p></div></div>
          </section>

          <section className="lesson-section" id="langue">
            <span className="lesson-number">09</span><h2>Maîtriser la langue</h2>
            <p>Surveillez l’infinitif après « il faut », les accords, les pluriels et les homophones a/à, et/est, ces/ses, ou/où, son/sont, ce/se.</p>
            <div className="method-rule"><strong>Relecture en deux passages</strong><p>Relisez une première fois uniquement les verbes, puis une deuxième fois les pluriels et les accords.</p></div>
          </section>

          <section className="lesson-section" id="copie">
            <span className="lesson-number">10</span><h2>Présenter une copie professionnelle</h2>
            <p>Numérotez exactement les questions, rendez les titres visibles, aérez les paragraphes et évitez les surcharges. Respectez les consignes matérielles du jour.</p>
            <div className="method-warning"><strong>Anonymat absolu</strong><p>N’ajoutez aucun nom, initiale, adresse, localisation ou signature, même fictifs, si la consigne ne le demande pas.</p></div>
          </section>

          <section className="lesson-section" id="erreurs">
            <span className="lesson-number">11</span><h2>Éviter les erreurs coûteuses</h2>
            <div className="error-table"><div><strong>Consigne survolée</strong><span>Encadrer verbe, quantité, format et destinataire.</span></div><div><strong>Sous-question oubliée</strong><span>Transformer la commande en liste à cocher.</span></div><div><strong>Documents séparés</strong><span>Regrouper les informations par idées.</span></div><div><strong>Phrases copiées</strong><span>Noter des mots-clés puis reformuler.</span></div><div><strong>Temps mal réparti</strong><span>Fixer une heure limite par partie.</span></div><div><strong>Pas de relecture</strong><span>Préserver au moins dix minutes.</span></div></div>
          </section>

          <section className="lesson-section" id="astuces">
            <span className="lesson-number">12</span><h2>Les astuces qui rapportent des points</h2>
            <ol className="compact-tips"><li>Écrire la commande au brouillon : destinataire, quantité, format, longueur.</li><li>Choisir deux ou trois chiffres précis plutôt qu’une accumulation.</li><li>Rendre le raisonnement visible avec titres, paragraphes et connecteurs.</li><li>Reformuler en notant des mots-clés, puis en fermant le document.</li><li>Commencer chaque réponse par l’idée attendue.</li><li>Toujours terminer, même avec des phrases plus simples.</li></ol>
          </section>

          <section className="lesson-section lesson-section--final" id="controle">
            <span className="lesson-number">13</span><h2>La grille de contrôle finale</h2>
            <div className="final-checks"><div><strong>Consignes</strong><label><input type="checkbox" /> Toutes les questions sont traitées.</label><label><input type="checkbox" /> Format, destinataire et longueur sont respectés.</label></div><div><strong>Contenu</strong><label><input type="checkbox" /> Les idées viennent du dossier.</label><label><input type="checkbox" /> Les chiffres sont exacts et croisés.</label></div><div><strong>Structure</strong><label><input type="checkbox" /> Le plan est visible et équilibré.</label><label><input type="checkbox" /> Chaque paragraphe porte une idée.</label></div><div><strong>Langue et copie</strong><label><input type="checkbox" /> Verbes, accords et pluriels sont vérifiés.</label><label><input type="checkbox" /> La copie est lisible et anonyme.</label></div></div>
            <div className="method-mantra">Commande <span>→</span> tri <span>→</span> plan <span>→</span> rédaction <span>→</span> relecture</div>
            <Link className="home-button home-button--primary lesson-action" to="/cas-pratique">S'entraîner sur un cas pratique complet</Link>
          </section>

          <p className="official-note">Méthode alignée sur le format 2026. <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032409140/2026-05-23" target="_blank" rel="noreferrer">Consulter le texte officiel</a>.</p>
        </article>
      </div>
    </div>
  );
}

export default MethodeCasPratique;
