import type { Lezione } from "@/lib/scuola";

export const LEZIONI: Lezione[] = [
  {
    slug: "che-cose-un-dato-aperto",
    numero: 1,
    binario: "leggere",
    titolo: "Che cos'è un dato aperto",
    h1: "Che cos'è un dato aperto",
    occhiello: "Lezione 1 · Binario A",
    durataMinuti: 120,
    obiettivi: [
      "distinguere un dato da un'informazione e da un'opinione;",
      "riconoscere le quattro condizioni che rendono un dato aperto (disponibile online, in formato leggibile da una macchina, con una licenza che ne consente il riuso, gratuito);",
      "leggere una licenza e dire che cosa può farci;",
      "collocare un dataset sulla scala delle cinque stelle;",
      'rispondere alla domanda "questo numero da dove viene?".',
    ],
    prerequisiti: [],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Apri il cruscotto di San Vincenzo e proiettalo. Non spiegare niente. Chiedi soltanto: «Questo numero — 6.342 abitanti — chi lo ha scritto? Come faccio a sapere che è vero? Di quando è?» Raccogli le risposte alla lavagna senza correggerle. Tornerai su quella lavagna in chiusura.",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 25,
        consegna:
          "Tre concetti, non uno di più. 1. Dato, informazione, opinione. «6.342» è un dato. «San Vincenzo è un comune piccolo» è un'informazione. «San Vincenzo è troppo piccolo» è un'opinione. 2. Che cosa rende un dato aperto: sta su internet e si scarica; è in un formato che una macchina può leggere; ha una licenza che dice esplicitamente che puoi riusarlo; non costa nulla. Un PDF pubblicato sul sito del comune è pubblico, ma non è aperto. 3. Le cinque stelle di Tim Berners-Lee. Sulle licenze bastano tre nomi: CC0, CC BY, ODbL. Se la licenza non è scritta da nessuna parte, il dato non è riusabile, anche se è online.",
      },
      {
        titolo: 'Attività — "Caccia al dato"',
        durataMinuti: 55,
        consegna:
          "A coppie. Ogni coppia cerca su dati.gov.it un dataset che riguardi il proprio comune (o, se il comune è piccolo e non compare, la propria provincia o regione) e compila la scheda: titolo, ente che lo pubblica, data dell'ultimo aggiornamento, formato, licenza, quante stelle, e una frase su che cosa ci si potrebbe fare. La domanda giusta da fare a chi si blocca non è «hai trovato?» ma «di quando è quel dato?».",
      },
      {
        titolo: "Confronto",
        durataMinuti: 20,
        consegna:
          "In plenaria, tre colonne alla lavagna: dataset trovati · aggiornati negli ultimi 12 mesi · davvero riusabili (formato + licenza). Il conto finale sarà molto più basso del primo. È il risultato didattico della lezione, e non va addolcito.",
      },
      {
        titolo: "Chiusura",
        durataMinuti: 10,
        consegna:
          "Torna alla lavagna dell'apertura e rispondi alle domande di inizio lezione con quello che ora la classe sa.",
      },
    ],
    discipline: ["Educazione civica (cittadinanza digitale)", "italiano", "informatica"],
    digcomp: ["area 1.1", "area 1.2"],
    descrizione:
      "Distinguere un dato da un'informazione e da un'opinione; riconoscere le quattro condizioni che rendono un dato aperto; leggere una licenza; collocare un dataset sulla scala delle cinque stelle.",
    intro: "Che cos'è un dato aperto. Quattro condizioni insieme: disponibile online, in formato leggibile da una macchina, con una licenza che ne consente il riuso, gratuito. Un PDF pubblicato sul sito del comune è pubblico, ma non è aperto. Il percorso lavora sul passaggio dal dato all'informazione, e sul riconoscere quando qualcuno ha fatto di nascosto il salto all'opinione. Serve un browser, la scheda studente e il kit dati offline se la rete non regge. Nessun account. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore o LIM · un dispositivo ogni due studenti (va bene lo smartphone) · scheda studente 1 · kit dati offline (piano B se la rete non regge).",
    chiusura:
      "Un dato non è aperto perché è online. È aperto se qualcuno ti ha dato il permesso di riusarlo, e te lo ha dato in un formato che si può usare.",
    compitoCasa:
      "Trovare su un giornale, un telegiornale o un social un grafico o un numero riferito a un territorio e scrivere tre righe: da quale dato viene, chi lo ha prodotto, a che periodo si riferisce. Se non si riesce a rispondere, scrivere che non è stato possibile: è una risposta valida e frequente.",
    cosePuoAndareStorto: [
      "Il portale è lento o il comune non ha dataset propri. È normalissimo, soprattutto sotto i 5.000 abitanti. Trasformalo in contenuto: perché il nostro comune non pubblica dati? Ripiega su provincia e regione, e annota la domanda: tornerà nella lezione 4.",
      "La rete non regge 13 ricerche simultanee. Usa il kit dati offline: le schermate e i CSV già scaricati bastano per l'attività.",
      "Qualcuno trova un dataset senza licenza dichiarata. È il caso più istruttivo di tutti. Fallo presentare per primo nel confronto.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 1 — Caccia al dato",
      istruzioni:
        "Cerca su dati.gov.it un dataset che riguardi il tuo comune, la tua provincia o la tua regione. Poi compila la scheda.",
      campiIntestazione: ["Nomi", "Classe", "Data"],
      tabelle: [
        {
          caption: "Il dataset trovato",
          colonne: ["Domanda", "Risposta"],
          righeEtichette: [
            "Titolo del dataset",
            "Chi lo pubblica (ente)",
            "A che periodo si riferisce il dato",
            "Data dell'ultimo aggiornamento",
            "In che formato si scarica",
            "Che licenza ha",
            "Quante stelle (1–5) e perché",
            "Che cosa ci potresti fare",
          ],
        },
      ],
      domande: [
        "Il dato è leggibile da un programma o solo da una persona? Come lo hai capito?",
        "Se domani volessi pubblicare questo dato sul tuo sito, potresti? Che cosa dovresti scrivere?",
        "Quanto è vecchio il dato più recente che hai trovato?",
        "C'è qualcosa che ti aspettavi di trovare e non c'era? Che cosa?",
      ],
      checklist: [],
      attenzione:
        "Se non trovi la licenza scritta da nessuna parte, la risposta corretta non è «libera»: è «non dichiarata». Sono due cose molto diverse.",
    },
    materialeIds: ["binario-a", "modelli-kit"],
  },
  {
    slug: "dove-stanno-i-dati-del-tuo-comune",
    numero: 2,
    binario: "leggere",
    titolo: "Dove stanno i dati del tuo comune",
    h1: "Dove stanno i dati del tuo comune",
    occhiello: "Lezione 2 · Binario A",
    durataMinuti: 120,
    obiettivi: [
      "nominare le principali fonti pubbliche italiane e dire che cosa produce ciascuna;",
      "distinguere una fonte primaria da una derivata;",
      "leggere i metadati di un dataset: periodo di riferimento, granularità, frequenza di aggiornamento;",
      "capire la differenza fra un dato aggiornato e un dato recente.",
    ],
    prerequisiti: ["Lezione 1."],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Proietta la pagina Fonti del cruscotto. È una tabella lunga e un po' ostica: va bene così. Domanda: «Quante di queste fonti conoscevate? Chi pensate che paghi per produrre questi dati?» La risposta — le paghiamo noi, sono già nostre — è il motivo per cui esiste il diritto di riusarle.",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 25,
        consegna:
          "Presenta le fonti raggruppandole per chi produce cosa, non per argomento: ISTAT, AgID — Cruscotto Italia, OpenStreetMap, MIM, ISPRA, Agenzia delle Entrate, Protezione Civile, il tuo Comune. Poi tre concetti: fonte primaria e fonte derivata; granularità; latenza. Aggiornato significa «pubblicato di recente»; recente significa «riferito a un periodo vicino». Non sono la stessa cosa.",
      },
      {
        titolo: 'Attività — "Schedare tre fonti"',
        durataMinuti: 55,
        consegna:
          "A gruppi di tre. Ogni gruppo prende tre fonti diverse dall'elenco (assegnale tu, così sono coperte tutte) e per ciascuna compila la scheda studente 2, cercando i dati del proprio comune.",
      },
      {
        titolo: "Confronto",
        durataMinuti: 20,
        consegna:
          "Ogni gruppo presenta la fonte più sorprendente delle tre in un minuto. Poi due domande alla classe: qual è il dato più vecchio che abbiamo trovato? e quale fonte era più difficile da usare? Annota le risposte: servono nella lezione 4.",
      },
      {
        titolo: "Chiusura",
        durataMinuti: 10,
        consegna:
          "Il dato più recente che riesci a trovare quasi mai è di oggi. Sapere di quando è vale quanto sapere quanto vale.",
      },
    ],
    discipline: ["Geografia", "statistica", "educazione civica", "informatica"],
    digcomp: ["area 1.1", "area 1.2", "area 1.3"],
    descrizione:
      "Nominare le principali fonti pubbliche italiane, distinguere fonte primaria e derivata, leggere i metadati, capire la differenza fra dato aggiornato e dato recente.",
    intro: "Dove stanno i dati del tuo comune. La classe impara a nominare le principali fonti pubbliche italiane e a dire che cosa produce ciascuna. Distingue una fonte primaria da una derivata, legge i metadati di un dataset — periodo di riferimento, granularità, frequenza di aggiornamento — e capisce la differenza fra un dato aggiornato e un dato recente. Serve la pagina Fonti del progetto e il kit dati offline. Prerequisito: lezione 1. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore · un dispositivo ogni due studenti · scheda studente 2 · la pagina Fonti del progetto · kit dati offline.",
    chiusura:
      "Il dato più recente che riesci a trovare quasi mai è di oggi. Sapere di quando è vale quanto sapere quanto vale.",
    compitoCasa:
      "Trovare sul sito del proprio comune la sezione Amministrazione trasparente e scrivere tre dati che ci sono e tre che non ci sono.",
    cosePuoAndareStorto: [
      "I siti cambiano. Alcuni portali istituzionali si riorganizzano senza preavviso. Verifica i link il giorno prima e tieni pronto il kit offline.",
      "Un gruppo si perde nella navigazione di esploradati.istat.it. Non è colpa loro: dai un percorso pre-scritto (l'indicatore esatto da cercare) invece di lasciarli liberi.",
      "Un gruppo finisce in venti minuti. Consegna extra: trovare lo stesso indicatore su due fonti diverse e verificare se coincidono. Spesso non coincidono, ed è la scoperta migliore della giornata.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 2 — Scheda fonte",
      istruzioni: "Compila una scheda per ciascuna delle tre fonti assegnate.",
      campiIntestazione: ["Nomi", "Fonte n."],
      tabelle: [
        {
          caption: "Metadati della fonte",
          colonne: ["Domanda", "Risposta"],
          righeEtichette: [
            "Nome della fonte",
            "Ente che la produce",
            "Che cosa contiene sul mio comune",
            "Granularità (regione / provincia / comune / sezione)",
            "Periodo del dato più recente disponibile",
            "Ogni quanto viene aggiornata",
            "Formato scaricabile",
            "Licenza",
            "È una fonte primaria o derivata?",
          ],
        },
      ],
      domande: [
        "Quanti anni sono passati fra il periodo del dato e oggi?",
        "Se un giornale scrivesse oggi questo numero al presente, sarebbe corretto? Perché?",
      ],
      checklist: [],
    },
    materialeIds: ["binario-a", "glossario"],
  },
  {
    slug: "leggere-un-cruscotto-senza-farsi-fregare",
    numero: 3,
    binario: "leggere",
    titolo: "Leggere un cruscotto senza farsi fregare",
    h1: "Leggere un cruscotto senza farsi fregare",
    occhiello: "Lezione 3 · Binario A",
    durataMinuti: 120,
    obiettivi: [
      "scomporre un indicatore nei suoi elementi (che cosa si conta, su che cosa si divide, in che periodo, secondo quale fonte);",
      "scegliere comuni comparabili per un confronto;",
      "riconoscere le trappole più comuni: percentuali su numeri piccoli, media confusa con mediana, asse verticale troncato, periodo scelto ad arte;",
      "riscrivere un titolo tendenzioso in forma corretta.",
    ],
    prerequisiti: ["Lezioni 1 e 2."],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Proietta un KPI reale del cruscotto: intensità turistica 226,6 per 100 abitanti. Chiedi: «Che cosa significa esattamente? Che cosa NON significa?» Lascia sbagliare. Quasi sempre qualcuno dirà «ci sono 226 turisti per ogni abitante», che è falso: sono presenze annue, non persone contemporaneamente presenti.",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 25,
        consegna:
          "Anatomia di un indicatore: numeratore, denominatore, periodo, fonte. Quattro trappole: percentuali su numeri piccoli; media contro mediana; l'asse troncato; il periodo scelto ad arte. Comparabilità: confrontare il proprio comune con il capoluogo non dice niente. Servono comuni simili per popolazione, collocazione e vocazione economica. Definire i criteri prima di scegliere è metà del lavoro.",
      },
      {
        titolo: 'Attività A — "Tre comuni"',
        durataMinuti: 30,
        consegna:
          "A coppie. Scegliere tre comuni comparabili (criteri scritti sulla scheda) e confrontare cinque indicatori: popolazione, reddito mediano, raccolta differenziata, consumo di suolo, copertura FTTH. Compilare la tabella e scrivere una frase di commento per ciascun indicatore. La frase deve contenere il periodo del dato.",
      },
      {
        titolo: 'Attività B — "Il KPI ingannevole"',
        durataMinuti: 25,
        consegna:
          "Ogni coppia prende uno degli indicatori appena raccolti e scrive due titoli da giornale: uno tendenzioso ma tecnicamente non falso, e uno corretto. Poi li scambia con un'altra coppia, che deve indovinare quale sia quale e spiegare perché.",
      },
      {
        titolo: "Confronto",
        durataMinuti: 20,
        consegna:
          "Si leggono ad alta voce i titoli migliori. La domanda che chiude ogni lettura è sempre la stessa: «che cosa hai dovuto togliere per renderlo tendenzioso?» Quasi sempre: il denominatore, il periodo, o il confronto.",
      },
    ],
    discipline: [
      "Matematica e statistica",
      "italiano (testo argomentativo)",
      "educazione civica",
      "arte e immagine (visualizzazione)",
    ],
    digcomp: ["area 1.2", "area 3.1"],
    descrizione:
      "Scomporre un indicatore, scegliere comuni comparabili, riconoscere trappole (percentuali su numeri piccoli, media e mediana, asse troncato, periodo scelto ad arte) e riscrivere un titolo tendenzioso.",
    intro: "Leggere un cruscotto senza farsi fregare. Ogni KPI ha quattro parti: che cosa si conta, su che cosa si divide, in che periodo, secondo quale fonte. Se ne manca una, il numero non è leggibile. La classe riconosce le trappole più comuni — percentuali su numeri piccoli, media confusa con mediana, asse verticale troncato, periodo scelto ad arte — e riscrive un titolo tendenzioso in forma corretta. Serve un foglio di calcolo, il cruscotto di San Vincenzo e cruscotti di altri comuni, o il kit dati offline. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore · un dispositivo ogni due studenti · foglio di calcolo · scheda studente 3 · cruscotto di San Vincenzo e cruscotti di altri comuni (o kit dati offline).",
    chiusura:
      "Ogni numero ha un denominatore. Se non lo trovi, non è un numero: è uno slogan.",
    compitoCasa:
      "Portare un grafico trovato online che secondo lo studente usa una delle quattro trappole, e scrivere quale.",
    cosePuoAndareStorto: [
      "Gli studenti scelgono comuni non comparabili (il proprio contro Milano). Non correggerlo subito: lascia fare il confronto e poi chiedi che cosa hanno imparato.",
      "Un indicatore non è disponibile per uno dei tre comuni. Ottimo: è un dato mancante, si annota e si porta alla lezione 4.",
      "Il foglio di calcolo diventa il problema. Se la classe non lo padroneggia, fai fare la tabella su carta. L'obiettivo è il ragionamento, non lo strumento.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 3 — Confronto fra tre comuni",
      istruzioni:
        "Ho scelto questi tre comuni perché sono simili per: popolazione, posizione (costa / interno / montagna), economia prevalente, altro.",
      campiIntestazione: ["Nomi", "Data"],
      tabelle: [
        {
          caption: "Cinque indicatori",
          colonne: [
            "Indicatore",
            "Comune 1",
            "Comune 2",
            "Comune 3",
            "Anno del dato",
          ],
          righeEtichette: [
            "Popolazione",
            "Reddito mediano",
            "Raccolta differenziata (%)",
            "Consumo di suolo",
            "Copertura FTTH (%)",
          ],
        },
      ],
      domande: [
        "Una frase per indicatore (deve contenere l'anno del dato).",
        "Titolo tendenzioso (vero ma fuorviante).",
        "Titolo corretto.",
        "Che cosa ho dovuto togliere per renderlo tendenzioso.",
        "Un dato che non sono riuscito a trovare per tutti e tre i comuni.",
      ],
      checklist: [],
    },
    materialeIds: ["binario-a", "modelli-kit"],
  },
  {
    slug: "il-dato-che-manca",
    numero: 4,
    binario: "leggere",
    titolo: "Il dato che manca",
    h1: "Il dato che manca",
    occhiello: "Lezione 4 · Binario A",
    durataMinuti: 120,
    obiettivi: [
      "valutare la qualità di un dato su quattro criteri: completezza, accuratezza, tempestività, coerenza;",
      "distinguere gli obblighi di pubblicazione dal diritto di accesso;",
      "spiegare che cos'è l'accesso civico generalizzato e chi può esercitarlo;",
      "scrivere una richiesta di accesso civico corretta e indirizzarla all'ufficio giusto.",
    ],
    prerequisiti: [
      "Lezioni 1–3. Serve l'elenco dei dati mancanti raccolto nelle lezioni precedenti.",
    ],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Rileggi alla classe l'elenco dei dati che nelle lezioni scorse non si sono trovati. Domanda: «Chi dice che questi dati non esistono? Forse esistono e non sono pubblicati. Che differenza fa?»",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 30,
        consegna:
          "Qualità del dato: completezza, accuratezza, tempestività, coerenza. Tre strade: Amministrazione trasparente, accesso civico semplice, accesso civico generalizzato (FOIA). L'accesso civico generalizzato è previsto dall'art. 5, comma 2 del D.lgs. 33/2013. Lo può chiedere chiunque, senza motivare, è gratuito; l'amministrazione risponde entro 30 giorni. È un diritto, non un favore.",
      },
      {
        titolo: 'Attività — "Scriviamo la richiesta"',
        durataMinuti: 50,
        consegna:
          "Fase 1 (15 min): la classe sceglie insieme che cosa chiedere. Criteri: un dato che riguarda il comune, che serve al cruscotto, che non è già pubblicato, formulato in modo preciso. Fase 2 (25 min): a gruppi, ciascuno scrive una bozza usando il modello. Fase 3 (10 min): si individua il destinatario: la PEC del comune, l'ufficio competente e, per conoscenza, l'RPCT.",
      },
      {
        titolo: "Confronto e decisione",
        durataMinuti: 20,
        consegna:
          "La classe decide se inviarla davvero. Consigliamo di farlo, con la firma del docente o del dirigente. Spiega che cosa succede dopo: 30 giorni, una risposta, un rifiuto motivato o il silenzio. Qualunque cosa arrivi, sarà materiale della lezione 8.",
      },
    ],
    discipline: [
      "Diritto ed economia",
      "educazione civica (Costituzione, trasparenza)",
      "italiano (testo funzionale)",
    ],
    digcomp: ["area 1.3", "area 2"],
    descrizione:
      "Valutare la qualità di un dato, distinguere obblighi di pubblicazione e diritto di accesso, scrivere una richiesta di accesso civico generalizzato corretta.",
    intro: "Il dato che manca. La classe valuta la qualità di un dato su quattro criteri: completezza, accuratezza, tempestività, coerenza. Distingue gli obblighi di pubblicazione dal diritto di accesso, spiega che cos'è l'accesso civico generalizzato e chi può esercitarlo, scrive una richiesta corretta e la indirizza all'ufficio giusto. Serve il modello di richiesta, il sito del proprio comune, sezione Amministrazione trasparente, e l'elenco dei dati mancanti raccolto nelle lezioni precedenti. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore · modello di richiesta (file 05-modelli-e-kit.md) · sito del proprio comune, sezione Amministrazione trasparente · scheda studente 4.",
    chiusura:
      "I dati che mancano non sono un destino. Sono una richiesta che nessuno ha ancora scritto.",
    compitoCasa:
      "Ciascuno scrive dieci righe: qual è il dato che vorrei esistesse sul mio comune e che cosa cambierebbe se ci fosse.",
    cosePuoAndareStorto: [
      "La classe sceglie una richiesta troppo vaga («tutti i dati del comune»). Rimandala indietro: una richiesta generica è la più facile da rifiutare.",
      "Qualcuno propone di chiedere dati personali (per esempio l'elenco dei residenti). È l'occasione perfetta per parlare dei limiti: il diritto di accesso finisce dove comincia la protezione dei dati personali.",
      "Il dirigente non autorizza l'invio. Fai comunque scrivere la richiesta e discuterne: il prodotto didattico c'è lo stesso.",
      "La risposta arriva dopo la fine del percorso. Succede spesso. Prevedilo: prendi l'impegno di comunicarla alla classe quando arriva, anche a percorso concluso.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 4 — La richiesta",
      istruzioni:
        "Riscrivi la richiesta rispondendo a quattro domande. Una richiesta vaga è la più facile da rifiutare.",
      campiIntestazione: ["Nomi", "Data"],
      tabelle: [
        {
          caption: "Rendere la richiesta precisa",
          colonne: ["Domanda", "Risposta"],
          righeEtichette: [
            "Che cosa chiedo esattamente",
            "A quale periodo si riferisce",
            "In quale formato lo voglio (CSV, foglio di calcolo, elenco)",
            "A quale ufficio lo chiedo",
          ],
        },
      ],
      domande: [
        "Che cosa vorremmo sapere.",
        "Perché serve.",
        "Ho verificato che non è già pubblicato su Amministrazione trasparente?",
        "Indirizzo della pagina che ho controllato.",
      ],
      checklist: [
        "Non chiedo dati personali di singole persone",
        "Ho indicato un periodo preciso",
        "Ho indicato il formato in cui voglio i dati",
        "Ho trovato la PEC del comune",
        "Non ho scritto perché mi serve (non è obbligatorio)",
      ],
    },
    materialeIds: ["binario-a", "modelli-kit"],
  },
  {
    slug: "dal-fork-al-sito-online",
    numero: 5,
    binario: "costruire",
    titolo: "Dal fork al sito online",
    h1: "Dal fork al sito online",
    occhiello: "Lezione 5 · Binario B",
    durataMinuti: 120,
    obiettivi: [
      "spiegare che cos'è un repository e a che cosa serve la storia delle versioni;",
      "spiegare che cos'è un fork e perché non è una copia qualsiasi;",
      'descrivere che cosa succede quando un sito viene "messo online";',
      "verificare che un servizio funzioni interrogando direttamente un endpoint;",
      "riconoscere che il cruscotto appena pubblicato è ancora generico, e dire che cosa manca.",
    ],
    prerequisiti: [
      "Lezioni 1–2 (consigliate). Account GitHub e Vercel del docente, creati prima della lezione.",
    ],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Proietta il cruscotto di San Vincenzo e poi la pagina GitHub del template. Domanda: «Questi due sono lo stesso programma. Che cosa cambia fra loro?» La risposta — cambia la configurazione, non il codice — è il concetto centrale delle lezioni 5 e 6.",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 20,
        consegna:
          "Repository: una cartella con dentro tutta la storia delle sue modifiche. Fork: una copia che ricorda da dove viene. Deploy: mettere il programma su un computer sempre acceso e collegato a internet. Template: il repository di Cruscotto Comune non è il cruscotto di San Vincenzo svuotato. È un progetto pensato per essere riusato.",
      },
      {
        titolo: "Attività 1 — Il fork",
        durataMinuti: 30,
        consegna:
          "Dal profilo GitHub del docente, proiettato: fork di github.com/magiaslab/cruscotto-comune. Mentre si fa, chiedi a voce cosa vedono: il numero di fork, la licenza, l'ultimo commit, il file README. Sono tutte informazioni che nella lezione 1 avrebbero chiamato «metadati».",
      },
      {
        titolo: "Attività 2 — Il deploy",
        durataMinuti: 30,
        consegna:
          "Import del repository su Vercel, deploy. Nessuna variabile d'ambiente obbligatoria: i KPI comunali arrivano dall'MCP pubblico di AgID. Mentre la build gira, fai compilare la prima parte della scheda studente: che cosa sta succedendo in questo momento?",
      },
      {
        titolo: "Attività 3 — Lo smoke test",
        durataMinuti: 20,
        consegna:
          "Apri https://NOME-PROGETTO.vercel.app/api/kpi e guarda la risposta. È testo, non un sito: è il modo in cui il programma parla con altri programmi. Poi apri il sito vero. Domanda: «Di che comune è questo cruscotto?» La risposta è che non è di nessuno: è la configurazione di default.",
      },
    ],
    discipline: [
      "Informatica",
      "educazione civica (cittadinanza digitale, responsabilità di ciò che si pubblica)",
    ],
    digcomp: ["area 3.1", "area 5"],
    descrizione:
      "Fork del template, deploy su Vercel, smoke test sull'endpoint /api/kpi. Zero righe di codice. Account del docente o della scuola.",
    intro: "Dal fork al sito online. Questa è l'unica lezione del percorso che va provata prima. Fai il fork e il deploy a casa, fino in fondo, poi cancella tutto e rifallo in classe. Lo studente impara che cos'è un repository, un fork, un deploy, e verifica che un servizio funzioni interrogando direttamente un endpoint. Il cruscotto appena pubblicato è ancora generico: è il ponte per la lezione 6. Account GitHub e Vercel del docente, creati prima. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore · un dispositivo per gruppo · scheda studente 5 · guida al riuso · registrazione di riserva.",
    chiusura:
      "Il codice è uguale per tutti i comuni. Quello che cambia è un file di configurazione. Domani lo compiliamo.",
    compitoCasa:
      'Scrivere cinque righe: che cosa vuol dire che un sito è "online"? Dove si trova fisicamente?',
    cosePuoAndareStorto: [
      "github.com bloccato dal filtro scolastico. Non c'è workaround pulito. Prevenilo con il referente IT; se succede lo stesso, usa la registrazione di riserva e sposta il fork a casa.",
      "Build fallita. Leggi il log insieme alla classe invece di nasconderlo. Le cause più comuni sono il nome del progetto già usato e limiti dell'account gratuito.",
      "Il deploy ci mette più del previsto. Ecco perché la scheda studente ha una parte da compilare durante l'attesa.",
      "Uno studente chiede se può farlo dal suo account. Rispondi di no, e spiega perché: i termini di servizio (13 anni per GitHub, 16 per Vercel) e la responsabilità di quello che si pubblica.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 5 — Il primo deploy",
      istruzioni: "Compila durante l'attesa della build e a deploy fatto.",
      campiIntestazione: ["Nomi", "Data"],
      tabelle: [
        {
          caption: "A deploy fatto",
          colonne: ["Voce", "Valore"],
          righeEtichette: [
            "Indirizzo del nostro cruscotto",
            "Ora del primo deploy",
            "Risposta di /api/kpi: funziona?",
            "Primo comune mostrato dal cruscotto",
          ],
        },
      ],
      domande: [
        "Che cos'è un fork, con parole tue?",
        "In questo momento, dove si trova il programma che stiamo pubblicando?",
        "Chi paga il computer su cui gira?",
        "Tre cose che non vanno bene perché non riguardano il nostro comune.",
      ],
      checklist: [],
    },
    materialeIds: ["binario-b"],
  },
  {
    slug: "configurare-lidentita-del-comune",
    numero: 6,
    binario: "costruire",
    titolo: "Configurare l'identità del comune",
    h1: "Configurare l'identità del comune",
    occhiello: "Lezione 6 · Binario B",
    durataMinuti: 120,
    obiettivi: [
      "leggere e modificare un file JSON senza romperlo;",
      "spiegare perché configurazione e codice sono cose separate;",
      "trovare il codice ISTAT, il codice catastale e le coordinate del proprio comune;",
      "decidere quali moduli hanno senso per il proprio territorio e quali vanno spenti;",
      "riconoscere l'obbligo di citare il progetto originale.",
    ],
    prerequisiti: [
      "Lezione 5. Il cruscotto della classe deve essere già online.",
    ],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Proietta config/comune.example.json. È lungo e a prima vista incomprensibile: dillo tu, prima che lo pensino loro. Poi mostra che è fatto di poche cose ripetute: nomi fra virgolette, due punti, valori. Domanda: «Secondo voi quale riga fa comparire il nome del nostro comune?»",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 25,
        consegna:
          "Che cos'è JSON. Tre regole: le chiavi stanno fra virgolette; i valori possono essere testo, numeri, true/false, elenchi o altri blocchi; niente virgola dopo l'ultimo elemento. Configurazione contro codice. Le chiavi che contano: istat_code, nome, provincia, regione, miur_codice_catastale, farmacie_di_turno_cod, geo.*, brand.*, site.mode, fork.maintainer_*, features.*. Menzioni: src/lib/project-origin.ts non va modificato.",
      },
      {
        titolo: "Attività 1 — La configurazione su carta",
        durataMinuti: 20,
        consegna:
          "Prima di toccare il computer, ogni gruppo compila su carta la propria parte (scheda studente 6): chi cerca il codice ISTAT, chi le coordinate, chi decide i moduli, chi scrive i dati del fork. Farlo su carta prima serve a due cose: si divide il lavoro e non si rompe il JSON.",
      },
      {
        titolo: "Attività 2 — La configurazione vera",
        durataMinuti: 35,
        consegna:
          "Si mettono insieme i pezzi in config/comune.json (copiato da config/comune.example.json). Si valida il file con un validatore JSON prima di salvarlo. Commit. Vercel ricostruisce da solo.",
      },
      {
        titolo: "Attività 3 — Gli interruttori",
        durataMinuti: 20,
        consegna:
          "Guardate insieme la lista features e decidete quali spegnere. Regola d'oro: un modulo acceso senza i dati giusti è peggio di un modulo spento. Un pannello vuoto o con dati di un altro comune fa danno alla credibilità di tutto il cruscotto.",
      },
    ],
    discipline: [
      "Informatica (formati dati, versionamento)",
      "geografia (coordinate, confini)",
      "educazione civica (attribuzione, licenze)",
    ],
    digcomp: ["area 3.1", "area 3.3"],
    descrizione:
      "Leggere e modificare JSON, trovare codice ISTAT e catastale, decidere quali moduli accendere, citare il progetto originale.",
    intro: "Configurare l'identità del comune. Il programma non sa niente di nessun comune. Sa leggere un file e comportarsi di conseguenza. Cambiare la configurazione non è «programmare meno»: è il modo giusto di far funzionare la stessa cosa in ottomila posti diversi. La classe trova il codice ISTAT, il codice catastale e le coordinate, decide quali moduli hanno senso per il proprio territorio e riconosce l'obbligo di citare il progetto originale. Prerequisito: lezione 5, cruscotto già online. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore · un dispositivo per gruppo · scheda studente 6 · un validatore JSON online · config/comune.example.json proiettato.",
    chiusura:
      "Confrontate con le tre cose che non vanno bene annotate nella lezione 5: quante sono state risolte?",
    compitoCasa:
      "Scrivere in cinque righe che cosa succederebbe se domani cambiassimo solo il codice ISTAT nel file di configurazione.",
    cosePuoAndareStorto: [
      "JSON non valido. Virgola di troppo, virgolette sbagliate, parentesi non chiusa. Il validatore dice la riga. Non correggere tu: fallo trovare a loro, è l'esercizio.",
      "Il comune non compare nei dati. Quasi sempre il codice ISTAT è sbagliato o gli sono stati tolti gli zeri iniziali. Verifica su /api/kpi.",
      "terrain_sea_side sbagliato. Il rendering del territorio esce strano. Una configurazione sbagliata non dà errore, dà un risultato plausibile ma falso.",
      "Lo stemma non si può usare. Non forzare. Lasciare il segnaposto è la scelta corretta e didatticamente migliore.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 6 — La configurazione su carta",
      istruzioni: "Compila la parte assegnata prima di toccare il computer.",
      campiIntestazione: ["Gruppo", "Parte assegnata"],
      tabelle: [
        {
          caption: "Identità del comune",
          colonne: ["Chiave", "Valore"],
          righeEtichette: [
            "istat_code",
            "nome",
            "provincia (sigla)",
            "regione",
            "miur_codice_catastale",
            "farmacie_di_turno_cod (ISTAT senza lo zero iniziale)",
          ],
        },
      ],
      domande: [
        "Dove ho trovato il codice ISTAT?",
        "Dove ho trovato le coordinate?",
      ],
      checklist: [
        "Ho verificato che non abbiamo modificato src/lib/project-origin.ts",
        "Ho verificato che il cruscotto dichiara di essere un progetto non ufficiale",
        "Nessuna virgola dopo l'ultimo elemento",
        "Tutte le virgolette aperte sono chiuse",
        "Il validatore JSON non dà errori",
        "Non abbiamo acceso moduli per cui non abbiamo i dati",
      ],
    },
    materialeIds: ["binario-b"],
  },
  {
    slug: "verificare-dati-accessibilita-menzioni",
    numero: 7,
    binario: "costruire",
    titolo: "Verificare: dati, accessibilità, menzioni",
    h1: "Verificare: dati, accessibilità, menzioni",
    occhiello: "Lezione 7 · Binario B",
    durataMinuti: 120,
    obiettivi: [
      "verificare un valore mostrato risalendo alla fonte originale;",
      "documentare uno scostamento in modo che qualcun altro possa riprodurlo;",
      "controllare i requisiti di base dell'accessibilità di una pagina;",
      "riconoscere le responsabilità di chi pubblica dati.",
    ],
    prerequisiti: [
      "Lezione 6. Il cruscotto deve essere configurato sul proprio comune.",
    ],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Proietta il cruscotto della classe. Frase da dire ad alta voce: «Da adesso questo sito è nostro. Se un numero è sbagliato, la colpa è nostra, non del programma.» È il passaggio dal fare al rispondere di quello che si fa.",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 20,
        consegna:
          "Che cosa vuol dire verificare: prendo il numero mostrato, trovo la fonte primaria, confronto, e annoto tre cose — valore mostrato, valore alla fonte, periodo di ciascuno. Accessibilità in quattro controlli: Tab, zoom 200%, testo alternativo, contrasto. Menzioni: verificare che il cruscotto citi il progetto originale e dichiari di non essere ufficiale.",
      },
      {
        titolo: "Attività A — Data quality audit",
        durataMinuti: 35,
        consegna:
          "Ogni gruppo prende una sezione del cruscotto e verifica tre numeri contro la fonte primaria, compilando la scheda 7. Non serve trovare errori: serve documentare il controllo. Se un numero coincide, si scrive che coincide.",
      },
      {
        titolo: "Attività B — Accessibilità",
        durataMinuti: 20,
        consegna:
          "Ogni gruppo fa i quattro controlli su una pagina diversa e annota i problemi con la pagina e l'elemento preciso.",
      },
      {
        titolo: "Attività C — Menzioni",
        durataMinuti: 10,
        consegna:
          "Un gruppo verifica il rispetto delle regole di attribuzione e la presenza del disclaimer.",
      },
      {
        titolo: "Confronto",
        durataMinuti: 20,
        consegna:
          "Si mette in comune tutto. Poi la decisione più importante della lezione: che cosa facciamo con quello che abbiamo trovato? Se è un errore di configurazione → si corregge. Se è un errore del programma o della fonte → si apre una issue sul repository originale.",
      },
    ],
    discipline: [
      "Informatica",
      "statistica",
      "educazione civica (responsabilità, accessibilità come diritto)",
      "italiano (scrittura tecnica)",
    ],
    digcomp: ["area 1.2", "area 2.4", "area 5"],
    descrizione:
      "Audit di tre numeri contro la fonte primaria, quattro controlli di accessibilità, verifica delle menzioni, eventuale issue sul repository originale.",
    intro: "Verificare: dati, accessibilità, menzioni. Da adesso il sito è della classe. Se un numero è sbagliato, la colpa è loro, non del programma. Verificare non è «sembra giusto»: è prendere il numero mostrato, trovare la fonte primaria, confrontare, annotare valore mostrato, valore alla fonte, periodo di ciascuno. Quattro prove di accessibilità. Menzioni al progetto originale. Se la classe apre una issue vera, è la prima volta che contribuisce a un progetto open source. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore · un dispositivo per gruppo · scheda studente 7 · le fonti primarie individuate nella lezione 2 · kit dati offline.",
    chiusura:
      "Pubblicare un dato non è dire una cosa. È prendersi la responsabilità che sia vera, e dire dove l'hai presa.",
    compitoCasa:
      "Scrivere una issue in bella copia (anche se non verrà inviata), rispettando la struttura: contesto, comportamento atteso, comportamento osservato, passi per riprodurlo, fonte.",
    cosePuoAndareStorto: [
      "Non si trovano scostamenti. Va benissimo. L'audit ha comunque prodotto una tracciabilità.",
      "Si trovano scostamenti ovunque. Prima di gridare all'errore, controlla i periodi: nove volte su dieci si sta confrontando un dato 2024 con uno 2022.",
      "Un gruppo vuole «sistemare» il codice. Non è l'obiettivo del percorso e non serve: la issue è il contributo giusto a questo livello.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 7 — Audit",
      istruzioni: "Verifica tre numeri, quattro controlli di accessibilità, menzioni.",
      campiIntestazione: ["Gruppo", "Sezione del cruscotto verificata"],
      tabelle: [
        {
          caption: "Verifica dei dati",
          colonne: ["Voce", "Numero 1", "Numero 2", "Numero 3"],
          righeEtichette: [
            "Indicatore",
            "Valore mostrato dal cruscotto",
            "Periodo indicato dal cruscotto",
            "Fonte primaria consultata",
            "Valore alla fonte",
            "Periodo alla fonte",
            "Coincidono?",
            "Se no, causa più probabile",
          ],
        },
      ],
      domande: [
        "Che cosa mi aspettavo.",
        "Che cosa ho visto.",
        "Come si riproduce.",
        "Fonte che ho usato per verificare.",
      ],
      checklist: [
        "Navigo tutta la pagina solo con Tab e capisco dove sono",
        "A zoom 200% non si rompe niente",
        "Le immagini hanno un testo alternativo",
        "Il testo si legge bene sullo sfondo",
        "Il cruscotto cita il progetto originale",
        "Il cruscotto dichiara di essere un progetto indipendente e non ufficiale",
        "Le fonti dei dati sono indicate",
        "La nostra scuola è indicata come manutentrice del fork",
      ],
    },
    materialeIds: ["binario-b", "rubrica"],
  },
  {
    slug: "raccontare-i-dati",
    numero: 8,
    binario: "costruire",
    titolo: "Raccontare i dati",
    h1: "Raccontare i dati",
    occhiello: "Lezione 8 · Binario B",
    durataMinuti: 120,
    obiettivi: [
      "costruire una data story: domanda, dato, contesto, confronto, limite, proposta;",
      "scegliere la forma giusta per mostrare un dato;",
      "presentare a un pubblico che non conosce l'argomento;",
      "dire che cosa non si sa, senza considerarlo una sconfitta.",
    ],
    prerequisiti: [
      "Tutte le lezioni precedenti. Se è stato fatto anche il binario A, serve l'esito della richiesta di accesso civico della lezione 4.",
    ],
    attivita: [
      {
        titolo: "Apertura",
        durataMinuti: 10,
        consegna:
          "Domanda diretta: «Se aveste cinque minuti davanti al sindaco, che cosa gli direste con i dati che avete raccolto?» Raccogli le prime risposte: saranno elenchi di numeri. Il lavoro della lezione è trasformarle in un discorso.",
      },
      {
        titolo: "Mini-lezione",
        durataMinuti: 20,
        consegna:
          "La struttura in sei mosse: domanda, dato, contesto, confronto, limite, proposta. Il punto 5 è quello che distingue una presentazione seria da una pubblicitaria. Dire quello che non si sa aumenta la credibilità, non la riduce. Scegliere la forma: quantità nel tempo → linea; confronto fra pochi elementi → barre; una proporzione → una barra sola o un numero grande. Le torte quasi mai. Il titolo del grafico dice la conclusione, non l'argomento.",
      },
      {
        titolo: "Attività",
        durataMinuti: 50,
        consegna:
          "Ogni gruppo prepara cinque minuti su un tema del cruscotto, seguendo le sei mosse. Chi ha fatto il binario A inserisce l'esito della richiesta di accesso civico: se è arrivata una risposta, è un risultato; se non è arrivata, è un risultato ancora migliore ed è esattamente il punto 5.",
      },
      {
        titolo: "Prova generale",
        durataMinuti: 25,
        consegna:
          "Due o tre gruppi presentano. Gli altri valutano con la rubrica, che hanno in mano dall'inizio del percorso. Feedback fra pari con una regola sola: prima una cosa che ha funzionato, poi una cosa da cambiare, entrambe specifiche.",
      },
      {
        titolo: "Chiusura",
        durataMinuti: 15,
        consegna:
          "Si decide dove e quando presentare davvero: open day, assemblea di istituto, consiglio comunale, sito della scuola. E si manda l'indirizzo del cruscotto per la vetrina delle classi.",
      },
    ],
    discipline: [
      "Italiano (testo argomentativo, esposizione)",
      "arte e immagine",
      "educazione civica",
      "matematica e statistica",
    ],
    digcomp: ["area 2.1", "area 3.1"],
    descrizione:
      "Data story in sei mosse, presentazione di cinque minuti a gruppo, cruscotto pubblicato, segnalazione alla vetrina delle classi.",
    intro: "Raccontare i dati. Ogni data story funziona in sei mosse, e nell'ordine: domanda, dato, contesto, confronto, limite, proposta. Dire quello che non si sa aumenta la credibilità, non la riduce. Ogni gruppo prepara cinque minuti su un tema del cruscotto. Prodotto finale: presentazione di 5 minuti a gruppo, cruscotto pubblicato e configurato sul proprio comune, indirizzo inviato per la vetrina delle classi. Durata: 120 minuti.",
    materialiLezione:
      "Proiettore · rubrica di valutazione distribuita alla classe · scheda studente 8 · il cruscotto della classe.",
    chiusura:
      "Un dato che nessuno legge non ha cambiato niente. Il lavoro finisce quando qualcun altro capisce.",
    compitoCasa:
      "Presentazione pubblica o, se non si riesce a organizzare, registrazione video pubblicata sul sito della scuola. Il punto è che qualcuno fuori dalla classe la veda.",
    cosePuoAndareStorto: [
      "I gruppi presentano elenchi di numeri. È normale al primo giro. Rimanda indietro con una sola domanda: «qual è la tua domanda di partenza?»",
      "Nessuno vuole dire i limiti. Insisti, con l'argomento pratico: se non li dici tu, li dirà qualcuno del pubblico, e a quel punto sembrerà che li nascondevi.",
      "La presentazione pubblica non si riesce a organizzare. Ripiega su una registrazione video pubblicata sul sito della scuola.",
    ],
    schedaStudente: {
      titolo: "Scheda studente 8 — La nostra data story",
      istruzioni: "Segui le sei mosse. Il titolo del grafico deve dire la conclusione, non l'argomento.",
      campiIntestazione: ["Gruppo", "Tema"],
      tabelle: [],
      domande: [
        "Domanda — che cosa volevamo sapere.",
        "Dato — il numero che regge tutto (valore, periodo, fonte).",
        "Contesto — che cosa significa davvero.",
        "Confronto — rispetto a che cosa.",
        "Limite — che cosa NON sappiamo e perché.",
        "Proposta — che cosa si potrebbe fare.",
        "Che forma uso (linea / barre / numero grande).",
        "Titolo del grafico (deve dire la conclusione, non l'argomento).",
      ],
      checklist: [
        "Ogni slide ha un solo messaggio",
        "Ogni numero ha il periodo e la fonte",
        "Ogni percentuale ha il suo denominatore",
        "Abbiamo detto almeno una cosa che non sappiamo",
        "Abbiamo detto che il cruscotto non è ufficiale",
        "Stiamo dentro i 5 minuti",
      ],
    },
    materialeIds: ["binario-b", "rubrica", "modelli-kit"],
  },
];
