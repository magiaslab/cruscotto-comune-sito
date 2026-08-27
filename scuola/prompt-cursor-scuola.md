# Prompt per Cursor — sezione `/scuola`

Prompt pronti da incollare, uno alla volta, in ordine. **Non lanciarli tutti insieme**: ognuno
chiude con un criterio di accettazione verificabile, e fra un prompt e l'altro conviene fare commit.

I prompt da 1 a 8 vanno eseguiti nel repo dell'**hub** (`cruscottocomune.it`).
I prompt 10 e 11 vanno eseguiti nel repo del **template** (`magiaslab/cruscotto-comune`).

---

## Prompt 0 — Regole permanenti

Non è un prompt da eseguire: è il contesto da mettere **una volta sola** in `AGENTS.md` (in coda) o
in *Cursor Settings → Rules → Project Rules*. Tutti i prompt successivi lo danno per acquisito.

```md
## Sezione /scuola — regole

La sezione /scuola è il percorso didattico sui dati aperti. Vale quanto segue, sempre.

- Next.js App Router. Ogni pagina è un **server component**. Nessun `"use client"` sul contenuto
  testuale; è ammesso solo su micro-interazioni, e il testo deve comunque essere nel markup
  server-rendered.
- Pattern di pagina identico a `src/app/riusa/`: un `layout.tsx` che esporta solo `metadata`
  (title, description, `alternates.canonical`, openGraph con `buildOgImages`, twitter,
  `robots: { index: true, follow: true }`) e un `page.tsx` che rende il contenuto.
- I contenuti testuali **non si scrivono nel JSX**: stanno in `src/lib/scuola.ts`, tipizzati, come
  già avviene in `src/lib/sections.ts`. Le pagine leggono da lì.
- Le meta description passano da `clipMetaDescription` (già in `src/lib/sections.ts`).
- Ogni URL pubblicato deve stare in `src/app/sitemap.ts` e superare `npm run check:seo`, che
  impone: risposta 200, `<h1>` presente, `<html lang="it">`, almeno 40 parole nel testo servito,
  nessuno stub con la stringa `Reindirizzamento`, nessun `window.location.replace("/#…")`.
- Navigazione fra pagine solo con `<Link>` verso URL veri. Mai ancore `#` come navigazione
  primaria, mai redirect lato client.
- Italiano come lingua di default. Tono del sito: frasi corte, concrete, niente entusiasmo
  istituzionale, nessun emoji. Riferimenti tecnici inline con `<code>`.
- Ogni pagina della sezione mantiene il disclaimer del progetto: indipendente, non ufficiale, non
  affiliato ad AgID, al Governo o a un ente locale.
- I materiali didattici sono CC BY-SA 4.0 e la licenza va dichiarata dove si scaricano.
- Tailwind con le classi e i token già usati nel progetto. Non introdurre librerie UI nuove.
- Nessuna dipendenza nuova senza chiedere prima.
```

---

## FASE 1 — La sezione esiste

### Prompt 1 — Modello dati e contenuti

```
Crea `src/lib/scuola.ts`, il modello dati della sezione didattica /scuola. Segui lo stile di
`src/lib/sections.ts`: tipi espliciti, funzioni pure, nessun accesso al filesystem, contenuti
testuali dentro il file.

Definisci ed esporta:

- `type BinarioId = "leggere" | "costruire"`
- `type Binario`: id, slug ("leggere-i-dati" | "costruire-il-cruscotto"), titolo, sottotitolo,
  h1, occhiello, oreTotali, numeroLezioni, destinatari (string[]), prerequisiti (string[]),
  prodottoFinale (string), descrizione (meta, passata da clipMetaDescription), intro (>= 40 parole)
- `type Lezione`: slug, numero (1-8), binario, titolo, h1, occhiello, durataMinuti,
  obiettivi (string[]), prerequisiti (string[]),
  attivita ({ titolo, durataMinuti, consegna }[]), discipline (string[]), digcomp (string[]),
  descrizione, intro (>= 40 parole)
- `type FormatoOrario`: nome, ore, contenuto, risultato
- `type Materiale`: id, titolo, tipo ("guida"|"slide"|"scheda"|"rubrica"|"dataset"|"modello"),
  formati, url, ultimaVerifica (ISO date), licenza
- `type Faq`: id, domanda, risposta (string, può contenere Markdown inline semplice)

