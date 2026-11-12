import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "../../data/content.js";
import SectionCharts from "../SectionCharts.jsx";

const pad = (n) => String(n).padStart(2, "0");

function OverviewSection({ p, index }) {
  return (
    <div className="proj-sec">
      <p className="label">
        {pad(index)}. {p.sections[0].title}
      </p>
      <h2 className="proj-h2">{p.sections[0].title}</h2>
      <p className="proj-copy">{p.sections[0].lead}</p>

      <div className="stat-grid">
        {p.stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="label">{s.label}</span>
            <span className="stat-value">{s.value}</span>
          </div>
        ))}
      </div>

      {/* ---------- live demo: opens in a new tab, keeps the page clean ---------- */}
      <div className="demo-block">
        {p.demoUrl ? (
          <a className="demo-link" href={p.demoUrl} target="_blank" rel="noreferrer">
            {p.demoLabel ?? "Open live demo"} <span className="arr">→</span>
          </a>
        ) : (
          <div className="demo-pending">
            <span className="pulse" /> Demo deploying. Check back soon.
          </div>
        )}
      </div>

      {/* ---------- pipeline images ---------- */}
      <SectionImages images={p.sections[0].images} split={p.sections[0].imagesSplit} />
    </div>
  );
}

function FindingsSection({ p, index, section }) {
  const f = p.findings;
  // Italicize the tail of the headline (after the last comma) for accent.
  const splitAt = f.headline.lastIndexOf(", ");
  const headlinePlain =
    splitAt === -1 ? f.headline : f.headline.slice(0, splitAt + 2);
  const headlineEm = splitAt === -1 ? "" : f.headline.slice(splitAt + 2);
  return (
    <div className="proj-sec">
      <p className="label">
        {pad(index)}. Findings
      </p>
      <h2 className="proj-h2">
        {headlinePlain}
        <em>{headlineEm}</em>
      </h2>
      <p className="proj-copy">{f.lead}</p>

      <div className="stat-grid">
        {f.stats.map((s) => (
          <div key={s.name} className="stat">
            <span className="label">{s.name}</span>
            <span className="stat-value">{s.value}</span>
            <span className="stat-detail">{s.detail}</span>
          </div>
        ))}
      </div>

      <h3 className="proj-h3">{f.heldUpTitle ?? "What held up"}</h3>
      <ul className="proj-list">
        {f.heldUp.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <h3 className="proj-h3">{f.lessonTitle ?? "The replication lesson"}</h3>
      <p className="proj-copy">{f.lesson}</p>

      {f.curiosity && (
        <>
          <h3 className="proj-h3">{f.curiosityTitle ?? "A lead, not a finding"}</h3>
          <p className="proj-copy">{f.curiosity}</p>
        </>
      )}

      {section?.images && <SectionImages images={section.images} />}
      {section?.table && <SectionTable table={section.table} />}
    </div>
  );
}

function SectionImages({ images, split }) {
  if (!images || images.length === 0) return null;
  return (
    <div className={"proj-media-row" + (split ? " split" : "")}>
      {images.map((img) => (
        <figure
          key={img.caption}
          className={"proj-img" + (img.annotations ? " qa" : "")}
          style={img.cap ? { maxWidth: img.cap } : undefined}
        >
          <div className="qa-wrap">
            {img.src ? (
              <img src={img.src} alt={img.caption} loading="lazy" />
            ) : (
              <div className="proj-img-ph">Image coming soon</div>
            )}
            {img.annotations &&
              img.annotations.map((a) => (
                <span
                  key={a.label}
                  className="qa-ann"
                  style={{
                    left: `${a.x}%`,
                    top: `${a.y}%`,
                    width: `${a.w}%`,
                    height: `${a.h}%`,
                  }}
                >
                  <i className="qa-chip">{a.label}</i>
                </span>
              ))}
          </div>
          <figcaption className="proj-img-cap">{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function SectionTable({ table }) {
  if (!table) return null;
  return (
    <div className="proj-table">
      {table.head && (
        <div className="t-head">
          <span>{table.head[0]}</span>
          <span>{table.head[1]}</span>
        </div>
      )}
      {table.rows.map((r) => (
        <div key={r.k} className="t-row">
          <span className="t-k">{r.k}</span>
          <span className={"t-v" + (r.accent ? " accent" : "")}>{r.v}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/" replace />;

  const bodySections = p.sections.filter(
    (s) => s.id !== "overview" && s.id !== "findings"
  );
  const findingsSection = p.sections.find((s) => s.id === "findings");

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
        <p className="label proj-meta">{p.tags.join(" · ")}</p>

        <OverviewSection p={p} index={1} />

        {bodySections.map((s, i) => (
          <div className="proj-sec" key={s.id}>
            <p className="label">
              {pad(i + 2)}. {s.title}
            </p>
            <h2 className="proj-h2">{s.title}</h2>
            <p className="proj-copy">{s.lead}</p>
            {s.points && (
              <ul className="proj-list">
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
            <SectionImages images={s.images} />
            <SectionTable table={s.table} />
            <SectionCharts charts={s.charts} />
          </div>
        ))}

        <FindingsSection p={p} index={bodySections.length + 2} section={findingsSection} />

        {p.link && (
          <div className="proj-sec">
            <a className="btn-line" href={p.link} target="_blank" rel="noreferrer">
              {p.linkLabel} <span className="arr">→</span>
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
