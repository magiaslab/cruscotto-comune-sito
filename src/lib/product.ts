export const SITE = {
  name: "Cruscotto Comune",
  /** Ruolo di QUESTO minisito, non della dashboard. */
  tagline: "Strumento di divulgazione e hub dei progetti",
  url: "https://www.cruscottocomune.it",
  /** Template vuoto da forkare: è questa la «dashboard» dei prompt. */
  github: "https://github.com/magiaslab/cruscotto-comune",
  /** Primo cruscotto già esistente. Non è il codice da forkare. */
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
 * Dashboard dei prompt (scuola, riuso, sandbox): il template vuoto da forkare.
 * Non è questo minisito e non è San Vincenzo.
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
