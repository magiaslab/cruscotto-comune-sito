import Link from "next/link";
import { LandingDoc } from "@/components/LandingDoc";
import { SuggerisciForm } from "@/components/SuggerisciForm";
import { AUTHOR, getSitoGithubUrl, getTemplateGithubUrl } from "@/lib/product";
import { SUGGERISCI_COPY as C } from "@/lib/suggerisci";

export function SuggerisciContent() {
  const githubSito = getSitoGithubUrl();
  const githubTemplate = getTemplateGithubUrl();

  return (
    <LandingDoc kicker={C.kicker} title={C.titolo} lede={C.lede}>
      <div className="not-prose mb-2 grid gap-3 lg:grid-cols-2">
        <article className="rounded-xl border border-[var(--pa-border)] bg-white p-4 sm:p-5">
          <h2 className="m-0 text-base font-bold text-[var(--pa-ink)]">
            {C.cosaTitolo}
          </h2>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-[var(--pa-muted)]">
            {C.cosaTesto}
          </p>
          <ul className="mb-0 mt-3 list-disc space-y-1.5 pl-5 text-sm text-[var(--pa-ink)]">
            <li>
              Template da forkare:{" "}
              <a href={githubTemplate} target="_blank" rel="noopener noreferrer">
                magiaslab/cruscotto-comune
              </a>
            </li>
            <li>
              Hub e documentazione: questo sito. Issue:{" "}
              <a href={githubSito} target="_blank" rel="noopener noreferrer">
                magiaslab/cruscotto-comune-sito
              </a>
            </li>
          </ul>
        </article>
        <article className="rounded-xl border border-[var(--pa-border)] bg-white p-4 sm:p-5">
          <h2 className="m-0 text-base font-bold text-[var(--pa-ink)]">
            {C.aiutaTitolo}
          </h2>
          <ul className="mb-0 mt-2 list-disc space-y-2 pl-5 text-sm text-[var(--pa-ink)]">
            <li>
              Hai un cruscotto da mettere in mappa?{" "}
              <Link href="/comuni">Segnalalo su Comuni</Link>
            </li>
            <li>Proponi un miglioramento con il wizard qui sotto</li>
            <li>
              Codice e issue su{" "}
              <a href={githubSito} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          <p className="mb-0 mt-3 text-xs text-[var(--pa-muted)]">
            Contatti:{" "}
            <a href={`mailto:${AUTHOR.email}`}>{AUTHOR.name}</a>
          </p>
        </article>
      </div>

      <SuggerisciForm />
    </LandingDoc>
  );
}
