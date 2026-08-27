export const SITE = {
  name: "Cruscotto Comune",
  tagline: "Dashboard open data per qualsiasi comune italiano",
  url: "https://www.cruscottocomune.it",
  github: "https://github.com/magiaslab/cruscotto-comune",
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
/** Sul minisito la “dashboard” è l’esemplare in produzione, non un cruscotto vuoto. */
export function getDashboardPath() {
  return SITE.demo;
}

export const AUTHOR = {
  name: "Alessandro Cipriani",
  email: "cipriani.alessandro@gmail.com",
};

export function isSostieniEnabled() {
  return true;
}
