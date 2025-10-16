import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import IndiaHero from "@/components/india/IndiaHero";
import ValueProposition from "@/components/india/ValueProposition";
import PackageHighlights from "@/components/india/PackageHighlights";
import DetailedItinerary from "@/components/india/DetailedItinerary";
import HotelShowcase from "@/components/india/HotelShowcase";
import Inclusions from "@/components/india/Inclusions";
import SocialProof from "@/components/india/SocialProof";
import ContactFormSection from "@/components/india/ContactFormSection";
import FAQ from "@/components/india/FAQ";

const India = () => {
  return (
    <>
      <Helmet>
        <title>Índia - Triângulo Dourado 7 Noites | Follow Me Viagens</title>
        <meta name="description" content="Pacote completo para Índia com 7 noites incluindo Delhi, Jaipur e Agra. Hotéis 5 e 6 estrelas, guias em português, Taj Mahal e suporte 24h." />
        <meta property="og:title" content="Índia - Triângulo Dourado 7 Noites | Follow Me Viagens" />
        <meta property="og:description" content="Explore Delhi, Jaipur e Agra com especialistas locais. Patrimônios históricos, cultura espiritual e culinária autêntica com todo conforto." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/india" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": "Pacote Índia - Triângulo Dourado 7 Noites",
            "description": "Viagem completa de 7 noites pelo Triângulo Dourado indiano com hotéis premium e guias especializados",
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
        
        <IndiaHero />
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

export default India;
