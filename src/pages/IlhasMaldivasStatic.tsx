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

// Hard-coded resort data - ALL 49 resorts: FM01-FM49
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
  },
  {
    title: "InterContinental Maldives",
    description: "Localizado no Atol Raa próximo à Reserva da Biosfera UNESCO Hanifaru Bay, este resort premium com 81 villas oferece design contemporâneo colorido único. Benefícios Club InterContinental inclusos, AVI Spa overwater premiado e Marina Discovery Centre com programa de conservação das manta rays. Layout inovador em 3 áreas distintas da ilha.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/430993237.jpg?k=87cdb1db5aa7f4b81a9d2e21c6715e02d29c50522f360da0cb9cb656d2d01201&o=",
    priceFrom: 824,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Luxury familiar", "Conservação marinha", "Club InterContinental", "Manta rays", "Sustentabilidade"],
    flightIncluded: "35 min hidroavião",
    uniquePerk: "Primeiras lagoon villas de dois andares das Maldivas + parceria Manta Trust",
    referenceNumber: "FM21",
    slug: "intercontinental",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Iru Veli Maldives",
    description: "Localizado no Atol Noonu com conceito adults-only em ilha íntima de 10 hectares. Resort boutique com apenas 82 villas e foco em privacidade absoluta oferece spa The Essence com tratamentos ayurvédicos, 5 restaurantes gourmet e acesso a recife pristine. Ideal para casais em lua de mel buscando experiência romântica exclusiva.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428689266.jpg?k=bc5bbaa54eb67be85ffe360475bb6beac490497279496a29ff7b5c121d162d5d&o=",
    priceFrom: 750,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Adults-only exclusivo", "Romance", "Casais", "Privacidade", "Wellness ayurvédico"],
    flightIncluded: "45 min hidroavião",
    uniquePerk: "Conceito adults-only com apenas 82 villas + spa The Essence ayurvédico + ilha privativa de 10 hectares sem outras propriedades no horizonte",
    referenceNumber: "FM22",
    slug: "iru-veli",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Jawakara Islands Maldives",
    description: "Localizado no Atol Shaviyani em complexo de duas ilhas conectadas por ponte, oferece experiência única multi-ilha com 288 villas distribuídas. Conceito inovador combina ilha principal com atividades familiares e ilha secundária com zona adults-only. Possui maior piscina infinita das Maldivas e centro de mergulho PADI completo.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538979078.jpg?k=9543a4b4e51e2036242609bc9f9f3d32f0cd294511fb4401f604803a19896b64&o=",
    priceFrom: 900,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Multi-ilha inovador", "Famílias grandes", "Casais", "All-inclusive premium", "Mergulho PADI"],
    flightIncluded: "50 min hidroavião",
    uniquePerk: "Único resort de duas ilhas conectadas por ponte + maior piscina infinita das Maldivas + conceito híbrido familiar/adults-only",
    referenceNumber: "FM23",
    slug: "jawakara-islands",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "JOALI Being",
    description: "Localizado no Atol Raa como primeiro resort wellness das Maldivas dedicado exclusivamente ao bem-estar mental, físico e espiritual. Oferece 68 villas com programas transformacionais personalizados, JOALI BEING Wellbeing Centre com medicina integrativa, terapias de som e experiências de biohacking. Conceito revolucionário focado em longevidade e renovação interior.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/596830985.jpg?k=48da4c56a389da94c87ecd22d05460831d15bfdbe338756feaab7adc2a20fd1d&o=",
    priceFrom: 3500,
    duration: "4 noites",
    mealPlan: "Café da manhã",
    focusTags: ["Wellness transformacional", "Medicina integrativa", "Longevidade", "Biohacking", "Renovação holística"],
    flightIncluded: "40 min hidroavião",
    uniquePerk: "Primeiro resort wellness das Maldivas + programa de medicina integrativa único + terapias pioneiras",
    referenceNumber: "FM24",
    slug: "joali-being",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "JOALI Maldives",
    description: "Localizado no Atol Raa com conceito 'Joy of Living' em ilha de arte contemporânea com 73 villas. Cada villa apresenta obras de arte exclusivas de artistas internacionais, biblioteca Maldivian Heritage com curador residente e spa ESPA com tratamentos personalizados. Design imersivo combina luxury com expressões artísticas únicas e sustentabilidade.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/174805539.jpg?k=df7d84ef0cc02e9e01d4a5b629a7de1a6db3e8f14caaed3e3b6b712ec1bf7ee5&o=",
    priceFrom: 2800,
    duration: "4 noites",
    mealPlan: "Café da manhã",
    focusTags: ["Arte contemporânea", "Casais culturais", "Design imersivo", "Sustentabilidade", "Experiências curatoriais"],
    flightIncluded: "40 min hidroavião",
    uniquePerk: "Resort-galeria de arte com obras exclusivas + biblioteca Maldivian Heritage com curador",
    referenceNumber: "FM25",
    slug: "joali-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "JW Marriott Maldives Resort & Spa",
    description: "Localizado no Atol Shaviyani com 60 luxuosas villas sobre a água e na praia distribuídas em ilha privativa. Famoso pelo Spa by JW overwater com vista para o oceano, Little Griffins Kids Club com atividades para crianças e restaurante Hashi com teppanyaki japonês nas árvores. Conceito familiar premium com serviço de butler personalizado.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643200447.jpg?k=d9547756c40cf9f7ced8b9b785b2d590f1f36bb12a069a8b7174d2617326ac79&o=",
    priceFrom: 3100,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Famílias luxury", "Casais", "Spa overwater exclusivo", "Crianças ativas", "Butler service"],
    flightIncluded: "50 min hidroavião",
    uniquePerk: "Spa by JW overwater com vista oceânica + restaurante Hashi teppanyaki nas árvores",
    referenceNumber: "FM26",
    slug: "jw-marriott-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Kuda Villingili Resort Maldives",
    description: "Localizado no Atol Male Norte a apenas 30 minutos de speedboat do aeroporto, oferece 75 villas elegantes com acesso direto ao famoso surf break Chickens. Possui a maior piscina infinity de água doce das Maldivas (150m), 7 restaurantes world-class, Whiskey & Cigar Lounge exclusivo e spa overwater com tratamentos inspirados em tradições asiáticas.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602138401.jpg?k=e36866239b1435481bb6e1a74e4b4cbaa1da0367f76bef94621b0b11901199e3&o=",
    priceFrom: 2874,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Luxury acessível", "Casais", "Famílias ativas", "Surf premium", "Gastronomia diversificada"],
    flightIncluded: "30 min speedboat",
    uniquePerk: "Maior piscina infinity de água doce das Maldivas (150m) + acesso direto ao surf break Chickens",
    referenceNumber: "FM27",
    slug: "kuda-villingili",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Kudadoo Maldives Private Island",
    description: "Localizado no Atol Lhaviyani como resort adults-only ultra-exclusivo com apenas 15 overwater residences. Conceito revolutionário 'Anything. Anytime. Anywhere' inclui tudo sem limites - desde helicopter transfers até experiências gastronômicas personalizadas com chef privativo. Solar-powered com maior telhado solar das Maldivas e máxima sustentabilidade.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163078427.jpg?k=fc71b4c24785a2315d7f35ac6f2c9527283fb7c739df466c6cfd8908ed22a73c&o=",
    priceFrom: 8400,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Ultra-luxury exclusivo", "Adults-only", "Sustentabilidade total", "Experiências ilimitadas", "Privacidade absoluta"],
    flightIncluded: "40 min hidroavião ou helicopter transfer",
    uniquePerk: "Conceito 'Anything. Anytime. Anywhere' tudo incluído + apenas 15 residences",
    referenceNumber: "FM28",
    slug: "kudadoo",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "Kuredhivaru Maldives",
    description: "Localizado no Atol Lhaviyani como resort boutique adults-only com 40 villas sobre a água em design contemporâneo sofisticado. Membro Small Luxury Hotels oferece máxima privacidade com spa The Sandhani overwater, restaurante Sangu fine dining e acesso exclusivo a recife pristine. Conceito romantic retreat premium para casais.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/752063791.jpg?k=bb4e31d2ead4f0c6031eb0bd0b6d1ea4a917a63940bcbbfc48aefebdb167520a&o=",
    priceFrom: 1680,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Adults-only boutique", "Casais românticos", "Privacidade exclusiva", "Fine dining", "Mergulho premium"],
    flightIncluded: "45 min hidroavião",
    uniquePerk: "Spa The Sandhani overwater + restaurante Sangu fine dining exclusivo",
    referenceNumber: "FM29",
    slug: "kuredhivaru",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Le Méridien Maldives Resort & Spa",
    description: "Localizado no Atol Lhaviyani na ilha privativa de Thilamaafushi com 141 villas elegantes distribuídas em 9 hectares. Membro Marriott Bonvoy oferece design mid-century único, Marine Conservation Hub pioneiro, greenhouse hidropônica de 430m² (a maior das Maldivas) e spa overwater com vistas deslumbrantes. Experiência familiar premium com programa de conservação das tartarugas.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510277946.jpg?k=42aadee4733dd426291f4ac14a75f01cfceb6b99f6abaf8ae3d9623cfe0444e8&o=",
    priceFrom: 1648,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Familiar sustentável", "Conservação marinha", "Design mid-century", "Cultura europea", "Experiências educativas"],
    flightIncluded: "35 min hidroavião",
    uniquePerk: "Marine Conservation Hub com programa tartarugas + spa overwater com chão de vidro",
    referenceNumber: "FM30",
    slug: "le-meridien",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Milaidhoo Island Maldives",
    description: "Localizado no Atol Baa (Reserva UNESCO) em ilha boutique de 300x180 metros com apenas 50 villas adults-only. Membro Small Luxury Hotels oferece conceito 'barefoot luxury' com piscinas privativas que se iluminam à noite, restaurante Ba'theli em barcos tradicionais sobre a lagoa e acesso privilegiado ao recife casa premiado. Butler pessoal 24h para cada hóspede.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233566771.jpg?k=9ed8342bcccb79085956d44a67699f3b99f181c3e7691c94f846fae4c70f923f&o=",
    priceFrom: 3520,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Adults-only boutique", "Casais românticos", "Barefoot luxury", "Heritage maldívio", "Privacidade absoluta"],
    flightIncluded: "35 min hidroavião",
    uniquePerk: "Restaurante Ba'theli único em barcos tradicionais",
    referenceNumber: "FM31",
    slug: "milaidhoo-island",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Niyama Private Islands Maldives",
    description: "Localizado no Atol Dhaalu em conceito revolucionário de duas ilhas conectadas - Play (atividades e família) e Chill (relaxamento e adultos). 134 villas distribuídas entre as ilhas oferece SUBSIX - clube subaquático único a 6 metros de profundidade, Tribal Lounge suspenso nas árvores e experiências personalizadas com Edge Aqua Sports. Conceito híbrido único no mundo.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/331986349.jpg?k=170b06ff0ba58c7b216f0d60b5f72246767cb91fab24968c9dc76e30881650e8&o=",
    priceFrom: 2010,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Dual-island único", "Famílias ativas", "Casais aventureiros", "Esportes aquáticos extremos", "Experiências inovadoras"],
    flightIncluded: "40 min hidroavião ou 25 min voo doméstico + 15 min speedboat",
    uniquePerk: "SUBSIX clube subaquático único a 6m de profundidade",
    referenceNumber: "FM32",
    slug: "niyama-private-islands",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "NOOE Maldives Kunaavashi",
    description: "Localizado no Atol Vaavu conhecido como 'Wow Atoll' pela abundante vida marinha, este resort 5 estrelas em ilha privativa de 72 villas oferece conceito lifestyle equilibrado 'perfect balance'. Apenas 60 minutos de speedboat ou 24 minutos de hidroavião de Malé, possui recife próprio pristine, spa Th·āri com tratamentos holísticos e 6 restaurantes diversos incluindo w·āsho'ku japonês.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/605694845.jpg?k=64b30e264e7cb10e4c066b207f6f25669ea7a2ff557dc689b824e104864bb4a4&o=",
    priceFrom: 2240,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Lifestyle equilibrado", "Casais", "Famílias ativas", "Recife próprio", "Wellness holístico"],
    flightIncluded: "60 min speedboat ou 24 min hidroavião",
    uniquePerk: "Vida marinha abundante + spa Th·āri com tratamentos baseados em elementos naturais",
    referenceNumber: "FM33",
    slug: "nooe-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "One&Only Reethi Rah",
    description: "Localizado no Atol Male Norte em ilha privativa em formato de polvo com 6km de costa e 12 praias esculpidas à mão. Este resort ultra-luxury possui 118 villas projetadas por Jean-Michel Gathy, cada uma com concierge pessoal e Villa Valet dedicado. Oferece 8 restaurantes world-class, spa overwater com 14 salas de tratamento e zona horária própria (1h à frente de Malé).",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692525573.jpg?k=1d8128a5e4eb9eb76957ce3795ac7ed2addfb1809fff6b4aace9f171c7a67769&o=",
    priceFrom: 7800,
    duration: "4 noites",
    mealPlan: "Café da manhã",
    focusTags: ["Ultra-luxury exclusivo", "Celebridades", "Famílias VIP", "Gastronomia world-class", "Privacidade absoluta"],
    flightIncluded: "75 min luxury yacht ou 45 min speedboat",
    uniquePerk: "12 praias esculpidas à mão + ilha em formato de polvo com 6km de costa",
    referenceNumber: "FM34",
    slug: "one-and-only-reethi-rah",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "Patina Maldives, Fari Islands",
    description: "Localizado no Atol Male Norte nas inovadoras Fari Islands criadas pela Pontiac Land, este resort contemporary luxury com 90 villas oferece design arquitetônico vanguardista inspirado na natureza. Faz parte de complexo sustentável multi-resorts com Capella Maldives, possui estúdios Patina para experiências artísticas e design biofílico único integrando natureza e luxury moderno.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309196308.jpg?k=0d80d5b2c56762975ac2d23e5fefb384ad6ed1a74df0d4785a4bef1f942b0951&o=",
    priceFrom: 4200,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Contemporary luxury", "Design vanguardista", "Arte contemporânea", "Sustentabilidade", "Casais sofisticados"],
    flightIncluded: "45 min speedboat",
    uniquePerk: "Arquitetura biofílica vanguardista + estúdios Patina para experiências artísticas",
    referenceNumber: "FM35",
    slug: "patina-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Radisson Blu Resort Maldives",
    description: "Localizado no Atol Alifu Alifu em ilha tropical natural com 128 villas sobre a água e na praia. Resort familiar premium com Kids Club ativo, spa holístico SENSES, Blu Beach Club energético e acesso direto a recife casa pristine. Conceito hospitality internacional Radisson com toque maldívio autêntico e programa all-inclusive opcional Blu All-Inclusive.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/665367104.jpg?k=f4413358a2d994da1016a87f13d27730b745af8834e86c1d1e125b3bd2d706eb&o=",
    priceFrom: 1890,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Familiar premium", "All-inclusive opcional", "Casais", "Atividades aquáticas", "Hospitalidade internacional"],
    flightIncluded: "30 min hidroavião",
    uniquePerk: "Blu Beach Club energético + spa SENSES holístico",
    referenceNumber: "FM36",
    slug: "radisson-blu",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Six Senses Kanuhura",
    description: "Localizado no Atol Lhaviyani em ilha pristine de 17 hectares com apenas 24 villas, este resort boutique ultra-exclusivo oferece máxima privacidade e conceito wellness Six Senses. Possui spa Six Senses Earth Lab pioneiro, programa sustentabilidade integral, experiências personalizadas com marine biologist dedicado e recife próprio excepcional para mergulho. Reopened 2023 após renovação completa.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/462447939.jpg?k=1e7a7314170df182682d71d7758afc166ec83bbb60284cce42a8187db6b88b48&o=",
    priceFrom: 4800,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Ultra-exclusivo wellness", "Sustentabilidade integral", "Casais sofisticados", "Marine biology", "Privacidade absoluta"],
    flightIncluded: "35 min hidroavião",
    uniquePerk: "Apenas 24 villas para máxima exclusividade + programa sustentabilidade integral Six Senses",
    referenceNumber: "FM37",
    slug: "six-senses-kanuhura",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Six Senses Laamu",
    description: "Localizado no remoto Atol Laamu (único resort no atol) no sul das Maldivas, este resort eco-luxury pioneiro oferece experiência 'barefoot luxury' autêntica com 97 villas sustentáveis. Famoso pelo The SHELL centro de pesquisa marinha, casa recife de 1,5km pristine, restaurante overwater LEAF com mesas de vidro sobre o oceano e conceito wellness Six Senses com spa 'nests' na vegetação tropical.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/483868197.jpg?k=f771be1e5a6d11a988153197e10e4454d2aa4dbb6d233e4246a2c0c7b277fe7f&o=",
    priceFrom: 4320,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Eco-luxury sustentável", "Barefoot experience", "Wellness Six Senses", "Pesquisa marinha", "Casais conscientes"],
    flightIncluded: "65 min hidroavião ou 45 min voo doméstico + 20 min speedboat",
    uniquePerk: "The SHELL centro pesquisa marinha + conceito 'barefoot luxury' pioneiro",
    referenceNumber: "FM38",
    slug: "six-senses-laamu",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Siyam World Maldives",
    description: "Localizado no Atol Noonu em ilha de 54 hectares, o maior resort das Maldivas oferece conceito revolucionário WOW! 24h Premium All-Inclusive com experiências ilimitadas. Possui o maior parque aquático flutuante do Oceano Índico, única pista de kart elétrico das Maldivas, rancho de cavalos exclusivo e 18 categorias de acomodação desde villas com piscina e tobogã até residências de 6 quartos.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336605813.jpg?k=7dfd9772bbe51af3f594778f185a8c28110d97d1087b9be746b57346ca3c02fb&o=",
    priceFrom: 2400,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Famílias ativas", "All-inclusive premium", "Grupos grandes", "Aventura aquática", "Entretenimento diversificado"],
    flightIncluded: "45 min hidroavião ou 30 min voo doméstico + 10 min speedboat",
    uniquePerk: "Maior resort das Maldivas + maior parque aquático flutuante do Oceano Índico",
    referenceNumber: "FM39",
    slug: "siyam-world",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "4 estrelas"
  },
  {
    title: "SO/ Maldives",
    description: "Localizado no Atol Male Norte em ilha privativa com design vanguardista assinado por Kenzo Tange, este resort lifestyle contemporâneo oferece conceito 'SO/' único da Accor com 80 villas. Arquitetura futurística combina elementos tradicionais maldívios com design francês sofisticado, spa So SPA com tratamentos personalizados e experiências gastronômicas criativas com influências asiáticas e europeias.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/754751238.jpg?k=2c35289ad44dfe7720fd5f06a018ea076b2752eff3519350a2d0b4607e969929&o=",
    priceFrom: 3600,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Lifestyle contemporâneo", "Design vanguardista", "Casais sofisticados", "Arte moderna", "Gastronomia criativa"],
    flightIncluded: "45 min speedboat",
    uniquePerk: "Design arquitetônico futurista por Kenzo Tange + fusão design francês-maldívio vanguardista",
    referenceNumber: "FM40",
    slug: "so-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "5 estrelas"
  },
  {
    title: "Soneva Jani",
    description: "Localizado no Atol Noonu em lagoa pristine de 5,6km, este resort ultra-luxury pioneiro em sustentabilidade oferece conceito 'No News, No Shoes' com 51 overwater villas com tobogãs privativas. Famoso pelo Cinema Paradiso - cinema overwater a céu aberto único no mundo, Observatory com telescópio Meade, The Gathering - maior residência overwater das Maldivas (4 quartos) e programa waste-to-wealth revolucionário.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/97590883.jpg?k=8617cba5cf75e3a6cba58f7afdebd719e8cc992620a2a7374daeaa68d0546e8a&o=",
    priceFrom: 12000,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Ultra-luxury sustentável", "Famílias ultra-VIP", "Experiências únicas", "Astronomia", "Conservação ambiental pioneira"],
    flightIncluded: "40 min hidroavião ou helicopter transfer",
    uniquePerk: "Cinema Paradiso overwater único no mundo + Observatory com telescópio",
    referenceNumber: "FM41",
    slug: "soneva-jani",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "Soneva Fushi",
    description: "Localizado no Atol Baa (Reserva UNESCO) como primeiro resort eco-luxury das Maldivas (1995), oferece conceito 'No News, No Shoes' original com 61 villas jungle-beach rústicas. Ilha de 40 hectares com vegetação tropical densa, praias virgens de 2km, Soneva Art & Glass Studio com fornos únicos para criação de arte em vidro, Out of the Blue overwater restaurante e Flying Saucer - maior zip line over-water do mundo.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325237023.jpg?k=eddbc7dc20eabc7a2c377c6d7fa9aebf71b733c8f7cf4f78124343ad52885f28&o=",
    priceFrom: 8400,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Eco-luxury pioneiro", "Famílias conscientes", "Sustentabilidade original", "Arte & criatividade", "Robinson Crusoe experience"],
    flightIncluded: "35 min hidroavião",
    uniquePerk: "Primeiro resort eco-luxury das Maldivas + Soneva Art & Glass Studio com fornos",
    referenceNumber: "FM42",
    slug: "soneva-fushi",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "Soneva Secret",
    description: "Localizado no remoto Atol Makunudhoo (único resort no atol) no extremo oeste das Maldivas, este ultra-luxury resort pioneiro possui apenas 13 villas auto-suficientes. Cada villa inclui spa privativo, academia, cozinha completa, 2 butlers dedicados e chef privativo. Famoso pelo observatório astronômico único, zipline para restaurante Out of This World e conceito de privacidade absoluta onde você nunca precisa deixar sua villa.",
    image: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2023/09/SONEVA-SECRET-3.jpeg?ssl=1",
    priceFrom: 21600,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Ultra-luxury exclusivo", "Privacidade absoluta", "Sustentabilidade solar", "Observatório astronômico", "Self-contained villas"],
    flightIncluded: "75 min hidroavião",
    uniquePerk: "Mais remoto resort das Maldivas + cada villa com spa/academia/chef privativo",
    referenceNumber: "FM43",
    slug: "soneva-secret",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "The Nautilus Maldives",
    description: "Localizado no Atol Baa (Reserva UNESCO) em ilha privativa com apenas 26 casas bohemian chic, oferece conceito 'Time Stands Still' sem horários ou restrições. Cada casa possui sala de estar separada, piscina privativa e House Master pessoal 24h. Famoso pelo conceito 'anytime, anywhere dining' sem cardápios fixos, spa Solasta com tratamentos personalizados e acesso privilegiado à Baía Hanifaru.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/614216584.jpg?k=03a12c9ecc5926f899347a3999d305607810875c9f394de99ba1e22088b407b4&o=",
    priceFrom: 6720,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Bohemian luxury", "Liberdade total", "House Master pessoal", "Unscripted dining", "Famílias VIP"],
    flightIncluded: "30 min hidroavião",
    uniquePerk: "Conceito 'Time Stands Still' sem horários + 'anytime, anywhere dining' sem cardápios + apenas 26 casas",
    referenceNumber: "FM44",
    slug: "the-nautilus",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "The Ritz-Carlton Maldives, Fari Islands",
    description: "Localizado nas inovadoras Fari Islands no Atol Male Norte criadas pela Pontiac Land, este resort contemporary luxury de 100 villas oferece design circular único inspirado na tradição maldívia. Spa The Ritz-Carlton overwater com 7 salas, restaurante Iwau teppanyaki japonês, Beach Shack casual e Fari Beach Club exclusivo compartilhado com Patina. Conceito sustentável com energia solar e dessalinização própria.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/525123270.jpg?k=3aaab5376411139382e2d673052083c4a56166a248bc9533555e6625bf0ae9d8&o=",
    priceFrom: 5280,
    duration: "4 noites",
    mealPlan: "Café da manhã",
    focusTags: ["Contemporary luxury", "Sustentabilidade", "Famílias sofisticadas", "Design circular inovador", "Fari Beach Club exclusivo"],
    flightIncluded: "50 min speedboat ou 15 min hidroavião",
    uniquePerk: "Arquitetura circular única inspirada tradição maldívia + spa The Ritz-Carlton overwater com 7 salas",
    referenceNumber: "FM45",
    slug: "ritz-carlton-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "Vakkaru Maldives",
    description: "Localizado no Atol Baa (Reserva UNESCO) em ilha natural de 21 hectares com densa vegetação tropical preservada. Resort familiar premium com 125 villas oferece Kids Club Parrotfish, Teen Club Coconut, spa overwater com 9 salas de tratamento e 5 restaurantes diversos. Famoso pelo programa de conservação das tartarugas, piscina adultos infinity de 50m e recife casa exceptionally preserved com acesso direto.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/523372128.jpg?k=cf8342aef0a9bfba0e95197d20a1aa650734261f6f1fd9f9b590ec1b828017d6&o=",
    priceFrom: 2880,
    duration: "4 noites",
    mealPlan: "Meia pensão (café da manhã e jantar)",
    focusTags: ["Familiar premium", "Conservação tartarugas", "Vegetação tropical preservada", "Kids/Teen clubs ativos", "Recife casa pristine"],
    flightIncluded: "30 min hidroavião",
    uniquePerk: "Densa vegetação tropical preservada (única das Maldivas) + programa conservação tartarugas pioneiro",
    referenceNumber: "FM46",
    slug: "vakkaru-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "6 estrelas"
  },
  {
    title: "Velaa Private Island",
    description: "Localizado no Atol Noonu como ilha privativa ultra-exclusiva com apenas 47 villas projetadas por Petr Kolar. Único resort das Maldivas com campo de golfe de 9 buracos par-3, academia Technogym de 750m², spa My Blend by Clarins overwater e helipad próprio. Oferece Michelin-starred chef Adeline Grattard, wine cellar com 20.000 garrafas e experiências personalizadas sem limites para máximo luxury.",
    image: "https://secure.s.forbestravelguide.com/img/properties/velaa-private-island/extra-large/velaa-private-island-bedroom1.jpg",
    priceFrom: 9600,
    duration: "4 noites",
    mealPlan: "Café da manhã",
    focusTags: ["Ultra-luxury privativo", "Golfe exclusivo", "Gastronomia Michelin", "Experiências ilimitadas", "Celebridades"],
    flightIncluded: "45 min hidroavião ou helicopter transfer",
    uniquePerk: "Único campo golfe 9 buracos par-3 das Maldivas + Michelin-starred chef Adeline Grattard",
    referenceNumber: "FM47",
    slug: "velaa-private-island",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "Waldorf Astoria Maldives Ithaafushi",
    description: "Localizado no Atol Male Sul em três ilhas conectadas - uma das maiores propriedades resort das Maldives com 119 villas luxury. Oferece 11 restaurantes world-class incluindo Yasmina libanês, Nava indiano e Tasting Table molecular gastronomy. Spa Waldorf Astoria overwater com 14 salas, campo de tênis iluminado, Academia Technogym e Peacock Alley lounge exclusivo para máximo sophistication.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/670779719.jpg?k=5ebe9d7c7b08575c0e41e1295ce86c6d72cacbded8dc6c3102d9bb5c28339c11&o=",
    priceFrom: 4560,
    duration: "4 noites",
    mealPlan: "Café da manhã",
    focusTags: ["Multi-ilha luxury", "Gastronomia world-class", "Famílias sofisticadas", "Waldorf sophistication", "Diversidade culinária extrema"],
    flightIncluded: "30 min speedboat",
    uniquePerk: "11 restaurantes world-class únicos + três ilhas conectadas",
    referenceNumber: "FM48",
    slug: "waldorf-astoria-maldives",
    destination: "Maldivas",
    validity: "Consulte disponibilidade",
    classification: "7 estrelas"
  },
  {
    title: "You & Me by Cocoon Maldives",
    description: "Localizado no Atol Raa como resort adults-only exclusivo com conceito romantic 'Only Adults, Only Maldives' em ilha de 13 hectares. Oferece 109 villas contemporary com infinity pools privativas, spa Saavyu overwater para casais, 4 restaurantes românticos e Sandbank Dining exclusivo. Programas especiais para lua de mel com 'floating breakfast', sunset fishing e experiências casal personalizadas sob as estrelas.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/471608933.jpg?k=b502f5fc8cf289069b4ce2cc7b4bd948c220348a383665f06f824362a82d22c2&o=",
    priceFrom: 1980,
    duration: "4 noites",
    mealPlan: "All inclusive",
    focusTags: ["Adults-only romântico", "Casais exclusivos", "Lua de mel premium", "Experiências íntimas", "Contemporary design"],
    flightIncluded: "45 min hidroavião",
    uniquePerk: "Conceito 'Only Adults, Only Maldives' + spa Saavyu overwater para casais",
    referenceNumber: "FM49",
    slug: "you-and-me-by-cocoon",
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
