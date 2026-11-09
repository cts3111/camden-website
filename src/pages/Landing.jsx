import { Link } from "react-router-dom";
import SunMark from "../components/SunMark.jsx";
import { profile } from "../data/content.js";

export default function Landing() {
  return (
    <div className="landing">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="rays" aria-hidden="true" />

      <div className="landing-content">
        <div className="landing-mark">
          <SunMark size={84} />
        </div>
        <p className="landing-eyebrow">{profile.eyebrow}</p>
        <h1 className="landing-title">
          Camden&rsquo;s <span className="gradient-text">Website</span>
        </h1>
        <p className="landing-sub">{profile.tagline}</p>
        <div className="landing-cta">
          <Link to="/about" className="btn btn-primary btn-lg">
            Enter the Site →
          </Link>
          <Link to="/projects" className="btn btn-ghost btn-lg">
            See Projects
          </Link>
        </div>
      </div>

      <p className="landing-foot">Data analytics &amp; data science portfolio</p>
    </div>
  );
}
