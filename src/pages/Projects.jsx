import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <main className="page">
      <p className="label page-kicker">02 — Projects</p>
      <h1 className="display page-title">Projects</h1>
      <p className="lead">
        Things I&rsquo;ve built, analyzed, and shipped. More on the way.
      </p>

      <div style={{ marginTop: 70 }}>
        {projects.map((p, i) => (
          <a
            key={p.title}
            className="p-row"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="p-idx">0{i + 1}</span>
            <span>
              <span className="p-status">{p.status}</span>
              <span className="p-title" style={{ display: "block" }}>
                {p.title}
              </span>
              <span className="p-meta">{p.tags.join(" · ")}</span>
              <span className="p-desc" style={{ display: "block" }}>
                {p.description}
              </span>
            </span>
            <span className="p-arrow">↗</span>
          </a>
        ))}

        <div className="p-row soon">
          <span className="p-idx">02</span>
          <span>
            <span className="p-title" style={{ display: "block" }}>
              Coming Soon
            </span>
            <span className="p-meta">Next project in the pipeline</span>
          </span>
        </div>
        <div className="p-row soon">
          <span className="p-idx">03</span>
          <span>
            <span className="p-title" style={{ display: "block" }}>
              Coming Soon
            </span>
            <span className="p-meta">And another</span>
          </span>
        </div>
      </div>
    </main>
  );
}
