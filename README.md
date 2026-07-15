# brede.dev

Personal portfolio. Next.js 15 · TypeScript · Tailwind CSS v4 · fully static export · self-hosted fonts · no trackers.

---

## 1 · Five-minute setup (do this first)

All personal data lives in **`src/content/site.ts`**. Four fields are waiting for you, marked `TODO(Brede)`:

1. `lastName` — your last name (the site renders fine without it, but set it)
2. `githubUrl` — your GitHub profile URL (links appear automatically once set)
3. `linkedinUrl` — your LinkedIn profile URL
4. `resumePdf` — drop your finalized resume PDF into `/public` (e.g. `public/Brede-Resume.pdf`), then set this to `"/Brede-Resume.pdf"`

Anything left as `""` is simply not rendered — the site never ships a broken link.

After setting `lastName`, regenerate the social-share image so it matches:

```bash
python3 scripts/generate-og.py   # edit NAME at the top of the script first
```

## 2 · Editing content

Every word on the site lives in two files. You never need to touch a component to change copy.

| File | Controls |
|---|---|
| `src/content/site.ts` | Name, links, hero, about, facts, skills, education, contact, footer, the whole `/resume` page |
| `src/content/projects.ts` | Project rows on the homepage and the full case studies at `/projects/<slug>` |

Adding a project = adding one object to the `projects` array. Its page, homepage row, and sitemap entry are generated automatically. Case-study bodies are typed blocks (`p`, `h2`, `ul`, `facts`) — add, remove, and reorder freely; TypeScript will tell you immediately if something is malformed.

To add a GitHub link to a project, fill its `links` array:

```ts
links: [{ label: "GitHub", href: "https://github.com/you/repo" }],
```

Design tokens (colors, fonts) live in `src/app/globals.css` under `@theme`.

## 3 · Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
```

## 4 · Put it on GitHub

The repo is already initialized with a clean initial commit. Create an empty repo on GitHub (suggested name: `brede.dev`), then:

```bash
git remote add origin git@github.com:YOUR_USERNAME/brede.dev.git
git push -u origin main
```

## 5 · Deploy to Cloudflare Pages

Your domain and email already live on Cloudflare, so Pages is the natural home.

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Deploy. You get a `*.pages.dev` URL immediately.
4. **Custom domains** tab → add `brede.dev` (and `www.brede.dev` if you want it). Cloudflare wires the DNS records for you since the zone is already there.

Every `git push` to `main` now deploys automatically.

**Your email is safe.** Pages custom domains only touch CNAME/A records. Email Routing runs on MX records, which are untouched — `brede@brede.dev` keeps working exactly as before.

(Vercel works too if you ever prefer it: import the repo, add the domain, done — no config changes needed.)

## 6 · Structure

```
src/
  content/
    site.ts          ← all site copy + personal data (edit this)
    projects.ts      ← projects + case studies (edit this)
  app/
    page.tsx         homepage
    resume/          print-optimized HTML resume (+ optional PDF download)
    projects/[slug]/ case-study pages, generated from projects.ts
    globals.css      design tokens (@theme), base styles
    icon.svg         favicon
    sitemap.ts, robots.ts, not-found.tsx
  components/        nav, footer, signal strip, blocks, print button
scripts/
  generate-og.py     regenerates public/og.png
public/
  og.png             social-share image
```

## 7 · Optional

- **Analytics:** Cloudflare Web Analytics is privacy-friendly and one snippet if you ever want numbers. The site ships with none.
- **PDF from the resume page:** `/resume` is print-optimized — the "Print / save as PDF" button produces a clean one-pager from any browser.

See `DECISIONS.md` for every design and content decision made in this build, with reasoning.
