import type { SchedaStudente } from "@/lib/scuola";

export function SchedaStampabile({ scheda }: { scheda: SchedaStudente }) {
  return (
    <section className="scheda-studente mt-10 rounded-xl border border-dashed border-[var(--pa-border)] bg-white p-4 sm:p-6">
      <h2 className="guide-h2 mt-0">{scheda.titolo}</h2>
      <p>{scheda.istruzioni}</p>
      <p className="text-sm text-[var(--pa-muted)]">
        {scheda.campiIntestazione.map((c) => `${c}: ……………………`).join("   ")}
      </p>
      {scheda.tabelle.map((t) => (
        <div key={t.caption} className="my-4 overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="mb-2 text-left font-semibold">{t.caption}</caption>
            <thead>
              <tr className="border-b border-[var(--pa-border)]">
                {t.colonne.map((col) => (
                  <th key={col} scope="col" className="py-2 pr-3">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(t.righeEtichette && t.righeEtichette.length > 0
                ? t.righeEtichette
                : ["", "", ""]
              ).map((etichetta, i) => (
                <tr key={`${t.caption}-${i}`} className="border-b border-[var(--pa-border)]">
                  <th scope="row" className="py-3 pr-3 align-top font-medium">
                    {etichetta || "\u00a0"}
                  </th>
                  {t.colonne.slice(1).map((col) => (
                    <td key={col} className="py-3 pr-3 align-top">
                      {"\u00a0"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {t.note ? (
            <p className="mt-2 text-sm text-[var(--pa-muted)]">{t.note}</p>
          ) : null}
        </div>
      ))}
      {scheda.domande.length > 0 ? (
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          {scheda.domande.map((d) => (
            <li key={d}>
              {d}
              <div className="mt-2 min-h-10 border-b border-[var(--pa-border)]" />
            </li>
          ))}
        </ol>
      ) : null}
      {scheda.checklist.length > 0 ? (
        <ul className="mt-4 list-none space-y-2 p-0">
          {scheda.checklist.map((c) => (
            <li key={c} className="flex gap-2">
              <span aria-hidden="true">☐</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {scheda.attenzione ? (
        <p className="guide-callout mt-4">
          <strong>Attenzione.</strong> {scheda.attenzione}
        </p>
      ) : null}
    </section>
  );
}
