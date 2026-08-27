import { ProgettoContent } from "@/components/ProgettoContent";
import { fraseCruscottiEsistenti } from "@/lib/cruscotti-rete";
import { clipMetaDescription } from "@/lib/meta";

export const metadata = {
  title: "Progetto",
  description: clipMetaDescription(
    `Qui trovi perché esiste Cruscotto Comune, come è nato da San Vincenzo e come crearne uno per un altro comune. Oggi ${fraseCruscottiEsistenti()}.`,
  ),
};

export default function Page() {
  return <ProgettoContent />;
}
