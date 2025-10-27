import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedResorts from "@/components/FeaturedResorts";
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import ContactFormSection from "@/components/ContactFormSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { createOrganizationSchema } from "@/lib/structuredData";

const Index = () => {
  const organizationSchema = createOrganizationSchema({
    name: "Follow Me Viagens",
    description: "Agência de viagens especializada em destinos de luxo e experiências personalizadas para as Maldivas, Dubai, Índia, África do Sul e mais.",
    url: "https://followmeviagens.com",
    logo: "https://followmeviagens.com/logo.png",
    email: "contato@followmeviagens.com",
    socialMedia: {
      instagram: "https://www.instagram.com/followmeviagens",
      whatsapp: "https://wa.me/5511999999999"
    }
  });

  return (
    <>
      <SEOHead
        title="Follow Me Viagens | Pacotes de Luxo para Maldivas, Dubai, Índia e mais"
        description="Agência especializada em viagens de luxo e experiências personalizadas. Pacotes exclusivos para Maldivas, Dubai, Índia, África do Sul, Seychelles e destinos paradisíacos."
        canonicalUrl="/"
        ogImage="/logo.png"
        keywords={["viagens de luxo", "maldivas", "dubai", "pacotes personalizados", "lua de mel", "resorts de luxo"]}
        structuredData={organizationSchema}
      />
      
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <FeaturedResorts />
        <TrustSignals />
        <Testimonials />
        <ContactFormSection />
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

export default Index;
