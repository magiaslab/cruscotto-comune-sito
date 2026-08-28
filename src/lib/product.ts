export const SITE = {
  name: "Cruscotto Comune",
  /** Sottotitolo in testata: cosa può fare chi arriva sul sito. */
  tagline: "I cruscotti dati comunali aperti – pronti da usare e facili da replicare",
  url: "https://www.cruscottocomune.it",
  /** Template da cui partire per un nuovo comune. */
  github: "https://github.com/magiaslab/cruscotto-comune",
  /** Repo di questo sito: issue, catalogo comuni, documentazione. */
  sitoGithub: "https://github.com/magiaslab/cruscotto-comune-sito",
  /** Primo cruscotto già esistente. Non è il codice del template. */
  demo: "https://www.cruscottosanvincenzo.it",
  demoLabel: "Cruscotto San Vincenzo",
  bmc: "https://www.buymeacoffee.com/acipriani",
} as const;

export function getProductName() {
  return SITE.name;
}
export function getProductTagline() {
  return SITE.tagline;
}
export function getTemplateGithubUrl() {
  return SITE.github;
}
export function getSitoGithubUrl() {
  return SITE.sitoGithub;
}
export function getTemplateForkUrl() {
  return `${SITE.github}/fork`;
}
export function getVercelDeployUrl() {
  return `https://vercel.com/new/clone?repository-url=${encodeURIComponent(SITE.github)}`;
}
export function getDemoUrl() {
  return SITE.demo;
}
export function getDemoLabel() {
  return SITE.demoLabel;
}
/**
 * Dashboard nei prompt (scuola, riuso): il template, non questo sito e non San Vincenzo.
 */
export function getDashboardPath() {
  return SITE.github;
}

export const AUTHOR = {
  name: "Alessandro Cipriani",
  email: "cipriani.alessandro@gmail.com",
};

export function isSostieniEnabled() {
  return true;
}
