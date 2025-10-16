import { Star, Shield, Users, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Experiência Premium",
    description: "Hotéis cuidadosamente selecionados e experiências autênticas que vão além do turismo comum."
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Acompanhamento 24/7, seguros inclusos e assistência em português durante toda a viagem."
  },
  {
    icon: Users,
    title: "Guias Especializados",
    description: "Profissionais locais com profundo conhecimento da história e cultura indiana."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Roteiro customizado de acordo com seus interesses e necessidades específicas."
  }
];

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
          Por que escolher a Índia com a Follow Me?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-start p-6 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
