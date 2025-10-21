import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/so-maldives/Hero";
import ValueProposition from "@/components/so-maldives/ValueProposition";
import ImageCarousel from "@/components/so-maldives/ImageCarousel";
import Activities from "@/components/so-maldives/Activities";
import DiningExperiences from "@/components/so-maldives/DiningExperiences";
import Accommodations from "@/components/so-maldives/Accommodations";
import Inclusions from "@/components/so-maldives/Inclusions";
import Pricing from "@/components/so-maldives/Pricing";
import ContactFormSection from "@/components/so-maldives/ContactFormSection";
import FAQ from "@/components/so-maldives/FAQ";

const resortImages = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
    alt: "SO/ Maldives - Overwater villa com piscina infinita privativa ao pôr do sol"
  },
  {
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574",
    alt: "SO/ Maldives - Vista aérea do resort com vilas sobre águas cristalinas"
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
    alt: "SO/ Maldives - Interior moderno da villa com design contemporâneo"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
    alt: "SO/ Maldives - Piscina infinita privativa com vista oceânica"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
    alt: "SO/ Maldives - Experiência gastronômica à beira-mar"
  },
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
    alt: "SO/ Maldives - Spa e área de wellness"
  },
  {
    src: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=2574",
    alt: "SO/ Maldives - Atividades aquáticas e snorkeling em águas cristalinas"
  }
];

const SOMaldives = () => {
  return (
    <>
      <Helmet>
        <title>SO/ Maldives - Resort Avant-Garde de Luxo | Momentos Inesquecíveis</title>
        <meta 
          name="description" 
          content="Descubra o SO/ Maldives, resort avant-garde de luxo com 80 vilas exclusivas, 3 restaurantes assinatura e design inspirado em arte e moda. Apenas 15 minutos do aeroporto de Malé."
        />
        <meta 
          property="og:title" 
          content="SO/ Maldives - Resort Avant-Garde de Luxo nas Maldivas"
        />
        <meta 
          property="og:description" 
          content="Experiência única no SO/ Maldives com vilas sobre as águas, gastronomia levantina e pan-asiática, spa exclusivo e esportes aquáticos. Pacotes personalizados."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574" />
        <link rel="canonical" href="https://momentosinesqueciveis.com.br/ilhas-maldivas/so-maldives" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            "name": "SO/ Maldives",
            "description": "Resort avant-garde de luxo nas Maldivas com 80 vilas exclusivas, 3 restaurantes assinatura e wellness camp completo",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Emboodhoo Lagoon, Atol de Kaafu",
              "addressCountry": "MV"
            },
            "image": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574",
            "priceRange": "$$$",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Overwater Pool Villas"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "3 Restaurantes Assinatura"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "SO/ Spa & Wellness"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Esportes Aquáticos"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />
        
        <main>
          <Hero />
          <ValueProposition />
          <ImageCarousel images={resortImages} />
          <Activities />
          <DiningExperiences />
          <Accommodations />
          <Inclusions />
          <Pricing />
          <ContactFormSection />
          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SOMaldives;
