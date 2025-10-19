import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          GrayFX
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Professional photography & graphic design services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdxWa_-aRoqwwQq-hvl-vgaPsF5F_NBL4jzdLC981Zwb63j2g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
              Create Booking
            </Button>
          </a>
          <a
            href="https://grayflickz.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
              View Photos
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
