/** Aggiornare qui quando nasce un nuovo fork pubblico.
 *  Le segnalazioni arrivano dal form su /comuni (issue GitHub `[Cruscotto]`).
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
    tagline: "Costa livornese, porto, farmacie, treni e i dati aperti di AgID.",
    note: "Il primo, di Alessandro Cipriani. Ha anche pezzi locali — webcam, spiagge, bot Telegram — che altri comuni non devono copiare.",
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
    tagline: "Sulla Costa degli Etruschi, con i dati del proprio territorio.",
    note: "Stesso tipo di cruscotto, configurato sul Comune di Campiglia Marittima.",
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
    tagline: "Nel Casentino, ancora su un indirizzo provvisorio Vercel.",
    note: "Comune interno, quindi niente porto né balneazione. Il dominio definitivo arriverà a lavoro finito.",
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

/** «tre cruscotti. Il primo è quello di San Vincenzo» */
export function fraseCruscottiEsistenti(): string {
  const n = countCruscottiEsistenti();
  const lettere = countCruscottiEsistentiInLettere();
  const primo = getPrimoCruscotto();
  const nome = n === 1 ? "cruscotto" : "cruscotti";
  return `${lettere} ${nome}. Il primo è quello di ${primo.nome}`;
}
