import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, CreditCard } from "lucide-react";

interface Season {
  name: string;
  period: string;
  priceText: string;
  priceSubtext?: string;
}

interface PricingSectionProps {
  seasons: Season[];
  paymentTerms: string[];
  cancellationPolicy: string;
  notes?: string;
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contato');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const PricingSection = ({ seasons, paymentTerms, cancellationPolicy, notes }: PricingSectionProps) => {
  return (
    <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Valores & Formas de Pagamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Pacotes all inclusive com as melhores condições
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {seasons.map((season, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-shadow duration-300 ${index === 1 ? 'border-primary/50' : ''}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">{season.name}</CardTitle>
                </div>
                <CardDescription>{season.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-foreground mb-2">{season.priceText}</p>
                  {season.priceSubtext && (
                    <p className="text-sm text-muted-foreground">{season.priceSubtext}</p>
                  )}
                </div>
                <Button onClick={scrollToContact} className="w-full mt-6" size="lg">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
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
              {paymentTerms.map((term, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">{index + 1}.</span>
                  <div>
                    <p className="text-foreground/80">{term}</p>
                  </div>
                </div>
              ))}
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
                <p className="text-foreground/80">{cancellationPolicy}</p>
              </div>
              {notes && (
                <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                  <strong className="text-foreground">Importante:</strong> {notes}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
