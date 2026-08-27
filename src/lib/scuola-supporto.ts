import type { FonteDidattica, GlossarioVoce, StrumentoVoce } from "@/lib/scuola";

export const GLOSSARIO: GlossarioVoce[] = [
  {
    termine: "Accesso civico generalizzato (FOIA)",
    id: "accesso-civico-generalizzato",
    definizione:
      "Il diritto di chiedere a una pubblica amministrazione dati e documenti anche quando non è obbligata a pubblicarli. Lo può esercitare chiunque, senza motivare, gratuitamente; l'amministrazione risponde entro 30 giorni e un eventuale rifiuto va motivato. Previsto dall'art. 5, comma 2 del D.lgs. 33/2013.",
    lezione: 4,
  },
  {
    termine: "Accesso civico semplice",
    id: "accesso-civico-semplice",
    definizione:
      "Il diritto di chiedere la pubblicazione di un documento che la legge imponeva di pubblicare e che non si trova. Diverso dal generalizzato: qui il documento doveva già esserci.",
  },
  {
    termine: "AgID",
    id: "agid",
    definizione:
      "Agenzia per l'Italia Digitale. Fra le altre cose pubblica Cruscotto Italia, la raccolta di indicatori comunali da cui il cruscotto prende gran parte dei KPI. Il progetto Cruscotto Comune non è affiliato ad AgID.",
  },
  {
    termine: "Amministrazione trasparente",
    id: "amministrazione-trasparente",
    definizione:
      "La sezione che ogni sito di ente pubblico deve avere, con i documenti a pubblicazione obbligatoria: bilanci, incarichi, contratti, atti. È il primo posto dove guardare prima di chiedere un dato.",
  },
  {
    termine: "API",
    id: "api",
    definizione:
      "Il modo in cui due programmi si parlano fra loro. Quando apri /api/kpi del cruscotto vedi la risposta grezza: non è un sito, è il testo che un programma manda a un altro.",
    lezione: 5,
  },
  {
    termine: "bbox (bounding box)",
    id: "bbox",
    definizione:
      "Il rettangolo geografico che delimita l'area di interesse. Nel cruscotto serve a decidere quali farmacie, defibrillatori o percorsi mostrare.",
    lezione: 6,
  },
  {
    termine: "Build",
    id: "build",
    definizione:
      "La trasformazione del codice sorgente nella versione che gira davvero su internet. Se fallisce, il sito non si aggiorna. Il messaggio d'errore della build è quasi sempre leggibile: vale la pena leggerlo.",
    lezione: 5,
  },
  {
    termine: "CC BY",
    id: "cc-by",
    definizione:
      "Licenza Creative Commons che permette di riusare un'opera, anche commercialmente e modificandola, a condizione di citare l'autore. È la licenza di gran parte dei dati pubblici italiani.",
  },
  {
    termine: "CC BY-SA",
    id: "cc-by-sa",
    definizione:
      "Come CC BY, ma chi ridistribuisce deve usare la stessa licenza. È la licenza di questi materiali didattici: puoi modificarli e ridistribuirli, ma restano aperti anche dopo di te.",
  },
  {
    termine: "CC0",
    id: "cc0",
    definizione:
      "Rinuncia a ogni diritto: si può fare qualsiasi cosa, anche senza citare. È la licenza più permissiva.",
  },
  {
    termine: "Codice catastale",
    id: "codice-catastale",
    definizione:
      "Codice di quattro caratteri che identifica un comune (per esempio G273). Serve, fra l'altro, per recuperare l'elenco delle scuole. Non va confuso con il codice ISTAT.",
    lezione: 6,
  },
  {
    termine: "Codice ISTAT",
    id: "codice-istat",
    definizione:
      "Codice numerico di sei cifre che identifica univocamente un comune italiano. È la chiave con cui quasi tutte le fonti nazionali filtrano i dati. Gli zeri iniziali contano.",
    lezione: 6,
  },
  {
    termine: "Commit",
    id: "commit",
    definizione:
      "Una modifica salvata nella storia di un repository, con autore, data e una descrizione del perché. Non si perde: si può sempre tornare indietro.",
  },
  {
    termine: "CSV",
    id: "csv",
    definizione:
      "File di testo in cui i valori sono separati da virgole o punti e virgola. Formato aperto, leggibile da qualsiasi programma. Vale tre stelle sulla scala dei dati aperti.",
  },
  {
    termine: "Dataset",
    id: "dataset",
    definizione:
      "Un insieme organizzato di dati, di solito una tabella o una raccolta di tabelle, pubblicato come un'unica cosa, con un titolo e dei metadati.",
  },
  {
    termine: "Dato aperto",
    id: "dato-aperto",
    definizione:
      "Un dato disponibile online, in un formato leggibile da una macchina, con una licenza che ne consente esplicitamente il riuso, gratuitamente. Se manca anche una sola di queste condizioni non è un dato aperto: è un dato pubblico.",
    lezione: 1,
  },
  {
    termine: "Deploy",
    id: "deploy",
    definizione:
      "Mettere un programma su un computer sempre acceso e raggiungibile da internet, con un indirizzo pubblico.",
    lezione: 5,
  },
  {
    termine: "Endpoint",
    id: "endpoint",
    definizione:
      "L'indirizzo preciso a cui si interroga un'API. https://…/api/kpi è un endpoint.",
  },
  {
    termine: "Fonte primaria",
    id: "fonte-primaria",
    definizione:
      "Chi produce il dato per primo. L'ISTAT è la fonte primaria della popolazione; il cruscotto è una fonte derivata. Per verificare un numero si risale sempre alla primaria.",
    lezione: 2,
  },
  {
    termine: "Fork",
    id: "fork",
    definizione:
      "Una copia di un repository che ricorda da dove viene. Diverso dallo scaricare uno zip: il collegamento con l'originale resta, e permette di ricevere gli aggiornamenti.",
    lezione: 5,
  },
  {
    termine: "Formato aperto",
    id: "formato-aperto",
    definizione:
      "Un formato le cui specifiche sono pubbliche e utilizzabili da chiunque, senza dipendere da un programma specifico. CSV e JSON sono aperti; il formato nativo di un software commerciale, di norma, no.",
  },
  {
    termine: "Granularità",
    id: "granularita",
    definizione:
      "Il livello di dettaglio territoriale o temporale di un dato: regione, provincia, comune, sezione di censimento; anno, mese, giorno. Più si scende, più il dato è utile e più è raro.",
    lezione: 2,
  },
  {
    termine: "GTFS",
    id: "gtfs",
    definizione:
      "Il formato standard con cui le aziende di trasporto pubblico pubblicano orari, fermate e percorsi. Quando c'è, il cruscotto può mostrare il trasporto pubblico locale.",
  },
  {
    termine: "JSON",
    id: "json",
    definizione:
      "Formato di testo per rappresentare dati in modo leggibile sia da una persona sia da un programma. È il formato del file di configurazione del cruscotto. Regola d'oro: niente virgola dopo l'ultimo elemento.",
    lezione: 6,
  },
  {
    termine: "KPI (indicatore chiave)",
    id: "kpi",
    definizione:
      "Un numero scelto per rappresentare in sintesi un fenomeno. Ha sempre quattro parti: che cosa si conta, su che cosa si divide, in che periodo, secondo quale fonte. Se ne manca una, non è leggibile.",
    lezione: 3,
  },
  {
    termine: "Latenza",
    id: "latenza",
    definizione:
      "Il tempo che passa fra il fatto e la pubblicazione del dato che lo descrive. Un dato pubblicato oggi può riferirsi a due anni fa: aggiornato e recente non sono la stessa cosa.",
    lezione: 2,
  },
  {
    termine: "Licenza",
    id: "licenza",
    definizione:
      'Il testo che dice che cosa si può fare con un\'opera o un dato. Se non è dichiarata da nessuna parte, la risposta corretta non è "libera": è "non dichiarata", e il dato non è riusabile.',
    lezione: 1,
  },
  {
    termine: "Mediana",
    id: "mediana",
    definizione:
      "Il valore che sta esattamente a metà: metà dei casi sta sotto, metà sopra. Il cruscotto mostra il reddito mediano perché la media verrebbe spostata da pochi valori molto grandi.",
    lezione: 3,
  },
  {
    termine: "Metadato",
    id: "metadato",
    definizione:
      "Un dato che descrive un altro dato: titolo, ente, periodo di riferimento, data di aggiornamento, licenza, formato. Spesso è più importante del dato stesso.",
  },
  {
    termine: "ODbL",
    id: "odbl",
    definizione:
      "Open Database License, la licenza di OpenStreetMap. Consente il riuso ma impone di ridistribuire i database derivati con la stessa licenza.",
  },
  {
    termine: "OpenStreetMap",
    id: "openstreetmap",
    definizione:
      "Mappa del mondo costruita da volontari, non da un ente pubblico. Il cruscotto la usa per mappe, percorsi, farmacie, defibrillatori. Chiunque può correggerla: è una possibile prosecuzione del percorso.",
  },
  {
    termine: "Repository",
    id: "repository",
    definizione:
      "Una cartella di file con dentro tutta la storia delle sue modifiche. Il posto dove vive il codice di un progetto.",
    lezione: 5,
  },
  {
    termine: "Riuso",
    id: "riuso",
    definizione:
      "Usare un dato o un programma prodotto da altri per farci qualcosa di nuovo, rispettando la licenza. Il cruscotto è un esercizio di riuso su due livelli: riusa dati pubblici, ed è esso stesso riusabile.",
  },
  {
    termine: "Scala delle cinque stelle",
    id: "cinque-stelle",
    definizione:
      "Classificazione dei dati aperti proposta da Tim Berners-Lee: ★ online in qualsiasi formato · ★★ in formato strutturato ma proprietario · ★★★ in formato aperto · ★★★★ con indirizzi stabili per ogni elemento · ★★★★★ collegato ad altri dati. A scuola il salto che conta è dalla prima alla terza.",
    lezione: 1,
  },
  {
    termine: "Smoke test",
    id: "smoke-test",
    definizione:
      "Il controllo minimo per capire se una cosa appena pubblicata funziona: aprire l'endpoint e vedere se risponde. Non prova che tutto sia corretto, prova che non sia tutto rotto.",
    lezione: 5,
  },
];

