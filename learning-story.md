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

## 2026-11-09 — Hero graphics simplified + negative name

- Feedback: "make the graphics more simplistic" — the hero orb should be a plain circle with no reflection, use the site's existing orange, and the name should go negative where it crosses the orb.
- **Orb:** `.art-hero .orb` changed from a blue radial-gradient sphere (highlight at 35% 35%) to a flat `var(--accent)` disc (#e8432f); removed the gradient and the 0.96 opacity.
- **Name:** `.hero-title` now uses `mix-blend-mode: difference`, so the title inverts against whatever is behind it. White letters turn cyan over the orange disc; the orange italic "Sun" turns black. Text outside the disc stays light.
- **Stacking fix:** blending is cut off by any ancestor stacking context. `.section-inner` had `z-index: 2`, which kept the orb out of the title's blend backdrop; for the hero it is overridden to `z-index: auto`, and `.hero` gets `isolation: isolate` to scope the blend. Verified in headless Chrome at 1440 desktop ("Sun" crosses the orb), 820 tablet ("Camden" partially inverts), and 390 mobile (orb sits above the title, so no overlap/inversion there).
- **Pre-existing bug fixed to render the page:** `useLocation` was called with no router (blank site). Wrapped `<App />` in `<BrowserRouter>` in `src/main.jsx`; project route `/projects/visual-harmony-analyzer` verified. `npm run build` passes.
- Left the thin orbit rings and background haze blobs unchanged (not part of the orb); can remove them for an even flatter hero if asked. Changes are local — not deployed.

## 2026-11-12 — Projects restructured: headline + stat blurbs + story sections

- **The ask:** projects are the main focus of the site now. He provided 10 reference screenshots (Desktop, 1:20–1:44 AM) of portfolio project cards/pages. Card = one-sentence resume-style headline (purpose + stakeholder value) + stat blurbs at the bottom with impressive numbers. Detail page = comprehensive Overview first (with images + the live demo embedded in it), then Context → Goals → Approach → System → Outcome, Findings last. Keep the current design system.
- **Data model (content.js):** each project now has `headline` (one sentence), `stats` (4 card blurbs: value + label), and `sections[]` (id, title, lead, optional points/demo/images). `findings` stays its own object, rendered as the last section. The old `summary`/`result` fields are gone.
- **Card (ProjectsSection.jsx):** art → status → title → headline → 2×2 stat blurb grid (serif accent numbers + small captions, top border) → View project link. Ghost card unchanged.
- **Project page (ProjectPage.jsx):** now fully data-driven from `sections[]`. Overview = lead + stat grid + inline demo frame (browser chrome, iframe once `demoUrl` is set, "deploying" pulse state until then) + image row. The demo **modal is gone** — demo is embedded in the overview per his instruction ("Add a section on the first section with the demo like in overview where the images should be"). DemoModal.jsx left in the repo, unused.
- **Images:** copied two real pipeline QA artifacts from visual-harmony-dashboard/results/wheel (deep_autumn_annotated.jpg, cool_winter_annotated.jpg) into public/ as pipeline-qa-1.jpg / pipeline-qa-2.jpg — real CV output (detected regions + dominant colors) instead of CSS-art placeholders, matching the screenshots' "show the actual work" vibe. Placeholder styling still exists if an image's src is empty.
- **Stats chosen** (his instruction: data cleaned, algorithm accuracy vs the other algorithm, other impressive numbers): 44,000+ images processed · 67.7% family test accuracy (616/910, 15+ pts over the baseline rule) · 132/132 unit tests · 1,418 products in the final test. He can swap any in one line.
- **Screenshot gist (agent report on the 10 reference screenshots):** the reference is a single project page ("Profit Recovery Automation") with nav tabs OVERVIEW → CONTEXT → GOALS → APPROACH → SYSTEM → MY ROLE → OUTCOMES → REFLECTION; its Overview = large browser-mockup demo left + narrative panel right + 4-stat row; its cards use 3 label-over-value stat columns. **Adopted:** section order (minus REFLECTION — our Findings already tells the lesson, and he wants Findings last), plus a new **My Role** section (Owned/Guided/Verified — shows what was personally his in an AI-assisted build, recruiter-relevant) between System and Outcome. **Skipped on purpose:** the reference's visuals (tilted cards, gray mats, dot-grid gutters, per-section accent shifts) — he wants the current editorial design kept.
- `npm run build` passes. Not deployed yet (changes are local).

## 2026-11-12 — No-dash rule applied everywhere employer-facing

- **His rule:** get rid of all "superdashes" (em —, en –) in anything an employer could read — they read "very AI". Replace with commas, colons, parentheses, or separate sentences. Saved as a standing rule (memory).
- **Swept:** all of camden-website src (content.js, About/Contact/Projects sections, ProjectPage labels, index.html meta description) + all 4 workspace READMEs (camden-website, harmony-analyzer, visual-harmony-dashboard, ticket-profit-optimizer).
- **Also restructured:** prose arrows (→) in content and README stage bullets; "01 — Overview" labels now "01. Overview"; date ranges now "Jun 2023 to Sep 2024". Kept: minus signs in stats (−3.3%), hyphens in compounds, UI arrows (btn-line "View project →").
- **Findings headline styling:** used to split on "—" for the italic accent; headline is now dash-free, and ProjectPage italicizes the tail after the last comma instead.
- **Fixed while in there:** camden-website README still claimed "dark mode by default with a light-mode toggle" (toggle was removed 2026-11-08) and harmony-analyzer README's one-liner still claimed "a suggestive dose-response gradient" (the final result is null). Both now match reality.

## 2026-11-12 — Every project-page section gets an image/table

- **His ask:** an image or graph/table in every section, "even if it's unrelated." For Outcome specifically: something that "successfully catches how much noise there is."
- **Charts generated** (script /tmp/gen_site_charts.py, matplotlib 3.9 in the workspace venv, saved to public/): all from real results data (engagement_regression.csv, sklearn_summary.csv, story numbers), styled to the site's dark theme (#0b0b0c bg, #e8432f accent, serif titles; system fonts fall back to DejaVu since Cormorant/Inter aren't installed locally).
  - `outcome-forest.png` — forest plot: 3 harmony effects with 95% CIs all crossing the zero line (THE noise visual)
  - `outcome-collapse.png` — the +29% n=508 hint vs −1.8% n=1,418 final, with the wide CI whisker on the final bar
  - `system-funnel.png` — 30,000 listings → 2,955 face-positive → 1,418 judgeable
  - `approach-accuracy.png` — our models vs published CNN / rule baseline / chance on the held-out 910
  - `context-table.png`, `goals-table.png`, `findings-ladder.png` — site-styled tables (study at a glance / goals vs shipped / validation ladder)
  - `qa-cheek-crop.jpg` — real HITL cheek-crop QA artifact (My Role)
