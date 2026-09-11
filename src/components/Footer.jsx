import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        <Link to="/" style={{ color: "white" }}>Accueil</Link>
        <Link to="/methodologie" style={{ color: "white" }}>Méthodologie</Link>
        <Link to="/quiz" style={{ color: "white" }}>Quiz</Link>
        <Link to="/annales" style={{ color: "white" }}>Annales</Link>
        <Link to="/entrainement" style={{ color: "white" }}>Entraînement</Link>
        <Link to="/articles" style={{ color: "white" }}>Articles</Link>
        <Link to="/liens" style={{ color: "white" }}>Liens utiles</Link>
      </div>
      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem", opacity: 0.8 }}>
        Site de préparation au concours DGFiP catégorie C — usage personnel
      </p>
    </footer>
  );
}

export default Footer;
