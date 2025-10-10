import { Shield, Award, Users, HeadphonesIcon, Heart } from "lucide-react";
const TrustSignals = () => {
  const signals = [{
    icon: Award,
    title: "20 Anos de Expertise",
    description: "Especialistas em jornadas de luxo"
  }, {
    icon: Users,
    title: "5.000+ Clientes Satisfeitos",
    description: "Depoimentos reais, experiências transformadoras"
  }, {
    icon: Heart,
    title: "50+ Resorts Parceiros",
    description: "Preços exclusivos em alguns dos melhores resorts do mundo"
  }, {
    icon: HeadphonesIcon,
    title: "Atendimento 24/7",
    description: "Suporte dedicado, sempre que você precisar"
  }];
  return <section className="py-32 sm:py-44 relative overflow-hidden bg-gradient-to-b from-[#0a0d1f] via-[#0f1525] to-[#0a0d1f]">
      {/* Luxury bokeh light flares */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{
      animationDuration: '8s'
    }}></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple-500/15 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{
      animationDuration: '10s',
      animationDelay: '2s'
    }}></div>
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-amber-500/10 via-yellow-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{
      animationDuration: '12s',
      animationDelay: '4s'
    }}></div>
      
      {/* Abstract luxury pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px),
                          repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px)`
    }}></div>
      
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 sm:mb-32 animate-fade-in px-4">
          {/* Tagline */}
          <p className="text-sm sm:text-base text-amber-400/80 font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            Confiança e excelência em cada viagem
          </p>
          
          <h2 style={{
          animationDelay: '0.2s',
          letterSpacing: '0.01em'
        }} className="text-5xl sm:text-6xl font-display font-semibold text-white mb-8 tracking-tight leading-[1.1] text-balance animate-fade-in md:text-5xl">
            Por Que Nos Escolher
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed font-light tracking-wide max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            Excelência e dedicação em cada detalhe da sua viagem
          </p>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-28 sm:mb-32 px-4">
          {signals.map((signal, index) => {
          const Icon = signal.icon;
          return <div key={index} className="group relative animate-fade-in" style={{
            animationDelay: `${index * 0.15 + 0.4}s`
          }}>
                {/* Glassmorphism card */}
                <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center transition-all duration-700 ease-out
                  hover:border-amber-500/40 hover:shadow-[0_20px_60px_-15px_rgba(251,191,36,0.3),0_0_40px_rgba(251,191,36,0.1)] hover:-translate-y-2 hover:bg-white/[0.12]
                  before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-amber-500/0 before:to-blue-500/0 before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-700">
                  
                  {/* Subtle border gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  
                  {/* Icon container with premium glow */}
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-8 relative">
                    {/* Iridescent background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/20 via-purple-500/20 to-indigo-600/20 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-all duration-700"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 group-hover:scale-150"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl w-full h-full flex items-center justify-center border border-white/20 group-hover:border-amber-400/40 transition-all duration-700">
                      <Icon className="w-9 h-9 text-amber-400 group-hover:text-amber-300 relative z-10 group-hover:scale-110 transition-all duration-700 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-white mb-3 tracking-wide relative z-10 group-hover:text-amber-50 transition-colors duration-700">
                    {signal.title}
                  </h3>
                  <p className="text-base text-slate-300/90 leading-relaxed font-light tracking-wide relative z-10 group-hover:text-slate-200 transition-colors duration-700">
                    {signal.description}
                  </p>
                </div>
              </div>;
        })}
        </div>

        {/* Elegant divider */}
        <div className="relative mb-16 px-4 animate-fade-in" style={{
        animationDelay: '1s'
      }}>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-sm"></div>
        </div>

        {/* Premium Social Proof Badge */}
        <div className="text-center px-4 animate-fade-in" style={{
        animationDelay: '1.2s'
      }}>
          <div className="inline-flex items-center gap-5 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-full px-10 py-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(251,191,36,0.1)] hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.6),0_0_50px_rgba(251,191,36,0.2)] transition-all duration-700 hover:scale-105 group">
            <a href="https://instagram.com/followmeviagens" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5">
              {/* Instagram icon with verification badge */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-[0_8px_16px_rgba(251,191,36,0.3)]">
                  <span className="text-white text-2xl">📸</span>
                </div>
                {/* Verification checkmark */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#0a0d1f] shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold text-lg tracking-wide group-hover:text-amber-300 transition-colors duration-300">
                    @followmeviagens
                  </span>
                </div>
                <div className="text-slate-300/90 text-sm tracking-wide font-light">
                  Confiado por <span className="text-amber-400 font-semibold">200.000+</span> viajantes
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default TrustSignals;