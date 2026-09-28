import { Link } from "react-router-dom";

const chapitres = [
  ["chevauchement", "1. Problèmes de chevauchement"],
  ["file", "2. Position dans une file"],
  ["proportionnalite", "3. Proportionnalité à deux grandeurs"],
  ["pourcentages", "4. Calculs de pourcentages"],
  ["logique", "5. Raisonnement logique (syllogismes)"],
];

function allerVersSection(event, id) {
  event.preventDefault();
  const cible = document.getElementById(id);
  if (cible) cible.scrollIntoView({ behavior: "smooth", block: "start" });
}

function VennDiagram() {
  return (
    <svg viewBox="0 0 220 130" width="220" height="130" role="img" aria-label="Deux ensembles qui se recoupent">
      <circle cx="85" cy="65" r="55" fill="#dc2626" opacity="0.35" stroke="#dc2626" strokeWidth="1.5" />
      <circle cx="135" cy="65" r="55" fill="#e07b39" opacity="0.35" stroke="#e07b39" strokeWidth="1.5" />
      <text x="55" y="40" fontSize="10" fill="#241a15">Adam : 6</text>
      <text x="140" y="40" fontSize="10" fill="#241a15">Clara : 5</text>
      <text x="97" y="70" fontSize="10" fontWeight="700" fill="#241a15">en commun ?</text>
      <text x="90" y="115" fontSize="9" fill="#6d6459">Total dans la maison : 8</text>
    </svg>
  );
}

function FileAttente() {
  const total = 9;
  const posMartin = 5;
  return (
    <svg viewBox="0 0 280 60" width="280" height="60" role="img" aria-label="File d'attente avec Martin au milieu">
      {Array.from({ length: total }).map((_, i) => (
        <g key={i}>
          <circle cx={20 + i * 28} cy="25" r="10" fill={i + 1 === posMartin ? "#dc2626" : "#e7ded4"} />
          <text x={20 + i * 28} y="29" fontSize="9" textAnchor="middle" fill={i + 1 === posMartin ? "#fff" : "#6d6459"}>{i + 1}</text>
        </g>
      ))}
      <text x="140" y="52" fontSize="9" textAnchor="middle" fill="#6d6459">4 personnes devant · Martin · 4 personnes derrière</text>
    </svg>
  );
}

function GrilleProportionnalite() {
  return (
    <svg viewBox="0 0 260 110" width="260" height="110" role="img" aria-label="Tableau de proportionnalité à deux grandeurs">
      <rect x="10" y="10" width="240" height="90" fill="none" stroke="#c9bfae" strokeWidth="1" />
      <line x1="90" y1="10" x2="90" y2="100" stroke="#c9bfae" strokeWidth="1" />
      <line x1="170" y1="10" x2="170" y2="100" stroke="#c9bfae" strokeWidth="1" />
      <line x1="10" y1="40" x2="250" y2="40" stroke="#c9bfae" strokeWidth="1" />
      <line x1="10" y1="70" x2="250" y2="70" stroke="#c9bfae" strokeWidth="1" />
      <text x="50" y="28" fontSize="9" textAnchor="middle" fill="#241a15" fontWeight="700">Poules</text>
      <text x="130" y="28" fontSize="9" textAnchor="middle" fill="#241a15" fontWeight="700">Jours</text>
      <text x="210" y="28" fontSize="9" textAnchor="middle" fill="#241a15" fontWeight="700">Œufs</text>
      <text x="50" y="58" fontSize="9" textAnchor="middle" fill="#6d6459">800</text>
      <text x="130" y="58" fontSize="9" textAnchor="middle" fill="#6d6459">8</text>
      <text x="210" y="58" fontSize="9" textAnchor="middle" fill="#dc2626" fontWeight="700">800</text>
      <text x="50" y="88" fontSize="9" textAnchor="middle" fill="#6d6459">400</text>
      <text x="130" y="88" fontSize="9" textAnchor="middle" fill="#6d6459">4</text>
      <text x="210" y="88" fontSize="9" textAnchor="middle" fill="#dc2626" fontWeight="700">?</text>
    </svg>
  );
}

