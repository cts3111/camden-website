// Hand-rolled interactive SVG charts for project-page sections.
// Hover any bar/point for context; colors match the site design tokens.

import { useState } from "react";

const ACCENT = "#1f7a3d";
const TEAL = "#36aac4";
const TEXT = "#1e252c";
const MUTED = "#6a7275";
const DIM = "#c9ccca";
const GRAY = "#9aa1a3";
const BOX_BG = "#ffffff";

const wrap = (s, n) => {
  const out = [];
  let cur = "";
  for (const w of s.split(" ")) {
    const t = (cur + " " + w).trim();
    if (t.length > n && cur) {
      out.push(cur);
      cur = w;
    } else cur = t;
  }
  if (cur) out.push(cur);
  return out;
};

function Tip({ x, y, tip, w = 240 }) {
  const lines = wrap(tip, 36);
  const lh = 15;
  const h = 20 + lines.length * lh;
  let bx = x + 14;
  if (bx + w > 630) bx = x - w - 14;
  const by = Math.max(6, Math.min(296 - h, y - h / 2));
  return (
    <g pointerEvents="none">
      <rect x={bx} y={by} width={w} height={h} rx="6" fill={BOX_BG} stroke={DIM} strokeWidth="1" />
      {lines.map((l, i) => (
        <text key={i} x={bx + 10} y={by + 20 + lh * i} fontSize="11" fill={TEXT}>
          {l}
        </text>
      ))}
    </g>
  );
}

function ChartHead({ chart }) {
  return (
    <div className="chart-head">
      <p className="chart-title">{chart.title}</p>
      {chart.subtitle && <p className="chart-sub">{chart.subtitle}</p>}
    </div>
  );
}

/* ---------------- forest plot: effects with CIs crossing zero ---------------- */
function ForestChart({ chart }) {
  const [hov, setHov] = useState(null);
  const W = 640, H = 300;
  const x0 = 92, x1 = 636;
  const lo = -25, hi = 30;
  const px = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  const rows = [62, 134, 206];
  const ticks = [-20, -10, 0, 10, 20, 30];
  return (
    <figure className="proj-chart">
      <ChartHead chart={chart} />
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={px(t)} y1={248} x2={px(t)} y2={254} stroke={DIM} strokeWidth="1" />
            <text x={px(t)} y={268} fontSize="10" fill={MUTED} textAnchor="middle">
              {t > 0 ? `+${t}%` : `${t}%`}
            </text>
          </g>
        ))}
        <text x={(x0 + x1) / 2} y={288} fontSize="11" fill={MUTED} textAnchor="middle">
          {chart.xLabel}
        </text>
        <line x1={px(0)} y1={20} x2={px(0)} y2={248} stroke={ACCENT} strokeWidth="1" strokeDasharray="4 4" opacity="0.75" />
        <text x={px(0)} y={14} fontSize="9" fill={ACCENT} textAnchor="middle" opacity="0.9">
          no effect
        </text>

        {chart.effects.map((e, i) => (
          <g key={e.name}>
            <line x1={px(e.lo)} y1={rows[i]} x2={px(e.hi)} y2={rows[i]} stroke={ACCENT} strokeWidth="1.4" />
            <line x1={px(e.lo)} y1={rows[i] - 4} x2={px(e.lo)} y2={rows[i] + 4} stroke={ACCENT} strokeWidth="1.4" />
            <line x1={px(e.hi)} y1={rows[i] - 4} x2={px(e.hi)} y2={rows[i] + 4} stroke={ACCENT} strokeWidth="1.4" />
            <circle cx={px(e.est)} cy={rows[i]} r="5" fill={ACCENT} />
            <text x={px(e.est)} y={rows[i] - 12} fontSize="10" fill={TEXT} textAnchor="middle">
              {e.est > 0 ? `+${e.est.toFixed(1)}%` : `${e.est.toFixed(1)}%`}
            </text>
            <text x={x0 - 8} y={rows[i] + 4} fontSize="12.5" fill={TEXT} textAnchor="end" className="chart-serif">
              {e.name}
            </text>
            <text x={x1} y={rows[i] + 4} fontSize="9.5" fill={MUTED} textAnchor="end">
              p = {e.p.toFixed(2)}
            </text>
            <rect
              x={x0} y={rows[i] - 26} width={x1 - x0} height={52} fill="transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            />
          </g>
        ))}

        {hov !== null && (
          <Tip x={px(chart.effects[hov].est)} y={rows[hov]} tip={chart.effects[hov].tip} />
        )}
      </svg>
    </figure>
  );
}

