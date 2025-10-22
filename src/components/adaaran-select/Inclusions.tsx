import { Check } from "lucide-react";
const Inclusions = () => {
  const inclusions = [{
    category: "Refeições & Bebidas",
    items: ["Café da manhã, almoço e jantar buffet no Banyan Restaurant", "Seleção completa de bebidas alcoólicas e não alcoólicas", "Drinks, cervejas, refrigerantes e sucos nos bares", "Snacks, sorvetes e petiscos ao longo do dia", "Chá da tarde com seleção de quitutes", "Minibar abastecido diariamente (água, cerveja, refrigerante)*"]
  }, {
    category: "Esportes & Atividades",
    items: ["Equipamento completo para snorkeling", "Esportes aquáticos não motorizados (caiaque, windsurf, SUP)", "Bicicletas para explorar toda a ilha", "Tênis, squash, badminton, vôlei, futebol de areia", "Academia e aulas fitness em grupo (yoga, alongamento)", "Piscina adulto e infantil com serviço completo"]
  }, {
    category: "Entretenimento & Serviços",
    items: ["Kids Club e playground completos", "Shows noturnos e música ao vivo", "Eventos culturais semanais temáticos", "Wi-Fi gratuito nas áreas públicas", "Serviço de praia e piscina", "Arrumação diária e turn down service", "Amenities de boas-vindas", "Serviço de concierge"]
  }];
  const notIncluded = ["Transfer de lancha (pago à parte na maioria dos planos)", "Mergulho e esportes motorizados", "Tratamentos de spa", "Excursões e passeios externos", "Jantares especiais em restaurantes à la carte", "Room service 24h", "Bebidas premium e vinhos especiais"];
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            O que está incluído?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Pacote All Inclusive Premium com refeições ilimitadas, bebidas, esportes aquáticos e entretenimento
          </p>
        </div>

        {/* Inclusions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {inclusions.map((section, index) => <div key={index} className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, idx) => <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Not Included */}
        
      </div>
    </section>;
};
export default Inclusions;