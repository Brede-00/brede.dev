import Link from "next/link";

const links = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume/" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  return (
    <header className="print-hidden sticky top-0 z-50 border-b border-mist bg-snow/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-x-8 gap-y-1 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="data-text !text-[0.8125rem] text-ink hover:text-fjord transition-colors"
        >
          brede<span className="text-signal">.</span>dev
        </Link>
        <div className="flex items-baseline gap-5 sm:gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="data-label !text-[0.6875rem] text-slate hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
