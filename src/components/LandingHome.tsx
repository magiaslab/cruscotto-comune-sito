import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import {
  GitFork,
  Landmark,
  LayoutGrid,
  Map,
  Scale,
  Sparkles,
  ToggleLeft,
} from "lucide-react";
import { GitHubMark, VercelMark } from "@/components/BrandMarks";
import {
  countCruscottiEsistentiInLettere,
  fraseCruscottiEsistenti,
  getAltriCruscotti,
  getPrimoCruscotto,
} from "@/lib/cruscotti-rete";
import { FONTI } from "@/lib/fonti";
import { PROJECT_ORIGIN } from "@/lib/project-origin";
import {
  getDemoLabel,
  getDemoUrl,
  getProductName,
  getProductTagline,
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
          <p className="m-0 text-sm font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
            Divulgazione · Hub dei progetti
          </p>
          <h1 className="mb-4 mt-2 max-w-3xl text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-5xl">
            {product}
          </h1>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--pa-muted)] sm:text-xl">
            {getProductTagline()}. Il codice da forkare è il template vuoto su
            GitHub: niente dati di {primo.nome}, moduli accendibili, fonti
            nazionali già pronte. Oggi {fraseCruscottiEsistenti()}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Cta href="/guida">Guida in 10 minuti</Cta>
            <Cta href="/riusa" variant="ghost">
              Guida al riuso
            </Cta>
            <Cta href="/comuni" variant="ghost">
              Comuni sulla mappa
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-[var(--pa-ink)]">
          Perché un template, non un fork da San Vincenzo
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <GitFork className="mb-3 h-8 w-8 text-[var(--pa-primary)]" aria-hidden />
            <h3 className="mb-2 text-lg font-bold text-[var(--pa-ink)]">
              Riuso pulito
            </h3>
            <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
              Il cruscotto di San Vincenzo resta un progetto finito sul suo
              dominio. I nuovi fork partono da qui: config vuota, feature
              spente, nessuna spiaggia o webcam copiata per sbaglio.
            </p>
          </article>
          <article className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <ToggleLeft className="mb-3 h-8 w-8 text-[var(--pa-primary)]" aria-hidden />
            <h3 className="mb-2 text-lg font-bold text-[var(--pa-ink)]">
              Moduli on/off
            </h3>
            <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
              Porto, balneazione, treni, GTFS, eventi scrape, ARPA, biblioteca,
              WFS idrico, RAG e bot Telegram si accendono in{" "}
              <code className="rounded bg-[var(--pa-surface-soft)] px-1">
                config/comune.json
              </code>
              . Il nucleo ISTAT funziona ovunque.
            </p>
          </article>
          <article className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <Scale className="mb-3 h-8 w-8 text-[var(--pa-primary)]" aria-hidden />
            <h3 className="mb-2 text-lg font-bold text-[var(--pa-ink)]">
              Menzioni chiare
            </h3>
            <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
              Resta il credito ad Alessandro Cipriani, al primo esemplare e a
              Francesco Piero Paolicelli (Piersoft) per Cruscotto Italia. Resta
              il disclaimer «non ufficiale». La guida{" "}
              <Link href="/menzioni">Menzioni</Link> ha i testi da copiare.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-[var(--pa-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-2 text-2xl font-bold text-[var(--pa-ink)]">
            Comuni, kit e novità
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
            Oggi {countCruscottiEsistentiInLettere()} cruscotti già esistenti. Il
            primo è {primo.nome}
            {altri.length > 0
              ? `; gli altri sono ${altri
                  .map((c) =>
                    c.status === "in_sviluppo"
                      ? `${c.nome} (in anteprima)`
                      : c.nome,
                  )
                  .join(" e ")}`
              : ""}
            . Per l’ente ci sono testi da copiare; per tutti, una cronologia di
            quello che è cambiato. Per segnalare un cruscotto già fatto: form su{" "}
            <Link href="/comuni">Comuni</Link>. Per un’idea sul sito:{" "}
            <Link href="/suggerisci">Suggerisci</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Cta href="/comuni">Mappa dei comuni</Cta>
            <Cta href="/kit-ente" variant="ghost">
              Kit ente
            </Cta>
            <Cta href="/novita" variant="ghost">
              Novità
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-2 text-2xl font-bold text-[var(--pa-ink)]">
          Cosa è nazionale, cosa si accende
        </h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
            Un deploy = un comune. Compili il codice ISTAT e le coordinate: i
            KPI AgID arrivano da soli. Il resto è un interruttore.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[var(--pa-ink)]">
                <Landmark className="h-5 w-5 text-[var(--pa-success)]" aria-hidden />
                Nucleo nazionale
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
                Moduli opzionali
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
              Catalogo completo delle fonti →
            </Link>
          </p>
      </section>

      <SezioniTeaser />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-[var(--pa-ink)]">
          Tre passi per un nuovo comune
        </h2>
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">1</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Fork e Vercel</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              Fork GitHub, import su Vercel. Nessuna env obbligatoria: l’MCP
              AgID è pubblico.
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">2</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Identità</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              Copia <code>config/comune.example.json</code>, ISTAT, coordinate,
              stemma, <code>site.mode=dashboard</code>, spegni i moduli che non
              hai.
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">3</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Dati locali</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              <code>npm run dae:sync</code>, <code>omi:update</code>, opzionale{" "}
              <code>trasporti:gtfs</code>. Smoke: <code>/api/kpi</code> deve
              rispondere con il tuo comune.
            </p>
          </li>
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Cta href="/riusa">Apri la guida completa</Cta>
          <Cta href="/guida" variant="ghost">
            In 10 minuti
          </Cta>
          <Cta href={getVercelDeployUrl()} variant="ghost" external>
            <VercelMark size={16} />
            Deploy su Vercel
          </Cta>
        </div>
      </section>

      <section className="border-t border-[var(--pa-border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold text-[var(--pa-ink)]">
              <Map className="h-6 w-6 text-[var(--pa-primary)]" aria-hidden />
              Primo esemplare
            </h2>
            <p className="text-sm leading-relaxed text-[var(--pa-muted)]">
              {getDemoLabel()} è il progetto finito, in produzione, da cui è
              nato questo template. Resta indipendente sul proprio dominio: non
              va «svuotato» per fare spazio agli altri comuni.
            </p>
            <Cta href={demo} variant="ghost" external>
              Apri {getDemoLabel()}
            </Cta>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
              Codice da forkare
            </h2>
            <p className="text-sm leading-relaxed text-[var(--pa-muted)]">
              Il template è una dashboard vuota: dopo il fork, con ISTAT
              valorizzato, diventa il cruscotto del tuo comune. Questo minisito
              è lo strumento di divulgazione e l’hub dei progetti: non si forka.
            </p>
            <Cta href={fork} variant="ghost" external>
              <GitHubMark size={16} />
              Apri il template su GitHub
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
          Sostieni il progetto
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Hosting, compute e tempo sono a carico di {PROJECT_ORIGIN.author.name}.
          Un caffè su Buy Me a Coffee aiuta a tenere online il template e il
          primo esemplare. I fork possono (e devono) usare il proprio slug, non
          quello dell’autore.
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
          Sezioni del cruscotto
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Ogni pagina ha un set di dati e una o più fonti. Il nucleo funziona con
          il codice ISTAT; i moduli si accendono in config. Gli screenshot
          arrivano da San Vincenzo, il primo cruscotto in produzione.
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
