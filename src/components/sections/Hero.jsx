import { profile } from "../../data/content.js";

export default function Hero() {
  return (
    <section id="home" className="section dark">
      <div className="art art-hero" aria-hidden="true">
        <span className="orb" />
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="haze h1" />
        <span className="haze h2" />
      </div>

      <div className="section-inner hero-inner">
        <p className="label">{profile.eyebrow}</p>
        <h1 className="hero-title">
          Camden <em>Sun</em>
        </h1>
        <p className="hero-sub">{profile.tagline}</p>
        <a href="#about" className="hero-cta">
          Scroll to explore <span className="arr">↓</span>
        </a>
      </div>

      <p className="label hero-hint">Scroll</p>
    </section>
  );
}
