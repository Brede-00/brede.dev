import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-28 sm:px-8">
      <p className="data-label text-slate">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
        No signal here.
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-slate">
        This page does not exist — or it did not survive validation.
      </p>
      <Link
        href="/"
        className="data-text mt-8 inline-block text-fjord transition-colors hover:text-ink"
      >
        ← Back to brede.dev
      </Link>
    </div>
  );
}
