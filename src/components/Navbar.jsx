import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Navigation principale">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand">Objectif DGFiP</Link>
        <div className="site-nav__links">
          <Link to="/" className="site-nav__link">Accueil</Link>
          <Link to="/concours" className="site-nav__link">Le concours</Link>
          <Link to="/methodologie" className="site-nav__link">Méthodologie</Link>
          <Link to="/glossaire" className="site-nav__link">Glossaire</Link>
          <Link to="/flashcards" className="site-nav__link">Flashcards</Link>
          <Link to="/articles" className="site-nav__link">Articles</Link>
          <Link to="/entrainement" className="site-nav__link">Entraînement</Link>
          <Link to="/annales" className="site-nav__link">Annales</Link>
          <Link to="/quiz" className="site-nav__link">Quiz</Link>
          <Link to="/liens" className="site-nav__link">Liens utiles</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
