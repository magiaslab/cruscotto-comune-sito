import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import {
  REQUISITI_RETE,
  STRUMENTI,
  scuolaPageMetadata,
} from "@/lib/scuola";

export const metadata = scuolaPageMetadata({
  title: "Strumenti",
  description:
    "Cosa serve davvero in aula: browser e foglio di calcolo per leggere i dati; account GitHub e Vercel del docente per costruire il cruscotto. Requisiti di rete da verificare una settimana prima.",
  path: "/scuola/strumenti",
});

export default function Page() {
  const a = STRUMENTI.filter((s) => s.binario === "leggere" || s.binario === "entrambi");
  const b = STRUMENTI.filter(
    (s) => s.binario === "costruire" || s.binario === "entrambi",
  );
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: "/scuola/strumenti", label: "Strumenti" },
      ]}
    >
      <h1 className="mb-4 mt-0 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        Strumenti
      </h1>
      <p>
        Cosa serve davvero, diviso per binario. Nessun software a pagamento.
        Nessuna carta di credito. L&apos;editor è opzionale: per il file di
        configurazione basta l&apos;editor di GitHub nel browser.
      </p>
      <h2 className="guide-h2">Binario A — Leggere i dati</h2>
      <ul>
        {a.map((s) => (
          <li key={`a-${s.nome}`}>
            <strong>{s.nome}.</strong> {s.aCosaServe}
          </li>
        ))}
      </ul>
      <h2 className="guide-h2">Binario B — Costruire il cruscotto</h2>
      <ul>
        {b.map((s) => (
          <li key={`b-${s.nome}`}>
            <strong>{s.nome}.</strong> {s.aCosaServe}
          </li>
        ))}
      </ul>
      <h2 className="guide-h2">{REQUISITI_RETE.titolo}</h2>
      <p>{REQUISITI_RETE.intro}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <caption className="mb-2 text-left text-sm text-[var(--pa-muted)]">
            Domini che la scuola deve consentire.
          </caption>
          <thead>
            <tr className="border-b border-[var(--pa-border)]">
              <th scope="col" className="py-2 pr-3">
                Dominio
              </th>
              <th scope="col" className="py-2">
                Perché
              </th>
            </tr>
          </thead>
          <tbody>
            {REQUISITI_RETE.domini.map((d) => (
              <tr key={d.host} className="border-b border-[var(--pa-border)]">
                <th scope="row" className="py-2 pr-3 font-mono font-medium">
                  {d.host}
                </th>
                <td className="py-2">{d.perche}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{REQUISITI_RETE.consiglio}</p>
    </ScuolaChrome>
  );
}
