import { UtensilsCrossed, Wine, Coffee } from "lucide-react";

const DiningExperiences = () => {
  const restaurants = [
    {
      name: "Banyan Restaurant",
      type: "Buffet Internacional",
      description: "Restaurante principal com buffet variado servindo café da manhã, almoço e jantar. Culinária internacional com opções locais maldivinas.",
      included: true
    },
    {
      name: "Sunset Restaurant",
      type: "Sobre a Água",
      description: "Restaurante overwater especializado em frutos do mar frescos e jantares especiais românticos com vista para o pôr do sol.",
      included: false
    },
    {
      name: "Lohis Wave",
      type: "Bar do Surf",
      description: "Ambiente descontraído junto ao surf spot, servindo drinks tropicais, cervejas geladas e snacks durante todo o dia.",
      included: true
    },
    {
      name: "Hiyala Bar",
      type: "Bar Principal",
      description: "Bar central junto à piscina, aberto 24 horas com ampla seleção de drinks, coquetéis e bebidas premium.",
      included: true
    },
    {
      name: "Beach Bar",
      type: "Bar na Praia",
      description: "Lanches, petiscos e drinks tropicais servidos à beira-mar com vista para as águas cristalinas.",
      included: true
    }
  ];

  const features = [
    "Temas semanais: noites maldivinas, seafood BBQ, noites asiáticas",
    "Jantares privados na praia sob consulta",
    "Room service 24h disponível (custo adicional)",
    "Snacks, sorvetes e chá da tarde incluídos",
    "Seleção completa de bebidas alcoólicas e não alcoólicas",
    "Opções para dietas especiais sob solicitação",
    "Minibar abastecido diariamente (em tarifas selecionadas)"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Gastronomia All Inclusive
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Experiências gastronômicas variadas com culinária internacional, pratos maldivinos autênticos e frutos do mar frescos
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {restaurants.map((restaurant, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {restaurant.name}
                    </h3>
                    <p className="text-sm text-foreground/60">{restaurant.type}</p>
                  </div>
                </div>
                {restaurant.included && (
                  <span className="px-3 py-1 bg-green-500/10 text-green-700 text-xs font-semibold rounded-full">
                    Incluído
                  </span>
                )}
              </div>
              <p className="text-foreground/70 leading-relaxed">
                {restaurant.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Wine className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Experiências Gastronômicas Especiais
            </h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DiningExperiences;
