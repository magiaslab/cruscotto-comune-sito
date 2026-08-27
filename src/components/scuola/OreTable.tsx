import type { FormatoOrario } from "@/lib/scuola";

export function OreTable({
  formati,
  nota,
}: {
  formati: FormatoOrario[];
  nota?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <caption className="mb-3 text-left text-sm text-[var(--pa-muted)]">
          Formati orari del percorso: ore, che cosa si fa, che cosa resta alla
          classe.
        </caption>
        <thead>
          <tr className="border-b border-[var(--pa-border)]">
            <th scope="col" className="py-2 pr-3 font-semibold">
              Formato
            </th>
            <th scope="col" className="py-2 pr-3 font-semibold">
              Ore
            </th>
            <th scope="col" className="py-2 pr-3 font-semibold">
              Cosa si fa
            </th>
            <th scope="col" className="py-2 font-semibold">
              Cosa resta alla classe
            </th>
          </tr>
        </thead>
        <tbody>
          {formati.map((f) => (
            <tr key={f.nome} className="border-b border-[var(--pa-border)]">
              <th scope="row" className="py-2 pr-3 font-semibold align-top">
                {f.nome}
              </th>
              <td className="py-2 pr-3 align-top whitespace-nowrap">{f.ore}</td>
              <td className="py-2 pr-3 align-top">{f.contenuto}</td>
              <td className="py-2 align-top">{f.risultato}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {nota ? (
        <p className="mb-0 mt-3 text-sm text-[var(--pa-muted)]">{nota}</p>
      ) : null}
    </div>
  );
}
