import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  return <section id="momentos" className="py-20 sm:py-32 bg-background relative overflow-hidden">
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

        {/* Luxury Carousel */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <Carousel 
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {experiences.map((experience, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <img 
                      src={experience.image} 
                      alt={experience.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-0 sm:-translate-x-12 hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm" />
            <CarouselNext className="right-2 sm:right-0 sm:translate-x-12 hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/ilhas-maldivas" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-black/90 transition-all duration-300 shadow-elegant hover:shadow-glow hover:scale-105">
            <span className="text-base sm:text-lg">Descubra Todos os Resorts</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>;
};
export default FeaturedResorts;