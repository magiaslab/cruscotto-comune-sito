import { SuggerisciContent } from "@/components/SuggerisciContent";
import { clipMetaDescription } from "@/lib/meta";

export const metadata = {
  title: "Suggerisci",
  description: clipMetaDescription(
    "Un breve percorso per proporre miglioramenti a Cruscotto Comune. I suggerimenti diventano issue pubbliche su GitHub.",
  ),
};

export default function Page() {
  return <SuggerisciContent />;
}
