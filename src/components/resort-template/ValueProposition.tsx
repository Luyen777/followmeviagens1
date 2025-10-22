import { DollarSign, Waves, UtensilsCrossed, Users, LucideIcon } from "lucide-react";

interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

interface ValuePropositionProps {
  items: ValueProp[];
}

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Waves,
  UtensilsCrossed,
  Users,
};

const ValueProposition = ({ items }: ValuePropositionProps) => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Por que escolher este resort?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Uma experiência completa nas Maldivas com o melhor custo-benefício
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="bg-background rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {Icon && <Icon className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
