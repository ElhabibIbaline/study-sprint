import { Link } from "react-router-dom";
import { cours } from "../data/cours";

function Entrainement() {
  return (
    <div>
      <h1>Entraînement</h1>
      <p>Des petits cours pour revoir les notions clés, avec des exercices pour t'entraîner.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        {Object.entries(cours).map(([cle, c]) => (
          <Link
            key={cle}
            to={`/entrainement/${cle}`}
            style={{ display: "block", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "white" }}
          >
            <strong>{c.titre}</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#555" }}>{c.exercices.length} exercices</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Entrainement;