import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { categoriesInfo, quizQuestions } from "../data/quizQuestions";
import { enregistrerQuizTermine } from "../utils/progression";

function Quiz() {
  const { categorie } = useParams();
  const questions = quizQuestions[categorie];

  const [questionActuelle, setQuestionActuelle] = useState(0);
  const [reponseChoisie, setReponseChoisie] = useState(null);
  const [score, setScore] = useState(0);
  const [quizTermine, setQuizTermine] = useState(false);

  if (!questions) {
    return (
      <div className="learning-page">
        <h1>Catégorie introuvable</h1>
        <Link className="back-link" to="/quiz">← Retour aux catégories</Link>
      </div>
    );
  }

  function choisirReponse(index) {
    if (reponseChoisie !== null) return;
    setReponseChoisie(index);
    if (index === questions[questionActuelle].bonneReponse) {
      setScore(score + 1);
    }
  }

  function questionSuivante() {
    if (questionActuelle + 1 < questions.length) {
      setQuestionActuelle(questionActuelle + 1);
      setReponseChoisie(null);
    } else {
      setQuizTermine(true);
      enregistrerQuizTermine(score === questions.length);
    }
  }

  function recommencer() {
    setQuestionActuelle(0);
    setReponseChoisie(null);
    setScore(0);
    setQuizTermine(false);
  }

  if (quizTermine) {
    return (
      <div className="learning-page">
        <header className="learning-hero learning-hero--compact">
          <p className="home-eyebrow">{categoriesInfo[categorie]}</p>
          <h1>Quiz terminé !</h1>
          <p>Ton score : {score} / {questions.length}.</p>
        </header>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button className="home-button home-button--primary" onClick={recommencer}>Recommencer</button>
          <Link className="home-button home-button--secondary" to="/quiz">Choisir une autre catégorie</Link>
        </div>
      </div>
    );
  }

  const q = questions[questionActuelle];

  return (
    <div className="learning-page">
      <Link className="back-link" to="/quiz">← Retour aux catégories</Link>
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">{categoriesInfo[categorie]} · question {questionActuelle + 1} / {questions.length}</p>
        <h1>{q.question}</h1>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", maxWidth: "520px" }}>
        {q.choix.map((choix, index) => {
          let classe = "sprint-choix";
          if (reponseChoisie !== null) {
            if (index === q.bonneReponse) classe += " sprint-choix--correct";
            else if (index === reponseChoisie) classe += " sprint-choix--faux";
          }
          return (
            <button key={index} className={classe} onClick={() => choisirReponse(index)} disabled={reponseChoisie !== null}>
              {choix}
            </button>
          );
        })}
      </div>

      {reponseChoisie !== null && q.explication && (
        <div className="example-box" style={{ maxWidth: "520px" }}>
          <span>💡 Explication</span>
          <p>{q.explication}</p>
        </div>
      )}

      {reponseChoisie !== null && (
        <button className="home-button home-button--primary lesson-action" onClick={questionSuivante}>
          {questionActuelle + 1 < questions.length ? "Question suivante" : "Voir le résultat"}
        </button>
      )}
    </div>
  );
}

export default Quiz;
