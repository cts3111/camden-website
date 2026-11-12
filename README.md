# Camden's Website

My personal portfolio site, built for recruiters and job applications. Editorial scroll-snap one-pager with alternating dark and light sections.

## Stack

- React 19 + Vite
- React Router
- Plain CSS with design tokens (CSS variables), no UI framework
- Deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```

## Add a project

Edit `src/data/content.js` and add an object to the `projects` array. The Projects page renders it automatically. All site text (about, experience, contact) lives in that same file.

## Deploy

Push to `main`. Vercel auto-deploys (or run `vercel --prod`).
