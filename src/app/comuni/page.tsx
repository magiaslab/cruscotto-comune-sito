import { ComuniContent } from "@/components/ComuniContent";
import { fraseCruscottiEsistenti } from "@/lib/cruscotti-rete";
import { clipMetaDescription } from "@/lib/meta";

export const metadata = {
  title: "Comuni",
  description: clipMetaDescription(
    `Mappa e elenco: oggi ${fraseCruscottiEsistenti()}. Ogni comune ha il suo sito, con i dati del proprio territorio.`,
  ),
};

export default function Page() {
  return <ComuniContent />;
}
