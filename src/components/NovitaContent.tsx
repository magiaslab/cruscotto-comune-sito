import Link from "next/link";
import { LandingDoc } from "@/components/LandingDoc";
import { NOVITA } from "@/lib/novita";

function formatData(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(y, m - 1, d));
}

export function NovitaContent() {
  return (
    <LandingDoc
      kicker="Novità"
      title="Cosa è cambiato"
      lede="Funzioni e siti aggiunti di mese in mese. Niente changelog da sviluppatori: solo quello che si vede da fuori."
    >
      <ol className="not-prose m-0 list-none space-y-4 p-0">
        {NOVITA.map((voce) => {
          const external = Boolean(voce.href?.startsWith("http"));
          return (
            <li key={`${voce.data}-${voce.titolo}`} className="guide-card">
              <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
                {formatData(voce.data)}
              </p>
              <h2 className="mb-2 mt-1 text-lg font-bold text-[var(--pa-ink)]">
                {voce.titolo}
              </h2>
              <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
                {voce.testo}
              </p>
              {voce.href ? (
                external ? (
                  <a
                    href={voce.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold"
                  >
                    {voce.hrefLabel ?? voce.href}
                  </a>
                ) : (
                  <Link
                    href={voce.href}
                    className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold"
                  >
                    {voce.hrefLabel ?? voce.href}
                  </Link>
                )
              ) : null}
            </li>
          );
        })}
      </ol>
      <p>
        Prossimi passi sulla mappa: altri comuni, storie di fork, magari un
        video dei dieci minuti. Se ne hai fatto uno, scrivilo: finisce qui e in{" "}
        <Link href="/comuni">Comuni</Link>.
      </p>
    </LandingDoc>
  );
}
