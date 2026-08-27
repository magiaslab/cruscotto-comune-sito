"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SkipLink } from "@/components/SkipLink";
import { StemmaMark } from "@/components/StemmaMark";
import { GitHubMark } from "@/components/BrandMarks";
import {
  AUTHOR,
  getDemoLabel,
  getDemoUrl,
  getProductName,
  getProductTagline,
  getTemplateForkUrl,
  getTemplateGithubUrl,
  isSostieniEnabled,
} from "@/lib/product";
import { PROJECT_ORIGIN } from "@/lib/project-origin";

const NAV: { href: string; label: string }[] = [
  { href: "/progetto", label: "Progetto" },
  { href: "/comuni", label: "Comuni" },
  { href: "/riusa", label: "Riuso" },
  { href: "/scuola", label: "Scuola" },
  { href: "/kit-ente", label: "Kit ente" },
  { href: "/novita", label: "Novità" },
  { href: "/sezioni", label: "Sezioni" },
  { href: "/fonti", label: "Fonti" },
  { href: "/menzioni", label: "Menzioni" },
];

export function LandingShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const product = getProductName();
  const github = getTemplateGithubUrl();
  const fork = getTemplateForkUrl();
  const demo = getDemoUrl();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <SkipLink />
      <header className="border-b border-[var(--pa-border)] bg-white">
        <div className="bg-[var(--pa-primary)] text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:px-6 sm:text-sm">
            <p className="m-0 font-semibold leading-snug">
              Progetto indipendente, non ufficiale. Non affiliato ad AgID, al
              Governo italiano o a un ente locale.
            </p>
            <div className="flex items-center gap-3">
              {isSostieniEnabled() ? (
                <Link
                  href="/sostieni"
                  className="inline-flex min-h-11 items-center text-white underline-offset-2 hover:underline"
                >
                  Supporto
                </Link>
              ) : null}
              <a
                href={`mailto:${AUTHOR.email}`}
                className="inline-flex min-h-11 items-center text-white underline-offset-2 hover:underline"
              >
                Contatti
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-3 text-inherit no-underline"
            aria-label={`${product} — home`}
          >
            <StemmaMark width={36} height={45} className="h-9 w-auto" />
            <span className="min-w-0">
              <span className="block text-base font-bold leading-tight text-[var(--pa-ink)] sm:text-lg">
                {product}
              </span>
              <span className="block text-xs text-[var(--pa-muted)]">
                {getProductTagline()}
              </span>
            </span>
          </Link>
          <nav
            aria-label="Sezioni del sito"
            className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-1 sm:gap-2"
          >
            {NAV.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold no-underline ${
                    active
                      ? "bg-[var(--pa-surface-soft)] text-[var(--pa-primary)]"
                      : "text-[var(--pa-ink)] hover:bg-[var(--pa-surface-soft)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-[var(--pa-ink)] no-underline hover:bg-[var(--pa-surface-soft)]"
            >
              San Vincenzo
            </a>
            <a
              href={fork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-[var(--pa-primary)] px-3 text-sm font-bold text-white no-underline hover:bg-[var(--pa-primary-hover)]"
            >
              <GitHubMark size={16} />
              Copia su GitHub
            </a>
          </nav>
        </div>
      </header>
      <main id="contenuto-principale" className="flex-1">
        {children}
      </main>
      <footer
        className="mt-auto border-t border-[color-mix(in_srgb,white_15%,transparent)] bg-[var(--pa-footer)] text-white"
        role="contentinfo"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:justify-between sm:px-6">
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
          </div>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm">
            <li>
              <Link href="/suggerisci" className="underline-offset-2 hover:underline">
                Suggerisci
              </Link>
            </li>
            <li>
              <Link href="/comuni" className="underline-offset-2 hover:underline">
                Comuni
              </Link>
            </li>
            <li>
              <Link href="/guida" className="underline-offset-2 hover:underline">
                Guida
              </Link>
            </li>
            <li>
              <Link href="/riusa" className="underline-offset-2 hover:underline">
                Guida al riuso
              </Link>
            </li>
            <li>
              <Link href="/scuola" className="underline-offset-2 hover:underline">
                Percorso didattico
              </Link>
            </li>
            <li>
              <Link href="/kit-ente" className="underline-offset-2 hover:underline">
                Kit ente
              </Link>
            </li>
            <li>
              <Link href="/novita" className="underline-offset-2 hover:underline">
                Novità
              </Link>
            </li>
            <li>
              <Link href="/sezioni" className="underline-offset-2 hover:underline">
                Sezioni del cruscotto
              </Link>
            </li>
            <li>
              <Link href="/fonti" className="underline-offset-2 hover:underline">
                Fonti e licenze
              </Link>
            </li>
            <li>
              <Link href="/menzioni" className="underline-offset-2 hover:underline">
                Guida alle menzioni
              </Link>
            </li>
            <li>
              <Link href="/sostieni" className="underline-offset-2 hover:underline">
                Supporto
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${PROJECT_ORIGIN.author.email}`}
                className="underline-offset-2 hover:underline"
              >
                {PROJECT_ORIGIN.author.email}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
