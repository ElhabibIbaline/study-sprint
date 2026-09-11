const liens = [
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
    <div>
      <h1>Liens utiles</h1>
      <p>Des ressources externes pour compléter ta préparation.</p>

      <ul style={{ maxWidth: "500px" }}>
        {liens.map((lien, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <a href={lien.url} target="_blank" rel="noopener noreferrer">
              <strong>{lien.titre}</strong>
            </a>
            <p style={{ margin: "0.25rem 0 0" }}>{lien.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Liens;