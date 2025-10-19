import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, description, features, popular }: PricingCardProps) => {
  return (
    <Card className={`relative ${popular ? "border-primary shadow-glow" : ""}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">{description}</CardDescription>
        <div className="text-4xl font-bold text-primary">{price}</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdxWa_-aRoqwwQq-hvl-vgaPsF5F_NBL4jzdLC981Zwb63j2g/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button 
            variant={popular ? "gradient" : "outline"} 
            className="w-full"
            size="lg"
          >
            Book Now
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
