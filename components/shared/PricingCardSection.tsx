import { FreeTier, PremiumTier } from "@/constants";
import PricingCard from "../ui/PricingCard";

function PricingCardSection() {
  return (
    <div className="w-full mt-12 flex justify-center gap-12 items-center flex-col sm:flex-col md:flex-row">
      <PricingCard
        title="Free tier"
        description="Free trial to try Pluto AI"
        pricing="Free"
        content={FreeTier}
      />
      <PricingCard
        title="Premium tier"
        description="All services and features included"
        pricing="25$/month"
        content={PremiumTier}
      />
    </div>
  );
}

export default PricingCardSection;
