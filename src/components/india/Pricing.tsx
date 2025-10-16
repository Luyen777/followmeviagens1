import { Check, Star, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPeriods = [
  {
    period: "Até 30 de Setembro de 2025",
    icon: Calendar,
    options: [
      {
        tier: "Opção A",
        stars: 5,
        price: "1.400",
        description: "Hotéis 5 estrelas selecionados"
      },
      {
        tier: "Opção B",
        stars: 6,
        price: "2.025",
        description: "Hotéis 6 estrelas premium",
        featured: true
      }
    ]
  },
  {
    period: "01 de Outubro de 2025 a 31 de Março de 2026",
    icon: Calendar,
    options: [
      {
        tier: "Opção A",
        stars: 5,
        price: "1.995",
        description: "Hotéis 5 estrelas selecionados"
      },
      {
        tier: "Opção B",
        stars: 6,
        price: "3.505",
        description: "Hotéis 6 estrelas premium",
        featured: true
      }
    ]
  }
];

const Pricing = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Qual o valor do pacote?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha entre hotéis 5 ou 6 estrelas conforme sua preferência e período de viagem
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {pricingPeriods.map((period, periodIndex) => (
            <div key={periodIndex} className="animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-8">
                <period.icon className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-display font-bold text-foreground text-center">
                  {period.period}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {period.options.map((option, optionIndex) => (
                  <Card 
                    key={optionIndex}
                    className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardContent className="p-8 text-center">
                      <h4 className="text-xl font-display font-bold text-foreground mb-2">
                        {option.tier}
                      </h4>
                      
                      <div className="flex items-center justify-center gap-1 mb-4">
                        {[...Array(option.stars)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground mb-6">
                        {option.description}
                      </p>

                      <div className="mb-6">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-5xl font-bold text-primary">
                            ${option.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          dólares por pessoa
                        </p>
                      </div>

                      <ul className="space-y-3 mb-6 text-left">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            7 noites de hospedagem
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Todos os transfers inclusos
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Guias especializados
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Café da manhã diário
                          </span>
                        </li>
                      </ul>

                      <Button 
                        onClick={scrollToContact}
                        className="w-full"
                      >
                        Solicitar Orçamento
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            *Valores não são válidos para períodos de grandes eventos e feriados
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
