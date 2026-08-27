/**
 * Modello dati della sezione /scuola.
 * I testi arrivano dai file `scuola/*.md` del kit: non riscriverli qui.
 * Nessun accesso al filesystem a runtime.
 */

import type { Metadata } from "next";
import { clipMetaDescription, wordCount } from "@/lib/meta";
import { AUTHOR, SITE } from "@/lib/product";
import { LEZIONI as LEZIONI_SRC } from "@/lib/scuola-lezioni";
import classiJson from "@/data/scuola/classi.json";

export {
  FONTI_DIDATTICHE,
  GLOSSARIO,
  REQUISITI_RETE,
  STRUMENTI,
  glossarioLettere,
  glossarioPerLettera,
} from "@/lib/scuola-supporto";

export type BinarioId = "leggere" | "costruire";

export type Binario = {
  id: BinarioId;
  slug: "leggere-i-dati" | "costruire-il-cruscotto";
  titolo: string;
  sottotitolo: string;
  h1: string;
  occhiello: string;
  oreTotali: 8;
  numeroLezioni: 4;
  destinatari: string[];
  prerequisiti: string[];
  prodottoFinale: string;
  descrizione: string;
  intro: string;
  avvertenzaAccount?: string;
};

export type LezioneAttivita = {
  titolo: string;
  durataMinuti: number;
  consegna: string;
};

export type SchedaTabella = {
  caption: string;
  colonne: string[];
  righeEtichette?: string[];
  note?: string;
};

export type SchedaStudente = {
  titolo: string;
  istruzioni: string;
  campiIntestazione: string[];
  tabelle: SchedaTabella[];
  domande: string[];
  checklist: string[];
  attenzione?: string;
};

export type Lezione = {
  slug: string;
  numero: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  binario: BinarioId;
  titolo: string;
  h1: string;
  occhiello: string;
  durataMinuti: 120;
  obiettivi: string[];
  prerequisiti: string[];
  attivita: LezioneAttivita[];
  discipline: string[];
  digcomp: string[];
  descrizione: string;
  intro: string;
  materialiLezione: string;
  chiusura: string;
  compitoCasa: string;
  cosePuoAndareStorto: string[];
  schedaStudente: SchedaStudente;
  materialeIds: string[];
};

export type FormatoOrario = {
  nome: string;
  ore: string;
  contenuto: string;
  risultato: string;
};

export type MaterialeTipo =
  | "guida"
  | "slide"
  | "scheda"
  | "rubrica"
  | "dataset"
  | "modello";

export type Materiale = {
  id: string;
  titolo: string;
  tipo: MaterialeTipo;
  formati: string[];
  url: string;
  ultimaVerifica: string;
  licenza: string;
  notaLink: string;
  binario?: BinarioId;
};

export type Faq = {
  id: string;
  domanda: string;
  risposta: string;
};

export type ClasseVetrina = {
  scuola: string;
  comune: string;
  provincia: string;
  annoScolastico: string;
  url: string;
  note: string;
  /** Solo se autorizzato. Mai nomi o foto di studenti. */
  docenteReferente?: string;
};

export type GlossarioVoce = {
  termine: string;
  id: string;
  definizione: string;
  esempio?: string;
  lezione?: number;
};

export type StrumentoVoce = {
  nome: string;
  binario: BinarioId | "entrambi";
  aCosaServe: string;
};

export type FonteDidattica = {
  nome: string;
  chi: string;
  aggiornamento: string;
  licenza: string;
  inClasse: string;
  url: string;
};

export type SitemapVoce = {
  path: string;
  priority: number;
  changeFrequency: "monthly";
};

export const LEZIONI_PAGINE_ATTIVE = true;

export const CLASSI_MINIME = 3;

export const SCUOLA_DISCLAIMER =
  "Progetto indipendente, non ufficiale. Non affiliato ad AgID, al Governo italiano o a un ente locale.";

/** Nei prompt, «dashboard» = template vuoto, non San Vincenzo e non questo minisito. */
export const DASHBOARD_TEMPLATE = {
  github: SITE.github,
  titolo: "Quale dashboard si forka",
  testo:
    "La dashboard da costruire in classe è il template vuoto magiaslab/cruscotto-comune. Non si forka questo minisito e non si forka San Vincenzo. Il cruscotto di San Vincenzo si usa nel binario A come oggetto di lettura: è un esemplare già online, lo stesso programma con un'altra configurazione.",
};

export const SCUOLA_LICENZA = {
  nome: "CC BY-SA 4.0",
  url: "https://creativecommons.org/licenses/by-sa/4.0/deed.it",
  spiegazione:
    "Si può modificare, tradurre, adattare e ridistribuire, citando la fonte e mantenendo la stessa licenza.",
};

const KIT_BLOB =
  "https://github.com/magiaslab/cruscotto-comune-sito/blob/main/scuola";

export const BINARI: Binario[] = [
  {
    id: "leggere",
    slug: "leggere-i-dati",
    titolo: "Leggere i dati",
    sottotitolo:
      "Quattro lezioni da due ore. Nessun account, nessun deploy: serve un browser e un foglio di calcolo.",
    h1: "Binario A — Leggere i dati",
    occhiello: "Binario A · 8 ore",
    oreTotali: 8,
    numeroLezioni: 4,
    destinatari: [
      "Secondaria di primo grado",
      "Secondaria di secondo grado",
      "Educazione civica, italiano, geografia, diritto",
    ],
    prerequisiti: [
      "Un browser",
      "Un foglio di calcolo (o carta)",
      "Nessun account",
      "Nessun deploy",
    ],
    prodottoFinale:
      "Un data report sul proprio comune e una richiesta di accesso civico generalizzato scritta dalla classe.",
    descrizione:
      "Il cruscotto è l'oggetto di studio, non il prodotto. La classe cerca le fonti, confronta comuni simili, smonta i KPI ingannevoli e chiede quello che manca.",
    intro:
      "Il cruscotto è l'oggetto di studio, non il prodotto. La classe cerca le fonti, confronta comuni simili, smonta i KPI ingannevoli e chiede quello che manca. Serve un browser e un foglio di calcolo. Nessun account, nessun deploy. È un percorso completo anche da solo. Non è il riscaldamento del binario B. Quattro lezioni da due ore. Prodotto finale del binario: un data report sul proprio comune e una richiesta di accesso civico generalizzato scritta dalla classe.",
  },
  {
    id: "costruire",
    slug: "costruire-il-cruscotto",
    titolo: "Costruire il cruscotto",
    sottotitolo:
      "Fork del template, deploy, configurazione, verifica, presentazione pubblica. Zero righe di codice.",
    h1: "Binario B — Costruire il cruscotto",
    occhiello: "Binario B · 8 ore",
    oreTotali: 8,
    numeroLezioni: 4,
    destinatari: [
      "Secondaria di secondo grado",
      "Classi che hanno già lavorato sui dati (per esempio ASOC) e vogliono il prodotto",
      "PCTO con committente reale",
    ],
    prerequisiti: [
      "Account GitHub e Vercel intestati al docente o alla scuola",
      "Lezioni 1–2 consigliate",
      "github.com e vercel.com non bloccati dal filtro della scuola",
      "Un'ora di preparazione del docente prima della lezione 5",
    ],
    prodottoFinale:
      "Un cruscotto di dati aperti del proprio comune, pubblicato online, verificato e presentato.",
    descrizione:
      "Fork del template, deploy, configurazione, verifica, presentazione pubblica. Zero righe di codice. Richiede un account GitHub e un account Vercel intestati al docente o alla scuola.",
    intro:
      "Quattro lezioni da due ore. Al termine la classe ha un cruscotto di dati aperti del proprio comune, pubblicato online, verificato e presentato. Non si scrive codice. Si fa un fork, si compila un file di configurazione e si controlla che i numeri siano giusti. Fork del template, deploy, configurazione, verifica, presentazione pubblica. Zero righe di codice. Richiede un account GitHub e un account Vercel intestati al docente o alla scuola.",
    avvertenzaAccount:
      "I termini di servizio di GitHub richiedono almeno 13 anni e quelli di Vercel almeno 16, quindi in una classe del biennio una parte degli studenti non ha l'età per aprire un account Vercel. Nel binario B l'account è del docente o della scuola e gli studenti lavorano come collaboratori del repository. Non far creare account personali agli studenti: non serve, e sposta su di loro una responsabilità che non è la loro.",
  },
];

export const LEZIONI: Lezione[] = LEZIONI_SRC;

export const FORMATI_ORARIO: FormatoOrario[] = [
  {
    nome: "Assaggio",
    ore: "4",
    contenuto: "Lezioni 1 e 3",
    risultato: "Una scheda di lettura dei dati del proprio comune",
  },
  {
    nome: "Base A",
    ore: "8",
    contenuto: "Lezioni 1–4",
    risultato: "Un data report e una richiesta di accesso civico inviata",
  },
  {
    nome: "Base B",
    ore: "8",
    contenuto: "Lezioni 5–8",
    risultato: "Un cruscotto online e una presentazione",
  },
  {
    nome: "Completo",
    ore: "16",
    contenuto: "Lezioni 1–8",
    risultato: "Cruscotto pubblicato + data story + accesso civico",
  },
  {
    nome: "Educazione civica",
    ore: "33",
    contenuto:
      "Completo + istruttoria dell'accesso civico fino alla risposta + presentazione al comune",
    risultato:
      "Prodotto pubblico e un'interlocuzione reale con l'amministrazione",
  },
  {
    nome: "PCTO",
    ore: "30–60",
    contenuto:
      "Completo + manutenzione, nuove fonti locali, documentazione, passaggio di consegne alla classe successiva",
    risultato:
      "Progetto con committente reale e documentazione tecnica",
  },
];

export const MATERIALI: Materiale[] = [
  {
    id: "guida-docente",
    titolo: "Guida docente",
    tipo: "guida",
    formati: ["Markdown"],
    url: `${KIT_BLOB}/00-guida-docente.md`,
    ultimaVerifica: "2026-08-01",
    licenza: "CC BY-SA 4.0",
    notaLink: "Markdown su GitHub (00-guida-docente.md)",
  },
  {
    id: "binario-a",
    titolo: "Binario A — lezioni 1–4 e schede studente",
    tipo: "scheda",
    formati: ["Markdown"],
    url: `${KIT_BLOB}/01-binario-a-lezioni.md`,
    ultimaVerifica: "2026-08-01",
    licenza: "CC BY-SA 4.0",
    notaLink: "Markdown su GitHub (01-binario-a-lezioni.md)",
    binario: "leggere",
  },
  {
    id: "binario-b",
    titolo: "Binario B — lezioni 5–8 e schede studente",
    tipo: "scheda",
    formati: ["Markdown"],
    url: `${KIT_BLOB}/02-binario-b-lezioni.md`,
    ultimaVerifica: "2026-08-01",
    licenza: "CC BY-SA 4.0",
    notaLink: "Markdown su GitHub (02-binario-b-lezioni.md)",
    binario: "costruire",
  },
  {
    id: "rubrica",
    titolo: "Rubrica di valutazione",
    tipo: "rubrica",
    formati: ["Markdown"],
    url: `${KIT_BLOB}/03-rubrica-valutazione.md`,
    ultimaVerifica: "2026-08-01",
    licenza: "CC BY-SA 4.0",
    notaLink: "Markdown su GitHub (03-rubrica-valutazione.md)",
  },
  {
    id: "glossario",
    titolo: "Glossario",
    tipo: "guida",
    formati: ["Markdown"],
    url: `${KIT_BLOB}/04-glossario.md`,
    ultimaVerifica: "2026-08-01",
    licenza: "CC BY-SA 4.0",
    notaLink: "Markdown su GitHub (04-glossario.md)",
  },
  {
    id: "modelli-kit",
    titolo: "Modelli, checklist e kit dati offline",
    tipo: "modello",
    formati: ["Markdown"],
    url: `${KIT_BLOB}/05-modelli-e-kit.md`,
    ultimaVerifica: "2026-08-01",
    licenza: "CC BY-SA 4.0",
    notaLink: "Markdown su GitHub (05-modelli-e-kit.md)",
  },
];

