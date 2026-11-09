import { projects } from "../../data/content.js";

export default function ProjectsSection() {
  const [p] = projects;

  return (
    <section id="projects" className="section dark">
      <div className="section-inner">
        <p className="label">02 — Projects</p>
        <h2 className="sec-title">
          Selected <em>Work</em>
        </h2>

        <div className="proj-grid">
          <div className="art art-project" aria-hidden="true">
            <span className="panel p1" />
            <span className="panel p2" />
            <span className="panel p3" />
            <span className="bar-chart">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="proj-scanline" />
          </div>

          <div className="proj-info">
            <span className="proj-status">{p.status}</span>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.description}</p>
            <p className="label proj-meta">{p.tags.join(" · ")}</p>
            <a
              className="btn-line"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <span className="arr">→</span>
            </a>
          </div>
        </div>

        <div className="proj-more">
          <span className="proj-more-item">
            <span className="label">02</span> Coming soon
          </span>
          <span className="proj-more-item">
            <span className="label">03</span> Coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
