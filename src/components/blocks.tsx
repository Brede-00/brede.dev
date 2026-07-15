import type { Block } from "@/content/projects";

export function Section({
  id,
  eyebrow,
  children,
}: {
  id?: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-mist">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="data-label mb-10 text-slate">{eyebrow}</h2>
        {children}
      </div>
    </section>
  );
}

export function CaseBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-2xl">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-12 mb-4 text-xl font-medium tracking-tight sm:text-2xl"
              >
                {b.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="mt-4 leading-relaxed text-ink/90">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-4 space-y-2.5">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-ink/90">
                    <span
                      aria-hidden="true"
                      className="mt-[0.62em] h-[5px] w-[5px] shrink-0 bg-fjord"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "facts":
            return (
              <dl key={i} className="mt-10 border border-mist">
                {b.rows.map((row, j) => (
                  <div
                    key={j}
                    className={`flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6 ${
                      j > 0 ? "border-t border-mist" : ""
                    }`}
                  >
                    <dt className="data-label w-32 shrink-0 text-slate">
                      {row.label}
                    </dt>
                    <dd className="data-text text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            );
        }
      })}
    </div>
  );
}
