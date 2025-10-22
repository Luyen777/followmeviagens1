import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/adaaran-select/Hero";
import ValueProposition from "@/components/adaaran-select/ValueProposition";
import ImageCarousel from "@/components/adaaran-select/ImageCarousel";
import Activities from "@/components/adaaran-select/Activities";
import DiningExperiences from "@/components/adaaran-select/DiningExperiences";
import Accommodations from "@/components/adaaran-select/Accommodations";
import Inclusions from "@/components/adaaran-select/Inclusions";
import Pricing from "@/components/adaaran-select/Pricing";
import ContactFormSection from "@/components/adaaran-select/ContactFormSection";
import FAQ from "@/components/adaaran-select/FAQ";

// Temporary placeholder images - will be replaced with actual resort images
const resortImages = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
    alt: "Adaaran Select Hudhuranfushi - Vista aérea das ocean villas sobre águas cristalinas"
  },
  {
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574",
    alt: "Adaaran Select - Beach villas com acesso direto à praia de areia branca"
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
    alt: "Interior moderno e confortável das villas recém-renovadas"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
    alt: "Piscina principal do resort com área para adultos e crianças"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
    alt: "Sunset Restaurant - experiências gastronômicas sobre a água"
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
    alt: "Snorkeling no house reef com vida marinha abundante"
  },
  {
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2626",
    alt: "Surf no famoso spot Lohis com ondas perfeitas"
  }
];

const AdaaranSelect = () => {
  return (
    <>
      <Helmet>
        <title>Adaaran Select Hudhuranfushi - Resort All Inclusive 4★ | Follow Me Viagens</title>
        <meta 
          name="description" 
          content="Resort 4 estrelas all inclusive no North Malé Atoll, a 30 minutos de Malé. Ideal para casais, famílias e surfistas com acesso ao Lohis. Melhor custo-benefício das Maldivas com snorkeling, kids club e esportes gratuitos." 
        />
        <meta 
          property="og:title" 
          content="Adaaran Select Hudhuranfushi - All Inclusive Premium nas Maldivas"
        />
        <meta 
          property="og:description" 
          content="Experiência all inclusive completa com ocean villas, surf no Lohis, snorkeling excepcional e kids club gratuito. Transfer de 30 minutos do aeroporto de Malé."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670" />
        <link rel="canonical" href="https://followmeviagens.com/ilhas-maldivas/adaaran-select" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            "name": "Adaaran Select Hudhuranfushi",
            "description": "Resort 4 estrelas all inclusive no North Malé Atoll com ocean villas, beach villas, surf spot Lohis e excelente house reef para snorkeling",
            "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lhohifushi Island, North Malé Atoll",
              "addressCountry": "MV"
            },
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4"
            },
            "priceRange": "$$",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "All Inclusive Premium"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Ocean Villas sobre a água"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Surf spot Lohis"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "House reef para snorkeling"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Kids Club gratuito"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Spa Mandara"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "5 Restaurantes e Bares"
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "4.2883",
              "longitude": "73.4772"
            }
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

export default AdaaranSelect;
