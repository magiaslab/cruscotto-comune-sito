import { LandingDoc } from "@/components/LandingDoc";
import { SITE } from "@/lib/product";

export const metadata = { title: "Sostieni" };

export default function Page() {
  return (
    <LandingDoc
      kicker="Sostieni"
      title="Un caffè per tenere online il progetto"
      lede="Hosting, compute e tempo sono a carico di Alessandro Cipriani. I fork usano il proprio slug Buy Me a Coffee, non questo."
    >
      <p>
        <a href={SITE.bmc} target="_blank" rel="noopener noreferrer">
          Buy Me a Coffee — acipriani
        </a>
      </p>
    </LandingDoc>
  );
}
