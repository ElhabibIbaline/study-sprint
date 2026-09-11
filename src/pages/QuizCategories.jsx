import { Link } from "react-router-dom";
import { categoriesInfo, quizQuestions } from "../data/quizQuestions";

function QuizCategories() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Tester mes connaissances</p>
        <h1>Quiz / QCM</h1>
        <p>Choisis une catégorie pour t'entraîner, avec un résultat immédiat à chaque question.</p>
      </header>

      <div className="hub-grid">
        {Object.keys(categoriesInfo).map((cle) => (
          <Link key={cle} to={`/quiz/${cle}`} className="hub-card">
            <div><strong>{categoriesInfo[cle]}</strong><p>{quizQuestions[cle].length} questions</p></div>
            <span className="hub-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuizCategories;