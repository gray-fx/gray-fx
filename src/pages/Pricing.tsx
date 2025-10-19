import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

const pricingData = [
  {
    title: "Event Photography",
    price: "$150",
    description: "Perfect for school events, sports, and performances",
    features: [
      "2-3 hours of coverage",
      "50+ edited photos",
      "Digital delivery within 5 days",
      "Personal usage rights",
      "Online gallery access",
    ],
  },
  {
    title: "Portrait Session",
    price: "$100",
    description: "Individual or group portrait sessions",
    popular: true,
    features: [
      "1 hour session",
      "30+ edited photos",
      "Digital delivery within 3 days",
      "Choice of location",
      "Unlimited outfit changes",
      "Retouching included",
    ],
  },
  {
    title: "Graphic Design",
    price: "$75",
    description: "Custom graphics for social media, flyers, and more",
    features: [
      "Custom design work",
      "3 revision rounds",
      "High-resolution files",
      "Source files included",
      "Delivery within 5 days",
    ],
  },
  {
    title: "Premium Package",
    price: "$250",
    description: "Complete coverage for your special occasion",
    features: [
      "Full day coverage (4+ hours)",
      "100+ edited photos",
      "Same-day sneak peeks",
      "Drone photography (if applicable)",
      "Priority editing",
      "Commercial usage rights",
      "Printed photo album option",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your photography or graphic design needs. All packages include professional editing and digital delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {pricingData.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
            <p className="text-muted-foreground mb-4">
              Free photography at St. Mark's events that I attend! Check the booking form for upcoming free event coverage opportunities.
            </p>
            <p className="text-sm text-muted-foreground">
              Custom packages available upon request. Contact me for quotes on larger projects or recurring work.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
