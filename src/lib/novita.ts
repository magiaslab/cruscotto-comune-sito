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
    titolo: "Percorso Scuola",
    testo: "Due binari, otto lezioni da due ore, materiali CC BY-SA 4.0. Il binario A non richiede account; nel B gli account sono del docente o della scuola.",
    href: "/scuola",
    hrefLabel: "Cruscotto Comune a scuola",
  },
  {
    data: "2026-08-27",
    titolo: "Minisito di progetto",
    testo: "www.cruscottocomune.it è lo strumento di divulgazione e l’hub dei progetti: guida, comuni già nati, kit per l’ente, scuola e supporto. Il template vuoto da forkare resta magiaslab/cruscotto-comune. I cruscotti già esistenti sono tre; il primo è San Vincenzo.",
    href: "/riusa",
    hrefLabel: "Porta nel tuo comune",
  },
  {
    data: "2026-08-27",
    titolo: "Template 0.2.0, solo dashboard",
    testo: "Il repository magiaslab/cruscotto-comune è una dashboard vuota: Next.js 16, config/comune.json, moduli on/off. San Vincenzo resta un progetto finito sul suo dominio.",
    href: "https://github.com/magiaslab/cruscotto-comune",
    hrefLabel: "Apri il template su GitHub",
  },
  {
    data: "2026-08-21",
    titolo: "Un deploy = un comune",
    testo: "Identità, ISTAT, coordinate e feature flag stanno in un solo JSON. I fork non copiano più a mano spiagge, webcam o path della Toscana.",
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
