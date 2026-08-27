/**
 * Segnalazione di un cruscotto da aggiungere a elenco e mappa.
 * L’invio crea (o precompila) una issue su magiaslab/cruscotto-comune-sito.
 */

import {
  buildIssueNewUrl,
  createGithubIssue,
  githubConfigured,
  listGithubIssuesByPrefix,
  type PublicGithubIssue,
} from "@/lib/github-sito";

export const SEGNALA_ISSUE_PREFIX = "[Cruscotto]";

export type SegnalaStato = "online" | "in_sviluppo";

export type SegnalaCome =
  | "template"
  | "scuola"
  | "civico"
  | "ente"
  | "altro";

export type SegnalaPayload = {
  stato: SegnalaStato;
  come: SegnalaCome;
  comune: string;
  url: string;
  chi: string;
  comeTesto?: string;
  istat?: string;
  note?: string;
  contatto?: string;
  pagina?: string;
  userAgent?: string;
};

export const SEGNALA_COME_LABEL: Record<SegnalaCome, string> = {
  template: "Dal template",
  scuola: "Classe o PCTO",
  civico: "Progetto civico personale",
  ente: "Con l’ente o per l’ente",
  altro: "Altro",
};

export const SEGNALA_COME_HINT: Record<SegnalaCome, string> = {
  template: "Partito da magiaslab/cruscotto-comune, configurato sul comune (un fork: una copia del template sul proprio GitHub).",
  scuola: "Realizzato a scuola, nel percorso didattico o in un PCTO.",
  civico: "Messo online da un cittadino, un’associazione o un gruppo.",
  ente: "L’amministrazione ha collaborato o ospita il sito.",
  altro: "Un caso che non sta nelle voci sopra. Spiegalo nel testo.",
};

export const SEGNALA_STATO_LABEL: Record<SegnalaStato, string> = {
  online: "Pubblico",
  in_sviluppo: "In anteprima",
};

export const SEGNALA_COPY = {
  titolo: "Segnala un cruscotto",
  lede: "Se hai pubblicato un cruscotto, o ne conosci uno fatto da altri, segnalalo qui. L’invio apre una issue pubblica su GitHub: dopo un controllo lo mettiamo in elenco e sulla mappa.",
  comeDomanda: "Come è stato realizzato?",
  statoDomanda: "A che punto è?",
  onlineHint: "Ha un indirizzo stabile, consultabile da chiunque.",
  wipHint: "È ancora una preview (per esempio su Vercel) o sta cambiando.",
  comuneLabel: "Comune",
  urlLabel: "Indirizzo del cruscotto",
  istatLabel: "Codice ISTAT (opzionale)",
  chiLabel: "Chi l’ha realizzato",
  chiHint: "Nome, scuola, associazione o ente. Niente dati di minori.",
  comeTestoLabel: "Come (opzionale)",
  comeTestoHint: "Due righe su come è stato fatto: copia del template, classe, anno scolastico.",
  noteLabel: "Note per la mappa (opzionale)",
  contattoLabel: "Contatto (opzionale)",
  contattoHint: "Email o profilo GitHub, solo se vuoi una risposta.",
  riepilogo: "Riepilogo",
  disclaimer:
    "Inviando, il testo diventa una issue pubblica sul repository GitHub di questo sito. Non inserire dati personali di terzi, soprattutto di minori.",
  invia: "Invia su GitHub",
  invioInCorso: "Invio in corso…",
  avanti: "Avanti",
  indietro: "Indietro",
  grazie: "Segnalazione registrata",
  fallback:
    "Per completare l’invio apri il link GitHub (serve un account). Il form ha già preparato titolo e testo.",
  apiOk:
    "La segnalazione è una issue pubblica. Dopo il controllo comparirà in elenco e sulla mappa.",
  nuova: "Nuova segnalazione",
  recenti: "Segnalazioni recenti",
  recentiLede:
    "Issue pubbliche aperte da questo form. Lo stato (aperta/chiusa) si aggiorna su GitHub.",
  nessuna: "Ancora nessuna segnalazione pubblica.",
  elencoNonDisponibile: "Elenco segnalazioni non disponibile.",
  vediTutte: "Vedi tutte su GitHub",
  erroreRete: "Errore di rete. Controlla la connessione e riprova.",
  erroreInvio: "Invio non riuscito. Riprova.",
} as const;

const COME_IDS: SegnalaCome[] = [
  "template",
  "scuola",
  "civico",
  "ente",
  "altro",
];
const STATO_IDS: SegnalaStato[] = ["online", "in_sviluppo"];

export function isSegnalaCome(v: string): v is SegnalaCome {
  return (COME_IDS as string[]).includes(v);
}

export function isSegnalaStato(v: string): v is SegnalaStato {
  return (STATO_IDS as string[]).includes(v);
}

export function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function isIstatCode(value: string): boolean {
  return /^\d{6}$/.test(value);
}

function issueTitle(payload: SegnalaPayload): string {
  return `${SEGNALA_ISSUE_PREFIX} ${payload.comune}`.slice(0, 200);
}

function issueBody(payload: SegnalaPayload): string {
  const extra: string[] = [];
  if (payload.comeTesto) {
    extra.push("### Come è stato fatto", "", payload.comeTesto, "");
  }
  if (payload.note) {
    extra.push("### Note", "", payload.note, "");
  }
  return [
    "## Segnalazione cruscotto",
    "",
    "| Campo | Valore |",
    "| --- | --- |",
    `| Comune | ${payload.comune} |`,
    `| URL | ${payload.url} |`,
    `| Stato | ${SEGNALA_STATO_LABEL[payload.stato]} |`,
    `| Come | ${SEGNALA_COME_LABEL[payload.come]} |`,
    `| Chi | ${payload.chi} |`,
    `| ISTAT | ${payload.istat || "—"} |`,
    `| Contatto | ${payload.contatto || "—"} |`,
    "",
    ...extra,
    "### Checklist per il catalogo",
    "",
    "- [ ] URL raggiungibile",
    "- [ ] Aggiungere voce in `src/lib/cruscotti-rete.ts` (ISTAT, lat/lng, tagline)",
    "- [ ] Compare in elenco e sulla mappa di `/comuni`",
    "",
    "<details><summary>Metadati</summary>",
    "",
    "```",
    `pagina: ${payload.pagina || "n/d"}`,
    `user-agent: ${payload.userAgent || "n/d"}`,
    `quando: ${new Date().toISOString()}`,
    "```",
    "",
    "</details>",
    "",
    "_Issue creata dal form Segnala un cruscotto su cruscottocomune.it/comuni._",
  ].join("\n");
}

export function segnalaGithubConfigured(): boolean {
  return githubConfigured();
}

export function buildSegnalaIssueUrl(payload: SegnalaPayload): string {
  return buildIssueNewUrl(issueTitle(payload), issueBody(payload));
}

export async function createSegnalaIssue(payload: SegnalaPayload) {
  return createGithubIssue(issueTitle(payload), issueBody(payload));
}

export type PublicSegnalaIssue = PublicGithubIssue;

export async function listSegnalaIssues(limit = 10) {
  return listGithubIssuesByPrefix(SEGNALA_ISSUE_PREFIX, limit);
}
