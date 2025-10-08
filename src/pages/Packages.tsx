import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageListItem from "@/components/PackageListItem";

const packagesData = [
  {
    id: 1,
    title: "Ilhas Maldivas: Pullman Maldives Maamutaa",
    image: "/src/assets/resort-1.jpg",
    duration: "7 dias / 6 noites",
    destination: "Atol de Gaafu Alifu",
    flightIncluded: "conforme itens inclusos",
    validity: "01/11/2025 a 30/04/2026",
    departures: "diárias",
    mealPlan: "All Inclusive",
    referenceNumber: "MALD-2501",
    priceFrom: 3850,
  },
  {
    id: 2,
    title: "Ilhas Maldivas: Anantara Kihavah Villas",
    image: "/src/assets/resort-2.jpg",
    duration: "8 dias / 7 noites",
    destination: "Atol de Baa",
    flightIncluded: "não inclusa",
    validity: "15/10/2025 a 20/12/2025",
    departures: "diárias",
    mealPlan: "Café da Manhã",
    referenceNumber: "MALD-2502",
    priceFrom: 5200,
  },
  {
    id: 3,
    title: "Ilhas Maldivas: Conrad Maldives Rangali Island",
    image: "/src/assets/resort-3.jpg",
    duration: "6 dias / 5 noites",
    destination: "Atol de Ari Sul",
    flightIncluded: "conforme itens inclusos",
    validity: "01/12/2025 a 31/03/2026",
    departures: "diárias",
    mealPlan: "Meia Pensão",
    referenceNumber: "MALD-2503",
    priceFrom: 4680,
  },
  {
    id: 4,
    title: "Ilhas Maldivas: Six Senses Laamu",
    image: "/src/assets/resort-1.jpg",
    duration: "9 dias / 8 noites",
    destination: "Atol de Laamu",
    flightIncluded: "conforme itens inclusos",
    validity: "01/11/2025 a 15/04/2026",
    departures: "diárias",
    mealPlan: "All Inclusive",
    referenceNumber: "MALD-2504",
    priceFrom: 6120,
  },
  {
    id: 5,
    title: "Ilhas Maldivas: COMO Cocoa Island",
    image: "/src/assets/resort-2.jpg",
    duration: "7 dias / 6 noites",
    destination: "Atol de Malé Sul",
    flightIncluded: "não inclusa",
    validity: "10/11/2025 a 25/03/2026",
    departures: "diárias",
    mealPlan: "Café da Manhã",
    referenceNumber: "MALD-2505",
    priceFrom: 4250,
  },
  {
    id: 6,
    title: "Ilhas Maldivas: Soneva Fushi",
    image: "/src/assets/resort-3.jpg",
    duration: "10 dias / 9 noites",
    destination: "Atol de Baa",
    flightIncluded: "conforme itens inclusos",
    validity: "01/10/2025 a 30/04/2026",
    departures: "diárias",
    mealPlan: "Pensão Completa",
    referenceNumber: "MALD-2506",
    priceFrom: 7890,
  },
  {
    id: 7,
    title: "Ilhas Maldivas: Baros Maldives",
    image: "/src/assets/resort-1.jpg",
    duration: "5 dias / 4 noites",
    destination: "Atol de Malé Norte",
    flightIncluded: "não inclusa",
    validity: "15/11/2025 a 20/12/2025",
    departures: "diárias",
    mealPlan: "All Inclusive",
    referenceNumber: "MALD-2507",
    priceFrom: 3120,
  },
  {
    id: 8,
    title: "Ilhas Maldivas: Velaa Private Island",
    image: "/src/assets/resort-2.jpg",
    duration: "8 dias / 7 noites",
    destination: "Atol de Noonu",
    flightIncluded: "conforme itens inclusos",
    validity: "01/12/2025 a 31/03/2026",
    departures: "diárias",
    mealPlan: "Pensão Completa",
    referenceNumber: "MALD-2508",
    priceFrom: 9500,
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
