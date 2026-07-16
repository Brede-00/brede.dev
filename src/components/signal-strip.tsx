import Link from "next/link";
import { stripCaption } from "@/content/site";

const TICK_COUNT = 96;

function pseudoRandom(i: number): number {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

type Tick = { height: number; signal: boolean };

const ticks: Tick[] = Array.from({ length: TICK_COUNT }, (_, i) => {
  const r = pseudoRandom(i);
  const signal = pseudoRandom(i * 7 + 13) > 0.94;
  return {
    height: Math.round(5 + r * 15),
    signal,
  };
});

function Track() {
  return (
    <div
      className="flex shrink-0 items-end gap-[7px] pr-[7px]"
      aria-hidden="true"
    >
      {ticks.map((t, i) => (
        <span
          key={i}
          style={{ height: `${t.signal ? t.height + 6 : t.height}px` }}
          className={`w-[2px] shrink-0 ${
            t.signal ? "bg-signal" : "bg-mist"
          }`}
        />
      ))}
    </div>
  );
}

export function SignalStrip() {
  return (
    <figure className="border-y border-mist">
      <div className="flex h-10 items-end overflow-hidden pb-[7px]">
        <div className="flex w-max animate-stream">
          <Track />
          <Track />
        </div>
      </div>
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-mist py-2.5">
        <span className="data-text text-slate">{stripCaption.label}</span>
        <Link
          href={stripCaption.linkHref}
          className="data-text text-fjord hover:text-ink transition-colors"
        >
          {stripCaption.linkLabel} →
        </Link>
      </figcaption>
    </figure>
  );
}
