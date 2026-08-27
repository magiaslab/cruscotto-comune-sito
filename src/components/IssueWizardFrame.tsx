"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import {
  formatIssueDate,
  issuesSearchUrl,
  type PublicGithubIssue,
} from "@/lib/github-sito";

export type IssueSubmitResult = {
  url: string;
  number?: number;
  mode: string;
};

type Copy = {
  wizardTitolo: string;
  wizardLede: string;
  passoTipo: string;
  passoDue: string;
  passoTre: string;
  passoInvio: string;
  avanti: string;
  indietro: string;
  invia: string;
  invioInCorso: string;
  grazie: string;
  ticket: string;
  fallback: string;
  apiOk: string;
  nuova: string;
  recenti: string;
  recentiLede: string;
  nessuna: string;
  elencoNonDisponibile: string;
  vediTutte: string;
  apertaIl: string;
  aperta: string;
  chiusa: string;
};

export function IssueWizardFrame({
  copy,
  step,
  steps,
  canNext,
  submitting,
  error,
  done,
  prefix,
  listEndpoint,
  onBack,
  onNext,
  onSubmit,
  onReset,
  children,
}: {
  copy: Copy;
  step: number;
  steps: number;
  canNext: boolean;
  submitting: boolean;
  error: string | null;
  done: IssueSubmitResult | null;
  prefix: string;
  listEndpoint: string;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onReset: () => void;
  children: ReactNode;
}) {
  const [issues, setIssues] = useState<PublicGithubIssue[]>([]);
  const [issuesLoading, setIssuesLoading] = useState(true);
  const [issuesError, setIssuesError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${listEndpoint}?issues=1&limit=10`)
      .then((r) => r.json())
      .then((json: { ok?: boolean; issues?: PublicGithubIssue[]; error?: string }) => {
        if (cancelled) return;
        if (json.ok && Array.isArray(json.issues)) {
          setIssues(json.issues);
          setIssuesError(null);
        } else {
          setIssuesError(json.error || copy.elencoNonDisponibile);
        }
      })
      .catch(() => {
        if (!cancelled) setIssuesError(copy.elencoNonDisponibile);
      })
      .finally(() => {
        if (!cancelled) setIssuesLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [copy.elencoNonDisponibile, done?.number, listEndpoint]);

  const labels = [copy.passoTipo, copy.passoDue, copy.passoTre, copy.passoInvio];

  return (
    <>
      <div className="not-prose overflow-hidden rounded-xl border border-[var(--pa-border)] bg-white">
        <div className="border-b border-[var(--pa-border)] bg-[var(--pa-surface-soft)] px-4 py-3 sm:px-5">
          <h3 className="m-0 text-base font-bold text-[var(--pa-ink)]">
            {copy.wizardTitolo}
          </h3>
          <p className="m-0 mt-1 text-xs text-[var(--pa-muted)] sm:text-sm">
            {copy.wizardLede}
          </p>
        </div>
        <div className="px-4 py-4 sm:px-5 sm:py-5">
          <ol
            className="m-0 mb-4 flex list-none flex-wrap gap-2 p-0"
            aria-label="Passi del wizard"
          >
            {Array.from({ length: steps }, (_, i) => {
              const active = i === step || (done && i === steps - 1);
              const doneStep = i < step || Boolean(done);
              return (
                <li
                  key={i}
                  className={`inline-flex min-h-9 items-center rounded-full px-3 text-xs font-semibold ${
                    active
                      ? "bg-[var(--pa-primary)] text-white"
                      : doneStep
                        ? "bg-[color-mix(in_srgb,var(--pa-primary)_18%,white)] text-[var(--pa-primary)]"
                        : "bg-[var(--pa-surface-soft)] text-[var(--pa-muted)]"
                  }`}
                  style={active ? { color: "#ffffff" } : undefined}
                  aria-current={i === step ? "step" : undefined}
                >
                  {i + 1}. {labels[i]}
                </li>
              );
            })}
          </ol>

          {!done ? children : null}

          {error ? (
            <p
              className="mt-3 mb-0 rounded-lg border border-[#D9364F]/40 bg-[#D9364F]/8 px-3 py-2 text-sm text-[#D9364F]"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          {!done ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={onBack}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-[var(--pa-border)] bg-white px-4 text-sm font-semibold text-[var(--pa-ink)]"
                >
                  <ArrowLeft size={16} aria-hidden />
                  {copy.indietro}
                </button>
              ) : null}
              {step < steps - 1 ? (
                <button
                  type="button"
                  disabled={!canNext}
                  onClick={onNext}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--pa-primary)] px-4 text-sm font-semibold text-white hover:bg-[var(--pa-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
                  style={{ color: "#ffffff" }}
                >
                  {copy.avanti}
                  <ArrowRight size={16} aria-hidden />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={submitting || !canNext}
                  onClick={onSubmit}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--pa-primary)] px-4 text-sm font-semibold text-white hover:bg-[var(--pa-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
                  style={{ color: "#ffffff" }}
                >
                  {submitting ? copy.invioInCorso : copy.invia}
                </button>
              )}
            </div>
          ) : (
            <div className="mt-3 rounded-xl border border-[color-mix(in_srgb,#008758_35%,var(--pa-border))] bg-[color-mix(in_srgb,#008758_8%,white)] p-4">
              <p className="m-0 flex items-center gap-2 text-base font-bold text-[var(--pa-ink)]">
                <CheckCircle2 className="text-[#008758]" size={20} aria-hidden />
                {copy.grazie}
              </p>
              {done.number ? (
                <p className="mb-0 mt-2 text-sm font-semibold text-[var(--pa-ink)]">
                  {copy.ticket}{" "}
                  <span className="text-[var(--pa-primary)]">#{done.number}</span>
                </p>
              ) : null}
              <p className="mb-0 mt-2 text-sm text-[var(--pa-muted)]">
                {done.mode === "fallback" ? copy.fallback : copy.apiOk}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={done.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--pa-primary)] px-3 text-sm font-semibold text-white no-underline hover:bg-[var(--pa-primary-hover)]"
                  style={{ color: "#ffffff" }}
                >
                  {done.number ? `Apri issue #${done.number}` : "Apri su GitHub"}
                </a>
                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--pa-border)] bg-white px-3 text-sm font-semibold text-[var(--pa-ink)]"
                >
                  {copy.nuova}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="not-prose mt-5 overflow-hidden rounded-xl border border-[var(--pa-border)] bg-white">
        <div className="border-b border-[var(--pa-border)] bg-[var(--pa-surface-soft)] px-4 py-3 sm:px-5">
          <h3 className="m-0 text-base font-bold text-[var(--pa-ink)]">
            {copy.recenti}
          </h3>
          <p className="m-0 mt-1 text-xs text-[var(--pa-muted)] sm:text-sm">
            {copy.recentiLede}
          </p>
        </div>
        <div className="px-4 py-4 sm:px-5">
          {issuesLoading ? (
            <p className="m-0 text-sm text-[var(--pa-muted)]">Caricamento…</p>
          ) : null}
          {!issuesLoading && issuesError ? (
            <p className="m-0 text-sm text-[var(--pa-muted)]">{issuesError}</p>
          ) : null}
          {!issuesLoading && !issuesError && issues.length === 0 ? (
            <p className="m-0 text-sm text-[var(--pa-muted)]">{copy.nessuna}</p>
          ) : null}
          {!issuesLoading && issues.length > 0 ? (
            <ul className="m-0 list-none space-y-2 p-0">
              {issues.map((issue) => (
                <li key={issue.number}>
                  <a
                    href={issue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-[var(--pa-border)] bg-white px-3 py-2.5 no-underline transition hover:border-[var(--pa-primary)] hover:bg-[var(--pa-surface-soft)]"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-[var(--pa-ink)]">
                        <span className="text-[var(--pa-primary)]">
                          #{issue.number}
                        </span>{" "}
                        {issue.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-[var(--pa-muted)]">
                        {copy.apertaIl} {formatIssueDate(issue.createdAt)}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                          issue.state === "open"
                            ? "bg-[color-mix(in_srgb,#008758_16%,white)] text-[#008758]"
                            : "bg-[var(--pa-surface-soft)] text-[var(--pa-muted)]"
                        }`}
                      >
                        {issue.state === "open" ? copy.aperta : copy.chiusa}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-[var(--pa-muted)]"
                        aria-hidden
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mb-0 mt-3 text-xs text-[var(--pa-muted)]">
            <a
              href={issuesSearchUrl(prefix)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              {copy.vediTutte}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
