import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { ComuniMap } from "@/components/ComuniMap";
import { LandingDoc } from "@/components/LandingDoc";
import {
  CRUSCOTTI_RETE,
  fraseCruscottiEsistenti,
  type CruscottoRete,
  type CruscottoStatus,
} from "@/lib/cruscotti-rete";
import { AUTHOR } from "@/lib/product";
import { SegnalaCruscottoForm } from "@/components/SegnalaCruscottoForm";

function statusLabel(status: CruscottoStatus) {
  return status === "online" ? "Pubblico" : "In sviluppo";
}

function CruscottoCard({ item }: { item: CruscottoRete }) {
  const online = item.status === "online";
  return (
    <article className="guide-card flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="m-0 text-lg font-bold text-[var(--pa-ink)]">{item.nome}</p>
        <span className={`status-pill ${online ? "status-pill-ok" : "status-pill-wip"}`}>
          {statusLabel(item.status)}
        </span>
      </div>
      <p className="mb-0 mt-1 flex items-center gap-1.5 text-sm text-[var(--pa-muted)]">
        <MapPin size={14} aria-hidden className="shrink-0" />
        {item.regione} · {item.provincia}
        {item.origin ? " · Progetto originale" : null}
      </p>
      <p className="mb-0 mt-3 text-sm leading-relaxed text-[var(--pa-ink)]">
        {item.tagline}
      </p>
      <p className="mb-0 mt-2 flex-1 text-sm leading-relaxed text-[var(--pa-muted)]">
        {item.note}
      </p>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold no-underline"
      >
        {item.url.replace(/^https:\/\//, "").replace(/\/$/, "")}
        <ExternalLink size={14} aria-hidden />
      </a>
    </article>
  );
}

export function ComuniContent() {
  const online = CRUSCOTTI_RETE.filter((c) => c.status === "online");
  const wip = CRUSCOTTI_RETE.filter((c) => c.status === "in_sviluppo");

  return (
    <LandingDoc
      wide
      kicker="Comuni"
      title="I cruscotti già esistenti"
      lede={`Oggi ${fraseCruscottiEsistenti()}. Ogni comune ha il suo sito, con i dati del proprio territorio. Qui li trovi sulla mappa e in elenco.`}
    >
      <ComuniMap items={CRUSCOTTI_RETE} />

      <h2 className="guide-h2">Già consultabili</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        {online.map((item) => (
          <CruscottoCard key={item.id} item={item} />
        ))}
      </div>

      {wip.length > 0 ? (
        <>
          <h2 className="guide-h2">In lavorazione</h2>
          <p>
            Anteprime su Vercel: i dati ci sono già, il sito può ancora cambiare
            nome, dominio o dettagli locali.
          </p>
          <div className="not-prose grid gap-4 sm:grid-cols-2">
            {wip.map((item) => (
              <CruscottoCard key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : null}

      <h2 className="guide-h2">Segnala un cruscotto</h2>
      <p>
        Stesso meccanismo di{" "}
        <Link href="/suggerisci">Suggerisci</Link>: un breve percorso, poi una
        issue pubblica su GitHub. Dopo un controllo il comune entra in elenco e
        sulla mappa.
      </p>
      <SegnalaCruscottoForm />

      <h2 className="guide-h2">Vuoi il tuo?</h2>
      <p>
        La guida breve è in <Link href="/guida">Guida</Link>. Passo passo:{" "}
        <Link href="/riusa">Riuso</Link>. Un’idea su questo sito:{" "}
        <Link href="/suggerisci">Suggerisci</Link>. Se preferisci una mano
        diretta, scrivi a{" "}
        <a href={`mailto:${AUTHOR.email}`}>{AUTHOR.email}</a>.
      </p>
    </LandingDoc>
  );
}