Esporta le costanti `BINARI`, `LEZIONI`, `FORMATI_ORARIO`, `MATERIALI`, `FAQ` e gli helper
`lezioniPerBinario(id)`, `lezioneBySlug(slug)`, `scuolaSitemapPaths()`.

Popola i contenuti con i dati che ti passo in coda a questo prompt.

Aggiungi in fondo al file un controllo a build time che lanci un errore se un `intro` ha meno di
40 parole o se due lezioni condividono lo stesso slug.

Non creare ancora nessuna pagina: solo il modello dati, tipizzato e compilabile.

Criterio di accettazione: `npx tsc --noEmit` passa e `npm run lint` è pulito.
```

> **Da allegare al prompt**: i contenuti delle 8 lezioni e dei 2 binari li trovi nei file
> `01-binario-a-lezioni.md` e `02-binario-b-lezioni.md` del kit didattico. Incolla in coda al
> prompt gli obiettivi, le attività e le intro, oppure lascia che Cursor legga i file se li hai già
> messi in `docs/scuola/`.

---

### Prompt 2 — Landing `/scuola`

```
Crea `src/app/scuola/layout.tsx` e `src/app/scuola/page.tsx`.

Il layout esporta solo `metadata`, copiando la struttura di `src/app/riusa/layout.tsx`:
title "Scuola", canonical "/scuola", openGraph con `buildOgImages`, robots index+follow.

La pagina è un server component che legge tutto da `src/lib/scuola.ts` e rende, in quest'ordine:

1. Hero: occhiello "Open data · Scuola", `<h1>Cruscotto Comune a scuola</h1>`, payoff, paragrafo
   introduttivo, tre CTA (binario A, binario B, materiali).
2. "Cosa si porta a casa la classe": tre card con titolo e testo breve.
3. "Due binari": due card grandi, una per `Binario`, con ore, destinatari, prodotto finale e link
   alla pagina del binario. Sotto, una riga che chiarisce che il binario A è completo da solo.
4. "Quante ore servono": tabella da `FORMATI_ORARIO` con `<caption>` e intestazioni di riga.
5. "Dove si incastra nel curricolo": lista di collegamenti (educazione civica, PCTO, discipline,
   DigComp 2.2, complementarità con A Scuola di OpenCoesione).
6. "Le otto lezioni": lista numerata da `LEZIONI`, ogni voce linkata a `/scuola/lezioni/[slug]`.
   In fase 1 quelle pagine non esistono ancora: rendi le voci come testo non linkato se
   `LEZIONI_PAGINE_ATTIVE` è false (aggiungi la costante in `src/lib/scuola.ts`, default false).
7. "Materiali": elenco dei tipi di materiale, nota su formati aperti e licenza CC BY-SA 4.0,
   CTA verso /scuola/materiali.
8. "Prima di iniziare": cinque punti (account e minorenni, rete, costi, supporto, non ufficiale).
9. Chiusura: invito a segnalare il cruscotto della classe + contatto mail.

Crea i componenti riusabili `src/components/scuola/BinarioCard.tsx`,
`src/components/scuola/OreTable.tsx`, `src/components/scuola/LezioneList.tsx`. Tutti server
component.

Il testo lo prendi dal file che ti allego, senza riscriverlo.

Criteri di accettazione: la pagina ha un solo `<h1>`, i titoli scendono senza salti di livello,
la tabella ha `<caption>` e `<th scope>`, `npm run build` passa.
```

> **Da allegare al prompt**: la sezione "Landing `/scuola` — copy pronto" del documento di
> impianto. Dì esplicitamente a Cursor di non riscrivere il copy.

---

### Prompt 3 — Pagine dei due binari

```
Crea le pagine dei due binari, stesso pattern layout+page:

- `src/app/scuola/leggere-i-dati/` (binario A)
- `src/app/scuola/costruire-il-cruscotto/` (binario B)

Ogni pagina legge il proprio `Binario` da `src/lib/scuola.ts` e rende:

1. Breadcrumb `Scuola / <titolo binario>` (link veri, non ancore).
2. `<h1>` dal campo h1, occhiello, sottotitolo, intro.
3. "Per chi è" e "Cosa serve": due liste affiancate da `destinatari` e `prerequisiti`.
4. "Le quattro lezioni": per ogni lezione del binario, titolo, durata, obiettivi in forma sintetica
   e le attività con la consegna. In fase 1 il contenuto è renderizzato qui, non su pagine separate.
