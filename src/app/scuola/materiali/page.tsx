import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import {
  KIT_OFFLINE,
  MATERIALI,
  SCUOLA_LICENZA,
  scuolaPageMetadata,
} from "@/lib/scuola";

export const metadata = scuolaPageMetadata({
  title: "Materiali didattici",
  description:
    "Guide, schede studente, rubrica, glossario e modelli del percorso Scuola. Formati aperti, licenza CC BY-SA 4.0. I file stanno su GitHub, non in questa cartella pubblica.",
  path: "/scuola/materiali",
});

function formatDataIt(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function Page() {
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: "/scuola/materiali", label: "Materiali" },
      ]}
    >
      <h1 className="mb-4 mt-0 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        Materiali didattici
      </h1>
      <p>
        Kit completo per il docente: guida, otto lezioni con schede studente,
        rubrica, glossario, modelli di accesso civico e kit dati offline. Finché
        non esiste una GitHub Release con PDF/ODT, i download puntano ai file
        Markdown sul repository. Il formato è dichiarato nel testo di ogni link.
        Nessun file viene servito da questa cartella <code>public/</code>.
      </p>
      <div className="not-prose grid gap-3 sm:grid-cols-2">
        {MATERIALI.map((m) => (
          <article key={m.id} className="guide-card">
            <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
              {m.tipo}
            </p>
            <h2 className="mb-2 mt-1 text-base font-bold">{m.titolo}</h2>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              Formati: {m.formati.join(", ")}. Licenza {m.licenza}. Ultima
              verifica: {formatDataIt(m.ultimaVerifica)}.
            </p>
            <p className="mb-0 mt-3">
              <a href={m.url} rel="noopener noreferrer">
                Apri {m.notaLink}
              </a>
            </p>
          </article>
        ))}
      </div>
      <h2 className="guide-h2">Licenza</h2>
      <p className="guide-callout">
        <strong>{SCUOLA_LICENZA.nome}.</strong> {SCUOLA_LICENZA.spiegazione}{" "}
        Testo integrale:{" "}
        <a href={SCUOLA_LICENZA.url} rel="noopener noreferrer">
          Creative Commons BY-SA 4.0
        </a>
        .
      </p>
      <h2 className="guide-h2">{KIT_OFFLINE.titolo}</h2>
      <p>{KIT_OFFLINE.perche}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <caption className="mb-2 text-left text-sm text-[var(--pa-muted)]">
            Contenuto del kit, lezioni in cui serve, come si ottiene.
          </caption>
          <thead>
            <tr className="border-b border-[var(--pa-border)]">
              <th scope="col" className="py-2 pr-3">
                Contenuto
              </th>
              <th scope="col" className="py-2 pr-3">
                Lezioni
              </th>
              <th scope="col" className="py-2">
                Come si ottiene
              </th>
            </tr>
          </thead>
          <tbody>
            {KIT_OFFLINE.contenuti.map((row) => (
              <tr key={row.contenuto} className="border-b border-[var(--pa-border)]">
                <th scope="row" className="py-2 pr-3 align-top font-medium">
                  {row.contenuto}
                </th>
                <td className="py-2 pr-3 align-top">{row.lezioni}</td>
                <td className="py-2 align-top">{row.come}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{KIT_OFFLINE.regola}</p>
      <p>
        Istruzioni complete nel file modelli-kit, card «Modelli, checklist e kit
        dati offline» in questa pagina (Markdown su GitHub).
      </p>
    </ScuolaChrome>
  );
}
