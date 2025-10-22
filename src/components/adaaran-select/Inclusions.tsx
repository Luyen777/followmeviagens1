import { Check } from "lucide-react";
const Inclusions = () => {
  const inclusions = [
    "Café da manhã, almoço e jantar buffet no Banyan Restaurant",
    "Seleção de bebidas alcoólicas/não alcoólicas nos bares selecionados (inclusive drinks, cervejas, refrigerantes e sucos)",
    "Snacks, sorvetes, petiscos e chá da tarde",
    "Minibar abastecido diariamente (água, cerveja, refrigerante; algumas tarifas)",
    "Equipamento para snorkeling e esportes não motorizados (caiaque, windsurf, SUP)",
    "Bicicletas para explorar a ilha",
    "Atividades recreativas: tênis, squash, badminton, vôlei, futebol de areia, tênis de mesa",
    "Academia e aulas fitness em grupo (yoga, alongamento)",
    "Kids club & playground para crianças",
    "Piscina central (adulto e infantil), serviço de praia/piscina",
    "Wi-Fi gratuito nas áreas públicas",
    "Show noturno, música ao vivo e eventos culturais semanais",
    "Arrumação diária/turn down, amenities de boas-vindas",
    "Traslado de lancha regular (pago à parte em maioria dos planos)",
    "Serviço de concierge para excursões e reservas"
  ];
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

        {/* Inclusions List */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl p-8 border border-border">
            <ul className="grid md:grid-cols-2 gap-4">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default Inclusions;