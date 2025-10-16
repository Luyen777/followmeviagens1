import { Plane, Hotel, Utensils, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Plane,
    title: "Voos e Transfers",
    description: "Passagens aéreas e todos os transfers terrestres inclusos com conforto e pontualidade."
  },
  {
    icon: Hotel,
    title: "Hospedagem Premium",
    description: "Hotéis 4-5 estrelas nos melhores locais, café da manhã incluído em todos os dias."
  },
  {
    icon: Utensils,
    title: "Experiências Gastronômicas",
    description: "Refeições típicas selecionadas e experiências culinárias autênticas da culinária indiana."
  },
  {
    icon: MapPin,
    title: "Roteiro Completo",
    description: "Visitas guiadas aos principais pontos turísticos do Triângulo Dourado e templos sagrados."
  }
];

const PackageHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          O que está incluído no seu pacote
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tudo planejado para você aproveitar cada momento sem preocupações
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-background"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-primary/10">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageHighlights;
