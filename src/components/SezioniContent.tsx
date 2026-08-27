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
    <article className="guide-card" id={sezione.id}>
      <p className="m-0" style={{ marginBottom: "0.65rem" }}>
        <span className={AMBITO_CLASS[sezione.ambito]}>
          {SEZIONI_AMBITO_LABEL[sezione.ambito]}
        </span>
      </p>
      <h3 className="mb-2 mt-0 text-lg font-bold text-[var(--pa-ink)]">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {sezione.label}
        </a>
      </h3>
      <p className="text-[var(--pa-muted)]">{sezione.intro}</p>
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
      <h4 className="mb-2 mt-4 text-sm font-bold text-[var(--pa-ink)]">
        Dati in pagina
      </h4>
      <ul>
        {sezione.dati.map((dato) => (
          <li key={dato}>{dato}</li>
        ))}
      </ul>
      <h4 className="mb-2 mt-4 text-sm font-bold text-[var(--pa-ink)]">
        Fonti agganciate
      </h4>
      <ul>
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
      kicker="Catalogo"
      title="Sezioni del cruscotto"
      lede="Ogni pagina del cruscotto mostra un pezzo di territorio. Qui elenchiamo i dati che ci trovi e le fonti a cui sono agganciati. Gli screenshot arrivano dal cruscotto di San Vincenzo, il primo in produzione. Il nucleo è lo stesso del template; le sezioni opzionali e gli esempi dipendono dal comune."
      wide
    >
      <section>
        <p>
          Aprire il cruscotto in produzione:{" "}
          <a href={SITE.demo} target="_blank" rel="noopener noreferrer">
            cruscottosanvincenzo.it
          </a>
          . Per replicare il nucleo su un altro comune:{" "}
          <Link href="/progetto">fork del template</Link>. Le fonti complete,
          con licenza e pagina ufficiale, stanno in{" "}
          <Link href="/fonti">Fonti</Link>.
        </p>
        <p>
          Da agosto 2026 il cruscotto di San Vincenzo calcola anche gli{" "}
          <strong>abitanti equivalenti</strong> (residenti più presenze
          turistiche divise per 365). Serve a non far sembrare vuoto un comune
          che in estate si riempie: rifiuti, farmacie e veicoli si possono
          leggere sia per residente sia per abitante equivalente.
        </p>
      </section>

      {SEZIONI_GRUPPI.map((gruppo) => (
        <section key={gruppo.id} id={gruppo.id}>
          <h2 className="text-xl font-bold">{gruppo.label}</h2>
          <p>{gruppo.intro}</p>
          <div className="not-prose grid gap-4">
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

      <section>
        <h2 className="text-xl font-bold">Come leggere gli ambiti</h2>
        <ul>
          <li>
            <strong>Nucleo nazionale</strong> — nel template da forkare. Dati
            ISTAT, DAIT, OpenAPI, ISPRA, Protezione civile, INGV.
          </li>
          <li>
            <strong>Modulo opzionale</strong> — nel template, ma si attiva solo
            se il comune ha i dataset. Senza spiagge non ha senso Balneazione.
          </li>
          <li>
            <strong>Su San Vincenzo (0.3.0)</strong> — adattatori toscani o
            pagine nate sul primo cruscotto (SIR, ARRR, Geoscopio, confronto tra
            comuni). Il changelog di San Vincenzo lo dice: il template non è
            ancora allineato su tutto.
          </li>
        </ul>
        <p>
          Manca una sezione che ti servirebbe?{" "}
          <Link href="/suggerisci">Suggeriscila</Link>.
        </p>
      </section>
    </LandingDoc>
  );
}
