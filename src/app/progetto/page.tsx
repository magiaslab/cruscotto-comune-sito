import { ProgettoContent } from "@/components/ProgettoContent";
import { fraseCruscottiEsistenti } from "@/lib/cruscotti-rete";
import { clipMetaDescription } from "@/lib/meta";

export const metadata = {
  title: "Progetto",
  description: clipMetaDescription(
    `Minisito di divulgazione e hub dei progetti. Il template vuoto da forkare è su GitHub. Oggi ${fraseCruscottiEsistenti()}.`,
  ),
};

export default function Page() {
  return <ProgettoContent />;
}
