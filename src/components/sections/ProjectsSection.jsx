import { Link } from "react-router-dom";
import { projects } from "../../data/content.js";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section dark">
      <div className="section-inner">
        <p className="label">02 — Projects</p>
        <h2 className="sec-title">
          Selected <em>Work</em>
        </h2>

        <div className="proj-card-grid">
          {projects.map((p, i) => (
            <Link key={p.slug} className="p-card" to={`/projects/${p.slug}`}>
              <div className="p-card-art" aria-hidden="true">
                <span className="panel p1" />
                <span className="panel p2" />
                <span className="panel p3" />
                <span className="bar-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <span className="p-status">{p.status}</span>
              <h3 className="p-card-title">
                0{i + 1} — {p.title}
              </h3>
              <p className="p-card-sum">{p.summary}</p>
              <p className="p-card-result">
                <span className="label">Result</span> {p.result}
              </p>
              <span className="btn-line">
                View project <span className="arr">→</span>
              </span>
            </Link>
          ))}

          <div className="p-card ghost-card">
            <div className="ghost-inner">
              <div className="plus">+</div>
              <p className="label">Next project goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