export const FAQ: Faq[] = [
  {
    id: "account-minorenni",
    domanda: "Gli studenti devono aprire un account GitHub o Vercel?",
    risposta:
      "No. I termini di servizio di GitHub richiedono almeno 13 anni; quelli di Vercel almeno 16. In una classe del biennio una parte degli studenti non ha l'età per aprire un account Vercel. Nel binario B l'account è del docente o della scuola e gli studenti lavorano come collaboratori del repository. Non far creare account personali agli studenti: non serve, e sposta su di loro una responsabilità che non è la loro. Il binario A non richiede nessun account.",
  },
  {
    id: "rete",
    domanda: "Che succede se il wifi della scuola non regge?",
    risposta:
      "Non fidarti del wifi della scuola e non fidarti delle API in diretta. Il kit dati offline esiste per questo: si scarica tutto il giorno prima e la lezione del binario A funziona anche se la connessione cade. Per il binario B, verifica con il referente IT almeno una settimana prima che github.com e vercel.com non siano bloccati dal filtro della scuola: è la causa numero uno di lezioni saltate.",
  },
  {
    id: "costi",
    domanda: "Quanto costa?",
    risposta:
      "Zero. GitHub, Vercel nel piano gratuito e tutte le fonti del nucleo nazionale sono gratuiti. Nessuna attività del percorso richiede servizi a pagamento. Se una guida ti chiede una carta di credito, sei fuori percorso.",
  },
  {
    id: "supporto",
    domanda: "C'è assistenza in diretta durante la lezione?",
    risposta:
      "No. Il supporto è asincrono e best effort, via issue su GitHub o mail. Non c'è assistenza in diretta: preparati a risolvere in autonomia, usando la sezione «cosa può andare storto» di ogni lezione.",
  },
  {
    id: "ufficiale",
    domanda: "Il cruscotto della classe rappresenta il comune?",
    risposta:
      "No. Il cruscotto della classe non rappresenta il comune e deve dichiararlo, come fa il progetto originale. È anche una lezione di deontologia: chi pubblica dati dice chi è, da dove vengono i numeri e cosa non sa. Progetto indipendente, non ufficiale: non affiliato ad AgID, al Governo italiano o a un ente locale.",
  },
  {
    id: "programmare",
    domanda: "Serve saper programmare?",
    risposta:
      "No. Il cruscotto si personalizza compilando un file di configurazione. Nel binario B non si scrive codice: si fa un fork, si compila un file JSON e si controlla che i numeri siano giusti.",
  },
  {
    id: "solo-a",
    domanda: "Posso fare solo il binario A?",
    risposta:
      "Sì. Il binario A è un percorso completo anche da solo. Non è il riscaldamento del binario B. Solo A va per qualsiasi ordine di scuola, educazione civica, italiano, geografia, diritto. Solo B se la classe ha già lavorato sui dati (per esempio ha fatto ASOC) e vuole il prodotto. A + B è il percorso completo da 16 ore, la combinazione che consigliamo.",
  },
  {
    id: "quattro-ore",
    domanda: "Ho solo 4 ore. Che lezioni faccio?",
    risposta:
      "Il formato Assaggio sono le lezioni 1 e 3. Nel formato da 4 ore si perde la parte migliore (la lezione 4). Se hai solo 4 ore, valuta di fare le lezioni 1 e 4 invece che 1 e 3: si rinuncia alla tecnica ma si tiene la cittadinanza.",
  },
  {
    id: "privacy-vetrina",
    domanda: "Posso mandare foto della classe per la vetrina?",
    risposta:
      "No. Mai nomi, cognomi, foto o video riconoscibili di studenti minorenni. Nella vetrina si indicano la scuola, il comune e l'anno scolastico: bastano a dare il credito e non identificano nessuno.",
  },
];

