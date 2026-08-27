import { LandingDoc } from "@/components/LandingDoc";
import { FONTI } from "@/lib/fonti";
import Link from "next/link";

export function FontiContent() {
  const nazionali = FONTI.filter((f) => f.ambito === "nazionale");
  const opzionali = FONTI.filter((f) => f.ambito === "opzionale");

  return (
    <LandingDoc
      kicker="Fonti"
      title="Da dove arrivano i dati"
      lede="Il cruscotto non inventa numeri: li legge da API e file aperti. Qui c’è l’elenco, diviso tra fonti nazionali e moduli da attivare."
    >
      <section>
        <h2 className="text-xl font-bold">Regola pratica</h2>
        <p>
          Se una fonte è <strong>nazionale</strong> basta il codice ISTAT (e
          magari catastale o coordinate). Se è <strong>opzionale</strong> va
          acceso il flag in <code>features</code> e, se serve, l’indirizzo della
          tua Regione o del tuo gestore. Non copiare path, webcam o spiagge di
          un altro comune.
        </p>
        <p>
          Licenze e attribuzioni d’uso: tab{" "}
          <Link href="/menzioni">Menzioni</Link> e, nel cruscotto comunale,
          Attribuzioni e regole. Per vedere ogni sezione con i dati in pagina e
          lo screenshot: <Link href="/sezioni">Sezioni del cruscotto</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold">Fonti nazionali</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--pa-border)]">
                <th className="py-2 pr-3">Fonte</th>
                <th className="py-2 pr-3">Ente</th>
                <th className="py-2">Nota</th>
              </tr>
            </thead>
            <tbody>
              {nazionali.map((f) => (
                <tr key={f.nome} className="border-b border-[var(--pa-border)] align-top">
                  <td className="py-2 pr-3">
                    <a href={f.url} target="_blank" rel="noopener noreferrer">
                      {f.nome}
                    </a>
                    <div className="text-xs text-[var(--pa-muted)]">{f.licenza}</div>
                  </td>
                  <td className="py-2 pr-3">{f.ente}</td>
                  <td className="py-2">{f.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">Moduli da attivare</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--pa-border)]">
                <th className="py-2 pr-3">Fonte</th>
                <th className="py-2 pr-3">Flag</th>
                <th className="py-2">Come usarla</th>
              </tr>
            </thead>
            <tbody>
              {opzionali.map((f) => (
                <tr key={f.nome} className="border-b border-[var(--pa-border)] align-top">
                  <td className="py-2 pr-3">
                    <a href={f.url} target="_blank" rel="noopener noreferrer">
                      {f.nome}
                    </a>
                  </td>
                  <td className="py-2 pr-3">
                    {f.feature ? (
                      <code className="text-xs">features.{f.feature}</code>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="py-2">{f.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </LandingDoc>
  );
}