- **Wiring:** sections in content.js now support an `images` array (src + caption); ProjectPage renders it under the bullets via a shared `SectionImages` component; single images get a 640px single-column row (`.proj-media-row.single`), two images share a row (Outcome).
- **Coordination:** a parallel Claude session ("projects-25") wanted to add the tickets project to the site at the same time; told it to wait on content.js / ProjectPage.jsx / index.css / public until these edits landed.
- `npm run build` passes; headless render confirms all 10 images present. Not deployed.

## 2026-11-12 — Image containers fixed; tables became real React tables

- **His feedback (with new screenshots):** the framed image container cut off chart text, and table-type images don't need to be images. Asked: full images without boundaries, careful resizing.
- **Root cause:** `.proj-img img` forced `aspect-ratio: 4/3` + `object-fit: cover` inside a bordered, rounded, overflow-hidden box — wide 7.2×3.6in charts got center-cropped, chopping off text.
- **Fix:** images now render full-width at natural aspect ratio (`width: 100%; height: auto`), no border, no radius, no crop. `.proj-media-row` is a single 640px-max column (images stack, never share a row), so every chart reads at full size and scales down cleanly on narrow screens. Charts already carry the site's dark bg, so they blend into the page seamlessly.
- **Tables as React:** context (study at a glance), goals (goal vs status, with header), and findings (validation ladder, accent values) are now `.proj-table` components in content.js `table: { head?, rows: [{k, v, accent?}] }` — real site fonts, crisp at any DPI, mobile rule stacks key over value below 640px. Deleted the 3 table PNGs (context-table.png, goals-table.png, findings-ladder.png). Chart generator script still in /tmp/gen_site_charts.py for the 4 remaining charts.
- Verified: build passes; rendered page has 7 images + 3 tables (16 rows), no crop CSS on real images.

