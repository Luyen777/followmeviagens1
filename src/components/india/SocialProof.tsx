import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "A viagem para a Índia foi simplesmente mágica! A organização da Follow Me foi impecável, os guias eram extremamente conhecedores e os hotéis superaram nossas expectativas. O Taj Mahal ao pôr do sol foi inesquecível!",
    date: "Outubro 2024"
  },
  {
    name: "Carlos e Ana Santos",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Experiência incrível do início ao fim. O roteiro foi perfeito, equilibrando cultura, história e momentos de relaxamento. A equipe estava sempre disponível e nos sentimos seguros o tempo todo. Recomendamos muito!",
    date: "Setembro 2024"
  },
  {
    name: "Roberto Oliveira",
    location: "Brasília, DF",
    rating: 5,
    text: "Supera qualquer expectativa! Os hotéis eram luxuosos, as experiências autênticas e a atenção aos detalhes impressionante. Valeu cada centavo investido. Já estamos planejando a próxima viagem com a Follow Me.",
    date: "Agosto 2024"
  }
];

const SocialProof = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-semibold text-foreground">5.0</span>
          </div>
          <p className="text-muted-foreground">
            Baseado em mais de 500 avaliações verificadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in bg-background"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          <div className="p-6">
            <p className="text-4xl font-bold text-primary mb-2">5000+</p>
            <p className="text-muted-foreground">Clientes Satisfeitos</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-primary mb-2">15</p>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Taxa de Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
