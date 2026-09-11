const liens = [
  {
    titre: "Inscription aux concours DGFiP",
    url: "https://concours.dgfip.finances.gouv.fr/",
    description: "Le portail officiel pour consulter les avis de concours et s'inscrire en ligne.",
  },
  {
    titre: "Rejoindre les finances publiques",
    url: "https://rejoindrelesfinancespubliques.economie.gouv.fr/",
    description: "Présentation des métiers, des concours et du calendrier de recrutement de la DGFiP.",
  },
  {
    titre: "Site officiel de la fonction publique",
    url: "https://www.fonction-publique.gouv.fr/",
    description: "Informations officielles sur les concours de la fonction publique.",
  },
  {
    titre: "Portail de la DGFIP",
    url: "https://www.economie.gouv.fr/dgfip",
    description: "Le site institutionnel de la Direction Générale des Finances Publiques.",
  },
  {
    titre: "Annales et sujets de concours",
    url: "https://www.devenirfonctionnaire.fr/",
    description: "Exemples d'annales pour s'entraîner sur des sujets réels.",
  },
];

function Liens() {
  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Aller plus loin</p>
        <h1>Liens utiles</h1>
        <p>Des ressources officielles pour compléter ta préparation et t'inscrire au concours.</p>
      </header>

      <div className="hub-grid">
        {liens.map((lien) => (
          <a key={lien.url} href={lien.url} target="_blank" rel="noopener noreferrer" className="hub-card hub-card--external">
            <strong>{lien.titre}</strong>
            <p>{lien.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Liens;