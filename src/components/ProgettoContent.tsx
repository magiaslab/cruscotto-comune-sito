import { LandingDoc } from "@/components/LandingDoc";
import {
  countCruscottiEsistentiInLettere,
  fraseCruscottiEsistenti,
  getPrimoCruscotto,
} from "@/lib/cruscotti-rete";
import { PROJECT_ORIGIN } from "@/lib/project-origin";
import {
  getDemoLabel,
  getDemoUrl,
  getProductName,
  getTemplateGithubUrl,
} from "@/lib/product";
import Link from "next/link";

export function ProgettoContent() {
  const product = getProductName();
  const github = getTemplateGithubUrl();
  const primo = getPrimoCruscotto();
  return (
    <LandingDoc
      kicker="Il progetto"
      title={product}
      lede={`Questo minisito è lo strumento di divulgazione e l’hub dei progetti. Il template vuoto da forkare è su GitHub; oggi ${fraseCruscottiEsistenti()}.`}
    >
      <section>
        <h2 className="text-xl font-bold">Cosa è questo sito</h2>
        <p>
          {product} su questo dominio raccoglie i progetti, la guida al riuso, il
          percorso scuola, il kit per l’ente e le fonti. Non è una dashboard e
          non si forka.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Il template da forkare</h2>
        <p>
          Il codice <strong>generico</strong> da cui far partire un nuovo
          cruscotto comunale sta su{" "}
          <a href={github} target="_blank" rel="noopener noreferrer">
            {github.replace("https://", "")}
          </a>
          . Legge l’identità da <code>config/comune.json</code>, parla con l’MCP
          pubblico{" "}
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
        <h2 className="text-xl font-bold">I cruscotti già esistenti</h2>
        <p>
          Oggi sono {countCruscottiEsistentiInLettere()}. Il primo è{" "}
          <a href={getDemoUrl()} target="_blank" rel="noopener noreferrer">
            {getDemoLabel()}
          </a>{" "}
          ({primo.nome}). L’elenco completo, con mappa, è nella pagina{" "}
          <Link href="/comuni">Comuni</Link>.
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
            Non è più il «fork con i dati di {primo.nome} da cancellare a mano».
            Quella istanza resta{" "}
            <a href={getDemoUrl()} target="_blank" rel="noopener noreferrer">
              {getDemoLabel()}
            </a>
            , progetto finito sul proprio dominio: si legge, non si forka.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold">Come è nato</h2>
        <p>
          Il primo cruscotto è quello di {PROJECT_ORIGIN.comune_demo}, realizzato
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
          opzionali spenti di default. Questo minisito è lo strumento di
          divulgazione e l’hub: indica il template e i {countCruscottiEsistentiInLettere()}{" "}
          cruscotti già esistenti.
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
