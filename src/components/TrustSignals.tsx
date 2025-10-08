import { Shield, Award, Users, HeadphonesIcon } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Award,
      title: "10+ Anos de Expertise",
      description: "Especialistas em jornadas de luxo"
    },
    {
      icon: Users,
      title: "5.000+ Clientes Satisfeitos",
      description: "Depoimentos reais, experiências transformadoras"
    },
    {
      icon: Shield,
      title: "50+ Resorts Exclusivos",
      description: "Acesso privilegiado aos melhores destinos"
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento 24/7",
      description: "Suporte dedicado, sempre que você precisar"
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Elegant background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28 animate-fade-in px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight text-balance">
            Por Que Nos Escolher
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light tracking-luxury">
            Excelência e dedicação em cada detalhe da sua viagem
          </p>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20 sm:mb-24 px-4">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(var(--primary),0.15)] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon container with glow effect */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-luxury rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-luxury rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <Icon className="w-8 h-8 text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-white mb-3 tracking-tight">
                  {signal.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-light tracking-luxury">
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Social Proof Badge - Integrated Design */}
        <div className="text-center px-4">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://instagram.com/followmeviagens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md-custom">
                <span className="text-white text-xl">📸</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-base tracking-luxury group-hover:text-primary transition-colors duration-300">
                  @followmeviagens
                </div>
                <div className="text-slate-300 text-sm tracking-luxury">
                  Confiado por 200.000+ viajantes
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

};
export default TrustSignals;