import { LandingDoc } from "@/components/LandingDoc";
import {
  getTemplateForkUrl,
  getTemplateGithubUrl,
  getVercelDeployUrl,
} from "@/lib/product";

export const metadata = { title: "Riusa / fork" };

export default function Page() {
  const github = getTemplateGithubUrl();
  return (
    <LandingDoc
      kicker="Riuso"
      title="Fork, Vercel, identità"
      lede="Tre passi per un cruscotto comunale. Il codice da forkare è il template, non questo minisito e non San Vincenzo."
    >
      <ol>
        <li>
          <a href={getTemplateForkUrl()}>Fork su GitHub</a> di{" "}
          <code>{github.replace("https://", "")}</code> (pulsante Fork, così
          resta <code>upstream</code>).
        </li>
        <li>
          Import su Vercel (
          <a href={getVercelDeployUrl()}>Deploy Button</a>
          ). Nessuna env obbligatoria.
        </li>
        <li>
          Copia <code>config/comune.example.json</code>, compila ISTAT, geo,
          stemma, <code>fork.*</code>. Smoke: <code>/api/kpi</code>.
        </li>
      </ol>
      <p>
        Guida completa nel template:{" "}
        <a href={`${github}/blob/main/docs/riuso-fork.md`}>docs/riuso-fork.md</a>
        . Aggiornamenti:{" "}
        <a href={`${github}/blob/main/docs/aggiornamenti-upstream.md`}>
          docs/aggiornamenti-upstream.md
        </a>
        .
      </p>
    </LandingDoc>
  );
}
