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
        text: "The collector holds a WebSocket connection to PumpPortal and writes every token creation event, plus the bonding-curve trades that follow, into an append-only event log. Nothing gets filtered at ingest, because any filter would bake in assumptions about what matters, and I don't know that yet.",
      },
      { type: "h2", text: "Mining rules without fooling myself" },
      {
        type: "p",
        text: "A separate miner replays the collected history looking for entry rules that would have worked. The split is chronological: train on the first 70% of time, validate on the last 30%. A random split would leak the future into the past, since this is time-series data. A rule only counts if it holds up on data it hasn't seen.",
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
      { type: "h2", text: "Current status" },
      {
        type: "p",
        text: "The collector runs unattended for days at a time. Once the miner does a full pass over the history, I'll trade whatever rule survives validation, starting with a small position I can afford to lose. If nothing survives, that's still worth knowing, and cheaper to find out this way than with real money.",
      },
    ],
  },
  {
    slug: "circle",
    title: "Circle",
    year: "2025 — 2026",
    status: "Built — pre-launch",
    category: "Full-stack product · web + mobile",
    oneLiner:
      "Social app for small, invite-based groups — my project for getting hands-on with a real database, auth, and shipping across two clients.",
    stack: ["Next.js", "TypeScript", "Supabase", "Expo / React Native", "Tailwind CSS"],
    links: [],
    body: [
      {
        type: "p",
        text: "I built this to get hands-on with things I'd only read about — a real database, real authentication, a real security model — rather than to plan out a product. Most of it came from directing Claude Code and reviewing what it produced instead of hand-writing every piece, and it shows: it was built fast and loose, without much upfront design. It works, but I wouldn't call it polished.",
      },
      {
        type: "p",
        text: "Most social apps give you one big feed. Circle is organized around small groups instead, public or private, where posts, membership, and roles stay scoped to that group. A close-friends circle and a class circle don't need to see each other.",
      },
      { type: "h2", text: "What it does" },
      {
        type: "p",
        text: "Users create or join circles (public ones are discoverable, private ones use invite codes). Inside a circle: text posts, likes, comments, role-based permissions. On top of that there's a personal feed that pulls from all your circles, standard follow/profile mechanics, and a discover page for finding public circles. The mobile app extends further with capacity limits and waitlists per circle, category tagging, a notifications tab, and a discovery-mode home feed for new users.",
      },
      { type: "h2", text: "One backend, two clients" },
      {
        type: "p",
        text: "The web app is Next.js with TypeScript and Tailwind, and the mobile app is Expo with React Native. Both talk to one Supabase backend: Postgres for data, Supabase Auth for identity. Security is enforced at the database layer with row-level security policies on every table, not just in the client. Denormalized counters (members, followers, likes, comments) stay consistent through Postgres triggers instead of being counted in the app.",
      },
      { type: "h2", text: "Rebuilding the mobile app" },
      {
        type: "p",
        text: "The first Expo project got stuck in dependency conflicts that resolution overrides couldn't fix. I rebuilt it from scratch at a fresh path with a minimal, locked-down dependency set and moved the code over piece by piece. Took longer, but it actually builds reliably now.",
      },
      {
        type: "facts",
        rows: [
          { label: "Web", value: "Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion" },
          { label: "Mobile", value: "Expo SDK 52 · React Native · Reanimated · expo-haptics" },
          { label: "Backend", value: "Supabase — Postgres with RLS, Auth, SQL triggers" },
          { label: "Security", value: "Row-level security policies per table, not client-side" },
        ],
      },
    ],
  },
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
        text: "Kalshi lists yes/no contracts on whether Bitcoin will be above a given price at a given time, which basically makes them tradeable probabilities. This project asks whether those implied probabilities are ever measurably off over short horizons.",
      },
      { type: "h2", text: "Model, then compare" },
      {
        type: "p",
        text: "A KNN model estimates the probability that BTC crosses a chosen threshold within a chosen horizon, using features built from recent price action. A Streamlit dashboard makes the model interactive: pick a threshold, pick a horizon, see the estimate. A backtester replays history to compare the model's probabilities against market-implied ones and flags where an edge would have existed.",
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
  {
    slug: "betterfuture",
    title: "BetterFuture",
    year: "2025",
    status: "Complete",
    category: "First end-to-end build",
    oneLiner:
      "Financial simulation engine in Java with a Swing GUI — projects loans, income, expenses, and net worth across multi-year horizons.",
    stack: ["Java", "Java Swing"],
    links: [],
    body: [
      {
        type: "p",
        text: "BetterFuture is a financial planning tool and my first complete build: pick your loans, income, expenses, and repayment strategy, and it projects your net worth year by year over a multi-year horizon.",
      },
      {
        type: "p",
        text: "The interesting part was the domain model. Loans, assets, and repayment strategies are separate classes with their own behavior, so I can swap allocation logic (pay off the expensive loan first vs. spread payments evenly) without touching the simulation loop. It was the first time OOP concepts I'd only read about in class actually mattered for a design decision.",
      },
      {
        type: "facts",
        rows: [
          { label: "Engine", value: "Java — object-oriented domain model" },
          { label: "Interface", value: "Java Swing GUI" },
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
