// All site content lives here — edit this file to add projects or tweak text.

export const profile = {
  name: "Camden Sun",
  siteTitle: "Camden's Website",
  eyebrow: "Statistics & Data Science — UCLA",
  tagline:
    "Hi, I'm Camden Sun — I turn data into decisions with Python, statistics, and a healthy dose of curiosity.",
  email: "camdensun@gmail.com",
  phone: "(650) 279-4249",
  github: "https://github.com/cts3111",
  githubHandle: "cts3111",
  linkedin: "https://www.linkedin.com/in/camden-sun-4a992023a/",
  linkedinHandle: "in/camden-sun-4a992023a",
};

export const skills = [
  "Python (pandas, NumPy, Matplotlib)",
  "R",
  "SQL",
  "C++",
  "Java",
  "OpenCV",
  "Tableau",
  "Excel / Google Sheets",
  "Claude Code (AI-assisted development)",
];

export const experience = [
  {
    role: "Camera Distortion vs Temperature Study",
    org: "Noah Medical",
    when: "Jun 2023 – Sep 2024",
    points: [
      "Executed a statistical study of colonoscope camera distortion under thermal variance",
      "Fit a linear regression in Python — found ~3.5% expansion per degree and concluded error is negligible for clinical use",
      "Presented findings to the GI, Vision, and EE teams, supporting the decision that no hardware or software fix was needed",
    ],
  },
  {
    role: "Vision Engineering Intern · Colonoscope Image Calibration",
    org: "Noah Medical",
    when: "Jun 2024 – Sep 2024",
    points: [
      "Finalized and deployed an automated robotic calibration system, hardening the Python codebase for production",
      "Standardized the calibration workflow and cross-trained the image-processing team",
    ],
  },
  {
    role: "Automated Testing Software Intern",
    org: "Noah Medical",
    when: "Sep 2023 – Jun 2024",
    points: [
      "Built an automated calibration pipeline with a programmed robotic fixture, processing 200+ images weekly",
      "Created a pass/fail quality metric with verification-image output, cutting 2–6 hours per run",
      "Configured NVIDIA Orin edge-computing platforms in Ubuntu Linux",
    ],
  },
];

export const education = [
  {
    school: "University of California, Los Angeles",
    degree: "B.S. in Statistics and Data Science",
    when: "Expected Dec 2026",
    note: "Coursework: Probability & Mathematical Statistics, Linear Modeling & Regression Analysis, Experimental Design & Data Mining, Computational Statistics & Simulation, Applied Statistics & A/B Testing.",
  },
  {
    school: "Foothill College",
    degree: "A.S. Mathematics · A.S. Computer Science",
    when: "Sep 2022 – Jun 2024",
    note: "Coursework: Python, C++, Java, Physics, Electrical Circuits, Linear Algebra, Discrete Math, Differential Equations.",
  },
];

export const leadership = [
  {
    role: "Chapter President",
    org: "Lambda Phi Epsilon — UCLA Chapter",
    when: "Sep 2024 – Jun 2026",
    points: [
      "Refounded the chapter, scaling active membership 5x from 7 to 37 by building a rush funnel and reallocating outreach based on conversion data",
      "Ran ticketed live-music events, modeling profit across ticket tiers, venue, timing, and engagement",
      "Modeled per-rush spend against accepted bids, monitoring $10,000+ in annual revenue from Zelle and Venmo CSVs",
    ],
  },
];

export const interests = [
  "Weight lifting",
  "Meal prep",
  "Game development",
  "Hot pot",
];

// ---------------------------------------------------------------------------
// Projects — add a new object here and it becomes a card + a project page.
// `demoUrl` is the Streamlit Cloud URL once deployed (empty = "coming soon").
// ---------------------------------------------------------------------------

export const projects = [
  {
    slug: "visual-harmony-analyzer",
    title: "Visual Harmony Analyzer",
    status: "Live demo",
    demoUrl: "",
    summary:
      "End-to-end computer-vision study: does visual harmony in e-commerce product photography drive engagement? ~44,000 product images through a custom OpenCV + MediaPipe + K-Means color pipeline.",
    result:
      "Business test null at all three harmony levels (p 0.27–0.84) — reported honestly. The pipeline itself validated: 67.7% test accuracy on color-family classification, 132/132 instrument unit tests.",
    tags: ["Python", "OpenCV", "MediaPipe", "scikit-learn", "Streamlit"],
    link: "https://github.com/cts3111/visual-harmony-dashboard",
    linkLabel: "View dashboard on GitHub",
    findings: {
      headline: "The business test came back null — and that's the headline.",
      lead: "1,418 judgeable products, three harmony levels, zero reliable effect on engagement. The honest report, followed by everything that did hold up.",
      stats: [
        {
          name: "Warm/cool harmony",
          value: "−3.3%",
          detail: "on rating count · CI −12.8%…+7.3% · p = 0.53",
        },
        {
          name: "4-season harmony",
          value: "+7.3%",
          detail: "on rating count · CI −5.4%…+21.7% · p = 0.27",
        },
        {
          name: "12-season harmony",
          value: "−1.8%",
          detail: "on rating count · CI −17.3%…+16.6% · p = 0.84",
        },
      ],
      heldUp: [
        "Color-family model: 67.7% test accuracy (616/910), best-in-class vs. open-source benchmark",
        "Palette instrument: 132/132 unit tests; synthetic painted-torso extraction 20/20",
        "External benchmark (DeepFashion2, 925 images): 85% color-family agreement",
        "Deterministic pipeline: identical results run-to-run (seeded K-Means), visual QA on every stage",
      ],
      lesson:
        "The first batch (n = 508) showed a +29% hint for 12-season harmony (p = 0.074). At three times the scale it collapsed to −1.8% — a small-sample illusion. That's why the hint was reported as a hint, and why the overnight scale-up was run.",
      curiosity:
        "One lead for a future study: strict two-photo ensemble flags (n = 8) showed +147% (p = 0.008). Too fragile to trust, but consistent with 'only high-confidence exact-palette matches matter.'",
    },
  },
];
