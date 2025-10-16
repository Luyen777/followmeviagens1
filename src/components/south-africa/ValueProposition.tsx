import { Palmtree, Mountain, Wine, Hotel } from "lucide-react";

const benefits = [
  {
    icon: Palmtree,
    title: "Big Five Safari",
    description: "Leões, leopardos, elefantes, rinocerontes e búfalos no mundialmente famoso Kruger Park."
  },
  {
    icon: Mountain,
    title: "Cape Town Deslumbrante",
    description: "Table Mountain, praias paradisíacas e vida urbana vibrante na Cidade Mãe."
  },
  {
    icon: Wine,
    title: "Vinícolas Premiadas",
    description: "Degustações em vinhedos mundialmente reconhecidos nas regiões de Stellenbosch e Franschhoek."
  },
  {
    icon: Hotel,
    title: "Hotéis Premium",
    description: "Lodges 5 estrelas no safari e hotéis 4-5 estrelas em Cape Town para máximo conforto."
  }
];

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Por que escolher a África do Sul com a Follow Me?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          A África do Sul é um destino único que oferece uma combinação perfeita de paisagens deslumbrantes, vida selvagem fascinante e uma rica diversidade cultural. Você conhecerá o Kruger Park em safáris emocionantes para ver os famosos "Big Five", explorará a deslumbrante Cape Town, visitará vinícolas premiadas e desfrutará de praias maravilhosas. Além disso, a hospitalidade calorosa dos sul-africanos fará você se sentir em casa.
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
