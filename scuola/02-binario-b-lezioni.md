# Binario B — Costruire il cruscotto

Quattro lezioni da due ore. Al termine la classe ha un cruscotto di dati aperti del proprio comune,
pubblicato online, verificato e presentato.

**Non si scrive codice.** Si fa un fork, si compila un file di configurazione e si controlla che i
numeri siano giusti.

> **Vincolo da leggere prima di tutto.** I termini di servizio di GitHub richiedono almeno **13
> anni**, quelli di Vercel almeno **16**: in una classe del biennio una parte degli studenti non ha
> l'età per l'account Vercel. **Gli account sono del docente o della scuola**, gli studenti lavorano
> come collaboratori del repository. Non far creare account personali agli studenti.

Ogni lezione ha la **guida per il docente** e la **scheda studente**. Licenza CC BY-SA 4.0.

---
---

# Lezione 5 — Dal fork al sito online

**Binario B · 120 minuti**

## Obiettivi

Al termine della lezione lo studente sa:

- spiegare che cos'è un repository e a che cosa serve la storia delle versioni;
- spiegare che cos'è un fork e perché non è una copia qualsiasi;
- descrivere che cosa succede quando un sito viene "messo online";
- verificare che un servizio funzioni interrogando direttamente un endpoint;
- riconoscere che il cruscotto appena pubblicato è ancora generico, e dire che cosa manca.

## Prerequisiti

Lezioni 1–2 (consigliate). Account GitHub e Vercel del docente, creati **prima** della lezione.

## Preparazione del docente — obbligatoria

Questa è l'unica lezione del percorso che va provata prima. Fai il fork e il deploy a casa, fino in
fondo, poi cancella tutto e rifallo in classe.

- [ ] Account GitHub attivo (docente o scuola)
- [ ] Account Vercel attivo, collegato a GitHub
- [ ] Fork e deploy provati almeno una volta
- [ ] `github.com` e `vercel.com` sbloccati dal filtro di rete della scuola *(chiedilo al referente
      IT con una settimana di anticipo: è la causa numero uno di lezioni saltate)*
- [ ] Nome del progetto Vercel deciso in anticipo, per non perdere tempo in aula
- [ ] Piano B pronto: registrazione video dei passaggi, da proiettare se la rete cade

## Materiali

