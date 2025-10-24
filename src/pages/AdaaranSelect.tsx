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

// Resort images
import overwaterVillasAerial from "@/assets/adaaran-select/overwater-villas-aerial.jpg";
import beachVillasAerial from "@/assets/adaaran-select/beach-villas-aerial.jpg";
import buffetRestaurant from "@/assets/adaaran-select/buffet-restaurant.jpg";
import sunsetVillaInterior from "@/assets/adaaran-select/sunset-villa-interior.jpg";
import divingCoralReef from "@/assets/adaaran-select/diving-coral-reef.jpg";
import villaBathroomOceanView from "@/assets/adaaran-select/villa-bathroom-ocean-view.jpg";
import mainRestaurantInterior from "@/assets/adaaran-select/main-restaurant-interior.jpg";
import sunsetWaterVillaRoom from "@/assets/adaaran-select/sunset-water-villa-room.jpg";
import resortAerialPool from "@/assets/adaaran-select/resort-aerial-pool.jpg";
import islandAerialView from "@/assets/adaaran-select/island-aerial-view.jpg";

const resortImages = [
  {
    src: overwaterVillasAerial,
    alt: "Adaaran Select Hudhuranfushi - Vista aérea das ocean villas sobre águas cristalinas das Maldivas"
  },
  {
    src: beachVillasAerial,
    alt: "Beach villas do Adaaran Select com acesso direto à praia de areia branca e vegetação tropical"
  },
  {
    src: buffetRestaurant,
    alt: "Restaurante buffet all inclusive do Adaaran Select com variedade gastronômica internacional"
  },
  {
    src: sunsetVillaInterior,
    alt: "Interior elegante da Sunset Water Villa com cama king size e vista panorâmica para o oceano"
  },
  {
    src: divingCoralReef,
    alt: "Mergulho no house reef do Adaaran Select com corais coloridos e vida marinha abundante"
  },
  {
    src: villaBathroomOceanView,
    alt: "Banheiro luxuoso das water villas com banheira e vista direta para o mar das Maldivas"
  },
  {
    src: mainRestaurantInterior,
    alt: "Restaurante principal do resort com buffet variado e ambiente elegante em madeira"
  },
  {
    src: sunsetWaterVillaRoom,
    alt: "Quarto espaçoso da water villa com decoração moderna e acesso direto ao mar"
  },
  {
    src: resortAerialPool,
    alt: "Vista aérea do resort Adaaran Select mostrando piscina infinity, jardins tropicais e house reef"
  },
  {
    src: islandAerialView,
    alt: "Ilha Hudhuranfushi vista do alto mostrando lagoa turquesa, recifes de coral e localização privilegiada"
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
