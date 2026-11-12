// Student Event Ticket Profit Optimizer project content (2026-11-12).
// Owned by the tickets project workstream; edit here, not in content.js.
// Copy rules: no em/en dashes; "ticketed music events", never "parties";
// "free-entry window" (not girls-free); no alcohol; no event names.

export const ticketsProject = {
  slug: "student-event-ticket-profit-optimizer",
  title: "Student Event Ticket Profit Optimizer",
  status: "Complete",
  demoUrl: "https://cts3111-ticket-profit-optimizer-app.streamlit.app/",
  demoLabel: "Open the predictive model",
  headline:
    "What combination of decisions (tier prices, marketing lead time, venue) maximizes profit for student-org ticketed music events? Built from 11 real events of ticket-level data, ending in a decision simulator that ranks about 1,400 combinations by expected profit.",
  tags: ["Python", "pandas", "scikit-learn", "Streamlit", "Simulation"],
  link: "", // no public repo yet; the page hides the link button when empty
  linkLabel: "",
  stats: [
    {
      value: "+$1.4k (2x)",
      label: "average revenue gain per event: tiered vs flat pricing across all 1,280 searched combinations",
    },
    {
      value: "$986 vs $397",
      label: "average profit per event, tiered vs flat pricing",
    },
    {
      value: "+0.47",
      label: "venue capacity to profit, vs +0.88 for revenue: costs eat the gain",
    },
    {
      value: "$6.2k vs $3.3k",
      label: "expected revenue per event: the simulator's best config vs flat $20 pricing",
    },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      lead:
        "Across 11 ticketed music events, I measured which decisions actually move profit per event, then built a simulator that ranks about 1,400 decision combinations and recommends the best. Tiered pricing wins, marketing engagement predicts, and venue costs quietly eat revenue gains. Profits fund the chapter, and 10% is donated to charity organizations.",
      demo: true,
      charts: [
        {
          type: "bars",
          title: "Tiered pricing wins on profit",
          subtitle: "Average profit per event, tiered vs flat pricing",
          xLabel: "Pricing method across past events",
          ymax: 1100,
          fmt: (v) => `$${Math.round(v)}`,
          categories: ["Tiered", "Flat"],
          series: [
            {
              name: "Average profit",
              values: [986, 397],
              tips: [
                "Tiered events averaged $986 profit per event",
                "Flat events averaged $397 profit per event",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "events",
      title: "The events",
      lead:
        "Real ticket-level data from 11 student-org ticketed music events, cleaned and reconciled before modeling. Form rows don't equal paid tickets, so every event's tier mix was checked against recorded revenue.",
      points: [
        "About 1,300 ticket-level rows from presale forms, labeled by tier and price",
        "8 of 11 events reconcile to the dollar against recorded presale revenue",
        "One event sealed off entirely as an out-of-sample test before modeling began",
        "All org, venue, and buyer names anonymized; only aggregates leave the project",
      ],
      table: {
        rows: [
          { k: "Sample", v: "11 events, about 1,300 ticket-level rows" },
          { k: "Outcome", v: "profit per event (revenue minus costs)" },
          { k: "Cost sources", v: "venue, supplies, occasional damage fines" },
          { k: "Held out", v: "one event, never seen during modeling", accent: true },
        ],
      },
    },
    {
      id: "drivers",
      title: "What drives profit",
      lead:
        "Across the events, four decision levers stand out. These are associations across about 10 events, descriptive rather than causal.",
      points: [
        "Marketing engagement is the strongest signal: r = +0.77 with profit and +0.60 with revenue",
        "Tiered pricing beats flat: $986 vs $397 average profit per event",
        "Venue capacity: revenue tracks it almost linearly (r = +0.88), but profit only +0.47, because bigger venues cost more",
        "Free-entry window: lower average profit, but confounded with venue size. Suggestive only",
      ],
      charts: [
        {
          type: "bars",
          title: "Venue size: revenue vs profit",
          subtitle: "Association (r) between venue capacity and each outcome",
          xLabel: "Outcome measured",
          ymax: 1,
          fmt: (v) => `r = ${v.toFixed(2)}`,
          categories: ["Revenue", "Profit"],
          series: [
            {
              name: "Venue capacity",
              values: [0.88, 0.47],
              tips: [
                "Revenue tracks venue capacity almost linearly: r = +0.88 across 10 events",
                "Profit rises far less with capacity: r = +0.47. Bigger venues cost more, and those costs eat the gain",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "simulator",
      title: "The simulator",
      lead:
        "A transparent simulation built from small validated pieces, since 11 events is too few rows for a black-box model. The simulator enumerates about 1,400 decision combinations and ranks them by expected profit.",
      points: [
        "Presale-count model: ridge regression with exhaustive subset selection, every candidate validated by leave-one-out cross-validation",
        "Tier take-up: buyers split roughly in thirds across tiers, the simulator's default split",
        "Door model: each presale buyer is worth about $4.78 of door revenue, a weak-data multiplier flagged as such",
        "Optimizer: grid search over pricing, free-entry window, marketing lead, and venue. Best config lands about $4.5k expected profit per event",
      ],
      charts: [
        {
          type: "funnel",
          title: "From raw forms to training rows",
          subtitle: "How the sample narrowed",
          steps: [
            {
              value: "14",
              label: "raw ticket forms",
              tip: "14 Google Forms exports with ticket-level rows: timestamps, tiers, referrals, payments",
            },
            {
              value: "11",
              label: "labeled events",
              tip: "11 events hand-labeled by tier and price; 8 reconcile to the dollar against recorded revenue",
            },
            {
              value: "9",
              label: "training events",
              tip: "9 events train the count model; one is held out as an out-of-sample test, one lacks marketing data",
            },
          ],
        },
      ],
    },
    {
      id: "my-role",
      title: "My Role",
      lead:
        "The build was AI-assisted, but the study was mine: I owned the data, the question, and every business conclusion.",
      points: [
        "Owned: the research question (what decisions maximize profit), the hand-labeled tier data, the org's cost data, and every business conclusion, including the honest labels on what the data can't say",
        "Guided: Claude Code wrote the consolidation and modeling scripts under my protocol, held-out event sealed before modeling, leave-one-out validation on every component, weak-data estimates flagged as such",
        "Verified: I reconciled every event's tier mix against recorded revenue (8 of 11 to the dollar) and checked the model's claims against what I know from running these events",
      ],
    },
    {
      id: "findings",
      title: "Findings",
      table: {
        rows: [
          { k: "Tiered vs flat pricing", v: "data-backed", accent: true },
          { k: "Venue choice", v: "strongest real lever" },
          { k: "Free-entry window", v: "suggestive, needs an A/B test" },
          { k: "Tier price level", v: "judgment call, not advice" },
          { k: "Marketing lead time", v: "noise" },
        ],
      },
    },
  ],
  findings: {
    headline: "Three levers move profit, and the model admits what it can't say.",
    lead:
      "The prediction model and decision simulator now power an interactive dashboard, so future events become planned ones: propose it, model it, pick the best config. Profits fund the chapter, and 10% is donated to charity organizations.",
    stats: [
      {
        name: "Tier price level",
        value: "not learnable",
        detail:
          "prices barely varied across events (r ≈ 0 with revenue), so the optimizer treats higher prices as free money",
      },
      {
        name: "Marketing lead time",
        value: "noise",
        detail: "r = +0.14 with profit. Posting policy should not be made from it",
      },
      {
        name: "Free-entry window",
        value: "mixed",
        detail:
          "venue-confounded, and one event flips the adjusted door effect. A same-venue A/B test would settle it",
      },
    ],
    heldUpTitle: "What the data can't say",
    heldUp: [
      "Tier price level is not learnable from this data, so the optimizer's preference for high prices is flagged as a limitation, not shipped as advice",
      "Marketing lead time shows no detectable relationship (r = +0.14)",
      "The free-entry window effect is confounded with venue size, and a single event flips its sign",
      "Every number is an association across about 10 events: no significance claims at this sample size",
    ],
    lessonTitle: "Going forward",
    lesson:
      "The ridge model and decision simulator power an interactive dashboard: change any decision and watch expected presales, revenue, and profit update, with a sensitivity curve and your config's rank against about 1,280 alternatives. Operating note: bigger venues mean more people and more damage risk, so fines tend to scale with headcount (experience, not a fitted effect).",
    curiosity: "",
  },
};
