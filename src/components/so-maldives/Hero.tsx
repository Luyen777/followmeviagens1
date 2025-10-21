import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wider">Atol de Kaafu, Maldivas</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light mb-6">
          SO/ Maldives
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Resort Avant-Garde de Luxo com Design Inspirado em Arte e Moda
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            15 min do Aeroporto de Malé
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            80 Vilas Exclusivas
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            3 Restaurantes Assinatura
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
