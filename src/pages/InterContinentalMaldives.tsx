import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/maldives/Hero";
import ValueProposition from "@/components/maldives/ValueProposition";
import ImageCarousel from "@/components/maldives/ImageCarousel";
import Activities from "@/components/maldives/Activities";
import DiningExperiences from "@/components/maldives/DiningExperiences";
import Accommodations from "@/components/maldives/Accommodations";
import Inclusions from "@/components/maldives/Inclusions";
import Pricing from "@/components/maldives/Pricing";
import ContactFormSection from "@/components/maldives/ContactFormSection";
import FAQ from "@/components/maldives/FAQ";

// Import resort images
import overwaterVillas from "@/assets/maldives-experiences/overwater-villas.jpg";
import luxuryBathroom from "@/assets/maldives-experiences/luxury-bathroom.jpg";
import spaTreatment from "@/assets/maldives-experiences/spa-treatment.jpg";
import diningExperience from "@/assets/maldives-experiences/dining-experience.jpg";
import snorkeling from "@/assets/maldives-experiences/snorkeling.jpg";
import beachWedding from "@/assets/maldives-experiences/beach-wedding.jpg";
import romanticDinner from "@/assets/maldives-experiences/romantic-dinner.jpg";

const resortImages = [
  { src: overwaterVillas, alt: "Villas sobre água com design luxuoso e piscina privativa" },
  { src: luxuryBathroom, alt: "Banheiro em planta aberta com banheira de imersão e vista para o oceano" },
  { src: spaTreatment, alt: "Tratamentos de spa relaxantes no AVI Spa overwater" },
  { src: diningExperience, alt: "Experiências gastronômicas exclusivas em ambientes únicos" },
  { src: snorkeling, alt: "Snorkeling em recifes de coral vibrantes com vida marinha abundante" },
  { src: beachWedding, alt: "Cerimônias românticas na praia com pôr do sol tropical" },
  { src: romanticDinner, alt: "Jantares românticos à beira-mar sob as estrelas" },
];

const InterContinentalMaldives = () => {
  return (
    <>
      <Helmet>
        <title>InterContinental Maldives Maamunagau Resort - Pacote Completo | Follow Me Viagens</title>
        <meta name="description" content="Resort de luxo no Atol de Raa com villas overwater, 5 restaurantes gourmet, spa premiado e lagoa privativa. Pacote all-inclusive com mordomo 24h e transfer de hidroavião incluído." />
        <meta property="og:title" content="InterContinental Maldives - Paraíso Exclusivo | Follow Me Viagens" />
        <meta property="og:description" content="Villas elegantes sobre águas cristalinas, gastronomia gourmet, spa premiado e experiências únicas nas Maldivas. Pacote completo com café da manhã, chá da tarde e aperitivos." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/ilhas-maldivas/intercontinental" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            "name": "InterContinental Maldives Maamunagau Resort",
            "description": "Resort de luxo exclusivo no Atol de Raa com villas overwater, restaurantes gourmet e spa premiado",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atol de Raa",
              "addressCountry": "Maldivas"
            },
            "starRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Spa" },
              { "@type": "LocationFeatureSpecification", "name": "Restaurantes Gourmet" },
              { "@type": "LocationFeatureSpecification", "name": "Piscina Privativa" },
              { "@type": "LocationFeatureSpecification", "name": "Serviço de Mordomo 24h" }
            ],
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
        <ImageCarousel images={resortImages} />
        <Activities />
        <DiningExperiences />
        <Accommodations />
        <Inclusions />
        <Pricing />
        <ContactFormSection />
        <FAQ />

        <Footer />
      </main>
    </>
  );
};

export default InterContinentalMaldives;
