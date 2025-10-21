import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Calendar, Users } from "lucide-react";

const Pricing = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Valores e Formas de Pagamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Condições especiais e flexibilidade para seu pacote dos sonhos
          </p>
        </header>

        <Card className="border-primary/20 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Consulte Valores Personalizados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              Os valores variam de acordo com a temporada, número de noites e configuração da viagem. 
              Entre em contato para um orçamento personalizado.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-foreground">Datas Flexíveis</span>
                <span className="text-xs text-muted-foreground text-center">Melhores tarifas para temporada baixa</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-foreground">Pacotes Personalizados</span>
                <span className="text-xs text-muted-foreground text-center">Adaptamos ao seu perfil</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                <CreditCard className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-foreground">Parcelamento</span>
                <span className="text-xs text-muted-foreground text-center">Condições facilitadas</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90"
              >
                Solicitar Orçamento Personalizado
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted/30 rounded-xl p-6">
          <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Formas de Pagamento
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Parcelamento em até 12x no cartão de crédito</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Transferência bancária com desconto especial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Condições especiais para pagamento antecipado</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Reserva garantida com sinal de 30%</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