Proiettore · un dispositivo per gruppo · scheda studente 5 ·
[guida al riuso](https://www.cruscottocomune.it/riusa) · registrazione di riserva.

## Svolgimento

**Apertura — 10 minuti.**
Proietta il cruscotto di San Vincenzo e poi la pagina GitHub del template. Domanda:
*«Questi due sono lo stesso programma. Che cosa cambia fra loro?»* La risposta — cambia la
configurazione, non il codice — è il concetto centrale delle lezioni 5 e 6.

**Mini-lezione — 20 minuti.**

- **Repository**: una cartella con dentro tutta la storia delle sue modifiche. Ogni cambiamento ha
  un autore, una data e un motivo. Non si perde niente e si può sempre tornare indietro.
- **Fork**: una copia che *ricorda da dove viene*. È diverso da scaricare uno zip: il fork mantiene
  il collegamento con l'originale, e più avanti si potranno ricevere gli aggiornamenti.
- **Deploy**: mettere il programma su un computer sempre acceso e collegato a internet, con un
  indirizzo pubblico. Vercel fa questo, gratis, e rifà il lavoro ogni volta che il repository cambia.
- **Template**: il repository di Cruscotto Comune non è il cruscotto di San Vincenzo svuotato. È un
  progetto pensato per essere riusato: nasce senza dati di nessun comune.

**Attività 1 — 30 minuti — Il fork.**
Dal profilo GitHub del docente, proiettato: fork di `github.com/magiaslab/cruscotto-comune`.
Mentre si fa, chiedi a voce cosa vedono: il numero di fork, la licenza, l'ultimo commit, il file
README. Sono tutte informazioni che nella lezione 1 avrebbero chiamato "metadati".

**Attività 2 — 30 minuti — Il deploy.**
Import del repository su Vercel, deploy. Nessuna variabile d'ambiente obbligatoria: i KPI comunali
arrivano dall'MCP pubblico di AgID. Mentre la build gira (qualche minuto), fai compilare la prima
parte della scheda studente: che cosa sta succedendo in questo momento?

**Attività 3 — 20 minuti — Lo smoke test.**
Apri `https://NOME-PROGETTO.vercel.app/api/kpi` e guarda la risposta. È testo, non un sito: è il
modo in cui il programma parla con altri programmi. Poi apri il sito vero.

Domanda da fare adesso, mentre lo vedono: *«Di che comune è questo cruscotto?»* La risposta è che
non è di nessuno: è la configurazione di default. Ed è esattamente il ponte per la lezione 6.

**Confronto — 10 minuti.**
Ognuno annota sulla scheda l'indirizzo del deploy. Da questo momento la classe ha un sito pubblico:
dillo esplicitamente, e dì anche che questo comporta delle responsabilità (torneranno nella
lezione 7).

**Chiusura — 10 minuti.**

> Il codice è uguale per tutti i comuni. Quello che cambia è un file di configurazione. Domani lo
> compiliamo.

## Cosa può andare storto

- **`github.com` bloccato dal filtro scolastico.** Non c'è workaround pulito. Prevenilo con il
  referente IT; se succede lo stesso, usa la registrazione di riserva e sposta il fork a casa.
- **Build fallita.** Leggi il log insieme alla classe invece di nasconderlo: è un ottimo momento
  didattico. Le cause più comuni sono il nome del progetto già usato e limiti dell'account gratuito.
- **Il deploy ci mette più del previsto.** Ecco perché la scheda studente ha una parte da compilare
  durante l'attesa.
- **Uno studente chiede se può farlo dal suo account.** Rispondi di no, e spiega perché: i termini
  di servizio (13 anni per GitHub, 16 per Vercel) e la responsabilità di quello che si pubblica. È
  una lezione di cittadinanza digitale migliore di qualsiasi definizione.

## Compito

Scrivere cinque righe: che cosa vuol dire che un sito è "online"? Dove si trova fisicamente?

## Collegamenti

Informatica · educazione civica (cittadinanza digitale, responsabilità di ciò che si pubblica) ·
DigComp 2.2 area 3.1 e 5.

---

## Scheda studente 5 — Il primo deploy

**Nomi:** ………………………………………  **Data:** ………

**Durante l'attesa della build**

1. Che cos'è un *fork*, con parole tue?
   …………………………………………………………………………

2. In questo momento, dove si trova il programma che stiamo pubblicando?
   …………………………………………………………………………

3. Chi paga il computer su cui gira?
   …………………………………………………………………………

**A deploy fatto**

| | |
|---|---|
| Indirizzo del nostro cruscotto | |
| Ora del primo deploy | |
| Risposta di `/api/kpi`: funziona? | ☐ sì ☐ no |
| Primo comune mostrato dal cruscotto | |

**Osserva e scrivi**

Guarda il cruscotto appena pubblicato ed elenca **tre cose che non vanno bene** perché non
riguardano il nostro comune:

1. …………………………………………………………………………
2. …………………………………………………………………………
3. …………………………………………………………………………

**Una domanda per la prossima volta**
…………………………………………………………………………

---
---

# Lezione 6 — Configurare l'identità del comune

**Binario B · 120 minuti**

## Obiettivi

Al termine della lezione lo studente sa:

- leggere e modificare un file JSON senza romperlo;
- spiegare perché configurazione e codice sono cose separate;
- trovare il codice ISTAT, il codice catastale e le coordinate del proprio comune;
- decidere quali moduli hanno senso per il proprio territorio e quali vanno spenti;
- riconoscere l'obbligo di citare il progetto originale.

## Prerequisiti

Lezione 5. Il cruscotto della classe deve essere già online.

## Preparazione del docente

- [ ] Trova in anticipo: **codice ISTAT** (sei cifre), **codice catastale** (quattro caratteri,
      serve per le scuole del MIM), **coordinate del municipio** (latitudine e longitudine)
- [ ] Procurati lo **stemma del comune** in formato SVG o PNG, e verifica se puoi usarlo: se non è
      chiaro, la risposta corretta è non usarlo e lasciare il segnaposto
- [ ] Rileggi la guida alle menzioni del progetto

## Materiali

Proiettore · un dispositivo per gruppo · scheda studente 6 · un validatore JSON online ·
`config/comune.example.json` proiettato.

## Svolgimento

**Apertura — 10 minuti.**
Proietta `config/comune.example.json`. È lungo e a prima vista incomprensibile: dillo tu, prima che
lo pensino loro. Poi mostra che è fatto di poche cose ripetute: nomi fra virgolette, due punti,
valori. Domanda: *«Secondo voi quale riga fa comparire il nome del nostro comune?»*

**Mini-lezione — 25 minuti.**

**Che cos'è JSON.** Un modo di scrivere dati che sia leggibile da una persona e da un programma.
Tre regole e basta: le chiavi stanno fra virgolette; i valori possono essere testo, numeri,
`true`/`false`, elenchi fra parentesi quadre o altri blocchi fra graffe; **niente virgola dopo
l'ultimo elemento**. Quest'ultima è la causa del 90% degli errori: annunciala adesso.

**Configurazione contro codice.** Il programma non sa niente di nessun comune. Sa leggere un file e
comportarsi di conseguenza. È lo stesso principio per cui un'unica app di mappe funziona in tutto il
mondo. Cambiare la configurazione non è "programmare meno": è il modo giusto di far funzionare la
stessa cosa in ottomila posti diversi.

**Le chiavi che contano.** Proietta e commenta solo queste:

| Chiave | Che cosa fa |
|---|---|
| `istat_code` | Il codice a sei cifre del comune. È la chiave che filtra quasi tutti i dati nazionali |
| `nome`, `provincia`, `regione` | Come si chiama il comune, dove sta |
| `miur_codice_catastale` | Serve per far comparire le scuole del proprio comune |
| `farmacie_di_turno_cod` | Il codice ISTAT senza lo zero iniziale |
| `geo.map_center`, `geo.meteo` | Latitudine e longitudine: dove si centra la mappa e dove si prende il meteo |
| `geo.bbox_radius_km` | Quanto territorio intorno al centro considerare |
| `geo.terrain_sea_side` | Se il comune è sul mare e da che parte. Sbagliarlo dà risultati buffi |
| `brand.stemma_path` | Lo stemma. Vale solo se avete il diritto di usarlo |
| `brand.site_url` | L'indirizzo pubblico del cruscotto |
| `site.mode` | `dashboard` fa sì che la home sia il cruscotto |
| `fork.maintainer_*` | Chi mantiene questo fork: qui ci va la scuola, non l'autore del template |
| `features.*` | Gli interruttori: ogni modulo si accende o si spegne |

**Menzioni.** Il file `src/lib/project-origin.ts` contiene i crediti al progetto originale e **non
va modificato**. Il fork indica se stesso in `fork.*`. È una regola tecnica ma soprattutto etica:
si riusa il lavoro di qualcun altro dicendolo. Collega esplicitamente questo punto alla lezione 1:
la licenza CC BY chiede la stessa cosa.

**Attività 1 — 20 minuti — La configurazione su carta.**
Prima di toccare il computer, ogni gruppo compila su carta la propria parte (scheda studente 6):
chi cerca il codice ISTAT, chi le coordinate, chi decide i moduli, chi scrive i dati del fork.
Farlo su carta prima serve a due cose: si divide il lavoro e non si rompe il JSON.

**Attività 2 — 35 minuti — La configurazione vera.**
Si mettono insieme i pezzi in `config/comune.json` (copiato da `config/comune.example.json`).
Si valida il file con un validatore JSON prima di salvarlo. Commit. Vercel ricostruisce da solo.

**Attività 3 — 20 minuti — Gli interruttori.**
Guardate insieme la lista `features` e decidete quali spegnere:

- `porto`, `balneazione`, `erosione_costiera` → solo comuni costieri, con porto o spiagge attrezzate
- `treni` → solo se c'è una stazione ferroviaria
- `gtfs_locale` → solo se la Regione pubblica i dati del trasporto pubblico
- `allerte_toscana_sir` → solo Toscana
- `acqua_sii`, `arpat_aria` → dipendono dal gestore e dall'agenzia regionale
- `assistente_rag`, `dae_telegram` → opzionali, richiedono chiavi: nel percorso scolastico restano
  spenti

Regola d'oro, da scrivere alla lavagna: **un modulo acceso senza i dati giusti è peggio di un
modulo spento.** Un pannello vuoto o con dati di un altro comune fa danno alla credibilità di tutto
il cruscotto.

**Confronto — 10 minuti.**
Aprite il cruscotto aggiornato. Confrontate con le "tre cose che non vanno bene" annotate nella
lezione 5: quante sono state risolte?

## Cosa può andare storto

- **JSON non valido.** Virgola di troppo, virgolette sbagliate, parentesi non chiusa. Il validatore
  dice la riga. Non correggere tu: fallo trovare a loro, è l'esercizio.
- **Il comune non compare nei dati.** Quasi sempre il codice ISTAT è sbagliato o gli sono stati
  tolti gli zeri iniziali. Verifica su `/api/kpi`.
- **`terrain_sea_side` sbagliato.** Il rendering del territorio esce strano. È un errore molto
  visibile e molto istruttivo: mostra che una configurazione sbagliata non dà errore, dà un
  risultato *plausibile ma falso*. Notevole ponte verso la lezione 7.
- **Lo stemma non si può usare.** Non forzare. Lasciare il segnaposto è la scelta corretta e
  didatticamente migliore: si può parlare di diritti sulle immagini.

## Compito

Scrivere in cinque righe che cosa succederebbe se domani cambiassimo solo il codice ISTAT nel file
di configurazione.

## Collegamenti

Informatica (formati dati, versionamento) · geografia (coordinate, confini) · educazione civica
(attribuzione, licenze) · DigComp 2.2 area 3.1, 3.3.

---

## Scheda studente 6 — La configurazione su carta

**Gruppo:** ………………………………………  **Parte assegnata:** ………

**Parte 1 — Identità del comune**

| Chiave | Valore |
|---|---|
| `istat_code` | |
| `nome` | |
| `provincia` (sigla) | |
| `regione` | |
| `miur_codice_catastale` | |
| `farmacie_di_turno_cod` *(ISTAT senza lo zero iniziale)* | |

Dove ho trovato il codice ISTAT: ……………………………………………

**Parte 2 — Geografia**

| Chiave | Valore |
|---|---|
| `geo.map_center` (lat, lon del municipio) | |
| `geo.meteo` (lat, lon) | |
| `geo.bbox_radius_km` | |
| `geo.terrain_sea_side` (`none` / lato del mare) | |

Dove ho trovato le coordinate: ……………………………………………

**Parte 3 — Moduli: acceso o spento?**

| Modulo | On/Off | Perché |
|---|---|---|
| `porto` | | |
| `balneazione` | | |
| `treni` | | |
| `gtfs_locale` | | |
| `rifiuti_ispra` | | |
| `dae` | | |

**Parte 4 — Chi siamo noi**

| Chiave | Valore |
|---|---|
| `fork.maintainer_name` | |
| `fork.maintainer_url` | |
| `brand.site_url` | |

☐ Ho verificato che **non** abbiamo modificato `src/lib/project-origin.ts`
☐ Ho verificato che il cruscotto dichiara di essere un progetto **non ufficiale**

**Controllo finale prima del salvataggio**

☐ Nessuna virgola dopo l'ultimo elemento
☐ Tutte le virgolette aperte sono chiuse
☐ Il validatore JSON non dà errori
☐ Non abbiamo acceso moduli per cui non abbiamo i dati

---
---

# Lezione 7 — Verificare: dati, accessibilità, menzioni

**Binario B · 120 minuti**

## Obiettivi

Al termine della lezione lo studente sa:

- verificare un valore mostrato risalendo alla fonte originale;
- documentare uno scostamento in modo che qualcun altro possa riprodurlo;
- controllare i requisiti di base dell'accessibilità di una pagina;
- riconoscere le responsabilità di chi pubblica dati.

## Prerequisiti

Lezione 6. Il cruscotto deve essere configurato sul proprio comune.

## Materiali

Proiettore · un dispositivo per gruppo · scheda studente 7 · le fonti primarie individuate nella
lezione 2 · kit dati offline.

## Svolgimento

**Apertura — 10 minuti.**
Proietta il cruscotto della classe. Frase da dire ad alta voce: *«Da adesso questo sito è nostro. Se
un numero è sbagliato, la colpa è nostra, non del programma.»* È il passaggio dal fare al
rispondere di quello che si fa.

**Mini-lezione — 20 minuti.**

**Che cosa vuol dire verificare.** Non "sembra giusto", ma: prendo il numero mostrato, trovo la
fonte primaria, confronto, e annoto tre cose — valore mostrato, valore alla fonte, periodo di
ciascuno. Se non coincidono, le cause possibili sono poche: periodi diversi, definizioni diverse
dello stesso indicatore, errore di configurazione, errore del programma. In quest'ordine di
probabilità.

**Accessibilità, in quattro controlli.** Un sito pubblico deve poter essere usato da tutti. Con
quattro prove si scopre già molto: navigare la pagina **solo con il tasto Tab** e vedere se si
capisce dove si è; ingrandire al **200%** e vedere se si rompe qualcosa; controllare che le
immagini abbiano un testo alternativo; controllare che il testo si legga bene sullo sfondo. Colleghi
questo alla sezione "Disabilità" del cruscotto: è coerente parlarne mostrando dati sull'accessibilità
del territorio.

**Menzioni.** Verificare che il cruscotto citi il progetto originale e dichiari di non essere
ufficiale. Non è burocrazia: è la stessa regola della licenza CC BY vista alla lezione 1, applicata
a noi invece che agli altri.

**Attività A — 35 minuti — Data quality audit.**
Ogni gruppo prende una sezione del cruscotto e verifica **tre numeri** contro la fonte primaria,
compilando la scheda 7. Non serve trovare errori: serve documentare il controllo. Se un numero
coincide, si scrive che coincide.

**Attività B — 20 minuti — Accessibilità.**
Ogni gruppo fa i quattro controlli su una pagina diversa e annota i problemi con la pagina e
l'elemento preciso.

**Attività C — 10 minuti — Menzioni.**
Un gruppo verifica il rispetto delle regole di attribuzione e la presenza del disclaimer.

**Confronto — 20 minuti.**
Si mette in comune tutto. Poi la decisione più importante della lezione: **che cosa facciamo con
quello che abbiamo trovato?**

- Se è un errore di configurazione → si corregge e si rifà il commit.
- Se è un errore del programma o della fonte → **si apre una issue** sul repository originale,
  scritta bene: che cosa mi aspettavo, che cosa ho visto, come riprodurlo, quale fonte ho usato.

Se la classe apre una issue vera, è la prima volta che contribuisce a un progetto open source. È
una cosa da dire ad alta voce, perché è vera e perché conta.

**Chiusura — 5 minuti.**

> Pubblicare un dato non è dire una cosa. È prendersi la responsabilità che sia vera, e dire dove
> l'hai presa.

## Cosa può andare storto

- **Non si trovano scostamenti.** Va benissimo. L'audit ha comunque prodotto una tracciabilità:
  ora sappiamo che quei tre numeri sono controllati e da dove vengono.
- **Si trovano scostamenti ovunque.** Prima di gridare all'errore, controlla i periodi: nove volte
  su dieci si sta confrontando un dato 2024 con uno 2022.
- **Un gruppo vuole "sistemare" il codice.** Non è l'obiettivo del percorso e non serve: la issue è
  il contributo giusto a questo livello. Se qualcuno ha voglia e competenza, se ne parla fuori
  dall'orario.

## Compito

Scrivere una issue in bella copia (anche se non verrà inviata), rispettando la struttura: contesto,
comportamento atteso, comportamento osservato, passi per riprodurlo, fonte.

## Collegamenti

Informatica · statistica · educazione civica (responsabilità, accessibilità come diritto) ·
italiano (scrittura tecnica) · DigComp 2.2 area 1.2, 2.4, 5.

---

## Scheda studente 7 — Audit

**Gruppo:** ………………  **Sezione del cruscotto verificata:** ………………

### A. Verifica dei dati

| | Numero 1 | Numero 2 | Numero 3 |
|---|---|---|---|
| Indicatore | | | |
| Valore mostrato dal cruscotto | | | |
| Periodo indicato dal cruscotto | | | |
| Fonte primaria consultata | | | |
| Valore alla fonte | | | |
| Periodo alla fonte | | | |
| Coincidono? | ☐ sì ☐ no | ☐ sì ☐ no | ☐ sì ☐ no |
| Se no, causa più probabile | | | |

### B. Accessibilità

| Controllo | Esito | Che cosa non va |
|---|---|---|
| Navigo tutta la pagina solo con Tab e capisco dove sono | ☐ ok ☐ no | |
| A zoom 200% non si rompe niente | ☐ ok ☐ no | |
| Le immagini hanno un testo alternativo | ☐ ok ☐ no | |
| Il testo si legge bene sullo sfondo | ☐ ok ☐ no | |

### C. Menzioni

☐ Il cruscotto cita il progetto originale
☐ Il cruscotto dichiara di essere un progetto indipendente e non ufficiale
☐ Le fonti dei dati sono indicate
☐ La nostra scuola è indicata come manutentrice del fork

### D. Che cosa ne facciamo

☐ Correggiamo la configurazione — che cosa: ……………………………………………
☐ Apriamo una issue — titolo: ……………………………………………
☐ Nessuna azione necessaria — perché: ……………………………………………

**Bozza della issue**

- Che cosa mi aspettavo: ……………………………………………
- Che cosa ho visto: ……………………………………………
- Come si riproduce: ……………………………………………
- Fonte che ho usato per verificare: ……………………………………………

---
---

# Lezione 8 — Raccontare i dati

**Binario B · 120 minuti**

## Obiettivi

Al termine della lezione lo studente sa:

- costruire una data story: domanda, dato, contesto, confronto, limite, proposta;
- scegliere la forma giusta per mostrare un dato;
- presentare a un pubblico che non conosce l'argomento;
- dire che cosa **non** si sa, senza considerarlo una sconfitta.

## Prerequisiti

Tutte le lezioni precedenti. Se è stato fatto anche il binario A, serve l'esito della richiesta di
accesso civico della lezione 4.

## Materiali

Proiettore · rubrica di valutazione distribuita alla classe · scheda studente 8 ·
il cruscotto della classe.

## Svolgimento

**Apertura — 10 minuti.**
Domanda diretta: *«Se aveste cinque minuti davanti al sindaco, che cosa gli direste con i dati che
avete raccolto?»* Raccogli le prime risposte: saranno elenchi di numeri. Il lavoro della lezione è
trasformarle in un discorso.

**Mini-lezione — 20 minuti.**

**La struttura in sei mosse.** Ogni data story funziona così, e nell'ordine:

1. **Domanda** — che cosa volevamo sapere. Non "abbiamo raccolto dati su X", ma "ci siamo chiesti se…"
2. **Dato** — il numero, con periodo e fonte. Uno solo, quello che regge tutto.
3. **Contesto** — che cosa vuol dire quel numero. Il denominatore, la scala.
4. **Confronto** — rispetto a che cosa. Altri comuni comparabili, o lo stesso comune nel tempo.
5. **Limite** — che cosa non sappiamo, e perché. Il dato mancante, il periodo vecchio, la richiesta
   di accesso senza risposta.
6. **Proposta** — che cosa si potrebbe fare. Anche piccola: pubblicare un dato in formato aperto è
   già una proposta.

Il punto 5 è quello che distingue una presentazione seria da una pubblicitaria. Insisti: **dire
quello che non si sa aumenta la credibilità, non la riduce.**

**Scegliere la forma.** Tre regole sufficienti a questo livello: quantità nel tempo → linea;
confronto fra pochi elementi → barre; una proporzione → una barra sola o un numero grande scritto
bene. Le torte quasi mai. E in ogni caso: **il titolo del grafico dice la conclusione**, non
l'argomento. Non "Raccolta differenziata 2019-2024", ma "La differenziata è ferma dal 2021".

**Regole d'oro della presentazione.** Un messaggio per slide. Fonte e periodo sempre visibili.
Nessun numero senza denominatore. Se una slide ha bisogno di essere spiegata per due minuti, sono
due slide.

**Attività — 50 minuti.**
Ogni gruppo prepara cinque minuti su un tema del cruscotto, seguendo le sei mosse. Chi ha fatto il
binario A inserisce l'esito della richiesta di accesso civico: se è arrivata una risposta, è un
risultato; se non è arrivata, **è un risultato ancora migliore** ed è esattamente il punto 5.

**Prova generale — 25 minuti.**
Due o tre gruppi presentano. Gli altri valutano con la rubrica, che hanno in mano dall'inizio del
percorso. Feedback fra pari con una regola sola: prima una cosa che ha funzionato, poi una cosa da
cambiare, entrambe specifiche.

**Chiusura — 15 minuti.**
Si decide dove e quando presentare davvero: open day, assemblea di istituto, consiglio comunale,
sito della scuola. E si manda l'indirizzo del cruscotto per la vetrina delle classi.

> Un dato che nessuno legge non ha cambiato niente. Il lavoro finisce quando qualcun altro capisce.

## Cosa può andare storto

- **I gruppi presentano elenchi di numeri.** È normale al primo giro. Rimanda indietro con una sola
  domanda: *«qual è la tua domanda di partenza?»*
- **Nessuno vuole dire i limiti.** Insisti, con l'argomento pratico: se non li dici tu, li dirà
  qualcuno del pubblico, e a quel punto sembrerà che li nascondevi.
- **La presentazione pubblica non si riesce a organizzare.** Ripiega su una registrazione video
  pubblicata sul sito della scuola. Il punto è che qualcuno fuori dalla classe la veda.

## Prodotto finale

- Presentazione di 5 minuti a gruppo
- Cruscotto pubblicato e configurato sul proprio comune
- Indirizzo inviato per la vetrina delle classi

## Collegamenti

Italiano (testo argomentativo, esposizione) · arte e immagine · educazione civica ·
matematica e statistica · DigComp 2.2 area 2.1, 3.1.

---

## Scheda studente 8 — La nostra data story

**Gruppo:** ………………………………………  **Tema:** ………………………………………

**1. Domanda** — che cosa volevamo sapere
…………………………………………………………………………

**2. Dato** — il numero che regge tutto
- Valore: …………………  Periodo: …………………  Fonte: …………………

**3. Contesto** — che cosa significa davvero
…………………………………………………………………………

**4. Confronto** — rispetto a che cosa
…………………………………………………………………………

**5. Limite** — che cosa NON sappiamo e perché
…………………………………………………………………………

**6. Proposta** — che cosa si potrebbe fare
…………………………………………………………………………

**Il grafico**

- Che cosa mostro: ……………………………………………
- Che forma uso (linea / barre / numero grande): ……………………………………………
- **Titolo del grafico** *(deve dire la conclusione, non l'argomento)*:
  ……………………………………………

**Prima di presentare — controllo**

☐ Ogni slide ha un solo messaggio
☐ Ogni numero ha il periodo e la fonte
☐ Ogni percentuale ha il suo denominatore
☐ Abbiamo detto almeno una cosa che non sappiamo
☐ Abbiamo detto che il cruscotto non è ufficiale
☐ Stiamo dentro i 5 minuti *(provato con il cronometro: ……… minuti)*

**Feedback ricevuto dai compagni**

- Ha funzionato: ……………………………………………
- Da cambiare: ……………………………………………

---

*Materiali del progetto [Cruscotto Comune](https://www.cruscottocomune.it/). Licenza CC BY-SA 4.0.
Progetto indipendente, non ufficiale.*