export const STRUMENTI: StrumentoVoce[] = [
  {
    nome: "Browser",
    binario: "entrambi",
    aCosaServe:
      "Tutte le lezioni. Un dispositivo ogni due studenti nel binario A; un dispositivo per gruppo nel binario B. Va bene anche lo smartphone per la caccia al dato.",
  },
  {
    nome: "Foglio di calcolo (o carta)",
    binario: "leggere",
    aCosaServe:
      "Confronto fra tre comuni, schede fonti. Se la classe non padroneggia il foglio di calcolo, la tabella si fa su carta: l'obiettivo è il ragionamento, non lo strumento.",
  },
  {
    nome: "Proiettore o LIM",
    binario: "entrambi",
    aCosaServe: "Apertura di ogni lezione e confronto in plenaria.",
  },
  {
    nome: "Kit dati offline",
    binario: "leggere",
    aCosaServe:
      "Piano B se la rete cade. Si prepara il giorno prima: PDF delle pagine, CSV, foglio di confronto. Istruzioni in 05-modelli-e-kit.md.",
  },
  {
    nome: "Account GitHub del docente o della scuola",
    binario: "costruire",
    aCosaServe:
      "Copia del template github.com/magiaslab/cruscotto-comune (un fork: una copia sul GitHub del docente). Non copiare questo sito né i cruscotti già online. Gli account degli studenti non servono: i termini di servizio di GitHub richiedono almeno 13 anni.",
  },
  {
    nome: "Account Vercel del docente o della scuola",
    binario: "costruire",
    aCosaServe:
      "Pubblicazione del cruscotto. I termini di servizio richiedono almeno 16 anni. Collegato a GitHub prima della lezione 5.",
  },
  {
    nome: "Editor di testo (opzionale)",
    binario: "costruire",
    aCosaServe:
      "Per modificare config/comune.json. Si può anche usare l'editor di GitHub nel browser.",
  },
  {
    nome: "Validatore JSON online",
    binario: "costruire",
    aCosaServe: "Prima di salvare la configurazione. Dice la riga dell'errore.",
  },
];

