import { skills, experience, education, leadership } from "../../data/content.js";

export default function AboutSection() {
  return (
    <section id="about" className="section light">
      <div className="section-inner">
        <p className="label">01. About</p>
        <h2 className="sec-title">
          Turning data into <em>decisions</em>
        </h2>

        <div className="about-grid">
          <div className="about-lead">
            <p>
              I&rsquo;m a Statistics &amp; Data Science student at UCLA,
              graduating December 2026. I&rsquo;ve spent three roles at Noah
              Medical turning raw image and sensor data into decisions that
              shipped, from a camera distortion study to an automated robotic
              calibration pipeline. I love the moment a messy dataset becomes a
              clear story.
            </p>
            <div className="chips">
              {skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="about-side">
            <p className="label">Selected experience</p>
            {experience.map((e) => (
              <div key={e.role} className="mini-item">
                <span className="mini-role">{e.role}</span>
                <span className="label">
                  {e.org} · {e.when}
                </span>
              </div>
            ))}
            <p className="label mini-note">
              {education[0].school} · {education[0].degree} ·{" "}
              {education[0].when}
            </p>
            <p className="label mini-note">
              {leadership[0].role} · {leadership[0].org}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
