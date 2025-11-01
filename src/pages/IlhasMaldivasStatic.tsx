import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageListItem from "@/components/PackageListItem";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { createItemListSchema } from "@/lib/structuredData";

// Custom interface for static resort data
interface StaticResortData {
  title: string;
  description: string;
  image: string;
  priceFrom: number;
  duration: string;
  mealPlan: string;
  focusTags: string[];
  flightIncluded: string;
  uniquePerk: string;
  referenceNumber: string;
  slug: string;
  destination: string;
  validity: string;
  classification: string;
}

// Hard-coded resort data (first 10 resorts)
const RESORTS_DATA: StaticResortData[] = [
  {
    title: "Adaaran Select Hudhuranfushi",
    description: "Localizado na Ilha Lhohifushi, ideal para famílias e surfistas. Conhecido como \"Ilha de Ouro Branco\", oferece excelente custo-benefício com acesso exclusivo ao surf break Lohis.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/6322740.jpg?k=0620ef260bc353798fd53368b292da9ab9301934666fa4fe653e87032b88d0b9&o=",
    priceFrom: 1200,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Surf", "Famílias", "All-inclusive"],
    flightIncluded: "30 min speedboat",
    uniquePerk: "Acesso exclusivo ao surf break Lohis",
    referenceNumber: "FM01",
    slug: "adaaran-select",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Amilla Maldives Resort and Residences",
    description: "Localizado no Atol Baa (UNESCO) com arquitetura contemporânea. Uma das maiores ilhas das Maldivas com 70% de área preservada, oferece experiência sustentável exclusiva.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/456316779.jpg?k=73679592af61f6b644d574a3622d6de93813fe02f0f89adda1a1c2088bcce352&o=",
    priceFrom: 4000,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Luxury sustentável", "Casais", "Famílias"],
    flightIncluded: "35 min hidroavião",
    uniquePerk: "Villa na copa das árvores",
    referenceNumber: "FM02",
    slug: "amilla-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Anantara Dhigu Maldives Resort",
    description: "Localizado no Atol Male Sul, parte de complexo de 3 ilhas Anantara conectadas. Oferece 110 villas espaçosas com acesso às instalações das ilhas irmãs.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/222597522.jpg?k=4f6380476dda48dede968fa453226b19d6a15a90f46cf0c8d30cd5c34b30b921&o=",
    priceFrom: 2500,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Famílias", "Casais", "Atividades aquáticas"],
    flightIncluded: "30 min speedboat (24h)",
    uniquePerk: "Acesso a 3 ilhas Anantara com transfer gratuito",
    referenceNumber: "FM03",
    slug: "anantara-dhigu",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Anantara Kihavah Maldives Villas",
    description: "Localizado no Atol Baa (UNESCO) com 79 villas privativas com piscina. Destino de celebridades, oferece experiências gastronômicas subaquáticas únicas.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/327022993.jpg?k=e56a270867edabf4828c6edfe50301e5a427e27098244045bf00a8cfd7e5cfc2&o=",
    priceFrom: 6000,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Ultra-luxury", "Casais", "Gastronomia"],
    flightIncluded: "35 min hidroavião",
    uniquePerk: "Restaurante SEA subaquático + observatório SKY",
    referenceNumber: "FM04",
    slug: "anantara-kihavah",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Ayada Maldives",
    description: "Localizado no Atol Gaafu Dhaalu, #1 TripAdvisor. Primeiro resort temático turco nas Maldivas com 122 villas e AySpa de 3.500m² com Hammam privativo.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556796046.jpg?k=81580696d591ea5f1605cbf7bb3ffb4fd15c836993941263140c10976da93421&o=",
    priceFrom: 3000,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Luxury", "Casais", "Spa wellness"],
    flightIncluded: "55-75 min voo + 25-50 min speedboat",
    uniquePerk: "Hammam turco + jardim orgânico próprio",
    referenceNumber: "FM05",
    slug: "ayada-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Cheval Blanc Randheli",
    description: "Resort ultra-luxo LVMH em 6 ilhas privadas no Atol Noonu, apenas 46 villas por Jean-Michel Gathy. Mayordomos privativos, hidroavião próprio e villa em ilha dedicada.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/684303528.jpg?k=c7b6d9c78539e2d3e43f213fa8cf5b3fa8b68cec6b0d24420df0a9fdd9d7cc1d&o=",
    priceFrom: 8000,
    duration: "4 noites",
    mealPlan: "Café da manhã",
    focusTags: ["Ultra-luxury exclusivo", "Casais VIP"],
    flightIncluded: "40 min hidroavião privativo",
    uniquePerk: "Único resort LVMH",
    referenceNumber: "FM06",
    slug: "cheval-blanc-randheli",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "COMO Maalifushi",
    description: "Localizado no isolado Atol Thaa, único resort em todo o atol. Design minimalista japonês com COMO Shambhala Retreat focado em wellness asiático.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/371355210.jpg?k=c7d1e3cdb9968c47245800421700fb2585e626109fc5004380ab169af77c3e8d&o=",
    priceFrom: 5500,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Wellness & Spa", "Privacidade máxima"],
    flightIncluded: "60 min hidroavião",
    uniquePerk: "Shambhala Retreat",
    referenceNumber: "FM07",
    slug: "como-maalifushi",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Conrad Maldives Rangali Island",
    description: "Resort icônico localizado em duas ilhas conectadas no Atol Ari Sul. Famoso pelo Ithaa - primeiro restaurante subaquático do mundo, com mais de 20 anos de tradição.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/731358850.jpg?k=9588171ce10ede0bfc968f5da4bfd5d791dc590c4d398e9b735f9acd577da96b&o=",
    priceFrom: 4000,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Gastronomia", "Casais", "Luxury clássico"],
    flightIncluded: "30 min hidroavião",
    uniquePerk: "Ithaa primeiro restaurante subaquático + suíte Muraka",
    referenceNumber: "FM08",
    slug: "conrad-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Emerald Maldives Resort & Spa",
    description: "Localizado no Atol Raa, eleito Melhor Resort All-Inclusive do Mundo 2024 pelo TripAdvisor. 120 villas em 20 hectares sustentáveis.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/248951908.jpg?k=a961c4ec5822b6d94d7ca04300ed474229a206f5bcd4280122526881a7371c05&o=",
    priceFrom: 3500,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Deluxe All-Inclusive", "Famílias", "Sustentabilidade"],
    flightIncluded: "40 min hidroavião ou 30 min voo + 15 min speedboat",
    uniquePerk: "Melhor All-Inclusive Mundo 2024 + Kids Club 1.500m²",
    referenceNumber: "FM09",
    slug: "emerald-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Emerald Faarufushi",
    description: "Localizado no Atol Raa com 80 villas espaçosas em ilha de 17 hectares. Membro dos Leading Hotels of the World, oferece conceito Deluxe All-Inclusive premium com 5 restaurantes, spa balinês Nika com 10 bangalôs privativos e acesso direto a recife de coral de 9km para mergulho e snorkeling.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/517382799.jpg?k=92d21f54cea0d80766e791f48dff2595c8f03231331122d1d214458bd0e5a4ad&o=",
    priceFrom: 1900,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Deluxe All-Inclusive", "Casais", "Famílias", "Mergulho", "Recife próprio"],
    flightIncluded: "45 min hidroavião ou 40 min voo doméstico + 5 min speedboat",
    uniquePerk: "Recife próprio de 9km",
    referenceNumber: "FM10",
    slug: "emerald-faarufushi",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  }
];

