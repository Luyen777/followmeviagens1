import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedResorts from "@/components/FeaturedResorts";
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedResorts />
      <TrustSignals />
      <Testimonials />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
