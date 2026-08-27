/**
 * Rete dei cruscotti comunali già online o in lavorazione.
 * Aggiornare qui quando nasce un nuovo fork pubblico.
 */

export type CruscottoStatus = "online" | "in_sviluppo";

export type CruscottoRete = {
  id: string;
  nome: string;
  provincia: string;
  regione: string;
  istat: string;
  url: string;
  status: CruscottoStatus;
  ordine: number;
  tagline: string;
  note: string;
  lat: number;
  lng: number;
  /** Primo cruscotto da cui è nato il template. */
  origin?: boolean;
};

export const CRUSCOTTI_RETE: CruscottoRete[] = [
  {
    id: "san-vincenzo",
    nome: "San Vincenzo",
    provincia: "LI",
    regione: "Toscana",
    istat: "049018",
    url: "https://www.cruscottosanvincenzo.it",
    status: "online",
    ordine: 1,
    origin: true,
    lat: 43.1006,
    lng: 10.5417,
    tagline: "Il primo cruscotto: costa livornese, porto e dati aperti AgID.",
    note: "Progetto originale di Alessandro Cipriani. Farmacie, DAE, treni, meteo, finanza e moduli locali (porto, balneazione, bot Telegram).",
  },
  {
    id: "campiglia-marittima",
    nome: "Campiglia Marittima",
    provincia: "LI",
    regione: "Toscana",
    istat: "049002",
    url: "https://www.cruscottocampigliamarittima.it",
    status: "online",
    ordine: 2,
    lat: 43.06,
    lng: 10.6144,
    tagline: "Il secondo cruscotto, sulla Costa degli Etruschi.",
    note: "Stesso modello, adattato al Comune di Campiglia Marittima: KPI nazionali, servizi utili e sezioni territoriali.",
  },
  {
    id: "bibbiena",
    nome: "Bibbiena",
    provincia: "AR",
    regione: "Toscana",
    istat: "051004",
    url: "https://bibbiena-cruscotto.vercel.app/",
    status: "in_sviluppo",
    ordine: 3,
    lat: 43.6975,
    lng: 11.8147,
    tagline: "Fork in lavorazione nel Casentino, ancora su anteprima Vercel.",
    note: "Comune interno (niente porto né balneazione). L’indirizzo attuale è una preview: il dominio definitivo arriverà a lavoro finito.",
  },
];

export function cruscottiOnline(): CruscottoRete[] {
  return CRUSCOTTI_RETE.filter((c) => c.status === "online");
}

export function cruscottiInSviluppo(): CruscottoRete[] {
  return CRUSCOTTI_RETE.filter((c) => c.status === "in_sviluppo");
}

const NUMERI_IT = [
  "zero",
  "un",
  "due",
  "tre",
  "quattro",
  "cinque",
  "sei",
  "sette",
  "otto",
  "nove",
  "dieci",
] as const;

/** Tutti i cruscotti in catalogo (online o in anteprima). Oggi 3. */
export function countCruscottiEsistenti(): number {
  return CRUSCOTTI_RETE.length;
}

export function countCruscottiEsistentiInLettere(): string {
  const n = countCruscottiEsistenti();
  return n < NUMERI_IT.length ? NUMERI_IT[n] : String(n);
}

/** Il primo cruscotto della rete: San Vincenzo. */
export function getPrimoCruscotto(): CruscottoRete {
  const primo = CRUSCOTTI_RETE.find((c) => c.origin === true);
  if (!primo) {
    throw new Error("Catalogo senza cruscotto origin (San Vincenzo).");
  }
  return primo;
}

export function getAltriCruscotti(): CruscottoRete[] {
  const primoId = getPrimoCruscotto().id;
  return CRUSCOTTI_RETE.filter((c) => c.id !== primoId).sort(
    (a, b) => a.ordine - b.ordine,
  );
}

/** «tre cruscotti già esistenti. Il primo è San Vincenzo» */
export function fraseCruscottiEsistenti(): string {
  const n = countCruscottiEsistenti();
  const lettere = countCruscottiEsistentiInLettere();
  const primo = getPrimoCruscotto();
  const nome = n === 1 ? "cruscotto già esistente" : "cruscotti già esistenti";
  return `${lettere} ${nome}. Il primo è ${primo.nome}`;
}
