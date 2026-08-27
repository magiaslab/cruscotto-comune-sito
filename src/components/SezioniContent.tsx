import Link from "next/link";
import { LandingDoc } from "@/components/LandingDoc";
import { SITE } from "@/lib/product";
import {
  SEZIONI_AMBITO_LABEL,
  SEZIONI_GRUPPI,
  sezioniPerGruppo,
  type SezioneAmbito,
  type SezioneCruscotto,
} from "@/lib/sezioni";

const AMBITO_CLASS: Record<SezioneAmbito, string> = {
  nucleo: "status-pill status-pill-ok",
  opzionale: "status-pill status-pill-muted",
  esemplare: "status-pill status-pill-wip",
};

function SezioneCard({
  sezione,
  hasShot,
}: {
  sezione: SezioneCruscotto;
  hasShot: boolean;
}) {
  const href = `${SITE.demo}${sezione.path === "/" ? "" : sezione.path}`;

  return (
    <article className="guide-card sezioni-card" id={sezione.id}>
      {hasShot && sezione.screenshot ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="sezioni-shot-link"
        >
          {/* File statici in public/; dimensioni fisse degli screenshot. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sezione.screenshot}
            alt={`Schermata della sezione ${sezione.label} sul cruscotto di San Vincenzo.`}
            className="sezioni-shot"
            width={1280}
            height={800}
          />
        </a>
      ) : null}
      <p className="m-0" style={{ marginTop: hasShot ? "0.75rem" : 0 }}>
        <span className={AMBITO_CLASS[sezione.ambito]}>
          {SEZIONI_AMBITO_LABEL[sezione.ambito]}
        </span>
      </p>
      <h3 className="mb-1 mt-2 text-lg font-bold text-[var(--pa-ink)]">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {sezione.label}
        </a>
      </h3>
      <p className="mb-0 text-sm text-[var(--pa-muted)]">{sezione.intro}</p>
      <details className="mt-3">
        <summary>Dati e fonti</summary>
        <h4 className="mb-2 mt-3 text-sm font-bold text-[var(--pa-ink)]">
          Dati in pagina
        </h4>
        <ul className="mb-3">
          {sezione.dati.map((dato) => (
            <li key={dato}>{dato}</li>
          ))}
        </ul>
        <h4 className="mb-2 mt-0 text-sm font-bold text-[var(--pa-ink)]">
          Fonti
        </h4>
        <ul className="mb-0">
          {sezione.fonti.map((fonte) => (
            <li key={fonte.nome}>
              {fonte.url ? (
                <a href={fonte.url} target="_blank" rel="noopener noreferrer">
                  {fonte.nome}
                </a>
              ) : (
                fonte.nome
              )}
            </li>
          ))}
        </ul>
        {sezione.feature ? (
          <p className="mb-0 mt-3 text-xs text-[var(--pa-muted)]">
            Flag: <code>features.{sezione.feature}</code>
          </p>
        ) : null}
      </details>
    </article>
  );
}

export function SezioniContent({
  screenshots,
}: {
  screenshots: Record<string, boolean>;
}) {
  return (
    <LandingDoc
      kicker="Sezioni"
      title="Sezioni del cruscotto"
      lede="Cosa c’è in ogni pagina e da dove arrivano i numeri. Gli screenshot sono di San Vincenzo. Apri «Dati e fonti» sulla scheda che ti interessa."
      wide
    >
      <nav aria-label="Gruppi di sezioni">
        <ul className="sezioni-index">
          {SEZIONI_GRUPPI.map((gruppo) => (
            <li key={gruppo.id}>
              <a href={`#${gruppo.id}`}>{gruppo.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="sezioni-legenda">
        <span className="status-pill status-pill-ok">
          {SEZIONI_AMBITO_LABEL.nucleo}
        </span>{" "}
        arrivano con il codice ISTAT.{" "}
        <span className="status-pill status-pill-muted">
          {SEZIONI_AMBITO_LABEL.opzionale}
        </span>{" "}
        solo se quel territorio ce l’ha.{" "}
        <span className="status-pill status-pill-wip">
          {SEZIONI_AMBITO_LABEL.esemplare}
        </span>{" "}
        il template non è ancora allineato.
      </p>

      {SEZIONI_GRUPPI.map((gruppo) => (
        <section key={gruppo.id} id={gruppo.id} className="sezioni-gruppo">
          <h2 className="text-xl font-bold">{gruppo.label}</h2>
          <p>{gruppo.intro}</p>
          <div className="not-prose sezioni-grid">
            {sezioniPerGruppo(gruppo.id).map((sezione) => (
              <SezioneCard
                key={sezione.id}
                sezione={sezione}
                hasShot={Boolean(screenshots[sezione.id])}
              />
            ))}
          </div>
        </section>
      ))}

      <p>
        Apri il cruscotto:{" "}
        <a href={SITE.demo} target="_blank" rel="noopener noreferrer">
          cruscottosanvincenzo.it
        </a>
        . Fonti con licenza: <Link href="/fonti">Fonti</Link>. Manca una
        sezione? <Link href="/suggerisci">Suggeriscila</Link>.
      </p>
    </LandingDoc>
  );
}
