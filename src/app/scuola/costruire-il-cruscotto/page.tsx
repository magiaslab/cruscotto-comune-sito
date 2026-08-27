import Link from "next/link";
import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import {
  BINARI,
  MATERIALI,
  binarioBySlug,
  lezioniPerBinario,
  scuolaPageMetadata,
} from "@/lib/scuola";

const BINARIO = binarioBySlug("costruire-il-cruscotto")!;

export const metadata = scuolaPageMetadata({
  title: BINARIO.titolo,
  description: BINARIO.intro,
  path: `/scuola/${BINARIO.slug}`,
});

export default function Page() {
  const altro = BINARI.find((b) => b.id !== BINARIO.id)!;
  const lezioni = lezioniPerBinario(BINARIO.id);
  const materiali = MATERIALI.filter(
    (m) => !m.binario || m.binario === BINARIO.id,
  );
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: `/scuola/${BINARIO.slug}`, label: BINARIO.titolo },
      ]}
    >
      <p className="m-0 text-sm font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
        {BINARIO.occhiello}
      </p>
      <h1 className="mb-4 mt-1 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        {BINARIO.h1}
      </h1>
      <p className="mb-4 text-lg text-[var(--pa-muted)]">{BINARIO.sottotitolo}</p>
      <p>{BINARIO.intro}</p>
      {BINARIO.avvertenzaAccount ? (
        <p className="guide-callout" role="note">
          <strong>Account e minorenni.</strong> {BINARIO.avvertenzaAccount}
        </p>
      ) : null}
      <div className="not-prose mt-6 grid gap-3 sm:grid-cols-2">
        <section className="guide-card">
          <h2 className="m-0 text-base font-bold">Per chi è</h2>
          <ul className="mb-0 mt-2 list-disc pl-5 text-sm">
            {BINARIO.destinatari.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
        <section className="guide-card">
          <h2 className="m-0 text-base font-bold">Cosa serve</h2>
          <ul className="mb-0 mt-2 list-disc pl-5 text-sm">
            {BINARIO.prerequisiti.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
      </div>
      <h2 className="guide-h2">Le quattro lezioni</h2>
      {lezioni.map((l) => (
        <section key={l.slug} className="mt-6">
          <h3 className="mb-1 text-base font-bold">
            Lezione {l.numero} — {l.titolo}
          </h3>
          <p className="text-sm text-[var(--pa-muted)]">
            {l.durataMinuti} minuti
          </p>
          <p>
            <strong>Obiettivi.</strong> {l.obiettivi.join(" ")}
          </p>
          <ul>
            {l.attivita.map((a) => (
              <li key={a.titolo}>
                <strong>
                  {a.titolo} ({a.durataMinuti} min).
                </strong>{" "}
                {a.consegna}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <h2 className="guide-h2">Il prodotto finale</h2>
      <p className="guide-callout">{BINARIO.prodottoFinale}</p>
      <h2 className="guide-h2">Materiali di questo binario</h2>
      <ul>
        {materiali.map((m) => (
          <li key={m.id}>
            <a href={m.url} rel="noopener noreferrer">
              {m.titolo} — {m.notaLink}
            </a>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/scuola/materiali">Tutti i materiali</Link>
      </p>
      <p className="mt-6">
        <Link href={`/scuola/${altro.slug}`}>Vai al {altro.titolo}</Link>
        {" · "}
        <Link href="/scuola">Torna a Scuola</Link>
      </p>
    </ScuolaChrome>
  );
}
