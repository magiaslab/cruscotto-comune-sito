import Link from "next/link";
import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import { FONTI_DIDATTICHE, scuolaPageMetadata } from "@/lib/scuola";

export const metadata = scuolaPageMetadata({
  title: "Fonti in classe",
  description:
    "Lettura didattica del catalogo fonti: chi produce il dato, ogni quanto si aggiorna, con che licenza, che cosa ci fai in classe. La tabella tecnica resta su /fonti.",
  path: "/scuola/fonti",
});

export default function Page() {
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: "/scuola/fonti", label: "Fonti in classe" },
      ]}
    >
      <h1 className="mb-4 mt-0 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        Fonti in classe
      </h1>
      <p>
        Lettura didattica del nucleo nazionale. Non è il catalogo tecnico: quello
        sta nella pagina{" "}
        <Link href="/fonti">Fonti e licenze</Link>, con ente, ambito, URL e nota
        operativa. Qui, per ciascuna fonte, tre colonne per l&apos;aula: chi la
        produce, come trattare l&apos;aggiornamento, che cosa ci fai in classe.
        Se un dato di frequenza non è dichiarato, non lo inventiamo: in classe si
        legge la data sul dataset.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption className="mb-2 text-left text-sm text-[var(--pa-muted)]">
            Fonti nazionali del cruscotto, lette per l&apos;uso in classe.
          </caption>
          <thead>
            <tr className="border-b border-[var(--pa-border)]">
              <th scope="col" className="py-2 pr-3">
                Fonte
              </th>
              <th scope="col" className="py-2 pr-3">
                Chi / aggiornamento
              </th>
              <th scope="col" className="py-2">
                Cosa ci fai in classe
              </th>
            </tr>
          </thead>
          <tbody>
            {FONTI_DIDATTICHE.map((f) => (
              <tr key={f.nome} className="border-b border-[var(--pa-border)]">
                <th scope="row" className="py-3 pr-3 align-top font-semibold">
                  <a href={f.url} rel="noopener noreferrer">
                    {f.nome}
                  </a>
                  <span className="mt-1 block font-normal text-[var(--pa-muted)]">
                    Licenza: {f.licenza}
                  </span>
                </th>
                <td className="py-3 pr-3 align-top">
                  <strong>{f.chi}.</strong> {f.aggiornamento}
                </td>
                <td className="py-3 align-top">{f.inClasse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Catalogo completo, moduli opzionali e note di configurazione:{" "}
        <Link href="/fonti">/fonti</Link>.
      </p>
    </ScuolaChrome>
  );
}
