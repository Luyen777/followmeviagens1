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

const resortImages = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/6322740.jpg?k=0620ef260bc353798fd53368b292da9ab9301934666fa4fe653e87032b88d0b9&o=",
    alt: "Adaaran Select Hudhuranfushi - Vista aérea do resort e ocean villas"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/637868082.jpg?k=0a09b1589fb20280bc6fd59df9db2f0b33937ffc5bc45b4733d44089f0dd6d85&o=",
    alt: "Praia paradisíaca com águas cristalinas turquesa"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/637869866.jpg?k=e98cd852e4559ab92716e9fe807bed20560e188f83089efcef24898a35ba4639&o=",
    alt: "Ocean villas sobre a água com deck privativo"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/455034356.jpg?k=7f00321d1399493f6b612672549604731cd74cc6e76559946966552d72eebc7d&o=",
    alt: "Interior luxuoso da villa com cama king size"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/167942497.jpg?k=2ae26e7d9f0260758f3401f2825d43f6f932fd6c36a40848e6a5365b0e73fca5&o=",
    alt: "Restaurante principal com buffet all inclusive"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110228883.jpg?k=5e30f016d1b228b6893668710e8751260cbee8fa93ca4da8ab4f637a302915f7&o=",
    alt: "Piscina infinity com vista para o oceano"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/101361066.jpg?k=948495513a67f161d073e88a9f5a58f2746df50c7cd52b80de23d40b54567a09&o=",
    alt: "Bar na praia com espreguiçadeiras e guarda-sóis"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/70267725.jpg?k=96b6eb7e5bb17d34b6f423ed2b8e189010da9f9c1c6ce5e954f292aa517fe1be&o=",
    alt: "Banheiro moderno com ducha e amenities"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/167945244.jpg?k=09ea33c14fdd7ae2844c5b971b1ee25969f456acd7dfb8195324294745a2f402&o=",
    alt: "Sunset Restaurant sobre a água ao pôr do sol"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110228896.jpg?k=a91cfd62c280347679a5576e540faa819c0d629cf7f3807e18cc8903d7db1e96&o=",
    alt: "Beach villa com jardim tropical privativo"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110228927.jpg?k=662218acaffd0e49c153249c094e3cec2eef4e61d5d4888e49eec64984606ff2&o=",
    alt: "Área de lazer com esportes aquáticos e atividades"
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
