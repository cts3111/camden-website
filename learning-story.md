# Learning Story — camden-website

> Running story of how this project was built — actions, why, and key decisions.
> README.md stays the employer-facing summary.

## 2026-11-08 — Build history (backfilled)

- **v1 — "bold & creative" gradient design.** React 19 + Vite scaffold, Space Grotesk/Inter, gradient blobs, sun-mark logo (his surname), dark default + light toggle, 4 pages with react-router. Deployed on Vercel (project `camden-website`, handle `housefax`). Verdict: he called it "corny / cookie cutter."
- **v2 — poster style (Anton).** Restyled after analyzing martingarrix.com's CSS: condensed uppercase Anton display, monochrome + red accent, marquee, hover-invert rows. Verdict: "not what I had in mind" — he provided 5 reference screenshots (Desktop, timestamped) instead.
- **v3 — editorial scroll-snap one-pager (current).** Built from the screenshots: alternating dark/light full-screen sections (Hero dark → About light → Projects dark → Contact light), soft `scroll-snap` ("pushback"), Cormorant Garamond serif + italic red accents, CSS-art placeholder scenes (no photos), morph-on-hover back-to-top circle + morphing menu lines → X, full-screen menu overlay with staggered italic-on-hover links. **Theme toggle removed at his request** — the alternating sections are the design. Nav inverts over sections via `mix-blend-mode: difference`. react-router removed (single page, anchor links).
- **Parallax v1.** Mouse-follow on the hero: name + art drifted opposite the cursor with lerp smoothing; hero content centered.

## 2026-11-09 — Parallax fixes & hero art rework

- Feedback: parallax felt nauseating; background looked blurry; "Sun" (accent orange) blended with the warm orange orb behind it.
- **Parallax v2:** art now moves *toward* the cursor while text moves *away* (window-depth illusion), depths 30/16/7px — stronger separation, less nausea.
- **Hero art:** orb recolored warm orange → cool indigo (#8fa3e8 → #3d4c86), removed its blur filter for a crisp edge; hazes reduced (80px → 50px blur, opacity 0.5 → 0.3) and cooled to blues; hero base gradient cooled (#141b30). Orange "Sun" now contrasts instead of blending.
- Note: site accent (#e8432f) kept site-wide; only the hero art palette changed.
