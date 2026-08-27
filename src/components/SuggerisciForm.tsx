"use client";

import { useMemo, useState } from "react";
import { Bug, CircleHelp, Database, Lightbulb } from "lucide-react";
import {
  IssueWizardFrame,
  type IssueSubmitResult,
} from "@/components/IssueWizardFrame";
import {
  SUGGERISCI_COPY as C,
  SUGGERISCI_ISSUE_PREFIX,
  SUGGERISCI_SEZIONI,
  SUGGERISCI_TIPO_HINT,
  SUGGERISCI_TIPO_LABEL,
  type SuggerisciTipo,
} from "@/lib/suggerisci";

const STEPS = 4;

type TipoOption = {
  id: SuggerisciTipo;
  Icon: typeof Lightbulb;
};

export function SuggerisciForm() {
  const [step, setStep] = useState(0);
  const [tipo, setTipo] = useState<SuggerisciTipo | null>(null);
  const [sezione, setSezione] = useState("");
  const [titolo, setTitolo] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [contatto, setContatto] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<IssueSubmitResult | null>(null);

  const tipi: TipoOption[] = useMemo(
    () => [
      { id: "miglioramento", Icon: Lightbulb },
      { id: "bug", Icon: Bug },
      { id: "nuovo_dato", Icon: Database },
      { id: "domanda", Icon: CircleHelp },
    ],
    [],
  );

  function reset() {
    setStep(0);
    setTipo(null);
    setSezione("");
    setTitolo("");
    setMessaggio("");
    setContatto("");
    setHoneypot("");
    setError(null);
    setDone(null);
  }

  function canNext(): boolean {
    if (step === 0) return tipo != null;
    if (step === 1) return true;
    if (step === 2) return titolo.trim().length >= 5 && messaggio.trim().length >= 20;
    return true;
  }

  async function submit() {
    if (!tipo || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/suggerisci", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo,
          sezione: sezione || undefined,
          titolo: titolo.trim(),
          messaggio: messaggio.trim(),
          contatto: contatto.trim() || undefined,
          pagina: typeof window !== "undefined" ? window.location.href : undefined,
          website: honeypot,
        }),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        error?: string;
        url?: string;
        number?: number;
        mode?: string;
      };
      if (json.url) {
        setDone({
          url: json.url,
          number: json.number,
          mode: json.mode || "github_api",
        });
        setStep(STEPS);
        return;
      }
      setError(json.error || C.erroreInvio);
    } catch {
      setError(C.erroreRete);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <IssueWizardFrame
      copy={{
        wizardTitolo: C.wizardTitolo,
        wizardLede: C.wizardLede,
        passoTipo: "Tipo",
        passoDue: "Sezione",
        passoTre: "Messaggio",
        passoInvio: "Invio",
        avanti: C.avanti,
        indietro: C.indietro,
        invia: C.invia,
        invioInCorso: C.invioInCorso,
        grazie: C.grazie,
        ticket: C.ticket,
        fallback: C.fallback,
        apiOk: C.apiOk,
        nuova: C.nuova,
        recenti: C.recenti,
        recentiLede: C.recentiLede,
        nessuna: C.nessuna,
        elencoNonDisponibile: C.elencoNonDisponibile,
        vediTutte: C.vediTutte,
        apertaIl: C.apertaIl,
        aperta: C.aperta,
        chiusa: C.chiusa,
      }}
      step={Math.min(step, STEPS - 1)}
      steps={STEPS}
      canNext={canNext()}
      submitting={submitting}
      error={error}
      done={done}
      prefix={SUGGERISCI_ISSUE_PREFIX}
      listEndpoint="/api/suggerisci"
      onBack={() => {
        setError(null);
        setStep((s) => Math.max(0, s - 1));
      }}
      onNext={() => {
        setError(null);
        setStep((s) => s + 1);
      }}
      onSubmit={() => void submit()}
      onReset={reset}
    >
      {step === 0 ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {tipi.map((opt) => {
            const selected = tipo === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTipo(opt.id)}
                className={`rounded-xl border p-4 text-left transition ${
                  selected
                    ? "border-[var(--pa-primary)] bg-[color-mix(in_srgb,var(--pa-primary)_10%,white)]"
                    : "border-[var(--pa-border)] bg-white hover:bg-[var(--pa-surface-soft)]"
                }`}
                aria-pressed={selected}
              >
                <span className="flex items-center gap-2 text-sm font-bold text-[var(--pa-ink)]">
                  <opt.Icon
                    size={18}
                    className="text-[var(--pa-primary)]"
                    aria-hidden
                  />
                  {SUGGERISCI_TIPO_LABEL[opt.id]}
                </span>
                <span className="mt-1 block text-xs text-[var(--pa-muted)]">
                  {SUGGERISCI_TIPO_HINT[opt.id]}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      {step === 1 ? (
        <div>
          <label
            htmlFor="suggerisci-sezione"
            className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
          >
            {C.sezioneLabel}
          </label>
          <select
            id="suggerisci-sezione"
            value={sezione}
            onChange={(e) => setSezione(e.target.value)}
            className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
          >
            <option value="">{C.sezioneVuota}</option>
            {SUGGERISCI_SEZIONI.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <p className="mb-0 mt-2 text-xs text-[var(--pa-muted)]">{C.sezioneHint}</p>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="relative grid gap-3">
          <div>
            <label
              htmlFor="suggerisci-titolo"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.titoloLabel}
            </label>
            <input
              id="suggerisci-titolo"
              value={titolo}
              onChange={(e) => setTitolo(e.target.value)}
              maxLength={120}
              className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
              placeholder={C.titoloPlaceholder}
            />
          </div>
          <div>
            <label
              htmlFor="suggerisci-messaggio"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.messaggioLabel}
            </label>
            <textarea
              id="suggerisci-messaggio"
              value={messaggio}
              onChange={(e) => setMessaggio(e.target.value)}
              maxLength={4000}
              rows={6}
              className="w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 py-2 text-sm text-[var(--pa-ink)]"
              placeholder={C.messaggioPlaceholder}
            />
          </div>
          <div>
            <label
              htmlFor="suggerisci-contatto"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.contattoLabel}
            </label>
            <input
              id="suggerisci-contatto"
              value={contatto}
              onChange={(e) => setContatto(e.target.value)}
              maxLength={120}
              className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
              placeholder={C.contattoPlaceholder}
              autoComplete="email"
            />
          </div>
          <div className="absolute -left-[9999px] opacity-0" aria-hidden>
            <label htmlFor="suggerisci-website">Website</label>
            <input
              id="suggerisci-website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="rounded-xl border border-[var(--pa-border)] bg-[var(--pa-surface-soft)] p-4 text-sm text-[var(--pa-ink)]">
          <p className="m-0 font-bold">{C.riepilogo}</p>
          <dl className="mb-0 mt-3 grid gap-2">
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">Tipo</dt>
              <dd className="m-0 font-semibold">
                {tipo ? SUGGERISCI_TIPO_LABEL[tipo] : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">Sezione</dt>
              <dd className="m-0 font-semibold">{sezione || C.sezioneVuota}</dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">Titolo</dt>
              <dd className="m-0 font-semibold">{titolo}</dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">Messaggio</dt>
              <dd className="m-0 whitespace-pre-wrap">{messaggio}</dd>
            </div>
            {contatto ? (
              <div>
                <dt className="text-xs text-[var(--pa-muted)]">Contatto</dt>
                <dd className="m-0">{contatto}</dd>
              </div>
            ) : null}
          </dl>
          <p className="mb-0 mt-3 text-xs text-[var(--pa-muted)]">{C.disclaimer}</p>
        </div>
      ) : null}
    </IssueWizardFrame>
  );
}
