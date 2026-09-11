import { Link } from "react-router-dom";
import { categoriesInfo, quizQuestions } from "../data/quizQuestions";

function QuizCategories() {
  return (
    <div>
      <h1>Quiz / QCM</h1>
      <p>Choisis une catégorie pour t'entraîner.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        {Object.keys(categoriesInfo).map((cle) => (
          <Link
            key={cle}
            to={`/quiz/${cle}`}
            style={{
              display: "block",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <strong>{categoriesInfo[cle]}</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#555" }}>
              {quizQuestions[cle].length} questions
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuizCategories;