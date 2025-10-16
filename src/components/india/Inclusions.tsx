import { Check, X } from "lucide-react";

const included = [
  "Acomodação em hotéis 5 e 6 estrelas",
  "Café da manhã diário",
  "Transfers aeroporto-hotel-aeroporto",
  "Transporte entre as cidades",
  "Guias locais especializados",
  "Recepção e assistência durante toda a viagem",
  "Suporte 24h em português"
];

const notIncluded = [
  "Passagens aéreas internacionais",
  "Visto para a Índia (orientamos sobre o processo)",
  "Seguro de viagem (recomendamos e ajudamos a contratar)",
  "Refeições além do café da manhã",
  "Bebidas e despesas pessoais",
  "Gorjetas para motoristas e guias (sugerimos valores)",
  "Itens de natureza pessoal"
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
      </div>
    </section>
  );
};

export default Inclusions;