/* ---------------- grouped bars: ours vs baselines ---------------- */
function BarsChart({ chart }) {
  const [hov, setHov] = useState(null);
  const W = 640, H = 330;
  const top = 46, bottom = 244, x0 = 26, x1 = 614;
  const cats = chart.categories;
  const step = (x1 - x0) / cats.length;
  const ymax = chart.ymax ?? 80;
  const py = (v) => bottom - (v / ymax) * (bottom - top);
  const colors = [ACCENT, TEAL];
  return (
    <figure className="proj-chart">
      <ChartHead chart={chart} />
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title}>
        {/* legend */}
        <g transform="translate(0, 18)">
          {chart.series.map((s, i) => (
            <g key={s.name} transform={`translate(${300 + i * 190}, 0)`}>
              <rect x="0" y="-8" width="10" height="10" fill={colors[i]} />
              <text x="16" y="1" fontSize="10.5" fill={MUTED}>
                {s.name}
              </text>
            </g>
          ))}
        </g>
        <line x1={x0} y1={bottom} x2={x1} y2={bottom} stroke={DIM} strokeWidth="1" />

        {cats.map((c, ci) => {
          const cx = x0 + step * ci + step / 2;
          return (
            <g key={c}>
              {chart.series.map((s, si) => {
                const v = s.values[ci];
                const bw = 42;
                const bx = cx - step / 2 + 16 + si * (bw + 12);
                const on = hov && hov.s === si && hov.i === ci;
                return (
                  <g key={s.name}>
                    <rect
                      x={bx} y={py(v)} width={bw} height={bottom - py(v)}
                      fill={colors[si]} opacity={on ? 1 : 0.92}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setHov({ s: si, i: ci })}
                      onMouseLeave={() => setHov(null)}
                    />
                    <text x={bx + bw / 2} y={py(v) - 7} fontSize="9.5" fill={TEXT} textAnchor="middle">
                      {chart.fmt ? chart.fmt(v) : v.toFixed(1)}
                    </text>
                  </g>
                );
              })}
              <text x={cx} y={bottom + 22} fontSize="12" fill={TEXT} textAnchor="middle" className="chart-serif">
                {c}
              </text>
            </g>
          );
        })}
        <text x={(x0 + x1) / 2} y={H - 10} fontSize="11" fill={MUTED} textAnchor="middle">
          {chart.xLabel}
        </text>
        {hov && (
          <Tip
            x={x0 + step * hov.i + step / 2}
            y={py(chart.series[hov.s].values[hov.i])}
            tip={chart.series[hov.s].tips[hov.i]}
          />
        )}
      </svg>
    </figure>
  );
}

/* ---------------- funnel: how the sample narrowed ---------------- */
function FunnelChart({ chart }) {
  const [hov, setHov] = useState(null);
  const W = 640, H = 250;
  const rows = [50, 120, 190];
  const widths = [1, 0.56, 0.34];
  const maxw = 520;
  const colors = [ACCENT, TEAL, "#7b8770"];
  return (
    <figure className="proj-chart">
      <ChartHead chart={chart} />
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title}>
        {chart.steps.map((s, i) => {
          const w = maxw * widths[i];
          const x = (W - w) / 2;
          const on = hov === i;
          return (
            <g key={s.label}>
              <rect
                x={x} y={rows[i]} width={w} height="42" rx="4"
                fill={colors[i]} opacity={on ? 1 : 0.92}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              />
              <text x={W / 2} y={rows[i] + 25} fontSize="18" fill={TEXT} textAnchor="middle" className="chart-serif">
                {s.value}
              </text>
              <text x={W / 2} y={rows[i] + 60} fontSize="10.5" fill={MUTED} textAnchor="middle">
                {s.label}
              </text>
            </g>
          );
        })}
        {hov !== null && <Tip x={W - 40} y={rows[hov] + 21} tip={chart.steps[hov].tip} />}
      </svg>
    </figure>
  );
}

