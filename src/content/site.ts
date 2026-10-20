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
    "Most of what I build starts from a real dataset or a real user instead of a tutorial. Right now that's a pipeline recording every new token launch on Solana, so I can test ideas against data instead of guessing. I try to do that with most of my projects: build the whole thing, then see what happens when real data hits it.",
    "I'm looking for a Summer 2027 internship in software engineering or quantitative development.",
  ],
  facts: [
    { label: "Base", value: "Ames, Iowa — from Norway" },
    { label: "Studying", value: "B.S. Computer Science, Iowa State · Dec 2027" },
    { label: "Previously", value: "Business administration, BI Oslo · 2020–2023" },
    { label: "Coursework so far", value: "Intro to Programming · OOP · Data Structures · Discrete Math · Calculus I & II" },
    { label: "This fall", value: "Software Dev Practices (COM S 3090) · Computer Architecture (COM S 3210) · Advanced Programming Techniques (COM S 3270) · Statistics (STAT 3005)" },
    { label: "Next spring", value: "Algorithms · Operating Systems · Databases · Programming Languages · Software System Safety (COM S 4150) · Linear Algebra (MATH 2070)" },
    { label: "Languages", value: "Norwegian (native) · English (fluent)" },
    { label: "Off the clock", value: "Football, markets & on-chain data" },
  ],
};

export const skills = {
  heading: "Skills",
  groups: [
    {
      label: "Languages",
      items: ["Java", "Python", "C", "C++", "TypeScript", "JavaScript", "SQL", "ARM assembly (coursework)"],
    },
    {
      label: "Backend & data",
      items: [
        "Spring Boot",
        "Spring Data JPA",
        "REST APIs",
        "MariaDB",
        "PostgreSQL",
        "DuckDB",
        "Parquet",
        "asyncio & WebSockets",
        "Streamlit",
      ],
    },
    {
      label: "Web & product",
      items: [
        "React",
        "Next.js",
        "Expo / React Native",
        "Tailwind CSS",
        "Supabase (Postgres, Auth)",
      ],
    },
    {
      label: "Tools & methods",
      items: [
        "Git, GitHub & GitLab",
        "Maven",
        "JUnit",
        "Linux/Unix",
        "Scrum-like Agile",
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
      note: "Fall 2026: Software Development Practices · Computer Architecture · Advanced Programming Techniques · Statistics",
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
        "Coursework: Data Structures, Software Development Practices, Computer Architecture / ARMv8 Assembly, Advanced Programming Techniques (C/C++), Statistics; Algorithms, Operating Systems, Database Management Systems, Programming Languages (Spring 2027 planned)",
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
      name: "Bookworm — Collaborative Book & Social Platform",
      stack: "Java, Spring Boot, Spring Data JPA, MariaDB, Maven, GitLab, REST APIs",
      dates: "Aug. 2026 – Present",
      bullets: [
        "Develop RESTful backend endpoints for book-catalog CRUD operations and integration with frontend requirements in a team-built application.",
        "Work with Spring Boot controllers, JPA repositories, and relational data models; troubleshoot API contracts, builds, and integration issues.",
        "Collaborate in Scrum-like sprints using GitLab tasks, feature branches, demos, and shared milestones.",
      ],
    },
    {
      name: "Solana Market Data Collection & Analytics Pipeline",
      stack: "Python, asyncio, WebSockets, DuckDB, SQL, Parquet, Streamlit, Plotly",
      dates: "2026 – Present",
      bullets: [
        "Built a research pipeline that ingests token-launch and market events, persists structured records, and prepares datasets for analysis.",
        "Implemented DuckDB-backed storage and processing workflows for normalization, deduplication, snapshotting, and Parquet-based analysis datasets.",
        "Generated time-based features; July 2026 audit records 135K+ tokens and 5.5M+ time-series observations.",
      ],
    },
    {
      name: "Memory & Performance Analyzer",
      stack: "C, C++, ARM64 Assembly, performance benchmarking",
      dates: "Oct. 2026 – Present",
      bullets: [
        "Developed C/C++ benchmarks examining pointer-based array traversal, dynamic memory allocation, and execution time across varying workloads.",
        "Compared sequential and randomized memory access patterns and examined compiler-generated ARM64 assembly to relate C/C++ operations to processor instructions.",
      ],
    },
    {
      name: "BetterFuture — Financial Simulation Engine",
      stack: "Java, Java Swing",
      dates: "Jun. – Aug. 2025",
      bullets: [
        "Built a desktop financial planning application projecting loan repayment, income, expenses, and net worth over multi-year periods.",
        "Organized loans, assets, and repayment strategies into object-oriented classes for configurable financial simulations.",
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
    "Languages: Java, Python, C, C++, JavaScript, TypeScript, SQL, LEGv8/ARM Assembly (coursework) · Backend & Data: Spring Boot, REST APIs, Spring Data JPA, MariaDB, DuckDB, PostgreSQL, Parquet, WebSockets · Tools & Methods: Git, GitHub, GitLab, Maven, Linux/Unix, Scrum-like Agile development, JUnit, VS Code",
};
