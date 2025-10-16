import momentosMain from "@/assets/momentos-inesqueciveis.png";

const FeaturedResorts = () => {
  return <section id="momentos" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="sm:text-5xl font-display font-medium text-foreground mb-4 sm:mb-6 tracking-tight text-balance leading-tight md:text-5xl text-4xl">
            Momentos Inesquecíveis
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-light tracking-luxury">Viva experiências únicas que só as Ilhas Maldivas podem proporcionar.</p>
        </div>

        {/* Main Featured Image */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <div className="relative rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] w-full md:w-4/5 mx-auto">
            <img src={momentosMain} alt="Experiências únicas nas Maldivas - spa, villas sobre água, mergulho e gastronomia" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/ilhas-maldivas" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-elegant hover:shadow-glow hover:scale-105">
            <span className="text-base sm:text-lg">Descubra Todos os Resorts</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>;
};
export default FeaturedResorts;