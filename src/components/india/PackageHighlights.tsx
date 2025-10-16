import { Car, Hotel, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Car,
    title: "Transfers Inclusos",
    description: "Recepção no aeroporto e transfers entre cidades com conforto e segurança."
  },
  {
    icon: Hotel,
    title: "Hotéis Premium",
    description: "Opções 5 e 6 estrelas em Delhi, Jaipur e Agra cuidadosamente selecionadas."
  },
  {
    icon: MapPin,
    title: "Roteiro Personalizado",
    description: "Triângulo Dourado com guias locais especializados e experiências autênticas."
  },
  {
    icon: Phone,
    title: "Suporte 24h",
    description: "Assistência completa em português durante toda a sua viagem pela Índia."
  }
];

const PackageHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Seu roteiro completo de 7 noites inclui:
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
