import { Award, Waves, UtensilsCrossed, Users } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Award,
      title: "Melhor Custo-Benefício",
      description: "Resort 4 estrelas all inclusive recém-renovado com excelente relação qualidade-preço nas Maldivas"
    },
    {
      icon: Waves,
      title: "Paraíso para Surfistas",
      description: "Acesso ao famoso surf spot Lohis, com ondas mundialmente reconhecidas e packages exclusivos"
    },
    {
      icon: UtensilsCrossed,
      title: "All Inclusive Completo",
      description: "Todas as refeições, bebidas, snacks, esportes aquáticos e atividades recreativas incluídas"
    },
    {
      icon: Users,
      title: "Ideal para Famílias",
      description: "Kids club gratuito, piscina infantil, playground e ampla variedade de atividades para todas as idades"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Por que escolher o Adaaran Select?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Um dos resorts mais completos das Maldivas, combinando localização privilegiada, infraestrutura moderna e experiências inesquecíveis
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
