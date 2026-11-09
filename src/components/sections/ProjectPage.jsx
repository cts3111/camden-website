import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "../../data/content.js";
import DemoModal from "../DemoModal.jsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const [demoOpen, setDemoOpen] = useState(false);
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/" replace />;

  return (
    <main className="proj-page">
      <div className="section-inner">
        <Link to="/" className="back-link">
          ← Back
        </Link>

        <p className="label proj-kicker">Project</p>
        <h1 className="proj-title-big">
          {p.title.split(" ")[0]} <em>{p.title.split(" ").slice(1).join(" ")}</em>
        </h1>
        <p className="proj-sum">{p.summary}</p>
        <p className="label proj-meta">{p.tags.join(" · ")}</p>

        {/* ---------- demo first ---------- */}
        <div className="proj-sec demo-sec">
          <p className="label">01 — Live Demo</p>
          <h2 className="proj-h2">
            Try the <em>pipeline</em>
          </h2>
          <p className="proj-copy">
            Upload a photo and the real production pipeline — OpenCV face
            detection, MediaPipe landmarks, K-Means color extraction, the
            exported scikit-learn models — runs live, showing each model&rsquo;s
            test accuracy next to its prediction.
          </p>
          {p.demoUrl ? (
            <button className="btn btn-primary" onClick={() => setDemoOpen(true)}>
              Open Live Demo ↗
            </button>
          ) : (
            <button className="btn btn-disabled" disabled title="Deploying to Streamlit Cloud">
              <span className="pulse" /> Demo deploying — check back soon
            </button>
          )}
        </div>

        {/* ---------- findings ---------- */}
        <div className="proj-sec">
          <p className="label">02 — Findings</p>
          <h2 className="proj-h2">
            {p.findings.headline.split("—")[0]}<em>— {p.findings.headline.split("—")[1]}</em>
          </h2>
          <p className="proj-copy">{p.findings.lead}</p>

          <div className="stat-grid">
            {p.findings.stats.map((s) => (
              <div key={s.name} className="stat">
                <span className="label">{s.name}</span>
                <span className="stat-value">{s.value}</span>
                <span className="stat-detail">{s.detail}</span>
              </div>
            ))}
          </div>

          <h3 className="proj-h3">What held up</h3>
          <ul className="proj-list">
            {p.findings.heldUp.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <h3 className="proj-h3">The replication lesson</h3>
          <p className="proj-copy">{p.findings.lesson}</p>

          <h3 className="proj-h3">A lead, not a finding</h3>
          <p className="proj-copy">{p.findings.curiosity}</p>
        </div>

        <div className="proj-sec">
          <a className="btn-line" href={p.link} target="_blank" rel="noreferrer">
            {p.linkLabel} <span className="arr">→</span>
          </a>
        </div>
      </div>

      {demoOpen && p.demoUrl && (
        <DemoModal src={p.demoUrl} onClose={() => setDemoOpen(false)} />
      )}
    </main>
  );
}