5. "Il prodotto finale": box con `prodottoFinale`.
6. "Materiali di questo binario": link a /scuola/materiali filtrato.
7. Navigazione in coda: link all'altro binario e a /scuola.

Nella pagina del binario B aggiungi un box di avvertenza prima delle lezioni, con il vincolo sugli
account: i termini di servizio di GitHub richiedono almeno 13 anni e quelli di Vercel almeno 16,
quindi l'account è del docente o della scuola e gli studenti sono collaboratori.

Criteri di accettazione: entrambe le pagine superano `npm run check:seo` una volta aggiunte alla
sitemap, hanno un solo h1 e almeno 40 parole di testo servito.
```

---

### Prompt 4 — Materiali e FAQ

```
Crea `src/app/scuola/materiali/` e `src/app/scuola/faq/`, stesso pattern layout+page.

/scuola/materiali:
- h1 "Materiali didattici".
- Griglia di card da `MATERIALI`: titolo, tipo, formati disponibili, peso e formato dichiarati nel
  testo del link, data di ultima verifica visibile in pagina (non solo nei metadati).
- Box licenza: CC BY-SA 4.0, con link a creativecommons.org e spiegazione in due righe di cosa si
  può fare (modificare, tradurre, ridistribuire citando la fonte e mantenendo la stessa licenza).
- Sezione "Kit dati offline" con la spiegazione del perché esiste e come rigenerarlo per un comune
  qualsiasi.
- I download puntano a GitHub Releases, non a file in `public/`.

/scuola/faq:
- h1 "Domande dei docenti".
- Elenco da `FAQ`. Se usi un accordion, domanda e risposta devono essere entrambe presenti
  nell'HTML server-rendered: niente contenuto caricato al click.
- Usa `<dl>/<dt>/<dd>` oppure `<details>/<summary>` nativi, senza JavaScript.
- Aggiungi JSON-LD di tipo FAQPage con il componente `JsonLd` già presente nel progetto.

Criteri di accettazione: aprendo la pagina FAQ con JavaScript disabilitato tutte le risposte sono
leggibili; `npm run check:seo` passa.
```

---

### Prompt 5 — Navigazione, sitemap e cross-link

```
Integra la sezione nel resto del sito.

1. `src/app/sitemap.ts`: aggiungi /scuola (priority 0.65, changeFrequency "monthly"),
   /scuola/leggere-i-dati e /scuola/costruire-il-cruscotto (0.6), /scuola/materiali (0.55),
   /scuola/faq (0.5). Prevedi già lo spread `...scuolaSitemapPaths()` per le pagine lezione di
   fase 2, gated da `LEZIONI_PAGINE_ATTIVE`.

2. Menu principale: aggiungi la voce "Scuola" fra "Riuso" e "Menzioni".

3. Footer: aggiungi "Percorso didattico" accanto a "Guida al riuso".

4. Alla fine della pagina /riusa aggiungi un box: titolo "Lo stai facendo con una classe?", due
   righe di testo e link a /scuola.

5. Verifica che nessuna delle nuove voci rompa il layout mobile del menu: se la barra diventa
   troppo affollata, proponi una soluzione prima di implementarla, non decidere da solo.

Criterio di accettazione: `npm run build && npm run check:seo` passa, e con il server avviato anche
`SEO_CHECK_BASE_URL=http://localhost:3000 npm run check:seo -- --http`.
```

---

### Prompt 6 — Dati strutturati e Open Graph

```
Aggiungi i dati strutturati alla sezione, usando il componente `JsonLd` già presente.

- Su /scuola: un oggetto schema.org `Course` con name, description, provider (Organization
  "Cruscotto Comune"), `isAccessibleForFree: true`, `inLanguage: "it"`, `educationalLevel`,
  `teaches` (array di argomenti), `license` (URL della CC BY-SA 4.0) e `hasCourseInstance` con
  `courseMode: "blended"` e `courseWorkload: "PT16H"`.
- Su ogni pagina figlia: `BreadcrumbList`.
- Predisponi in `src/lib/scuola.ts` una funzione `learningResourceJsonLd(lezione)` che produce un
  `LearningResource` con `learningResourceType: "lesson plan"` e `timeRequired: "PT2H"`, pronta per
  le pagine lezione di fase 2.

Verifica che l'immagine OG venga generata correttamente per tutte le nuove pagine tramite
`buildOgImages`, con testo specifico per pagina.

