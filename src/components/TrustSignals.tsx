import { Shield, Award, Users, HeadphonesIcon } from "lucide-react";
const TrustSignals = () => {
  const signals = [{
    icon: Award,
    title: "10+ Anos de Experiência",
    description: "Especialistas em viagens de luxo"
  }, {
    icon: Users,
    title: "5.000+ Clientes Satisfeitos",
    description: "Depoimentos reais de viajantes"
  }, {
    icon: Shield,
    title: "50+ Resorts Parceiros",
    description: "Acesso exclusivo premium"
  }, {
    icon: HeadphonesIcon,
    title: "Suporte 24/7",
    description: "Atendimento personalizado"
  }];
  return <section className="py-20 sm:py-32 bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-background mb-6 sm:mb-8 tracking-tight text-balance">
            Por Que Nos Escolher
          </h2>
          <p className="text-base sm:text-lg text-background/70 leading-relaxed font-light tracking-luxury">
            Transformamos sonhos em experiências reais
          </p>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4">
          {signals.map((signal, index) => {
          const Icon = signal.icon;
          return <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group animate-fade-in shadow-lg" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-luxury rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-luxury">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-medium text-background mb-3 sm:mb-4 tracking-tight">
                  {signal.title}
                </h3>
                <p className="text-sm sm:text-base text-background/70 leading-relaxed font-light tracking-luxury">
                  {signal.description}
                </p>
              </div>;
        })}
        </div>

        {/* Instagram Badge */}
        <div className="text-center px-4">
          <a href="https://instagram.com/followmeviagens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 sm:px-10 py-4 sm:py-5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group shadow-lg">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-luxury rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-luxury">
              <span className="text-white text-xl sm:text-2xl">📸</span>
            </div>
            <div className="text-left">
              <div className="text-background font-semibold tracking-luxury text-sm sm:text-base">@followmeviagens</div>
              <div className="text-background/70 text-xs sm:text-sm tracking-luxury">200.000+ seguidores</div>
            </div>
          </a>
        </div>
      </div>
    </section>;
};
export default TrustSignals;