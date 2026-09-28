import { useState } from "react";
import { Link } from "react-router-dom";
import { sujetZeroInfo, sujetZeroQuestions, themesOrdre } from "../data/sujetZeroQcm";
import { enregistrerQuizTermine } from "../utils/progression";

function SujetZero() {
  const [demarre, setDemarre] = useState(false);
  const [questionActuelle, setQuestionActuelle] = useState(0);
  const [reponseChoisie, setReponseChoisie] = useState(null);
  const [reponses, setReponses] = useState([]);
  const [termine, setTermine] = useState(false);

  const q = sujetZeroQuestions[questionActuelle];
  const score = reponses.filter((r) => r.correct).length;

  function choisirReponse(index) {
    if (reponseChoisie !== null) return;
    setReponseChoisie(index);
    setReponses([...reponses, { theme: q.theme, correct: index === q.bonneReponse }]);
  }

  function suivant() {
    if (questionActuelle + 1 < sujetZeroQuestions.length) {
      setQuestionActuelle(questionActuelle + 1);
      setReponseChoisie(null);
    } else {
      setTermine(true);
      enregistrerQuizTermine(score === sujetZeroQuestions.length);
    }
  }

  function recommencer() {
    setDemarre(false);
    setQuestionActuelle(0);
    setReponseChoisie(null);
    setReponses([]);
    setTermine(false);
  }

  if (!demarre) {
    return (
      <div className="learning-page">
        <header className="learning-hero learning-hero--compact">
          <p className="home-eyebrow">Épreuve blanche complète · sujet officiel 2026</p>
          <h1>{sujetZeroInfo.titre}</h1>
          <p>{sujetZeroInfo.presentation}</p>
        </header>

        <div className="method-rule">
          <strong>Conditions réelles de l'épreuve</strong>
          <p>
            Durée : {sujetZeroInfo.duree} · Coefficient : {sujetZeroInfo.coefficient} · {sujetZeroInfo.noteEliminatoire}
            <br />
            {sujetZeroQuestions.length} questions réparties sur {themesOrdre.length} matières : {themesOrdre.join(" · ")}.
          </p>
        </div>

        <button className="home-button home-button--primary lesson-action" onClick={() => setDemarre(true)}>
          Démarrer le sujet 0
        </button>

        <section className="article-cta" style={{ marginTop: "2.5rem" }}>
          <div>
            <p className="home-eyebrow">Envie de t'entraîner par thème d'abord ?</p>
            <h2>Reviens quand tu veux au quiz classique, organisé par catégorie.</h2>
          </div>
          <Link className="home-button home-button--light" to="/quiz">Voir le quiz par catégorie</Link>
        </section>
      </div>
    );
  }

  if (termine) {
    const parTheme = themesOrdre.map((theme) => {
      const rep = reponses.filter((r) => r.theme === theme);
      return { theme, correct: rep.filter((r) => r.correct).length, total: rep.length };
    });

    return (
      <div className="learning-page">
        <header className="learning-hero learning-hero--compact">
          <p className="home-eyebrow">Sujet 0 — résultat</p>
          <h1>Score : {score} / {sujetZeroQuestions.length}</h1>
          <p>
            Sur 20 : {(score / sujetZeroQuestions.length * 20).toFixed(1)}/20 —{" "}
            {score / sujetZeroQuestions.length * 20 < 5
              ? "en dessous de 5/20, note éliminatoire le jour du concours : reprends les thèmes en difficulté ci-dessous."
              : "au-dessus de la barre éliminatoire de 5/20."}
          </p>
        </header>

        <section className="lesson-section">
          <h2>Détail par matière</h2>
          <div className="final-checks">
            {parTheme.map(({ theme, correct, total }) => (
              <div key={theme}>
                <strong>{theme}</strong>
                <p style={{ margin: "0.35rem 0 0" }}>{correct} / {total} bonnes réponses</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
          <button className="home-button home-button--primary" onClick={recommencer}>Refaire le sujet</button>
          <Link className="home-button home-button--secondary" to="/quiz">Retour aux quiz par catégorie</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="learning-page">
      <Link className="back-link" to="/quiz">← Quitter le sujet 0</Link>
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">{q.theme} · question {questionActuelle + 1} / {sujetZeroQuestions.length}</p>
        <h1>{q.question}</h1>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", maxWidth: "620px" }}>
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

      {reponseChoisie !== null && (
        <div className="example-box" style={{ maxWidth: "620px" }}>
          <span>💡 Explication détaillée</span>
          <p>{q.explication}</p>
        </div>
      )}

      {reponseChoisie !== null && (
        <button className="home-button home-button--primary lesson-action" onClick={suivant}>
          {questionActuelle + 1 < sujetZeroQuestions.length ? "Question suivante" : "Voir le résultat"}
        </button>
      )}
    </div>
  );
}

export default SujetZero;
