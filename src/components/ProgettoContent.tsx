import { LandingDoc } from "@/components/LandingDoc";
import {
  countCruscottiEsistentiInLettere,
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
      lede="Ho iniziato da San Vincenzo perché mi sembrava utile vedere, in un unico posto, dati che esistevano già ma stavano sparsi. Da quel cruscotto è nata l’idea di un template che altri comuni possano usare."
    >
      <section>
        <h2 className="text-xl font-bold">Cosa trovi su questo sito</h2>
        <p>
          La guida, i cruscotti già online, un percorso per le scuole, testi
          per l’ente e l’elenco delle fonti. Non è la dashboard di un comune:
          è la porta di ingresso al progetto.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Il template</h2>
        <p>
          Se vuoi creare un cruscotto nuovo, parti da{" "}
          <a href={github} target="_blank" rel="noopener noreferrer">
            {github.replace("https://", "")}
          </a>
          . È una versione pulita: niente dati di {primo.nome}. L’identità del
          comune sta in un file, <code>config/comune.json</code>. I numeri
          nazionali arrivano da{" "}
          <a href="https://cruscotto-italia.dati.gov.it/">
            Cruscotto Italia (AgID)
          </a>
          , un servizio pubblico, e da altre API aperte.
        </p>
        <p>
          Ogni installazione è dedicata a un singolo comune. Non è un sito
          istituzionale e non sostituisce albo pretorio o Amministrazione
          Trasparente.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">I cruscotti già esistenti</h2>
        <p>
          Oggi sono {countCruscottiEsistentiInLettere()}. Il primo è{" "}
          <a href={getDemoUrl()} target="_blank" rel="noopener noreferrer">
            {getDemoLabel()}
          </a>
          . L’elenco, con la mappa, è in{" "}
          <Link href="/comuni">Comuni</Link>.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Limiti, detti chiaro</h2>
        <p>
          Il progetto è indipendente. Non è affiliato ad AgID, al Governo, a
          una Regione o a un Comune. I numeri restano quelli delle fonti: se
          serve un atto ufficiale, si torna al dataset originale.
        </p>
        <p>
          Cruscotto San Vincenzo resta il progetto completo da consultare come
          esempio. Per crearne uno nuovo si parte dal template, non da una
          copia di San Vincenzo da «svuotare».
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Come è nato</h2>
        <p>
          Il primo cruscotto l’ho fatto io,{" "}
          <a href={`mailto:${PROJECT_ORIGIN.author.email}`}>
            {PROJECT_ORIGIN.author.name}
          </a>
          , per {PROJECT_ORIGIN.comune_demo}. Funziona, è specifico di quella
          costa (porto, ARPAT, orari bus toscani, webcam) e va lasciato così.
        </p>
        <p>
          Il template è il passo successivo: stessa idea, nessun dato
          territoriale fisso nel codice, moduli disattivati di default. Questo
          sito indica il template e i comuni che l’hanno già usato.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Tecnologie</h2>
        <p>
          Next.js, TypeScript, Tailwind. Grafici con Chart.js, mappe con
          Leaflet, un pezzo di rilievo 3D con Three.js. I KPI comunali
          arrivano dal MCP pubblico di AgID. L’hosting tipico è Vercel: per la
          versione base non servono chiavi API.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">A seconda di chi sei</h2>
        <ul>
          <li>
            <Link href="/comuni">Cittadino</Link> — i cruscotti già nati, sulla
            mappa
          </li>
          <li>
            <Link href="/guida">Chi vuole provarci</Link> — una guida breve,
            tutta nel browser
          </li>
          <li>
            <Link href="/riusa">Chi configura il comune</Link> — il file JSON,
            i moduli, Vercel
          </li>
          <li>
            <Link href="/scuola">Insegnanti</Link> — due binari, otto lezioni
          </li>
          <li>
            <Link href="/kit-ente">Ente</Link> — testi da copiare, con il
            disclaimer al posto giusto
          </li>
          <li>
            <Link href="/fonti">Chi guarda i numeri</Link> — fonti e licenze
          </li>
          <li>
            <Link href="/menzioni">Chi pubblica un fork</Link> — cosa citare e
            cosa non toccare
          </li>
          <li>
            <Link href="/suggerisci">Chi ha un’idea</Link> — diventa una issue
            su GitHub
          </li>
        </ul>
      </section>
    </LandingDoc>
  );
}
