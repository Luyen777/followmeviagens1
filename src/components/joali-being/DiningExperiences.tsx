import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, UtensilsCrossed, Wine, Leaf } from "lucide-react";

const DiningExperiences = () => {
  const restaurants = [
    {
      icon: Coffee,
      name: "FLOW",
      cuisine: "Earth to Table",
      description: "Restaurante principal com menu balanceado, saudável e criativo. Café da manhã, almoço e jantar com ingredientes frescos e sustentáveis.",
      highlights: ["Café da manhã em sala privativa", "Menu wellness personalizado", "Ingredientes locais e orgânicos"]
    },
    {
      icon: UtensilsCrossed,
      name: "MOJO",
      cuisine: "Beach Club Mediterrâneo",
      description: "À beira-mar com cozinha mediterrânea, frutos do mar premium e drinks wellness. Ambiente descontraído com vista paradisíaca.",
      highlights: ["Frutos do mar frescos", "Drinks wellness signatures", "Sunset dining experience"]
    },
    {
      icon: Leaf,
      name: "Su",
      cuisine: "Restaurante Asiático",
      description: "Especialidades asiáticas de alta gastronomia com toque contemporâneo e apresentação artística.",
      highlights: ["Culinária asiática refinada", "Menu degustação", "Harmonizações exclusivas"]
    },
    {
      icon: Wine,
      name: "Experiências Privativas",
      cuisine: "Jantares Exclusivos",
      description: "Chef's table, sala privada, floating breakfast, sandbank dinner, degustações de vinhos raros e experiências gastronômicas customizadas.",
      highlights: ["Jantares temáticos", "Plant-based menu", "Room service 24h premium"]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Gastronomia Earth to Table
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Culinária sustentável, balanceada e criativa com cardápios personalizados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <restaurant.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                    <CardDescription>{restaurant.cuisine}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  {restaurant.description}
                </p>
                <div className="space-y-2">
                  {restaurant.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Aktar Bar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Bar especializado em infusões, tisanes e elixires naturais com propriedades wellness.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Chás medicinais personalizados</li>
                <li>• Elixires e tônicos funcionais</li>
                <li>• Consulta com especialistas Aktar</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Diferenciais Gastronômicos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Cardápios conforme diagnóstico wellness</li>
                <li>• Opções plant-based e detox</li>
                <li>• Bebidas premium inclusas nos planos</li>
                <li>• Experiências gastronômicas privativas</li>
                <li>• Harmonizações de vinhos exclusivas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiningExperiences;
