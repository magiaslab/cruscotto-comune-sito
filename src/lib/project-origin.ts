/**
 * Crediti del primo cruscotto (San Vincenzo) e del template da forkare.
 * Nei fork NON vanno modificati: restano in Attribuzioni e footer.
 * Il maintainer del fork si indica in `config/comune.json` → `fork`.
 */
import { SITE } from "@/lib/product";

export const PROJECT_ORIGIN = {
  author: {
    name: "Alessandro Cipriani",
    email: "cipriani.alessandro@gmail.com",
  },
  /** Template vuoto da forkare. Non è il repo di San Vincenzo. */
  github_repo_url: SITE.github,
  /** Primo cruscotto già esistente (sito in produzione). */
  site_url: SITE.demo,
  comune_demo: "San Vincenzo" as const,
  provincia_demo: "LI" as const,
  vercel_deploy_url:
    `https://vercel.com/new/clone?repository-url=${SITE.github}` as const,
  docs_riuso_path: "/blob/main/docs/riuso-fork.md" as const,
  config_example_path: "/blob/main/config/comune.example.json" as const,
  env_example_path: "/blob/main/.env.example" as const,
} as const;

export const PROJECT_ORIGIN_FORK_URL = `${PROJECT_ORIGIN.github_repo_url}/fork`;
export const PROJECT_ORIGIN_DOCS_RIUSO_URL = `${PROJECT_ORIGIN.github_repo_url}${PROJECT_ORIGIN.docs_riuso_path}`;
export const PROJECT_ORIGIN_CONFIG_EXAMPLE_URL = `${PROJECT_ORIGIN.github_repo_url}${PROJECT_ORIGIN.config_example_path}`;
export const PROJECT_ORIGIN_ENV_EXAMPLE_URL = `${PROJECT_ORIGIN.github_repo_url}${PROJECT_ORIGIN.env_example_path}`;
