import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };

  const packages = [
    {
      name: "Beach Villa",
      duration: "5 noites",
      description: "Perfeito para famílias e casais que buscam conforto com acesso direto à praia",
      features: [
        "5 noites em Beach Villa",
        "All Inclusive Premium",
        "Transfer de lancha regular",
        "Todas as atividades gratuitas incluídas",
        "Wi-Fi gratuito",
        "Kids Club sem custo"
      ],
      highlight: false
    },
    {
      name: "Ocean Villa",
      duration: "7 noites",
      description: "Exclusivo para adultos com deck sobre a água e máxima privacidade",
      features: [
        "7 noites em Ocean Villa",
        "All Inclusive Premium",
        "Transfer de lancha rápida",
        "Acesso direto ao mar",
        "Serviço personalizado",
        "Vista sunrise ou sunset",
        "Ideal para surfistas (próximo ao Lohis)"
      ],
      highlight: true,
      badge: "Mais Popular"
    },
    {
      name: "Pacote Família",
      duration: "7 noites",
      description: "Configuração especial para famílias com crianças e adolescentes",
      features: [
        "7 noites em Beach Villa",
        "All Inclusive Premium para toda família",
        "Transfer de lancha incluso",
        "Kids Club e playground",
        "Atividades recreativas ilimitadas",
        "Amenidades especiais para crianças"
      ],
      highlight: false
    }
  ];

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Pacotes & Investimento
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Excelente custo-benefício para experiência all inclusive completa nas Maldivas. Consulte valores e disponibilidade.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 border-2 transition-all duration-300 relative ${
                pkg.highlight 
                  ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                  : 'border-border bg-background hover:border-primary/50'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-primary font-semibold text-lg mb-3">
                  {pkg.duration}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={handleWhatsAppClick}
                className={`w-full ${
                  pkg.highlight 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-foreground hover:bg-foreground/90'
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-muted/30 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Formas de Pagamento Flexíveis
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Oferecemos condições especiais de pagamento parcelado e descontos para reservas antecipadas. 
              Entre em contato com nossos especialistas para montar o pacote perfeito para você.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Parcelamento sem juros</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Desconto à vista</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