export const REQUISITI_RETE = {
  titolo: "Requisiti di rete",
  intro:
    "Verifica con il referente IT almeno una settimana prima. È la causa numero uno di lezioni saltate. Non fidarti del wifi della scuola e non fidarti delle API in diretta.",
  domini: [
    { host: "github.com", perche: "Fork e repository del template (binario B)." },
    { host: "vercel.com", perche: "Deploy del cruscotto (binario B)." },
    { host: "dati.gov.it", perche: "Caccia al dato, catalogo nazionale (binario A)." },
    { host: "istat.it", perche: "esploradati.istat.it e fonti ISTAT (binario A)." },
    {
      host: "openstreetmap.org",
      perche: "Mappe, civici, farmacie, percorsi.",
    },
    {
      host: "cruscotto-italia.dati.gov.it",
      perche: "MCP AgID / Cruscotto Italia, KPI comunali.",
    },
  ],
  consiglio:
    "Per il binario A tieni pronto il kit dati offline. Per il binario B tieni una registrazione video dei passaggi di fork e deploy, da proiettare se la rete cade.",
};

export const FONTI_DIDATTICHE: FonteDidattica[] = [
  {
    nome: "Cruscotto Italia (MCP)",
    chi: "AgID",
    aggiornamento:
      "I KPI ereditano la cadenza della fonte primaria (spesso annuale, con latenza). In classe si legge la data sul dato, non si assume.",
    licenza: "prevalentemente CC BY 4.0",
    inClasse:
      "Filtrare i KPI del proprio comune per codice ISTAT. Smoke test su /api/kpi. Confrontare tre comuni. Non è la fonte primaria: si risale sempre a chi ha prodotto il numero.",
    url: "https://cruscotto-italia.dati.gov.it/",
  },
  {
    nome: "OpenStreetMap / Overpass / CARTO",
    chi: "OpenStreetMap contributors",
    aggiornamento:
      "Continuo, a cura dei volontari. La data di un oggetto sta nei metadati OSM.",
    licenza: "ODbL",
    inClasse:
      "Mappe, civici, percorsi, farmacie. Esempio di dato prodotto dai volontari, non da un ente. Possibile prosecuzione: correggere un errore sulla mappa.",
    url: "https://www.openstreetmap.org/copyright",
  },
  {
    nome: "Open-Meteo + RainViewer + ItaliaMeteo",
    chi: "Open-Meteo / RainViewer / ItaliaMeteo",
    aggiornamento: "Live e previsioni. Non è un dato storico di lungo periodo.",
    licenza: "open (vedi siti)",
    inClasse:
      "Mostrare un dato che cambia mentre si guarda. Utile per distinguere «aggiornato» da «recente» rispetto a un censimento.",
    url: "https://open-meteo.com/",
  },
  {
    nome: "Allerte Protezione Civile",
    chi: "allertameteo.app / DPC",
    aggiornamento: "Bollettini quando c'è un'allerta. Non è una serie storica.",
    licenza: "dati pubblici",
    inClasse:
      "Collegare un numero del territorio a un avviso pubblico. Le mappe SIR regionali restano un modulo a parte, da spegnere fuori dalla propria Regione.",
    url: "https://allertameteo.app/",
  },
  {
    nome: "Catasto rifiuti ISPRA",
    chi: "ISPRA",
    aggiornamento:
      "CSV nazionale; la cadenza si legge sul dataset (di norma annuale). Verificare la data, non inventarla.",
    licenza: "open data",
    inClasse:
      "Raccolta differenziata e confronto fra comuni. Il calendario del gestore locale resta un link HTML: se manca in formato riusabile, è materia della lezione 4.",
    url: "https://www.catasto-rifiuti.isprambiente.it/",
  },
  {
    nome: "OMI — quotazioni immobiliari",
    chi: "Agenzia delle Entrate",
    aggiornamento:
      "Snapshot locale nel cruscotto. La data sta nel file; non assumere che sia l'ultimo trimestre.",
    licenza: "riuso con attribuzione; mirror ondata",
    inClasse:
      "Un numero «di mercato» con fonte e periodo. Serve a parlare di mediana e di confronti fra zone, non di valutazioni di singoli immobili.",
    url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/omi",
  },
  {
    nome: "Scuole MIUR",
    chi: "Ministero dell'Istruzione",
    aggiornamento: "Open data MIM. La data si legge sul dataset.",
    licenza: "open data",
    inClasse:
      "Elenco scuole del comune via codice catastale. Attenzione: codice catastale ≠ codice ISTAT. Nessun dato personale di alunni.",
    url: "https://dati.istruzione.it/opendata/",
  },
  {
    nome: "Farmacie di turno",
    chi: "farmaciediturno.org",
    aggiornamento: "Turni del giorno sul sito pubblico.",
    licenza: "sito pubblico",
    inClasse:
      "Servizio quotidiano georeferenziato. Il codice è l'ISTAT senza lo zero iniziale: un errore di configurazione visibile.",
    url: "https://www.farmaciediturno.org/",
  },
  {
    nome: "DAE / OpenAEDMap",
    chi: "OpenStreetMap / OpenAEDMap",
    aggiornamento: "Export da OpenStreetMap. Data dell'export sul file.",
    licenza: "ODbL",
    inClasse:
      "Punti sul territorio che gli studenti possono verificare a piedi. Se un defibrillatore manca sulla mappa, si può segnalare: è un dato che la classe può migliorare.",
    url: "https://openaedmap.org/",
  },
  {
    nome: "Colonnine EV e carburanti",
    chi: "OpenChargeMap / PUN / MIMIT",
    aggiornamento: "Indicativo. Verificare la data sulla fonte, non sul cruscotto.",
    licenza: "open / parziale",
    inClasse:
      "Confrontare copertura di un servizio. Prezzi EV indicativi: dirlo esplicitamente, è una lezione su che cosa un numero non misura.",
    url: "https://www.piattaformaunicanazionale.it/idr",
  },
  {
    nome: "DoveVannoINostriSoldi (IRPEF / OpenCivitas)",
    chi: "dovevannoinostrisoldi.com",
    aggiornamento: "API read-only. Periodo fiscale sulla fonte.",
    licenza: "API read-only (il loro codice è AGPL-3.0)",
    inClasse:
      "Spesa e tributi a scala comunale. Non sostituisce il SIOPE AgID. Utile per la lezione 3 (denominatore, periodo) e per la 4 (che cosa non è pubblicato in formato aperto dal comune).",
    url: "https://www.dovevannoinostrisoldi.com/",
  },
];

export function glossarioLettere(): string[] {
  const set = new Set<string>();
  for (const v of GLOSSARIO) {
    const ch = v.termine.charAt(0).toLocaleUpperCase("it-IT");
    set.add(ch);
  }
  return [...set].sort((a, b) => a.localeCompare(b, "it"));
}

export function glossarioPerLettera(): Map<string, GlossarioVoce[]> {
  const map = new Map<string, GlossarioVoce[]>();
  for (const v of GLOSSARIO) {
    const ch = v.termine.charAt(0).toLocaleUpperCase("it-IT");
    const arr = map.get(ch) ?? [];
    arr.push(v);
    map.set(ch, arr);
  }
  return map;
}
