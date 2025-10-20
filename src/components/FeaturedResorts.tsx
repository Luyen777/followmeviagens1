import React from "react";
import villasSunset from "@/assets/maldives-experiences/villa-sunset.jpg";
import overwaterVillas from "@/assets/maldives-experiences/overwater-villas.jpg";
import infinityPool from "@/assets/maldives-experiences/infinity-pool.jpg";
import spaTreatment from "@/assets/maldives-experiences/spa-treatment.jpg";
import diningExperience from "@/assets/maldives-experiences/dining-experience.jpg";
import gourmetCuisine from "@/assets/maldives-experiences/gourmet-cuisine.jpg";
import snorkeling from "@/assets/maldives-experiences/snorkeling.jpg";
import beachWedding from "@/assets/maldives-experiences/beach-wedding.jpg";
import romanticDinner from "@/assets/maldives-experiences/romantic-dinner.jpg";
import luxuryBath from "@/assets/maldives-experiences/luxury-bath.jpg";

const experiences = [
  { image: overwaterVillas, alt: "Villas sobre água com design luxuoso" },
  { image: infinityPool, alt: "Piscina infinita com vista para o oceano turquesa" },
  { image: gourmetCuisine, alt: "Gastronomia gourmet e culinária internacional" },
  { image: beachWedding, alt: "Cerimônias românticas na praia paradisíaca" },
  { image: spaTreatment, alt: "Tratamentos de spa relaxantes e rejuvenescedores" },
  { image: diningExperience, alt: "Experiências gastronômicas em ambientes únicos" },
  { image: snorkeling, alt: "Mergulho em águas cristalinas e vida marinha vibrante" },
  { image: romanticDinner, alt: "Jantares românticos à beira-mar" },
  { image: luxuryBath, alt: "Banheiras de luxo com vista panorâmica" },
  { image: villasSunset, alt: "Villas exclusivas ao pôr do sol" },
];

const FeaturedResorts = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  
  // Duplicate experiences array for seamless infinite loop
  const duplicatedExperiences = [...experiences, ...experiences];

  const handleInteraction = () => {
    setIsPaused(true);
  };

  return (
    <section id="momentos" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="sm:text-5xl font-display font-medium text-foreground mb-4 sm:mb-6 tracking-tight text-balance leading-tight md:text-5xl text-4xl">
            Momentos Inesquecíveis nas Maldivas
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-light tracking-luxury max-w-2xl mx-auto">
            Das villas exclusivas sobre o mar cristalino aos tratamentos de spa rejuvenescedores, cada momento nas Maldivas é desenhado para criar memórias eternas de luxo e tranquilidade absoluta.
          </p>
        </div>

        {/* Continuous Infinite Scroll Carousel */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <div 
            className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleInteraction}
            onTouchStart={handleInteraction}
            onScroll={handleInteraction}
          >
            <style>
              {`
                @keyframes scroll-horizontal {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                
                .scroll-animation {
                  animation: scroll-horizontal 30s linear infinite;
                }
                
                .scroll-animation.paused {
                  animation-play-state: paused;
                }
                
                .scroll-animation:hover {
                  animation-play-state: paused;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                
                @media (prefers-reduced-motion: reduce) {
                  .scroll-animation {
                    animation: none;
                  }
                }
              `}
            </style>
            <div className={`scroll-animation flex gap-4 ${isPaused ? 'paused' : ''}`}>
              {duplicatedExperiences.map((experience, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <img 
                      src={experience.image} 
                      alt={experience.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/ilhas-maldivas" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-black/90 transition-all duration-300 shadow-elegant hover:shadow-glow hover:scale-105">
            <span className="text-base sm:text-lg">Descubra Todos os Resorts</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default FeaturedResorts;