export const site = {
  firstName: "Brede",
  lastName: "Brendemo",
  domain: "brede.dev",
  url: "https://brede.dev",
  email: "brede@brede.dev",
  location: "Ames, Iowa",
  origin: "from Norway",
  coordinates: "42.03° N, 93.62° W",

  githubUrl: "https://github.com/Brede-00",
  linkedinUrl: "https://www.linkedin.com/in/brede-brendemo",
  resumePdf: "/Brede-Resume.pdf",

  availability: "Open to Summer 2027 internships",
  tagline: "Computer science student & builder",
  metaDescription:
    "Computer science student at Iowa State building real-time market-data pipelines and full-stack products. Open to Summer 2027 software engineering and quantitative developer internships.",
};

export const fullName = [site.firstName, site.lastName]
  .filter(Boolean)
  .join(" ");

export const hero = {
  headline: "I build things and run them against real data.",
  sub: "Computer science student at Iowa State, graduating December 2027. Before that, three years of business school in Oslo. Most of what I build ends up being full-stack apps or data pipelines, and I like actually testing them on real data instead of stopping at a demo.",
  primaryCta: { label: "View projects", href: "#projects" },
};

export const stripCaption = {
  label: "fig. 01 — event stream, filtered",
  linkLabel: "market-data pipeline",
  linkHref: "/projects/market-data-pipeline/",
};

export const about = {
  heading: "About",
  paragraphs: [
    "I didn't start in CS. I spent three years in business administration at BI Norwegian Business School in Oslo, and by the end of it I'd realized I wanted to be the one building the product, not writing reports about it. So I switched, moved to Iowa, and started over in computer science.",
    "Most of what I build starts from a real dataset or a real user instead of a tutorial. Right now that's a pipeline recording every new token launch on Solana, so I can actually test trading ideas against data instead of guessing. I try to do that with most of my projects: build the whole thing, then see what happens when real data hits it.",
    "I'm looking for a Summer 2027 internship in software engineering or quantitative development.",
  ],
  facts: [
    { label: "Base", value: "Ames, Iowa — from Norway" },
    { label: "Studying", value: "B.S. Computer Science, Iowa State · Dec 2027" },
    { label: "Previously", value: "Business administration, BI Oslo · 2020–2023" },
    { label: "Coursework so far", value: "Intro to Programming · OOP · Data Structures · Discrete Structures" },
    { label: "This fall", value: "Software Dev Practices · Computer Architecture · Advanced Programming Techniques · Engineering Statistics" },
    { label: "Languages", value: "Norwegian (native) · English (fluent)" },
    { label: "Off the clock", value: "Football, markets & on-chain data" },
  ],
};

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

export const contact = {
  heading: "Contact",
  lead: "The fastest way to reach me:",
  closing:
    "Recruiting for Summer 2027, or just want to talk data pipelines, markets, or football? Feel free to email me.",
};

export const footer = {
  note: "Next.js · self-hosted fonts · no trackers",
};

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
      stack: "Python, WebSockets, ntfy",
      dates: "2026 – Present",
      bullets: [
        "Built a Python event-processing system that consumes a live WebSocket stream of Solana token creation events, applying multi-criteria filtering logic to surface tokens matching configurable thresholds.",
        "Prototyped against simulated historical data before live deployment; integrated ntfy for real-time mobile push notifications on qualifying events.",
        "Redesigned the data pipeline around free public event streams after evaluating cost and coverage tradeoffs of paid per-token trade data APIs.",
      ],
    },
    {
      name: "Bible Learning App",
      stack: "React Native, Expo, TypeScript",
      dates: "2026 – Present",
      bullets: [
        "Building a mobile Bible learning app structured around a knowledge graph (people, places, events, themes) instead of a flat lesson list, with breadth-first pathfinding to surface real connections between any two entities.",
        "Implemented spaced-repetition review with a 5-box Leitner scheduler over questions generated from the graph, plus streaks and progress computed from actual completed lessons rather than separate counters.",
        "445-question curated content base compiled into lessons and review items; local lesson flow and graph fully working, with Supabase-backed content as the next milestone.",
      ],
    },
    {
      name: "Circle — Private Social Media Platform",
      stack: "Next.js, TypeScript, React Native, Expo, Tailwind CSS, Supabase, PostgreSQL",
      dates: "2025 – Present",
      bullets: [
        "Built a full-stack platform for invite-based private communities with authentication, Circle creation, member access control, and post feeds backed by Supabase and PostgreSQL.",
        "Implemented row-level security policies at the database layer across users, Circles, memberships, posts, and permissions, with Postgres triggers keeping denormalized counters consistent.",
        "Developed synchronized mobile and web experiences with Expo/React Native and Next.js; resolved cross-platform build and dependency conflicts across environments.",
      ],
    },
  ],
  experience: [
    {
      company: "Broyte.no",
      role: "Technical Localization & Customer Support Assistant (Contract)",
      place: "Oslo, Norway",
      dates: "Jun. 2022 – Dec. 2023",
      bullets: [
        "Reviewed and maintained structured JSON configuration files to ensure consistency and correctness across application content.",
        "Translated technical issues and requirements between developers and users.",
      ],
    },
    {
      company: "Iowa State University",
      role: "Dorm Mover",
      place: "Ames, Iowa",
      dates: "May – Aug. 2025 & May – Aug. 2026",
      bullets: [
        "Prepared 100+ dorm rooms per summer under tight deadlines; coordinated with small teams to meet daily assignments efficiently.",
      ],
    },
  ],
  skillsLine:
    "Languages: Java, Python, TypeScript, JavaScript · Frameworks & Libraries: Next.js, React, React Native (Expo), Tailwind CSS, JUnit · Databases & Backend: Supabase, PostgreSQL · Tools: Git, GitHub, VS Code, Claude Code, PyCharm, Eclipse",
};
