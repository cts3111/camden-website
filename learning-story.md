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

## 2026-11-09 — Projects → card system + project pages + demo modal

- Decision: Projects section becomes a card grid (one card per project, click → dedicated project page), so future projects just slot in.
- Router: react-router re-added. Routes: `/` (one-pager) and `/projects/:slug`. Scroll-snap is toggled on the home route only (`html.snap-mode` class) so project pages scroll normally.
- **Project page layout: demo first, findings second** (his requirement). Demo = "Open Live Demo" button → popout modal (backdrop blur, ✕ button, Esc closes) embedding the Streamlit Cloud app in an iframe. Until the app is deployed, the button shows a "deploying" state — `demoUrl` in content.js is a one-line swap once the URL exists.
- **Findings content is the honest final result** from the research story file: the business test was NULL at all three harmony levels (warm/cool −3.3% p=0.53; 4-season +7.3% p=0.27; 12-season −1.8% p=0.84), the +29% n=508 hint that collapsed at 3x scale, instrument validation (67.7% family test accuracy, 132/132 unit tests, 85% DeepFashion2 agreement), and the n=8 ensemble curiosity flagged as a lead, not a finding.
- **Flagged to him:** his resume bullet claims "r = 0.43, ~12% sales lift" — the final research result is null. The site now tells the honest story; the resume bullet should be fixed to match.
- Dashboard repo: committed project docs (CLAUDE.md, learning-story.md); repo is deploy-ready for Streamlit Cloud (requirements.txt, runtime.txt pinning Python 3.11, models/data committed).
