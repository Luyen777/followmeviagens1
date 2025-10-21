import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Wine, Sparkles } from "lucide-react";

const DiningExperiences = () => {
  const restaurants = [
    {
      name: "The Citronelle Club",
      cuisine: "Fusão Pan-Asiática",
      description: "Ambiente zen frente à praia com design asiático. Cozinha aberta com woks e pratos como bacalhau enegrecido e costelas de cordeiro agridoce. Extensa oferta de dim sum e pratos leves como spring rolls de rúcula.",
      icon: UtensilsCrossed,
    },
    {
      name: "Lazuli Beach Club",
      cuisine: "Mediterrâneo & Saudável",
      description: "Ambiente de beach club sofisticado com charme da Côte d'Azur. Pratos como robalo grelhado, molho de pepino e espetadas de vegetais. Churrascos temáticos, pop-ups e festas de paella. Cocktails vibrantes pensados para compartilhar.",
      icon: Wine,
    },
    {
      name: "Hadaba",
      cuisine: "Culinária Levantina (Assinatura)",
      description: "Localizado na ponta costeira do resort em dois andares. Especialidades do Golfo da Arábia ao Mediterrâneo. Pão Laffa fresco assado no 'Saj' personalizado. Especiais diários de ceviche e icônico Cordeiro Shawarma de cozimento lento.",
      icon: Sparkles,
    },
  ];

  const specialExperiences = [
    "Floating Breakfast - Café da manhã flutuante na piscina privada",
    "Private Dining - Jantar privado romântico à luz de velas",
    "In-Room Dining - Serviço de quarto gourmet",
    "Carrinho de cocktails - Preparação de drinks tableside no Hadaba",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Gastronomia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três restaurantes assinatura com proposta gastronômica diversificada
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {restaurants.map((restaurant, index) => {
            const Icon = restaurant.icon;
            return (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Icon className="w-5 h-5 text-primary" />
                    {restaurant.name}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium">{restaurant.cuisine}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {restaurant.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-primary text-white">
          <CardHeader>
            <CardTitle className="text-center text-white">
              Experiências Gastronômicas Especiais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-white">
              {specialExperiences.map((experience, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1">✦</span>
                  <span>{experience}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DiningExperiences;