Criterio di accettazione: il JSON-LD è valido secondo lo schema, non contiene campi vuoti o
placeholder, e non duplica il `Course` su più pagine.
```

---

### Prompt 7 — Verifica finale di fase 1

```
Fai una revisione della sezione /scuola appena costruita e correggi ciò che trovi. Controlla:

1. `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm run check:seo` (anche --http).
2. Accessibilità, seguendo `docs/a11y-checklist.md`: gerarchia dei titoli senza salti, contrasto,
   navigazione da tastiera con focus visibile, tabelle con caption e th scope, link con testo
   autoesplicativo (mai "clicca qui"), ogni download con formato e peso nel testo del link.
3. Nessun `"use client"` non necessario.
4. Nessun testo hardcoded nel JSX che dovrebbe stare in `src/lib/scuola.ts`.
5. Il disclaimer "progetto indipendente, non ufficiale" è presente su tutte le pagine della
   sezione, coerente con il resto del sito.
6. Rendering mobile a 360px di larghezza: nessun overflow orizzontale, tabelle scrollabili dentro
   un contenitore proprio.

Elencami i problemi trovati con file e riga prima di correggerli, poi correggili uno alla volta.
```

---

## FASE 2 — La sezione è utilizzabile

### Prompt 8 — Pagine delle otto lezioni

```
Crea le pagine delle singole lezioni.

- `src/app/scuola/lezioni/[slug]/page.tsx` con `generateStaticParams()` che legge da `LEZIONI` e
  `generateMetadata({ params })` che costruisce title, description (da clipMetaDescription),
  canonical `/scuola/lezioni/<slug>` e openGraph.
- Rendering statico: nessun fetch a runtime, nessun contenuto dinamico.
- `notFound()` se lo slug non esiste.

Struttura della pagina:
1. Breadcrumb `Scuola / <binario> / Lezione N`.
2. Occhiello "Lezione N · Binario A|B", `<h1>`, durata, intro.
3. "Obiettivi": lista.
4. "Prerequisiti": lista. Se vuota, ometti la sezione invece di scrivere "nessuno".
5. "Svolgimento": le attività con durata e consegna, in ordine.
6. "Collegamenti disciplinari" e "DigComp 2.2": due liste compatte.
7. "Materiali di questa lezione": link ai materiali collegati.
8. Navigazione precedente/successiva fra lezioni, e ritorno alla pagina del binario.

Poi metti `LEZIONI_PAGINE_ATTIVE` a true, così i link dalla landing e dalle pagine binario si
attivano, e aggiungi gli URL alla sitemap tramite `scuolaSitemapPaths()`.

Criterio di accettazione: tutte e otto le pagine rispondono 200, hanno h1 unico e superano
`check:seo --http`. Nessuna pagina ha meno di 40 parole di testo servito.
```

---

### Prompt 9 — Strumenti, glossario, fonti didattiche

```
Crea tre pagine di supporto, stesso pattern layout+page, contenuti in `src/lib/scuola.ts`.

