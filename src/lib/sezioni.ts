/**
 * Catalogo delle sezioni del cruscotto: dati in pagina e fonti agganciate.
 * Nucleo = template. Opzionale = flag in config. Esemplare = acceso su San Vincenzo 0.3.0.
 */

export type SezioneAmbito = "nucleo" | "opzionale" | "esemplare";

export type SezioneGruppo =
  | "evidenza"
  | "territorio"
  | "economia"
  | "progetto";

export type SezioneFonte = {
  nome: string;
  url?: string;
};

export type SezioneCruscotto = {
  id: string;
  label: string;
  path: string;
  gruppo: SezioneGruppo;
  intro: string;
  dati: string[];
  fonti: SezioneFonte[];
  ambito: SezioneAmbito;
  feature?: string;
  screenshot?: string;
};

export const SEZIONI_GRUPPI: {
  id: SezioneGruppo;
  label: string;
  intro: string;
}[] = [
  {
    id: "evidenza",
    label: "In evidenza",
    intro:
      "Quello che serve adesso: servizi in tempo reale e i primi indicatori del comune.",
  },
  {
    id: "territorio",
    label: "Territorio",
    intro:
      "Luoghi, rischi, ambiente e — dove ha senso — mare e porto. I moduli costieri restano spenti nell’entroterra.",
  },
  {
    id: "economia",
    label: "Economia e società",
    intro:
      "Imprese, scuole, demografia, bilancio. Su San Vincenzo anche chi siede in giunta e il confronto con i comuni vicini.",
  },
  {
    id: "progetto",
    label: "Progetto",
    intro: "Catalogo delle fonti usate dal cruscotto ed export per chi riusa i dati.",
  },
];

/** Quattro schede in home: mix di nucleo e di novità San Vincenzo 0.3.0. */
export const SEZIONI_HOME_IDS = [
  "panoramica",
  "sanita",
  "ambiente",
  "chi-amministra",
] as const;

export const SEZIONI_AMBITO_LABEL: Record<SezioneAmbito, string> = {
  nucleo: "Dati nazionali",
  opzionale: "Modulo da attivare",
  esemplare: "Per ora su San Vincenzo",
};

const AGID: SezioneFonte = {
  nome: "Cruscotto Italia (AgID)",
  url: "https://cruscotto-italia.dati.gov.it/",
};
const OSM: SezioneFonte = {
  nome: "OpenStreetMap",
  url: "https://www.openstreetmap.org/copyright",
};

