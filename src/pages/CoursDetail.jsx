import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cours } from "../data/cours";

function CoursDetail() {
  const { sujet } = useParams();
  const c = cours[sujet];
  const [reponses, setReponses] = useState({});

  if (!c) {
    return (
      <div>
        <h1>Cours introuvable</h1>
        <Link to="/entrainement">Retour à l'entraînement</Link>
      </div>
    );
  }

  function choisirReponse(indexExercice, indexChoix) {
    setReponses({ ...reponses, [indexExercice]: indexChoix });
  }

  return (
    <div>
      <Link to="/entrainement">← Retour à l'entraînement</Link>
      <h1>{c.titre}</h1>

      <h2>Le cours</h2>
      {c.explication.map((ligne, i) => (
        <p key={i}>{ligne}</p>
      ))}

      <h2>Exemples</h2>
      {c.exemples.map((ex, i) => (
        <div key={i} style={{ marginBottom: "1rem", padding: "1rem", backgroundColor: "#f4f6f8", borderRadius: "8px" }}>
          <p><strong>{ex.enonce}</strong></p>
          <p style={{ color: "#1d4ed8" }}>💡 {ex.solution}</p>
        </div>
      ))}

      <h2>À toi de jouer</h2>
      {c.exercices.map((ex, indexExercice) => {
        const reponseChoisie = reponses[indexExercice];

        return (
          <div key={indexExercice} style={{ marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #ddd" }}>
            <p><strong>{ex.question}</strong></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}>
              {ex.choix.map((choix, indexChoix) => {
                let couleur = "white";
                if (reponseChoisie !== undefined) {
                  if (indexChoix === ex.bonneReponse) couleur = "lightgreen";
                  else if (indexChoix === reponseChoisie) couleur = "lightcoral";
                }
                return (
                  <button
                    key={indexChoix}
                    onClick={() => choisirReponse(indexExercice, indexChoix)}
                    style={{ padding: "0.6rem", backgroundColor: couleur, textAlign: "left", cursor: "pointer" }}
                  >
                    {choix}
                  </button>
                );
              })}
            </div>
            {reponseChoisie !== undefined && (
              <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>💡 {ex.explication}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CoursDetail;