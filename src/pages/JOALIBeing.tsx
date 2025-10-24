import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/joali-being/Hero";
import ValueProposition from "@/components/joali-being/ValueProposition";
import ImageCarousel from "@/components/joali-being/ImageCarousel";
import Activities from "@/components/joali-being/Activities";
import DiningExperiences from "@/components/joali-being/DiningExperiences";
import Accommodations from "@/components/joali-being/Accommodations";
import Inclusions from "@/components/joali-being/Inclusions";
import Pricing from "@/components/joali-being/Pricing";
import ContactFormSection from "@/components/joali-being/ContactFormSection";
import FAQ from "@/components/joali-being/FAQ";

const resortImages = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
    alt: "JOALI BEING - Villa sobre a água com piscina infinita privativa"
  },
  {
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574",
    alt: "JOALI BEING - Vista aérea do resort com arquitetura biophilic"
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
    alt: "JOALI BEING - Interior contemporâneo integrado à natureza"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
    alt: "JOALI BEING - Piscina privativa com vista oceânica"
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670",
    alt: "JOALI BEING - Areka Spa e experiências wellness"
  },
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
    alt: "JOALI BEING - Área de hidroterapia e wellness"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
    alt: "JOALI BEING - Experiência gastronômica earth to table"
  }
];

const JOALIBeing = () => {
  return (
    <>
      <Helmet>
        <title>JOALI BEING Maldivas - Resort 7 Estrelas Wellness | Follow Me Viagens</title>
        <meta name="description" content="JOALI BEING no Atol Raa: resort 7 estrelas ultraexclusivo focado em bem-estar integral. Villas com piscina privativa, spa Areka, experiências wellness transformadoras e gastronomia earth to table." />
        <meta property="og:title" content="JOALI BEING Maldivas - Resort 7 Estrelas Wellness | Follow Me" />
        <meta property="og:description" content="Bem-estar integral em resort ultraexclusivo com 68 villas, serviço de mordomo Jadugar, Areka Spa e arquitetura biophilic." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/ilhas-maldivas/joali-being" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />
        
        <Hero />
        <ValueProposition />
        <ImageCarousel images={resortImages} />
        <Accommodations />
        <Inclusions />
        <Activities />
        <DiningExperiences />
        <Pricing />
        <FAQ />
        <ContactFormSection />
        
        <Footer />
      </main>
    </>
  );
};

export default JOALIBeing;
