# Project Context

The user's personal portfolio site (React 19 + Vite, deployed on Vercel). Audience: recruiters and job applications.

# Rules

- Always ask clarifying questions before starting a complex task
- Show your plan and steps before executing
- Keep reports and summaries concise — bullet points over paragraphs
- Keep the story file `learning-story.md` updated as you build — log what you did, why, and key decisions as they happen
- README.md is the employer-facing summary; learning-story.md holds the decision/action log
- This project has a dedicated subagent: `website-agent` (see `../.claude/agents/website-agent.md`)

# Setup

- `npm install` / `npm run dev` to run locally; push to `main` for Vercel auto-deploy
- All site content lives in `src/data/content.js` — add projects there; the Projects page renders them automatically
- Design: editorial scroll-snap one-pager — alternating dark/light full-screen sections, Cormorant Garamond serif + italic red accents, CSS-art placeholders, morphing hover icons. No theme toggle. CSS design tokens, no UI framework.
