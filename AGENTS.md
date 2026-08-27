<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Sezione /scuola — regole

La sezione /scuola è il percorso didattico sui dati aperti. Vale quanto segue, sempre.

- Next.js App Router. Ogni pagina è un **server component**. Nessun `"use client"` sul contenuto
  testuale; è ammesso solo su micro-interazioni, e il testo deve comunque essere nel markup
  server-rendered.
- I contenuti testuali **non si scrivono nel JSX**: stanno in `src/lib/scuola.ts`, tipizzati.
  Le pagine leggono da lì.
- Le meta description passano da `clipMetaDescription` (`src/lib/meta.ts`).
- Navigazione fra pagine solo con `<Link>` verso URL veri. Mai ancore `#` come navigazione
  primaria, mai redirect lato client.
- Italiano come lingua di default. Tono del sito: frasi corte, concrete, niente entusiasmo
  istituzionale, nessun emoji. Riferimenti tecnici inline con `<code>`.
- Ogni pagina della sezione mantiene il disclaimer del progetto: indipendente, non ufficiale, non
  affiliato ad AgID, al Governo o a un ente locale.
- I materiali didattici sono CC BY-SA 4.0 e la licenza va dichiarata dove si scaricano.
- Tailwind con le classi e i token già usati nel progetto. Non introdurre librerie UI nuove.
- Nessuna dipendenza nuova senza chiedere prima.
