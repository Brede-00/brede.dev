import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject, nextProject } from "@/content/projects";
import { CaseBody } from "@/components/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = nextProject(slug);

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/#projects"
        className="data-text text-slate transition-colors hover:text-ink"
      >
        ← All projects
      </Link>

      <header className="mt-10">
        <p className="data-label text-slate">{project.category}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
          {project.oneLiner}
        </p>
      </header>

      <dl className="mt-10 grid gap-x-10 gap-y-5 border-y border-mist py-6 sm:grid-cols-4">
        <div>
          <dt className="data-label text-slate">Year</dt>
          <dd className="data-text mt-1.5">{project.year}</dd>
        </div>
        <div>
          <dt className="data-label text-slate">Status</dt>
          <dd className="data-text mt-1.5">{project.status}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="data-label text-slate">Stack</dt>
          <dd className="data-text mt-1.5">{project.stack.join(" · ")}</dd>
        </div>
        {project.links.length > 0 && (
          <div className="sm:col-span-4">
            <dt className="data-label text-slate">Links</dt>
            <dd className="data-text mt-1.5 flex flex-wrap gap-x-6 gap-y-1">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fjord transition-colors hover:text-ink"
                >
                  {l.label} ↗
                </a>
              ))}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-4">
        <CaseBody blocks={project.body} />
      </div>

      <footer className="mt-20 border-t border-mist pt-8">
        <Link
          href={`/projects/${next.slug}/`}
          className="group flex flex-wrap items-baseline justify-between gap-4"
        >
          <span className="data-label text-slate">Next project</span>
          <span className="text-xl font-medium tracking-tight transition-colors group-hover:text-fjord sm:text-2xl">
            {next.title} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </footer>
    </article>
  );
}
