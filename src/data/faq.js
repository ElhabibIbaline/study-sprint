export const categoriesFaq = {
  synthese: "Note de synthèse — le plan",
  support: "Support de communication",
  general: "Cas pratique — général",
};

export const faq = [
  // --- NOTE DE SYNTHÈSE : LE PLAN ---
  {
    categorie: "synthese",
    question: "Existe-t-il un plan type imposé pour la note de synthèse ?",
    reponse:
      "Non, il n'y a pas un plan unique imposé par les textes. En revanche, quatre familles de plans couvrent la quasi-totalité des sujets rencontrés : constat / réponses, avantages / limites, causes / conséquences, situation / perspectives. Le bon choix dépend de la logique de la consigne, jamais du hasard ni d'un plan appris par cœur.",
  },
  {
    categorie: "synthese",
    question: "Comment savoir lequel des quatre plans correspond à mon sujet ?",
    reponse:
      "Reformule la consigne en question, puis regarde quel verbe ou quelle logique domine. « Quels problèmes, quelles solutions ? » → constat / réponses. « Faut-il… ? », « quel bilan ? » → avantages / limites. « Pourquoi… ? », « quels effets ? » → causes / conséquences. « Où en est-on ? », « quelle évolution ? » → situation / perspectives. Si le dossier hésite entre deux logiques, choisis celle qui permet de classer le plus naturellement l'ensemble des documents, pas seulement la moitié.",
  },
  {
    categorie: "synthese",
    question: "Plan constat / réponses : à quoi ça ressemble concrètement ?",
    reponse:
      "C'est le plan le plus fréquent. Partie I : la situation et ce qui pose difficulté, avec des chiffres qui en montrent l'ampleur. Partie II : les réponses déjà apportées ou envisagées. Le cas pratique « dématérialisation des démarches fiscales » suit exactement cette logique : la progression du numérique et les difficultés qu'elle laisse de côté (partie I), puis les dispositifs d'accompagnement comme France Services ou les rendez-vous téléphoniques (partie II).",
  },
  {
    categorie: "synthese",
    question: "Plan avantages / limites : dans quel cas l'utiliser plutôt qu'un autre ?",
    reponse:
      "Quand le dossier met en balance, pour une même mesure, ce qu'elle apporte et ce qu'elle pose comme difficultés — sans qu'il s'agisse d'un problème suivi de sa solution, mais bien d'un même dispositif à double tranchant. Exemple : un sujet sur la dématérialisation qui demanderait explicitement « quels bénéfices, quelles limites ? » plutôt que « quels problèmes, quelles réponses ? » : la nuance est fine, elle se joue sur la formulation exacte de la consigne.",
  },
  {
    categorie: "synthese",
    question: "Plan causes / conséquences : comment le reconnaître ?",
    reponse:
      "Il convient quand la consigne interroge l'origine d'un phénomène et ses effets, plutôt que la réponse qui y est apportée. Le cas pratique sur l'hameçonnage fiscal pourrait se plier à ce plan : les causes de la progression du phénomène (facilité technique, contexte de dématérialisation) en partie I, ses conséquences pour les usagers et l'administration en partie II. C'est différent du plan constat / réponses, qui s'arrête sur les solutions plutôt que sur les effets.",
  },
  {
    categorie: "synthese",
    question: "Plan situation / perspectives : quand est-il pertinent ?",
    reponse:
      "Quand le sujet demande un état des lieux suivi d'une projection : « où en est-on, et quelles évolutions se dessinent ? ». Il se distingue du plan constat / réponses par sa deuxième partie, tournée vers l'avenir et les adaptations à venir plutôt que vers les mesures déjà en place. Utile pour des sujets qui insistent sur une trajectoire ou un chantier encore ouvert.",
  },
  {
    categorie: "synthese",
    question: "Et si mon sujet semble correspondre à deux plans à la fois ?",
    reponse:
      "Choisis le plan qui permet de classer le plus naturellement l'ensemble des documents du dossier, pas seulement la moitié. Si un document résiste vraiment aux deux parties envisagées, c'est souvent le signe qu'un autre découpage conviendrait mieux : reprends la consigne reformulée en question et vérifie qu'elle correspond bien à la logique du plan choisi avant de rédiger.",
  },
  {
    categorie: "synthese",
    question: "Faut-il annoncer le plan dans l'introduction, et comment le formuler ?",
    reponse:
      "Oui, systématiquement. L'introduction se termine par une phrase qui annonce les deux parties, avec leurs intitulés exacts — pas une formule vague du type « nous verrons différents aspects ». Exemple : « Après avoir présenté les enjeux de la dématérialisation pour les usagers, on étudiera les réponses apportées par l'administration. » Cette annonce doit correspondre mot pour mot aux titres réellement utilisés ensuite.",
  },
  {
    categorie: "synthese",
    question: "Le plan doit-il être parfaitement équilibré entre les deux parties ?",
    reponse:
      "Il doit surtout être équilibré à l'œil : évite qu'une partie fasse le triple de l'autre. Une symétrie au mot près n'est pas exigée, mais un déséquilibre marqué signale au correcteur un plan mal préparé ou un dossier mal réparti. Vise deux parties de longueur comparable, chacune appuyée sur plusieurs documents.",
  },
  {
    categorie: "synthese",
    question: "Quelles erreurs de plan sont les plus pénalisées par le jury ?",
    reponse:
      "Le plan « catalogue », qui traite un document par sous-partie au lieu de regrouper les idées ; le plan déséquilibré ; l'absence d'annonce de plan, ou une annonce qui ne correspond pas aux titres utilisés ensuite ; et surtout un plan qui ne répond pas à la question posée par la consigne, même s'il reprend fidèlement le contenu du dossier. Un dossier bien compris mais mal reformulé en plan reste sanctionné.",
  },

  // --- SUPPORT DE COMMUNICATION ---
  {
    categorie: "support",
    question: "Quels formats de support de communication peuvent être demandés ?",
    reponse:
      "Quatre formats reviennent le plus souvent : le courriel (informations classées, action attendue), la fiche informative (objectif, public visé, étapes numérotées), la note de service (consigne précise, date d'application, signataire) et le support visuel comme une affiche ou un encart (message clé unique, quelques chiffres, très peu de texte). Chacun suit un gabarit fixe, propre à son format.",
  },
  {
    categorie: "support",
    question: "Comment savoir quel format utiliser si la consigne ne le précise pas explicitement ?",
    reponse:
      "Identifie d'abord qui parle, à qui, et dans quel but. Un message pour des agents en interne, avec une consigne à appliquer → note de service. Une information ponctuelle à transmettre à des collègues → courriel. Un message destiné au grand public, à lire en quelques secondes dans une salle d'attente → affiche ou fiche informative. Si la consigne cite un format précis (« rédigez un courriel », « une fiche affichée en salle d'attente »), c'est celui-là qu'il faut utiliser, sans en changer.",
  },
  {
    categorie: "support",
    question: "Un support de communication doit-il être rédigé en paragraphes argumentés, comme une synthèse ?",
    reponse:
      "Non, c'est l'erreur la plus fréquente. Contrairement à la synthèse, un support de communication ne se construit pas en parties argumentées : une idée par ligne ou par puce, un ton neutre et factuel, et une action attendue du lecteur explicite plutôt que déductible. C'est un outil pratique et immédiatement utilisable, pas une démonstration.",
  },
  {
    categorie: "support",
    question: "Quelle différence entre une note de service et une fiche informative ?",
    reponse:
      "La note de service a une portée impérative : elle rappelle brièvement le contexte puis fixe une ou plusieurs consignes précises à appliquer, avec une date d'application et un signataire. La fiche informative n'impose rien : elle informe un public (souvent externe) à travers un objectif, des étapes numérotées et des précautions, sans exiger d'action réglementaire de sa part.",
  },
  {
    categorie: "support",
    question: "Faut-il argumenter ou justifier une mesure dans un support de communication ?",
    reponse:
      "Non : le support de communication transmet une information utilisable, il ne cherche pas à convaincre ni à démontrer. Rappelle le contexte en une phrase si nécessaire, puis va directement aux informations pratiques et à l'action attendue. Garde l'argumentation et la mise en perspective pour la note de synthèse.",
  },
  {
    categorie: "support",
    question: "Le support de communication tombe-t-il à toutes les sessions du concours ?",
    reponse:
      "Le texte officiel mentionne cette épreuve « le cas échéant » : elle est un peu moins systématique que la note de synthèse, mais elle est apparue dans la plupart des sessions récentes. Il vaut mieux la préparer comme si elle allait tomber plutôt que de faire l'impasse dessus.",
  },
  {
    categorie: "support",
    question: "Quelle est la différence entre une action et un indicateur dans un support de communication ?",
    reponse:
      "Une action décrit ce que le service fait concrètement (proposer un rendez-vous, orienter vers France Services, afficher une consigne). Un indicateur décrit ce qui sera mesuré pour évaluer un résultat (un taux de fréquentation, un nombre de signalements). Un support de communication doit présenter des actions claires, pas des indicateurs : le lecteur doit savoir quoi faire, pas comment le dispositif sera évalué.",
  },

  // --- CAS PRATIQUE : QUESTIONS GÉNÉRALES ---
  {
    categorie: "general",
    question: "Quelle est la différence entre les questions courtes et la note de synthèse ?",
    reponse:
      "Une question courte porte sur un point précis du dossier et se répond en quelques phrases : réponse directe, puis explication, puis preuve tirée du dossier. La note de synthèse, elle, demande de reformuler l'ensemble du dossier autour d'un plan structuré en parties. On ne traite jamais une question courte comme une mini-synthèse, ni l'inverse.",
  },
  {
    categorie: "general",
    question: "Faut-il répondre aux questions avant ou après avoir lu tout le dossier ?",
    reponse:
      "Lis d'abord toutes les questions et crée une grille de travail : pour chaque question, note ce qui est demandé et ce qu'il faudra chercher. Lis ensuite le dossier activement, en repérant constats, causes, conséquences, avantages, risques, solutions, acteurs et chiffres au fil de la lecture. Répondre à une question avant d'avoir lu l'ensemble du dossier expose à manquer une information présente plus loin.",
  },
  {
    categorie: "general",
    question: "Combien de temps consacrer à chaque partie de l'épreuve de 3 heures ?",
    reponse:
      "Un repère indicatif : 10 minutes pour lire les questions et bâtir la grille de travail, 30 minutes de lecture active du dossier, 40 à 45 minutes pour les réponses courtes, 45 à 50 minutes pour la rédaction longue (la synthèse), 30 à 35 minutes pour le support demandé, et 10 à 15 minutes de relecture. Fixe une heure limite à chaque partie : une réponse simple et complète sur l'ensemble du sujet vaut mieux qu'une partie parfaite suivie d'une page blanche.",
  },
  {
    categorie: "general",
    question: "Le corrigé indicatif est-il la seule bonne réponse possible ?",
    reponse:
      "Non. Le corrigé indicatif montre une façon correcte et complète de traiter le sujet, pas la seule formulation acceptée. Ce qui compte est de retrouver les mêmes idées-clés issues du dossier, organisées de façon cohérente — la formulation personnelle reste normale, tant que chaque idée s'appuie sur un document et que rien d'essentiel n'est oublié.",
  },
  {
    categorie: "general",
    question: "Peut-on citer des connaissances personnelles absentes du dossier ?",
    reponse:
      "Non : toute idée doit venir du dossier fourni, jamais de connaissances extérieures, même exactes. Le jury évalue la capacité à exploiter les documents donnés, pas une culture générale sur le sujet. Ajouter une information extérieure, même vraie, n'apporte pas de points et peut faire perdre du temps.",
  },
  {
    categorie: "general",
    question: "Faut-il compter précisément les mots pendant la rédaction de la synthèse ?",
    reponse:
      "Non, un compte au mot près n'est pas nécessaire. La longueur indiquée (souvent autour de 250 mots) est un ordre de grandeur qui aide à calibrer le développement : ni un résumé de quelques lignes, ni plusieurs pages. Mieux vaut estimer visuellement (un paragraphe par idée, deux parties de longueur comparable) que s'arrêter en pleine phrase pour compter.",
  },
  {
    categorie: "general",
    question: "Que faire si le temps manque en fin d'épreuve ?",
    reponse:
      "Termine chaque partie même de façon plus simple plutôt que de laisser une section blanche : une conclusion en une phrase vaut mieux qu'une absence de conclusion, une dernière sous-partie résumée vaut mieux qu'une sous-partie manquante. Une copie complète mais inégale est mieux notée qu'une copie brillante sur une moitié du sujet et vide sur l'autre.",
  },
  {
    categorie: "general",
    question: "L'anonymat de la copie est-il vraiment surveillé de près ?",
    reponse:
      "Oui, strictement. N'ajoute aucun nom, initiale, adresse, localisation ou signature, même fictifs, si la consigne ne le demande pas explicitement — y compris dans un support de communication qui se termine habituellement par une signature en situation réelle. Une rupture d'anonymat peut être sanctionnée indépendamment de la qualité du contenu.",
  },
];
