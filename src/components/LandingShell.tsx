import type { ReactNode } from "react";
import Link from "next/link";
import { SkipLink } from "@/components/SkipLink";
import { SiteHeader } from "@/components/SiteHeader";
import {
  AUTHOR,
  getDemoLabel,
  getDemoUrl,
  getProductName,
  getTemplateGithubUrl,
} from "@/lib/product";
import { PROJECT_ORIGIN } from "@/lib/project-origin";

const FOOTER: { titolo: string; voci: { href: string; label: string }[] }[] = [
  {
    titolo: "Orientarsi",
    voci: [
      { href: "/progetto", label: "Progetto" },
      { href: "/comuni", label: "Comuni" },
      { href: "/sezioni", label: "Sezioni" },
      { href: "/novita", label: "Novità" },
    ],
  },
  {
    titolo: "Fare",
    voci: [
      { href: "/guida", label: "Guida" },
      { href: "/riusa", label: "Riuso" },
      { href: "/scuola", label: "Scuola" },
      { href: "/kit-ente", label: "Kit ente" },
    ],
  },
  {
    titolo: "Riferimenti",
    voci: [
      { href: "/fonti", label: "Fonti" },
      { href: "/menzioni", label: "Menzioni" },
      { href: "/suggerisci", label: "Suggerisci" },
      { href: "/sostieni", label: "Supporto" },
    ],
  },
];

export function LandingShell({ children }: { children: ReactNode }) {
  const product = getProductName();
  const github = getTemplateGithubUrl();
  const demo = getDemoUrl();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <SkipLink />
      <SiteHeader />
      <main id="contenuto-principale" className="flex-1">
        {children}
      </main>
      <footer
        className="mt-auto border-t border-[color-mix(in_srgb,white_15%,transparent)] bg-[var(--pa-footer)] text-white"
        role="contentinfo"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <p className="m-0 text-sm font-bold">{product}</p>
            <p className="mb-0 mt-2 text-xs leading-relaxed text-[var(--pa-footer-muted)] sm:text-sm">
              Un progetto di {AUTHOR.name}. Template su{" "}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-2"
              >
                GitHub
              </a>
              . Primo cruscotto:{" "}
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-2"
              >
                {getDemoLabel()}
              </a>
              .
            </p>
            <p className="mb-0 mt-2 text-xs sm:text-sm">
              <a
                href={`mailto:${PROJECT_ORIGIN.author.email}`}
                className="underline-offset-2 hover:underline"
              >
                {PROJECT_ORIGIN.author.email}
              </a>
            </p>
          </div>
          <nav
            aria-label="Pagine del sito"
            className="grid gap-6 text-sm md:grid-cols-3"
          >
            {FOOTER.map((col) => (
              <div key={col.titolo}>
                <p className="m-0 mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--pa-footer-muted)]">
                  {col.titolo}
                </p>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {col.voci.map((voce) => (
                    <li key={voce.href}>
                      <Link
                        href={voce.href}
                        className="underline-offset-2 hover:underline"
                      >
                        {voce.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
