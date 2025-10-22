import { Waves, Heart, Users, Dumbbell } from "lucide-react";

const Activities = () => {
  const freeActivities = [
    "Snorkeling com equipamento gratuito no house reef",
    "Esportes aquáticos: caiaque, windsurf, SUP, pedalinho",
    "Esportes terrestres: tênis, squash, badminton, futebol, vôlei",
    "Bicicletas para explorar toda a ilha",
    "Piscina adulto e infantil com serviço de praia",
    "Kids Club e playground completos",
    "Aulas de yoga e fitness center",
    "Shows noturnos, música ao vivo e eventos culturais",
    "Happy hour de drinks e entretenimento semanal"
  ];

  const paidActivities = [
    "Mergulho PADI 5★: batismo, cursos, night dive",
    "Esportes motorizados: jet ski, seabob, kite, wakeboard, parasailing",
    "Spa Mandara: tratamentos balineses, massagens, wellness",
    "Surf no Lohis: aluguel de pranchas, aulas com profissionais",
    "Excursões: sandbank picnic, pesca, island hopping, dolphin tour",
    "Jantares privativos na praia e degustação de vinhos",
    "Masterclasses de culinária e sessões de fotos profissionais"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Atividades & Experiências
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            A maior diversidade esportiva entre resorts 4 estrelas das Maldivas, com atividades para todos os perfis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Activities */}
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Incluído no All Inclusive
              </h3>
            </div>
            <ul className="space-y-3">
              {freeActivities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span className="text-foreground/80">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paid Activities */}
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Waves className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Atividades Premium
              </h3>
            </div>
            <ul className="space-y-3">
              {paidActivities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span className="text-foreground/80">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Surf Highlight */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Waves className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Destino Top para Surfistas
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                O resort oferece acesso ao famoso surf spot <strong>Lohis</strong>, referência mundial com ondas perfeitas. 
                Packages exclusivos disponíveis, com acesso limitado garantindo a melhor experiência. 
                Reserva obrigatória na alta temporada. Ocean Villas são exclusivas para adultos surfistas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
