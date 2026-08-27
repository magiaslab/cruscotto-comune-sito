export type NovitaVoce = {
  data: string;
  titolo: string;
  testo: string;
  href?: string;
  hrefLabel?: string;
};

/** Cronologia pubblica del template e del minisito. La più recente sta in cima. */
export const NOVITA: NovitaVoce[] = [
  {
    data: "2026-08-27",
    titolo: "San Vincenzo 0.3.0: abitanti equivalenti e nuove fonti",
    testo:
      "Sul cruscotto di San Vincenzo i rifiuti, le farmacie e i veicoli si leggono anche per abitante equivalente (residenti più presenze turistiche / 365). Nuove fonti: DAIT (chi amministra), IPA, INGV, ISTAT D7B, WMS EFFIS. Pagine Chi amministra, Confronto, Dati aperti, export pubblici e embed. Adattatori toscani: SIR, ARRR, Geoscopio, PGRA. Il template non è ancora allineato su queste parti.",
    href: "https://www.cruscottosanvincenzo.it/chi-amministra",
    hrefLabel: "Apri Chi amministra su San Vincenzo",
  },
  {
    data: "2026-08-27",
    titolo: "Catalogo delle sezioni, con dati e fonti",
    testo:
      "Una pagina elenca ogni sezione del cruscotto: cosa mostra, da quale fonte arriva, se è nel template o per ora solo su San Vincenzo. Gli screenshot sono del primo cruscotto online.",
    href: "/sezioni",
    hrefLabel: "Apri il catalogo sezioni",
  },
  {
    data: "2026-08-27",
    titolo: "Suggerisci e segnala un cruscotto",
    testo: "I suggerimenti su questo sito diventano issue GitHub. Dalla pagina Comuni si segnala un cruscotto già realizzato (chi, come, indirizzo) per elenco e mappa.",
    href: "/suggerisci",
    hrefLabel: "Apri Suggerisci",
  },
  {
    data: "2026-08-27",
    titolo: "Percorso Scuola",
    testo: "Due binari, otto lezioni da due ore, materiali CC BY-SA 4.0. Nel binario A non servono account; nel B gli account sono del docente o della scuola.",
    href: "/scuola",
    hrefLabel: "Cruscotto Comune a scuola",
  },
  {
    data: "2026-08-27",
    titolo: "Questo sito",
    testo: "www.cruscottocomune.it raccoglie i cruscotti già nati, la guida, il kit per l’ente, la scuola e il supporto. Il template resta magiaslab/cruscotto-comune. I cruscotti online sono tre; il primo è San Vincenzo.",
    href: "/riusa",
    hrefLabel: "Apri la guida al riuso",
  },
  {
    data: "2026-08-27",
    titolo: "Template 0.2.0",
    testo: "Il repository magiaslab/cruscotto-comune è una dashboard vuota: Next.js 16, file del comune, moduli da attivare. San Vincenzo resta un progetto finito sul suo dominio.",
    href: "https://github.com/magiaslab/cruscotto-comune",
    hrefLabel: "Apri il template su GitHub",
  },
  {
    data: "2026-08-21",
    titolo: "Un comune, un’installazione",
    testo: "Identità, ISTAT, coordinate e interruttori dei moduli stanno in un solo file JSON. Così un nuovo comune non copia più a mano spiagge, webcam o path della Toscana.",
    href: "/fonti",
    hrefLabel: "Catalogo delle fonti",
  },
  {
    data: "2026-08-21",
    titolo: "Campiglia Marittima online",
    testo: "Secondo cruscotto pubblico, sulla Costa degli Etruschi. Stesso modello di San Vincenzo, dati del proprio territorio.",
    href: "https://www.cruscottocampigliamarittima.it",
    hrefLabel: "Apri Cruscotto Campiglia",
  },
  {
    data: "2026-07-30",
    titolo: "Guida al riuso e pagina Supporto",
    testo: "Percorso GitHub → Vercel anche per chi non programma, e un caffè volontario su Buy Me a Coffee per coprire hosting e tempo.",
    href: "/sostieni",
    hrefLabel: "Pagina Supporto",
  },
];