export const SCUOLA_LANDING = {
  occhiello: "Open data · Scuola",
  h1: "Cruscotto Comune a scuola",
  payoff:
    "Percorso didattico sui dati aperti che finisce con un cruscotto vero, online, per il comune della scuola.",
  intro:
    "Otto lezioni da due ore, divise in due binari indipendenti. Destinatari: secondaria di primo grado (binario A) e secondaria di secondo grado (entrambi). Durata: 4, 8, 16 o 33 ore secondo il formato scelto, oppure PCTO da 30–60 ore. Prodotto finale: un data report, oppure un cruscotto pubblicato online per il proprio comune. Costo: zero. Serve saper programmare? No. Il cruscotto si personalizza compilando un file di configurazione. Il percorso nasce da Cruscotto Comune, template open source per dashboard di dati aperti comunali, e dal suo primo esemplare, Cruscotto San Vincenzo.",
  cta: [
    {
      href: "/scuola/leggere-i-dati",
      label: "Binario A — Leggere i dati",
    },
    {
      href: "/scuola/costruire-il-cruscotto",
      label: "Binario B — Costruire il cruscotto",
    },
    { href: "/scuola/materiali", label: "Materiali" },
  ],
  portaACasa: [
    {
      titolo: "Un data report",
      testo:
        "Scheda fonti compilata, tabella di confronto fra tre comuni, richiesta di accesso civico generalizzato scritta dalla classe.",
    },
    {
      titolo: "Un cruscotto online",
      testo:
        "Nel binario B: URL del cruscotto pubblicato, report di data quality audit, presentazione pubblica di cinque minuti a gruppo.",
    },
    {
      titolo: "Competenze, non nozioni",
      testo:
        "Saper decidere se un dato si può riusare, documentare uno scostamento, dire che cosa non si sa. Licenza CC BY-SA 4.0, zero costi.",
    },
  ],
  binariNota:
    "Il binario A è un percorso completo anche da solo. Non è il riscaldamento del binario B.",
  comeSiCombinano: [
    "Solo A — qualsiasi ordine di scuola, educazione civica, italiano, geografia, diritto.",
    "Solo B — se la classe ha già lavorato sui dati (per esempio ha fatto ASOC) e vuole il prodotto.",
    "A + B — il percorso completo da 16 ore. È la combinazione che consigliamo.",
  ],
  formatiNota:
    "Nel formato da 4 ore si perde la parte migliore (la lezione 4). Se hai solo 4 ore, valuta di fare le lezioni 1 e 4 invece che 1 e 3: si rinuncia alla tecnica ma si tiene la cittadinanza.",
  curricolo: [
    {
      titolo: "Educazione civica",
      testo:
        "Le nuove Linee guida (DM 183 del 7 settembre 2024, che attuano la L. 92/2019) organizzano l'insegnamento su tre nuclei: Costituzione, sviluppo economico e sostenibilità, cittadinanza digitale. Il percorso lavora su tutti e tre: le lezioni 1–3 sulla cittadinanza digitale, la 4 sulla Costituzione (trasparenza e diritto di accesso), la 3 e la 8 sullo sviluppo sostenibile attraverso gli indicatori ambientali del cruscotto.",
    },
    {
      titolo: "PCTO",
      testo:
        "Committente reale, prodotto verificabile, competenze documentabili. Il binario B più la manutenzione del cruscotto copre agevolmente 30 ore.",
    },
    {
      titolo: "Discipline",
      testo:
        "Informatica (versionamento, deploy, formati), matematica e statistica (indicatori, denominatori, mediane, serie storiche), italiano (testo argomentativo su dati, presentazione), storia e geografia (lettura del territorio), diritto ed economia (trasparenza, bilanci comunali), arte e immagine (visualizzazione), scienze (ambiente, consumo di suolo, rifiuti).",
    },
    {
      titolo: "DigComp 2.2",
      testo:
        "Area 1 (alfabetizzazione su dati e informazioni: navigare, valutare, gestire), area 3 (creazione di contenuti digitali), area 5 (risolvere problemi).",
    },
    {
      titolo: 'Rapporto con "A Scuola di OpenCoesione"',
      testo:
        "Il percorso è complementare, non alternativo. ASOC lavora sul monitoraggio civico di un singolo progetto finanziato; qui si lavora sul quadro informativo del comune nel suo insieme. Una classe ASOC può usare il cruscotto come strumento di restituzione dei dati raccolti.",
    },
  ],
  vincoli: [
    {
      titolo: "Account e minorenni",
      testo:
        "I termini di servizio di GitHub richiedono almeno 13 anni; quelli di Vercel almeno 16. In una classe del biennio una parte degli studenti non ha l'età per aprire un account Vercel. Nel binario B, quindi, l'account è del docente o della scuola e gli studenti lavorano come collaboratori del repository. Non far creare account personali agli studenti: non serve, e sposta su di loro una responsabilità che non è la loro.",
    },
    {
      titolo: "Rete",
      testo:
        "Non fidarti del wifi della scuola e non fidarti delle API in diretta. Il kit dati offline esiste per questo: si scarica tutto il giorno prima e la lezione funziona anche se la connessione cade. Per il binario B, verifica con il referente IT almeno una settimana prima che github.com e vercel.com non siano bloccati dal filtro della scuola: è la causa numero uno di lezioni saltate.",
    },
    {
      titolo: "Costi",
      testo:
        "Zero. GitHub, Vercel nel piano gratuito e tutte le fonti del nucleo nazionale sono gratuiti. Nessuna attività del percorso richiede servizi a pagamento. Se una guida ti chiede una carta di credito, sei fuori percorso.",
    },
    {
      titolo: "Supporto",
      testo:
        "Asincrono e best effort, via issue su GitHub o mail. Non c'è assistenza in diretta: preparati a risolvere in autonomia, usando la sezione «cosa può andare storto» di ogni lezione.",
    },
    {
      titolo: "Non è ufficiale",
      testo:
        "Il cruscotto della classe non rappresenta il comune e deve dichiararlo, come fa il progetto originale. È anche una lezione di deontologia: chi pubblica dati dice chi è, da dove vengono i numeri e cosa non sa.",
    },
  ],
  chiusura:
    "Se la classe pubblica un cruscotto, segnalalo per la vetrina delle classi: scuola, comune, anno scolastico e URL. Niente nomi né foto di studenti.",
  contattoLabel: AUTHOR.email,
  contattoMailto: `mailto:${AUTHOR.email}`,
};

