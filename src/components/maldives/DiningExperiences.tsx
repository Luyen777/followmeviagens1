import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Wine, IceCream } from "lucide-react";

const restaurants = [
  {
    name: "Café Umi",
    description: "Restaurante durante todo o dia com influência japonesa e experiência teppanyaki interativa",
    icon: UtensilsCrossed,
  },
  {
    name: "Fish Market",
    description: "Conceito 'do oceano ao prato' onde você escolhe frutos do mar frescos preparados na hora",
    icon: UtensilsCrossed,
  },
  {
    name: "The Lighthouse",
    description: "Especialidades mediterrâneas com vistas panorâmicas do oceano",
    icon: UtensilsCrossed,
  },
  {
    name: "The Collective",
    description: "Pizzas artesanais preparadas em forno à lenha com ingredientes premium",
    icon: UtensilsCrossed,
  },
  {
    name: "The Retreat",
    description: "Santuário exclusivo para adultos com vistas privilegiadas da lagoa",
    icon: UtensilsCrossed,
  },
];

const bars = [
  {
    name: "Sunset Bar",
    description: "Cocktails exclusivos com vista para o pôr do sol tropical",
    icon: Wine,
  },
  {
    name: "Pool Bar",
    description: "Bebidas refrescantes à beira da piscina durante todo o dia",
    icon: Wine,
  },
  {
    name: "Gelato Bar",
    description: "Sorvetes artesanais italianos com sabores tropicais",
    icon: IceCream,
  },
];

const DiningExperiences = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Gastronomia de Excelência
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            5 restaurantes gourmet e 3 bares para experiências culinárias memoráveis
          </p>
        </header>

        <div className="mb-16">
          <h3 className="text-2xl font-display font-light text-foreground mb-8 text-center">
            Restaurantes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => {
              const Icon = restaurant.icon;
              return (
                <Card key={restaurant.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {restaurant.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-light text-foreground mb-8 text-center">
            Bares
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bars.map((bar) => {
              const Icon = bar.icon;
              return (
                <Card key={bar.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{bar.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {bar.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningExperiences;
