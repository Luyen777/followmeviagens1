import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, CreditCard } from "lucide-react";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact-form');
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

const Pricing = () => {
  return (
    <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Valores & Formas de Pagamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Pacotes all inclusive no Adaaran Select Hudhuranfushi
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Baixa Temporada</CardTitle>
              </div>
              <CardDescription>Maio até Novembro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold text-foreground mb-2">Consulte valores</p>
                <p className="text-sm text-muted-foreground">Preço por pessoa</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Noite extra:</strong> Consulte disponibilidade</p>
                <p><strong className="text-foreground">Período:</strong> Consulte datas disponíveis</p>
              </div>
              <Button onClick={scrollToContact} className="w-full mt-6" size="lg">
                Solicitar Orçamento
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Alta Temporada</CardTitle>
              </div>
              <CardDescription>Dezembro até Abril</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold text-foreground mb-2">Consulte valores</p>
                <p className="text-sm text-muted-foreground">Preço por pessoa</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Noite extra:</strong> Consulte disponibilidade</p>
                <p><strong className="text-foreground">Período:</strong> Consulte datas disponíveis</p>
              </div>
              <Button onClick={scrollToContact} className="w-full mt-6" size="lg">
                Solicitar Orçamento
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">Condições de Pagamento</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">1.</span>
                <div>
                  <p className="font-medium text-foreground">Entrada de 20%</p>
                  <p className="text-sm text-muted-foreground">
                    Transferência bancária ao confirmar a reserva
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">2.</span>
                <div>
                  <p className="font-medium text-foreground">80% restante até 30 dias antes da viagem</p>
                  <p className="text-sm text-muted-foreground">
                    Quitação antecipada para garantir sua reserva
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">3.</span>
                <div>
                  <p className="font-medium text-foreground">Parcelamento em até 10x</p>
                  <p className="text-sm text-muted-foreground">
                    Opções flexíveis de pagamento disponíveis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">Política de Cancelamento</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    Cancelamento até 30 dias antes da viagem
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reembolso de 80% do valor pago
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                <strong className="text-foreground">Importante:</strong> Valores sujeitos a alteração 
                conforme disponibilidade e temporada. Entre em contato para cotação atualizada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
