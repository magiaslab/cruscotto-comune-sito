import { LandingDoc } from "@/components/LandingDoc";
import { PROJECT_ORIGIN } from "@/lib/project-origin";
import { getDemoLabel, getDemoUrl, getProductName } from "@/lib/product";
import Link from "next/link";

export function ProgettoContent() {
  const product = getProductName();
  return (
    <LandingDoc
      kicker="Il progetto"
      title={product}
      lede="Un template Next.js per pubblicare i dati aperti di un comune italiano, senza backend, senza database e senza dati copiati da un altro ente."
    >
      <section>
        <h2 className="text-xl font-bold">Cosa è</h2>
        <p>
          {product} è il codice <strong>generico</strong> da cui far partire un
          nuovo cruscotto comunale. Legge l’identità da{" "}
          <code>config/comune.json</code>, parla con l’MCP pubblico{" "}
          <a href="https://cruscotto-italia.dati.gov.it/">Cruscotto Italia (AgID)</a>{" "}
          e con altre API aperte, e mostra una dashboard a sidebar (KPI, mappe,
          grafici).
        </p>
        <p>
          Non è un prodotto multi-tenant: <strong>un deploy = un comune</strong>.
          Non è un sito istituzionale. È uno strumento civico indipendente.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Cosa non è</h2>
        <ul>
          <li>Non è affiliato ad AgID, al Governo, a una Regione o a un Comune.</li>
          <li>
            Non sostituisce l’albo pretorio, l’Amministrazione Trasparente o i
            canali ufficiali dell’ente.
          </li>
          <li>
            Non è più il «fork con i dati di San Vincenzo da cancellare a mano».
            Quella istanza resta{" "}
            <a href={getDemoUrl()} target="_blank" rel="noopener noreferrer">
              {getDemoLabel()}
            </a>
            , progetto finito sul proprio dominio.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold">Come è nato</h2>
        <p>
          Il primo esemplare è il Cruscotto {PROJECT_ORIGIN.comune_demo}, realizzato
          da{" "}
          <a href={`mailto:${PROJECT_ORIGIN.author.email}`}>
            {PROJECT_ORIGIN.author.name}
          </a>
          . Funziona, è specifico di quel territorio (costa, porto, ARPAT, GTFS
          Toscana, webcam, …) e va lasciato così.
        </p>
        <p>
          Il template da forkare è il passo successivo: stessa stack, stessa
          idea, <strong>nessun dato territoriale hardcoded</strong>, moduli
          opzionali spenti di default. Questo minisito è solo la vetrina.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Stack</h2>
        <ul>
          <li>Next.js 16 (App Router) + TypeScript + Tailwind</li>
          <li>Chart.js, Leaflet, Three.js</li>
          <li>MCP AgID per i KPI comunali</li>
          <li>Vercel per l’hosting (nessuna env obbligatoria)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold">Dove andare</h2>
        <ul>
          <li>
            <Link href="/comuni">Comuni</Link> — mappa e siti già nati
          </li>
          <li>
            <Link href="/guida">Guida in 10 minuti</Link> — dal browser, senza installare
          </li>
          <li>
            <Link href="/riusa">Riuso</Link> — fork, Vercel, file del comune
          </li>
          <li>
            <Link href="/kit-ente">Kit ente</Link> — testi per sito comunale e comunicato
          </li>
          <li>
            <Link href="/novita">Novità</Link> — cosa è cambiato
          </li>
          <li>
            <Link href="/fonti">Fonti</Link> — catalogo nazionale vs opzionale
          </li>
          <li>
            <Link href="/menzioni">Menzioni</Link> — testi da tenere nei fork
          </li>
          <li>
            <Link href="/sostieni">Supporto</Link> — contributo all’autore
          </li>
        </ul>
      </section>
    </LandingDoc>
  );
}