/* ---------------- collapse: the hint vs the final result ---------------- */
function CollapseChart({ chart }) {
  const [hov, setHov] = useState(null);
  const W = 640, H = 300;
  const top = 46, bottom = 210;
  const lo = -25, hi = 35;
  const py = (v) => bottom - ((v - lo) / (hi - lo)) * (bottom - top);
  const ys = [0, 1].map((i) => (i === 0 ? py(29) : py(-1.8)));
  const xs = [185, 425];
  const bw = 92;
  return (
    <figure className="proj-chart">
      <ChartHead chart={chart} />
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title}>
        <line x1="60" y1={py(0)} x2="610" y2={py(0)} stroke={ACCENT} strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <text x="612" y={py(0) + 4} fontSize="9" fill={ACCENT} opacity="0.9">
          0
        </text>
        {chart.bars.map((b, i) => {
          const on = hov === i;
          const h = Math.abs(py(b.value) - py(0));
          return (
            <g key={b.label}>
              <rect
                x={xs[i] - bw / 2}
                y={b.value >= 0 ? py(b.value) : py(0)}
                width={bw} height={h}
                fill={i === 0 ? ACCENT : GRAY}
                opacity={on ? 1 : 0.92}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              />
              <text x={xs[i]} y={b.value >= 0 ? py(b.value) - 9 : py(b.value) + 17} fontSize="12" fill={TEXT} textAnchor="middle">
                {b.value > 0 ? `+${b.value}%` : `${b.value}%`}
              </text>
              <text x={xs[i]} y={bottom + 24} fontSize="13" fill={TEXT} textAnchor="middle" className="chart-serif">
                {b.label}
              </text>
              <text x={xs[i]} y={bottom + 41} fontSize="9.5" fill={MUTED} textAnchor="middle">
                {b.note}
              </text>
            </g>
          );
        })}
        {/* CI whisker on the final bar: −17.3% to +16.6% */}
        <line x1={xs[1]} y1={py(16.6)} x2={xs[1]} y2={py(-17.3)} stroke={ACCENT} strokeWidth="1.3" />
        <line x1={xs[1] - 5} y1={py(16.6)} x2={xs[1] + 5} y2={py(16.6)} stroke={ACCENT} strokeWidth="1.3" />
        <line x1={xs[1] - 5} y1={py(-17.3)} x2={xs[1] + 5} y2={py(-17.3)} stroke={ACCENT} strokeWidth="1.3" />
        <text x={xs[1] + 10} y={py(-17.3) + 4} fontSize="9.5" fill={ACCENT} opacity="0.9">
          95% CI
        </text>
        <text x={(60 + 610) / 2} y={H - 8} fontSize="11" fill={MUTED} textAnchor="middle">
          {chart.xLabel}
        </text>
        {hov !== null && <Tip x={xs[hov]} y={ys[hov]} tip={chart.bars[hov].tip} />}
      </svg>
    </figure>
  );
}

const TYPES = {
  forest: ForestChart,
  bars: BarsChart,
  funnel: FunnelChart,
  collapse: CollapseChart,
};

export default function SectionCharts({ charts }) {
  if (!charts || charts.length === 0) return null;
  return (
    <>
      {charts.map((c, i) => {
        const Comp = TYPES[c.type];
        return Comp ? <Comp key={c.title} chart={c} /> : null;
      })}
    </>
  );
}
