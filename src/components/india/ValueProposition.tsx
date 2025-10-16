import { Building2, Utensils, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Patrimônios Históricos",
    description: "Taj Mahal, Red Fort e palácios centenários que contam séculos de história."
  },
  {
    icon: Utensils,
    title: "Culinária Autêntica",
    description: "Sabores únicos e experiências gastronômicas locais que vão além do comum."
  },
  {
    icon: Heart,
    title: "Cultura Espiritual",
    description: "Templos sagrados e sabedoria védica milenar que transformam vidas."
  },
  {
    icon: Users,
    title: "Hospitalidade Local",
    description: "Guias especializados e suporte completo em português durante toda a viagem."
  }
];

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Por que escolher a Índia com a Follow Me?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          A Índia é um destino fascinante, conhecido por sua diversidade, rica história e paisagens deslumbrantes. Com uma mistura única de antiguidade e modernidade, o país oferece experiências inesquecíveis em palácios suntuosos e locais historicamente relevantes. Além disso, a hospitalidade do povo indiano, a riqueza espiritual da sabedoria védica e sua culinária variada tornam cada visita memorável.
        </p>

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
