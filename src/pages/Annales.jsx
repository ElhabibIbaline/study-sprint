import { Link } from "react-router-dom";
import { annales } from "../data/annales";

function Annales() {
  return (
    <div>
      <h1>Annales corrigées</h1>
      <p>Entraîne-toi dans les conditions réelles du concours, avec une correction détaillée.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        {Object.entries(annales).map(([cle, annale]) => (
          <Link
            key={cle}
            to={`/annales/${cle}`}
            style={{ display: "block", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "white" }}
          >
            <strong>{annale.titre}</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#555" }}>{annale.questions.length} questions</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Annales;