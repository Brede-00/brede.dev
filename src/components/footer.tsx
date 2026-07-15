import { site, fullName, footer } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="print-hidden border-t border-mist">
      <div className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 py-8 sm:px-8">
        <div className="data-text text-slate">
          © {year} {fullName} · {footer.note}
        </div>
        <div className="data-text flex items-baseline gap-5 text-slate">
          {site.githubUrl && (
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {site.linkedinUrl && (
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              LinkedIn ↗
            </a>
          )}
          <a
            href={`mailto:${site.email}`}
            className="hover:text-ink transition-colors"
          >
            {site.email}
          </a>
          <span className="hidden sm:inline">{site.coordinates}</span>
        </div>
      </div>
    </footer>
  );
}
