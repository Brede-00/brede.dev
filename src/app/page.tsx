import Link from "next/link";
import { SignalStrip } from "@/components/signal-strip";
import { Section } from "@/components/blocks";
import {
  site,
  fullName,
  hero,
  about,
  skills,
  education,
  contact,
} from "@/content/site";
import { projects, projectsHeading } from "@/content/projects";

function Availability() {
  return (
    <p className="data-label flex items-center gap-2.5 text-slate">
      <span
        aria-hidden="true"
        className="h-[7px] w-[7px] animate-pulse rounded-full bg-signal"
      />
      {site.availability}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="mx-auto max-w-5xl px-5 pt-20 pb-14 sm:px-8 sm:pt-28">
        <Availability />
        <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-7 max-w-xl leading-relaxed text-slate">
          <span className="font-medium text-ink">{fullName}.</span> {hero.sub}
        </p>
        <div className="mt-9 flex flex-wrap items-baseline gap-x-7 gap-y-3">
          <Link
            href={hero.primaryCta.href}
            className="bg-ink px-5 py-2.5 text-sm font-medium text-snow transition-colors hover:bg-fjord"
          >
            {hero.primaryCta.label}
          </Link>
          {site.githubUrl && (
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="data-text text-fjord transition-colors hover:text-ink"
            >
              GitHub ↗
            </a>
          )}
          <a
            href={`mailto:${site.email}`}
            className="data-text text-fjord transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 pb-6 sm:px-8">
        <SignalStrip />
      </div>

      {/* ------------------------------------------------ PROJECTS */}
      <Section id="projects" eyebrow={projectsHeading}>
        <ul>
          {projects.map((p, i) => (
            <li key={p.slug} className={i > 0 ? "border-t border-mist" : ""}>
              <Link
                href={`/projects/${p.slug}/`}
                className="group grid gap-x-8 gap-y-2 py-8 sm:grid-cols-[7.5rem_1fr_auto] sm:py-10"
              >
                <span className="data-text text-slate transition-colors group-hover:text-signal">
                  {p.year}
                </span>
                <span className="block">
                  <span className="block text-xl font-medium tracking-tight transition-colors group-hover:text-fjord sm:text-2xl">
                    {p.title}
                  </span>
                  <span className="mt-2 block max-w-xl leading-relaxed text-slate">
                    {p.oneLiner}
                  </span>
                  <span className="data-text mt-3 block text-slate">
                    {p.stack.join(" · ")}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="hidden self-center text-xl text-slate transition-all group-hover:translate-x-1 group-hover:text-ink sm:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------ ABOUT */}
      <Section id="about" eyebrow={about.heading}>
        <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
          <div className="space-y-5 leading-relaxed text-ink/90">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="h-fit border border-mist">
            {about.facts.map((f, i) => (
              <div
                key={f.label}
                className={`px-4 py-3.5 ${i > 0 ? "border-t border-mist" : ""}`}
              >
                <dt className="data-label text-slate">{f.label}</dt>
                <dd className="data-text mt-1.5 text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ------------------------------------------------ SKILLS */}
      <Section id="skills" eyebrow={skills.heading}>
        <dl className="max-w-3xl">
          {skills.groups.map((g, i) => (
            <div
              key={g.label}
              className={`grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[7.5rem_1fr] ${
                i > 0 ? "border-t border-mist" : ""
              }`}
            >
              <dt className="data-label pt-1 text-slate">{g.label}</dt>
              <dd className="leading-relaxed text-ink/90">
                {g.items.join("  ·  ")}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ------------------------------------------------ EDUCATION */}
      <Section id="education" eyebrow={education.heading}>
        <ul className="max-w-3xl">
          {education.entries.map((e, i) => (
            <li
              key={e.institution}
              className={`grid gap-x-8 gap-y-1 py-6 sm:grid-cols-[7.5rem_1fr] ${
                i > 0 ? "border-t border-mist" : ""
              }`}
            >
              <span className="data-text pt-1 text-slate">{e.years}</span>
              <span>
                <span className="block text-lg font-medium tracking-tight">
                  {e.institution}
                </span>
                <span className="mt-1 block text-slate">{e.detail}</span>
                {e.note && (
                  <span className="data-text mt-2.5 block text-slate">
                    {e.note}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------ CONTACT */}
      <Section id="contact" eyebrow={contact.heading}>
        <p className="text-slate">{contact.lead}</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-block text-3xl font-semibold tracking-tight underline decoration-mist decoration-2 underline-offset-8 transition-colors hover:text-fjord hover:decoration-fjord sm:text-5xl"
        >
          {site.email}
        </a>
        <p className="mt-8 max-w-xl leading-relaxed text-slate">
          {contact.closing}
        </p>
        <div className="mt-10">
          <Availability />
        </div>
      </Section>
    </>
  );
}
