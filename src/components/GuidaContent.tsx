import type { ReactNode } from "react";
import Link from "next/link";
import { LandingDoc } from "@/components/LandingDoc";
import { GitHubMark, VercelMark } from "@/components/BrandMarks";
import {
  AUTHOR,
  getTemplateForkUrl,
  getTemplateGithubUrl,
  getVercelDeployUrl,
} from "@/lib/product";

function Step({
  n,
  minutes,
  title,
  children,
}: {
  n: number;
  minutes: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li>
      <span className="step-num" aria-hidden>
        {n}
      </span>
      <div className="min-w-0">
        <p className="m-0 font-bold text-[var(--pa-ink)]">{title}</p>
        <p className="mb-0 mt-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
          {minutes}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-[var(--pa-muted)] sm:text-base">
          {children}
        </div>
      </div>
    </li>
  );
}

export function GuidaContent() {
  const github = getTemplateGithubUrl();
  const fork = getTemplateForkUrl();
  const vercel = getVercelDeployUrl();

  return (
    <LandingDoc
      kicker="Guida in 10 minuti"
      title="Dal nulla a un cruscotto online"
      lede="Sei passi, tutti nel browser. Alla fine hai un indirizzo Vercel con i dati aperti del tuo comune. Se vuoi i dettagli, c’è la guida completa."
    >
      <div className="not-prose mb-2 flex flex-wrap gap-2">
        <a
          href={fork}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--pa-primary)] px-3 py-2 text-sm font-bold text-white no-underline hover:bg-[var(--pa-primary-hover)]"
        >
          <GitHubMark size={16} />
          Fork su GitHub
        </a>
        <a
          href={vercel}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--pa-border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--pa-ink)] no-underline hover:border-[var(--pa-primary)]"
        >
          <VercelMark size={16} />
          Deploy su Vercel
        </a>
        <Link
          href="/riusa"
          className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold"
        >
          Guida completa →
        </Link>
      </div>

      <ol className="not-prose step-list">
        <Step n={1} minutes="2 minuti" title="Apri GitHub">
          <p className="m-0">
            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registrati
            </a>{" "}
            se non hai già un account. Conferma l’e-mail.
          </p>
        </Step>
        <Step n={2} minutes="1 minuto" title="Duplica il template">
          <p className="m-0">
            Apri{" "}
            <a href={github} target="_blank" rel="noopener noreferrer">
              magiaslab/cruscotto-comune
            </a>
            , premi <strong>Fork</strong>, conferma. Non toccare questo minisito
            (è l’hub) e non forkare i cruscotti già esistenti: il primo è San
            Vincenzo.
          </p>
        </Step>
        <Step n={3} minutes="3 minuti" title="Pubblica su Vercel">
          <p className="m-0">
            Entra su Vercel con GitHub → <strong>Add New → Project</strong> →
            la tua copia → <strong>Deploy</strong>. Niente variabili. Aspetta
            l’indirizzo <code>.vercel.app</code>.
          </p>
        </Step>
        <Step n={4} minutes="3 minuti" title="Metti il nome del comune">
          <p className="m-0">
            Su GitHub apri <code>config/comune.json</code>, premi la matita.
            Compila <code>nome</code>, <code>istat_code</code>, provincia,
            regione, coordinate. Spegni porto e spiagge se non ci sono.{" "}
            <strong>Commit changes</strong>.
          </p>
        </Step>
        <Step n={5} minutes="1 minuto" title="Controlla i numeri">
          <p className="m-0">
            Apri <code>/api/kpi</code> sul tuo sito. Deve comparire il tuo
            comune, non un altro. Se no, aspetta il nuovo deploy.
          </p>
        </Step>
        <Step n={6} minutes="Quando vuoi" title="Racconta che esiste">
          <p className="m-0">
            Testi pronti per il sito comunale e il comunicato:{" "}
            <Link href="/kit-ente">kit ente</Link>. Per menzioni e disclaimer:{" "}
            <Link href="/menzioni">Menzioni</Link>.
          </p>
        </Step>
      </ol>

      <aside className="guide-callout">
        <p className="m-0 font-bold">Se ti blocchi</p>
        <p className="mb-0 mt-2">
          La guida estesa è in <Link href="/riusa">Porta nel tuo comune</Link>.
          Oppure scrivi a{" "}
          <a href={`mailto:${AUTHOR.email}`}>{AUTHOR.email}</a>.
        </p>
      </aside>
    </LandingDoc>
  );
}
