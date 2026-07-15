# DECISIONS.md — brede.dev build log

Every non-obvious call made in this build, with reasoning. Review top to bottom; anything you disagree with is a content-file or CSS-token edit away.

## Design direction

**D1 — Light, Nordic, precise — not another dark dev portfolio.**
Nine out of ten CS-student portfolios are near-black with a neon accent. Recruiters see them all day. This site is the opposite: cool off-white ("snow"), cold near-black ink, hairline structure, generous air — Scandinavian functionalism, which is literally your design heritage. It reads calm, senior, and different in a stack of tabs. No dark-mode toggle: one committed look, zero theme-flash bugs, one less thing to maintain.

**D2 — Typography: Schibsted Grotesk + Fragment Mono.**
Schibsted Grotesk was commissioned by Schibsted, the Norwegian media group — a characterful grotesque with an actual reason to be on a Norwegian builder's site. Fragment Mono handles everything data-flavored: eyebrows, meta labels, tags, years, coordinates. Both are self-hosted via npm (`@fontsource`) — no Google Fonts requests, faster, more private, works offline.

**D3 — Red means something.**
The palette has one loud color, `signal` red (Norwegian-flag adjacent), and it is reserved exclusively for signal semantics: the availability dot, the filtered ticks in the stream, hover on project years, the dot in the wordmark. Blue (`fjord`) does structure and links. When everything is quiet, one red dot next to "Open to Summer 2027 internships" does more work than a banner.

**D4 — The signature element: the event-stream strip.**
Under the hero sits a thin animated strip of ticks drifting past; every so often one is red — signal, filtered from noise. It is your flagship project's thesis drawn as a design element, and it's captioned `fig. 01 — event stream, filtered` linking to the case study. Labeled as a figure deliberately: it is an illustration, not a claim of live data (see D8). It's deterministic (no hydration mismatch) and freezes under `prefers-reduced-motion`.

**D5 — Projects as an editorial list, not a card grid.**
Full-width rows with hairlines, year in the left margin, arrow on hover. Faster to scan than cards, more distinctive, and the year column encodes real information instead of decoration.

## Content

**D6 — Positioning line: "I build systems that turn noisy data into decisions."**
One sentence that covers both target roles (SWE + quant dev), ties to the flagship project, and matches the visual motif. The sub-line names ISU/Dec 2027, the Oslo business background, and the empirical-validation instinct — your actual differentiators.

**D7 — Four projects, this order: market-data pipeline → Circle → BTC dashboard → BetterFuture.**
Flagship first (data engineering + methodology, aimed at quant recruiters like Voloridge), then breadth (full-stack web+mobile), then a second quant piece, then the origin-story project. BetterFuture is framed honestly as "first end-to-end build" — a growth arc reads better than pretending all four are equally deep.

**D8 — No "live" badge, no fabricated numbers, anywhere.**
Your earlier flag, honored. The market-data project says "built for multi-day unattended runs" and "Status: Active — collecting" (a field you control in `projects.ts`) rather than claiming a live feed from the site. No user counts on Circle, no returns on the trading work, no made-up metrics. Every claim in the case studies is architecture or method — things you can defend cold in an interview. The BTC case study even lists what you'd stress-test before trusting the model; to a quant reviewer, stated limitations are a competence signal.

**D9 — Circle framing: "Built — pre-launch."**
States what exists (two clients, one Supabase backend) and what's pending (campus-first launch) without invented traction. The dependency-conflict rebuild is included on purpose — it's a true story that answers "tell me about a hard technical problem."

**D10 — The Bible app is not on the site.**
No committed name, pre-verification, stealth-adjacent. Publishing it under a working title would burn the name-verification protocol we specified. Add it post-naming as one object in `projects.ts`.

**D11 — Resume strategy.**
`/resume` is a print-optimized HTML page driven by its own `resume` object in `site.ts` (so resume phrasing can diverge from site copy). Bullets follow your finalized resume decisions: BetterFuture and the Real-Time Market Data Filter & Alert System in, Fantasy Draft Simulator out, BI listed as coursework 2020–2023 with no degree, GPA omitted, Fall 2026 courses as in-progress. Circle is included here as a third strong project — delete the object if you want the resume page to mirror the one-pager exactly. "Download PDF" appears only after you drop your real PDF into `/public` and set the path — no placeholder file will ever 404.

**D12 — Facts panel instead of a "Now" page.**
Location, education, current course, languages, interests — as a mono data table beside the About prose. Same information as a /now page, zero extra maintenance surface.

## Engineering

**D13 — Typed TS content instead of MDX.**
All copy lives in two typed TypeScript files. Compared to MDX: zero extra build tooling, impossible to break silently (the compiler catches malformed content), one mental model, and trivially easy to extend. Case-study bodies are typed blocks (`p`, `h2`, `ul`, `facts`).

**D14 — Static export (`output: "export"`).**
A portfolio needs no server. Static export deploys on Cloudflare Pages (or anywhere) with build command `npm run build` and output `out`, gets CDN speed for free, and can never have a server-side outage. `trailingSlash: true` for clean folder URLs on static hosts.

**D15 — Empty-string = hidden.**
GitHub, LinkedIn, and PDF links render only when set. The site is complete and correct at every stage of you filling it in — nothing ever ships as a dead link.

**D16 — Quality floor.**
Semantic landmarks, visible keyboard focus, WCAG-AA contrast on all text colors, `prefers-reduced-motion` respected globally, print stylesheet for the resume, sitemap + robots + full OpenGraph/Twitter metadata, self-hosted fonts, no analytics or third-party requests. First Load JS ≈ 103 kB; everything prerendered.

**D17 — OG image as a script, not a one-off.**
`scripts/generate-og.py` draws the share image in the site's exact visual language (snow, ink, red-tick strip). Rerun it after adding your last name.

## Needs you (in priority order)

1. `lastName`, `githubUrl`, `linkedinUrl` in `src/content/site.ts`
2. Resume PDF into `/public` + set `resumePdf`
3. Push project code to GitHub and fill each project's `links` array — case pages without repo links are fine for launch, but recruiters click
4. Rerun `scripts/generate-og.py` after step 1
5. Read the four case studies once — they're written from what we've built together and are deliberately conservative; if any detail drifted from reality, edit it in `projects.ts` before launch
