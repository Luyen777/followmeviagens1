import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/south-africa/Hero";
import ValueProposition from "@/components/south-africa/ValueProposition";
import PackageHighlights from "@/components/south-africa/PackageHighlights";
import DetailedItinerary from "@/components/south-africa/DetailedItinerary";
import HotelShowcase from "@/components/south-africa/HotelShowcase";
import Inclusions from "@/components/south-africa/Inclusions";
import SocialProof from "@/components/south-africa/SocialProof";
import ContactFormSection from "@/components/south-africa/ContactFormSection";
import FAQ from "@/components/south-africa/FAQ";

const AfricaDoSul = () => {
  return (
    <>
      <Helmet>
        <title>África do Sul - Safari Kruger e Cape Town 7 Noites | Follow Me Viagens</title>
        <meta name="description" content="Pacote completo África do Sul com 7 noites: Safari Big Five no Kruger Park e Cape Town. Lodges 5 estrelas, vinícolas premiadas e suporte 24h." />
        <meta property="og:title" content="África do Sul - Safari e Cape Town 7 Noites | Follow Me Viagens" />
        <meta property="og:description" content="Aventura selvagem no Kruger Park e charme urbano em Cape Town. Big Five, vinícolas, Table Mountain com hotéis premium." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/africa-do-sul" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": "Pacote África do Sul - Safari e Cape Town 7 Noites",
            "description": "Safari no Kruger Park com Big Five e Cape Town com vinícolas e praias em 7 noites de pura aventura",
            "provider": {
              "@type": "TravelAgency",
              "name": "Follow Me Viagens"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />
        
        <Hero />
        <ValueProposition />
        <PackageHighlights />
        <DetailedItinerary />
        <HotelShowcase />
        <Inclusions />
        <SocialProof />
        <ContactFormSection />
        <FAQ />

        <Footer />
      </main>
    </>
  );
};

export default AfricaDoSul;
