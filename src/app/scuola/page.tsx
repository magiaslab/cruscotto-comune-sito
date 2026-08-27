import Link from "next/link";
import { BinarioCard } from "@/components/scuola/BinarioCard";
import { LezioneList } from "@/components/scuola/LezioneList";
import { OreTable } from "@/components/scuola/OreTable";
import { ScuolaSubnav } from "@/components/scuola/ScuolaChrome";
import { JsonLd } from "@/components/JsonLd";
import {
  BINARI,
  FORMATI_ORARIO,
  LEZIONI,
  MATERIALI,
  SCUOLA_DISCLAIMER,
  SCUOLA_LANDING,
  SCUOLA_LICENZA,
  scuolaCourseJsonLd,
  scuolaPageMetadata,
} from "@/lib/scuola";
import { AUTHOR } from "@/lib/product";

export const metadata = scuolaPageMetadata({
  title: "Scuola",
  description: SCUOLA_LANDING.intro,
  path: "/scuola",
});

export default function Page() {
  const c = SCUOLA_LANDING;
  return (
    <>
      <JsonLd data={scuolaCourseJsonLd()} id="course-jsonld" />
      <ScuolaSubnav />
      <article className="guide-prose mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="m-0 text-sm font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
          {c.occhiello}
        </p>
        <h1 className="mb-4 mt-1 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
          {c.h1}
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-[var(--pa-muted)]">
          {c.payoff}
        </p>
        <p>{c.intro}</p>
        <div className="not-prose mb-8 flex flex-wrap gap-2">
          {c.cta.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                i === 0
                  ? "inline-flex min-h-11 items-center rounded-lg bg-[var(--pa-primary)] px-3 py-2 text-sm font-bold text-white no-underline hover:bg-[var(--pa-primary-hover)]"
                  : "inline-flex min-h-11 items-center rounded-lg border border-[var(--pa-border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--pa-ink)] no-underline hover:border-[var(--pa-primary)]"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <h2 className="guide-h2">Cosa si porta a casa la classe</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-3">
          {c.portaACasa.map((card) => (
            <article key={card.titolo} className="guide-card">
              <h3 className="m-0 text-base font-bold text-[var(--pa-ink)]">
                {card.titolo}
              </h3>
              <p className="mb-0 mt-2 text-sm text-[var(--pa-muted)]">
                {card.testo}
              </p>
            </article>
          ))}
        </div>

        <h2 className="guide-h2">Due binari</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          {BINARI.map((b) => (
            <BinarioCard key={b.id} binario={b} />
          ))}
        </div>
        <p className="mt-4 font-semibold">{c.binariNota}</p>
        <ul>
          {c.comeSiCombinano.map((row) => (
            <li key={row}>{row}</li>
          ))}
        </ul>

        <h2 className="guide-h2">Quante ore servono</h2>
        <OreTable formati={FORMATI_ORARIO} nota={c.formatiNota} />

        <h2 className="guide-h2">Dove si incastra nel curricolo</h2>
        {c.curricolo.map((item) => (
          <div key={item.titolo}>
            <h3 className="mb-1 mt-4 text-base font-bold">{item.titolo}</h3>
            <p>{item.testo}</p>
          </div>
        ))}

        <h2 className="guide-h2">Le otto lezioni</h2>
        <LezioneList lezioni={LEZIONI} />

        <h2 className="guide-h2">Materiali</h2>
        <p>
          Guide, schede studente, rubrica, glossario e modelli. Formati aperti
          (Markdown su GitHub). Licenza {SCUOLA_LICENZA.nome}:{" "}
          {SCUOLA_LICENZA.spiegazione}
        </p>
        <ul>
          {MATERIALI.map((m) => (
            <li key={m.id}>
              {m.titolo} ({m.tipo})
            </li>
          ))}
        </ul>
        <p>
          <Link href="/scuola/materiali">Apri i materiali didattici →</Link>
        </p>

        <h2 className="guide-h2">Prima di iniziare</h2>
        <ol>
          {c.vincoli.map((v) => (
            <li key={v.titolo}>
              <strong>{v.titolo}.</strong> {v.testo}
            </li>
          ))}
        </ol>

        <h2 className="guide-h2">Segnalare un cruscotto</h2>
        <p>{c.chiusura}</p>
        <p>
          <a href={c.contattoMailto}>{AUTHOR.email}</a>
        </p>
        <p className="mt-10 border-t border-[var(--pa-border)] pt-4 text-sm text-[var(--pa-muted)]">
          {SCUOLA_DISCLAIMER}
        </p>
      </article>
    </>
  );
}
