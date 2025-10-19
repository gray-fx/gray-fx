import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PhotoShowcase from "@/components/PhotoShowcase";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PhotoShowcase />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Index;
