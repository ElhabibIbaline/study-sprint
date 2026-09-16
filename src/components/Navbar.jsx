import { Link, NavLink } from "react-router-dom";

function classeLien({ isActive }) {
  return `site-nav__link${isActive ? " site-nav__link--active" : ""}`;
}

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Navigation principale">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand">
          <svg className="site-nav__logo" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="4" y="27" width="9" height="14" rx="2.5" fill="currentColor" opacity="0.55" />
            <rect x="19.5" y="17" width="9" height="24" rx="2.5" fill="currentColor" opacity="0.78" />
            <rect x="35" y="7" width="9" height="34" rx="2.5" fill="currentColor" />
          </svg>
          Tremplin
        </Link>
        <div className="site-nav__links">
          <NavLink to="/" end className={classeLien}>Accueil</NavLink>
          <NavLink to="/concours" className={classeLien}>Le concours</NavLink>
          <NavLink to="/methodologie" className={classeLien}>Méthodologie</NavLink>
          <NavLink to="/cas-pratique" className={classeLien}>Cas pratique</NavLink>
          <NavLink to="/glossaire" className={classeLien}>Glossaire</NavLink>
          <NavLink to="/flashcards" className={classeLien}>Flashcards</NavLink>
          <NavLink to="/jeu-association" className={classeLien}>Jeu</NavLink>
          <NavLink to="/progression" className={classeLien}>Progression</NavLink>
          <NavLink to="/articles" className={classeLien}>Articles</NavLink>
          <NavLink to="/entrainement" className={classeLien}>Entraînement</NavLink>
          <NavLink to="/annales" className={classeLien}>Annales</NavLink>
          <NavLink to="/quiz" className={classeLien}>Quiz</NavLink>
          <NavLink to="/liens" className={classeLien}>Liens utiles</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
