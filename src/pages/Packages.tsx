import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageListItem from "@/components/PackageListItem";

const packagesData = [
  {
    id: 1,
    title: "Ilhas Maldivas: Pullman Maldives Maamutaa",
    description: "Resort moderno com excelente infraestrutura, perfeito para famílias e casais que buscam conforto e variedade de atividades aquáticas.",
    image: "/src/assets/resort-1.jpg",
    duration: "7 dias / 6 noites",
    destination: "Atol de Gaafu Alifu",
    flightIncluded: "1h de hidroavião",
    validity: "01/11/2025 a 30/04/2026",
    departures: "diárias",
    mealPlan: "All Inclusive",
    referenceNumber: "FM01",
    priceFrom: 3850,
    focusTags: ["Família", "Mergulho"],
    uniquePerk: "Upgrade garantido para villa sobre a água",
  },
  {
    id: 2,
    title: "Ilhas Maldivas: Anantara Kihavah Villas",
    description: "Resort ultra-luxuoso com villas exclusivas, restaurante subaquático e spa premiado. Experiência sofisticada em um dos atolóis mais preservados.",
    image: "/src/assets/resort-2.jpg",
    duration: "8 dias / 7 noites",
    destination: "Atol de Baa",
    flightIncluded: "35 min de hidroavião",
    validity: "15/10/2025 a 20/12/2025",
    departures: "diárias",
    mealPlan: "Café da Manhã",
    referenceNumber: "FM02",
    priceFrom: 5200,
    focusTags: ["Lua de Mel", "Luxo"],
    uniquePerk: "Jantar no restaurante subaquático SEA incluso",
  },
  {
    id: 3,
    title: "Ilhas Maldivas: Conrad Maldives Rangali Island",
    description: "Resort icônico com o primeiro restaurante totalmente submerso do mundo. Duas ilhas conectadas por uma ponte, oferecendo máxima privacidade.",
    image: "/src/assets/resort-3.jpg",
    duration: "6 dias / 5 noites",
    destination: "Atol de Ari Sul",
    flightIncluded: "30 min de hidroavião",
    validity: "01/12/2025 a 31/03/2026",
    departures: "diárias",
    mealPlan: "Meia Pensão",
    referenceNumber: "FM03",
    priceFrom: 4680,
    focusTags: ["Lua de Mel", "Gastronomia"],
    uniquePerk: "Café da manhã flutuante para casal",
  },
  {
    id: 4,
    title: "Ilhas Maldivas: Six Senses Laamu",
    description: "Resort eco-luxo focado em sustentabilidade e bem-estar. Spa excepcional, experiências holísticas e localização remota para máximo relaxamento.",
    image: "/src/assets/resort-1.jpg",
    duration: "9 dias / 8 noites",
    destination: "Atol de Laamu",
    flightIncluded: "45 min de voo doméstico + 10 min de lancha",
    validity: "01/11/2025 a 15/04/2026",
    departures: "diárias",
    mealPlan: "All Inclusive",
    referenceNumber: "FM04",
    priceFrom: 6120,
    focusTags: ["Bem-estar", "Sustentabilidade"],
    uniquePerk: "Massagem para casal de 60min inclusa",
  },
  {
    id: 5,
    title: "Ilhas Maldivas: COMO Cocoa Island",
    description: "Resort boutique minimalista com design elegante. Villas sobre a água em formato de barcos tradicionais dhoni, perfeito para casais.",
    image: "/src/assets/resort-2.jpg",
    duration: "7 dias / 6 noites",
    destination: "Atol de Malé Sul",
    flightIncluded: "40 min de lancha rápida",
    validity: "10/11/2025 a 25/03/2026",
    departures: "diárias",
    mealPlan: "Café da Manhã",
    referenceNumber: "FM05",
    priceFrom: 4250,
    focusTags: ["Lua de Mel", "Design"],
    uniquePerk: "Experiência de mergulho livre guiado inclusa",
  },
  {
    id: 6,
    title: "Ilhas Maldivas: Soneva Fushi",
    description: "O original resort barefoot luxury. Villas espaçosas na praia, cinema ao ar livre, observatório astronômico e experiências gastronômicas únicas.",
    image: "/src/assets/resort-3.jpg",
    duration: "10 dias / 9 noites",
    destination: "Atol de Baa",
    flightIncluded: "30 min de hidroavião",
    validity: "01/10/2025 a 30/04/2026",
    departures: "diárias",
    mealPlan: "Pensão Completa",
    referenceNumber: "FM06",
    priceFrom: 7890,
    focusTags: ["Família", "Luxo", "Gastronomia"],
    uniquePerk: "Jantar privativo sob as estrelas com astrônomo",
  },
  {
    id: 7,
    title: "Ilhas Maldivas: Baros Maldives",
    description: "Resort clássico e romântico, próximo ao aeroporto. Ideal para lua de mel, com villas charmosas e recife de corais espetacular.",
    image: "/src/assets/resort-1.jpg",
    duration: "5 dias / 4 noites",
    destination: "Atol de Malé Norte",
    flightIncluded: "25 min de lancha rápida",
    validity: "15/11/2025 a 20/12/2025",
    departures: "diárias",
    mealPlan: "All Inclusive",
    referenceNumber: "FM07",
    priceFrom: 3120,
    focusTags: ["Lua de Mel", "Mergulho"],
    uniquePerk: "Renovação de votos na praia inclusa",
  },
  {
    id: 8,
    title: "Ilhas Maldivas: Velaa Private Island",
    description: "Resort ultra-exclusivo com serviço impecável. Campo de golfe, spa sobre a água e beach club privativo. O ápice do luxo nas Maldivas.",
    image: "/src/assets/resort-2.jpg",
    duration: "8 dias / 7 noites",
    destination: "Atol de Noonu",
    flightIncluded: "45 min de hidroavião",
    validity: "01/12/2025 a 31/03/2026",
    departures: "diárias",
    mealPlan: "Pensão Completa",
    referenceNumber: "FM08",
    priceFrom: 9500,
    focusTags: ["Luxo Premium", "Exclusividade"],
    uniquePerk: "Mordomo pessoal 24h e transfer privativo de helicóptero",
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground mb-6 tracking-tight">
            Pacotes de Viagem para as Ilhas Maldivas
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Descubra os melhores pacotes para as Ilhas Maldivas com uma variedade de resorts de luxo, 
            experiências exclusivas e opções personalizadas para sua viagem dos sonhos no paraíso tropical.
          </p>

          {/* Sorting Dropdown (Placeholder) */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-2xl px-6 py-3 cursor-pointer hover:shadow-md transition-all duration-300">
            <span className="text-sm text-foreground font-medium tracking-luxury">
              Ordem de Exibição
            </span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Packages List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {packagesData.map((pkg) => (
            <PackageListItem key={pkg.id} {...pkg} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
