import { Check, X } from "lucide-react";

const included = [
  "7 noites de hospedagem (Kapama River Lodge 5⭐ + Radisson Red 4⭐)",
  "Café da manhã diário em todos os hotéis",
  "4 safáris no Kruger Park com guia especializado",
  "Transfers aeroporto-hotel-aeroporto",
  "Transfer Johannesburg-Kruger-Cape Town",
  "Voo doméstico Kruger-Cape Town",
  "City tour em Cape Town",
  "Tour das vinícolas com degustação",
  "Suporte 24h em português"
];

const notIncluded = [
  "Passagem aérea internacional Brasil-África do Sul",
  "Visto de entrada (brasileiros não precisam para turismo até 90 dias)",
  "Seguro de viagem (recomendamos e orientamos)",
  "Refeições além do café da manhã",
  "Bebidas alcoólicas e despesas pessoais",
  "Atividades opcionais não mencionadas",
  "Gorjetas para guias e motoristas",
  "Check-in/check-out fora dos horários padrão"
];

const Inclusions = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          O que está incluído no seu pacote
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transparência total sobre o que está e não está incluído
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Included Section */}
          <div className="bg-card border-2 border-green-500/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-green-500/10">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                Incluído
              </h3>
            </div>
            
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included Section */}
          <div className="bg-card border-2 border-orange-500/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-orange-500/10">
                <X className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                Não Incluído
              </h3>
            </div>
            
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-foreground font-semibold mb-2">
              Valores personalizados conforme data da viagem e número de pessoas
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              *Preços não válidos para períodos de grandes eventos e feriados
            </p>
            <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
              "Melhor custo-benefício para África do Sul que encontrei!" - Cliente satisfeito
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inclusions;
