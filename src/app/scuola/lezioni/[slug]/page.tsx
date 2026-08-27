import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SchedaStampabile } from "@/components/scuola/SchedaStampabile";
import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import {
  LEZIONI,
  MATERIALI,
  binarioById,
  learningResourceJsonLd,
  lezioneBySlug,
  lezionePrevNext,
  scuolaPageMetadata,
} from "@/lib/scuola";

export function generateStaticParams() {
  return LEZIONI.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lezione = lezioneBySlug(slug);
  if (!lezione) {
    return { title: "Lezione non trovata" };
  }
  return scuolaPageMetadata({
    title: `Lezione ${lezione.numero} — ${lezione.titolo}`,
    description: lezione.intro,
    path: `/scuola/lezioni/${lezione.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lezione = lezioneBySlug(slug);
  if (!lezione) notFound();
  const binario = binarioById(lezione.binario);
  const { prev, next } = lezionePrevNext(lezione.slug);
  const materiali = MATERIALI.filter((m) => lezione.materialeIds.includes(m.id));
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: `/scuola/${binario.slug}`, label: binario.titolo },
        {
          href: `/scuola/lezioni/${lezione.slug}`,
          label: `Lezione ${lezione.numero}`,
        },
      ]}
    >
      <JsonLd
        data={learningResourceJsonLd(lezione)}
        id="learning-resource-jsonld"
      />
      <p className="m-0 text-sm font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
        {lezione.occhiello}
      </p>
      <h1 className="mb-2 mt-1 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        {lezione.h1}
      </h1>
      <p className="text-[var(--pa-muted)]">{lezione.durataMinuti} minuti</p>
      <p>{lezione.intro}</p>
      <h2 className="guide-h2">Obiettivi</h2>
      <p>Al termine della lezione lo studente sa:</p>
      <ul>
        {lezione.obiettivi.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
      {lezione.prerequisiti.length > 0 ? (
        <>
          <h2 className="guide-h2">Prerequisiti</h2>
          <ul>
            {lezione.prerequisiti.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </>
      ) : null}
      <h2 className="guide-h2">Svolgimento</h2>
      <p>
        <strong>Materiali.</strong> {lezione.materialiLezione}
      </p>
      <ol>
        {lezione.attivita.map((a) => (
          <li key={a.titolo} className="mb-3">
            <strong>
              {a.titolo} — {a.durataMinuti} minuti.
            </strong>{" "}
            {a.consegna}
          </li>
        ))}
      </ol>
      <p>
        <strong>Frase da portare a casa.</strong> {lezione.chiusura}
      </p>
      <h2 className="guide-h2">Cosa può andare storto</h2>
      <ul>
        {lezione.cosePuoAndareStorto.map((x) => (
          <li key={x.slice(0, 40)}>{x}</li>
        ))}
      </ul>
      <h2 className="guide-h2">Compito</h2>
      <p>{lezione.compitoCasa}</p>
      <h2 className="guide-h2">Collegamenti disciplinari</h2>
      <ul>
        {lezione.discipline.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <h2 className="guide-h2">DigComp 2.2</h2>
      <ul>
        {lezione.digcomp.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <h2 className="guide-h2">Materiali di questa lezione</h2>
      <ul>
        {materiali.map((m) => (
          <li key={m.id}>
            <a href={m.url} rel="noopener noreferrer">
              {m.titolo} — {m.notaLink}
            </a>
          </li>
        ))}
      </ul>
      <SchedaStampabile scheda={lezione.schedaStudente} />
      <nav aria-label="Lezioni vicine" className="no-print mt-8 flex flex-wrap gap-4">
        {prev ? (
          <Link href={`/scuola/lezioni/${prev.slug}`}>
            ← Lezione {prev.numero}: {prev.titolo}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/scuola/lezioni/${next.slug}`}>
            Lezione {next.numero}: {next.titolo} →
          </Link>
        ) : null}
      </nav>
      <p className="no-print mt-4">
        <Link href={`/scuola/${binario.slug}`}>Torna a {binario.titolo}</Link>
      </p>
    </ScuolaChrome>
  );
}
