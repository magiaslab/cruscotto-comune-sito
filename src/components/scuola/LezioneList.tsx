import Link from "next/link";
import type { Lezione } from "@/lib/scuola";
import { LEZIONI_PAGINE_ATTIVE } from "@/lib/scuola";

export function LezioneList({
  lezioni,
  linkate = LEZIONI_PAGINE_ATTIVE,
}: {
  lezioni: Lezione[];
  linkate?: boolean;
}) {
  return (
    <ol className="m-0 list-none space-y-3 p-0">
      {lezioni.map((l) => {
        const inner = (
          <>
            <span className="font-semibold text-[var(--pa-primary)]">
              {l.numero}.
            </span>{" "}
            <span className="font-semibold text-[var(--pa-ink)]">{l.titolo}</span>
            <span className="block text-sm text-[var(--pa-muted)]">
              {l.occhiello} · {l.durataMinuti} minuti · {l.descrizione}
            </span>
          </>
        );
        return (
          <li
            key={l.slug}
            className="guide-card"
          >
            {linkate ? (
              <Link
                href={`/scuola/lezioni/${l.slug}`}
                className="block text-inherit no-underline hover:underline"
              >
                {inner}
              </Link>
            ) : (
              <div>{inner}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
