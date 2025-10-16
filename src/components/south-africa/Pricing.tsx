import { Check, DollarSign, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
            Investimento na sua aventura
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experiência completa incluindo safari no Kruger Park e Cape Town
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative hover:shadow-2xl transition-all duration-300 border-2 border-primary animate-fade-in">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Pacote Completo
            </div>
            
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-bold text-primary">
                        5.180
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground mt-2">
                      dólares por pessoa
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 text-center">
                  O que está incluído:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      7 noites de hospedagem premium
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      4 safáris no Kruger Park
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Kapama River Lodge 5 estrelas
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Radisson Red 4 estrelas Cape Town
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Todos os transfers inclusos
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Voo doméstico Kruger-Cape Town
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      City tour Cape Town
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Tour vinícolas com degustação
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Café da manhã diário
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Suporte 24h em português
                    </span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={scrollToContact}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg"
              >
                Solicitar Orçamento Detalhado
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground italic">
                  *Valores não são válidos para períodos de grandes eventos e feriados
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Parcelamento disponível em até 10x sem juros
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-foreground font-semibold mb-2">
              💰 Melhor custo-benefício
            </p>
            <p className="text-sm text-muted-foreground">
              "Melhor preço que encontrei para África do Sul com essa qualidade de hotéis e experiências incluídas!" - Cliente satisfeito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
