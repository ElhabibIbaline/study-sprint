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

      <section className="lesson-section lesson-section--final">
        <span className="lesson-number">05</span>
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
