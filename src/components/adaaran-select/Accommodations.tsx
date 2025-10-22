import { Bed, Waves, Home } from "lucide-react";

const Accommodations = () => {
  const villaFeatures = [
    "Sobre a lagoa com deck privativo",
    "Acesso direto ao mar para snorkeling",
    "Sala de estar separada",
    "Serviço personalizado exclusivo",
    "Opções sunrise ou sunset",
    "Exclusivo para adultos (ideal para surfistas)",
    "Máxima privacidade"
  ];

  const amenities = [
    "Ar-condicionado com controle individual",
    "Smart TV com canais internacionais",
    "Minibar abastecido diariamente",
    "Máquina de chá e café",
    "Amenities premium de banheiro",
    "Ducha interna e externa",
    "Cofre digital",
    "Terraço privativo",
    "Menu de travesseiros",
    "Wi-Fi gratuito",
    "Room service (pago à parte)",
    "Amenidades especiais para crianças (sob reserva)",
    "Berço e cama extra disponíveis",
    "Arrumação diária e turn down service"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Acomodações
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Villas espaçosas e modernas recém-renovadas, com ar-condicionado e todas as comodidades para uma estadia confortável
          </p>
        </div>

        {/* Ocean Villas */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-muted/30 rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Waves className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Ocean Villas
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {villaFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Amenities */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Bed className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Comodidades das Villas
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span className="text-foreground/80 text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div className="mt-8 max-w-4xl mx-auto bg-primary/5 rounded-2xl p-6 border border-primary/20">
          <p className="text-center text-foreground/70 leading-relaxed">
            <strong className="text-foreground">Diferenciais:</strong> Excelente privacidade nas villas, localização privilegiada para surf no Lohis, 
            ótimo house reef para snorkeling e amplos jardins tropicais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
