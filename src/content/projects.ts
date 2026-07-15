// ============================================================================
// PROJECTS — edit this file to change project rows and full case studies.
//
// Each project renders as a row on the homepage and a page at /projects/slug.
// `body` is a list of typed blocks; add, remove, or reorder them freely:
//   { type: "p",     text: "..." }                      → paragraph
//   { type: "h2",    text: "..." }                      → section heading
//   { type: "ul",    items: ["...", "..."] }            → bullet list
//   { type: "facts", rows: [{ label, value }, ...] }    → mono facts table
//
// `links` show as "GitHub ↗" etc. on the case page. Leave [] to show none —
// add repo links once the code is on GitHub.
// ============================================================================

export type ProjectLink = { label: string; href: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "facts"; rows: { label: string; value: string }[] };

export type Project = {
  slug: string;
  title: string;
  year: string;
  status: string;
  category: string;
  oneLiner: string;
  stack: string[];
  links: ProjectLink[];
  body: Block[];
};

export const projectsHeading = "Selected projects";

export const projects: Project[] = [
  // --------------------------------------------------------------------------
  {
    slug: "market-data-pipeline",
    title: "Real-Time Market Data Filter & Alert System",
    year: "2026",
    status: "Active — collecting",
    category: "Data engineering · quant research",
    oneLiner:
      "Streaming pipeline that records every new Solana token launch, then mines the history for trading rules that survive out-of-sample validation.",
    stack: ["Python", "asyncio", "WebSockets", "pandas"],
    links: [],
    body: [
      {
        type: "p",
        text: "Pump.fun launches tokens on Solana at a rate of thousands per day, and nearly all of them go to zero. Every trading “strategy” you read about the platform is vibes and survivorship bias. I wanted an answer grounded in data I collected myself.",
      },
      { type: "h2", text: "Collect everything, filter later" },
      {
        type: "p",
        text: "The collector holds a WebSocket connection to PumpPortal and writes every token creation event, and the bonding-curve trades that follow, into an append-only event log. Deliberately, nothing is filtered at ingest: filtering early is how you bake today's assumptions into tomorrow's dataset. The pipeline's first job is to be a faithful record.",
      },
      { type: "h2", text: "Mining rules without fooling myself" },
      {
        type: "p",
        text: "A separate miner replays the collected history looking for entry rules that would have worked. The split is chronological — train on the first 70% of time, validate on the last 30% — because a random split leaks the future into the past in time-series data. A rule only counts if it holds on data it has never seen.",
      },
      {
        type: "facts",
        rows: [
          { label: "Ingest", value: "PumpPortal WebSocket · asyncio" },
          { label: "Storage", value: "Append-only event log, raw and unfiltered" },
          { label: "Validation", value: "Chronological 70/30 train/test split" },
          { label: "Alerts", value: "Threshold rules on live events, human-confirmed exits" },
        ],
      },
      { type: "h2", text: "Status, honestly" },
      {
        type: "p",
        text: "The collector is built for multi-day unattended runs, and the miner's first full pass over that history will decide the first rule I trade — with a small position I can afford to lose. If nothing survives validation, that is a result too, and a cheaper one than finding out live.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    slug: "circle",
    title: "Circle",
    year: "2025 — 2026",
    status: "Built — pre-launch",
    category: "Full-stack product · web + mobile",
    oneLiner:
      "Social platform for coordinating college nightlife — a web app and a mobile app sharing one backend.",
    stack: ["Next.js", "TypeScript", "Supabase", "Expo / React Native", "Tailwind CSS"],
    links: [],
    body: [
      {
        type: "p",
        text: "Deciding where a group is actually going tonight is a mess of group chats, half-answers, and screenshots. Circle turns it into one screen: see what your circles are planning, commit to a plan, and let the plan settle itself.",
      },
      { type: "h2", text: "One backend, two clients" },
      {
        type: "p",
        text: "The web app is Next.js with TypeScript and Tailwind; the mobile app is Expo / React Native. Both sit on a single Supabase backend — Postgres for data, Supabase Auth for identity — so a plan made on a laptop is the same plan on a phone. Keeping one source of truth made the two clients a rendering problem instead of a synchronization problem.",
      },
      { type: "h2", text: "Rebuilding the mobile app" },
      {
        type: "p",
        text: "The first Expo project drifted into dependency conflicts that no amount of resolution overrides could untangle. Instead of fighting it, I rebuilt the app clean at a fresh path with a minimal, locked dependency set and moved the code over piece by piece. It cost a day and taught me more about dependency discipline than any tutorial: the lockfile is part of the product.",
      },
      {
        type: "facts",
        rows: [
          { label: "Web", value: "Next.js · TypeScript · Tailwind CSS" },
          { label: "Mobile", value: "Expo / React Native" },
          { label: "Backend", value: "Supabase — Postgres, Auth" },
          { label: "Status", value: "Built end to end · launch planned campus-first" },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    slug: "btc-threshold-dashboard",
    title: "BTC Threshold Probability Dashboard",
    year: "2026",
    status: "Working prototype",
    category: "Quant research · tooling",
    oneLiner:
      "Interactive dashboard estimating short-horizon probabilities that Bitcoin crosses a price threshold, with a backtester for Kalshi-implied edges.",
    stack: ["Python", "Streamlit", "scikit-learn", "pandas"],
    links: [],
    body: [
      {
        type: "p",
        text: "Kalshi lists yes/no contracts on whether Bitcoin will be above a given price at a given time — which makes them, in effect, tradeable probabilities. The question this project asks: are those implied probabilities ever measurably off over short horizons?",
      },
      { type: "h2", text: "Model, then compare" },
      {
        type: "p",
        text: "A KNN model estimates the probability that BTC crosses a chosen threshold within a chosen horizon, using features built from recent price action. A Streamlit dashboard makes the model interactive — pick a threshold, pick a horizon, see the estimate — and a backtester replays history to compare model probabilities against market-implied ones, flagging where an edge would have existed.",
      },
      { type: "h2", text: "What I would stress-test before trusting it" },
      {
        type: "ul",
        items: [
          "Regime shifts — a KNN fitted on calm markets says little about violent ones.",
          "Fees, spread, and slippage — a paper edge has to survive the costs of being real.",
          "Calibration — a model that says 70% should be right about 70% of the time, and that deserves its own test.",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    slug: "betterfuture",
    title: "BetterFuture",
    year: "2025",
    status: "Complete",
    category: "First end-to-end build",
    oneLiner:
      "Personal finance app with a hand-rolled Java backend and a plain HTML/CSS/JS frontend — the project where I learned what “end to end” costs.",
    stack: ["Java", "HTML / CSS / JavaScript"],
    links: [],
    body: [
      {
        type: "p",
        text: "BetterFuture is a personal finance application and my first complete build: a Java backend and a frontend in plain HTML, CSS, and JavaScript, with no frameworks between me and the problem.",
      },
      {
        type: "p",
        text: "That constraint was the point. Handling HTTP, persisting data, and keeping the layers separated by hand is how those ideas stopped being vocabulary and started being decisions. Everything I have built since moves faster because this project moved slowly.",
      },
      {
        type: "facts",
        rows: [
          { label: "Backend", value: "Java, hand-rolled — no framework" },
          { label: "Frontend", value: "HTML · CSS · JavaScript" },
          { label: "Role here", value: "Kept as the baseline — where the work started" },
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
