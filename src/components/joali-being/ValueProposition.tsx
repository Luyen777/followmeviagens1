import { Award, Heart, Leaf, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const values = [
    {
      icon: Heart,
      title: "Bem-Estar Integral",
      description: "Transformação corpo-mente-alma através de experiências wellness personalizadas e arquitetura biophilic integrada à natureza"
    },
    {
      icon: Sparkles,
      title: "Serviço Jadugar",
      description: "Mordomo personalizado 24h por villa, antecipando cada necessidade com discrição e expertise"
    },
    {
      icon: Award,
      title: "Forbes 5-Star & MICHELIN Keys",
      description: "Referência mundial em wellness de altíssimo padrão, aberto em 2021 como resort ultraexclusivo"
    },
    {
      icon: Leaf,
      title: "Earth to Table",
      description: "Gastronomia sustentável, balanceada e criativa com ingredientes frescos e cardápios personalizados"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Por Que Escolher JOALI BEING?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resort 7 estrelas ultraexclusivo focado em transformação e bem-estar, com apenas 68 villas no Atol Raa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