## 2026-11-12 — Overview images back to side-by-side (opt-in)

- **His feedback:** he liked the original two-up layout in the Overview, but only because those QA photos are square (608×608, 676×676).
- **Fix:** sections can opt into a split row with `imagesSplit: true` (overview only, for now). `.proj-media-row.split` = 2 columns with 24px gap; stacks to one column below 640px. Wide charts stay in the default single 640px column. Same SectionImages component, no crop either way.

## 2026-11-12 — Charts became hand-rolled interactive SVG (no library)

- **His ask:** the remaining 4 chart images should be pure JS, built into the website, with hover interactivity ("hover over a bar gives more context").
- **Built `src/components/SectionCharts.jsx`:** four interactive SVG components (ForestChart, BarsChart, FunnelChart, CollapseChart), no chart library (keeps the "no UI framework" rule; site colors hardcoded to the design tokens). Hover any bar/point/row → SVG tooltip with full context (exact counts, 95% CIs, p-values, baseline descriptions). Charts scale like images (viewBox + width 100%), titles/subtitles in real site typography (serif titles).
- **Data:** sections in content.js now carry `charts: [{type, title, subtitle, ...data + hover tips}]`. Outcome has forest + collapse, Approach has grouped bars, System has funnel. Each hover tip is a real sentence with the real numbers.
- **Deleted** the 4 chart PNGs; public/ now holds only photos (2 QA + 1 cheek crop). The matplotlib generator script remains at /tmp/gen_site_charts.py if print versions are ever needed.
- Verified: build passes; rendered page has all 4 chart SVGs, 3 photos, no errors.

## 2026-11-12 — QA images: hover highlights + merge with tickets project

