"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Building2,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";
import {
  IssueWizardFrame,
  type IssueSubmitResult,
} from "@/components/IssueWizardFrame";
import {
  SEGNALA_COME_HINT,
  SEGNALA_COME_LABEL,
  SEGNALA_COPY as C,
  SEGNALA_ISSUE_PREFIX,
  SEGNALA_STATO_LABEL,
  type SegnalaCome,
  type SegnalaStato,
} from "@/lib/segnala-cruscotto";

const STEPS = 4;

export function SegnalaCruscottoForm() {
  const [step, setStep] = useState(0);
  const [come, setCome] = useState<SegnalaCome | null>(null);
  const [stato, setStato] = useState<SegnalaStato | null>(null);
  const [comune, setComune] = useState("");
  const [url, setUrl] = useState("");
  const [istat, setIstat] = useState("");
  const [chi, setChi] = useState("");
  const [comeTesto, setComeTesto] = useState("");
  const [note, setNote] = useState("");
  const [contatto, setContatto] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<IssueSubmitResult | null>(null);

  const comeOpzioni = useMemo(
    () =>
      [
        { id: "template" as const, Icon: BookOpen },
        { id: "scuola" as const, Icon: Users },
        { id: "civico" as const, Icon: MapPin },
        { id: "ente" as const, Icon: Landmark },
        { id: "altro" as const, Icon: Building2 },
      ],
    [],
  );

  function reset() {
    setStep(0);
    setCome(null);
    setStato(null);
    setComune("");
    setUrl("");
    setIstat("");
    setChi("");
    setComeTesto("");
    setNote("");
    setContatto("");
    setHoneypot("");
    setError(null);
    setDone(null);
  }

  function canNext(): boolean {
    if (step === 0) return come != null;
    if (step === 1) {
      return (
        stato != null &&
        comune.trim().length >= 2 &&
        /^https?:\/\//i.test(url.trim())
      );
    }
    if (step === 2) return chi.trim().length >= 3;
    return true;
  }

  async function submit() {
    if (!come || !stato || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/segnala-cruscotto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          come,
          stato,
          comune: comune.trim(),
          url: url.trim(),
          istat: istat.trim() || undefined,
          chi: chi.trim(),
          comeTesto: comeTesto.trim() || undefined,
          note: note.trim() || undefined,
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
        wizardTitolo: C.titolo,
        wizardLede: C.lede,
        passoTipo: "Come",
        passoDue: "Comune",
        passoTre: "Chi",
        passoInvio: "Invio",
        avanti: C.avanti,
        indietro: C.indietro,
        invia: C.invia,
        invioInCorso: C.invioInCorso,
        grazie: C.grazie,
        ticket: "Ticket registrato:",
        fallback: C.fallback,
        apiOk: C.apiOk,
        nuova: C.nuova,
        recenti: C.recenti,
        recentiLede: C.recentiLede,
        nessuna: C.nessuna,
        elencoNonDisponibile: C.elencoNonDisponibile,
        vediTutte: C.vediTutte,
        apertaIl: "Aperta il",
        aperta: "Aperta",
        chiusa: "Chiusa",
      }}
      step={Math.min(step, STEPS - 1)}
      steps={STEPS}
      canNext={canNext()}
      submitting={submitting}
      error={error}
      done={done}
      prefix={SEGNALA_ISSUE_PREFIX}
      listEndpoint="/api/segnala-cruscotto"
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
        <div>
          <p className="mb-3 mt-0 text-sm font-semibold text-[var(--pa-ink)]">
            {C.comeDomanda}
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {comeOpzioni.map((opt) => {
              const selected = come === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setCome(opt.id)}
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
                    {SEGNALA_COME_LABEL[opt.id]}
                  </span>
                  <span className="mt-1 block text-xs text-[var(--pa-muted)]">
                    {SEGNALA_COME_HINT[opt.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-3">
          <p className="m-0 text-sm font-semibold text-[var(--pa-ink)]">
            {C.statoDomanda}
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {(["online", "in_sviluppo"] as SegnalaStato[]).map((id) => {
              const selected = stato === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setStato(id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selected
                      ? "border-[var(--pa-primary)] bg-[color-mix(in_srgb,var(--pa-primary)_10%,white)]"
                      : "border-[var(--pa-border)] bg-white hover:bg-[var(--pa-surface-soft)]"
                  }`}
                  aria-pressed={selected}
                >
                  <span className="block text-sm font-bold text-[var(--pa-ink)]">
                    {SEGNALA_STATO_LABEL[id]}
                  </span>
                  <span className="mt-1 block text-xs text-[var(--pa-muted)]">
                    {id === "online" ? C.onlineHint : C.wipHint}
                  </span>
                </button>
              );
            })}
          </div>
          <div>
            <label
              htmlFor="segnala-comune"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.comuneLabel}
            </label>
            <input
              id="segnala-comune"
              value={comune}
              onChange={(e) => setComune(e.target.value)}
              maxLength={80}
              className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
              placeholder="Es. Campiglia Marittima"
            />
          </div>
          <div>
            <label
              htmlFor="segnala-url"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.urlLabel}
            </label>
            <input
              id="segnala-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              maxLength={300}
              className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
              placeholder="https://"
            />
          </div>
          <div>
            <label
              htmlFor="segnala-istat"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.istatLabel}
            </label>
            <input
              id="segnala-istat"
              value={istat}
              onChange={(e) => setIstat(e.target.value.replace(/\D/g, "").slice(0, 6))}
              inputMode="numeric"
              className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
              placeholder="049002"
            />
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="relative grid gap-3">
          <div>
            <label
              htmlFor="segnala-chi"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.chiLabel}
            </label>
            <input
              id="segnala-chi"
              value={chi}
              onChange={(e) => setChi(e.target.value)}
              maxLength={160}
              className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
              placeholder="Es. Classe 3A, IIS …"
            />
            <p className="mb-0 mt-1 text-xs text-[var(--pa-muted)]">{C.chiHint}</p>
          </div>
          <div>
            <label
              htmlFor="segnala-come-testo"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.comeTestoLabel}
            </label>
            <textarea
              id="segnala-come-testo"
              value={comeTesto}
              onChange={(e) => setComeTesto(e.target.value)}
              maxLength={1000}
              rows={3}
              className="w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 py-2 text-sm text-[var(--pa-ink)]"
              placeholder={C.comeTestoHint}
            />
          </div>
          <div>
            <label
              htmlFor="segnala-note"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.noteLabel}
            </label>
            <textarea
              id="segnala-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={2000}
              rows={3}
              className="w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 py-2 text-sm text-[var(--pa-ink)]"
            />
          </div>
          <div>
            <label
              htmlFor="segnala-contatto"
              className="mb-1.5 block text-sm font-semibold text-[var(--pa-ink)]"
            >
              {C.contattoLabel}
            </label>
            <input
              id="segnala-contatto"
              value={contatto}
              onChange={(e) => setContatto(e.target.value)}
              maxLength={120}
              className="min-h-11 w-full rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm text-[var(--pa-ink)]"
              placeholder={C.contattoHint}
              autoComplete="email"
            />
          </div>
          <div className="absolute -left-[9999px] opacity-0" aria-hidden>
            <label htmlFor="segnala-website">Website</label>
            <input
              id="segnala-website"
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
              <dt className="text-xs text-[var(--pa-muted)]">Come</dt>
              <dd className="m-0 font-semibold">
                {come ? SEGNALA_COME_LABEL[come] : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">Stato</dt>
              <dd className="m-0 font-semibold">
                {stato ? SEGNALA_STATO_LABEL[stato] : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">Comune</dt>
              <dd className="m-0 font-semibold">{comune}</dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">URL</dt>
              <dd className="m-0 break-all">{url}</dd>
            </div>
            {istat ? (
              <div>
                <dt className="text-xs text-[var(--pa-muted)]">ISTAT</dt>
                <dd className="m-0">{istat}</dd>
              </div>
            ) : null}
            <div>
              <dt className="text-xs text-[var(--pa-muted)]">Chi</dt>
              <dd className="m-0 font-semibold">{chi}</dd>
            </div>
            {comeTesto ? (
              <div>
                <dt className="text-xs text-[var(--pa-muted)]">Come è stato fatto</dt>
                <dd className="m-0 whitespace-pre-wrap">{comeTesto}</dd>
              </div>
            ) : null}
            {note ? (
              <div>
                <dt className="text-xs text-[var(--pa-muted)]">Note</dt>
                <dd className="m-0 whitespace-pre-wrap">{note}</dd>
              </div>
            ) : null}
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