1. `/scuola/strumenti` — cosa serve davvero, diviso per binario: browser e foglio di calcolo per il
   binario A; account GitHub e Vercel, editor opzionale per il binario B. Aggiungi una sezione
   "Requisiti di rete" con i domini che la scuola deve consentire (github.com, vercel.com,
   dati.gov.it, istat.it, openstreetmap.org, il dominio dell'MCP AgID) e il consiglio di verificarli
   con il referente IT almeno una settimana prima.

2. `/scuola/glossario` — voci in ordine alfabetico, marcate con `<dl>`. Ogni voce ha termine,
   definizione breve e, dove utile, un esempio riferito al cruscotto. Aggiungi un indice di lettere
   in cima che punta a id veri nella pagina.

3. `/scuola/fonti` — lettura didattica del catalogo `/fonti`. Per ogni fonte del nucleo nazionale:
   chi la produce, ogni quanto si aggiorna, con che licenza, e **cosa ci fai in classe**. Non
   duplicare la tabella tecnica di /fonti: linkala e aggiungi solo le tre colonne didattiche.

Aggiorna sitemap, menu della sezione e link incrociati.

Criterio di accettazione: `/scuola/fonti` e `/fonti` non hanno paragrafi identici. Se ti accorgi
che si stanno sovrapponendo, segnalamelo invece di duplicare.
```

---

## FASE 3 — La sezione cresce

### Prompt 10 — Vetrina delle classi *(repo hub)*

```
Crea `/scuola/classi`, la vetrina dei cruscotti realizzati dalle classi.

- Dati in `src/data/scuola/classi.json`, tipizzati in `src/lib/scuola.ts`: scuola, comune,
  provincia, annoScolastico, url, docenteReferente (opzionale, solo se autorizzato), note.
- La pagina rende una griglia di card ordinate per anno scolastico decrescente, con link esterni
  `rel="noopener"`.
- Se l'array ha meno di 3 voci, la pagina non deve essere pubblicata: escludila dalla sitemap e dal
  menu, e rendi 404. Una vetrina vuota fa il danno opposto di quello che serve.
- Aggiungi in coda un box con le istruzioni per segnalare un nuovo cruscotto (mail o issue).
- Nessun dato personale di studenti minorenni: né nomi, né foto, né classi identificabili oltre
  l'anno scolastico. Applicalo come vincolo nel tipo, non solo come nota.

Criterio di accettazione: con 0, 1 o 2 voci nel JSON la rotta risponde 404 e non compare in
sitemap.xml.
```

---

### Prompt 11 — Sandbox `/demo/[istat]` *(repo template)*

```
Nel repo del template, aggiungi una modalità sandbox che permetta di vedere il cruscotto di un
comune qualsiasi senza fare il fork, pensata per l'uso in aula.

- Rotta `src/app/demo/[istat]/page.tsx`, server component, statica su una lista chiusa di comuni
  definita in `src/data/demo-comuni.json` (parti da 20-30 comuni, uno per regione, con ISTAT,
  nome, coordinate e bbox).
- La sandbox usa solo il nucleo nazionale: KPI dall'MCP AgID pubblico filtrati per ISTAT. Tutti i
  moduli opzionali (`porto`, `balneazione`, `treni`, `gtfs_locale`, `erosione_costiera`,
  `acqua_sii`, `eventi_comune`, `allerte_toscana_sir`) restano spenti a prescindere dalla config.
- Cache aggressiva: `revalidate` di almeno 24 ore, così una classe intera che apre la stessa pagina
  non genera 25 chiamate.
- Banner fisso in cima: "Anteprima didattica. Per avere il cruscotto del tuo comune serve il fork —
  guida al riuso." con link.
- `noindex` su queste rotte: non devono competere con i cruscotti veri nei motori di ricerca.
- Un selettore del comune in cima, che è un semplice `<form>` GET verso la rotta, senza JavaScript.

Prima di implementare, dimmi quali chiamate all'MCP AgID vengono effettuate per una singola
pagina e stima il carico per una classe di 25 studenti che aprono la stessa pagina insieme.
```

---

### Prompt 12 — Modalità didattica `?didattica=1` *(repo template)*

```
Nel repo del template, aggiungi una modalità didattica che spiega i KPI mentre li mostra.

- Attivata dal query param `?didattica=1`, letta lato server nella pagina (searchParams), non da
  stato client.
- Quando è attiva, ogni KPI mostra quattro informazioni: che cosa misura, chi produce il dato,
  ogni quanto si aggiorna, con che licenza. I metadati esistono già nella pagina /fonti e nella
  configurazione delle fonti: estraili in una mappa `kpiId -> metadatoFonte` in
  `src/lib/kpi-metadata.ts` invece di riscriverli.
- Resa: un blocco espandibile sotto il valore, con `<details>/<summary>` nativi, leggibile senza
  JavaScript e senza rompere il layout della card.
- Un banner discreto in cima segnala che la modalità è attiva e offre il link per uscirne.
- Le pagine con `?didattica=1` non devono avere canonical diverso: il canonical resta l'URL pulito.

Se scopri che per alcuni KPI i metadati non esistono, elencameli invece di inventarli.
```

---

## Come usarli

Un prompt alla volta, commit fra uno e l'altro, e dopo ogni prompt esegui:

```bash
npm run lint && npx tsc --noEmit && npm run build && npm run check:seo
```

Quando qualcosa non torna, il prompt di recupero più efficace è sempre lo stesso:

```
Elencami i problemi che vedi in <file>, con riga e motivo, senza correggerli.
Poi aspetta che ti dica quali correggere.
```

Due frasi da tenere a portata di mano, perché sono i due modi in cui questi lavori deragliano:

> Non riscrivere il copy che ti ho passato. Se pensi che una frase vada cambiata, dimmelo e
> spiegami perché, ma non cambiarla da solo.

> Non aggiungere dipendenze. Se pensi che ne serva una, fermati e chiedimelo.