const IlhasMaldivasStatic = () => {
  const resorts = RESORTS_DATA;

  // Create structured data for resort list
  const itemListSchema = createItemListSchema(
    resorts.map(resort => ({
      name: resort.title,
      description: resort.description,
      image: resort.image,
      priceFrom: resort.priceFrom,
      url: `https://followmeviagens.com/ilhas-maldivas/${resort.slug}`
    }))
  );

  return (
    <>
      <SEOHead
        title="Pacotes para Maldivas 2024 | Resorts de Luxo | Follow Me Viagens"
        description="Descubra os melhores pacotes para as Ilhas Maldivas. Resorts de luxo com tudo incluído, overwater villas, mergulho e experiências inesquecíveis. Pacotes personalizáveis para lua de mel e férias em família."
        canonicalUrl="/ilhas-maldivas"
        keywords={["maldivas", "pacotes maldivas", "resorts maldivas", "viagem maldivas", "lua de mel maldivas", "overwater villas"]}
        structuredData={itemListSchema}
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Ilhas Maldivas", href: "/ilhas-maldivas" }
          ]}
        />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-display font-light text-foreground mb-8 tracking-tight leading-tight lg:text-5xl">Pacotes de viagem para as Ilhas Maldivas</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Explore os melhores pacotes para as Maldivas. Cada resort oferece experiências únicas, com opções de luxo e lazer para todos os estilos. Todos os pacotes são customizáveis - fale com a nossa equipe para encontrar a opção perfeita pra você!</p>
        </div>
      </section>

      {/* Packages List */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Sorting Dropdown */}
          <div className="mb-12 flex justify-end">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-2.5 cursor-pointer hover:border-foreground/20 transition-colors duration-200">
              <span className="text-sm text-muted-foreground font-medium">
                Ordenar por
              </span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-12 sm:space-y-8">
            {resorts.map((pkg, index) => <PackageListItem key={pkg.slug || pkg.referenceNumber || index} {...pkg} />)}
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default IlhasMaldivasStatic;
