import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesInfo, quizQuestions } from "../data/quizQuestions";
import { enregistrerSprintTermine } from "../utils/progression";

const DUREES = [
  { secondes: 60, label: "60 secondes" },
  { secondes: 90, label: "90 secondes" },
];

function melanger(tableau) {
  const copie = [...tableau];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

function poolQuestions(categorie) {
  const entrees = categorie === "toutes" ? Object.entries(quizQuestions) : [[categorie, quizQuestions[categorie]]];
  const pool = [];
  entrees.forEach(([cle, questions]) => {
    questions.forEach((q) => pool.push({ ...q, categorieOrigine: cle }));
  });
  return pool;
}

function cleRecord(categorie, duree) {
  return `sprint-record::${categorie}::${duree}`;
}

function chargerRecordSprint(categorie, duree) {
  try {
    const brut = localStorage.getItem(cleRecord(categorie, duree));
    return brut ? Number(brut) : 0;
  } catch {
    return 0;
  }
}

function sauvegarderRecordSprint(categorie, duree, score) {
  try {
    localStorage.setItem(cleRecord(categorie, duree), String(score));
  } catch {
    // stockage indisponible : le record ne sera pas conservé
  }
}

function Sprint() {
  const [etape, setEtape] = useState("config");
  const [categorie, setCategorie] = useState("toutes");
  const [duree, setDuree] = useState(60);
  const [pool, setPool] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [reponseChoisie, setReponseChoisie] = useState(null);
  const [tempsRestantMs, setTempsRestantMs] = useState(0);
  const [record, setRecord] = useState(0);
  const [nouveauRecord, setNouveauRecord] = useState(false);
  const finEnCours = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (etape !== "jeu") return undefined;
    const interval = setInterval(() => {
      setTempsRestantMs((t) => (t <= 100 ? 0 : t - 100));
    }, 100);
    return () => clearInterval(interval);
  }, [etape]);

  useEffect(() => {
    if (etape === "jeu" && tempsRestantMs === 0 && !finEnCours.current) {
      finEnCours.current = true;
      const meilleurAvant = chargerRecordSprint(categorie, duree);
      const estRecord = score > meilleurAvant;
      if (estRecord) sauvegarderRecordSprint(categorie, duree, score);
      setRecord(estRecord ? score : meilleurAvant);
      setNouveauRecord(estRecord);
      enregistrerSprintTermine(score);
      setEtape("fin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempsRestantMs, etape]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function demarrer() {
    finEnCours.current = false;
    setPool(melanger(poolQuestions(categorie)));
    setIndex(0);
    setScore(0);
    setReponseChoisie(null);
    setTempsRestantMs(duree * 1000);
    setNouveauRecord(false);
    setEtape("jeu");
  }

  function choisirReponse(i) {
    if (reponseChoisie !== null) return;
    setReponseChoisie(i);
    const question = pool[index];
    if (i === question.bonneReponse) setScore((s) => s + 1);

    timeoutRef.current = setTimeout(() => {
      setReponseChoisie(null);
      setIndex((idx) => {
        const suivant = idx + 1;
        if (suivant >= pool.length) {
          setPool((p) => melanger(p));
          return 0;
        }
        return suivant;
      });
    }, 450);
  }

  const question = pool[index];
  const secondesRestantes = Math.ceil(tempsRestantMs / 1000);
  const urgence = secondesRestantes <= 10;

  return (
    <div className="learning-page">
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Format arcade · toutes catégories mélangées</p>
        <h1>Sprint chrono</h1>
        <p>
          Un temps limité, des questions de toutes les catégories mélangées, aucune pause entre
          deux questions. Vise le score le plus haut possible avant la fin du chronomètre.
        </p>
      </header>

      {etape === "config" && (
        <div className="jeu-configuration">
          <h2 style={{ marginTop: 0 }}>Choisis la durée et le thème</h2>
          <div className="glossary-filters" role="group" aria-label="Choisir une durée" style={{ marginBottom: "1.25rem" }}>
            {DUREES.map((d) => (
              <button
                key={d.secondes}
                className={`glossary-chip${duree === d.secondes ? " glossary-chip--active" : ""}`}
                onClick={() => setDuree(d.secondes)}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="glossary-filters" role="group" aria-label="Choisir un thème" style={{ marginBottom: "1.75rem" }}>
            <button
              className={`glossary-chip${categorie === "toutes" ? " glossary-chip--active" : ""}`}
              onClick={() => setCategorie("toutes")}
            >
              Toutes catégories mélangées
            </button>
            {Object.entries(categoriesInfo).map(([cle, label]) => (
              <button
                key={cle}
                className={`glossary-chip${categorie === cle ? " glossary-chip--active" : ""}`}
                onClick={() => setCategorie(cle)}
              >
                {label}
              </button>
            ))}
          </div>

          <p style={{ color: "#7a7166", fontSize: "0.88rem", marginBottom: "1.5rem" }}>
            Meilleur score sur cette configuration : <strong>{chargerRecordSprint(categorie, duree)}</strong>
          </p>

          <button className="home-button home-button--primary" onClick={demarrer}>
            Démarrer le sprint <span aria-hidden="true">→</span>
          </button>
        </div>
      )}

      {etape === "jeu" && question && (
        <>
          <div className={`jeu-barre${urgence ? " jeu-barre--urgence" : ""}`}>
            <span className="jeu-chrono">⏱ {secondesRestantes}s</span>
            <span>Score : {score}</span>
            <span className="jeu-record">🏅 record : {record || chargerRecordSprint(categorie, duree)}</span>
          </div>

          <div className="sprint-question">
            <span className="glossary-card__tag">{categoriesInfo[question.categorieOrigine]}</span>
            <h2>{question.question}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", maxWidth: "520px" }}>
              {question.choix.map((choix, i) => {
                let classe = "sprint-choix";
                if (reponseChoisie !== null) {
                  if (i === question.bonneReponse) classe += " sprint-choix--correct";
                  else if (i === reponseChoisie) classe += " sprint-choix--faux";
                }
                return (
                  <button key={i} className={classe} onClick={() => choisirReponse(i)} disabled={reponseChoisie !== null}>
                    {choix}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {etape === "fin" && (
        <div className="jeu-resultat">
          <h2>{nouveauRecord ? "Nouveau record !" : "Sprint terminé !"}</h2>
          <div className="stats-row">
            <div className="stat-tile"><dt>{score}</dt><dd>bonnes réponses</dd></div>
            <div className="stat-tile"><dt>{record}</dt><dd>record sur ce format</dd></div>
            <div className="stat-tile"><dt>{duree}s</dt><dd>durée</dd></div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <button className="home-button home-button--primary" onClick={demarrer}>Rejouer le même format</button>
            <button className="home-button home-button--secondary" onClick={() => setEtape("config")}>Changer de format</button>
          </div>
        </div>
      )}

      <section className="article-cta" style={{ marginTop: "3rem" }}>
        <div>
          <p className="home-eyebrow">Préférer un format posé ?</p>
          <h2>Le quiz classique laisse le temps de réfléchir, question par question.</h2>
        </div>
        <Link className="home-button home-button--primary" to="/quiz">Ouvrir le quiz</Link>
      </section>
    </div>
  );
}

export default Sprint;