export const KIT_OFFLINE = {
  titolo: "Kit dati offline",
  perche:
    "In aula la rete cade, i portali istituzionali vanno in manutenzione e le API rispondono con un errore proprio mentre venticinque persone guardano lo schermo. Il kit si prepara il giorno prima e rende ogni lezione del binario A indipendente dalla connessione.",
  contenuti: [
    {
      contenuto: "Schermate del cruscotto del proprio comune (o di San Vincenzo)",
      lezioni: "1, 3",
      come: "Stampa in PDF dal browser, pagina intera",
    },
    {
      contenuto: "Schermata della pagina Fonti del progetto",
      lezioni: "2",
      come: "Stampa in PDF",
    },
    {
      contenuto: "3–5 dataset del proprio comune in CSV",
      lezioni: "1, 2",
      come: "Scaricati da dati.gov.it, ISTAT, ISPRA",
    },
    {
      contenuto: "Tabella dei 5 indicatori per i 3 comuni del confronto",
      lezioni: "3",
      come: "Preparata dal docente in un foglio di calcolo",
    },
    {
      contenuto: "Risposta di /api/kpi salvata come file di testo",
      lezioni: "3, 5",
      come: "Solo se esiste già un deploy",
    },
    {
      contenuto: "Schermata di Amministrazione trasparente del comune",
      lezioni: "4",
      come: "Stampa in PDF",
    },
  ],
  regola:
    "Il kit vale per l'anno scolastico in corso. Rifallo ogni anno: i dati cambiano, e usare uno snapshot vecchio senza dirlo sarebbe esattamente l'errore che stiamo insegnando a evitare. Scrivi la data di preparazione nel nome della cartella. Per rigenerarlo su un comune qualsiasi: cartella kit-<nomecomune>-<anno>, PDF delle pagine che userai (serve che si veda l'indirizzo e la data), CSV con nomi parlanti, foglio di confronto, eventuale curl dell'endpoint KPI.",
};

