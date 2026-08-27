# Guida docente — Cruscotto Comune a scuola

Percorso didattico sui dati aperti che finisce con un cruscotto vero, online, per il comune della
scuola. Otto lezioni da due ore, divise in due binari indipendenti.

**Licenza:** CC BY-SA 4.0 — si può modificare, tradurre, adattare e ridistribuire, citando la fonte
e mantenendo la stessa licenza.
**Ultima verifica:** agosto 2026.

---

## 1. In due minuti

| | |
|---|---|
| **Destinatari** | Secondaria di primo grado (binario A), secondaria di secondo grado (entrambi) |
| **Durata** | 4, 8, 16 o 33 ore secondo il formato scelto |
| **Prodotto finale** | Un data report, oppure un cruscotto pubblicato online per il proprio comune |
| **Costo** | Zero |
| **Serve saper programmare?** | No. Il cruscotto si personalizza compilando un file di configurazione |

Il percorso nasce da [Cruscotto Comune](https://www.cruscottocomune.it/), template open source per
dashboard di dati aperti comunali, e dal suo primo esemplare,
[Cruscotto San Vincenzo](https://www.cruscottosanvincenzo.it/).

---

## 2. I due binari

### Binario A — Leggere i dati (lezioni 1–4, 8 ore)

Il cruscotto è l'oggetto di studio, non il prodotto. La classe cerca le fonti, confronta comuni
simili, smonta i KPI ingannevoli e chiede quello che manca. Serve un browser e un foglio di calcolo.
Nessun account, nessun deploy.

**È un percorso completo anche da solo.** Non è il riscaldamento del binario B.

### Binario B — Costruire il cruscotto (lezioni 5–8, 8 ore)

Fork del template, deploy, configurazione, verifica, presentazione pubblica. Zero righe di codice.
Richiede un account GitHub e un account Vercel **intestati al docente o alla scuola**.

### Come si combinano

- **Solo A** — qualsiasi ordine di scuola, educazione civica, italiano, geografia, diritto.
- **Solo B** — se la classe ha già lavorato sui dati (per esempio ha fatto ASOC) e vuole il prodotto.
- **A + B** — il percorso completo da 16 ore. È la combinazione che consigliamo.

---

## 3. Formati orari

| Formato | Ore | Cosa si fa | Cosa resta alla classe |
|---|---|---|---|
| Assaggio | 4 | Lezioni 1 e 3 | Una scheda di lettura dei dati del proprio comune |
| Base A | 8 | Lezioni 1–4 | Un data report e una richiesta di accesso civico inviata |
| Base B | 8 | Lezioni 5–8 | Un cruscotto online e una presentazione |
| Completo | 16 | Lezioni 1–8 | Cruscotto pubblicato + data story + accesso civico |
| Educazione civica | 33 | Completo + istruttoria dell'accesso civico fino alla risposta + presentazione al comune | Prodotto pubblico e un'interlocuzione reale con l'amministrazione |
| PCTO | 30–60 | Completo + manutenzione, nuove fonti locali, documentazione, passaggio di consegne alla classe successiva | Progetto con committente reale e documentazione tecnica |

Nel formato da 4 ore si perde la parte migliore (la lezione 4). Se hai solo 4 ore, valuta di fare
le lezioni 1 e 4 invece che 1 e 3: si rinuncia alla tecnica ma si tiene la cittadinanza.

---

## 4. Dove si incastra nel curricolo

**Educazione civica** — le nuove Linee guida (DM 183 del 7 settembre 2024, che attuano la
L. 92/2019) organizzano l'insegnamento su tre nuclei: Costituzione, sviluppo economico e
sostenibilità, cittadinanza digitale. Il percorso lavora su tutti e tre: le lezioni 1–3 sulla
cittadinanza digitale, la 4 sulla Costituzione (trasparenza e diritto di accesso), la 3 e la 8
sullo sviluppo sostenibile attraverso gli indicatori ambientali del cruscotto.

**PCTO** — committente reale, prodotto verificabile, competenze documentabili. Il binario B più la
manutenzione del cruscotto copre agevolmente 30 ore.

**Discipline** — informatica (versionamento, deploy, formati), matematica e statistica (indicatori,
denominatori, mediane, serie storiche), italiano (testo argomentativo su dati, presentazione),
storia e geografia (lettura del territorio), diritto ed economia (trasparenza, bilanci comunali),
arte e immagine (visualizzazione), scienze (ambiente, consumo di suolo, rifiuti).

**DigComp 2.2** — area 1 (alfabetizzazione su dati e informazioni: navigare, valutare, gestire),
area 3 (creazione di contenuti digitali), area 5 (risolvere problemi).

**Rapporto con "A Scuola di OpenCoesione"** — il percorso è complementare, non alternativo. ASOC
lavora sul monitoraggio civico di un singolo progetto finanziato; qui si lavora sul quadro
informativo del comune nel suo insieme. Una classe ASOC può usare il cruscotto come strumento di
restituzione dei dati raccolti.

---

## 5. Prima di iniziare: i cinque vincoli reali

Vale la pena leggerli adesso, non a metà percorso.

**Account e minorenni.** I termini di servizio di GitHub richiedono almeno **13 anni**; quelli di
Vercel almeno **16**. In una classe del biennio una parte degli studenti non ha l'età per aprire un
account Vercel. Nel binario B, quindi, **l'account è del docente o della scuola** e gli studenti
lavorano come collaboratori del repository. Non far creare account personali agli studenti: non
serve, e sposta su di loro una responsabilità che non è la loro.

**Rete.** Non fidarti del wifi della scuola e non fidarti delle API in diretta. Il *kit dati
offline* (file `05-modelli-e-kit.md`) esiste per questo: si scarica tutto il giorno prima e la
lezione funziona anche se la connessione cade. Per il binario B, verifica con il referente IT
almeno una settimana prima che `github.com` e `vercel.com` non siano bloccati dal filtro della
scuola: è la causa numero uno di lezioni saltate.

**Costi.** Zero. GitHub, Vercel nel piano gratuito e tutte le fonti del nucleo nazionale sono
gratuiti. Nessuna attività del percorso richiede servizi a pagamento. Se una guida ti chiede una
carta di credito, sei fuori percorso.

**Supporto.** Asincrono e best effort, via issue su GitHub o mail. Non c'è assistenza in diretta:
preparati a risolvere in autonomia, usando la sezione "cosa può andare storto" di ogni lezione.

**Non è ufficiale.** Il cruscotto della classe non rappresenta il comune e deve dichiararlo, come
fa il progetto originale. È anche una lezione di deontologia: chi pubblica dati dice chi è, da dove
vengono i numeri e cosa non sa.

---

## 6. Preparazione del docente

Il percorso non richiede competenze informatiche particolari, ma richiede **un'ora di preparazione
prima della lezione 5**. Se salti questa preparazione, la lezione 5 si trasforma in due ore di
schermate d'errore davanti a venticinque persone.

Prima del binario A:

- [ ] Apri il cruscotto di San Vincenzo e guardati intorno per dieci minuti
- [ ] Cerca il tuo comune su `dati.gov.it` e su `esploradati.istat.it`, così sai cosa troveranno
- [ ] Scarica il kit dati offline per il tuo comune (istruzioni nel file `05-modelli-e-kit.md`)
- [ ] Stampa le schede studente delle lezioni che farai

Prima del binario B, in aggiunta:

- [ ] Crea l'account GitHub e l'account Vercel (intestati a te o alla scuola)
- [ ] **Fai il fork e il deploy una volta a casa, da solo, fino in fondo.** Poi cancella tutto e
      rifallo in classe. La prima volta ci metti quaranta minuti; la seconda, dieci
- [ ] Trova in anticipo codice ISTAT, codice catastale e coordinate del municipio
- [ ] Chiedi al referente IT di sbloccare `github.com` e `vercel.com`
- [ ] Leggi la [guida al riuso](https://www.cruscottocomune.it/riusa) e la guida alle menzioni

---

## 7. Struttura di ogni lezione

Ogni lezione dura 120 minuti e ha sempre la stessa forma:

| Momento | Minuti | Cosa succede |
|---|---|---|
| Apertura | 10 | Una domanda concreta, non una definizione |
| Mini-lezione | 20–25 | I concetti minimi che servono per l'attività |
| Attività | 50–60 | A coppie o piccoli gruppi, con una consegna scritta |
| Confronto | 20 | In plenaria, si mettono in comune i risultati |
| Chiusura | 10 | Una frase da portare a casa, e il compito |

Se hai moduli da 60 minuti, spezza a metà: apertura + mini-lezione nella prima ora, attività +
confronto nella seconda. In quel caso ricomincia sempre con cinque minuti di richiamo.

---

## 8. Valutazione

La rubrica completa è nel file `03-rubrica-valutazione.md`. Tre indicazioni di metodo:

- **Valuta le competenze, non le nozioni.** Sapere che cosa significa "licenza CC BY" vale poco;
  saper decidere se un dato si può riusare vale molto.
- **Valuta il processo, non solo il prodotto.** Un gruppo che scopre che il proprio dato è
  sbagliato e lo documenta ha imparato più di uno che ha pubblicato un cruscotto perfetto.
- **Rendi la rubrica pubblica all'inizio.** Gli studenti devono sapere su cosa saranno valutati
  prima di cominciare, e devono poterla usare per darsi feedback fra pari nella lezione 8.

---

## 9. Cosa consegna la classe

| Binario | Prodotto | Formato consigliato |
|---|---|---|
| A | Scheda fonti compilata (lez. 2) | Foglio di calcolo o scheda cartacea |
| A | Tabella di confronto fra tre comuni (lez. 3) | Foglio di calcolo |
| A | Richiesta di accesso civico generalizzato (lez. 4) | PDF firmato, inviato via PEC |
| B | URL del cruscotto pubblicato (lez. 5–6) | Link |
| B | Report di data quality audit (lez. 7) | Documento, o issue su GitHub |
| B | Presentazione pubblica (lez. 8) | 5 minuti a gruppo |

---

## 10. Indice dei materiali

| File | Contenuto |
|---|---|
| `00-guida-docente.md` | Questo documento |
| `01-binario-a-lezioni.md` | Lezioni 1–4, con schede studente |
| `02-binario-b-lezioni.md` | Lezioni 5–8, con schede studente |
| `03-rubrica-valutazione.md` | Rubrica su sei dimensioni, quattro livelli |
| `04-glossario.md` | Trenta voci, con esempi presi dal cruscotto |
| `05-modelli-e-kit.md` | Modello di accesso civico, checklist tecnica, kit dati offline, testi delle menzioni |

---

*Materiali del progetto [Cruscotto Comune](https://www.cruscottocomune.it/) di Alessandro Cipriani.
Progetto indipendente, non ufficiale: non affiliato ad AgID, al Governo italiano o a un ente locale.
Licenza CC BY-SA 4.0.*