- **His feedback:** the cheek-crop image under My Role is hard to read; highlight what to look at, and give images a hover effect to differentiate them.
- **Vision agent mapped the three QA images** (macOS Vision + PIL analysis since this session can't view images): exact % regions for faces, cheek crops, swatch bars, and color strips.
- **Built:** QA images get `annotations: [{x,y,w,h,label}]` in the project data. On hover: image zooms slightly, dims, and dashed accent boxes with label chips fade in over the mapped regions (e.g. "dominant color swatches" over the peach bars, "detected cheek crops" over the skin photos). Cursor becomes crosshair; caption turns accent. Low-res cheek strip capped at 520px via optional `img.cap`.
- **Parallel session merged the tickets project:** harmony content moved verbatim to `src/data/projects/harmony.js`, tickets in `tickets.js`, content.js merges (tickets first). ProjectPage findings headings are now data-driven, BarsChart gained optional ymax/fmt. My QA changes were applied on top of the merge in harmony.js.

## 2026-11-12 — Tickets project added; projects split into per-project files

- **Coordination:** session projects-25 (this one) added the tickets project after projects-4c finished its section-images/SVG-charts work. New layout so each project owns its content file: `src/data/projects/tickets.js` + `src/data/projects/harmony.js` (harmony moved verbatim from content.js), and content.js now just imports and merges them (`export const projects = [ticketsProject, harmonyProject]`). Parallel sessions can now work side by side without touching the same file.
- **ProjectPage tweaks (backward compatible):** findings headings are data-driven (`heldUpTitle` / `lessonTitle` / `curiosityTitle`, defaults = the old labels); the curiosity block renders only when non-empty; the bottom link button renders only when `link` is non-empty (tickets has no public repo yet).
- **Tickets page content** (interviewed him first, decisions logged in the tickets story): card headline + 4 stat blurbs (+0.77 engagement, $986 vs $397 tiered vs flat, +0.47 capacity vs +0.88 revenue, ~$4.5k best config). Sections: Overview (demo placeholder + tiered-vs-flat chart), The events (table), What drives profit (capacity chart), The simulator (funnel chart: 14 raw forms → 11 labeled events → 9 training events), My Role (Owned/Guided/Verified, same pattern as harmony; added at his request), Findings (honest-labels table + "What the data can't say" + "Going forward"). Site terms: "ticketed music events" (never parties), "free-entry window", no alcohol, no event names, philanthropy line. All copy dash-free.
- **Charts:** BarsChart gained optional `ymax` + `fmt` (backward compatible; harmony charts untouched). Tickets uses two bars charts with hover tips (tiered $986 vs $397; capacity r = 0.88 vs 0.47). No new PNGs — site charts are interactive SVG now.
- `npm run build` passes. Not deployed.

## 2026-11-12 — Harmony card headline states the null

- Updated `src/data/projects/harmony.js` card headline to report the honest answer ("no detectable effect") on the Projects page card. The project page already led with the null; the card was the only spot that did not.
- Reason (user): recruiters should see the null result wherever the harmony project is summarized.

## 2026-11-12 (later) — Under-construction banner

- Added a site-wide fixed banner at the top: "Site under construction: more coming soon." (App.jsx + index.css).
- Design fit: mix-blend-mode difference (same trick as the nav, readable on dark and light sections), tiny uppercase body text, height token --wip-h (30px); nav offset by the same variable so the banner and wordmark never overlap.

## 2026-11-12 (evening) — Live Streamlit demo wired into the harmony project page

- Set `demoUrl` in `src/data/projects/harmony.js` to `https://visual-harmony-dashboard.streamlit.app/?embed=true`. ProjectPage.jsx already renders `demoUrl` in the "live demo on Streamlit Cloud" frame (Overview section); the empty string was showing the "Demo deploying" placeholder.
- `?embed=true` strips Streamlit's toolbar/padding so the app reads as part of the site.
- Dashboard side of this (its own story): app went public on Cloud, cv2 needed system libs via `packages.txt` (libgl1), and Cloud's installer pipes that file through xargs so it must hold bare package names only.
- Committed harmony.js alone; other sessions' uncommitted site edits (App.jsx, index.html, README) were left in the working tree untouched.

## 2026-11-12 (later) — Live demo: removed window chrome

- User feedback (screenshot): the embedded Streamlit demo looked like its own window and broke the page flow.
- Removed the fake browser frame (traffic lights, title bar, dark frame). The demo now sits as a flush content block: a small site-styled label above, hairline border, subtle radius. Pending state (tickets page) restyled to match with a dashed border.
- Matches the site's own "no frame, no crop" media philosophy.

## 2026-11-12 (later) — Demo: embed removed, clean link instead

- User reported (incognito too) a light gray bar with three buttons in the demo area. Diagnosed: that bar is Streamlit's own chrome inside the iframe (header/toolbar or the anonymous login gate). The website cannot style another app's internal UI.
- Removed the iframe embed entirely. The demo is now a site-styled "Open live demo" button that opens Streamlit in a new tab. Verified in rendered DOM: zero iframes on the project page.
- Action for the user: check the app's Sharing setting on Streamlit Cloud. The bare app URL currently redirects anonymous visitors to a login page, which suggests the deployment is still private even though the GitHub repo is public.

## 2026-11-12 (later) — Ticket project: live model button

- Set the tickets project demoUrl to the deployed Streamlit app (full page, new tab) and added a per-project demoLabel. The ticket page button now reads "Open the predictive model" (user: it is a predictive model, not a demo); harmony keeps "Open live demo".

## 2026-11-12 (evening) — Whole-site restyle: white / green / teal, plus distinct card art

- **His ask:** whole-site restyle away from black + red (his words: "too sinister"). References: screenshots on his Desktop (analyzed by color extraction, since this session can't view images): near-white base #fafafa / #f6f6f4, warm-gray panels #f2f1ed, dark slate text #1e252c, accents lime #e0fe9a + teal #36aac4 + sage #7b8770. Kept the existing structure (scroll-snap sections, nav, cards, tables, charts).
- **Tokens rewritten in index.css:** old dark/light/red tokens renamed to semantic ones: --bg-base (#fafafa), --bg-panel (#f2f1ed), --ink (#1e252c), --line (slate alpha), --accent (#1f7a3d green, text-safe), --accent-soft (#e0fe9a lime for fills), --accent-2 (#36aac4 teal), --accent-3 (#7b8770 sage). Section alternation = white vs warm-gray panels.
- **Typography:** full sans (his call): Cormorant Garamond dropped from index.html, Inter now covers display + body (weights 400-700). Heading italics became normal-weight color accents (no synthetic oblique); em accents = green.
- **Component recolors:** hero orb now lime with teal/dashed detection ring, haze = soft green/teal glows, no more difference-blend on the hero title; project cards white with soft shadows; demo pill = lime fill + ink text (hovers to green); QA chips white; modal overlay lightened; film grain halved. Chart constants in SectionCharts.jsx moved to the same palette (ACCENT green, TEAL for baselines, white tooltips).
- **Distinct card art (the original ask):** ProjectsSection.jsx now switches per-slug inline SVGs. Harmony = 12-segment color wheel using the REAL dominant hexes from the dashboard's wheel gallery + cheek-landmark dots; tickets = ascending tier staircase with the optimum tier in lime + ticket stubs. Fallback = the old CSS panels for future projects. `.p-card-art` uses aspect-ratio 200/170 so the SVG fills the card at any width.
- `npm run build` passes. Not deployed yet (user reviews first).

## 2026-11-12 (later) — Ticket stat: revenue comparison

- User wanted a bigger number and a revenue comparison instead of profit. Replaced the "~$4.5k expected profit" stat with "$6.2k vs $3.3k" expected revenue per event: simulator's best config vs flat $20 pricing (both at the same settings; computed from the simulator, not hand-set).

## 2026-11-12 (later) — Ticket stat: average revenue gain

- Replaced the +0.77 engagement stat with "+$1.4k (2x)": average revenue gain per event, tiered vs flat pricing across all 1,280 searched combos (computed: tiered avg $2,656 vs flat avg $1,301).
- Kept "$6.2k vs $3.3k" as the best-config comparison (numbers from the published simulator output).

## 2026-11-12 (late) — Homepage: ghost card removed, cards enlarged

- User: with only two projects, the "next project goes here" ghost card makes the site look unfinished; and the cards should be bigger, in the style of his Desktop screenshots (white rounded cards, hairline borders, soft shadows, big stat numbers, small uppercase labels; this session can't view images, so sized from the measured palette + that card pattern).
- Removed the ghost card markup (ProjectsSection.jsx) and its CSS (.ghost-card/.ghost-inner/.plus).
- Enlarged: card padding 34px, radius 14px, art radius 10px; title up to ~2.1rem, stats up to 2.05rem with more breathing room.
- Follow-up: cards stacked vertically in a single centered column (max 760px) so each card reads fully on scroll; card art reshaped to a shorter 200/130 banner and both SVG scenes re-laid to fit that viewBox (wheel R=54 at left, swatches right; tiers rescaled with stubs at the base).
- Follow-up 2: cards restructured to the user's pasted reference (vision subagent OCR'd it since this session can't view images): image left (~52%), text right, "Key findings" strip at the bottom. Reference style applied: flat and frameless, no card border/shadow/radius, sharp-cornered flat gray art canvas (#ececea), plain uppercase status text instead of a chip, hairline divider between stacked projects, hover = title + divider turn green (no lift). Stats strip got a "Key findings" micro-label.
- Follow-up 3: user rejected the frameless centered version. Cards are full-width again (grid max-width removed; they fill the whole section width) and are their own containers again: white card, hairline border, 14px radius, soft shadow, gentle hover lift. The left-art / right-text / bottom-findings structure stays.
