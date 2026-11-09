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
      <p className="label page-kicker">01 — About</p>
      <h1 className="display page-title">About Me</h1>
      <p className="lead">
        I&rsquo;m a Statistics &amp; Data Science student at UCLA, graduating
        December 2026. I&rsquo;ve spent three roles at Noah Medical turning raw
        image and sensor data into decisions that shipped — from a camera
        distortion study to an automated robotic calibration pipeline. I love
        the moment a messy dataset becomes a clear story.
      </p>

      <div className="sec-head">
        <span className="label">Capabilities</span>
        <h2>What I Work With</h2>
      </div>
      <div className="chips">
        {skills.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      <div className="sec-head">
        <span className="label">02</span>
        <h2>Experience</h2>
      </div>
      <div className="tl">
        {experience.map((e) => (
          <div key={e.role} className="tl-item">
            <h3 className="tl-role">{e.role}</h3>
            <p className="tl-org">{e.org}</p>
            <p className="tl-when">{e.when}</p>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sec-head">
        <span className="label">03</span>
        <h2>Education</h2>
      </div>
      {education.map((ed) => (
        <div key={ed.school} className="edu">
          <h3>{ed.school}</h3>
          <p className="label meta">
            {ed.degree} · {ed.when}
          </p>
          <p>{ed.note}</p>
        </div>
      ))}

      <div className="sec-head">
        <span className="label">04</span>
        <h2>Leadership</h2>
      </div>
      <div className="tl">
        {leadership.map((l) => (
          <div key={l.role} className="tl-item">
            <h3 className="tl-role">{l.role}</h3>
            <p className="tl-org">{l.org}</p>
            <p className="tl-when">{l.when}</p>
            <ul>
              {l.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sec-head">
        <span className="label">05</span>
        <h2>Off the Clock</h2>
      </div>
      <div className="chips">
        {interests.map((i) => (
          <span key={i} className="chip">
            {i}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 90 }}>
        <Link to="/projects" className="btn btn-primary">
          See My Work →
        </Link>
      </div>
    </main>
  );
}
