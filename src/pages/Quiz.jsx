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
      <div>
        <h1>Catégorie introuvable</h1>
        <Link to="/quiz">Retour aux catégories</Link>
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
      <div>
        <h1>Quiz terminé : {categoriesInfo[categorie]}</h1>
        <p>Ton score : {score} / {questions.length}</p>
        <button onClick={recommencer}>Recommencer</button>{" "}
        <Link to="/quiz">Choisir une autre catégorie</Link>
      </div>
    );
  }

  const q = questions[questionActuelle];

  return (
    <div>
      <Link to="/quiz">← Retour aux catégories</Link>
      <p style={{ color: "#1d4ed8", fontWeight: "bold", marginTop: "1rem" }}>{categoriesInfo[categorie]}</p>
      <p>Question {questionActuelle + 1} / {questions.length}</p>
      <h2>{q.question}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}>
        {q.choix.map((choix, index) => {
          let couleur = "white";
          if (reponseChoisie !== null) {
            if (index === q.bonneReponse) couleur = "lightgreen";
            else if (index === reponseChoisie) couleur = "lightcoral";
          }
          return (
            <button
              key={index}
              onClick={() => choisirReponse(index)}
              style={{ padding: "0.75rem", backgroundColor: couleur, cursor: "pointer" }}
            >
              {choix}
            </button>
          );
        })}
      </div>

      {reponseChoisie !== null && (
        <button style={{ marginTop: "1rem" }} onClick={questionSuivante}>
          {questionActuelle + 1 < questions.length ? "Question suivante" : "Voir le résultat"}
        </button>
      )}
    </div>
  );
}

export default Quiz;