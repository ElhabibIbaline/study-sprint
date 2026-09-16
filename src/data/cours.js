export const cours = {
  "coefficient-multiplicateur": {
    titre: "Le coefficient multiplicateur (CM)",
    explication: [
      "Le coefficient multiplicateur permet de calculer directement un prix (ou une quantité) après une augmentation ou une diminution en pourcentage, en une seule multiplication.",
      "Pour une AUGMENTATION de t % : CM = 1 + (t / 100)",
      "Pour une DIMINUTION de t % : CM = 1 - (t / 100)",
      "Nouvelle valeur = valeur initiale × CM",
      "À l'inverse, si on connaît le CM, le taux d'évolution est : (CM - 1) × 100",
    ],
    exemples: [
      { enonce: "Un article à 80 € augmente de 25 %. Quel est le nouveau prix ?", solution: "CM = 1 + 0,25 = 1,25. Nouveau prix = 80 × 1,25 = 100 €." },
      { enonce: "Un salaire de 2000 € diminue de 10 %. Quel est le nouveau salaire ?", solution: "CM = 1 - 0,10 = 0,90. Nouveau salaire = 2000 × 0,90 = 1800 €." },
      { enonce: "Un prix a été multiplié par 1,08. Quel est le taux d'évolution ?", solution: "(1,08 - 1) × 100 = 8 %, donc une augmentation de 8 %." },
    ],
    exercices: [
      { question: "Un prix de 50 € augmente de 12 %. Quel coefficient multiplicateur applique-t-on ?", choix: ["0,88", "1,12", "1,88", "12"], bonneReponse: 1, explication: "Augmentation de 12 % → CM = 1 + 0,12 = 1,12." },
      { question: "Une population diminue de 8 %. Quel est le coefficient multiplicateur ?", choix: ["0,08", "0,92", "1,08", "0,8"], bonneReponse: 1, explication: "Diminution de 8 % → CM = 1 - 0,08 = 0,92." },
      { question: "Un CM de 1,15 correspond à quelle évolution ?", choix: ["+15 %", "-15 %", "+1,15 %", "+150 %"], bonneReponse: 0, explication: "(1,15-1)×100 = 15, donc une augmentation de 15 %." },
      { question: "Un prix initial de 120 € est multiplié par 0,75. Quel est le nouveau prix ?", choix: ["90 €", "95 €", "80 €", "85 €"], bonneReponse: 0, explication: "120 × 0,75 = 90 €." },
    ],
  },

  "pourcentages": {
    titre: "Calculer un pourcentage",
    explication: [
      "Calculer X % d'une valeur Y : on fait Y × X / 100.",
      "Trouver le pourcentage qu'une valeur X représente par rapport à un total Y : on fait (X / Y) × 100.",
      "Astuce : diviser par 100 revient à déplacer la virgule de deux rangs vers la gauche.",
    ],
    exemples: [
      { enonce: "Quel est 20 % de 150 ?", solution: "150 × 20 / 100 = 150 × 0,20 = 30." },

      { enonce: "15 sur 60, quel pourcentage cela représente-t-il ?", solution: "(15 / 60) × 100 = 25 %." },
      { enonce: "Un article à 40 € bénéficie d'une remise de 15 %. Quel est le montant de la remise ?", solution: "40 × 15 / 100 = 6 €." },
    ],
    exercices: [
      { question: "Quel est 30 % de 200 ?", choix: ["30", "60", "70", "600"], bonneReponse: 1, explication: "200 × 0,30 = 60." },
      { question: "12 sur 48, quel pourcentage cela représente-t-il ?", choix: ["12 %", "20 %", "25 %", "40 %"], bonneReponse: 2, explication: "(12/48)×100 = 25 %." },
      { question: "Un salaire de 1500 € reçoit une prime de 8 %. Montant de la prime ?", choix: ["8 €", "12 €", "108 €", "120 €"], bonneReponse: 3, explication: "1500 × 0,08 = 120 €." },
      { question: "45 est quel pourcentage de 180 ?", choix: ["15 %", "20 %", "25 %", "30 %"], bonneReponse: 2, explication: "(45/180)×100 = 25 %." },
    ],
  },

  "accords-participe-passe": {
    titre: "Comprendre les accords du participe passé",
    explication: [
      "Avec l'auxiliaire ÊTRE : le participe passé s'accorde toujours avec le SUJET du verbe.",
      "Exemple : « Elle est partie » (accord avec 'elle', féminin singulier).",
      "Avec l'auxiliaire AVOIR : le participe passé s'accorde avec le COD (complément d'objet direct) UNIQUEMENT SI ce COD est placé AVANT le verbe.",
      "Si le COD est placé après le verbe (ou s'il n'y a pas de COD), le participe passé reste INVARIABLE.",
    ],
    exemples: [
      { enonce: "« Les lettres qu'il a envoyé... » : envoyé ou envoyées ?", solution: "COD = 'que' (mis pour 'les lettres', féminin pluriel), placé AVANT le verbe → on accorde : « envoyées »." },
      { enonce: "« Il a mangé des pommes » : faut-il accorder mangé ?", solution: "Le COD 'des pommes' est placé APRÈS le verbe → 'mangé' reste invariable." },
      { enonce: "« Ils sont arrivé... » : arrivé ou arrivés ?", solution: "Auxiliaire être → accord avec le sujet 'ils' (masculin pluriel) → « arrivés »." },
    ],
    exercices: [
      { question: "« Les documents qu'elle a … sont sur le bureau » (envoyer)", choix: ["envoyé", "envoyés", "envoyée", "envoyées"], bonneReponse: 3, explication: "COD 'que' = les documents (masc plur)... attention : ici le sujet est 'elle' mais le COD 'les documents' est féminin ? Non, 'documents' est masculin. Réponse correcte : envoyés. ⚠️ Vérifie le genre du nom dans ton exercice." },
      { question: "« Elles sont … tôt ce matin » (partir)", choix: ["parti", "partis", "partie", "parties"], bonneReponse: 3, explication: "Auxiliaire être → accord avec le sujet 'elles' (féminin pluriel) → « parties »." },
      { question: "« J'ai … plusieurs livres cette année » (lire)", choix: ["lu", "lus", "lue", "lues"], bonneReponse: 0, explication: "COD 'plusieurs livres' placé après le verbe → participe invariable : « lu »." },
      { question: "« La lettre qu'il a … est arrivée » (écrire)", choix: ["écrit", "écrits", "écrite", "écrites"], bonneReponse: 2, explication: "COD 'que' = la lettre (fém sing), placé avant le verbe → accord : « écrite »." },
    ],
  },

  "raisonnement-logique": {
    titre: "Raisonnement logique : suites, déductions et analogies",
    explication: [
      "Une suite numérique ou alphabétique suit une règle fixe : addition, multiplication, alternance de deux règles, ou différences qui augmentent régulièrement. Repérez d'abord la relation entre deux termes consécutifs, puis vérifiez qu'elle fonctionne sur toute la suite.",
      "Un syllogisme relie deux affirmations pour en tirer une conclusion. Cette conclusion n'est valide que si elle découle strictement des deux affirmations, sans ajouter d'hypothèse supplémentaire.",
      "Piège fréquent, la fausse réciproque : « tous les A sont B » ne permet jamais de conclure que « tout B est un A ». Une condition nécessaire n'est pas forcément suffisante.",
      "Une analogie (A est à B ce que C est à D) repose sur une relation logique précise entre les deux premiers termes, qu'il faut retrouver à l'identique entre les deux derniers.",
    ],
    exemples: [
      { enonce: "Complétez : 5, 10, 20, 40, ...", solution: "Chaque terme est multiplié par 2. Le suivant est 40 × 2 = 80." },
      { enonce: "Tous les agents de catégorie C ont réussi un concours. Léa a réussi un concours. Est-elle forcément agent de catégorie C ?", solution: "Non : réussir un concours est une condition nécessaire mais pas suffisante pour être agent de catégorie C, puisque d'autres concours existent. C'est une fausse réciproque." },
      { enonce: "Marteau est à Clou ce que Tournevis est à :", solution: "Vis. La relation est « l'outil sert à enfoncer ou serrer cet objet »." },
    ],
    exercices: [
      { question: "Complétez la suite : 3, 9, 27, 81, ...", choix: ["162", "243", "324", "405"], bonneReponse: 1, explication: "Chaque terme est multiplié par 3 : 81 × 3 = 243." },
      { question: "Complétez la suite : 2, 3, 5, 8, 12, ...", choix: ["16", "17", "18", "20"], bonneReponse: 1, explication: "Les différences augmentent de 1 à chaque fois (+1, +2, +3, +4), donc +5 : 12 + 5 = 17." },
      { question: "Tous les fonctionnaires titulaires ont un numéro de matricule. Karim a un numéro de matricule. Peut-on affirmer que Karim est titulaire ?", choix: ["Oui, c'est certain", "Non, ce n'est pas garanti", "Impossible à dire du tout", "Cela dépend de son grade"], bonneReponse: 1, explication: "Avoir un matricule est nécessaire mais pas suffisant pour être titulaire : d'autres agents (stagiaires, contractuels) peuvent aussi en avoir un. Fausse réciproque." },
      { question: "Clé est à Serrure ce que Code est à :", choix: ["Cadenas", "Digicode", "Porte", "Sécurité"], bonneReponse: 1, explication: "La relation est « ce qui permet d'ouvrir ce dispositif » : une clé ouvre une serrure, un code ouvre un digicode." },
    ],
  },

  "institutions-culture-generale": {
    titre: "Institutions françaises et organisation administrative",
    explication: [
      "La France est une République dont les pouvoirs sont séparés : le pouvoir exécutif (président de la République et gouvernement), le pouvoir législatif (le Parlement, composé de l'Assemblée nationale et du Sénat) et le pouvoir judiciaire (les tribunaux, indépendants).",
      "Le territoire est organisé en collectivités territoriales : la commune, le département et la région, chacune dotée d'un exécutif élu et de compétences propres, exercées de façon autonome.",
      "L'État agit aussi localement par l'intermédiaire de services déconcentrés (préfectures, DDFiP...), qui appliquent les décisions nationales sans être des collectivités autonomes : c'est la déconcentration, à ne pas confondre avec la décentralisation.",
      "La hiérarchie des normes organise les textes juridiques du plus important au moins important : la Constitution, puis les lois, puis les décrets, puis les arrêtés et circulaires.",
    ],
    exemples: [
      { enonce: "Qui exerce le pouvoir législatif en France ?", solution: "Le Parlement, composé de l'Assemblée nationale et du Sénat." },
      { enonce: "Quelle est la différence entre décentralisation et déconcentration ?", solution: "La décentralisation transfère des compétences à des collectivités autonomes (une région, par exemple). La déconcentration répartit les moyens de l'État lui-même entre son administration centrale et ses services locaux (une préfecture, par exemple)." },
      { enonce: "Un décret peut-il contredire une loi ?", solution: "Non : dans la hiérarchie des normes, le décret est subordonné à la loi et ne peut ni la modifier ni la contredire." },
    ],
    exercices: [
      { question: "Quelles sont les trois collectivités territoriales de base qui structurent le territoire français ?", choix: ["Commune, département, région", "Commune, canton, arrondissement", "Préfecture, département, région", "Mairie, préfecture, ministère"], bonneReponse: 0, explication: "Commune, département et région sont les trois niveaux de collectivités territoriales dotées d'une autonomie de décision." },
      { question: "Qui est à la tête du pouvoir exécutif en France ?", choix: ["Le président de l'Assemblée nationale", "Le président de la République et le gouvernement", "Le président du Conseil constitutionnel", "Le procureur de la République"], bonneReponse: 1, explication: "Le pouvoir exécutif est exercé par le président de la République et le gouvernement, dirigé par le Premier ministre." },
      { question: "Quel texte est immédiatement supérieur à un décret dans la hiérarchie des normes ?", choix: ["Une circulaire", "Un arrêté", "La loi", "Un règlement intérieur"], bonneReponse: 2, explication: "La hiérarchie place la loi au-dessus du décret, lui-même au-dessus des arrêtés et circulaires." },
      { question: "Une préfecture est :", choix: ["Une collectivité territoriale autonome", "Un service déconcentré de l'État", "Un organe du pouvoir judiciaire", "Une chambre du Parlement"], bonneReponse: 1, explication: "La préfecture représente l'État au niveau local : c'est un service déconcentré, pas une collectivité territoriale autonome." },
    ],
  },
};