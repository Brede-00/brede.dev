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
    title: "Solana Market Data Collection & Analytics Pipeline",
    year: "2026",
    status: "Active — collecting",
    category: "Data engineering · quant research",
    oneLiner:
      "Streaming pipeline that records every new Solana token launch, then mines the history for trading rules that survive out-of-sample validation.",
    stack: ["Python", "asyncio", "WebSockets", "DuckDB", "SQL", "Parquet", "Streamlit", "Plotly"],
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
          { label: "Storage", value: "DuckDB and Parquet: append-only raw events, plus normalized, deduplicated datasets" },
          { label: "Validation", value: "Chronological 70/30 train/test split" },
          { label: "Analysis", value: "SQL workflows, time-based features, Streamlit and Plotly for inspection" },
        ],
      },
      { type: "h2", text: "Current status" },
      {
        type: "p",
        text: "The collector runs unattended for days at a time. A July 2026 audit recorded more than 135,000 tokens and 5.5 million time-series observations; those are historical audit counts, not live totals. This is data collection and analysis only, with no trading involved. If no rule survives validation, that's still a useful result.",
      },
    ],
  },
  {
    slug: "bookworm",
    title: "Bookworm — Collaborative Book & Social Platform",
    year: "2026",
    status: "Active — team project",
    category: "Backend · team project",
    oneLiner:
      "Team-built book and social platform. I develop the Java backend: REST endpoints for the book catalog, backed by Spring Data JPA and MariaDB.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "MariaDB", "Maven", "GitLab", "REST APIs"],
    links: [],
    body: [
      {
        type: "p",
        text: "Bookworm is a collaborative book and social platform that I'm building with other students. I work on the backend: RESTful endpoints for book-catalog create, read, update, and delete operations, shaped around what the frontend needs.",
      },
      { type: "h2", text: "What I work on" },
      {
        type: "ul",
        items: [
          "Spring Boot controllers, Spring Data JPA repositories, and relational data models on MariaDB.",
          "Troubleshooting API contracts, builds, and integration issues with teammates.",
          "Scrum-like sprints on GitLab: tasks, feature branches, demos, and shared milestones.",
        ],
      },
      {
        type: "facts",
        rows: [
          { label: "Backend", value: "Java · Spring Boot · Spring Data JPA" },
          { label: "Database", value: "MariaDB" },
          { label: "Workflow", value: "GitLab · Maven · Scrum-like sprints" },
          { label: "Code", value: "Team repository, not public" },
        ],
      },
    ],
  },
  {
    slug: "memory-performance-analyzer",
    title: "Memory & Performance Analyzer",
    year: "2026",
    status: "Active — experiments",
    category: "Systems · performance",
    oneLiner:
      "C and C++ benchmarks that measure how memory access patterns and allocation choices change execution time, read alongside the ARM64 assembly the compiler produces.",
    stack: ["C", "C++", "ARM64 Assembly", "Performance benchmarking"],
    links: [],
    body: [
      {
        type: "p",
        text: "An independent project to build intuition for how code meets hardware. I write small benchmarks, change one variable at a time, and see what the timings say.",
      },
      { type: "h2", text: "What it measures" },
      {
        type: "ul",
        items: [
          "Pointer-based array traversal and dynamic memory allocation across varying workloads.",
          "Sequential versus randomized memory access patterns.",
          "Compiler-generated ARM64 assembly, to connect C/C++ operations to the processor instructions behind them.",
        ],
      },
      {
        type: "p",
        text: "It's a set of focused experiments so far, not a finished tool, and it pairs with my Computer Architecture and ARMv8 assembly coursework.",
      },
    ],
  },
  {
    slug: "bible-learning-app",
    title: "Bible Learning App",
    year: "2026",
    status: "In progress — alongside coursework",
    category: "Mobile app · knowledge graph",
    oneLiner:
      "A Bible learning app built around a knowledge graph connecting people, places, events, and themes across Scripture, with spaced-repetition review instead of a lesson checklist.",
    stack: ["React Native", "Expo", "TypeScript"],
    links: [],
    body: [
      {
        type: "p",
        text: "Most Bible apps are either a reading plan or a trivia quiz. What I actually wanted was something that treats the Bible the way it is: one connected story, where a name in Genesis matters again in Revelation. So instead of building lessons first and bolting on some \"related verses\" feature later, I built a knowledge graph first. People, places, events, miracles, parables, prophecies, and themes are all nodes with real edges between them, and everything else in the app reads from that.",
      },
      { type: "h2", text: "A web, not a straight line" },
      {
        type: "p",
        text: "You start from one choice, like picking a place (say, Egypt) from a list. The app doesn't hand-pick what to show you next: it pulls whatever's actually connected to that place through real graph edges, which is why Moses shows up. It's not that I decided Moses belongs there, it's that Scripture does. Finish a lesson and you get exactly one decision: \"want to learn more about X?\" where X is some specific detail from what you just read. Say yes and it branches to a lesson connected by theme rather than sequence, which can land you in a completely different book. Say no and it continues on the main path. So the app isn't a straight line through the text, it's a web you wander, and every branch is a real graph edge, not a curated \"related content\" list.",
      },
      {
        type: "p",
        text: "Your profile is a constellation view of your own unlocked subgraph, not a generic stats page, for the same reason: if a feature isn't derived from the graph, I've been cutting it rather than shipping a fake counter next to it.",
      },
      { type: "h2", text: "Spaced repetition, not a checklist" },
      {
        type: "p",
        text: "Review runs on a classic 5-box Leitner scheduler over questions generated from the graph, so what you've learned is scheduled to resurface instead of disappearing the moment you finish a lesson. Streaks and progress are computed from actual activity and completed lessons, not a separate counter that can drift out of sync with what you've really done.",
      },
      {
        type: "facts",
        rows: [
          { label: "Content", value: "445 curated questions across the Bible, compiled into lessons and review items" },
          { label: "Graph", value: "13 entity types (people, places, events, miracles, themes, etc.), BFS pathfinding" },
          { label: "Review", value: "5-box Leitner spaced repetition, generated from the graph" },
          { label: "Tests", value: "Unit-tested with a passing suite, typechecked, linted" },
        ],
      },
      { type: "h2", text: "Where it actually is" },
      {
        type: "p",
        text: "The lesson flow, graph, pathfinding, and review system all work locally right now. Content still lives on-device, not in a real database yet. Moving that onto Supabase is the next real step, alongside making journeys (guided sequences through the graph, like following one character's arc) generated from the graph instead of hand-typed. I build it alongside coursework, so progress comes in bursts as my schedule allows.",
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
      "Social app for small, invite-based groups. My project for getting hands-on with a real database, auth, and shipping across two clients.",
    stack: ["Next.js", "TypeScript", "Supabase", "Expo / React Native", "Tailwind CSS"],
    links: [],
    body: [
      {
        type: "p",
        text: "I built this to get hands-on with things I'd only read about, a real database, real authentication, a real security model, rather than to plan out a product. Most of it came from directing Claude Code and reviewing what it produced instead of hand-writing every piece, and it shows: it was built fast and loose, without much upfront design. It works, but I wouldn't call it polished.",
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
          "Regime shifts: a KNN fitted on calm markets says little about violent ones.",
          "Fees, spread, and slippage: a paper edge has to survive the costs of being real.",
          "Calibration: a model that says 70% should be right about 70% of the time, and that deserves its own test.",
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
      "Financial simulation engine in Java with a Swing GUI that projects loans, income, expenses, and net worth across multi-year horizons.",
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