export const SEGNALAZIONE_CLASSE = {
  titolo: "Segnalare un cruscotto per la vetrina",
  intro:
    "Da inviare a cipriani.alessandro@gmail.com o come issue sul repository.",
  oggetto: "cruscotto realizzato da una classe — [COMUNE]",
  campi: [
    "Scuola: [NOME ISTITUTO], [COMUNE], [PROVINCIA]",
    "Classe e anno scolastico: [CLASSE], [ANNO]",
    "Comune del cruscotto: [NOME COMUNE] — codice ISTAT [CODICE]",
    "Indirizzo del cruscotto: [URL]",
    "Repository: [URL]",
    "Percorso svolto: binario A / binario B / completo — ore: [N]",
    "Docente referente: [NOME], [MAIL]",
    "Una riga su che cosa avete scoperto",
  ],
  conferma:
    "Confermiamo che il cruscotto riporta le menzioni al progetto originale, dichiara di non essere ufficiale e non contiene dati personali di studenti.",
  privacy:
    "Mai nomi, cognomi, foto o video riconoscibili di studenti minorenni. Nel cruscotto e nella vetrina si indicano la scuola, la classe e l'anno scolastico: bastano a dare il credito e non identificano nessuno.",
};

export const RIUSA_SCUOLA_BOX = {
  titolo: "Lo stai facendo con una classe?",
  testo:
    "C'è un percorso didattico in due binari, otto lezioni da due ore, materiali CC BY-SA 4.0. Il binario A non richiede account. Nel binario B gli account sono del docente o della scuola.",
  href: "/scuola",
  cta: "Percorso Scuola",
};

export function lezioniPerBinario(id: BinarioId): Lezione[] {
  return LEZIONI.filter((l) => l.binario === id);
}

export function lezioneBySlug(slug: string): Lezione | undefined {
  return LEZIONI.find((l) => l.slug === slug);
}

export function binarioBySlug(slug: string): Binario | undefined {
  return BINARI.find((b) => b.slug === slug);
}

export function binarioById(id: BinarioId): Binario {
  const b = BINARI.find((x) => x.id === id);
  if (!b) throw new Error(`Binario sconosciuto: ${id}`);
  return b;
}

export function lezionePrevNext(slug: string): {
  prev: Lezione | null;
  next: Lezione | null;
} {
  const i = LEZIONI.findIndex((l) => l.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? LEZIONI[i - 1] : null,
    next: i < LEZIONI.length - 1 ? LEZIONI[i + 1] : null,
  };
}

export function materialiPerBinario(id?: BinarioId): Materiale[] {
  if (!id) return MATERIALI;
  return MATERIALI.filter((m) => !m.binario || m.binario === id);
}

export function classiElenco(): ClasseVetrina[] {
  return classiJson as ClasseVetrina[];
}

export function classiPubblicate(): boolean {
  return classiElenco().length >= CLASSI_MINIME;
}

