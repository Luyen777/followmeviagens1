import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import IndiaHero from "@/components/india/IndiaHero";
import ValueProposition from "@/components/india/ValueProposition";
import PackageHighlights from "@/components/india/PackageHighlights";
import DetailedItinerary from "@/components/india/DetailedItinerary";
import SocialProof from "@/components/india/SocialProof";
import ContactFormSection from "@/components/india/ContactFormSection";
import FAQ from "@/components/india/FAQ";

const India = () => {
  return (
    <>
      <Helmet>
        <title>Pacotes para Índia - Triângulo Dourado | Follow Me Viagens</title>
        <meta name="description" content="Descubra a Índia com pacote completo de 10 dias incluindo Delhi, Agra, Jaipur e Udaipur. Hotéis 5 estrelas, guias especializados e experiências únicas." />
        <meta property="og:title" content="Pacotes para Índia - Triângulo Dourado | Follow Me Viagens" />
        <meta property="og:description" content="Viagem completa pela Índia com Taj Mahal, palácios, templos e cultura milenar. Tudo incluído com conforto e segurança." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/india" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />
        
        <IndiaHero />
        <ValueProposition />
        <PackageHighlights />
        <DetailedItinerary />
        <SocialProof />
        <ContactFormSection />
        <FAQ />

        <Footer />
      </main>
    </>
  );
};

export default India;
