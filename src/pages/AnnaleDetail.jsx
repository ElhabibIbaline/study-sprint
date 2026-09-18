import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { annales } from "../data/annales";
import { enregistrerAnnaleTerminee } from "../utils/progression";

function AnnaleDetail() {
  const { annee } = useParams();
  const annale = annales[annee];
  const [reponses, setReponses] = useState({});
  const [valide, setValide] = useState(false);

  const categories = useMemo(() => {
    if (!annale) return [];
    return [...new Set(annale.questions.map((q) => q.categorie))];
  }, [annale]);

  if (!annale) {
    return (
      <div className="learning-page">
        <h1>Annale introuvable</h1>
        <Link className="back-link" to="/annales">← Retour aux annales</Link>
      </div>
    );
  }

  function choisirReponse(indexQuestion, indexChoix) {
    if (valide) return;
    setReponses({ ...reponses, [indexQuestion]: indexChoix });
  }

  function valider() {
    setValide(true);
    enregistrerAnnaleTerminee(annee);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function recommencer() {
    setReponses({});
    setValide(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const nombreRepondues = Object.keys(reponses).length;
  const score = annale.questions.reduce(
    (total, q, index) => (reponses[index] === q.bonneReponse ? total + 1 : total),
    0,
  );

  const scoreParCategorie = categories.map((cat) => {
    const questionsCat = annale.questions
      .map((q, index) => ({ ...q, index }))
      .filter((q) => q.categorie === cat);
    const bonnes = questionsCat.filter((q) => reponses[q.index] === q.bonneReponse).length;
    return { categorie: cat, bonnes, total: questionsCat.length };
  });

  let categoriePrecedente = null;

  return (
    <div className="learning-page">
      <Link className="back-link" to="/annales">← Retour aux annales</Link>
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Sujet officiel</p>
        <h1>{annale.titre}</h1>
        {!valide ? (
          <p>{nombreRepondues} / {annale.questions.length} questions répondues.</p>
        ) : (
          <p>Score final : {score} / {annale.questions.length}.</p>
        )}
      </header>

      {valide && (
        <div className="do-dont" style={{ marginBottom: "2.5rem" }}>
          <div>
            <strong>Bilan par catégorie</strong>
            {scoreParCategorie.map((s) => (
              <p key={s.categorie}>{s.categorie} : {s.bonnes} / {s.total}</p>
            ))}
          </div>
          <div>
            <strong>Score global</strong>
            <p>{score} / {annale.questions.length} — soit {Math.round((score / annale.questions.length) * 100)} %.</p>
          </div>
        </div>
      )}

      {annale.questions.map((q, indexQuestion) => {
        const nouvelleCategorie = q.categorie !== categoriePrecedente;
        categoriePrecedente = q.categorie;

        return (
          <div key={indexQuestion}>
            {nouvelleCategorie && (
              <h2 style={{ marginTop: "2.5rem", paddingBottom: "0.5rem", borderBottom: "2px solid #dc2626", color: "#dc2626" }}>
                {q.categorie}
              </h2>
            )}

            <div className="lesson-section" style={{ marginBottom: "1.25rem" }}>
              <span className="lesson-number">{indexQuestion + 1}</span>
              <p style={{ fontWeight: 700, color: "#241a15" }}>{q.question}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "500px" }}>
                {q.choix.map((choix, indexChoix) => {
                  let couleur = "white";
                  if (valide) {
                    if (indexChoix === q.bonneReponse) couleur = "#dcf5ed";
                    else if (indexChoix === reponses[indexQuestion]) couleur = "#ffe3e0";
                  } else if (reponses[indexQuestion] === indexChoix) {
                    couleur = "#ffe4cc";
                  }

                  return (
                    <button
                      key={indexChoix}
                      onClick={() => choisirReponse(indexQuestion, indexChoix)}
                      style={{ padding: "0.7rem 0.9rem", backgroundColor: couleur, textAlign: "left", cursor: valide ? "default" : "pointer", borderRadius: "0.6rem" }}
                    >
                      {choix}
                    </button>
                  );
                })}
              </div>

              {valide && (
                <div className="example-box">
                  <p>💡 {q.explication}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {!valide ? (
        <button className="home-button home-button--primary" onClick={valider}>Valider mes réponses</button>
      ) : (
        <button className="home-button home-button--primary" onClick={recommencer}>Recommencer cette annale</button>
      )}
    </div>
  );
}

export default AnnaleDetail;
