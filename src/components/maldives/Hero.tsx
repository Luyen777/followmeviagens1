import maldivesHero from "@/assets/maldives-hero-latest.avif";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={maldivesHero}
          alt="InterContinental Maldives Maamunagau Resort - Villas overwater sobre águas cristalinas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-light text-white mb-6 tracking-tight leading-tight">
          InterContinental Maldives
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-white/90">
            Maamunagau Resort
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
          Paraíso exclusivo no Atol de Raa
        </p>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Pacote 5 dias | Overwater Pool Villa | Café da manhã e aperitivos incluídos
        </p>
      </div>
    </section>
  );
};

export default Hero;
