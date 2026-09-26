import "./card.css";

export function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="feature-card" onClick={() => (window.location.href = "#")}>
      <div className="feature-icon">🚀</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-body">{body}</p>
      <div className="feature-link">Learn more →</div>
    </div>
  );
}
