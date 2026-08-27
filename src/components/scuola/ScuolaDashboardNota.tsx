import { DASHBOARD_TEMPLATE } from "@/lib/scuola";

export function ScuolaDashboardNota() {
  return (
    <p className="guide-callout" role="note">
      <strong>{DASHBOARD_TEMPLATE.titolo}.</strong> {DASHBOARD_TEMPLATE.testo}{" "}
      <a href={DASHBOARD_TEMPLATE.github} rel="noopener noreferrer">
        Apri il template su GitHub
      </a>
      .
    </p>
  );
}
