import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { Coffee, Landmark, LayoutGrid, Sparkles } from "lucide-react";
import { GitHubMark } from "@/components/BrandMarks";
import {
  countCruscottiEsistentiInLettere,
  getAltriCruscotti,
  getPrimoCruscotto,
} from "@/lib/cruscotti-rete";
import { FONTI } from "@/lib/fonti";
import {
  AUTHOR,
  SITE,
  getDemoLabel,
  getProductName,
  getProductTagline,
  getTemplateForkUrl,
  getTemplateGithubUrl,
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
  variant?: "primary" | "ghost" | "coffee";
  external?: boolean;
}) {
  const cls =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--pa-primary)] px-4 text-sm font-bold text-white no-underline hover:bg-[var(--pa-primary-hover)]"
      : variant === "coffee"
        ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#FFDD00] px-4 text-sm font-bold text-[#0d0c22] no-underline hover:brightness-95"
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
  const fork = getTemplateForkUrl();
  const github = getTemplateGithubUrl();
  const primo = getPrimoCruscotto();
  const altri = getAltriCruscotti();
  const comuniNomi = [primo, ...altri].map((c) =>
    c.status === "in_sviluppo" ? `${c.nome} (in anteprima)` : c.nome,
  );
  const comuniElenco =
    comuniNomi.length <= 1
      ? (comuniNomi[0] ?? "")
      : `${comuniNomi.slice(0, -1).join(", ")} e ${comuniNomi.at(-1)}`;

  return (
    <>
      <section className="border-b border-[var(--pa-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="mb-4 mt-0 max-w-3xl text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-5xl">
            {product}
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-[var(--pa-muted)] sm:text-xl">
            {getProductTagline()}
          </p>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)] sm:text-base">
            {product} è un progetto indipendente e open source che mostra
            dashboard di dati aperti per piccoli e medi comuni italiani, con
            informazioni utili su servizi, ambiente, territorio e molto altro.
          </p>
          <div className="flex flex-wrap gap-3">
            <Cta href="/guida">Inizia subito</Cta>
            <Cta href={github} variant="ghost" external>
              <GitHubMark size={16} />
              Scopri il template
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-[var(--pa-ink)]">
          Cosa puoi trovare qui
        </h2>
        <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <h3 className="mb-2 mt-0 text-lg font-bold">Cruscotti già online</h3>
            <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
              Dashboard già funzionanti per {countCruscottiEsistentiInLettere()}{" "}
              comuni: {comuniElenco}.
            </p>
            <p className="mb-0 mt-3">
              <Link href="/comuni" className="text-sm font-semibold">
                Vedi i cruscotti →
              </Link>
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <h3 className="mb-2 mt-0 text-lg font-bold">Un template da copiare</h3>
            <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
              Una dashboard vuota, da copiare su GitHub, per costruire il
              cruscotto del tuo comune. Non si copia un cruscotto già esistente.
            </p>
            <p className="mb-0 mt-3">
              <a
                href={fork}
                className="text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Copia su GitHub →
              </a>
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <h3 className="mb-2 mt-0 text-lg font-bold">Fonti ufficiali</h3>
            <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
              Una raccolta di fonti dati ufficiali. Gli indicatori nazionali si
              aggiornano da soli, ogni giorno.
            </p>
            <p className="mb-0 mt-3">
              <Link href="/fonti" className="text-sm font-semibold">
                Elenco delle fonti →
              </Link>
            </p>
          </li>
        </ul>
      </section>

      <section className="border-y border-[var(--pa-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-[var(--pa-ink)]">
            Perché usare {product}
          </h2>
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
            <li className="rounded-xl border border-[var(--pa-border)] p-5">
              <h3 className="mb-2 mt-0 text-lg font-bold">Dati dalle fonti ufficiali</h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
                Aggregati e filtrati direttamente dalle fonti, senza bisogno di
                programmazione.
              </p>
            </li>
            <li className="rounded-xl border border-[var(--pa-border)] p-5">
              <h3 className="mb-2 mt-0 text-lg font-bold">Facili da consultare</h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
                Dashboard pensate per cittadini, amministratori e chi vuole
                capire il territorio.
              </p>
            </li>
            <li className="rounded-xl border border-[var(--pa-border)] p-5">
              <h3 className="mb-2 mt-0 text-lg font-bold">Indipendente e aperto</h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
                Un progetto trasparente, open source, tenuto su da {AUTHOR.name}.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
          Come funziona
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Si parte dal template su GitHub, non da {getDemoLabel()} né da questo
          sito. Servono un account GitHub, uno su Vercel e il codice ISTAT del
          comune.
        </p>
        <ol className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">1</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Scegli il template</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              Aprilo su GitHub e crea una copia sul tuo account.
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">2</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Personalizza</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              In <code>config/comune.json</code> metti nome, ISTAT, coordinate e
              le mappe del tuo comune.
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">3</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Pubblica</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              Collegalo a Vercel: hosting gratuito, dopo pochi minuti hai un
              indirizzo <code>.vercel.app</code>.
            </p>
          </li>
          <li className="rounded-xl border border-[var(--pa-border)] bg-white p-5">
            <p className="m-0 text-sm font-bold text-[var(--pa-primary)]">4</p>
            <h3 className="mb-2 mt-1 text-lg font-bold">Si aggiorna da sola</h3>
            <p className="m-0 text-sm text-[var(--pa-muted)]">
              La dashboard riprende i dati dalle fonti ufficiali ogni giorno.
            </p>
          </li>
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Cta href="/guida">Inizia subito</Cta>
          <Cta href="/riusa" variant="ghost">
            Guida al riuso
          </Cta>
        </div>
      </section>

      <SezioniTeaser />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-2 text-2xl font-bold text-[var(--pa-ink)]">
          Da dove arrivano i numeri
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)]">
          Compili il codice ISTAT e le coordinate: gli indicatori nazionali
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

      <section className="border-y border-[var(--pa-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
            Vuoi partecipare?
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)] sm:text-base">
            Hai già realizzato un cruscotto o vuoi segnalarne uno? Scrivici e
            aiutaci a far crescere questa community di dati aperti.
          </p>
          <div className="flex flex-wrap gap-3">
            <Cta href="/comuni">Segnala un cruscotto</Cta>
            <Cta href="/suggerisci" variant="ghost">
              Lascia un suggerimento
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold text-[var(--pa-ink)]">
          Supporta {product}
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--pa-muted)] sm:text-base">
          Il progetto è gestito e finanziato personalmente da {AUTHOR.name}. Se
          ti piace e lo trovi utile, puoi offrire un caffè.
        </p>
        <div className="flex flex-wrap gap-3">
          <Cta href={SITE.bmc} variant="coffee" external>
            <Coffee size={18} aria-hidden />
            Offri un caffè
          </Cta>
          <Cta href="/sostieni" variant="ghost">
            Pagina Supporto
          </Cta>
        </div>
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
