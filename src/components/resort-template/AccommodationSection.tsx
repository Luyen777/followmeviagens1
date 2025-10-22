import { Bed, Home, Users } from "lucide-react";

interface AccommodationType {
  name: string;
  size: string;
  beds: string;
  maxOccupancy: string;
  features: string[];
}

interface AccommodationSectionProps {
  title: string;
  description: string;
  types: AccommodationType[];
}

const AccommodationSection = ({ title, description, types }: AccommodationSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {types.map((type, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{type.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/60">Tamanho</p>
                    <p className="font-semibold text-foreground">{type.size}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bed className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/60">Camas</p>
                    <p className="font-semibold text-foreground">{type.beds}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6 pb-6 border-b border-border">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60">Ocupação Máxima</p>
                  <p className="font-semibold text-foreground">{type.maxOccupancy}</p>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-3">Comodidades:</h4>
              <ul className="space-y-2">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
