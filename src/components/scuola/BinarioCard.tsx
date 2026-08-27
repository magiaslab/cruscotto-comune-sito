import Link from "next/link";
import type { Binario } from "@/lib/scuola";

export function BinarioCard({
  binario,
  cta = "Apri il binario",
}: {
  binario: Binario;
  cta?: string;
}) {
  return (
    <article className="guide-card flex h-full flex-col">
      <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[var(--pa-primary)]">
        {binario.occhiello}
      </p>
      <h3 className="mb-2 mt-1 text-lg font-bold text-[var(--pa-ink)]">
        {binario.titolo}
      </h3>
      <p className="m-0 text-sm leading-relaxed text-[var(--pa-muted)]">
        {binario.sottotitolo}
      </p>
      <p className="mb-0 mt-3 text-sm leading-relaxed text-[var(--pa-ink)]">
        <strong>Prodotto finale.</strong> {binario.prodottoFinale}
      </p>
      <ul className="mb-0 mt-3 list-disc pl-5 text-sm text-[var(--pa-muted)]">
        {binario.destinatari.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p className="mb-0 mt-auto pt-4">
        <Link
          href={`/scuola/${binario.slug}`}
          className="inline-flex min-h-11 items-center font-semibold"
        >
          {cta} →
        </Link>
      </p>
    </article>
  );
}