export const SEZIONI_CRUSCOTTO: SezioneCruscotto[] = [
  {
    id: "panoramica",
    label: "Panoramica",
    path: "/",
    gruppo: "evidenza",
    ambito: "nucleo",
    intro:
      "Home della dashboard: servizi utili adesso e un’istantanea di indicatori comunali, con link alle sezioni.",
    dati: [
      "Farmacia di turno, prossimi treni, carburanti, meteo ora",
      "Popolazione, reddito medio, indice di turisticità, differenziata, FTTH",
      "Farmacie, colonnine EV, accessibilità OSM, enti RUNTS e altri KPI AgID",
    ],
    fonti: [
      AGID,
      { nome: "FarmacieDiTurno.org", url: "https://www.farmaciediturno.org/" },
      { nome: "ViaggiaTreno", url: "https://www.viaggiatreno.it/" },
      { nome: "MIMIT carburanti" },
      { nome: "OpenWeather / Open-Meteo", url: "https://open-meteo.com/" },
    ],
    screenshot: "/sezioni/panoramica.jpg",
  },
  {
    id: "sanita",
    label: "Sanità",
    path: "/sanita",
    gruppo: "evidenza",
    ambito: "nucleo",
    feature: "dae",
    intro:
      "Turni delle farmacie, mappa dei defibrillatori e indicatori sanitari AgID.",
    dati: [
      "Farmacie e parafarmacie, turno odierno, mappa",
      "DAE da OpenAEDMap / OSM (sync periodico)",
      "Strutture e indicatori salute da Cruscotto Italia",
    ],
    fonti: [
      AGID,
      { nome: "FarmacieDiTurno.org", url: "https://www.farmaciediturno.org/" },
      { nome: "OpenAEDMap / OSM", url: "https://openaedmap.org/" },
      { nome: "Ministero della Salute" },
    ],
    screenshot: "/sezioni/sanita.jpg",
  },
  {
    id: "disabilita",
    label: "Disabilità",
    path: "/disabilita",
    gruppo: "evidenza",
    ambito: "nucleo",
    intro:
      "Luoghi accessibili, stalli, bagni e terzo settore. I tag OSM sono volontari: vanno verificati.",
    dati: [
      "Luoghi Wheelmap / OSM (wheelchair, stalli, bagni)",
      "Enti RUNTS e inclusione",
      "ISTAT Disabilità in cifre, se disponibile",
    ],
    fonti: [
      OSM,
      { nome: "Wheelmap", url: "https://wheelmap.org/" },
      { nome: "ISTAT Disabilità in cifre", url: "https://www.disabilitaincifre.istat.it/" },
      AGID,
    ],
    screenshot: "/sezioni/disabilita.jpg",
  },
  {
    id: "mobilita",
    label: "Mobilità",
    path: "/mobilita",
    gruppo: "evidenza",
    ambito: "nucleo",
    feature: "treni",
    intro:
      "Trasporto, ricarica, carburanti, banda e percorsi. Treni e GTFS si accendono se c’è stazione o feed locale.",
    dati: [
      "Colonnine EV (PUN) e prezzi indicativi",
      "Impianti carburanti MIMIT",
      "Copertura FTTH AGCOM, parco veicolare, pendolarismo",
      "Bus GTFS, treni ViaggiaTreno, ciclabili/pedonali OSM (moduli)",
    ],
    fonti: [
      AGID,
      { nome: "PUN / IDR", url: "https://www.piattaformaunicanazionale.it/idr" },
      { nome: "MIMIT carburanti" },
      { nome: "AGCOM Broadband Map" },
      { nome: "GTFS TPL / ViaggiaTreno", url: "https://www.viaggiatreno.it/" },
      OSM,
    ],
    screenshot: "/sezioni/mobilita.jpg",
  },
  {
    id: "meteo",
    label: "Meteo",
    path: "/meteo",
    gruppo: "evidenza",
    ambito: "nucleo",
    feature: "allerte",
    intro:
      "Condizioni live, previsioni, radar e allerte. Le mappe SIR regionali sono un modulo a parte.",
    dati: [
      "Meteo live e previsioni",
      "Radar precipitazioni",
      "Allerte Protezione Civile / allertameteo.app",
      "Qualità aria, se la fonte è accesa",
    ],
    fonti: [
      { nome: "OpenWeather", url: "https://openweathermap.org/" },
      { nome: "Open-Meteo", url: "https://open-meteo.com/" },
      { nome: "RainViewer" },
      { nome: "allertameteo.app / DPC", url: "https://allertameteo.app/" },
    ],
    screenshot: "/sezioni/meteo.jpg",
  },
  {
    id: "turismo",
    label: "Turismo",
    path: "/turismo",
    gruppo: "territorio",
    ambito: "nucleo",
    feature: "eventi_comune",
    intro:
      "Ricettività ISTAT, eventi e cultura. I dati del porto stanno nella sezione dedicata.",
    dati: [
      "Arrivi, presenze, strutture, indice di turisticità (AgID / ISTAT)",
      "Calendario eventi (sito comunale o CKAN regionale, se acceso)",
      "Biblioteca e luoghi del Ministero della Cultura",
    ],
    fonti: [
      AGID,
      { nome: "ISTAT turismo" },
      { nome: "Ministero della Cultura" },
      { nome: "Sito comunale / open data regionale" },
    ],
    screenshot: "/sezioni/turismo.jpg",
  },
  {
    id: "porto",
    label: "Porto",
    path: "/porto",
    gruppo: "territorio",
    ambito: "opzionale",
    feature: "porto",
    intro:
      "Solo comuni costieri con porto. Webcam e AIS non si copiano da un altro ente.",
    dati: [
      "Posti barca e servizi (config locale)",
      "Webcam comunali",
      "Traffico AIS VesselFinder (embed)",
      "Serie ISTAT movimento passeggeri, se presenti",
    ],
    fonti: [
      { nome: "Config / pagine del comune" },
      { nome: "VesselFinder", url: "https://www.vesselfinder.com/" },
      AGID,
    ],
    screenshot: "/sezioni/porto.jpg",
  },
  {
    id: "ambiente",
    label: "Ambiente",
    path: "/ambiente",
    gruppo: "territorio",
    ambito: "nucleo",
    feature: "balneazione",
    intro:
      "Rifiuti ISPRA nel nucleo. Balneazione, aria ARPA e idrico WFS sono moduli.",
    dati: [
      "Raccolta differenziata e catasto rifiuti ISPRA",
      "Qualità acque di bagno (ARPA regionale, se accesa)",
      "Aria, suolo, servizio idrico / fontanelle (gestore SII)",
    ],
    fonti: [
      { nome: "ISPRA catasto rifiuti", url: "https://www.catasto-rifiuti.isprambiente.it/" },
      { nome: "ARPA regionale (es. ARPAT)" },
      { nome: "Gestore SII / WFS" },
      AGID,
    ],
    screenshot: "/sezioni/ambiente.jpg",
  },
  {
    id: "territorio",
    label: "Territorio",
    path: "/territorio",
    gruppo: "territorio",
    ambito: "nucleo",
    intro: "Morfologia, rischio e vista 3D. INCENDI EFFIS e alberi monumentali su San Vincenzo 0.3.0.",
    dati: [
      "Elevazione, consumo di suolo, rischio",
      "Rilievo 3D",
      "Su San Vincenzo: WMS EFFIS (incendi), alberi monumentali, PGRA, Geoscopio",
    ],
    fonti: [
      AGID,
      OSM,
      { nome: "ISPRA / IdroGEO", url: "https://idrogeo.isprambiente.it/" },
      { nome: "CNR-IRPI" },
      {
        nome: "EFFIS (incendi)",
        url: "https://forest-fire.emergency.copernicus.eu/",
      },
      { nome: "Protezione Civile / dati regionali" },
    ],
    screenshot: "/sezioni/territorio.jpg",
  },
  {
    id: "mappa",
    label: "Mappa",
    path: "/mappa",
    gruppo: "territorio",
    ambito: "nucleo",
    intro: "Layer geospaziali del comune su sfondo OpenStreetMap.",
    dati: [
      "Civici ANNCSU",
      "DAE, farmacie, TPL, percorsi",
      "Altri layer accesi in config",
    ],
    fonti: [OSM, AGID, { nome: "CARTO (basemap, dove indicato)" }],
    screenshot: "/sezioni/mappa.jpg",
  },
  {
    id: "economia",
    label: "Economia",
    path: "/economia",
    gruppo: "economia",
    ambito: "nucleo",
    intro: "Imprese, redditi, PNRR e contratti. Quasi tutto da Cruscotto Italia.",
    dati: [
      "Unità locali ASIA, occupazione, reddito MEF",
      "PNRR, contratti ANAC, opere BDAP",
    ],
    fonti: [
      AGID,
      { nome: "ISTAT ASIA / MEF redditi" },
      { nome: "ANAC" },
      { nome: "Italia Domani / BDAP" },
    ],
    screenshot: "/sezioni/economia.jpg",
  },
  {
    id: "istruzione",
    label: "Istruzione",
    path: "/istruzione",
    gruppo: "economia",
    ambito: "nucleo",
    intro: "Scuole e titoli di studio. Serve il codice catastale in config.",
    dati: [
      "Plessi MIUR (anagrafe, alunni, classi)",
      "Indicatori di istruzione AgID",
    ],
    fonti: [
      AGID,
      { nome: "MIUR open data", url: "https://dati.istruzione.it/opendata/" },
    ],
    screenshot: "/sezioni/istruzione.jpg",
  },
  {
    id: "societa",
    label: "Società",
    path: "/societa",
    gruppo: "economia",
    ambito: "nucleo",
    intro: "Demografia e welfare. Su San Vincenzo 0.3.0 anche il bilancio mensile ISTAT D7B.",
    dati: [
      "Popolazione, età, vecchiaia, stranieri, saldo",
      "Enti RUNTS",
      "Su San Vincenzo: ISTAT D7B bilancio mensile",
    ],
    fonti: [
      AGID,
      { nome: "ISTAT" },
      { nome: "ISTAT D7B (bilancio mensile)" },
    ],
    screenshot: "/sezioni/societa.jpg",
  },
  {
    id: "chi-amministra",
    label: "Chi amministra",
    path: "/chi-amministra",
    gruppo: "economia",
    ambito: "esemplare",
    intro:
      "Sindaco, giunta e consiglio dall’anagrafe DAIT. Acceso su San Vincenzo 0.3.0; il template va allineato.",
    dati: ["Sindaco, giunta, consiglio comunale", "Domicili digitali IPA"],
    fonti: [
      {
        nome: "DAIT — Ministero dell’Interno",
        url: "https://dait.interno.gov.it/",
      },
      { nome: "IPA — Indice PA", url: "https://indicepa.gov.it/" },
    ],
    screenshot: "/sezioni/chi-amministra.jpg",
  },
  {
    id: "confronto",
    label: "Confronto",
    path: "/confronto",
    gruppo: "economia",
    ambito: "esemplare",
    intro:
      "Stessi KPI AgID affiancati ai comuni vicini configurati. Su San Vincenzo: Costa degli Etruschi e Val di Cornia.",
    dati: [
      "Tabella di confronto tra comuni",
      "Codici ISTAT in `comuni_confronto`",
    ],
    fonti: [AGID],
    screenshot: "/sezioni/confronto.jpg",
  },
  {
    id: "finanza",
    label: "Finanza",
    path: "/finanza",
    gruppo: "economia",
    ambito: "nucleo",
    feature: "finanza_dvns",
    intro: "Cassa, PNRR e contratti da AgID. DoveVannoINostriSoldi è un modulo.",
    dati: [
      "Saldo cassa SIOPE, PNRR, opere BDAP, contratti ANAC, patrimonio PA",
      "IRPEF / OpenCivitas via DVNS, se acceso",
      "Quotazioni OMI (Agenzia delle Entrate), se presenti",
    ],
    fonti: [
      AGID,
      { nome: "SIOPE / BDAP" },
      { nome: "ANAC" },
      {
        nome: "DoveVannoINostriSoldi",
        url: "https://www.dovevannoinostrisoldi.com/",
      },
      {
        nome: "Agenzia delle Entrate — OMI",
        url: "https://www.agenziaentrate.gov.it/portale/web/guest/schede/fabbricatiterreni/omi",
      },
    ],
    screenshot: "/sezioni/finanza.jpg",
  },
  {
    id: "dati",
    label: "Dati aperti",
    path: "/dati",
    gruppo: "progetto",
    ambito: "esemplare",
    intro:
      "Catalogo fonti del cruscotto ed export JSON/CSV. Acceso su San Vincenzo 0.3.0.",
    dati: [
      "Elenco fonti usate",
      "Export `/api/pubblico/*`",
      "Feed `/eventi.ics`",
    ],
    fonti: [AGID, { nome: "Tutte le fonti collegate al comune" }],
    screenshot: "/sezioni/dati.jpg",
  },
];

export function sezioniPerGruppo(gruppo: SezioneGruppo): SezioneCruscotto[] {
  return SEZIONI_CRUSCOTTO.filter((s) => s.gruppo === gruppo);
}

export function sezioniInHome(): SezioneCruscotto[] {
  return SEZIONI_HOME_IDS.map(
    (id) => SEZIONI_CRUSCOTTO.find((s) => s.id === id)!,
  );
}

export const SEZIONI_LEDE =
  "Ogni pagina del cruscotto ha i suoi dati e le sue fonti. Con il codice ISTAT funzionano quelle nazionali; il resto si attiva nel file del comune. Alcune pagine — Chi amministra, Confronto, Dati aperti — sono già su San Vincenzo e arriveranno nel template.";
