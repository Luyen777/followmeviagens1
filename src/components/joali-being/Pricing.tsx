import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Valores & Formas de Pagamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Investimento em bem-estar ultraexclusivo com condições flexíveis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="text-center bg-primary/5">
              <CardTitle className="text-2xl md:text-3xl">
                JOALI BEING - Wellness Integral
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Resort 7 estrelas ultraexclusivo no Atol Raa
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Incluído no Pacote Base
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Transfer hidroavião privativo (ida e volta)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Café da manhã earth to table</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Serviço Jadugar (mordomo) 24h</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Consulta inicial Areka Spa</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Crédito diário para spa/wellness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Atividades wellness diárias</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Hidroterapia e workshops Aktar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Esportes aquáticos não motorizados</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-3">Formas de Pagamento</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Parcelamento facilitado em até 10x sem juros no cartão</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Desconto especial para pagamento à vista</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Assessoria completa para reserva e planejamento</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-sm text-center text-muted-foreground mb-4">
                    <strong className="text-foreground">Valores personalizados</strong> conforme categoria de villa, 
                    temporada, número de noites e plano de refeições escolhido (All-Inclusive, Wellness Immersion ou customizado).
                  </p>
                  <p className="text-sm text-center text-muted-foreground">
                    Entre em contato para cotação exclusiva e monte seu pacote ideal de transformação.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="h-14 px-8"
                  >
                    Solicitar Orçamento Personalizado
                  </Button>
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    variant="outline"
                    className="h-14 px-8"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
