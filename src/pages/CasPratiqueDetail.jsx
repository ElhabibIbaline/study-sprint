import { useParams, Link } from "react-router-dom";
import { casPratiques } from "../data/casPratique";

const LABELS_TYPE = {
  courte: { texte: "Question courte", classe: "" },
  synthese: { texte: "Note de synthèse", classe: "glossary-card__tag--finances" },
  support: { texte: "Support de communication", classe: "glossary-card__tag--fonctionPublique" },
};

function CasPratiqueDetail() {
  const { id } = useParams();
  const cas = casPratiques[id];

  if (!cas) {
    return (
      <div className="learning-page">
        <h1>Cas pratique introuvable</h1>
        <Link className="back-link" to="/cas-pratique">← Retour aux cas pratiques</Link>
      </div>
    );
  }

  return (
    <div className="learning-page">
      <Link className="back-link" to="/cas-pratique">← Tous les cas pratiques</Link>
      <header className="learning-hero learning-hero--compact">
        <p className="home-eyebrow">Cas pratique · {cas.duree} · exercice d'entraînement</p>
        <h1>{cas.titre}</h1>
      </header>

      <section className="lesson-section">
        <h2>La commande</h2>
        <div className="method-rule"><strong>Consigne du chef de service</strong><p>{cas.commande}</p></div>
      </section>

      <section className="lesson-section">
        <h2>Dossier documentaire</h2>
        {cas.documents.map((doc, i) => (
          <div key={i} className="example-box">
            <span>{doc.titre}</span>
            <p>{doc.contenu}</p>
          </div>
        ))}
      </section>

      <h2 style={{ marginTop: "2.5rem" }}>Questions</h2>
      {cas.questions.map((q, i) => {
        const label = LABELS_TYPE[q.type];
        return (
          <section className="lesson-section" key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
              <span className="lesson-number" style={{ marginBottom: 0 }}>{i + 1}</span>
              <span className={`glossary-card__tag ${label.classe}`}>{label.texte}</span>
            </div>
            <p style={{ fontWeight: 700, color: "#241a15", fontSize: "1.05rem" }}>{q.consigne}</p>
            <div className="method-rule"><strong>Conseil de méthode</strong><p>{q.conseil}</p></div>

            <textarea
              className="reponse-brouillon"
              placeholder="Rédige ta réponse ici avant de consulter le corrigé — c'est cet effort qui fait progresser."
              rows={q.type === "courte" ? 3 : q.type === "support" ? 6 : 8}
            />

            <details className="corrige-toggle">
              <summary>Voir un corrigé indicatif</summary>
              <div className="corrige-toggle__body">{q.corrige}</div>
            </details>
          </section>
        );
      })}

      <section className="lesson-section lesson-section--final">
        <h2>Grille d'auto-évaluation</h2>
        <div className="final-checks">
          <div>
            <strong>Consignes</strong>
            <label><input type="checkbox" /> Toutes les questions sont traitées.</label>
            <label><input type="checkbox" /> Le format et la longueur demandés sont respectés.</label>
          </div>
          <div>
            <strong>Contenu</strong>
            <label><input type="checkbox" /> Chaque idée vient du dossier, pas d'ailleurs.</label>
            <label><input type="checkbox" /> Les chiffres cités sont exacts.</label>
          </div>
          <div>
            <strong>Structure</strong>
            <label><input type="checkbox" /> La synthèse regroupe les documents par idées.</label>
            <label><input type="checkbox" /> Le support est immédiatement utilisable.</label>
          </div>
          <div>
            <strong>Style</strong>
            <label><input type="checkbox" /> Le ton reste neutre et administratif.</label>
            <label><input type="checkbox" /> Aucune opinion personnelle ne s'est glissée.</label>
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div>
          <p className="home-eyebrow">Continuer à t'entraîner</p>
          <h2>Revoir la méthode ou tester d'autres formats.</h2>
        </div>
        <Link className="home-button home-button--primary" to="/annales">Voir les annales</Link>
      </section>
    </div>
  );
}

export default CasPratiqueDetail;
