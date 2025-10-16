import { Building2, Star, TreePine, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const hotels = [
  {
    name: "Kapama River Lodge",
    location: "Kruger Park",
    stars: 5,
    icon: TreePine,
    features: [
      "Lodge de luxo no coração da reserva privada",
      "Quartos com vista para o rio e vida selvagem",
      "Restaurante gourmet e bar panorâmico",
      "Piscina com vista da savana africana",
      "Spa e atividades de relaxamento"
    ]
  },
  {
    name: "Radisson Red",
    location: "Cape Town",
    stars: 4,
    icon: MapPin,
    features: [
      "Hotel moderno no centro de Cape Town",
      "Quartos contemporâneos com vista da cidade",
      "Rooftop bar com vista da Table Mountain",
      "Localização privilegiada próxima às atrações",
      "Design inovador e amenidades premium"
    ]
  }
];

const HotelShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Hotéis premium selecionados para sua aventura
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Do lodge 5 estrelas no safari ao hotel moderno em Cape Town
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hotels.map((hotel, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card border-2"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 rounded-full bg-primary/10">
                    <hotel.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {hotel.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-semibold">
                    {hotel.location}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {hotel.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelShowcase;
