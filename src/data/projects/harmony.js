// Visual Harmony Analyzer project content (moved verbatim from content.js on 2026-11-12).
// Copy rule: no em/en dashes in employer-facing text.

export const harmonyProject = {
    slug: "visual-harmony-analyzer",
    title: "Visual Harmony Analyzer",
    status: "Live demo",
    demoUrl: "https://visual-harmony-dashboard.streamlit.app/?embed=true",
    // One sentence, resume-headline style: what it is + who it helps.
    headline:
      "Measured whether color harmony in e-commerce product photography drives engagement across 30,000 Amazon listings, and reported the honest answer: no detectable effect.",
    tags: ["Python", "OpenCV", "MediaPipe", "scikit-learn", "Streamlit"],
    link: "https://github.com/cts3111/visual-harmony-dashboard",
    linkLabel: "View dashboard on GitHub",
    // Card stat blurbs — the numbers that summarize the study.
    stats: [
      {
        value: "44,000+",
        label: "product images processed by the pipeline",
      },
      {
        value: "67.7%",
        label:
          "color-family test accuracy (616/910), 15+ points over the baseline rule",
      },
      {
        value: "132/132",
        label: "instrument unit tests passed",
      },
      {
        value: "1,418",
        label: "products in the final engagement test",
      },
    ],
    // Project page sections, rendered in this order.
    sections: [
      {
        id: "overview",
        title: "Overview",
        lead:
          "Visual Harmony Analyzer is an end-to-end computer-vision study asking one question: does visual harmony in product photography drive customer engagement? I built a deterministic pipeline (OpenCV face detection, MediaPipe landmarks, K-Means color extraction, and tuned scikit-learn models) that labels color harmony on every listing, then ran a controlled business test across 1,418 Amazon products. The answer came back null at all three harmony levels, and that honest result is reported front and center. What did hold up is the instrument itself: 67.7% color-family test accuracy, 132/132 unit tests, 85% agreement against an external benchmark, plus a live demo anyone can run.",
        demo: true,
        // Square-ish photos: show side by side. Wide charts stay full-width.
        imagesSplit: true,
        images: [
          {
            src: "/pipeline-qa-1.jpg",
            caption:
              "QA output: the detected face and cheek markers, with the dominant skin color it extracted (top right)",
            annotations: [
              { x: 82.6, y: 0.3, w: 17.1, h: 17.3, label: "dominant color swatch" },
              { x: 18.0, y: 17.3, w: 65.9, h: 65.9, label: "detected face" },
            ],
          },
          {
            src: "/pipeline-qa-2.jpg",
            caption:
              "QA output: the detected face, its dominant color (top right), and per-region color strips (left)",
            annotations: [
              { x: 82.4, y: 0.3, w: 17.3, h: 17.3, label: "dominant color swatch" },
              { x: 17.8, y: 17.7, w: 66.5, h: 66.5, label: "detected face" },
              { x: 0, y: 0, w: 14, h: 64, label: "per-region color strips" },
            ],
          },
        ],
      },
      {
        id: "context",
        title: "Context",
        lead:
          "E-commerce teams invest heavily in color-coordinated product photography (matched wardrobes, backgrounds, styling) on the assumption that visual harmony drives engagement. But no public study measures whether it actually does. The blocker is measurement: no off-the-shelf tool labels harmony at scale, so the instrument had to be built before the question could be tested.",
        points: [
          "30,000 Amazon dress listings (McAuley Amazon-Reviews-2023), each with a model photo",
          "1,418 products survived to the final test after face detection and palette matching",
          "Every AI stage was verified by human visual QA before batch runs",
        ],
        table: {
          rows: [
            { k: "Sample", v: "30,000 Amazon dress listings (McAuley Amazon-Reviews-2023)" },
            { k: "Images processed", v: "44,000+ through the color pipeline" },
            { k: "Final test set", v: "1,418 judgeable products" },
            { k: "Harmony levels", v: "3 (warm/cool, 4-season, 12-season)" },
            { k: "Outcome metric", v: "engagement (log review count)" },
            { k: "Answer", v: "no detectable effect at any level", accent: true },
          ],
        },
      },
      {
        id: "goals",
        title: "Goals",
        lead:
          "Four goals, in priority order: measurement first, conclusions second.",
        points: [
          "Build a deterministic, explainable pipeline that scores visual harmony in product photos",
          "Run a rigorous business test: does harmony predict engagement (rating count)?",
          "Validate every stage of the instrument before trusting its labels: honesty over hype",
          "Ship a live demo so anyone can test the pipeline themselves",
        ],
        table: {
          head: ["Goal", "Status"],
          rows: [
            { k: "Deterministic harmony-scoring pipeline", v: "shipped" },
            { k: "Business test at three harmony levels", v: "shipped" },
            {
              k: "Every stage validated before use",
              v: "132/132 unit tests, external benchmark",
            },
            { k: "Public live demo", v: "shipped, six-tab Streamlit app" },
          ],
        },
      },
      {
        id: "approach",
        title: "Approach",
        lead:
          "Four stages: extract color features with computer vision, classify with tuned models, measure harmony per listing, and test against engagement with confidence intervals.",
        points: [
          "CV: OpenCV face detection, MediaPipe landmarks, and K-Means color extraction produce skin, iris, and hair features",
          "Models: scikit-learn logistic regression / k-NN on HSV + CIELAB features, tuned by 5-fold cross-validation, official test scored once",
          "Business test: garment palette matched to the model's season; regression of harmony level on engagement",
          "Human-in-the-loop: AI-generated visual debug outputs, manually verified before every batch run",
        ],
        charts: [
          {
            type: "bars",
            title: "Held-out test accuracy vs. baselines",
            subtitle: "n = 910, official test scored once",
            xLabel: "held-out test accuracy (%)",
            categories: ["Color family", "4-season", "12-season", "Modifier axis"],
            series: [
              {
                name: "our models",
                values: [67.7, 54.2, 30.3, 48.0],
                tips: [
                  "67.7% correct on the held-out test (616/910). More than 15 points over the rule-based baseline.",
                  "54.2% (493/910). Within about one point of the published deep CNN, using only explainable color features.",
                  "30.3% (276/910). The 12-season problem is hard for everyone; chance alone is 8%.",
                  "48.0% (437/910) on the modifier axis, against a 29% chance level.",
                ],
              },
              {
                name: "best open baseline",
                values: [52.0, 55.4, 32.0, 29.0],
                tips: [
                  "A hand-tuned rule baseline: 52%, barely above the 50% chance level.",
                  "The Deep Armocromia authors' tuned CNN: about 55%.",
                  "The authors' CNN on 12 seasons: about 32%.",
                  "Pure chance on the modifier axis.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "system",
        title: "System",
        lead:
          "One deterministic pipeline, run to run: same inputs, same outputs, and a 99.8% face-detection yield across the batch.",
        points: [
          "44,000+ images narrowed to 2,955 face-positive rows, then 1,418 judgeable products",
          "Seeded K-Means makes every stage reproducible; QA artifacts saved per stage",
          "Exported production models: family 616/910, modifier 437/910, 4-season 493/910, 12-season 276/910",
          "Streamlit dashboard (six tabs) runs the real pipeline code and models in the browser",
        ],
        charts: [
          {
            type: "funnel",
            title: "How the sample narrowed",
            subtitle: "44,000+ images processed end-to-end, 99.8% face-detection yield",
            steps: [
              {
                value: "30,000",
                label: "Amazon listings sampled",
                tip: "Dress listings sampled from McAuley Amazon-Reviews-2023.",
              },
              {
                value: "2,955",
                label: "face-positive rows",
                tip: "Rows where face detection found a model, at a 99.8% detection yield.",
              },
              {
                value: "1,418",
                label: "judgeable products",
                tip: "Products that passed every QA gate into the final business test.",
              },
            ],
          },
        ],
      },
      {
        id: "my-role",
        title: "My Role",
        lead:
          "The pipeline was AI-assisted, but the study was mine: I owned the design, the validation protocol, and every business conclusion.",
        points: [
          "Owned: study design, the statistical protocol (official test scored once, no peeking), and all business conclusions",
          "Guided: Claude Code wrote scripts under a two-step protocol, AI self-verification followed by my manual visual QA before any batch run",
          "Verified: every stage produced debug images I inspected before authorizing the 44,000-image batch",
        ],
        images: [
          {
            src: "/qa-cheek-crop.jpg",
            cap: 520,
            caption:
              "Cheek-crop QA: the two detected cheek regions (bottom) and the dominant skin color each one produced (top). Inspected manually before the batch ran.",
            annotations: [
              { x: 1.8, y: 3.7, w: 93.3, h: 12.2, label: "dominant color swatches" },
              { x: 1.8, y: 17.1, w: 93.3, h: 78, label: "detected cheek crops" },
            ],
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        lead:
          "The business test came back null at all three harmony levels, and it is reported honestly. The instrument itself held up under external scrutiny.",
        points: [
          "Warm/cool −3.3% (p = 0.53) · 4-season +7.3% (p = 0.27) · 12-season −1.8% (p = 0.84) on engagement",
          "67.7% family test accuracy; 132/132 unit tests; 85% family agreement on an external 925-image benchmark",
          "A +29% hint at n = 508 collapsed at 3× scale, a small-sample illusion that is now a documented lesson",
          "One lead for future work: strict two-photo ensemble flags (+147%, p = 0.008) at n = 8",
        ],
        charts: [
          {
            type: "forest",
            title: "Effect of visual harmony on engagement",
            subtitle:
              "final test, n = 1,418. 95% confidence intervals, all crossing zero",
            xLabel: "% change in rating count",
            effects: [
              {
                name: "Warm/cool harmony",
                est: -3.3,
                lo: -12.8,
                hi: 7.3,
                p: 0.53,
                tip: "Warm/cool harmony: −3.3% on rating count. 95% CI from −12.8% to +7.3%. p = 0.53, n = 1,418.",
              },
              {
                name: "4-season harmony",
                est: 7.3,
                lo: -5.4,
                hi: 21.7,
                p: 0.27,
                tip: "4-season harmony: +7.3% on rating count. 95% CI from −5.4% to +21.7%. p = 0.27, n = 1,418.",
              },
              {
                name: "12-season harmony",
                est: -1.8,
                lo: -17.3,
                hi: 16.6,
                p: 0.84,
                tip: "12-season harmony: −1.8% on rating count. 95% CI from −17.3% to +16.6%. p = 0.84, n = 1,418.",
              },
            ],
          },
          {
            type: "collapse",
            title: "12-season harmony: a promising hint, then a null",
            subtitle: "same analysis, three times the data",
            xLabel: "% change in rating count",
            bars: [
              {
                label: "+29% hint",
                value: 29,
                note: "n = 508, p = 0.074",
                tip: "+29% on the first batch (n = 508, p = 0.074). Reported as a hint, not a finding.",
              },
              {
                label: "final result",
                value: -1.8,
                note: "n = 1,418, p = 0.84",
                tip: "−1.8% at three times the scale (n = 1,418, p = 0.84). 95% CI from −17.3% to +16.6%.",
              },
            ],
          },
        ],
      },
      {
        id: "findings",
        title: "Findings",
        table: {
          rows: [
            { k: "Palette swatches self-classify", v: "132/132", accent: true },
            { k: "Synthetic painted-torso recovery", v: "20/20", accent: true },
            { k: "Title color-word agreement", v: "74%", accent: true },
            { k: "Multi-photo consistency", v: "77% same season", accent: true },
            {
              k: "DeepFashion2 external benchmark",
              v: "85% family / 57% season",
              accent: true,
            },
            {
              k: "Reproducibility",
              v: "identical results run to run",
              accent: true,
            },
          ],
        },
      },
    ],
    findings: {
      headline: "The business test came back null, and that's the headline.",
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
        "The first batch (n = 508) showed a +29% hint for 12-season harmony (p = 0.074). At three times the scale it collapsed to −1.8%, a small-sample illusion. That's why the hint was reported as a hint, and why the overnight scale-up was run.",
      curiosity:
        "One lead for a future study: strict two-photo ensemble flags (n = 8) showed +147% (p = 0.008). Too fragile to trust, but consistent with 'only high-confidence exact-palette matches matter.'",
    },
  };
