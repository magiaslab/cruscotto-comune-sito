import { SuggerisciContent } from "@/components/SuggerisciContent";
import { clipMetaDescription } from "@/lib/meta";

export const metadata = {
  title: "Suggerisci",
  description: clipMetaDescription(
    "Wizard in quattro passi per proporre miglioramenti al minisito Cruscotto Comune. I suggerimenti diventano issue pubbliche su GitHub.",
  ),
};

export default function Page() {
  return <SuggerisciContent />;
}
