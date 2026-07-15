"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="data-text border border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-snow"
    >
      Print / save as PDF
    </button>
  );
}
