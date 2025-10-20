import { useEffect, useRef, useState } from "react";

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
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationRef = useRef<number>();

  // Duplicate experiences for seamless infinite loop
  const duplicatedExperiences = [...experiences, ...experiences];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startTime: number | null = null;
    const scrollSpeed = 52; // pixels per second (30% faster)

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      if (!isPaused && !isDragging) {
        const elapsed = (timestamp - startTime) / 1000;
        const distance = elapsed * scrollSpeed;
        
        // Calculate the width of one set of images
        const singleSetWidth = track.scrollWidth / 2;
        const currentScroll = distance % singleSetWidth;
        
        track.style.transform = `translateX(-${currentScroll}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.pageX;
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        scrollLeftRef.current = -matrix.m41;
      }
    }
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startXRef.current - x);
    const track = trackRef.current;
    if (track) {
      const singleSetWidth = track.scrollWidth / 2;
      let newScroll = scrollLeftRef.current + walk;
      
      // Loop the scroll position
      if (newScroll >= singleSetWidth) {
        newScroll = newScroll % singleSetWidth;
        scrollLeftRef.current = newScroll;
        startXRef.current = x;
      } else if (newScroll < 0) {
        newScroll = singleSetWidth + (newScroll % singleSetWidth);
        scrollLeftRef.current = newScroll;
        startXRef.current = x;
      }
      
      track.style.transform = `translateX(-${scrollLeftRef.current + walk}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
    
    // Sync the scroll position for smooth resume
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        scrollLeftRef.current = -matrix.m41;
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.touches[0].pageX;
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        scrollLeftRef.current = -matrix.m41;
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (startXRef.current - x);
    const track = trackRef.current;
    if (track) {
      const singleSetWidth = track.scrollWidth / 2;
      let newScroll = scrollLeftRef.current + walk;
      
      // Loop the scroll position
      if (newScroll >= singleSetWidth) {
        newScroll = newScroll % singleSetWidth;
        scrollLeftRef.current = newScroll;
        startXRef.current = x;
      } else if (newScroll < 0) {
        newScroll = singleSetWidth + (newScroll % singleSetWidth);
        scrollLeftRef.current = newScroll;
        startXRef.current = x;
      }
      
      track.style.transform = `translateX(-${scrollLeftRef.current + walk}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
    
    // Sync the scroll position for smooth resume
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        scrollLeftRef.current = -matrix.m41;
      }
    }
  };

  const togglePause = () => {
    if (!isDragging) {
      setIsPaused(!isPaused);
    }
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

        {/* Infinite Scroll Carousel */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden cursor-grab select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={togglePause}
          >
            <div
              ref={trackRef}
              className="flex gap-4 sm:gap-6 will-change-transform"
              style={{
                width: 'fit-content',
              }}
            >
              {duplicatedExperiences.map((experience, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <img 
                      src={experience.image} 
                      alt={experience.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                      draggable="false"
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