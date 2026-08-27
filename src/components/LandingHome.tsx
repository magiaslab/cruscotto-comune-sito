import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { Landmark, LayoutGrid, Map, Sparkles } from "lucide-react";
import { GitHubMark, VercelMark } from "@/components/BrandMarks";
import {
  countCruscottiEsistentiInLettere,
  getAltriCruscotti,
  getPrimoCruscotto,
} from "@/lib/cruscotti-rete";
import { FONTI } from "@/lib/fonti";
import { PROJECT_ORIGIN } from "@/lib/project-origin";
import {
  getDemoLabel,
  getDemoUrl,
  getProductName,
  getTemplateForkUrl,
  getVercelDeployUrl,
} from "@/lib/product";
import { SEZIONI_AMBITO_LABEL, sezioniInHome } from "@/lib/sezioni";

const NAZIONALI = FONTI.filter((f) => f.ambito === "nazionale");
const OPZIONALI = FONTI.filter((f) => f.ambito === "opzionale");

function Cta({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const cls =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--pa-primary)] px-4 text-sm font-bold text-white no-underline hover:bg-[var(--pa-primary-hover)]"
      : "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--pa-border)] bg-white px-4 text-sm font-semibold text-[var(--pa-ink)] no-underline hover:border-[var(--pa-primary)]";
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function LandingHome() {
  const product = getProductName();
  const demo = getDemoUrl();
  const fork = getTemplateForkUrl();
  const primo = getPrimoCruscotto();
  const altri = getAltriCruscotti();

  return (
    <>
      <section className="border-b border-[var(--pa-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="mb-4 mt-0 max-w-3xl text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-5xl">
            {product}
          </h1>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--pa-muted)] sm:text-xl">
            Qui trovi i cruscotti di dati aperti già online e quello che serve
            per crearne uno dedicato al tuo comune. Ho iniziato da {primo.nome},
            mettendo insieme dati che esistevano già ma stavano sparsi tra
            portali diversi. Poi ho preparato un template pulito, senza i dati
            di quel territorio, così altri possono fare lo stesso.
          </p>
          <div className="flex flex-wrap gap-3">
            <Cta href="/comuni">Vedi i cruscotti</Cta>
            <Cta href="/guida" variant="ghost">
              Apri la guida
            </Cta>
            <Cta href={fork} variant="ghost" external>
              <GitHubMark size={16} />
              Crea una copia su GitHub
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-[var(--pa-ink)]">
          Come è andata
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)] sm:text-base">
          Cruscotto San Vincenzo è il progetto completo, sul suo dominio. Lo
          consulti come esempio: farmacie di turno, treni, rifiuti, porto, chi
          siede in giunta. Per un comune nuovo si parte dal template su GitHub,
          una versione senza spiagge, webcam o path della Toscana copiati per
          sbaglio.
        </p>
        <p className="mb-0 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)] sm:text-base">
          Ogni installazione è dedicata a un singolo comune. I numeri nazionali
          arrivano da Cruscotto Italia (AgID) con il codice ISTAT. Il resto —
          porto, balneazione, treni, orari bus in formato GTFS, bot Telegram —
          si attiva solo se quel territorio ce l’ha. Il credito ad Alessandro
          Cipriani, a San Vincenzo e a Francesco Piero Paolicelli (Piersoft)
          per Cruscotto Italia resta. Il disclaimer «non ufficiale» anche. I
          testi da copiare sono in{" "}
          <Link href="/menzioni">Menzioni</Link>.
        </p>
      </section>

      <section className="border-y border-[var(--pa-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-2 text-2xl font-bold text-[var(--pa-ink)]">
            Chi c’è già
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
            Oggi {countCruscottiEsistentiInLettere()} comuni: {primo.nome}
            {altri.length > 0
              ? ` e ${altri
                  .map((c) =>
                    c.status === "in_sviluppo"
                      ? `${c.nome} (ancora in anteprima)`
                      : c.nome,
                  )
                  .join(" e ")}`
              : ""}
            . Se ne hai fatto uno, segnalalo dalla pagina Comuni. Se hai
            un’idea su questo sito, c’è{" "}
            <Link href="/suggerisci">Suggerisci</Link>. Per l’ente, testi già
            scritti nel{" "}
            <Link href="/kit-ente">kit</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Cta href="/comuni">Vedi i cruscotti</Cta>
            <Cta href="/kit-ente" variant="ghost">
              Kit per l’ente
            </Cta>
            <Cta href="/novita" variant="ghost">
              Novità
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-2 text-2xl font-bold text-[var(--pa-ink)]">
          Da dove arrivano i numeri
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Compili il codice ISTAT e le coordinate: gli indicatori di AgID
          arrivano da soli. Il resto è un interruttore nel file del comune.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[var(--pa-ink)]">
              <Landmark className="h-5 w-5 text-[var(--pa-success)]" aria-hidden />
              Fonti nazionali
            </h3>
            <ul className="m-0 list-none space-y-2 p-0">
              {NAZIONALI.map((f) => (
                <li
                  key={f.nome}
                  className="rounded-lg border border-[var(--pa-border)] px-3 py-2 text-sm"
                >
                  <strong className="text-[var(--pa-ink)]">{f.nome}</strong>
                  <span className="block text-[var(--pa-muted)]">{f.nota}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[var(--pa-ink)]">
              <Sparkles className="h-5 w-5 text-[var(--pa-warning)]" aria-hidden />
                Se il comune ce l’ha
            </h3>
            <ul className="m-0 list-none space-y-2 p-0">
              {OPZIONALI.map((f) => (
                <li
                  key={f.nome}
                  className="rounded-lg border border-[var(--pa-border)] px-3 py-2 text-sm"
                >
                  <strong className="text-[var(--pa-ink)]">{f.nome}</strong>
                  {f.feature ? (
                    <code className="ml-2 text-xs text-[var(--pa-muted)]">
                      features.{f.feature}
                    </code>
                  ) : null}
                  <span className="block text-[var(--pa-muted)]">{f.nota}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mb-0 mt-6">
          <Link href="/fonti" className="font-semibold">
            Elenco completo delle fonti →
          </Link>
        </p>
      </section>

      <SezioniTeaser />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
          Se vuoi farne uno
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Non serve scrivere codice. Serve un account GitHub, uno su Vercel
          (entri con GitHub) e il codice ISTAT del comune. Per la versione
          base non ci sono variabili d’ambiente o chiavi API da configurare:
          l’accesso a Cruscotto Italia è pubblico.
        </p>
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">1</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Copia e pubblica</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              Crea una copia del template sul tuo account GitHub (il cosiddetto
              fork) e collegalo a Vercel. Dopo qualche minuto hai un indirizzo
              <code className="ml-1">.vercel.app</code>.
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">2</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Il file del comune</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              In <code>config/comune.json</code> metti nome, ISTAT, coordinate,
              stemma. Disattiva i moduli che non ti servono: un comune interno
              non deve mostrare il porto.
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">3</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Controlla i numeri</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              Apri <code>/api/kpi</code> sul tuo sito: deve comparire il tuo
              comune. Se programmi, in locale puoi aggiornare defibrillatori e
              quotazioni immobiliari con gli script del template.
            </p>
          </li>
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Cta href="/riusa">Apri la guida al riuso</Cta>
          <Cta href="/guida" variant="ghost">
            Versione breve
          </Cta>
          <Cta href={getVercelDeployUrl()} variant="ghost" external>
            <VercelMark size={16} />
            Pubblica su Vercel
          </Cta>
        </div>
      </section>

      <section className="border-t border-[var(--pa-border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold text-[var(--pa-ink)]">
              <Map className="h-6 w-6 text-[var(--pa-primary)]" aria-hidden />
              Il primo cruscotto
            </h2>
            <p className="text-sm leading-relaxed text-[var(--pa-muted)]">
              {getDemoLabel()} resta indipendente sul proprio dominio. È il
              progetto finito da cui è nata l’idea del template: si consulta,
              non si copia per farne un altro comune.
            </p>
            <Cta href={demo} variant="ghost" external>
              Apri {getDemoLabel()}
            </Cta>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
              Il template
            </h2>
            <p className="text-sm leading-relaxed text-[var(--pa-muted)]">
              Una dashboard vuota: dopo la copia su GitHub, con ISTAT e
              coordinate compilati, diventa il cruscotto del tuo comune. Questo
              sito spiega il progetto e raccoglie quelli già nati.
            </p>
            <Cta href={fork} variant="ghost" external>
              <GitHubMark size={16} />
              Crea una copia su GitHub
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
          Se ti è utile
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Hosting, compute e tempo li pago io, {PROJECT_ORIGIN.author.name}. Un
          caffè su Buy Me a Coffee aiuta a tenere online il template e San
          Vincenzo. Se fai un cruscotto tuo, usa il tuo indirizzo Buy Me a
          Coffee, non il mio.
        </p>
        <Cta href="/sostieni">Pagina Supporto</Cta>
      </section>
    </>
  );
}

function SezioniTeaser() {
  const sezioni = sezioniInHome();
  const dir = join(process.cwd(), "public", "sezioni");

  return (
    <section className="border-y border-[var(--pa-border)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold text-[var(--pa-ink)]">
          <LayoutGrid className="h-6 w-6 text-[var(--pa-primary)]" aria-hidden />
          Cosa c’è dentro un cruscotto
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Ogni pagina mostra un pezzo di territorio e dice da dove arrivano i
          numeri. Gli screenshot sono di San Vincenzo, il primo online.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {sezioni.map((sezione) => {
            const shot =
              sezione.screenshot &&
              existsSync(join(dir, `${sezione.id}.jpg`));
            return (
              <article
                key={sezione.id}
                className="overflow-hidden rounded-xl border border-[var(--pa-border)] bg-[var(--background)]"
              >
                {shot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sezione.screenshot}
                    alt={`Schermata della sezione ${sezione.label} sul cruscotto di San Vincenzo.`}
                    className="h-40 w-full object-cover object-top"
                    width={1280}
                    height={800}
                  />
                ) : null}
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
                    {SEZIONI_AMBITO_LABEL[sezione.ambito]}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-[var(--pa-ink)]">
                    <Link href={`/sezioni#${sezione.id}`}>{sezione.label}</Link>
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
                    {sezione.intro}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mb-0 mt-6">
          <Link href="/sezioni" className="font-semibold">
            Tutte le sezioni, con dati e fonti →
          </Link>
        </p>
      </div>
    </section>
  );
}
