import Link from "next/link";
import { LandingDoc } from "@/components/LandingDoc";
import { AUTHOR, SITE } from "@/lib/product";

const SITO_COMUNALE = `Il Comune segnala un cruscotto indipendente di dati aperti, realizzato riusando ${SITE.name} di ${AUTHOR.name}. Non è un canale ufficiale dell’ente: non sostituisce albo pretorio, Amministrazione Trasparente né i servizi demografici. Serve a consultare in un unico posto indicatori pubblici (demografia, scuole, finanza, ambiente, servizi utili) provenienti da fonti nazionali come Cruscotto Italia (AgID).`;

const COMUNICATO = `COMUNICATO STAMPA
${SITE.name} — dashboard di dati aperti comunali

È online un cruscotto indipendente sui dati aperti del Comune di ________.

Il sito raccoglie informazioni già pubbliche (ISTAT, AgID, open data nazionali e, dove previsti, dataset locali) e le mostra in sezioni consultabili: servizi utili, territorio, economia, scuole, ambiente.

Non è un sito istituzionale e non è affiliato al Comune, ad AgID o al Governo italiano. I numeri restano quelli delle fonti originali: per un atto ufficiale si torna sempre al dataset di provenienza.

Il lavoro riusa il template open source ${SITE.name} di ${AUTHOR.name}, partito dal cruscotto di San Vincenzo. Codice e guida: ${SITE.url}

Contatti progetto: ${AUTHOR.email}`;

const SOCIAL = `Dashboard indipendente dei dati aperti del Comune di ________, realizzata riusando ${SITE.name}. Non è un canale ufficiale dell’ente. ${SITE.url}`;

const EMAIL_COLLEGHI = `Ciao,

ho messo online un cruscotto di dati aperti per il Comune di ________ (circa un’ora di lavoro, senza server propri). I numeri arrivano da Cruscotto Italia (AgID) e da altre fonti pubbliche.

Non è il sito del Comune: è uno strumento civico, con il disclaimer «non ufficiale» ben visibile.

Se ti è utile, la guida è qui: ${SITE.url}/guida
Kit per l’ente (testi da copiare): ${SITE.url}/kit-ente

${AUTHOR.name}
${AUTHOR.email}`;

export function KitEnteContent() {
  return (
    <LandingDoc
      kicker="Kit ente"
      title="Testi pronti per l’amministrazione"
      lede="Un paragrafo per il sito comunale, un comunicato, un post. Da copiare e adattare. Resta il punto fermo: il cruscotto non è l’ente."
    >
      <p>
        Questi testi non sostituiscono una delibera né un parere del
        responsabile della comunicazione. Servono a non partire da una pagina
        bianca, e a non far passare il cruscotto per un canale ufficiale.
      </p>
      <p>
        Le menzioni obbligatorie (autore, template, «non ufficiale») sono anche
        in <Link href="/menzioni">Menzioni</Link>.
      </p>

      <h2 className="guide-h2">Box per il sito comunale</h2>
      <p>Un paragrafo in «Novità» o in «Dati e trasparenza»:</p>
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-[var(--pa-surface-soft)] p-4 text-xs leading-relaxed">
        {SITO_COMUNALE}
      </pre>

      <h2 className="guide-h2">Comunicato stampa</h2>
      <p>Sostituisci gli spazi vuoti con il nome del comune e l’URL del fork.</p>
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-[var(--pa-surface-soft)] p-4 text-xs leading-relaxed">
        {COMUNICATO}
      </pre>

      <h2 className="guide-h2">Post social</h2>
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-[var(--pa-surface-soft)] p-4 text-xs leading-relaxed">
        {SOCIAL}
      </pre>

      <h2 className="guide-h2">Mail a un collega di un altro comune</h2>
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-[var(--pa-surface-soft)] p-4 text-xs leading-relaxed">
        {EMAIL_COLLEGHI}
      </pre>

      <aside className="guide-callout">
        <p className="m-0 font-bold">Cosa non scrivere</p>
        <ul className="mb-0 mt-2 list-disc pl-5">
          <li>Che il cruscotto è «il nuovo sito del Comune».</li>
          <li>Che i numeri sono certificati dall’ente.</li>
          <li>Loghi AgID, Governo o Regione come se foste affiliati.</li>
        </ul>
      </aside>

      <p>
        Hai bisogno di una revisione del testo?{" "}
        <a href={`mailto:${AUTHOR.email}`}>{AUTHOR.email}</a>
        {" · "}
        <Link href="/guida">Guida</Link>
        {" · "}
        <Link href="/comuni">Comuni già nati</Link>.
      </p>
    </LandingDoc>
  );
}
