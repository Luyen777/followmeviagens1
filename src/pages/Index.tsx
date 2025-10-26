import React, { useState, useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { MessageCircle, Check, Star, Shield, CreditCard, Clock, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createFAQSchema, createTravelPackageSchema, createBreadcrumbSchema } from "@/lib/structuredData";
import heroImage from "@/assets/maldives-hero-latest.avif";
import diningImage from "@/assets/maldives-experiences/gourmet-cuisine.jpg";
import villasSunset from "@/assets/maldives-experiences/villa-sunset.jpg";
import overwaterVillas from "@/assets/maldives-experiences/overwater-villas.jpg";
import luxuryBathroom from "@/assets/maldives-experiences/luxury-bathroom.jpg";
import spaTreatment from "@/assets/maldives-experiences/spa-treatment.jpg";
import diningExperience from "@/assets/maldives-experiences/dining-experience.jpg";
import chefCooking from "@/assets/maldives-experiences/chef-cooking.jpg";
import wineCellar from "@/assets/maldives-experiences/wine-cellar.jpg";
import snorkeling from "@/assets/maldives-experiences/snorkeling.jpg";
import beachWedding from "@/assets/maldives-experiences/beach-wedding.jpg";
import romanticDinner from "@/assets/maldives-experiences/romantic-dinner.jpg";
import luxuryBath from "@/assets/maldives-experiences/luxury-bath.jpg";

// Premium font stacks
const BODY_STACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const DISPLAY_STACK = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';

const experiences: { image: string; alt: string }[] = [
  { image: overwaterVillas, alt: "Villas sobre a água com design luxuoso" },
  { image: luxuryBathroom, alt: "Banheiro de luxo com vista para o mar" },
  { image: chefCooking, alt: "Chef preparando experiências gastronômicas ao vivo" },
  { image: wineCellar, alt: "Adega de vinhos premium e experiências de degustação" },
  { image: beachWedding, alt: "Cerimônias românticas na praia paradisíaca" },
  { image: spaTreatment, alt: "Tratamentos de spa relaxantes e rejuvenescedores" },
  { image: diningExperience, alt: "Experiências gastronômicas em ambientes únicos" },
  { image: snorkeling, alt: "Mergulho em águas cristalinas e vida marinha vibrante" },
  { image: romanticDinner, alt: "Jantares românticos à beira-mar" },
  { image: luxuryBath, alt: "Banheiras de luxo com vista panorâmica" },
  { image: villasSunset, alt: "Villas exclusivas ao pôr do sol" },
];

const CarouselSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const baseTimeRef = useRef<number>(0);
  const pausedOffsetRef = useRef<number>(0);
  const duplicatedExperiences = [...experiences, ...experiences];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) setIsPaused(true);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollSpeed = 57.2;
    const animate = (timestamp: number) => {
      if (!baseTimeRef.current) baseTimeRef.current = timestamp;
      if (!isPaused && !isDragging) {
        const elapsed = (timestamp - baseTimeRef.current) / 1000;
        const distance = elapsed * scrollSpeed + pausedOffsetRef.current;
        const singleSetWidth = track.scrollWidth / 2;
        const currentScroll = distance % singleSetWidth;
        track.style.transform = `translateX(-${currentScroll}px)`;
        scrollLeftRef.current = currentScroll;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.pageX;
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        scrollLeftRef.current = -matrix.m41;
      }
    }
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = startXRef.current - x;
    const track = trackRef.current;
    if (track) {
      const singleSetWidth = track.scrollWidth / 2;
      let newScroll = scrollLeftRef.current + walk;
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
    if (containerRef.current) containerRef.current.style.cursor = "grab";
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        const currentPosition = -matrix.m41;
        pausedOffsetRef.current = currentPosition;
        baseTimeRef.current = 0;
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.touches[0].pageX;
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        scrollLeftRef.current = -matrix.m41;
      }
    }
  };

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = startXRef.current - x;
    const track = trackRef.current;
    if (track) {
      const singleSetWidth = track.scrollWidth / 2;
      let newScroll = scrollLeftRef.current + walk;
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
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        const currentPosition = -matrix.m41;
        pausedOffsetRef.current = currentPosition;
        baseTimeRef.current = 0;
      }
    }
  };

  const togglePause = () => {
    if (!isDragging) setIsPaused((p) => !p);
  };

  const maskStyles: CSSProperties = {
    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  } as CSSProperties;

  return (
    <div className="mb-16 sm:mb-20 animate-fade-in">
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
        style={maskStyles}
      >
        <div ref={trackRef} className="flex gap-6 will-change-transform" style={{ width: "fit-content" }}>
          {duplicatedExperiences.map((experience, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[400px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlackFridayMaldives: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 6);
    const timer = window.setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
      if (distance < 0) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Promoções", href: "/#pacotes" },
    { label: "Black Friday Maldivas", href: "/promocoes/black-friday-maldivas" },
  ];

  const faqs = [
    {
      question: "Posso cancelar minha reserva?",
      answer:
        "Sim! Oferecemos cancelamento gratuito até 7 dias antes da data de partida. Para cancelamentos feitos com menos de 7 dias, consulte nossa política de cancelamento.",
    },
    {
      question: "O que está incluído no preço do pacote?",
      answer:
        "O pacote inclui: 4 noites em bangalô overwater, café da manhã internacional diário, traslados de hidroavião ida e volta, mini bar de cortesia, equipamento de snorkel e welcome amenities.",
    },
    {
      question: "Como funciona o traslado de hidroavião?",
      answer:
        "O hidroavião parte do aeroporto internacional de Malé e leva aproximadamente 20 minutos até o resort. O voo oferece vistas espetaculares das ilhas das Maldivas. O traslado está incluído no pacote.",
    },
    {
      question: "Qual a melhor época para visitar as Maldivas?",
      answer:
        "As Maldivas podem ser visitadas o ano todo. A estação seca (dezembro a abril) oferece menos chuva, enquanto maio a novembro pode ter chuvas ocasionais, mas com excelentes oportunidades de mergulho.",
    },
    {
      question: "Preciso de visto para as Maldivas?",
      answer:
        "Brasileiros não precisam de visto para estadias de até 30 dias. É necessário apenas passaporte com validade mínima de 6 meses.",
    },
  ];

  const pricingOptions = [
    {
      period: "25 DE DEZEMBRO A 29 DE DEZEMBRO, 2025",
      price: "2.890",
      status: "Últimas 3 vagas",
      availability: "limited",
    },
    {
      period: "10 DE JANEIRO A 14 DE JANEIRO, 2026",
      price: "3.050",
      status: "6 vagas disponíveis",
      availability: "available",
    },
    { period: "15 DE JANEIRO A 19 DE JANEIRO, 2026", price: "3.200", status: "Disponível", availability: "available" },
    {
      period: "20 DE JANEIRO A 24 DE JANEIRO, 2026",
      price: "2.950",
      status: "2 vagas restantes",
      availability: "limited",
    },
  ];

  const packageSchema = createTravelPackageSchema({
    name: "Lua de Mel nas Maldivas - Black Friday",
    description: "4 noites em bangalô overwater com traslados de hidroavião inclusos",
    priceFrom: 2890,
    image: heroImage,
    url: "https://followmeviagens.com/promocoes/black-friday-maldivas",
    location: "Maldivas",
  });

  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SEOHead
        title="Lua de Mel Maldivas: 4 Noites Overwater com 25% OFF | Follow Me Viagens"
        description="Pacote lua de mel nas Maldivas com 25% de desconto na Black Friday. 4 noites em bangalô sobre a água, traslados inclusos. A partir de US$ 2.890. Reserve agora!"
        canonicalUrl="/promocoes/black-friday-maldivas"
        ogImage={heroImage}
        keywords={[
          "maldivas lua de mel",
          "black friday maldivas",
          "bangalô overwater",
          "pacote maldivas",
          "viagem maldivas",
        ]}
        structuredData={[packageSchema, faqSchema, breadcrumbSchema]}
      />

      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background" style={{ fontFamily: BODY_STACK }}>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Vista aérea das Maldivas"
              className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div aria-live="polite" className="sr-only">
              Oferta expira em {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos.
            </div>

            {/* Countdown Badge */}
            <div className="flex justify-center mb-10 animate-fade-in">
              <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-black px-8 py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-3 shadow-2xl backdrop-blur-sm border border-amber-200/20">
                <Clock className="w-5 h-5 animate-pulse" />
                <span className="tracking-wide">Esquenta Black Friday — 25% OFF · expira em {timeLeft.days} dias</span>
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-center">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.08] tracking-tight"
                style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
              >
                Lua de mel nas Maldivas: 4 noites em bangalô sobre a água com 25% de desconto
              </h1>

              {/* Pricing */}
              <div className="mb-10 animate-fade-in">
                <div className="text-amber-300 text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
                  A partir de US$ 2.890{" "}
                  <span className="text-2xl md:text-3xl text-white/90 font-normal">por pessoa</span>
                </div>
                <div className="text-white/95 text-xl md:text-2xl">
                  <span className="line-through text-white/50">De US$ 3.855</span>
                  <span className="mx-3 text-white/40">·</span>
                  <span className="text-emerald-300 font-semibold">ECONOMIZE US$ 965</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 text-left animate-fade-in">
                {[
                  "Bangalô sobre a água com vista para o oceano",
                  "Traslado de hidroavião incluído (ida e volta)",
                  "Café da manhã internacional diário",
                  "Cancelamento gratuito até 7 dias",
                  "Garantia do melhor preço",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <Check className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/95 font-medium text-base leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-lg px-14 py-7 h-auto rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50 mb-10"
              >
                Ver datas disponíveis — últimas 12 vagas
              </Button>

              {/* Trust Badges Row */}
              <div className="flex flex-wrap items-center justify-center gap-8 mb-8 text-white/90 text-sm font-medium">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-emerald-300" />
                  <span>Reserva segura SSL</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span>5/5 (127 avaliações)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Check className="w-5 h-5 text-emerald-300" />
                  <span>Certificado TripAdvisor 2024</span>
                </div>
              </div>

              {/* Payment Logos */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-white/90 text-xs font-bold">
                <span className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-white/10">VISA</span>
                <span className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-white/10">
                  Mastercard
                </span>
                <span className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-white/10">PIX</span>
                <span className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-white/10">
                  Stripe Secure
                </span>
              </div>

              {/* Social Proof */}
              <p className="text-white/95 text-lg font-medium mb-12">
                Mais de 500 casais já viveram sua lua de mel conosco
              </p>

              {/* Scroll Indicator */}
              <div className="motion-safe:animate-bounce">
                <ChevronDown className="w-10 h-10 text-white/60 mx-auto" />
                <p className="text-white/60 text-sm mt-3 font-medium">Veja o que está incluído</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Image Carousel Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
          <div className="container mx-auto relative z-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-6 tracking-tight leading-tight"
                style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
              >
                Momentos inesquecíveis nas Maldivas
              </h2>
              <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed font-normal max-w-2xl mx-auto">
                Das villas exclusivas sobre o mar cristalino aos tratamentos de spa rejuvenescedores, cada momento nas
                Maldivas é desenhado para criar memórias eternas de luxo e tranquilidade absoluta.
              </p>
            </div>

            <CarouselSection />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <h2
                className="text-3xl md:text-5xl font-bold text-center"
                style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
              >
                Por que este é o pacote perfeito para sua lua de mel
              </h2>
              <Sparkles className="w-6 h-6 text-amber-500" />
            </div>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Experiências inesquecíveis em um dos destinos mais românticos do mundo
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-10 text-center border-2 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-b from-background to-muted/20">
                <div className="text-6xl mb-6">🌊</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: DISPLAY_STACK }}>
                  Bangalô overwater privativo
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Acorde com vista maravilhosa do oceano azul-turquesa direto da sua cama
                </p>
              </Card>

              <Card className="p-10 text-center border-2 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-b from-background to-muted/20">
                <div className="text-6xl mb-6">✈️</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: DISPLAY_STACK }}>
                  Transfer premium incluído
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Nós pagamos seu traslado de hidroavião — voe sobre ilhas paradisíacas
                </p>
              </Card>

              <Card className="p-10 text-center border-2 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-b from-background to-muted/20">
                <div className="text-6xl mb-6">🍇</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: DISPLAY_STACK }}>
                  Café da manhã de frente para o mar
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Comece cada dia com café internacional enquanto observa o oceano
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-16"
              style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
            >
              💬 O que nossos clientes estão dizendo
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="p-10 border-2 hover:border-amber-200 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-muted/10">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-3 font-bold text-lg">5/5</span>
                </div>
                <p className="text-lg mb-5 leading-relaxed text-foreground/90 italic">
                  "A vista do bangalô era exatamente como nas fotos. Acordar sobre a água foi inesquecível!"
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  — Marina & Carlos, São Paulo | Lua de mel, março 2024
                </p>
              </Card>

              <Card className="p-10 border-2 hover:border-amber-200 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-muted/10">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-3 font-bold text-lg">5/5</span>
                </div>
                <p className="text-lg mb-5 leading-relaxed text-foreground/90 italic">
                  "Resort simplesmente incrível. Experiência dos sonhos, vamos guardar pra sempre. Obrigada Follow Me
                  Viagens pela organização impecável ❤️"
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  — Juliana & Roberto, Rio de Janeiro | Aniversário, janeiro 2024
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-lg px-12 py-7 h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Garantir minha vaga com 25% OFF
              </Button>
            </div>
          </div>
        </section>

        {/* Package Inclusions Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-16"
              style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
            >
              ✨ O que está incluído no seu pacote
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "✈️", text: "Nós pagamos transfer de hidroavião (ida e volta)" },
                { icon: "🍉", text: "Café da manhã internacional diário" },
                { icon: "✨", text: "4 noites em bangalô overwater privativo" },
                { icon: "🥂", text: "Mini bar de cortesia (bebidas não alcoólicas)" },
                { icon: "🌊", text: "Equipamento de snorkel gratuito" },
                { icon: "❤️", text: "Welcome drink e caixa de chocolates" },
                { icon: "💳", text: "Pagamento em até 10x sem juros" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-background p-7 rounded-2xl shadow-md border-2 border-transparent hover:border-amber-200 transition-all duration-300 hover:shadow-xl"
                >
                  <span className="text-4xl flex-shrink-0">{item.icon}</span>
                  <span className="text-lg font-semibold text-foreground/90 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-4"
              style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
            >
              📅 Escolha suas datas — últimas vagas
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16">Garanta sua vaga antes que esgote</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {pricingOptions.map((option, index) => (
                <Card
                  key={index}
                  className="p-10 border-2 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20"
                >
                  <div className="mb-5">
                    <div className="text-xs font-bold text-muted-foreground mb-3 tracking-widest">PERÍODO</div>
                    <div className="text-lg font-bold leading-snug">{option.period}</div>
                  </div>

                  <div className="mb-5">
                    <div className="text-4xl font-bold text-amber-600 mb-1">US$ {option.price}</div>
                    <span className="text-sm text-muted-foreground font-medium">por pessoa</span>
                  </div>

                  <div className="mb-7">
                    <span
                      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-bold ${
                        option.availability === "limited"
                          ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      }`}
                    >
                      {option.status}
                    </span>
                  </div>

                  <Button
                    onClick={handleWhatsAppClick}
                    aria-label="Reservar pelo WhatsApp"
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Reservar agora
                  </Button>
                </Card>
              ))}
            </div>

            {/* Trust Elements Below Pricing */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground mb-12">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-full">
                <Shield className="w-5 h-5" />
                <span>Reserva segura SSL</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-full">
                <CreditCard className="w-5 h-5" />
                <span>Parcelamento disponível</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-full">
                <Check className="w-5 h-5" />
                <span>Cancelamento flexível</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-full">
                <MessageCircle className="w-5 h-5" />
                <span>Suporte 24/7</span>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="p-8 border-2 bg-gradient-to-br from-background to-muted/10">
                <h3 className="font-bold text-xl mb-5" style={{ fontFamily: DISPLAY_STACK }}>
                  Formas de pagamento
                </h3>
                <div className="space-y-3 text-muted-foreground text-base">
                  <p className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Sinal de 20% — em até 24 horas</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Saldo de 80% — até 30 dias do embarque</span>
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2 bg-gradient-to-br from-background to-muted/10">
                <h3 className="font-bold text-xl mb-5" style={{ fontFamily: DISPLAY_STACK }}>
                  Política de cancelamento
                </h3>
                <div className="space-y-3 text-muted-foreground text-base">
                  <p className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Até 30 dias antes da data de início — reembolso de 80% do valor total</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Entre 30 dias e a data de início — reembolso de 0% do valor total</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-16"
              style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
            >
              O que você precisa saber antes de reservar
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background rounded-2xl px-8 py-2 border-2 hover:border-amber-200 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <AccordionTrigger
                      className="text-lg font-bold hover:no-underline text-left py-6"
                      style={{ fontFamily: DISPLAY_STACK }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-b from-amber-50 via-amber-100/50 to-background dark:from-amber-950/30 dark:via-amber-950/10 dark:to-background">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: DISPLAY_STACK, letterSpacing: "-0.02em" }}
            >
              Últimas vagas! Garanta sua vaga antes que acabe
            </h2>
            <p className="text-xl text-muted-foreground mb-10 font-medium">
              22+ pessoas visualizaram esta oferta nas últimas 24h
            </p>

            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:via-amber-300 hover:to-amber-400 text-black font-bold text-xl px-16 py-8 h-auto rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50 mb-10"
              aria-label="Garantir minha vaga agora pelo WhatsApp"
            >
              Garantir minha vaga agora
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-background/80 px-5 py-3 rounded-full shadow-md backdrop-blur-sm">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-background/80 px-5 py-3 rounded-full shadow-md backdrop-blur-sm">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>Avaliação 5 estrelas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-background/80 px-5 py-3 rounded-full shadow-md backdrop-blur-sm">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Garantia do melhor preço</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlackFridayMaldives;