function BarrePourcentage() {
  return (
    <svg viewBox="0 0 220 90" width="220" height="90" role="img" aria-label="Comparaison points de pourcentage et évolution relative">
      <rect x="20" y="15" width="80" height="18" fill="#e7ded4" />
      <rect x="20" y="15" width="64" height="18" fill="#dc2626" />
      <text x="105" y="28" fontSize="9" fill="#241a15">20 %</text>
      <rect x="20" y="50" width="80" height="18" fill="#e7ded4" />
      <rect x="20" y="50" width="80" height="18" fill="#e07b39" />
      <text x="105" y="63" fontSize="9" fill="#241a15">25 %</text>
      <text x="20" y="85" fontSize="8.5" fill="#6d6459">Écart : +5 points, mais +25 % en évolution relative (5 ÷ 20)</text>
    </svg>
  );
}

function PiegesMathsLogique() {
  return (
    <div className="learning-page">
      <Link className="back-link" to="/methodologie">← Toutes les méthodologies</Link>
      <header className="learning-hero learning-hero--method">
        <div>
          <p className="home-eyebrow">Module transversal · maths et raisonnement logique</p>
          <h1>Les pièges classiques du QCM : maths et raisonnement logique</h1>
          <p>
            Quatre types de problèmes reviennent d'une session à l'autre, sous des habillages
            différents, et font perdre des points à des candidats qui maîtrisent pourtant les
            bases : les chevauchements, la position dans une file, la proportionnalité à deux
            grandeurs et les pourcentages. Chaque section donne la règle, un schéma pour la
            visualiser, un exemple résolu pas à pas, puis deux exercices corrigés en détail.
          </p>
        </div>
        <dl className="exam-facts">
          <div><dt>5</dt><dd>chapitres</dd></div>
          <div><dt>10</dt><dd>exercices corrigés</dd></div>
        </dl>
      </header>

      <div className="method-layout">
        <nav className="method-toc" aria-label="Sommaire du module pièges maths et logique">
          <span>Sommaire</span>
          {chapitres.map(([id, titre]) => (
            <a key={id} href={`#${id}`} onClick={(e) => allerVersSection(e, id)}>{titre}</a>
          ))}
        </nav>

        <article className="method-content">
          {/* 1. CHEVAUCHEMENT */}
          <section className="lesson-section" id="chevauchement">
            <span className="lesson-number">01</span>
            <h2>Problèmes de chevauchement (ensembles qui se recoupent)</h2>
            <p>
              Ce type de problème donne deux groupes qui partagent des éléments communs (des
              enfants avec deux parents, des candidats maîtrisant deux langues...) et demande de
              retrouver le nombre d'éléments communs ou le total.
            </p>
            <div className="method-rule">
              <strong>La règle à retenir</strong>
              <p>
                Total = (effectif du groupe 1) + (effectif du groupe 2) − (éléments comptés deux fois,
                donc communs aux deux groupes). Si l'on connaît le total et les deux effectifs, on
                retrouve l'intersection par : <strong>commun = groupe 1 + groupe 2 − total</strong>.
              </p>
            </div>
            <div className="chart-figure">
              <VennDiagram />
              <figcaption>Adam (6 enfants) et Clara (5 enfants) pour un total de 8 enfants dans la maison</figcaption>
            </div>
            <div className="example-box">
              <span>Exemple résolu pas à pas</span>
              <p>
                Adam est le père de 6 enfants, Clara est la mère de 5, et la maison compte 8 enfants
                au total. Les enfants qu'ils ont eus ensemble sont comptés deux fois si on additionne
                simplement 6 + 5 = 11. Or il n'y a que 8 enfants en tout : l'écart, 11 − 8 = 3, correspond
                exactement aux enfants comptés en double, donc à ceux qu'Adam et Clara ont eus ensemble.
                <strong> Réponse : 3 enfants communs.</strong>
              </p>
            </div>
            <div className="method-warning">
              <strong>Piège fréquent</strong>
              <p>
                Ne confondez jamais « total des deux groupes réunis » (adition simple, à utiliser
                seulement si les groupes ne se recoupent pas) avec un chevauchement : dès que l'énoncé
                laisse entendre qu'un même élément peut appartenir aux deux groupes, il faut soustraire
                l'intersection pour ne pas la compter deux fois.
              </p>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 1</p>
              <p>Dans un service de 40 agents, 22 maîtrisent l'anglais et 18 maîtrisent l'espagnol. 6 agents maîtrisent les deux langues. Combien d'agents ne maîtrisent aucune des deux langues ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Le nombre d'agents parlant au moins une des deux langues = anglais + espagnol - les deux à la fois = 22 + 18 - 6 = 34.
Sur les 40 agents du service, ceux qui ne parlent aucune des deux langues sont donc : 40 - 34 = 6 agents.
Méthode : on part toujours du total « au moins une langue » avant de revenir au total du service pour trouver le complément (ceux qui n'en parlent aucune).`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 2</p>
              <p>Léa a hérité de deux jeux de cartes, l'un avec des figures rouges, l'autre avec des figures noires. Elle possède 15 cartes rouges, 13 cartes noires, et 4 cartes qui ont à la fois du rouge et du noir. Combien de cartes possède-t-elle au total ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Total = rouges + noires - cartes comptées dans les deux (les cartes à la fois rouges et noires) = 15 + 13 - 4 = 24 cartes.
Attention à l'ordre du raisonnement : ici on part des deux effectifs et de l'intersection connue pour retrouver le total (sens inverse de l'exercice 1, où l'on partait du total pour retrouver l'intersection) — la même formule sert dans les deux sens, seule l'inconnue change.`}
                </div>
              </details>
            </div>
          </section>

          {/* 2. FILE */}
          <section className="lesson-section" id="file">
            <span className="lesson-number">02</span>
            <h2>Position dans une file (rang, classement, queue)</h2>
            <p>
              Ce type de problème donne des informations relatives à la position d'une personne dans
              une file, une queue ou un classement, et demande de retrouver sa position exacte ou le
              nombre total de personnes.
            </p>
            <div className="method-rule">
              <strong>La règle à retenir</strong>
              <p>
                Si une personne a autant de personnes devant elle que derrière elle dans une file de N
                personnes, sa position p vérifie : <strong>p − 1 = N − p</strong>, c'est-à-dire{" "}
                <strong>N = 2p − 1</strong>. Autrement dit, le total est toujours un nombre impair dans ce
                cas précis, et la position se trouve exactement au milieu.
              </p>
            </div>
            <div className="chart-figure">
              <FileAttente />
              <figcaption>Avec 9 personnes en tout et autant devant que derrière, la position du milieu est 5</figcaption>
            </div>
            <div className="example-box">
              <span>Exemple résolu pas à pas</span>
              <p>
                Martin fait la queue ; le nombre total de personnes est un multiple de 3, et il y a
                autant de personnes devant lui que derrière lui. Deux amis sont derrière lui, aux
                positions 19 et 28. Puisqu'un ami est en 28e position, la file compte au moins 28
                personnes, et son total doit être un multiple de 3 : le premier candidat plausible est
                33. Avec N = 33 et la formule N = 2p − 1, on obtient p = (33 + 1) / 2 = 17.
                <strong> Réponse : Martin est en 17e position</strong> (16 personnes devant lui, 16 derrière,
                soit 33 − 17 = 16, ce qui est cohérent).
              </p>
            </div>
            <div className="method-warning">
              <strong>Piège fréquent</strong>
              <p>
                Ne pas confondre « le nombre de personnes devant » et « la position » de la personne :
                si 4 personnes sont devant vous, vous êtes en 5e position (4 + 1), pas en 4e. C'est un
                décalage d'une unité qui revient très souvent dans ce type d'exercice.
              </p>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 3</p>
              <p>Dans une file de personnes attendant un guichet, il y a deux fois plus de personnes devant Sarah que derrière elle. Sarah est en 15e position. Combien de personnes composent la file en tout ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Sarah étant en 15e position, il y a 14 personnes devant elle (15 - 1). Comme il y a deux fois plus de personnes devant elle que derrière, le nombre de personnes derrière elle est 14 / 2 = 7.
Total de la file = personnes devant + Sarah + personnes derrière = 14 + 1 + 7 = 22 personnes.
Méthode : commencez toujours par convertir la position (15e) en « nombre de personnes devant » (14), c'est ce nombre-là qui sert dans les calculs de ratio, pas la position elle-même.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 4</p>
              <p>Dans un classement de 40 coureurs, Karim est classé 12e en partant du début. Quel est son classement en partant de la fin ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Formule à retenir : position en partant de la fin = (effectif total - position en partant du début) + 1.
Ici : (40 - 12) + 1 = 29e en partant de la fin.
Le piège classique est d'oublier le « +1 » : Karim lui-même doit être compté une fois, ni deux fois ni zéro fois. Vérification simple : 12e en partant du début + 29e en partant de la fin - 1 (Karim compté deux fois) = 40, l'effectif total — le compte est bon.`}
                </div>
              </details>
            </div>
          </section>

          {/* 3. PROPORTIONNALITE */}
          <section className="lesson-section" id="proportionnalite">
            <span className="lesson-number">03</span>
            <h2>Proportionnalité à deux grandeurs (double proportionnalité)</h2>
            <p>
              Ce type de problème fait intervenir trois grandeurs liées deux à deux (par exemple :
              un nombre d'ouvriers, un nombre de jours, une quantité de travail). Il faut ramener le
              problème à une seule unité avant de revenir à la question posée.
            </p>
            <div className="method-rule">
              <strong>La règle à retenir : la méthode du retour à l'unité</strong>
              <p>
                Ramenez toujours le problème à « une seule unité de la première grandeur, pendant une
                seule unité de temps » avant de multiplier par les nouvelles valeurs. Ne combinez
                jamais les deux rapports de tête : traitez-les l'un après l'autre.
              </p>
            </div>
            <div className="chart-figure">
              <GrilleProportionnalite />
              <figcaption>800 poules pondent 800 œufs en 8 jours — combien 400 poules en pondent-elles en 4 jours ?</figcaption>
            </div>
            <div className="example-box">
              <span>Exemple résolu pas à pas</span>
              <p>
                800 poules pondent 800 œufs en 8 jours. Étape 1 (ramener à une poule) : 800 poules
                pondent 800 œufs, donc 1 poule pond 800 / 800 = 1 œuf en 8 jours. Étape 2 (ramener à un
                jour) : en 8 jours, 1 poule pond 1 œuf, donc en 1 jour, elle en pond 1/8. Étape 3 (revenir
                à la question) : 400 poules, pendant 4 jours, pondent 400 × 4 × (1/8) = 1600/8 = 200 œufs.
                <strong> Réponse : 200 œufs.</strong> Le piège consiste à croire qu'en divisant les deux
                grandeurs par 2 (poules et jours), la production ne change pas : en réalité, elle est
                divisée par 2 × 2 = 4.
              </p>
            </div>
            <div className="method-warning">
              <strong>Piège fréquent</strong>
              <p>
                Une double proportionnalité combine deux effets qui se multiplient, pas qui s'annulent :
                diviser le nombre d'ouvriers par 2 ET diviser le temps par 2 ne redonne pas le même
                résultat, cela le divise par 4.
              </p>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 5</p>
              <p>6 ouvriers construisent un mur en 10 jours. Combien de jours faudraient-il à 3 ouvriers pour construire le même mur, en travaillant au même rythme ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`6 ouvriers mettent 10 jours, donc la quantité totale de travail correspond à 6 × 10 = 60 « ouvriers-jours ».
Avec seulement 3 ouvriers (moitié moins), il faut deux fois plus de temps pour fournir la même quantité de travail : 60 / 3 = 20 jours.
Ce cas est un cas de proportionnalité inverse : moins d'ouvriers → plus de jours, dans un rapport identique (diviser le nombre d'ouvriers par 2 multiplie le temps par 2). Ne pas confondre avec une proportionnalité directe où les deux grandeurs varient dans le même sens.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 6</p>
              <p>3 robinets identiques remplissent une piscine en 12 heures. Combien de temps mettraient 4 robinets identiques pour remplir la même piscine ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Quantité totale de travail = 3 robinets × 12 heures = 36 « robinets-heures ».
Avec 4 robinets : 36 / 4 = 9 heures.
Méthode identique à l'exercice 5 : on calcule d'abord le volume total de travail nécessaire (constant, quel que soit le nombre de robinets), puis on le redistribue sur le nouveau nombre de robinets. Le réflexe « plus de robinets → moins de temps, dans la même proportion » est le signal qu'il s'agit d'une proportionnalité inverse.`}
                </div>
              </details>
            </div>
          </section>

          {/* 4. POURCENTAGES */}
          <section className="lesson-section" id="pourcentages">
            <span className="lesson-number">04</span>
            <h2>Calculs de pourcentages : les 3 pièges à connaître</h2>
            <p>
              Les questions de pourcentage sont fréquentes au QCM et reviennent aussi dans le
              cas pratique. Trois confusions expliquent la majorité des erreurs.
            </p>
            <div className="chart-figure">
              <BarrePourcentage />
              <figcaption>La même évolution lue en points (+5) ou en pourcentage relatif (+25 %)</figcaption>
            </div>
            <div className="plan-grid">
              <div><strong>Piège 1 — Points vs %</strong><span>Passer de 20 % à 25 % est une hausse de 5 points, mais de 25 % en évolution relative (5 ÷ 20 × 100).</span></div>
              <div><strong>Piège 2 — Pourcentages successifs</strong><span>+10 % puis -10 % ne redonne jamais le prix initial : les deux taux ne s'annulent pas car ils s'appliquent à des bases différentes.</span></div>
              <div><strong>Piège 3 — Retrouver la valeur de départ</strong><span>Après une hausse de X %, pour retrouver la valeur initiale, on divise par (1 + X/100) — on ne soustrait pas simplement X %.</span></div>
            </div>

            <div className="example-box">
              <span>Exemple résolu — pourcentages successifs</span>
              <p>
                Un article à 150 € subit une hausse de 8 % puis une baisse de 8 %. Prix après hausse :
                150 × 1,08 = 162 €. Prix après baisse : 162 × 0,92 = 149,04 €.
                <strong> Le prix final (149,04 €) est inférieur au prix initial (150 €)</strong>, alors qu'une
                intuition rapide ferait croire que les deux taux s'annulent. La baisse de 8 % s'applique
                à 162 € (une base plus grande que 150 €), ce qui explique l'écart final.
              </p>
            </div>

            <div className="example-box">
              <span>Exemple résolu — retrouver la valeur de départ</span>
              <p>
                Un prix a augmenté de 20 % et vaut maintenant 180 €. Quel était le prix avant la hausse ?
                Erreur fréquente : soustraire 20 % de 180 (180 × 0,8 = 144 €) — c'est faux, car les 20 %
                de hausse s'appliquent au prix de départ, pas au prix d'arrivée. Méthode correcte :
                180 = prix de départ × 1,20, donc prix de départ = 180 / 1,20 = <strong>150 €</strong>.
              </p>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 7</p>
              <p>Le taux de réussite à un examen passe de 60 % à 66 %. De combien de points a-t-il augmenté, et de combien de pourcentage (évolution relative) ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Évolution en points : 66 - 60 = 6 points.
Évolution relative : (66 - 60) / 60 × 100 = 6 / 60 × 100 = 10 %.
Les deux réponses sont correctes, mais répondent à des questions différentes : « 6 points » décrit l'écart brut entre les deux taux, « 10 % » décrit l'ampleur de la hausse relativement au niveau de départ. Toujours vérifier laquelle des deux formulations est demandée par l'énoncé.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 8</p>
              <p>Après une baisse de 25 %, un article coûte 90 €. Quel était son prix avant la baisse ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Une baisse de 25 % signifie que le prix actuel représente 75 % du prix initial (100 % - 25 %) : prix actuel = prix initial × 0,75.
Donc prix initial = 90 / 0,75 = 120 €.
Erreur fréquente à éviter : ajouter 25 % à 90 € (90 × 1,25 = 112,50 €) — cette méthode est fausse car les 25 % de l'énoncé se rapportent au prix initial (base 120 €), pas au prix actuel (base 90 €) : ce ne sont pas les mêmes 25 %.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 9</p>
              <p>Un salaire de 2 000 € augmente de 3 % puis, l'année suivante, de 2 % supplémentaires (sur le nouveau salaire). Quel est le salaire final, et cette double augmentation équivaut-elle à une hausse unique de 5 % ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Salaire après la 1re hausse : 2000 × 1,03 = 2060 €.
Salaire après la 2e hausse : 2060 × 1,02 = 2101,20 €.
Une hausse unique de 5 % aurait donné : 2000 × 1,05 = 2100 €.
Les deux résultats sont proches (2101,20 € contre 2100 €) mais pas strictement identiques : deux hausses successives de 3 % puis 2 % équivalent à une hausse globale de 1,03 × 1,02 = 1,0506, soit +5,06 %, très légèrement supérieure à une hausse unique de 5 %. Retenez que des pourcentages successifs se multiplient entre eux, ils ne s'additionnent jamais exactement.`}
                </div>
              </details>
            </div>
          </section>

          {/* 5. LOGIQUE */}
          <section className="lesson-section lesson-section--final" id="logique">
            <span className="lesson-number">05</span>
            <h2>Raisonnement logique : syllogismes et déductions</h2>
            <p>
              Ces questions ne demandent aucun calcul : elles testent la rigueur du raisonnement.
              Une fiche complète sur chaque règle (fausse réciproque, décodage, suites, déductions
              croisées) existe déjà dans les <Link to="/astuces">Astuces &amp; règles</Link>. Voici deux
              exercices supplémentaires pour s'entraîner sur le piège le plus fréquent : la fausse réciproque.
            </p>
            <div className="method-rule">
              <strong>La règle à retenir</strong>
              <p>
                « Tous les A sont B » ne permet jamais de conclure que « tout B est un A ». Une
                condition nécessaire (être B pour être A) n'est pas automatiquement suffisante (être B
                n'implique pas d'être A).
              </p>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 10</p>
              <p>« Tous les employés du service comptable utilisent un tableur. Farid utilise un tableur. » Peut-on conclure que Farid travaille au service comptable ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Non, on ne peut pas le conclure. L'énoncé dit que tous les membres du service comptable utilisent un tableur (comptable → tableur), mais ne dit rien sur les autres personnes qui pourraient, elles aussi, utiliser un tableur sans appartenir à ce service. Conclure que Farid est comptable reviendrait à inverser la relation logique (tableur → comptable), ce que l'énoncé ne permet pas. C'est exactement le schéma de la fausse réciproque.`}
                </div>
              </details>
            </div>

            <div className="lesson-section" style={{ marginTop: "1.5rem" }}>
              <p style={{ fontWeight: 700, color: "#241a15" }}>Exercice 11</p>
              <p>« Tous les dossiers en retard sont signalés en rouge dans le logiciel. Aucun dossier signalé en rouge n'a été validé par le chef de service. » Peut-on affirmer qu'aucun dossier en retard n'a été validé par le chef de service ?</p>
              <textarea className="reponse-brouillon" rows={3} placeholder="Rédige ta réponse ici avant de consulter le corrigé." />
              <details className="corrige-toggle">
                <summary>Voir le corrigé détaillé</summary>
                <div className="corrige-toggle__body">
                  {`Oui, cette fois la déduction est valide. C'est un syllogisme correct : tous les dossiers en retard sont dans l'ensemble « signalés en rouge », et aucun élément de l'ensemble « signalés en rouge » n'est dans l'ensemble « validé ». Comme l'ensemble « en retard » est entièrement inclus dans l'ensemble « signalés en rouge », et que ce dernier est totalement exclu de l'ensemble « validé », l'ensemble « en retard » est donc lui aussi entièrement exclu de l'ensemble « validé ».
La différence avec l'exercice 10 : ici la 2e phrase porte sur la totalité de l'ensemble intermédiaire (« aucun... n'a été validé »), ce qui rend la chaîne de déduction valide de bout en bout — alors qu'à l'exercice 10, la 2e information (Farid utilise un tableur) ne dit rien sur la totalité d'un ensemble, elle isole juste un cas particulier.`}
                </div>
              </details>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <Link className="home-button home-button--light lesson-action" to="/astuces">Voir toutes les astuces</Link>
              <Link className="home-button home-button--primary lesson-action" to="/quiz/raisonnement">S'entraîner sur le quiz raisonnement</Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

export default PiegesMathsLogique;
