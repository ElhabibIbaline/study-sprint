import { Link } from "react-router-dom";

const chapitres = [
  ["lire-tableau", "1. Lire un tableau"],
  ["types-graphiques", "2. Les types de graphiques"],
  ["commenter", "3. Commenter un tableau ou un graphique"],
  ["transformer", "4. Transformer un tableau en graphique"],
  ["exercices", "5. Exercices corrigés"],
];

function allerVersSection(event, id) {
  event.preventDefault();
  const cible = document.getElementById(id);
  if (cible) cible.scrollIntoView({ behavior: "smooth", block: "start" });
}

function GraphiqueBarres() {
  const valeurs = [
    { label: "2021", v: 40 },
    { label: "2022", v: 55 },
    { label: "2023", v: 48 },
    { label: "2024", v: 70 },
  ];
  const espace = 30;
  return (
    <svg viewBox="0 0 260 140" width="220" height="120" role="img" aria-label="Exemple de diagramme en barres">
      <line x1="30" y1="10" x2="30" y2="110" stroke="#c9bfae" strokeWidth="1" />
      <line x1="30" y1="110" x2="250" y2="110" stroke="#c9bfae" strokeWidth="1" />
      {valeurs.map((d, i) => (
        <g key={d.label}>
          <rect
            x={40 + i * espace}
            y={110 - d.v}
            width={20}
            height={d.v}
            fill="#dc2626"
            opacity={0.85}
          />
          <text x={40 + i * espace + 10} y="122" fontSize="9" textAnchor="middle" fill="#6d6459">{d.label}</text>
        </g>
      ))}
    </svg>
  );
}

function GraphiqueCourbe() {
  const points = [
    [30, 90], [80, 60], [130, 70], [180, 35], [230, 20],
  ];
  const chemin = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  return (
    <svg viewBox="0 0 260 140" width="220" height="120" role="img" aria-label="Exemple de courbe d'évolution">
      <line x1="20" y1="10" x2="20" y2="110" stroke="#c9bfae" strokeWidth="1" />
      <line x1="20" y1="110" x2="250" y2="110" stroke="#c9bfae" strokeWidth="1" />
      <path d={chemin} fill="none" stroke="#e07b39" strokeWidth="2.5" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="#e07b39" />
      ))}
    </svg>
  );
}

function GraphiqueCamembert() {
  const parts = [
    { pct: 45, color: "#dc2626" },
    { pct: 30, color: "#e07b39" },
    { pct: 25, color: "#0d9277" },
  ];
  let angleDepart = 0;
  const rayon = 45;
  const cx = 60, cy = 60;
  function coord(angle) {
    const rad = (angle * Math.PI) / 180;
    return [cx + rayon * Math.cos(rad), cy + rayon * Math.sin(rad)];
  }
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="Exemple de diagramme circulaire">
      {parts.map((p, i) => {
        const angleFin = angleDepart + (p.pct / 100) * 360;
        const [x1, y1] = coord(angleDepart);
        const [x2, y2] = coord(angleFin);
        const grandArc = angleFin - angleDepart > 180 ? 1 : 0;
        const d = `M ${cx} ${cy} L ${x1} ${y1} A ${rayon} ${rayon} 0 ${grandArc} 1 ${x2} ${y2} Z`;
        angleDepart = angleFin;
        return <path key={i} d={d} fill={p.color} opacity={0.85} />;
      })}
    </svg>
  );
}

