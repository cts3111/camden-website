// All site content lives here — edit this file to add projects or tweak text.

import { ticketsProject } from "./projects/tickets.js";
import { harmonyProject } from "./projects/harmony.js";

export const profile = {
  name: "Camden Sun",
  siteTitle: "Camden's Website",
  eyebrow: "Statistics & Data Science, UCLA",
  tagline:
    "Hi, I'm Camden Sun. I turn data into decisions with Python, statistics, and a healthy dose of curiosity.",
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
    when: "Jun 2023 to Sep 2024",
    points: [
      "Executed a statistical study of colonoscope camera distortion under thermal variance",
      "Fit a linear regression in Python and found ~3.5% expansion per degree, concluding the error is negligible for clinical use",
      "Presented findings to the GI, Vision, and EE teams, supporting the decision that no hardware or software fix was needed",
    ],
  },
  {
    role: "Vision Engineering Intern · Colonoscope Image Calibration",
    org: "Noah Medical",
    when: "Jun 2024 to Sep 2024",
    points: [
      "Finalized and deployed an automated robotic calibration system, hardening the Python codebase for production",
      "Standardized the calibration workflow and cross-trained the image-processing team",
    ],
  },
  {
    role: "Automated Testing Software Intern",
    org: "Noah Medical",
    when: "Sep 2023 to Jun 2024",
    points: [
      "Built an automated calibration pipeline with a programmed robotic fixture, processing 200+ images weekly",
      "Created a pass/fail quality metric with verification-image output, cutting 2 to 6 hours per run",
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
    when: "Sep 2022 to Jun 2024",
    note: "Coursework: Python, C++, Java, Physics, Electrical Circuits, Linear Algebra, Discrete Math, Differential Equations.",
  },
];

export const leadership = [
  {
    role: "Chapter President",
    org: "Lambda Phi Epsilon, UCLA Chapter",
    when: "Sep 2024 to Jun 2026",
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
// Projects — one file per project in src/data/projects/. Add a new file there
// and append it to the array below to get a card + page. Order = display order.
// `demoUrl` is the Streamlit Cloud URL once deployed (empty = "deploying" state).
// ---------------------------------------------------------------------------

export const projects = [ticketsProject, harmonyProject];
