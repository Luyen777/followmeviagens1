import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, CreditCard, Check } from "lucide-react";

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
    <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 tracking-tight">
            Valores & Formas de Pagamento
          </h2>
          <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground font-light">
            Pacotes all inclusive com as melhores condições
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {seasons.map((season, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 ${index === 1 ? 'border-primary/30 shadow-md' : 'border-border'}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display tracking-tight">{season.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{season.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-foreground mb-2 font-display">{season.priceText}</p>
                  {season.priceSubtext && (
                    <p className="text-sm text-muted-foreground font-light">{season.priceSubtext}</p>
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
          <Card className="shadow-md hover:shadow-luxury transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl font-display tracking-tight">Condições de Pagamento</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentTerms.map((term, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground/80 leading-[1.7] font-light">{term}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-luxury transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl font-display tracking-tight">Política de Cancelamento</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <p className="text-foreground/80 leading-[1.7] font-light">{cancellationPolicy}</p>
              </div>
              {notes && (
                <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border font-light">
                  <strong className="text-foreground font-medium">Importante:</strong> {notes}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Subtle divider line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </section>
  );
};

export default PricingSection;