function TableauxGraphiques() {
  return (
    <div className="learning-page">
      <Link className="back-link" to="/methodologie">← Toutes les méthodologies</Link>
      <header className="learning-hero learning-hero--method">
        <div>
          <p className="home-eyebrow">Module transversal · lecture de données</p>
          <h1>Lire, commenter et transformer un tableau ou un graphique</h1>
          <p>
            C'est l'un des points qui font le plus perdre de points au concours, aussi bien au
            QCM (questions de mathématiques appuyées sur un graphique) que dans le support de
            communication du cas pratique. Ce module traite les deux épreuves d'un même geste :
            savoir lire une donnée, savoir la commenter, savoir la représenter.
          </p>
        </div>
        <dl className="exam-facts">
          <div><dt>5</dt><dd>chapitres</dd></div>
          <div><dt>6</dt><dd>exercices corrigés</dd></div>
        </dl>
      </header>

      <div className="method-layout">
        <nav className="method-toc" aria-label="Sommaire du module tableaux et graphiques">
          <span>Sommaire</span>
          {chapitres.map(([id, titre]) => (
            <a key={id} href={`#${id}`} onClick={(e) => allerVersSection(e, id)}>{titre}</a>
          ))}
        </nav>

        <article className="method-content">
          <section className="lesson-section" id="lire-tableau">
            <span className="lesson-number">01</span>
            <h2>Lire un tableau : la méthode en 5 réflexes</h2>
            <p>
              Avant de calculer quoi que ce soit, il faut comprendre ce que le tableau décrit.
              La majorité des erreurs viennent d'une lecture trop rapide : mauvaise ligne,
              mauvaise colonne, unité oubliée.
            </p>
            <ol className="step-list">
              <li><strong>Lisez le titre.</strong><p>Il annonce le sujet exact et souvent la période ou le territoire couvert. Ne jamais le sauter.</p></li>
              <li><strong>Identifiez les en-têtes de lignes et de colonnes.</strong><p>Une ligne = une catégorie (année, région, produit...). Une colonne = une variable mesurée. Vérifiez ce que croise chaque case.</p></li>
              <li><strong>Repérez l'unité.</strong><p>Euros, milliers, millions, pourcentages, indices : une bonne lecture chiffrée mais dans la mauvaise unité est une erreur totale, pas une erreur partielle.</p></li>
              <li><strong>Repérez les valeurs remarquables.</strong><p>Le minimum, le maximum, une rupture de tendance, une ligne « Total » ou « Ensemble » — ce sont elles qui nourrissent le commentaire.</p></li>
              <li><strong>Calculez avant d'écrire.</strong><p>Évolution en points, évolution en %, part d'un sous-total dans un total : préparez ces calculs au brouillon avant de rédiger une phrase.</p></li>
            </ol>

            <div className="data-table-wrap">
              <table className="data-table">
                <caption>Ventes de livres neufs en France, par segment (en millions d'exemplaires)</caption>
                <thead>
                  <tr><th>Segment</th><th>2023</th><th>2024</th><th>Évolution</th></tr>
                </thead>
                <tbody>
                  <tr><td>Littérature</td><td>120</td><td>125</td><td>+4,2 %</td></tr>
                  <tr><td>Jeunesse</td><td>108</td><td>106</td><td>-1,9 %</td></tr>
                  <tr><td>Sciences humaines</td><td>62</td><td>54</td><td>-12,9 %</td></tr>
                  <tr><td>Autres segments</td><td>149,7</td><td>141</td><td>-5,8 %</td></tr>
                  <tr><td>Total</td><td>439,7</td><td>426</td><td>-3,1 %</td></tr>
                </tbody>
              </table>
            </div>
            <div className="method-rule">
              <strong>Piège classique</strong>
              <p>
                Ne confondez jamais une évolution en <strong>points</strong> (différence simple entre deux
                pourcentages) et une évolution en <strong>%</strong> (variation relative). Un taux qui passe
                de 20 % à 25 % gagne 5 points, mais augmente de 25 % en valeur relative (5 ÷ 20).
              </p>
            </div>
          </section>

          <section className="lesson-section" id="types-graphiques">
            <span className="lesson-number">02</span>
            <h2>Les types de graphiques : lequel choisir ?</h2>
            <p>
              Un graphique n'est jamais neutre : son type doit correspondre à ce que l'on veut montrer.
              Trois familles couvrent la quasi-totalité des besoins du concours.
            </p>
            <div className="chart-types-grid">
              <div>
                <GraphiqueBarres />
                <strong>Diagramme en barres</strong>
                <p>Comparer plusieurs catégories entre elles à un instant donné, ou une même catégorie sur plusieurs périodes bien séparées.</p>
              </div>
              <div>
                <GraphiqueCourbe />
                <strong>Courbe (graphique linéaire)</strong>
                <p>Montrer une évolution continue dans le temps : plus il y a de points dans le temps, plus la courbe est adaptée.</p>
              </div>
              <div>
                <GraphiqueCamembert />
                <strong>Diagramme circulaire (camembert)</strong>
                <p>Montrer la répartition des parts d'un total à 100 % — jamais pour comparer une évolution dans le temps.</p>
              </div>
            </div>
            <div className="method-warning">
              <strong>Erreur fréquente</strong>
              <p>
                Utiliser un camembert pour montrer une évolution (2019, 2020, 2021...) : un camembert
                représente une photographie à un instant T, pas un mouvement. Pour une évolution,
                choisissez toujours une courbe ou des barres.
              </p>
            </div>
            <ul className="check-list">
              <li>Un graphique complet comporte : un titre, des axes nommés, des unités, une échelle régulière et une légende si plusieurs séries sont représentées.</li>
              <li>Au concours, la couleur est souvent interdite : prévoyez des hachures, des motifs ou des nuances de gris pour distinguer les séries.</li>
              <li>Arrondissez les valeurs affichées sur le graphique — il ne sert pas à donner la précision exacte, mais à faire apparaître une tendance.</li>
            </ul>
          </section>

          <section className="lesson-section" id="commenter">
            <span className="lesson-number">03</span>
            <h2>Commenter un tableau ou un graphique</h2>
            <p>
              Un commentaire de données suit toujours la même mécanique en quatre temps, qu'il
              porte sur un tableau ou sur un graphique :
            </p>
            <div className="plan-grid">
              <div><strong>1. Constat global</strong><span>Une phrase qui résume la tendance d'ensemble, sans détail chiffré.</span></div>
              <div><strong>2. Valeur(s) remarquable(s)</strong><span>Le chiffre le plus haut, le plus bas, ou celui qui rompt la tendance.</span></div>
              <div><strong>3. Comparaison ou évolution</strong><span>Le calcul qui objective le constat : variation en points ou en %, part dans un total.</span></div>
              <div><strong>4. Interprétation prudente</strong><span>Une explication plausible, restant appuyée sur le dossier — jamais une opinion personnelle.</span></div>
            </div>

            <div className="example-box">
              <span>Exemple de commentaire sur le tableau ci-dessus (ventes de livres)</span>
              <p>
                Les ventes de livres neufs reculent globalement entre 2023 et 2024, passant de 439,7 à
                426 millions d'exemplaires, soit une baisse de 3,1 %. Cette évolution n'est cependant pas
                uniforme selon les segments : la littérature progresse (+4,2 %) alors que les sciences
                humaines connaissent le recul le plus marqué (-12,9 %). Cette baisse plus prononcée sur
                certains segments peut s'expliquer par une évolution différenciée des pratiques de
                lecture selon les genres, la littérature bénéficiant notamment du dynamisme de la romance.
              </p>
            </div>

            <div className="example-box">
              <span>Exemple de commentaire sur un graphique en barres (le même exemple, représenté visuellement)</span>
              <p>
                Le diagramme en barres fait apparaître un écart net entre les segments : la barre
                « littérature » est la seule à progresser d'une période à l'autre, tandis que la barre
                « sciences humaines » affiche la plus forte baisse visible. La hauteur inégale des
                barres traduit directement l'hétérogénéité du marché du livre déjà observée dans le
                tableau — c'est bien la cohérence entre les deux lectures (tableau et graphique) qui
                doit être vérifiée avant de conclure.
              </p>
            </div>

            <div className="do-dont">
              <div><strong>À faire</strong><p>Citer un chiffre précis par affirmation.<br />Relier deux données entre elles (comparaison, évolution).<br />Rester neutre : « on observe », « cela s'explique par ».</p></div>
              <div><strong>À éviter</strong><p>Décrire ligne par ligne sans les relier.<br />Employer « énormément », « beaucoup », sans chiffre.<br />Formuler une opinion personnelle sur la donnée.</p></div>
            </div>
          </section>

          <section className="lesson-section" id="transformer">
            <span className="lesson-number">04</span>
            <h2>Transformer un tableau en graphique</h2>
            <p>
              C'est l'exercice demandé dans la partie « support visuel » du cas pratique : à partir
              d'un ou plusieurs tableaux du dossier, produire un graphique clair et fidèle.
            </p>
            <ol className="step-list">
              <li><strong>Choisir la bonne série à représenter.</strong><p>Une seule idée par graphique : n'essayez pas de tout montrer sur un même schéma.</p></li>
              <li><strong>Choisir le type de graphique adapté</strong><p>Évolution dans le temps → courbe ou barres. Répartition d'un total → camembert. Comparaison de catégories → barres.</p></li>
              <li><strong>Définir les axes.</strong><p>Axe horizontal : la catégorie (années, segments...). Axe vertical : la valeur mesurée, avec son unité indiquée.</p></li>
              <li><strong>Choisir une échelle régulière.</strong><p>Les graduations doivent être également espacées ; ne jamais « tasser » une partie du graphique pour gagner de la place.</p></li>
              <li><strong>Ajouter titre et légende.</strong><p>Le titre reprend l'information du tableau source. La légende n'est nécessaire que s'il y a plusieurs séries ou couleurs/motifs à distinguer.</p></li>
            </ol>

            <div className="example-box">
              <span>Exemple pas à pas</span>
              <p>
                <strong>Tableau source :</strong> répartition du prix d'un livre neuf — édition/impression 37 %,
                distribution 20 %, diffusion 12 %, point de vente 8 %, commercialisation 8 %, création 8 %,
                fabrication 7 %.<br /><br />
                <strong>Choix du graphique :</strong> il s'agit de parts d'un total à 100 % à un instant donné →
                un diagramme circulaire (camembert) est adapté, pas une courbe.<br /><br />
                <strong>Construction :</strong> chaque part occupe un secteur proportionnel à son pourcentage
                (37 % du cercle pour l'édition, etc.). Sans couleur autorisée, on distingue les 7 parts par
                des hachures différentes et une légende numérotée reprenant les libellés du tableau.<br /><br />
                <strong>Titre du graphique :</strong> « Répartition moyenne du prix d'un livre neuf ».
              </p>
            </div>
            <div className="method-rule">
              <strong>Règle d'or</strong>
              <p>
                Un graphique doit pouvoir être compris sans revenir au tableau source. Si une légende
                ou une valeur manque pour comprendre le schéma seul, il n'est pas encore terminé.
              </p>
            </div>
          </section>

          <section className="lesson-section lesson-section--final" id="exercices">
            <span className="lesson-number">05</span>
            <h2>Exercices corrigés</h2>
            <p>Fais l'effort de répondre avant d'ouvrir le corrigé — c'est cet effort qui fait progresser.</p>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 1 — Lecture d'un tableau</p>
              <div className="data-table-wrap">
                <table className="data-table">
                  <caption>Fréquentation d'un musée par trimestre (en milliers de visiteurs)</caption>
                  <thead><tr><th>Trimestre</th><th>2023</th><th>2024</th></tr></thead>
                  <tbody>
                    <tr><td>T1</td><td>42</td><td>38</td></tr>
                    <tr><td>T2</td><td>55</td><td>61</td></tr>
                    <tr><td>T3</td><td>70</td><td>82</td></tr>
                    <tr><td>T4</td><td>48</td><td>50</td></tr>
                    <tr><td>Total</td><td>215</td><td>231</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Question : quel trimestre affiche la plus forte progression en valeur relative (%) entre 2023 et 2024 ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Il faut calculer l'évolution relative de chaque trimestre, pas seulement l'écart en valeur absolue :
T1 : (38 - 42) / 42 = -9,5 %
T2 : (61 - 55) / 55 = +10,9 %
T3 : (82 - 70) / 70 = +17,1 %
T4 : (50 - 48) / 48 = +4,2 %

Le T3 affiche la plus forte progression relative (+17,1 %), et non le T2 qui a pourtant le plus gros écart en valeur absolue (+6 000 visiteurs contre +12 000 pour le T3). C'est précisément ce piège — confondre écart absolu et évolution relative — qui fait perdre des points : toujours revenir à la valeur de départ avant de comparer deux évolutions entre elles.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 2 — Choisir le bon graphique</p>
              <p>
                Question : vous disposez d'un tableau donnant, pour une seule année, la répartition des
                agents d'un service par catégorie (A, B, C). Quel type de graphique choisiriez-vous, et pourquoi ?
              </p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Un diagramme circulaire (camembert) est le plus adapté : la donnée est une répartition (les trois catégories forment 100 % des agents) observée à un instant unique, sans dimension temporelle. Un diagramme en barres serait également acceptable pour comparer les trois effectifs entre eux, mais serait moins immédiatement lisible pour montrer qu'il s'agit d'une répartition d'un tout.
Une courbe serait en revanche inadaptée : elle est réservée à une évolution dans le temps, or il n'y a ici qu'une seule année observée — aucune évolution à représenter.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 3 — Lire un graphique en barres</p>
              <div className="chart-figure">
                <GraphiqueBarres />
                <figcaption>Nombre de dossiers traités par un service, de 2021 à 2024 (en centaines)</figcaption>
              </div>
              <p>Question : entre quelles deux années observe-t-on la seule baisse de la série ? Donnez le chiffre approximatif de cette baisse en pourcentage.</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Les hauteurs des barres correspondent approximativement à : 2021 = 40, 2022 = 55, 2023 = 48, 2024 = 70 (en centaines de dossiers).
La série progresse globalement, mais recule une seule fois, entre 2022 et 2023 : de 55 à 48, soit une baisse de (55 - 48) / 55 ≈ 12,7 %.
Méthode pour ce type de lecture graphique : comparez toujours la barre à la précédente immédiate, une par une, plutôt que de chercher directement « la plus petite barre » — ici la barre 2021 est la plus basse de toutes, mais ce n'est pas elle qui correspond à une baisse (le service partait de zéro croissance, il n'y a pas de barre encore plus petite avant elle).`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 4 — Commenter un tableau</p>
              <div className="data-table-wrap">
                <table className="data-table">
                  <caption>Répartition des demandes reçues par un service d'accueil, par canal</caption>
                  <thead><tr><th>Canal</th><th>2023</th><th>2024</th></tr></thead>
                  <tbody>
                    <tr><td>Accueil physique</td><td>3 200</td><td>2 500</td></tr>
                    <tr><td>Téléphone</td><td>4 100</td><td>4 300</td></tr>
                    <tr><td>Courriel</td><td>2 700</td><td>3 900</td></tr>
                    <tr><td>Total</td><td>10 000</td><td>10 700</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Question : rédigez un commentaire de 4 à 5 lignes sur ce tableau, en suivant la méthode en 4 temps (constat, valeur remarquable, évolution, interprétation).</p>
              <textarea className="reponse-brouillon" rows={5} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Le nombre total de demandes progresse légèrement entre 2023 et 2024, passant de 10 000 à 10 700, soit +7 %. Cette hausse masque cependant des évolutions contrastées selon les canaux : l'accueil physique recule fortement (-21,9 %, de 3 200 à 2 500), tandis que le courriel progresse le plus nettement (+44,4 %, de 2 700 à 3 900). Le téléphone reste globalement stable (+4,9 %). Cette évolution traduit un report progressif des usagers vers les canaux à distance, cohérent avec la tendance à la dématérialisation des démarches administratives déjà observée par ailleurs.

Pourquoi ce corrigé fonctionne : chaque phrase suit un temps de la méthode (constat global, valeur remarquable = le courriel qui progresse le plus, évolution chiffrée en % pour chaque canal, interprétation prudente reliée à un phénomène connu) — c'est cette structure, plus que la longueur, qui fait la qualité d'un commentaire de données au concours.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 5 — Transformer un tableau en graphique (à l'écrit)</p>
              <p>
                Question : à partir du tableau de l'exercice 4 (répartition des demandes par canal, 2023-2024),
                décrivez précisément le graphique que vous dessineriez pour montrer l'évolution du poids de
                chaque canal dans le total, en une phrase pour le type de graphique, une phrase pour les axes,
                une phrase pour le titre.
              </p>
              <textarea className="reponse-brouillon" rows={4} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Type de graphique : un diagramme en barres, avec pour chaque année (2023 et 2024) trois barres groupées (une par canal) — ce choix permet de comparer à la fois les canaux entre eux et leur évolution d'une année sur l'autre, ce qu'un camembert ne permettrait pas de faire sur deux années à la fois.
Axes : en abscisse (horizontal), les deux années 2023 et 2024 ; en ordonnée (vertical), le nombre de demandes, avec pour unité « nombre de demandes » clairement indiquée et une échelle régulière allant de 0 à un peu plus de 4 300 (la valeur la plus haute du tableau).
Titre : « Évolution du nombre de demandes reçues par canal (2023-2024) », avec une légende associant chaque motif ou hachure à un canal (accueil physique, téléphone, courriel).

Remarque méthodologique : si la question avait porté sur la part (en %) de chaque canal dans le total, plutôt que sur le nombre de demandes lui-même, deux camemberts côte à côte (un pour 2023, un pour 2024) auraient été un choix tout aussi valable, voire plus lisible pour montrer un changement de répartition.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 6 — QCM type concours (mathématiques sur graphique)</p>
              <div className="chart-figure">
                <GraphiqueCourbe />
                <figcaption>Évolution du nombre d'inscriptions en ligne à un service public, sur 5 mois</figcaption>
              </div>
              <p>
                Question : la courbe passe approximativement de 20 (1er point) à 90 (dernier point), sur 5 mois.
                Quelle est l'évolution en pourcentage entre le premier et le dernier mois représentés ?
              </p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Formule à retenir : évolution en % = (valeur d'arrivée - valeur de départ) / valeur de départ × 100.
Ici : (90 - 20) / 20 × 100 = 70 / 20 × 100 = 350 %.
Le nombre d'inscriptions a donc plus que quadruplé (multiplié par 4,5) sur la période observée. Attention à l'erreur fréquente qui consisterait à répondre « 70 % » en oubliant de diviser l'écart par la valeur de départ : 70 est l'écart en valeur absolue, pas l'évolution relative.`}
                </div>
              </details>
            </div>
          </section>

          <div className="lesson-section lesson-section--final">
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link className="home-button home-button--light lesson-action" to="/methodologie/cas-pratique">Revoir la méthode du cas pratique</Link>
              <Link className="home-button home-button--primary lesson-action" to="/quiz/calcul">S'entraîner sur le quiz calcul</Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default TableauxGraphiques;
