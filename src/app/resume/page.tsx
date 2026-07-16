import type { Metadata } from "next";
import { site, fullName, resume } from "@/content/site";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${fullName} — ${site.tagline}.`,
};

function RuleHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="data-label mt-10 border-b border-mist pb-2 text-slate print:mt-6">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20 print:max-w-none print:p-0">
      {/* Actions — hidden when printing */}
      <div className="print-hidden mb-12 flex flex-wrap items-center gap-4">
        <PrintButton />
        {site.resumePdf && (
          <a
            href={site.resumePdf}
            className="data-text bg-ink px-4 py-2 text-snow transition-colors hover:bg-fjord"
          >
            Download PDF ↓
          </a>
        )}
      </div>

      {/* Header */}
      <header>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {fullName}
        </h1>
        <p className="data-text mt-3 text-slate">
          {site.email} · {site.domain} · {site.location}
          {site.githubUrl && <> · {site.githubUrl.replace("https://", "")}</>}
          {site.linkedinUrl && (
            <> · {site.linkedinUrl.replace("https://www.", "").replace("https://", "")}</>
          )}
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-ink/90">
          {resume.headline}
        </p>
      </header>

      {/* Education */}
      <RuleHeading>Education</RuleHeading>
      <ul className="mt-4 space-y-5">
        {resume.education.map((e) => (
          <li key={e.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <span className="font-medium tracking-tight">{e.school}</span>
              <span className="data-text text-slate">{e.dates}</span>
            </div>
            <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-6 text-slate">
              <span>{e.credential}</span>
              <span className="data-text">{e.place}</span>
            </div>
            {e.lines.map((line, i) => (
              <p key={i} className="mt-1.5 text-sm leading-relaxed text-slate">
                {line}
              </p>
            ))}
          </li>
        ))}
      </ul>

      {/* Projects */}
      <RuleHeading>Projects</RuleHeading>
      <ul className="mt-4 space-y-6">
        {resume.projects.map((p) => (
          <li key={p.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <span className="font-medium tracking-tight">{p.name}</span>
              <span className="data-text text-slate">{p.dates}</span>
            </div>
            <p className="data-text mt-0.5 text-slate">{p.stack}</p>
            <ul className="mt-2 space-y-1.5">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-[4px] w-[4px] shrink-0 bg-ink"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Experience */}
      <RuleHeading>Experience</RuleHeading>
      <ul className="mt-4 space-y-5">
        {resume.experience.map((e) => (
          <li key={e.company + e.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <span className="font-medium tracking-tight">{e.company}</span>
              <span className="data-text text-slate">{e.dates}</span>
            </div>
            <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-6 text-slate">
              <span>{e.role}</span>
              <span className="data-text">{e.place}</span>
            </div>
            <ul className="mt-2 space-y-1.5">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-[4px] w-[4px] shrink-0 bg-ink"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <RuleHeading>Technical skills</RuleHeading>
      <p className="mt-4 text-sm leading-relaxed">{resume.skillsLine}</p>
    </div>
  );
}
