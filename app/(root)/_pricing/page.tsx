import PricingCardSection from "@/components/shared/PricingCardSection";
import PageHeading from "@/components/ui/PageHeading";

export default function page() {
  //Made pricing private
  return (
    <>
      <div className="px-4 py-10 md:py-20">
        <PageHeading
          subHeadingText=" Choose the perfect plan for your needs. Always know what you'll
          pay."
          headingText="Simple Transparent,Fair Pricing"
        />
      </div>

      <PricingCardSection />
      <h2></h2>
    </>
  );
}
