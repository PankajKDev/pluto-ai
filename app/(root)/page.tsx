import { FeaturesSectionDemo } from "@/components/shared/FeatureCards";
import { HeroSectionOne } from "@/components/shared/Hero";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSectionOne />
      <FeaturesSectionDemo />
      <Testimonials />
    </>
  );
}
