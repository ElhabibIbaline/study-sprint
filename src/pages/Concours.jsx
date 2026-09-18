import { Link } from "react-router-dom";

function Concours() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--method">
        <div>
          <p className="home-eyebrow">Repères officiels</p>
          <h1>Le concours en bref</h1>
          <p>
            Agent administratif des finances publiques, catégorie C : le poste, les conditions
            d'accès, les trois étapes du concours et le calendrier de la session.
          </p>
        </div>
        <dl className="exam-facts">
          <div><dt>3</dt><dd>étapes</dd></div>
          <div><dt>C1</dt><dd>catégorie</dd></div>
          <div><dt>0</dt><dd>diplôme requis*</dd></div>
        </dl>
      </header>

      <section className="lesson-section">
        <span className="lesson-number">01</span>
        <h2>Le poste</h2>
        <p>
          L'agent administratif des finances publiques exerce des missions d'accueil, de gestion
          et de traitement de dossiers au sein des services de la DGFiP (services des impôts des
          particuliers ou des entreprises, trésoreries, services fonciers...). C'est un poste de
          catégorie C, premier niveau de la hiérarchie de la fonction publique, orienté vers
          l'exécution de tâches administratives et le contact avec les usagers.
        </p>
        <div className="method-rule">
          <strong>Grade obtenu après réussite</strong>
          <p>Agent administratif principal des finances publiques de 2ᵉ classe.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="lesson-number">02</span>
        <h2>Conditions pour s'inscrire</h2>
        <ul className="check-list">
          <li>Être de nationalité française (les ressortissants de l'Union européenne ou de l'Espace économique européen peuvent être éligibles selon le corps concerné — à vérifier sur l'avis de concours).</li>
          <li>Être titulaire du diplôme national du brevet (DNB), d'un CAP, d'un BEP ou d'une qualification classée au moins au niveau 3 — sauf session ouverte "sans condition de diplôme".</li>
          <li>Jouir de ses droits civiques et présenter un casier judiciaire compatible avec les fonctions visées.</li>
          <li>Être en position régulière au regard des obligations du service national.</li>
        </ul>
        <div className="method-warning">
          <strong>Toujours vérifier l'avis de concours</strong>
          <p>
            Les conditions exactes (diplôme exigé ou non, quotas internes/externes) sont fixées
            chaque année par l'avis officiel de concours. Consulte-le avant de t'inscrire.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="lesson-number">03</span>
        <h2>Les trois étapes du concours</h2>
        <div className="timeline">
          <div>
            <span>Étape 1</span>
            <strong>Pré-admissibilité</strong>
            <small>QCM · 1 h 30 · coefficient 1 — mathématiques, raisonnement logique et connaissances générales.</small>
          </div>
          <div>
            <span>Étape 2</span>
            <strong>Admissibilité</strong>
            <small>Cas pratique · 3 h · coefficient 2 — analyse d'un dossier, questions, synthèse et support de communication.</small>
          </div>
          <div>
            <span>Étape 3</span>
            <strong>Admission</strong>
            <small>Entretien oral · 20 min · coefficient 3 — parcours, motivation et mise en situation professionnelle.</small>
          </div>
        </div>
        <p>
          Seules les copies déclarées admissibles à une étape sont examinées à l'étape suivante :
          chaque phase élimine une partie des candidats.
        </p>
        <div className="method-warning">
          <strong>Note éliminatoire</strong>
          <p>Une note inférieure à 5/20 à n'importe quelle épreuve élimine le candidat, quel que soit son résultat aux autres épreuves.</p>
        </div>
        <div className="do-dont">
          <div>
            <strong>Pour t'entraîner sur chaque étape</strong>
            <p>
              <Link to="/methodologie/qcm">Méthode du QCM</Link> · <Link to="/methodologie/cas-pratique">Méthode du cas pratique</Link>
            </p>
          </div>
          <div>
            <strong>Pour te tester en conditions réelles</strong>
            <p>
              <Link to="/annales">Annales corrigées</Link> · <Link to="/quiz">Quiz par thème</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="lesson-number">04</span>
        <h2>La réforme entrée en vigueur en 2026 : ce qui change</h2>
        <p>
          Le format actuel résulte d'un texte modifié le 28 mars 2026 (les dispositions
          initiales dataient de 2016). Voici les changements concrets par rapport aux sessions
          d'avant 2026, vérifiés directement sur le texte réglementaire.
        </p>
        <div className="do-dont">
          <div>
            <strong>Avant 2026</strong>
            <p>
              Le QCM de pré-admissibilité portait d'abord sur l'orthographe, le vocabulaire et
              la grammaire, avant le calcul et le raisonnement.<br /><br />
              L'entretien d'admission comptait pour un coefficient 2, à égalité avec le cas
              pratique.
            </p>
          </div>
          <div>
            <strong>Depuis 2026</strong>
            <p>
              Le QCM est recentré sur les mathématiques et le raisonnement logique, complétés
              par la culture générale (histoire, géographie, EMC), l'environnement numérique et
              l'actualité.<br /><br />
              L'entretien d'admission passe à un coefficient 3 : il pèse désormais plus lourd
              que le cas pratique (coefficient 2) dans la note finale.
            </p>
          </div>
        </div>
        <div className="method-rule">
          <strong>Ce que ça change pour ta préparation</strong>
          <p>
            L'orthographe pure recule un peu au profit des mathématiques et de la culture
            générale/actualité dans le QCM — sans disparaître, elle reste testée dans le cas
            pratique (qualité rédactionnelle). Et comme l'oral pèse désormais le plus lourd des
            trois épreuves, il ne doit plus être traité comme un simple entretien de routine.
          </p>
        </div>

        <h3 style={{ marginTop: "2.5rem", color: "#241a15" }}>Et pour le cas pratique en particulier ?</h3>
        <div className="do-dont">
          <div>
            <strong>Avant 2026</strong>
            <p>
              Le dossier documentaire était explicitement limité à 15 pages maximum. L'épreuve
              pouvait porter sur des réponses à des questions, la rédaction de documents ou la
              construction de tableaux chiffrés — l'accent portait davantage sur le
              traitement de données.
            </p>
          </div>
          <div>
            <strong>Depuis 2026</strong>
            <p>
              Le texte met désormais explicitement en avant trois composantes possibles :
              réponses à des questions sur le dossier, rédaction d'une synthèse de documents et,
              le cas échéant, élaboration d'un support de communication. L'accent se déplace
              vers l'analyse et la communication plutôt que le seul chiffrage.
            </p>
          </div>
        </div>
        <div className="method-warning">
          <strong>La synthèse et le support sont-ils obligatoires à chaque session ?</strong>
          <p>
            Le texte réglementaire est précis sur ce point : l'épreuve porte sur un dossier
            « <em>pouvant comporter la réponse à des questions sur ce dossier, la rédaction
            d'une synthèse de documents et, le cas échéant, l'élaboration d'un support de
            communication</em> ». Les questions courtes et la synthèse sont donc les composantes
            les plus stables d'une session à l'autre ; le support de communication est
            explicitement conditionné par « le cas échéant », ce qui le rend théoriquement moins
            systématique. En pratique, il est apparu dans la plupart des sessions récentes —
            <strong> prépare-toi aux deux</strong> plutôt que de parier sur son absence.
          </p>
        </div>
        <p className="official-note">
          Synthèse établie à partir du texte réglementaire consolidé sur{" "}
          <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032409140" target="_blank" rel="noreferrer">
            Légifrance
          </a>{" "}
          (dernière modification : 28 mars 2026). Certains détails fins (répartition exacte des
          points par matière, page limite du dossier) peuvent encore varier selon l'avis de
          concours de ta session — vérifie-le avant de calibrer ta préparation dans le détail.
        </p>
      </section>

      <section className="lesson-section">
        <span className="lesson-number">05</span>
        <h2>Calendrier indicatif — session 2026</h2>
        <div className="time-grid">
          <div><strong>27 avr. – 9 juin 2026</strong><span>Période d'inscription</span></div>
          <div><strong>29 sept. 2026</strong><span>Écrits : pré-admissibilité et admissibilité</span></div>
          <div><strong>16 oct. 2026</strong><span>Résultats de pré-admissibilité</span></div>
          <div><strong>6 nov. 2026</strong><span>Résultats d'admissibilité</span></div>
          <div><strong>4 – 29 janv. 2027</strong><span>Oraux d'admission</span></div>
        </div>
        <p className="official-note">
          Dates indicatives, susceptibles d'ajustement d'une session à l'autre — vérifie le
          calendrier exact sur le portail officiel avant de t'organiser.
        </p>
      </section>

      <section className="lesson-section">
        <span className="lesson-number">06</span>
        <h2>Le jour de l'épreuve : matériel et règles</h2>
        <p>
          Les règles précises figurent sur ta convocation officielle (elles peuvent varier
          légèrement d'un centre d'examen à l'autre) — voici les repères habituels pour ne pas
          être pris·e au dépourvu.
        </p>
        <div className="do-dont">
          <div>
            <strong>À prévoir</strong>
            <p>
              Une pièce d'identité en cours de validité (carte nationale d'identité, passeport ou
              titre de séjour)<br />
              Ta convocation (imprimée si cela est demandé)<br />
              Plusieurs stylos noirs ou bleus, en cas de panne<br />
              Une montre non connectée si tu veux suivre le temps sans horloge murale
            </p>
          </div>
          <div>
            <strong>Interdit en salle</strong>
            <p>
              Téléphone et objets connectés — éteints et rangés, hors de portée<br />
              Calculatrice, sauf mention contraire explicite sur la convocation<br />
              Documents, notes ou brouillons personnels<br />
              Tout signe distinctif sur la copie (nom, initiales, signe convenu...)
            </p>
          </div>
        </div>
        <div className="method-warning">
          <strong>Anonymat et fraude</strong>
          <p>
            La copie doit rester strictement anonyme : le moindre signe distinctif peut entraîner
            l'annulation de l'épreuve. De même, toute tentative de fraude (téléphone consulté,
            documents non autorisés...) expose à l'exclusion du concours, voire à une interdiction
            de se présenter à d'autres concours pendant plusieurs années.
          </p>
        </div>
        <ul className="check-list">
          <li>Arrive au moins 30 minutes avant l'heure convoquée : les portes ferment à l'heure de début et un retard peut empêcher l'accès à la salle.</li>
          <li>Relis ta convocation la veille pour connaître le lieu exact, la salle et les horaires précis.</li>
          <li>Une sortie anticipée est généralement interdite avant un certain délai (souvent la première heure) — prévois de rester jusqu'au bout si besoin.</li>
        </ul>
      </section>

      <section className="lesson-section lesson-section--final">
        <span className="lesson-number">07</span>
        <h2>Ressources officielles</h2>
        <ul className="check-list">
          <li><a href="https://concours.dgfip.finances.gouv.fr/" target="_blank" rel="noreferrer">Portail d'inscription aux concours de la DGFiP</a></li>
          <li><a href="https://rejoindrelesfinancespubliques.economie.gouv.fr/" target="_blank" rel="noreferrer">Rejoindre les finances publiques — présentation des métiers et calendriers</a></li>
          <li><a href="https://www.economie.gouv.fr/rejoignez-nous/agent-administratif-principal-des-finances-publiques-de-2eme-classe-externe-dgfip" target="_blank" rel="noreferrer">Fiche de poste officielle (economie.gouv.fr)</a></li>
        </ul>
        <Link className="home-button home-button--primary lesson-action" to="/glossaire">
          Voir le glossaire du concours
        </Link>
      </section>
    </div>
  );
}

export default Concours;
