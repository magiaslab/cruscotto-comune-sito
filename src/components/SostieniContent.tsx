import Link from "next/link";
import {
  Coffee,
  ExternalLink,
  GitFork,
  HeartHandshake,
  Star,
} from "lucide-react";
import { LandingDoc } from "@/components/LandingDoc";
import { AUTHOR, SITE, getTemplateGithubUrl } from "@/lib/product";

export function SostieniContent() {
  const github = getTemplateGithubUrl();

  return (
    <LandingDoc
      kicker="Supporto"
      title="Un caffè per tenere online il progetto"
      lede="Non c’è un budget pubblico. Un caffè volontario aiuta a pagare hosting e dominio. Non è una donazione a un Comune e non cambia i numeri che leggi."
    >
      <div className="not-prose grid gap-4 lg:grid-cols-2">
        <article className="guide-card">
          <h2 className="m-0 flex items-center gap-2 text-base font-bold text-[var(--pa-ink)]">
            <Coffee
              size={20}
              className="shrink-0 text-[var(--pa-primary)]"
              aria-hidden
            />
            Offri un caffè
          </h2>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-[var(--pa-muted)]">
            Il sostegno va a me, {AUTHOR.name}: tengo in vita template, questo
            sito e San Vincenzo nel tempo libero. Serve a coprire le spese
            tecniche, non un ente locale.
          </p>
          <a
            href={SITE.bmc}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#FFDD00] px-4 py-2 text-sm font-bold text-[#0d0c22] no-underline hover:brightness-95"
          >
            <Coffee size={18} aria-hidden />
            Offri un caffè su Buy Me a Coffee
            <ExternalLink size={14} aria-hidden />
          </a>
          <p className="mb-0 mt-3 text-xs text-[var(--pa-muted)]">
            Si apre la pagina ufficiale in una nuova scheda. I fork usano il
            proprio slug, non questo.
          </p>
        </article>

        <article className="guide-card">
          <h2 className="m-0 flex items-center gap-2 text-base font-bold text-[var(--pa-ink)]">
            A cosa serve
          </h2>
          <ul className="mb-0 mt-3 list-disc space-y-1.5 pl-5 text-sm text-[var(--pa-ink)]">
            <li>Hosting e dominio di questo sito e di San Vincenzo</li>
            <li>Compute per build, cache e aggiornamenti dati</li>
            <li>Tempo per tenere aperte le fonti open data</li>
          </ul>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-[var(--pa-muted)]">
            L’importo è libero: anche un caffè conta. I dati restano pubblici e
            il codice resta aperto.
          </p>
        </article>
      </div>

      <h2 className="guide-h2">Altri modi per aiutare</h2>
      <ul className="not-prose m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
        <li className="guide-card">
          <p className="m-0 flex items-center gap-2 font-bold">
            <Star size={18} className="text-[var(--pa-primary)]" aria-hidden />
            Lascia una stella su GitHub
          </p>
          <p className="mb-0 mt-1 text-sm text-[var(--pa-muted)]">
            Aiuta altre persone a trovare il progetto.
          </p>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold"
          >
            {github.replace("https://", "")}
          </a>
        </li>
        <li className="guide-card">
          <p className="m-0 flex items-center gap-2 font-bold">
            <GitFork size={18} className="text-[var(--pa-primary)]" aria-hidden />
            Portalo in un altro comune
          </p>
          <p className="mb-0 mt-1 text-sm text-[var(--pa-muted)]">
            La guida è scritta anche per chi non programma.
          </p>
          <Link
            href="/riusa"
            className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold"
          >
            Apri la guida al riuso
          </Link>
        </li>
        <li className="guide-card">
          <p className="m-0 flex items-center gap-2 font-bold">
            <HeartHandshake
              size={18}
              className="text-[var(--pa-primary)]"
              aria-hidden
            />
            Scrivi due righe
          </p>
          <p className="mb-0 mt-1 text-sm text-[var(--pa-muted)]">
            Un messaggio all’autore vale quanto un caffè, e a volte di più.
          </p>
          <a
            href={`mailto:${AUTHOR.email}`}
            className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold"
          >
            {AUTHOR.email}
          </a>
        </li>
        <li className="guide-card">
          <p className="m-0 flex items-center gap-2 font-bold">
            Kit per l’ente
          </p>
          <p className="mb-0 mt-1 text-sm text-[var(--pa-muted)]">
            Due paragrafi e un comunicato da mettere sul sito comunale.
          </p>
          <Link
            href="/kit-ente"
            className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold"
          >
            Apri il kit ente
          </Link>
        </li>
      </ul>
    </LandingDoc>
  );
}
