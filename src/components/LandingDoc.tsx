import type { ReactNode } from "react";

export function LandingDoc({
  kicker,
  title,
  lede,
  children,
  wide = false,
}: {
  kicker?: string;
  title: string;
  lede: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <article
      className={`guide-prose mx-auto px-4 py-10 sm:px-6 sm:py-14 ${
        wide ? "max-w-5xl" : "max-w-3xl"
      }`}
    >
      {kicker ? (
        <p className="m-0 text-sm font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
          {kicker}
        </p>
      ) : null}
      <h1 className="mb-4 mt-1 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        {title}
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-[var(--pa-muted)]">{lede}</p>
      <div className="space-y-8 text-sm leading-relaxed text-[var(--pa-ink)] sm:text-base">
        {children}
      </div>
    </article>
  );
}
