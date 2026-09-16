const CLE_STOCKAGE = "progression-v1";

function etatParDefaut() {
  return {
    joursActifs: [],
    quizTermines: 0,
    quizParfaits: 0,
    flashcardsRevues: 0,
    paquetsMaitrises: [],
    annalesTerminees: [],
    jeuxTermines: 0,
    jeuxParfaits: 0,
  };
}

function dateDuJour() {
  const d = new Date();
  const mois = String(d.getMonth() + 1).padStart(2, "0");
  const jour = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mois}-${jour}`;
}

export function chargerProgression() {
  try {
    const brut = localStorage.getItem(CLE_STOCKAGE);
    if (!brut) return etatParDefaut();
    return { ...etatParDefaut(), ...JSON.parse(brut) };
  } catch {
    return etatParDefaut();
  }
}

function sauvegarder(etat) {
  try {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(etat));
  } catch {
    // stockage indisponible : la progression ne sera pas conservée cette fois
  }
  return etat;
}

function marquerJourActif(etat) {
  const aujourdhui = dateDuJour();
  if (etat.joursActifs.includes(aujourdhui)) return etat;
  return { ...etat, joursActifs: [...etat.joursActifs, aujourdhui] };
}

export function enregistrerQuizTermine(parfait) {
  let etat = chargerProgression();
  etat = marquerJourActif(etat);
  etat = { ...etat, quizTermines: etat.quizTermines + 1, quizParfaits: etat.quizParfaits + (parfait ? 1 : 0) };
  return sauvegarder(etat);
}

export function enregistrerAnnaleTerminee(id) {
  let etat = chargerProgression();
  etat = marquerJourActif(etat);
  if (!etat.annalesTerminees.includes(id)) {
    etat = { ...etat, annalesTerminees: [...etat.annalesTerminees, id] };
  }
  return sauvegarder(etat);
}

export function enregistrerFlashcardRevue() {
  let etat = chargerProgression();
  etat = marquerJourActif(etat);
  etat = { ...etat, flashcardsRevues: etat.flashcardsRevues + 1 };
  return sauvegarder(etat);
}

export function enregistrerJeuTermine(sansErreur) {
  let etat = chargerProgression();
  etat = marquerJourActif(etat);
  etat = { ...etat, jeuxTermines: etat.jeuxTermines + 1, jeuxParfaits: etat.jeuxParfaits + (sansErreur ? 1 : 0) };
  return sauvegarder(etat);
}

export function enregistrerPaquetMaitrise(paquet) {
  let etat = chargerProgression();
  if (etat.paquetsMaitrises.includes(paquet)) return etat;
  etat = { ...etat, paquetsMaitrises: [...etat.paquetsMaitrises, paquet] };
  return sauvegarder(etat);
}

export function calculerSerie(etat) {
  const jours = new Set(etat.joursActifs);
  const curseur = new Date();
  curseur.setHours(0, 0, 0, 0);

  function formater(d) {
    const mois = String(d.getMonth() + 1).padStart(2, "0");
    const jour = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mois}-${jour}`;
  }

  if (!jours.has(formater(curseur))) {
    curseur.setDate(curseur.getDate() - 1);
  }

  let serie = 0;
  while (jours.has(formater(curseur))) {
    serie += 1;
    curseur.setDate(curseur.getDate() - 1);
  }
  return serie;
}

export const BADGES = [
  { id: "premier-pas", titre: "Premier pas", description: "Termine ton premier quiz.", condition: (e) => e.quizTermines >= 1 },
  { id: "sans-faute", titre: "Sans faute", description: "Réussis un quiz avec un score parfait.", condition: (e) => e.quizParfaits >= 1 },
  { id: "dix-quiz", titre: "Dix quiz", description: "Termine dix quiz au total.", condition: (e) => e.quizTermines >= 10 },
  { id: "serie-3", titre: "Trois jours de suite", description: "Reviens réviser trois jours consécutifs.", condition: (e) => calculerSerie(e) >= 3 },
  { id: "serie-7", titre: "Une semaine complète", description: "Reviens réviser sept jours consécutifs.", condition: (e) => calculerSerie(e) >= 7 },
  { id: "serie-30", titre: "Un mois de régularité", description: "Reviens réviser trente jours consécutifs.", condition: (e) => calculerSerie(e) >= 30 },
  { id: "cent-flashcards", titre: "Cent flashcards", description: "Révise cent flashcards au total.", condition: (e) => e.flashcardsRevues >= 100 },
  { id: "cinq-cents-flashcards", titre: "Cinq cents flashcards", description: "Révise cinq cents flashcards au total.", condition: (e) => e.flashcardsRevues >= 500 },
  { id: "paquet-maitrise", titre: "Paquet maîtrisé", description: "Maîtrise entièrement un paquet de flashcards.", condition: (e) => e.paquetsMaitrises.length >= 1 },
  { id: "trois-paquets", titre: "Tout maîtrisé", description: "Maîtrise entièrement les trois paquets de flashcards.", condition: (e) => e.paquetsMaitrises.length >= 3 },
  { id: "explorateur-annales", titre: "Explorateur des annales", description: "Termine une première annale corrigée.", condition: (e) => e.annalesTerminees.length >= 1 },
  { id: "toutes-annales", titre: "Toutes les annales", description: "Termine les cinq annales disponibles.", condition: (e) => e.annalesTerminees.length >= 5 },
  { id: "premier-jeu", titre: "Premier jeu", description: "Termine une première partie du jeu d'association.", condition: (e) => e.jeuxTermines >= 1 },
  { id: "jeu-parfait", titre: "Sans une erreur", description: "Termine une partie du jeu d'association sans aucune erreur.", condition: (e) => e.jeuxParfaits >= 1 },
];

export function badgesDebloques(etat) {
  return BADGES.filter((b) => b.condition(etat));
}
