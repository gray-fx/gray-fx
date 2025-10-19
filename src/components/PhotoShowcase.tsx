import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const photos = [
  {
    url: "https://cdn.myportfolio.com/85fee65b-7078-4b6f-bf96-e2849456b7f5/f0b2b4d9-6061-48e8-b5e2-70ccd63b9917_rw_1920.jpg?h=45d664e2c607b0783dcd80af11b80132",
    alt: "Photography showcase 1"
  },
  {
    url: "https://cdn.myportfolio.com/85fee65b-7078-4b6f-bf96-e2849456b7f5/f9309628-83a7-416c-83e8-548ec59549af_rw_1920.jpg?h=2521453d29679d6c39af9a16583d6b93",
    alt: "Photography showcase 2"
  },
  {
    url: "https://cdn.myportfolio.com/85fee65b-7078-4b6f-bf96-e2849456b7f5/1d2ac207-d521-47b6-876c-6e9abc55a7ce_rw_1920.jpg?h=cb97bed75e56b73efcc44d3ecc0bd755",
    alt: "Photography showcase 3"
  },
  {
    url: "https://cdn.myportfolio.com/85fee65b-7078-4b6f-bf96-e2849456b7f5/8fbfb677-cd68-46bf-b850-6ce807ae6457_rw_1920.jpg?h=84b5bda85c80fa564450b118eae084dc",
    alt: "Photography showcase 4"
  },
  {
    url: "https://cdn.myportfolio.com/85fee65b-7078-4b6f-bf96-e2849456b7f5/85abc403-686e-4161-a13a-fa19e897d3f6_rw_1920.jpg?h=b8aa6f343673dd5b30843d4c841d6dab",
    alt: "Photography showcase 5"
  }
];

const PhotoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Visual Highlights
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore a collection of moments captured through my lens showcasing emotion, energy, and elegance. Each frame tells a story, frozen in time with precision and artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoShowcase;
