// ============================================================================
// SITE CONTENT — this file and `projects.ts` control every word on the site.
// Edit text here; you never need to touch a component to change copy.
//
// START HERE — four things to fill in, marked with TODO:
//   1. lastName
//   2. githubUrl
//   3. linkedinUrl
//   4. resumePdf (after you drop the PDF into /public)
// Empty strings are safe: anything left blank is simply not rendered.
// ============================================================================

export const site = {
  firstName: "Brede",
  lastName: "", // TODO(Brede): your last name, e.g. "Hansen"
  domain: "brede.dev",
  url: "https://brede.dev",
  email: "brede@brede.dev",
  location: "Ames, Iowa",
  origin: "from Norway",
  coordinates: "42.03° N, 93.62° W",

  githubUrl: "", // TODO(Brede): e.g. "https://github.com/yourusername"
  linkedinUrl: "", // TODO(Brede): e.g. "https://www.linkedin.com/in/yourhandle"

  // Drop your finalized resume PDF into /public (e.g. /public/Brede-Resume.pdf)
  // then set this to "/Brede-Resume.pdf". Leave "" to hide the download button.
  resumePdf: "", // TODO(Brede)

  availability: "Open to Summer 2027 internships",
  tagline: "Computer science student & builder",
  metaDescription:
    "Computer science student at Iowa State building real-time market-data pipelines and full-stack products. Open to Summer 2027 software engineering and quantitative developer internships.",
};

export const fullName = [site.firstName, site.lastName]
  .filter(Boolean)
  .join(" ");

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------

export const hero = {
  headline: "I build systems that turn noisy data into decisions.",
  sub: "Computer science at Iowa State, graduating December 2027. Before that, business school in Oslo. I ship full-stack products and real-time data pipelines — and I care that they hold up against real data, not just in a demo.",
  primaryCta: { label: "View projects", href: "#projects" },
};

// Caption under the animated event-stream strip in the hero.
export const stripCaption = {
  label: "fig. 01 — event stream, filtered",
  linkLabel: "market-data pipeline",
  linkHref: "/projects/market-data-pipeline/",
};

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------

export const about = {
  heading: "About",
  paragraphs: [
    "I came to software from the business side. Three years of business administration at BI Norwegian Business School in Oslo taught me how companies work — and left me wanting to be the person who builds the product rather than the one writing memos about it. So I moved to Iowa and switched to computer science.",
    "Most of what I build starts with a real dataset or a real user. Right now that means a pipeline recording every new token launch on Solana, so I can test trading ideas against evidence instead of intuition. The same instinct runs through everything else here: build it end to end, put it in front of reality, keep what survives.",
    "I'm looking for a Summer 2027 internship in software engineering or quantitative development — somewhere the code meets live data and the decisions have consequences.",
  ],
  facts: [
    { label: "Base", value: "Ames, Iowa — from Norway" },
    { label: "Studying", value: "B.S. Computer Science, Iowa State · Dec 2027" },
    { label: "Previously", value: "Business administration, BI Oslo · 2020–2023" },
    { label: "This summer", value: "COMS 2300 — Discrete Computational Structures" },
    { label: "Languages", value: "Norwegian (native) · English (fluent)" },
    { label: "Off the clock", value: "Football, markets & on-chain data" },
  ],
};

// ---------------------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------------------

export const skills = {
  heading: "Skills",
  groups: [
    {
      label: "Languages",
      items: ["Python", "TypeScript", "Java", "SQL"],
    },
    {
      label: "Web & product",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Expo / React Native",
        "Supabase (Postgres, Auth)",
      ],
    },
    {
      label: "Data & systems",
      items: [
        "pandas",
        "scikit-learn",
        "asyncio & WebSockets",
        "Streamlit",
        "Git & GitHub",
        "Linux",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------

export const education = {
  heading: "Education",
  entries: [
    {
      years: "2024 — 2027",
      institution: "Iowa State University",
      detail: "B.S. Computer Science · expected December 2027 · Ames, Iowa",
      note: "Fall 2026: Software Development Practices · Computer Architecture · Advanced Programming Techniques · Engineering Statistics",
    },
    {
      years: "2020 — 2023",
      institution: "BI Norwegian Business School",
      detail: "Business administration coursework · Oslo, Norway",
      note: "",
    },
  ],
};

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------

export const contact = {
  heading: "Contact",
  lead: "The fastest way to reach me:",
  closing:
    "Recruiting for Summer 2027, or want to talk data pipelines, markets, or football? My inbox is open.",
};

// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------

export const footer = {
  note: "Designed and built by hand · Next.js, self-hosted fonts, no trackers",
};

// ---------------------------------------------------------------------------
// RESUME PAGE  (/resume)
// Bullets here are independent of the project case studies so you can tune
// resume phrasing without touching the site copy.
// ---------------------------------------------------------------------------

export const resume = {
  headline: "Computer science student targeting Summer 2027 software engineering and quantitative developer internships.",
  education: [
    {
      school: "Iowa State University",
      place: "Ames, Iowa",
      credential: "B.S. Computer Science",
      dates: "Expected December 2027",
      lines: [
        "Fall 2026 coursework: Software Development Practices, Computer Architecture, Advanced Programming Techniques, Engineering Statistics",
      ],
    },
    {
      school: "BI Norwegian Business School",
      place: "Oslo, Norway",
      credential: "Business administration coursework",
      dates: "2020 – 2023",
      lines: [],
    },
  ],
  projects: [
    {
      name: "Real-Time Market Data Filter & Alert System",
      stack: "Python, asyncio, WebSockets",
      dates: "2026",
      bullets: [
        "Built a streaming pipeline that ingests every new Solana token launch and its bonding-curve trades over WebSockets into an append-only event log, with no filtering at ingest to keep the dataset assumption-free.",
        "Wrote a strategy miner that replays collected history under a chronological 70/30 train/test split, so candidate trading rules are only accepted if they hold on unseen data.",
        "Designed threshold-based alerting on live events, separating always-on collection from human-confirmed actions.",
      ],
    },
    {
      name: "Circle — social coordination platform",
      stack: "Next.js, TypeScript, Supabase, Expo / React Native",
      dates: "2025 – 2026",
      bullets: [
        "Built a full-stack social platform for coordinating college nightlife: a Next.js web app and an Expo mobile app sharing one Supabase backend (Postgres, auth).",
        "Recovered a mobile build with unresolvable dependency conflicts by rebuilding the Expo project cleanly with a minimal, locked dependency set.",
      ],
    },
    {
      name: "BTC Threshold Probability Dashboard",
      stack: "Python, Streamlit, scikit-learn, pandas",
      dates: "2026",
      bullets: [
        "Built an interactive Streamlit dashboard that estimates short-horizon probabilities of Bitcoin crossing price thresholds using a KNN model over recent price-action features.",
        "Added a backtester comparing model probabilities against Kalshi-implied probabilities to flag historical edges.",
      ],
    },
    {
      name: "BetterFuture — personal finance app",
      stack: "Java, HTML/CSS/JavaScript",
      dates: "2025",
      bullets: [
        "Designed and built a personal finance application end to end with a hand-rolled Java backend and a plain HTML/CSS/JS frontend — HTTP handling, persistence, and separation of concerns without frameworks.",
      ],
    },
  ],
  skillsLine:
    "Python · TypeScript · Java · SQL · React / Next.js · Node.js · Tailwind CSS · Expo / React Native · Supabase · pandas · scikit-learn · asyncio & WebSockets · Streamlit · Git · Linux",
};
