import { Building2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const hotels = [
  {
    city: "Delhi",
    title: "Hotéis 5 e 6 estrelas no coração da capital indiana",
    description: "Acomodações luxuosas em Delhi combinando conforto moderno com hospitalidade indiana. Localizações estratégicas para fácil acesso aos principais pontos turísticos."
  },
  {
    city: "Jaipur",
    title: "Acomodações de luxo na majestosa Cidade Rosa",
    description: "Experimente o luxo dos hotéis heritage em Jaipur, onde história e conforto se encontram. Alguns hotéis são palácios convertidos que mantêm o charme real rajasthani."
  },
  {
    city: "Agra",
    title: "Hotéis premium próximos ao Taj Mahal",
    description: "Fique em hotéis selecionados com vistas privilegiadas ou proximidade ao Taj Mahal. Conforto 5 estrelas para relaxar após explorar os monumentos históricos de Agra."
  }
];

const HotelShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Hotéis premium durante sua estadia
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selecionamos os melhores hotéis 5 e 6 estrelas em cada cidade para garantir máximo conforto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hotels.map((hotel, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card border-2"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  {hotel.city}
                </h3>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {hotel.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hotel.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelShowcase;
