import { Link } from "react-router-dom";
import { annales } from "../data/annales";
import { cours } from "../data/cours";
import { glossaire } from "../data/glossaire";
import { quizQuestions } from "../data/quizQuestions";

function Accueil() {
  const nombreQuiz = Object.values(quizQuestions).reduce(
    (total, questions) => total + questions.length,
    0,
  );
  const nombreQuestionsAnnales = Object.values(annales).reduce(
    (total, annale) => total + annale.questions.length,
    0,
  );

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__content">
          <p className="home-eyebrow">Préparation au concours DGFiP · Catégorie C</p>
          <h1 id="home-title">Un cap clair pour avancer dans vos révisions.</h1>
          <p className="home-lead">
            Travaillez les notions essentielles, testez vos connaissances et
            entraînez-vous sur des sujets proches des conditions du concours.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button--primary" to="/quiz">
              Commencer un quiz <span aria-hidden="true">→</span>
            </Link>
            <Link className="home-button home-button--secondary" to="/entrainement">
              Revoir un cours
            </Link>
          </div>
          <dl className="home-stats" aria-label="Contenu disponible">
            <div><dt>{nombreQuiz}</dt><dd>questions de quiz</dd></div>
            <div><dt>{Object.keys(cours).length}</dt><dd>cours ciblés</dd></div>
            <div><dt>{nombreQuestionsAnnales}</dt><dd>questions d’annales</dd></div>
            <div><dt>{glossaire.length}</dt><dd>mots de glossaire</dd></div>
          </dl>
        </div>

        <aside className="session-card" aria-labelledby="session-title">
          <div className="session-card__topline">
            <span className="session-card__badge">20 min</span>
            <span>Session express</span>
          </div>
          <h2 id="session-title">Votre séance du jour</h2>
          <ol className="session-steps">
            <li><span>01</span><div><strong>Réviser une notion</strong><small>5 minutes</small></div></li>
            <li><span>02</span><div><strong>Faire un quiz ciblé</strong><small>10 minutes</small></div></li>
            <li><span>03</span><div><strong>Relire les corrections</strong><small>5 minutes</small></div></li>
          </ol>
          <Link className="session-card__link" to="/entrainement">
            Lancer cette séance <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </section>

      <section className="home-section" aria-labelledby="resources-title">
        <div className="home-section__heading">
          <div>
            <p className="home-eyebrow">Choisir son entraînement</p>
            <h2 id="resources-title">Que voulez-vous travailler ?</h2>
          </div>
          <p>Alternez apprentissage, pratique et mise en situation pour progresser régulièrement.</p>
        </div>

        <div className="resource-grid">
          <Link className="resource-card" to="/quiz">
            <span className="resource-card__number">01</span>
            <div><h3>Tester mes connaissances</h3><p>Quatre thèmes de QCM avec un résultat immédiat.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--course" to="/entrainement">
            <span className="resource-card__number">02</span>
            <div><h3>Renforcer mes bases</h3><p>Des rappels courts suivis d’exercices corrigés.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--exam" to="/annales">
            <span className="resource-card__number">03</span>
            <div><h3>Me mettre en condition</h3><p>Des sujets d’annales pour mesurer votre niveau réel.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card" to="/concours">
            <span className="resource-card__number">04</span>
            <div><h3>Connaître le concours</h3><p>Épreuves, coefficients, conditions et calendrier de la session.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--course" to="/glossaire">
            <span className="resource-card__number">05</span>
            <div><h3>Apprendre le vocabulaire</h3><p>{glossaire.length} termes de fiscalité et d’administration expliqués.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card" to="/flashcards">
            <span className="resource-card__number">06</span>
            <div><h3>Mémoriser par répétition</h3><p>Des flashcards pour ancrer durablement le vocabulaire du concours.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="resource-card resource-card--exam" to="/cas-pratique">
            <span className="resource-card__number">07</span>
            <div><h3>S'entraîner sur un cas pratique</h3><p>Un dossier complet, des questions et des corrigés indicatifs.</p></div>
            <span className="resource-card__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="method-banner" aria-labelledby="method-title">
        <div>
          <p className="home-eyebrow">La bonne méthode</p>
          <h2 id="method-title">Régularité, correction, répétition.</h2>
          <p>Une préparation efficace tient davantage au rythme qu’à la durée de chaque séance.</p>
        </div>
        <Link className="home-button home-button--light" to="/methodologie">
          Voir la méthodologie
        </Link>
      </section>
    </div>
  );
}

export default Accueil;
