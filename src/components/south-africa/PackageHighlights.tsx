import { Binoculars, Car, Hotel, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Binoculars,
    title: "Safari Kruger Park",
    description: "2 safáris diários com guias especializados em busca dos Big Five e vida selvagem africana."
  },
  {
    icon: Car,
    title: "Transfers Inclusos",
    description: "Johannesburg, Kruger Park e Cape Town com transporte confortável e seguro."
  },
  {
    icon: Hotel,
    title: "Hotéis Selecionados",
    description: "Kapama River Lodge 5⭐ no safari + Radisson Red 4⭐ em Cape Town."
  },
  {
    icon: Phone,
    title: "Suporte Completo",
    description: "Assistência 24h em português durante toda a sua aventura africana."
  }
];

const PackageHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Sua aventura completa de 7 noites inclui:
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experiência completa combinando safári selvagem e sofisticação urbana
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
