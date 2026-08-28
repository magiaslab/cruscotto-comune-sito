"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { GitHubMark } from "@/components/BrandMarks";
import { StemmaMark } from "@/components/StemmaMark";
import {
  AUTHOR,
  getDemoUrl,
  getProductName,
  getProductTagline,
  getTemplateForkUrl,
  isSostieniEnabled,
} from "@/lib/product";

const NAV: { href: string; label: string }[] = [
  { href: "/progetto", label: "Progetto" },
  { href: "/comuni", label: "Comuni" },
  { href: "/riusa", label: "Riuso" },
  { href: "/scuola", label: "Scuola" },
  { href: "/sezioni", label: "Sezioni" },
];

function navClass(active: boolean, stacked = false) {
  const base = stacked
    ? "flex min-h-11 items-center rounded-lg px-3 text-base font-semibold no-underline"
    : "inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold no-underline";
  return `${base} ${
    active
      ? "bg-[var(--pa-surface-soft)] text-[var(--pa-primary)]"
      : "text-[var(--pa-ink)] hover:bg-[var(--pa-surface-soft)]"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  return <SiteHeaderBar key={pathname} pathname={pathname} />;
}

function SiteHeaderBar({ pathname }: { pathname: string }) {
  const product = getProductName();
  const fork = getTemplateForkUrl();
  const demo = getDemoUrl();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const links = (
    stacked: boolean,
    onNavigate?: () => void,
  ) => (
    <>
      {NAV.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={navClass(active, stacked)}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className={navClass(false, stacked)}
      >
        San Vincenzo
      </a>
      <a
        href={fork}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-[var(--pa-primary)] px-3 text-sm font-bold text-white no-underline hover:bg-[var(--pa-primary-hover)] ${
          stacked ? "mt-1 w-full" : ""
        }`}
      >
        <GitHubMark size={16} />
        Copia su GitHub
      </a>
    </>
  );

  return (
    <header className="relative z-50 border-b border-[var(--pa-border)] bg-white">
      <div className="relative z-10">
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
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex min-h-11 min-w-0 flex-1 items-center gap-3 text-inherit no-underline"
            aria-label={`${product} — home`}
            onClick={() => setOpen(false)}
          >
            <StemmaMark width={36} height={45} className="h-9 w-auto shrink-0" />
            <span className="min-w-0">
              <span className="block text-base font-bold leading-tight text-[var(--pa-ink)] sm:text-lg">
                {product}
              </span>
              <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-[var(--pa-muted)] lg:line-clamp-1">
                {getProductTagline()}
              </span>
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg text-[var(--pa-ink)] hover:bg-[var(--pa-surface-soft)] lg:hidden"
            aria-expanded={open}
            aria-controls="menu-principale-mobile"
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
          <nav
            aria-label="Pagine principali"
            className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-1 lg:flex"
          >
            {links(false)}
          </nav>
        </div>
        {open ? (
          <nav
            id="menu-principale-mobile"
            aria-label="Pagine principali"
            className="border-t border-[var(--pa-border)] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
              {links(true, () => setOpen(false))}
            </div>
          </nav>
        ) : null}
      </div>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-0 bg-[color-mix(in_srgb,var(--pa-ink)_45%,transparent)] lg:hidden"
          aria-label="Chiudi il menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
