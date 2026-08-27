import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  SCUOLA_DISCLAIMER,
  scuolaBreadcrumbJsonLd,
  scuolaNavItems,
} from "@/lib/scuola";

export type ScuolaCrumb = { href: string; label: string };

export function ScuolaSubnav() {
  const items = scuolaNavItems();
  return (
    <nav
      aria-label="Sezione Scuola"
      className="scuola-subnav no-print border-b border-[var(--pa-border)] bg-white"
    >
      <ul className="mx-auto flex max-w-5xl list-none flex-wrap gap-1 px-4 py-2 sm:px-6">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold no-underline hover:bg-[var(--pa-surface-soft)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ScuolaBreadcrumb({ crumbs }: { crumbs: ScuolaCrumb[] }) {
  return (
    <nav aria-label="Percorso" className="no-print mb-6 text-sm">
      <ol className="m-0 flex list-none flex-wrap items-center gap-1 p-0 text-[var(--pa-muted)]">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {i > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="font-semibold text-[var(--pa-ink)]">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href}>{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function ScuolaChrome({
  crumbs,
  children,
}: {
  crumbs: ScuolaCrumb[];
  children: ReactNode;
}) {
  const jsonLdCrumbs = crumbs.map((c) => ({ name: c.label, path: c.href }));
  return (
    <>
      <ScuolaSubnav />
      <JsonLd data={scuolaBreadcrumbJsonLd(jsonLdCrumbs)} id="breadcrumb-jsonld" />
      <div className="guide-prose mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <ScuolaBreadcrumb crumbs={crumbs} />
        {children}
        <p className="mt-10 border-t border-[var(--pa-border)] pt-4 text-sm text-[var(--pa-muted)]">
          {SCUOLA_DISCLAIMER} Materiali didattici {""}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.it">
            CC BY-SA 4.0
          </a>
          .
        </p>
      </div>
    </>
  );
}
