import { JsonLd } from "@/components/JsonLd";
import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import { FAQ, scuolaFaqJsonLd, scuolaPageMetadata } from "@/lib/scuola";

export const metadata = scuolaPageMetadata({
  title: "Domande dei docenti",
  description:
    "Account e minorenni, rete della scuola, costi, supporto, disclaimer non ufficiale. FAQ del percorso Cruscotto Comune a scuola.",
  path: "/scuola/faq",
});

export default function Page() {
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: "/scuola/faq", label: "FAQ" },
      ]}
    >
      <JsonLd data={scuolaFaqJsonLd()} id="faq-jsonld" />
      <h1 className="mb-4 mt-0 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        Domande dei docenti
      </h1>
      <p>
        Risposte sui cinque vincoli reali — account, rete, costi, supporto, non
        ufficiale — e su come combinare i due binari. Tutto il testo è nel
        markup: si legge anche con JavaScript disabilitato.
      </p>
      <div className="mt-6 space-y-3">
        {FAQ.map((f) => (
          <details key={f.id} className="guide-card">
            <summary className="font-bold text-[var(--pa-ink)]">{f.domanda}</summary>
            <p className="mb-0 mt-3 text-[var(--pa-muted)]">{f.risposta}</p>
          </details>
        ))}
      </div>
    </ScuolaChrome>
  );
}
