import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle.jsx";
import { profile } from "../data/content.js";

const marqueeItems = [
  "Statistics & Data Science",
  "UCLA",
  "Data Analyst",
  "Data Scientist",
  "Python",
  "OpenCV",
  "SQL",
  "Los Angeles",
  "Available for internships",
];

function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span key={i}>
            {t} <em>—</em>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-toggle">
        <ThemeToggle />
      </div>

      <p className="label landing-kicker">{profile.eyebrow}</p>
      <h1 className="display landing-title">
        <span className="block">Camden</span>
        <span className="block display-outline">Sun</span>
      </h1>
      <p className="landing-sub">{profile.tagline}</p>
      <Link to="/about" className="landing-enter">
        Enter the Site <span className="arr">→</span>
      </Link>

      <Marquee />
    </div>
  );
}
