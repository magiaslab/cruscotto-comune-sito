import { MenzioniContent } from "@/components/MenzioniContent";
import { clipMetaDescription } from "@/lib/meta";

export const metadata = {
  title: "Menzioni",
  description: clipMetaDescription(
    "Come citare Cruscotto Comune nei fork: template vuoto su GitHub, primo esemplare San Vincenzo, credito a Francesco Piero Paolicelli (Piersoft) per Cruscotto Italia.",
  ),
};

export default function Page() {
  return <MenzioniContent />;
}
