import { FontiContent } from "@/components/FontiContent";
import { clipMetaDescription } from "@/lib/meta";

export const metadata = {
  title: "Fonti",
  description: clipMetaDescription(
    "Da dove arrivano i dati del cruscotto: Cruscotto Italia (AgID), ISTAT, ISPRA, OpenStreetMap e i moduli da attivare per il proprio comune.",
  ),
};

export default function Page() {
  return <FontiContent />;
}
