import { Link } from "react-router-dom";
import { projects } from "../../data/content.js";

/* ---------- per-project card art (inline SVG, light theme) ---------- */

// Real dominant skin-tone hexes per season, from the dashboard's wheel
// gallery (results/wheel/*_results.json) — the wheel art is the data.
const SEASONS = [
  ["bright spring", "#F8C6A8"],
  ["warm spring", "#E8B697"],
  ["light spring", "#FBDEC2"],
  ["soft autumn", "#D4A181"],
  ["warm autumn", "#E1A688"],
  ["deep autumn", "#F2B693"],
  ["deep winter", "#604037"],
  ["cool winter", "#FDD2C3"],
  ["bright winter", "#E6C7B5"],
  ["light summer", "#E4D0D6"],
  ["cool summer", "#DCC5C5"],
  ["soft summer", "#D0C0BE"],
];

// Harmony: circular 12-season color wheel + face-detection landmark hint.
function HarmonyArt() {
  const cx = 76, cy = 65, R = 54;
  const pt = (a) => [
    cx + R * Math.cos((a * Math.PI) / 180),
    cy + R * Math.sin((a * Math.PI) / 180),
  ];
  return (
    <svg viewBox="0 0 200 130" className="card-art-svg" aria-hidden="true">
      {SEASONS.map(([name, hex], i) => {
        const a0 = (i / 12) * 360 - 90;
        const a1 = ((i + 1) / 12) * 360 - 90;
        const p0 = pt(a0);
        const p1 = pt(a1);
        return (
          <path
            key={name}
            d={`M ${cx} ${cy} L ${p0[0].toFixed(2)} ${p0[1].toFixed(2)} A ${R} ${R} 0 0 1 ${p1[0].toFixed(2)} ${p1[1].toFixed(2)} Z`}
            fill={hex}
            stroke="#ffffff"
            strokeWidth="1.6"
          >
            <title>{name}</title>
          </path>
        );
      })}
      {/* detection ring + cheek landmarks */}
      <circle cx={cx} cy={cy} r="34" fill="#ffffff" fillOpacity="0.92" />
      <circle cx={cx} cy={cy} r="22" fill="none" stroke="#36aac4" strokeWidth="1.4" strokeDasharray="3 3" />
      <circle cx={cx} cy={cy - 7} r="3" fill="#1e252c" />
      <circle cx={cx - 8} cy={cy - 1} r="3" fill="#1e252c" />
      <circle cx={cx + 8} cy={cy - 1} r="3" fill="#1e252c" />
      <text x={cx} y={cy + 14} fontSize="6.5" textAnchor="middle" fill="#6a7275" letterSpacing="1">
        12-SEASON WHEEL
      </text>
      {/* accent swatches, right side */}
      <circle cx="168" cy="32" r="8" fill="#e0fe9a" stroke="#1f7a3d" strokeWidth="1" />
      <circle cx="150" cy="56" r="5.5" fill="#36aac4" />
      <circle cx="171" cy="74" r="4" fill="#7b8770" />
    </svg>
  );
}

// Tickets: ascending tier staircase, optimum tier highlighted, ticket stubs.
function TicketsArt() {
  const tiers = [
    { x: 16, y: 104, w: 30, h: 20 },
    { x: 52, y: 88, w: 32, h: 36 },
    { x: 90, y: 66, w: 34, h: 58 },
    { x: 130, y: 36, w: 38, h: 88 },
  ];
  return (
    <svg viewBox="0 0 200 130" className="card-art-svg" aria-hidden="true">
      {/* dashed teal ascent to the optimum tier */}
      <path
        d="M 68 86 C 96 82, 112 68, 130 38"
        fill="none"
        stroke="#36aac4"
        strokeWidth="1.6"
        strokeDasharray="4 4"
      />
      {tiers.map((t, i) => {
        const top = i === tiers.length - 1;
        return (
          <g key={i}>
            <rect
              x={t.x} y={t.y} width={t.w} height={t.h} rx="3"
              fill={top ? "#e0fe9a" : "#f2f1ed"}
              stroke={top ? "#1f7a3d" : "#c9ccca"}
              strokeWidth="1.2"
            />
            {top && (
              <text
                x={t.x + t.w / 2} y={t.y + 13}
                fontSize="6.5" fontWeight="700" letterSpacing="0.6"
                textAnchor="middle" fill="#1f7a3d"
              >
                OPTIMUM
              </text>
            )}
            {/* price tick */}
            <rect
              x={t.x + t.w / 2 - 8} y={top ? t.y + 22 : t.y + 16}
              width="16" height="3" rx="1.5"
              fill={top ? "#1f7a3d" : "#9aa1a3"}
            />
          </g>
        );
      })}
      {/* ticket stubs along the bottom */}
      {[20, 48, 76, 104, 132, 160].map((x) => (
        <g key={x}>
          <circle cx={x} cy={124} r="4.4" fill="none" stroke="#9aa1a3" strokeWidth="1.2" />
          <rect x={x - 4.4} y={122.4} width="8.8" height="3.2" fill="#fafafa" />
        </g>
      ))}
    </svg>
  );
}

// Fallback: the old shared CSS-art placeholder, for unknown future projects.
function FallbackArt() {
  return (
    <>
      <span className="panel p1" />
      <span className="panel p2" />
      <span className="panel p3" />
      <span className="bar-chart">
        <i />
        <i />
        <i />
        <i />
      </span>
    </>
  );
}

function CardArt({ slug }) {
  if (slug === "visual-harmony-analyzer") return <HarmonyArt />;
  if (slug === "student-event-ticket-profit-optimizer") return <TicketsArt />;
  return <FallbackArt />;
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section dark">
      <div className="section-inner">
        <p className="label">02. Projects</p>
        <h2 className="sec-title">
          Selected <em>Work</em>
        </h2>

        <div className="proj-card-grid">
          {projects.map((p, i) => (
            <Link key={p.slug} className="p-card" to={`/projects/${p.slug}`}>
              <div className="p-card-art" aria-hidden="true">
                <CardArt slug={p.slug} />
              </div>
              <div className="p-card-body">
                <span className="p-status">{p.status}</span>
                <h3 className="p-card-title">
                  0{i + 1}. {p.title}
                </h3>
                <p className="p-card-sum">{p.headline}</p>
                <span className="btn-line">
                  View project <span className="arr">→</span>
                </span>
              </div>
              <div className="p-card-stats">
                <p className="label stats-label">Key findings</p>
                {p.stats.map((s) => (
                  <div key={s.label} className="p-stat">
                    <span className="p-stat-value">{s.value}</span>
                    <span className="p-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
