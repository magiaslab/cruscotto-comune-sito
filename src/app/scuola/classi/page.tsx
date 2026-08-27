import { notFound } from "next/navigation";
import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import { AUTHOR } from "@/lib/product";
import {
  SEGNALAZIONE_CLASSE,
  classiElenco,
  classiPubblicate,
  scuolaPageMetadata,
} from "@/lib/scuola";

export const metadata = classiPubblicate()
  ? scuolaPageMetadata({
      title: "Classi",
      description:
        "Cruscotti realizzati da classi. Scuola, comune, anno scolastico e URL. Nessun nome né foto di studenti.",
      path: "/scuola/classi",
    })
  : scuolaPageMetadata({
      title: "Classi",
      description: "Vetrina non ancora pubblicata.",
      path: "/scuola/classi",
      index: false,
    });

export default function Page() {
  if (!classiPubblicate()) notFound();
  const elenco = [...classiElenco()].sort((a, b) =>
    b.annoScolastico.localeCompare(a.annoScolastico, "it"),
  );
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: "/scuola/classi", label: "Classi" },
      ]}
    >
      <h1 className="mb-4 mt-0 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        Classi
      </h1>
      <p>
        Cruscotti realizzati da classi. Si indicano scuola, comune, provincia e
        anno scolastico. Nessun nome, foto o video di studenti.
      </p>
      <div className="not-prose grid gap-3 sm:grid-cols-2">
        {elenco.map((c) => (
          <article
            key={`${c.scuola}-${c.comune}-${c.annoScolastico}`}
            className="guide-card"
          >
            <h2 className="m-0 text-base font-bold">{c.scuola}</h2>
            <p className="mb-0 mt-1 text-sm text-[var(--pa-muted)]">
              {c.comune} ({c.provincia}) · {c.annoScolastico}
            </p>
            {c.note ? <p className="mt-2 text-sm">{c.note}</p> : null}
            {c.docenteReferente ? (
              <p className="text-sm">Docente referente: {c.docenteReferente}</p>
            ) : null}
            <p className="mb-0 mt-3">
              <a href={c.url} rel="noopener noreferrer">
                Apri il cruscotto di {c.comune}
              </a>
            </p>
          </article>
        ))}
      </div>
      <h2 className="guide-h2">{SEGNALAZIONE_CLASSE.titolo}</h2>
      <p>{SEGNALAZIONE_CLASSE.intro}</p>
      <p>
        Oggetto: {SEGNALAZIONE_CLASSE.oggetto}.{" "}
        <a href={`mailto:${AUTHOR.email}`}>{AUTHOR.email}</a>.
      </p>
      <ul>
        {SEGNALAZIONE_CLASSE.campi.map((campo) => (
          <li key={campo}>{campo}</li>
        ))}
      </ul>
      <p>{SEGNALAZIONE_CLASSE.conferma}</p>
      <p>{SEGNALAZIONE_CLASSE.privacy}</p>
    </ScuolaChrome>
  );
}
