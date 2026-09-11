import { Link } from "react-router-dom";

const articles = [
  {
    categorie: "Organisation", duree: "4 min", titre: "Comprendre les trois phases du concours",
    resume: "Pré-admissibilité, admissibilité et admission ne mobilisent pas les mêmes compétences.",
    contenu: [
      "La pré-admissibilité vérifie votre capacité à répondre avec justesse et rapidité à un QCM. L’admissibilité évalue ensuite votre aptitude à exploiter un dossier et à produire des réponses structurées. Enfin, l’admission apprécie votre motivation, votre expression orale et votre compréhension du métier.",
      "Préparez ces phases dans cet ordre, mais entretenez dès maintenant votre expression écrite et votre connaissance des ministères : elles servent dans plusieurs épreuves.",
    ],
    action: "Écrivez en une phrase la compétence principale évaluée à chaque phase.",
  },
  {
    categorie: "Mémorisation", duree: "5 min", titre: "Réviser activement plutôt que relire",
    resume: "La mémoire progresse lorsqu’elle doit retrouver une information, pas lorsqu’elle la reconnaît.",
    contenu: [
      "Après une leçon, fermez le support et notez tout ce dont vous vous souvenez. Comparez ensuite avec le cours, corrigez les oublis et reformulez les idées difficiles avec vos propres mots.",
      "Revenez sur la même notion après un jour, trois jours, une semaine puis deux semaines. Ces rappels espacés consolident les connaissances beaucoup mieux qu’une longue session unique.",
    ],
    action: "Transformez le prochain cours en cinq questions auxquelles vous répondrez sans regarder.",
  },
  {
    categorie: "Progression", duree: "6 min", titre: "Construire un carnet d’erreurs efficace",
    resume: "Une erreur corrigée devient un point potentiel si sa cause est clairement identifiée.",
    contenu: [
      "Pour chaque erreur, consignez la question, votre réponse, la bonne réponse et surtout la cause : connaissance absente, calcul faux, lecture trop rapide, confusion logique ou mauvaise gestion du temps.",
      "Ajoutez une règle courte et un exemple. Une fois par semaine, refaites uniquement les questions du carnet sans consulter les solutions. Supprimez une erreur seulement après deux réussites espacées.",
    ],
    action: "Classez vos cinq dernières erreurs par cause, pas seulement par matière.",
  },
  {
    categorie: "QCM", duree: "5 min", titre: "Répondre sans se laisser piéger par la confiance",
    resume: "Une réponse dite sûre mérite parfois davantage de contrôle qu’une hésitation consciente.",
    contenu: [
      "Repérez vos réponses avec trois niveaux : S pour sûre, I pour incertaine et X pour laissée de côté. Au second passage, traitez les I. Pendant la vérification finale, contrôlez aussi quelques réponses S comportant une date, un pourcentage ou une déduction logique.",
      "Lisez chaque proposition indépendamment. Méfiez-vous des mots absolus — toujours, jamais, uniquement — et vérifiez que votre conclusion ne va pas plus loin que les informations données.",
    ],
    action: "Sur votre prochain quiz, justifiez par une règle deux réponses que vous pensiez évidentes.",
  },
  {
    categorie: "Planification", duree: "4 min", titre: "Créer une semaine de révision réaliste",
    resume: "La régularité repose sur des séances courtes, identifiées et faciles à commencer.",
    contenu: [
      "Planifiez quatre séances : deux blocs de QCM ciblé, un bloc de cas pratique et un bloc de correction. Réservez une cinquième plage facultative pour rattraper une séance manquée, jamais pour surcharger une semaine déjà tenue.",
      "Définissez chaque séance par un résultat observable : “20 questions de calcul corrigées” est plus utile que “réviser les maths”. Terminez toujours par la prochaine action à effectuer.",
    ],
    action: "Programmez quatre séances précises pour les sept prochains jours.",
  },
  {
    categorie: "Jour J", duree: "5 min", titre: "Préserver ses points sous pression",
    resume: "Le jour de l’épreuve, votre objectif est d’appliquer une méthode déjà répétée.",
    contenu: [
      "Préparez votre trajet et votre matériel la veille. Au début de l’épreuve, lisez les consignes avant toute réponse et fixez vos heures de passage. Une question difficile ne doit pas absorber le temps destiné au reste du sujet.",
      "En cas de blocage, expirez lentement, notez ce qui est certain et passez à la suite. Revenez ensuite avec un regard neuf. Les dix dernières minutes servent au contrôle de la grille, des unités, des numéros et des oublis.",
    ],
    action: "Rédigez votre routine des dix premières et des dix dernières minutes.",
  },
];

function Articles() {
  return (
    <div className="learning-page articles-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Bibliothèque d’apprentissage</p>
        <h1>Lire moins, retenir davantage.</h1>
        <p>Des mini-cours courts, accompagnés d’une action immédiate pour transformer chaque lecture en apprentissage actif.</p>
      </header>

      <div className="article-list">
        {articles.map((article, index) => (
          <details className="learning-article" key={article.titre} open={index === 0}>
            <summary>
              <span className="learning-article__meta">{article.categorie} · {article.duree}</span>
              <strong>{article.titre}</strong>
              <small>{article.resume}</small>
            </summary>
            <div className="learning-article__body">
              {article.contenu.map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}
              <div className="active-task"><span>À vous de jouer</span><p>{article.action}</p></div>
            </div>
          </details>
        ))}
      </div>

      <section className="article-cta">
        <div><p className="home-eyebrow">Passer à la pratique</p><h2>Une règle est acquise lorsqu’elle résiste au chronomètre.</h2></div>
        <Link className="home-button home-button--primary" to="/quiz">Faire un quiz</Link>
      </section>
    </div>
  );
}

export default Articles;
