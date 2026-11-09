import { Link } from "react-router-dom";
import {
  skills,
  experience,
  education,
  leadership,
  interests,
} from "../data/content.js";

export default function About() {
  return (
    <main className="page">
      <h1 className="section-title">
        About <span className="gradient-text">Me</span>
      </h1>
      <div className="title-rule" />
      <p className="lead">
        I&rsquo;m a Statistics &amp; Data Science student at UCLA, graduating
        December 2026. I&rsquo;ve spent three roles at Noah Medical turning raw
        image and sensor data into decisions that shipped — from a camera
        distortion study to an automated robotic calibration pipeline. I love
        the moment a messy dataset becomes a clear story.
      </p>

      <section className="section">
        <h2>
          <span className="kicker">01</span> What I work with
        </h2>
        <div className="chips">
          {skills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>
          <span className="kicker">02</span> Experience
        </h2>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.role} className="tl-item">
              <h3>{e.role}</h3>
              <p style={{ marginBottom: 2 }}>
                <span className="tl-org">{e.org}</span>
              </p>
              <p className="tl-when">{e.when}</p>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>
          <span className="kicker">03</span> Education
        </h2>
        <div className="grid grid-2">
          {education.map((ed) => (
            <div key={ed.school} className="card">
              <h3>{ed.school}</h3>
              <p style={{ marginBottom: 4 }}>
                <strong>{ed.degree}</strong>
              </p>
              <p className="tl-when">{ed.when}</p>
              <p className="p-desc" style={{ margin: 0 }}>
                {ed.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>
          <span className="kicker">04</span> Leadership
        </h2>
        <div className="timeline">
          {leadership.map((l) => (
            <div key={l.role} className="tl-item">
              <h3>{l.role}</h3>
              <p style={{ marginBottom: 2 }}>
                <span className="tl-org">{l.org}</span>
              </p>
              <p className="tl-when">{l.when}</p>
              <ul>
                {l.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>
          <span className="kicker">05</span> Off the clock
        </h2>
        <div className="chips">
          {interests.map((i) => (
            <span key={i} className="chip">
              {i}
            </span>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Link to="/projects" className="btn btn-primary btn-lg">
          See My Work →
        </Link>
      </section>
    </main>
  );
}
