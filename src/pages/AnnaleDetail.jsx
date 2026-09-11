import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { annales } from "../data/annales";

function AnnaleDetail() {
  const { annee } = useParams();
  const annale = annales[annee];
  const [reponses, setReponses] = useState({});
  const [valide, setValide] = useState(false);

  if (!annale) {
    return (
      <div>
        <h1>Annale introuvable</h1>
        <Link to="/annales">Retour aux annales</Link>
      </div>
    );
  }

  function choisirReponse(indexQuestion, indexChoix) {
    if (valide) return;
    setReponses({ ...reponses, [indexQuestion]: indexChoix });
  }

  function valider() {
    setValide(true);
  }

  function recommencer() {
    setReponses({});
    setValide(false);
  }

  const score = annale.questions.reduce(
    (total, q, index) => (reponses[index] === q.bonneReponse ? total + 1 : total),
    0
  );

  let categoriePrecedente = null;

  return (
    <div>
      <Link to="/annales">← Retour aux annales</Link>
      <h1>{annale.titre}</h1>

      {valide && (
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          Score : {score} / {annale.questions.length}
        </p>
      )}

      {annale.questions.map((q, indexQuestion) => {
        const nouvelleCategorie = q.categorie !== categoriePrecedente;
        categoriePrecedente = q.categorie;

        return (
          <div key={indexQuestion}>
            {nouvelleCategorie && (
              <h2
                style={{
                  marginTop: "2rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "2px solid #1d4ed8",
                  color: "#1d4ed8",
                }}
              >
                {q.categorie}
              </h2>
            )}

            <div style={{ marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid #ddd" }}>
              <h3>Question {indexQuestion + 1}</h3>
              <p>{q.question}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "450px" }}>
                {q.choix.map((choix, indexChoix) => {
                  let couleur = "white";
                  if (valide) {
                    if (indexChoix === q.bonneReponse) couleur = "lightgreen";
                    else if (indexChoix === reponses[indexQuestion]) couleur = "lightcoral";
                  } else if (reponses[indexQuestion] === indexChoix) {
                    couleur = "#dbeafe";
                  }

                  return (
                    <button
                      key={indexChoix}
                      onClick={() => choisirReponse(indexQuestion, indexChoix)}
                      style={{ padding: "0.6rem", backgroundColor: couleur, textAlign: "left", cursor: valide ? "default" : "pointer" }}
                    >
                      {choix}
                    </button>
                  );
                })}
              </div>

              {valide && (
                <p style={{ marginTop: "0.5rem", fontStyle: "italic", color: "#333" }}>
                  💡 {q.explication}
                </p>
              )}
            </div>
          </div>
        );
      })}

      {!valide ? (
        <button onClick={valider}>Valider mes réponses</button>
      ) : (
        <button onClick={recommencer}>Recommencer cette annale</button>
      )}
    </div>
  );
}

export default AnnaleDetail;