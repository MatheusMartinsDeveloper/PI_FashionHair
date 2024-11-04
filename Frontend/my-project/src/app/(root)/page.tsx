import SectionHero from "../components/Home/SectionHero";
import SectionPromotions from "../components/Home/SectionPromotions";
import SectionBenefits from "../components/Home/SectionBenefits";

export default function Home() {
  return (
    <main className="w-full">
      <SectionHero />
      <SectionPromotions />
      <SectionBenefits />
    </main>
  );
}