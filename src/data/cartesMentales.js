export const cartesMentales = [
  {
    id: "vue-ensemble",
    titre: "Vue d'ensemble du concours",
    hub: "Concours Agent Cat. C — DGFiP",
    cta: { texte: "Voir la fiche complète", lien: "/concours" },
    branches: [
      {
        titre: "Le poste",
        icone: "💼",
        couleur: "bleu",
        lien: "/concours",
        points: [
          "Catégorie C, 1er niveau de la hiérarchie",
          "Accueil, gestion, traitement de dossiers",
          "Grade final : agent administratif principal 2e classe",
        ],
      },
      {
        titre: "Conditions d'accès",
        icone: "📋",
        couleur: "vert",
        lien: "/concours",
        points: [
          "Nationalité française (UE/EEE selon corps)",
          "Brevet (DNB) ou niveau 3",
          "Casier judiciaire compatible",
        ],
      },
      {
        titre: "3 épreuves",
        icone: "📝",
        couleur: "orange",
        lien: "/methodologie",
        points: [
          "QCM · 1 h 30 · coefficient 1",
          "Cas pratique · 3 h · coefficient 2",
          "Oral · 20 min · coefficient 3",
        ],
      },
      {
        titre: "Jour J",
        icone: "🎒",
        couleur: "violet",
        lien: "/concours",
        points: [
          "Pièce d'identité + convocation",
          "Téléphone éteint et rangé",
          "Anonymat strict de la copie",
        ],
      },
    ],
  },
  {
    id: "qcm",
    titre: "Carte mentale du QCM",
    hub: "QCM · 1 h 30 · coefficient 1",
    cta: { texte: "Revoir la méthode du QCM", lien: "/methodologie/qcm" },
    branches: [
      {
        titre: "Orthographe & langue",
        icone: "🔤",
        couleur: "bleu",
        lien: "/quiz/orthographe",
        points: [
          "Accords avec avoir / être",
          "« cent »/« vingt » invariables devant un nombre",
          "Figures de style (anaphore, oxymore...)",
        ],
      },
      {
        titre: "Calcul",
        icone: "🔢",
        couleur: "vert",
        lien: "/quiz/calcul",
        points: [
          "Priorité des opérations",
          "Remise puis TVA : coefficients successifs",
          "Moyenne vs médiane",
        ],
      },
      {
        titre: "Raisonnement logique",
        icone: "🧩",
        couleur: "orange",
        lien: "/quiz/raisonnement",
        points: [
          "Repérer le type de suite avant de calculer",
          "La fausse réciproque",
          "Décoder un code lettre ↔ chiffre",
        ],
      },
      {
        titre: "Culture générale",
        icone: "🌍",
        couleur: "violet",
        lien: "/quiz/culture-generale",
        points: [
          "Institutions et séparation des pouvoirs",
          "Actualité récente",
          "Chiffres clés de la DGFiP",
        ],
      },
      {
        titre: "Vocabulaire administratif",
        icone: "📚",
        couleur: "or",
        lien: "/quiz/vocabulaire",
        points: [
          "Fiscalité : TVA, IR, cadastre",
          "Fonction publique : catégories, statut",
          "Institutions : décret, arrêté, circulaire",
        ],
      },
    ],
  },
  {
    id: "cas-pratique",
    titre: "Réussir le cas pratique",
    hub: "Cas pratique · 3 h · coefficient 2",
    cta: { texte: "S'entraîner sur un sujet complet", lien: "/cas-pratique" },
    branches: [
      {
        titre: "Commande",
        icone: "🎯",
        couleur: "bleu",
        lien: "/methodologie/cas-pratique",
        points: [
          "Verbe, quantité, format, destinataire",
          "Longueur imposée à respecter",
        ],
      },
      {
        titre: "Dossier",
        icone: "📂",
        couleur: "vert",
        lien: "/methodologie/cas-pratique",
        points: [
          "Repérer constats, causes, chiffres",
          "Regrouper par idées, pas document par document",
        ],
      },
      {
        titre: "Synthèse",
        icone: "✍️",
        couleur: "orange",
        lien: "/methodologie/cas-pratique",
        points: [
          "Plan en 2 à 3 parties",
          "Une idée principale par paragraphe",
        ],
      },
      {
        titre: "Support de communication",
        icone: "📧",
        couleur: "violet",
        lien: "/methodologie/cas-pratique",
        points: [
          "Immédiatement utilisable",
          "Qui parle, à qui, pour quoi faire",
        ],
      },
      {
        titre: "Relecture",
        icone: "🔍",
        couleur: "or",
        lien: "/methodologie/cas-pratique",
        points: [
          "Verbes, accords, pluriels",
          "Anonymat et présentation soignée",
        ],
      },
    ],
  },
  {
    id: "strategie-revision",
    titre: "Comment réviser efficacement ?",
    hub: "Ta stratégie de révision",
    cta: { texte: "Voir ma progression", lien: "/progression" },
    branches: [
      {
        titre: "Apprendre",
        icone: "📖",
        couleur: "bleu",
        lien: "/entrainement",
        points: [
          "Cours ciblés (Entraînement)",
          "Glossaire du vocabulaire",
          "Astuces & règles récurrentes",
        ],
      },
      {
        titre: "Mémoriser",
        icone: "🧠",
        couleur: "vert",
        lien: "/flashcards",
        points: [
          "Flashcards + révision espacée",
          "Jeu d'association chronométré",
        ],
      },
      {
        titre: "Tester mes connaissances",
        icone: "✅",
        couleur: "orange",
        lien: "/quiz",
        points: [
          "Quiz par catégorie, avec explications",
          "Sprint chrono, toutes catégories",
        ],
      },
      {
        titre: "Se mettre en condition",
        icone: "🎯",
        couleur: "violet",
        lien: "/annales",
        points: [
          "Annales corrigées (5 sessions réelles)",
          "Cas pratique complet avec corrigé",
        ],
      },
      {
        titre: "Suivre ma progression",
        icone: "📈",
        couleur: "or",
        lien: "/progression",
        points: [
          "Séries de jours consécutifs et badges",
          "Statistiques cumulées sur tous les outils",
        ],
      },
    ],
  },
  {
    id: "glossaire",
    titre: "Le glossaire en 4 familles",
    hub: "55 mots à connaître",
    cta: { texte: "Ouvrir le glossaire complet", lien: "/glossaire" },
    branches: [
      {
        titre: "Fiscalité & impôts",
        icone: "💶",
        couleur: "bleu",
        lien: "/glossaire",
        points: [
          "TVA, impôt direct / indirect",
          "Avis d'imposition, cadastre",
        ],
      },
      {
        titre: "Finances publiques",
        icone: "🏦",
        couleur: "vert",
        lien: "/glossaire",
        points: [
          "Trésor public, comptable public",
          "LOLF, loi de finances",
        ],
      },
      {
        titre: "Fonction publique & statut",
        icone: "🧑‍💼",
        couleur: "orange",
        lien: "/glossaire",
        points: [
          "Catégories A, B, C",
          "Neutralité, discrétion professionnelle",
        ],
      },
      {
        titre: "Institutions & droit",
        icone: "⚖️",
        couleur: "violet",
        lien: "/glossaire",
        points: [
          "Décret, arrêté, circulaire",
          "Décentralisation, déconcentration",
        ],
      },
    ],
  },
  {
    id: "institutions",
    titre: "Institutions & République",
    hub: "Organisation de l'État",
    cta: { texte: "Revoir le cours complet", lien: "/entrainement/institutions-culture-generale" },
    branches: [
      {
        titre: "Les 3 pouvoirs",
        icone: "🏛️",
        couleur: "bleu",
        lien: "/entrainement/institutions-culture-generale",
        points: [
          "Exécutif : président + gouvernement",
          "Législatif : Assemblée + Sénat",
          "Judiciaire : tribunaux indépendants",
        ],
      },
      {
        titre: "Collectivités territoriales",
        icone: "🗺️",
        couleur: "vert",
        lien: "/entrainement/institutions-culture-generale",
        points: [
          "Commune, département, région",
          "Élus locaux, compétences propres",
        ],
      },
      {
        titre: "Déconcentration",
        icone: "📍",
        couleur: "orange",
        lien: "/entrainement/institutions-culture-generale",
        points: [
          "Préfecture, DDFiP",
          "Représentent l'État localement",
        ],
      },
      {
        titre: "Hiérarchie des normes",
        icone: "📜",
        couleur: "violet",
        lien: "/entrainement/institutions-culture-generale",
        points: [
          "Constitution > lois > décrets",
          "Arrêtés et circulaires en dernier",
        ],
      },
    ],
  },
];
