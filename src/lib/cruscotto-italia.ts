/**
 * Cruscotto Italia (AgID) e credito a Piersoft.
 * Testo allineato alla pagina Attribuzioni del cruscotto originale.
 */

export const CRUSCOTTO_ITALIA = {
  url: "https://cruscotto-italia.dati.gov.it/",
  github: "https://github.com/AgID/cruscotto-italia",
  licenza: "CC-BY 4.0 (ove non diversamente indicato)",
} as const;

export const PIERSOFT = {
  nome: "Francesco Piero Paolicelli",
  alias: "Piersoft",
  github: "https://github.com/piersoft",
} as const;

export function piersoftNomeCitato(): string {
  return `${PIERSOFT.nome} (${PIERSOFT.alias})`;
}
