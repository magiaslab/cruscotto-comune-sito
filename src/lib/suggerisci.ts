/**
 * Wizard Suggerisci del minisito (come /partecipa su San Vincenzo).
 * L’invio crea una issue [Suggerimento] su magiaslab/cruscotto-comune-sito.
 */

import {
  buildIssueNewUrl,
  createGithubIssue,
  githubConfigured,
  listGithubIssuesByPrefix,
  type PublicGithubIssue,
} from "@/lib/github-sito";

export const SUGGERISCI_ISSUE_PREFIX = "[Suggerimento]";

export type SuggerisciTipo =
  | "miglioramento"
  | "bug"
  | "domanda"
  | "nuovo_dato";

export type SuggerisciPayload = {
  tipo: SuggerisciTipo;
  sezione?: string;
  titolo: string;
  messaggio: string;
  contatto?: string;
  pagina?: string;
  userAgent?: string;
};

export const SUGGERISCI_TIPO_LABEL: Record<SuggerisciTipo, string> = {
  miglioramento: "Miglioramento",
  bug: "Problema",
  domanda: "Domanda",
  nuovo_dato: "Nuova fonte o pagina",
};

export const SUGGERISCI_TIPO_HINT: Record<SuggerisciTipo, string> = {
  miglioramento: "Un’idea per rendere più chiaro questo sito, la guida o il template.",
  bug: "Qualcosa non funziona, è sbagliato o confonde.",
  domanda: "Chiarimento su riuso, scuola, fork o come usare il sito.",
  nuovo_dato: "Una fonte, una pagina o un materiale da aggiungere.",
};

export const SUGGERISCI_SEZIONI = [
  "Home",
  "Progetto",
  "Comuni / mappa",
  "Riuso / guida",
  "Scuola",
  "Kit ente",
  "Fonti",
  "Menzioni",
  "Template GitHub",
  "Altro",
] as const;

export const SUGGERISCI_COPY = {
  kicker: "Suggerisci",
  titolo: "Suggerisci un miglioramento",
  lede: "Quattro passi e l’invio apre una issue pubblica su GitHub. Qui si parla di questo sito, della guida e del template, non dei dati di un singolo comune.",
  cosaTitolo: "Di cosa si parla",
  cosaTesto:
    "Idee su questo sito, sulla guida o sul template. Se hai un cruscotto già online, segnalalo dalla pagina Comuni.",
  aiutaTitolo: "Come puoi aiutare",
  wizardTitolo: "Proponi un miglioramento",
  wizardLede:
    "Tipo, sezione, messaggio, conferma. L’invio apre una issue pubblica su GitHub.",
  sezioneLabel: "Sezione (opzionale)",
  sezioneVuota: "Nessuna / trasversale",
  sezioneHint: "Serve solo a inquadrare meglio la richiesta. Puoi lasciare vuoto.",
  titoloLabel: "Titolo breve",
  titoloPlaceholder: "Es. Chiarire il passo del fork nella guida",
  messaggioLabel: "Descrizione",
  messaggioPlaceholder:
    "Spiega cosa vorresti, perché è utile, e se hai un link.",
  contattoLabel: "Contatto (opzionale)",
  contattoPlaceholder: "Email o GitHub, solo se vuoi una risposta",
  riepilogo: "Riepilogo",
  disclaimer:
    "Inviando, il testo diventa una issue pubblica sul repository GitHub di questo sito.",
  invia: "Invia su GitHub",
  invioInCorso: "Invio in corso…",
  avanti: "Avanti",
  indietro: "Indietro",
  grazie: "Grazie per il suggerimento",
  fallback:
    "Per completare l’invio apri il link GitHub (serve un account). Il form ha già preparato titolo e testo.",
  apiOk:
    "La richiesta è stata pubblicata come issue. Puoi seguirla sul repository e nella lista qui sotto.",
  nuova: "Nuovo suggerimento",
  recenti: "Suggerimenti recenti",
  recentiLede:
    "Issue pubbliche aperte dal wizard. Lo stato (aperta/chiusa) si aggiorna su GitHub.",
  nessuna: "Ancora nessun suggerimento pubblico.",
  elencoNonDisponibile: "Elenco suggerimenti non disponibile.",
  vediTutte: "Vedi tutte su GitHub",
  erroreRete: "Errore di rete. Controlla la connessione e riprova.",
  erroreInvio: "Invio non riuscito. Riprova.",
  ticket: "Ticket registrato:",
  apertaIl: "Aperta il",
  aperta: "Aperta",
  chiusa: "Chiusa",
} as const;

const TIPI: SuggerisciTipo[] = [
  "miglioramento",
  "bug",
  "domanda",
  "nuovo_dato",
];

export function isSuggerisciTipo(v: string): v is SuggerisciTipo {
  return (TIPI as string[]).includes(v);
}

function issueTitle(payload: SuggerisciPayload): string {
  return `${SUGGERISCI_ISSUE_PREFIX} ${payload.titolo}`.slice(0, 200);
}

function issueBody(payload: SuggerisciPayload): string {
  return [
    "## Suggerimento dal minisito",
    "",
    "| Campo | Valore |",
    "| --- | --- |",
    `| Tipo | ${SUGGERISCI_TIPO_LABEL[payload.tipo]} |`,
    `| Sezione | ${payload.sezione || "—"} |`,
    `| Contatto | ${payload.contatto || "—"} |`,
    `| Pagina | ${payload.pagina || "—"} |`,
    "",
    "### Messaggio",
    "",
    payload.messaggio,
    "",
    "<details><summary>Metadati</summary>",
    "",
    "```",
    `user-agent: ${payload.userAgent || "n/d"}`,
    `quando: ${new Date().toISOString()}`,
    "```",
    "",
    "</details>",
    "",
    "_Issue creata dal form Suggerisci su cruscottocomune.it/suggerisci._",
  ].join("\n");
}

export function suggerisciGithubConfigured(): boolean {
  return githubConfigured();
}

export function buildSuggerisciIssueUrl(payload: SuggerisciPayload): string {
  return buildIssueNewUrl(issueTitle(payload), issueBody(payload));
}

export async function createSuggerisciIssue(payload: SuggerisciPayload) {
  return createGithubIssue(issueTitle(payload), issueBody(payload));
}

export async function listSuggerisciIssues(limit = 10) {
  return listGithubIssuesByPrefix(SUGGERISCI_ISSUE_PREFIX, limit);
}

export type PublicSuggerisciIssue = PublicGithubIssue;
