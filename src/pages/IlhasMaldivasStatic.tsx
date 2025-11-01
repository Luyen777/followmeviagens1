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

// Hard-coded resort data (first 20 resorts: FM01-FM20)
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
  },
  {
    title: "Fairmont Maldives Sirru Fen Fushi",
    description: "Localizado no isolado Atol Shaviyani conhecido como 'Ilha da Água Secreta' com 120 villas elegantes. Possui a maior piscina infinita das Maldivas (200m), Coralarium - museu subaquático pioneiro e laboratório de sustentabilidade. Agora opera independentemente como Sirru Fen Fushi Private Lagoon Resort.",
    image: "https://worldlandscapearchitect.com/wp-content/uploads/2020/10/6-SirruFenFushi_Photo_BeachVillaGarden.jpg",
    priceFrom: 3200,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Luxury sustentável", "Arte contemporânea", "Casais", "Privacidade", "Experiências culturais"],
    flightIncluded: "55 min hidroavião até o resort",
    uniquePerk: "Coralarium - primeiro museu subaquático do mundo + maior piscina infinita das Maldivas",
    referenceNumber: "FM11",
    slug: "fairmont-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Finolhu Baa Atoll Maldives",
    description: "Localizado no Atol Baa com conceito vintage 1950s-60s e arquitetura colorida vibrante. Localizado na Reserva da Biosfera UNESCO com maior banco de areia privativo das Maldivas (2km). Membro Design Hotels oferece 125 villas com decoração Instagram-worthy e sistema de som Marshall exclusivo.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/301574346.jpg?k=0788f5c73922bb48adea53084804b3c52de19d308b929f430e67d0fd73b033c3&o=",
    priceFrom: 1160,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Lifestyle retro-chic", "Casais jovens", "Famílias ativas", "Entretenimento", "Design vintage"],
    flightIncluded: "30 min hidroavião ou 15 min voo doméstico + 20 min speedboat",
    uniquePerk: "Conceito retro-chic único com maior banco de areia privativo das Maldivas (2km) + Beach Club com DJs internacionais",
    referenceNumber: "FM12",
    slug: "finolhu",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Four Seasons Resort Maldives at Kuda Huraa",
    description: "Localizado no Atol Male Norte com 96 villas em ilha jardim de 12 hectares. Famoso mundialmente pelo surf com escola Tropicsurf e acesso exclusivo aos melhores breaks das Maldivas. Possui spa em ilha privativa dedicada, Marina Discovery Centre e Seaplane Surfaris únicos no mundo.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733754369.jpg?k=0f7b91951c8ed508cbc9ce3a887b7a186bd930a8b2f9cff9ece58cdca3bc430b&o=",
    priceFrom: 5000,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Surf world-class", "Famílias ativas", "Casais", "Mergulho", "Tennis"],
    flightIncluded: "25 min speedboat",
    uniquePerk: "Único resort de surf Four Seasons do mundo com Seaplane Surfaris exclusivos",
    referenceNumber: "FM13",
    slug: "four-seasons-kuda",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Four Seasons Resort Maldives at Landaa Giraavaru",
    description: "Localizado no Atol Baa (Reserva UNESCO) com 103 villas em ilha de 44 hectares com lagoa de 2km. Famoso mundialmente pelo Marine Discovery Centre e programa de pesquisa das manta rays. Oferece spa ayurvédico, programa de reabilitação de tartarugas e acesso exclusivo à Baía Hanifaru com a maior população conhecida de raias-manta do mundo.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733802965.jpg?k=d7ce012d632a34fbd5cf70bf047a38df60f6585403a29a6f6bcaaaf2d03faabc&o=",
    priceFrom: 4400,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Conservação marinha", "Pesquisa científica", "Famílias", "Luxury sustentável", "Manta rays"],
    flightIncluded: "40 min hidroavião",
    uniquePerk: "Marine Discovery Centre único + maior banco de dados mundial de manta rays",
    referenceNumber: "FM14",
    slug: "four-seasons-landaa",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "Gili Lankanfushi Maldives",
    description: "Localizado no Atol Male Norte a 20 minutos de speedboat do aeroporto, este resort eco-luxury pioneiro oferece conceito 'No News, No Shoes' com 45 villas sobre a água construídas com materiais sustentáveis. Cada hóspede recebe um 'Mr. Friday' pessoal e acesso ao primeiro observatório sobre a água das Maldivas.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/535818160.jpg?k=f8f2222cf5c2c93cc68d2ebbe05a05763c7991aa966e16551240f2ab4b9d2966&o=",
    priceFrom: 2340,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Eco-luxury sustentável", "Casais", "Experiência barefoot", "Privacidade", "Wellness"],
    flightIncluded: "20 min speedboat",
    uniquePerk: "Primeiro observatório sobre a água das Maldivas",
    referenceNumber: "FM15",
    slug: "gili-lankanfushi",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Hard Rock Hotel Maldives",
    description: "Localizado no Atol Male Sul no complexo Emboodhoo Lagoon/CROSSROADS, primeiro resort multi-ilha das Maldivas com 178 quartos temáticos musicais. Oferece guitarras Fender nos quartos, sistema de som subaquático na piscina, memorabília musical autêntica e acesso direto ao Hard Rock Cafe e The Marina via ponte.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437570549.jpg?k=d68bd5807eae8152b42ded19af15d4e4f372225c3755cfc9ef90b68086ceab61&o=",
    priceFrom: 1000,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Entretenimento musical", "Famílias ativas", "Casais jovens", "All-inclusive", "Lifestyle energético"],
    flightIncluded: "15 min speedboat",
    uniquePerk: "Sistema de som subaquático na piscina + guitarras Fender gratuitas nos quartos",
    referenceNumber: "FM16",
    slug: "hard-rock",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Heritance Aarah Maldives",
    description: "Localizado no Atol Raa com 150 villas premium em ilha de 33 hectares a 40 minutos de hidroavião de Malé. Primeiro resort LEED Gold certificado das Maldivas oferece conceito Premium All-Inclusive com 7 restaurantes, 5 bares, spa IASO Medi Spa inovador e serviço de butler personalizado 24h para cada villa.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/382631398.jpg?k=c7723ebd97ae9a4e60dd12f088959a5db4c4a68c47271aab7a3effbb30107169&o=",
    priceFrom: 1900,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Premium All-Inclusive", "Casais", "Famílias luxury", "Sustentabilidade certificada", "Butler service"],
    flightIncluded: "40 min hidroavião",
    uniquePerk: "Primeiro resort LEED Gold das Maldivas + IASO Medi Spa inovador",
    referenceNumber: "FM17",
    slug: "heritance-aarah",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Hideaway Beach Resort & Spa",
    description: "Localizado no Atol Haa Alif na ilha em formato crescente de Dhonakulhi, uma das maiores ilhas resort das Maldivas com 290 km² e apenas 5% construída. Oferece 101 villas ultra-espaçosas com piscinas privativas, duplo house reef único, marina própria e The Signature Collection - conceito resort dentro do resort para máximo luxury.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427649347.jpg?k=0d2ac3986911bf9ea26dcec355aa09e6efa89bd12e043eecb1186a54d2456f5c&o=",
    priceFrom: 2100,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Ultra-luxury privativo", "Casais exclusivos", "Famílias VIP", "Mergulho world-class", "Privacidade absoluta"],
    flightIncluded: "60 min voo doméstico + 20 min speedboat",
    uniquePerk: "Duplo house reef único + marina própria",
    referenceNumber: "FM18",
    slug: "hideaway-beach-resort",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Hurawalhi Island Resort",
    description: "Localizado no Atol Lhaviyani com conceito adults-only em ilha privativa de 11 hectares. Famoso pelo 5.8 Undersea Restaurant - maior restaurante subaquático do mundo a 5,8 metros de profundidade. Oferece 90 villas modernas, spa sobre a água e recife próprio excepcionalmente preservado ideal para mergulho e snorkeling.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82642217.jpg?k=5293e7da4f046fc4ba2be1af49990dd937a7903732fa9ab319f0ad49ce4969e2&o=",
    priceFrom: 1680,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Adults-only exclusivo", "Casais românticos", "Mergulho premium", "Gastronomia subaquática", "Intimidade"],
    flightIncluded: "40 min hidroavião",
    uniquePerk: "5.8 Undersea Restaurant - maior restaurante subaquático do mundo",
    referenceNumber: "FM19",
    slug: "hurawalhi-island",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Huvafen Fushi",
    description: "Localizado no Atol Male Norte a 30 minutos de speedboat do aeroporto, este resort boutique com apenas 46 villas renovado em 2024 oferece o primeiro spa subaquático do mundo. Cada villa possui piscina privativa e design contemporâneo sofisticado. Inclui adega subterrânea única e experiências gastronômicas exclusivas com mixologistas de Londres.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/568216339.jpg?k=057904b8d72ad6e6f19840152dba0cf43d78741d1c5aab110d4b6e9a57c8640f&o=",
    priceFrom: 1354,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Boutique luxury", "Casais", "Spa subaquático exclusivo", "Gastronomia premium", "Design sofisticado"],
    flightIncluded: "30 min speedboat",
    uniquePerk: "Primeiro spa subaquático do mundo + primeira adega subterrânea das Maldivas",
    referenceNumber: "FM20",
    slug: "huvafen-fushi",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
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
