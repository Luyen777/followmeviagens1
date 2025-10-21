import maldivesHero from "@/assets/maldives-hero-latest.avif";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={maldivesHero}
          alt="SO/ Maldives - Overwater Pool Villa com design avant-garde sobre águas cristalinas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-light text-white mb-6 tracking-tight leading-tight">
          SO/ Maldives
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
          Resort avant-garde a 15 minutos de Malé
        </p>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Pacote 5 dias | Overwater Pool Villa | Design inspirado em arte e moda
        </p>
      </div>
    </section>
  );
};

export default Hero;
