import { ScuolaChrome } from "@/components/scuola/ScuolaChrome";
import {
  GLOSSARIO,
  glossarioLettere,
  glossarioPerLettera,
  scuolaPageMetadata,
} from "@/lib/scuola";

export const metadata = scuolaPageMetadata({
  title: "Glossario",
  description:
    "Trenta voci, in ordine alfabetico. Ogni voce ha una definizione breve e, dove serve, un esempio preso dal cruscotto. Pensato per essere letto dagli studenti.",
  path: "/scuola/glossario",
});

export default function Page() {
  const lettere = glossarioLettere();
  const perLettera = glossarioPerLettera();
  return (
    <ScuolaChrome
      crumbs={[
        { href: "/scuola", label: "Scuola" },
        { href: "/scuola/glossario", label: "Glossario" },
      ]}
    >
      <h1 className="mb-4 mt-0 text-3xl font-bold leading-tight text-[var(--pa-ink)] sm:text-4xl">
        Glossario
      </h1>
      <p>
        {GLOSSARIO.length} voci, in ordine alfabetico. Ogni voce ha una
        definizione breve e, dove serve, un rinvio alla lezione. Pensato per
        essere letto dagli studenti, non per essere completo. Licenza CC BY-SA
        4.0.
      </p>
      <nav aria-label="Indice alfabetico" className="no-print mb-6 flex flex-wrap gap-2">
        {lettere.map((ch) => (
          <a
            key={ch}
            href={`#lettera-${ch}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--pa-border)] bg-white px-2 font-semibold no-underline hover:border-[var(--pa-primary)]"
          >
            {ch}
          </a>
        ))}
      </nav>
      {[...perLettera.entries()].map(([ch, voci]) => (
        <section key={ch} id={`lettera-${ch}`} className="mt-8">
          <h2 className="guide-h2 mt-0">{ch}</h2>
          <dl>
            {voci.map((v) => (
              <div key={v.id} className="mb-4">
                <dt id={v.id} className="font-bold text-[var(--pa-ink)]">
                  {v.termine}
                </dt>
                <dd className="mb-0 mt-1 text-[var(--pa-muted)]">
                  {v.definizione}
                  {v.esempio ? ` ${v.esempio}` : null}
                  {v.lezione ? ` → Lezione ${v.lezione}` : null}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </ScuolaChrome>
  );
}
