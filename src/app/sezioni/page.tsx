import { existsSync } from "node:fs";
import { join } from "node:path";
import { SezioniContent } from "@/components/SezioniContent";
import { clipMetaDescription } from "@/lib/meta";
import { SEZIONI_CRUSCOTTO, SEZIONI_LEDE } from "@/lib/sezioni";

export const metadata = {
  title: "Sezioni del cruscotto",
  description: clipMetaDescription(SEZIONI_LEDE),
};

function screenshotPresenti(): Record<string, boolean> {
  const dir = join(process.cwd(), "public", "sezioni");
  const map: Record<string, boolean> = {};
  for (const sezione of SEZIONI_CRUSCOTTO) {
    map[sezione.id] = existsSync(join(dir, `${sezione.id}.jpg`));
  }
  return map;
}

export default function Page() {
  return <SezioniContent screenshots={screenshotPresenti()} />;
}