export function scuolaNavItems(): { href: string; label: string }[] {
  const items = [
    { href: "/scuola", label: "Panoramica" },
    { href: "/scuola/leggere-i-dati", label: "Leggere i dati" },
    { href: "/scuola/costruire-il-cruscotto", label: "Costruire" },
    { href: "/scuola/materiali", label: "Materiali" },
    { href: "/scuola/faq", label: "FAQ" },
    { href: "/scuola/strumenti", label: "Strumenti" },
    { href: "/scuola/glossario", label: "Glossario" },
    { href: "/scuola/fonti", label: "Fonti in classe" },
  ];
  if (classiPubblicate()) {
    items.push({ href: "/scuola/classi", label: "Classi" });
  }
  return items;
}

export function scuolaSitemapPaths(): SitemapVoce[] {
  const voci: SitemapVoce[] = [
    { path: "/scuola", priority: 0.65, changeFrequency: "monthly" },
    {
      path: "/scuola/leggere-i-dati",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      path: "/scuola/costruire-il-cruscotto",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    { path: "/scuola/materiali", priority: 0.55, changeFrequency: "monthly" },
    { path: "/scuola/faq", priority: 0.5, changeFrequency: "monthly" },
    { path: "/scuola/strumenti", priority: 0.5, changeFrequency: "monthly" },
    { path: "/scuola/glossario", priority: 0.5, changeFrequency: "monthly" },
    { path: "/scuola/fonti", priority: 0.5, changeFrequency: "monthly" },
  ];
  if (LEZIONI_PAGINE_ATTIVE) {
    for (const l of LEZIONI) {
      voci.push({
        path: `/scuola/lezioni/${l.slug}`,
        priority: 0.55,
        changeFrequency: "monthly",
      });
    }
  }
  if (classiPubblicate()) {
    voci.push({
      path: "/scuola/classi",
      priority: 0.45,
      changeFrequency: "monthly",
    });
  }
  return voci;
}

export function scuolaPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const description = clipMetaDescription(opts.description);
  const url = `${SITE.url}${opts.path}`;
  const index = opts.index !== false;
  return {
    title: opts.title,
    description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: `${opts.title} | ${SITE.name}`,
      description,
      url,
      locale: "it_IT",
      type: "website",
      images: [{ url: "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${SITE.name}`,
      description,
      images: ["/og-image.jpg"],
    },
    robots: { index, follow: index },
  };
}

export function scuolaCourseJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Cruscotto Comune a scuola",
    description: clipMetaDescription(SCUOLA_LANDING.intro),
    url: `${SITE.url}/scuola`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    isAccessibleForFree: true,
    inLanguage: "it",
    educationalLevel: "secondaria di primo e secondo grado",
    teaches: [
      "dati aperti",
      "lettura di indicatori",
      "accesso civico generalizzato",
      "riuso di software open source",
    ],
    license: SCUOLA_LICENZA.url,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      courseWorkload: "PT16H",
    },
  };
}

export function scuolaBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function learningResourceJsonLd(lezione: Lezione) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lezione.h1,
    description: clipMetaDescription(lezione.descrizione),
    url: `${SITE.url}/scuola/lezioni/${lezione.slug}`,
    learningResourceType: "lesson plan",
    timeRequired: "PT2H",
    inLanguage: "it",
    isAccessibleForFree: true,
    license: SCUOLA_LICENZA.url,
    educationalLevel: "secondaria",
    teaches: lezione.obiettivi,
  };
}

export function scuolaFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.domanda,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.risposta,
      },
    })),
  };
}

function assertScuolaInvariants() {
  const slugs = new Set<string>();
  for (const b of BINARI) {
    const n = wordCount(b.intro);
    if (n < 40) {
      throw new Error(`Binario ${b.id}: intro ha ${n} parole, minimo 40`);
    }
  }
  for (const l of LEZIONI) {
    const n = wordCount(l.intro);
    if (n < 40) {
      throw new Error(`Lezione ${l.numero}: intro ha ${n} parole, minimo 40`);
    }
    if (slugs.has(l.slug)) {
      throw new Error(`Slug duplicato: ${l.slug}`);
    }
    slugs.add(l.slug);
  }
}

assertScuolaInvariants();
