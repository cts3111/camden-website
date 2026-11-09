import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <main className="page">
      <h1 className="section-title">
        <span className="gradient-text">Projects</span>
      </h1>
      <div className="title-rule" />
      <p className="lead">
        Things I&rsquo;ve built, analyzed, and shipped. More on the way.
      </p>

      <div className="grid grid-3" style={{ marginTop: 40 }}>
        {projects.map((p) => (
          <article key={p.title} className="card p-card">
            <div className="p-badges">
              <span className="badge badge-featured">{p.tag}</span>
              <span className="badge badge-soon">{p.status}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="p-desc">{p.description}</p>
            <div className="p-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              className="p-link"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              {p.linkLabel} ↗
            </a>
          </article>
        ))}

        <div className="card ghost">
          <div>
            <div className="plus">+</div>
            <p style={{ margin: 0 }}>Your next project could go here</p>
          </div>
        </div>
        <div className="card ghost">
          <div>
            <div className="plus">+</div>
            <p style={{ margin: 0 }}>And here</p>
          </div>
        </div>
      </div>
    </main>
  );
}
