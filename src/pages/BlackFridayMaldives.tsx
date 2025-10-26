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
    <div className="mb-20 animate-fade-in">
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
        <div ref={trackRef} className="flex gap-8 will-change-transform" style={{ width: "fit-content" }}>
          {duplicatedExperiences.map((experience, index) => (
            <div key={index} className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px]">
              <div
                className="relative aspect-[4/5] overflow-hidden group"
                style={{
                  borderRadius: "24px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 30px 80px rgba(0, 0, 0, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.15)";
                }}
              >
                <img
                  src={experience.image}
                  alt={experience.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
        
        .premium-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          letter-spacing: -0.011em;
        }
        
        .premium-heading {
          font-family: 'Crimson Pro', Georgia, serif;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }
        
        .premium-button {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border: none;
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .premium-button:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          box-shadow: 0 15px 40px rgba(245, 158, 11, 0.4);
          transform: translateY(-2px);
        }
        
        .premium-card {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 20px;
          padding: 48px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }
        
        .premium-card:hover {
          border-color: #fbbf24;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
        }
        
        .benefit-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .countdown-badge {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          border-radius: 100px;
          padding: 16px 32px;
          box-shadow: 0 10px 40px rgba(251, 191, 36, 0.4);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 10px 40px rgba(251, 191, 36, 0.4); }
          50% { box-shadow: 0 10px 50px rgba(251, 191, 36, 0.6); }
        }
        
        .trust-badge {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 100px;
          padding: 12px 24px;
        }
        
        .pricing-card {
          background: white;
          border: 2px solid #f3f4f6;
          border-radius: 24px;
          padding: 44px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .pricing-card:hover {
          border-color: #f59e0b;
          box-shadow: 0 25px 70px rgba(245, 158, 11, 0.15);
          transform: translateY(-6px);
        }
        
        @media (prefers-color-scheme: dark) {
          .premium-card, .pricing-card {
            background: #1f2937;
            border-color: #374151;
          }
          .premium-card:hover, .pricing-card:hover {
            border-color: #f59e0b;
            background: #252e3d;
          }
        }
      `}</style>

      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background premium-page">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Vista aérea das Maldivas" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div aria-live="polite" className="sr-only">
              Oferta expira em {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos.
            </div>

            {/* Countdown Badge */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="countdown-badge flex items-center gap-3">
                <Clock className="w-5 h-5 text-black" />
                <span className="text-black font-bold text-base tracking-wide">
                  Esquenta Black Friday — 25% OFF · expira em {timeLeft.days} dias
                </span>
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-center">
              <h1 className="premium-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12">
                Lua de mel nas Maldivas: 4 noites em bangalô sobre a água com 25% de desconto
              </h1>

              {/* Pricing */}
              <div className="mb-12 animate-fade-in">
                <div
                  className="text-amber-400 text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  US$ 2.890
                </div>
                <div className="text-white/90 text-xl md:text-2xl mb-3">
                  <span className="text-white/60">por pessoa</span>
                </div>
                <div className="text-white/90 text-lg md:text-xl">
                  <span className="line-through text-white/50">De US$ 3.855</span>
                  <span className="mx-4 text-white/30">·</span>
                  <span className="text-emerald-400 font-semibold">ECONOMIZE US$ 965</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14 text-left animate-fade-in">
                {[
                  "Bangalô sobre a água com vista para o oceano",
                  "Traslado de hidroavião incluído (ida e volta)",
                  "Café da manhã internacional diário",
                  "Cancelamento gratuito até 7 dias",
                  "Garantia do melhor preço",
                ].map((benefit, index) => (
                  <div key={index} className="benefit-card flex items-start gap-4">
                    <Check className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/95 font-medium text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection("pricing")}
                className="premium-button text-black font-bold text-xl px-16 py-6 rounded-full mb-12"
              >
                Ver datas disponíveis — últimas 12 vagas
              </button>

              {/* Trust Badges Row */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-white/90 text-sm font-medium">
                <div className="trust-badge flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span>Reserva segura SSL</span>
                </div>
                <div className="trust-badge flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span>5/5 (127 avaliações)</span>
                </div>
                <div className="trust-badge flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>Certificado TripAdvisor 2024</span>
                </div>
              </div>

              {/* Payment Logos */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-white/90 text-sm font-bold">
                {["VISA", "Mastercard", "PIX", "Stripe Secure"].map((method) => (
                  <span key={method} className="trust-badge">
                    {method}
                  </span>
                ))}
              </div>

              {/* Social Proof */}
              <p className="text-white/95 text-xl font-medium mb-16">
                Mais de 500 casais já viveram sua lua de mel conosco
              </p>

              {/* Scroll Indicator */}
              <div className="motion-safe:animate-bounce">
                <ChevronDown className="w-10 h-10 text-white/60 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div
          className="container mx-auto px-4 py-8"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.02), transparent)" }}
        >
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Image Carousel Section */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto relative z-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
              <h2 className="premium-heading text-5xl md:text-6xl font-semibold text-foreground mb-8">
                Momentos inesquecíveis nas Maldivas
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto" style={{ lineHeight: "1.7" }}>
                Das villas exclusivas sobre o mar cristalino aos tratamentos de spa rejuvenescedores, cada momento nas
                Maldivas é desenhado para criar memórias eternas de luxo e tranquilidade absoluta.
              </p>
            </div>

            <CarouselSection />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="premium-heading text-4xl md:text-5xl font-semibold mb-6">
                Por que este é o pacote perfeito para sua lua de mel
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: "1.7" }}>
                Experiências inesquecíveis em um dos destinos mais românticos do mundo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  icon: "🌊",
                  title: "Bangalô overwater privativo",
                  desc: "Acorde com vista maravilhosa do oceano azul-turquesa direto da sua cama",
                },
                {
                  icon: "✈️",
                  title: "Transfer premium incluído",
                  desc: "Nós pagamos seu traslado de hidroavião — voe sobre ilhas paradisíacas",
                },
                {
                  icon: "🍇",
                  title: "Café da manhã de frente para o mar",
                  desc: "Comece cada dia com café internacional enquanto observa o oceano",
                },
              ].map((item, index) => (
                <div key={index} className="premium-card text-center">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="premium-heading text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section
          className="py-32"
          style={{ background: "linear-gradient(to bottom, rgba(251, 191, 36, 0.03), transparent)" }}
        >
          <div className="container mx-auto px-4">
            <h2 className="premium-heading text-4xl md:text-5xl font-semibold text-center mb-20">
              O que nossos clientes estão dizendo
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
              {[
                {
                  text: "A vista do bangalô era exatamente como nas fotos. Acordar sobre a água foi inesquecível!",
                  author: "Marina & Carlos, São Paulo",
                  occasion: "Lua de mel, março 2024",
                },
                {
                  text: "Resort simplesmente incrível. Experiência dos sonhos, vamos guardar pra sempre. Obrigada Follow Me Viagens pela organização impecável ❤️",
                  author: "Juliana & Roberto, Rio de Janeiro",
                  occasion: "Aniversário, janeiro 2024",
                },
              ].map((review, index) => (
                <div key={index} className="premium-card">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xl mb-6 leading-relaxed text-foreground/90 italic">"{review.text}"</p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-base mb-1">{review.author}</p>
                    <p>{review.occasion}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection("pricing")}
                className="premium-button text-black font-bold text-xl px-14 py-6 rounded-full"
              >
                Garantir minha vaga com 25% OFF
              </button>
            </div>
          </div>
        </section>

        {/* Package Inclusions Section */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="premium-heading text-4xl md:text-5xl font-semibold text-center mb-20">
              O que está incluído no seu pacote
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  className="flex items-center gap-5 bg-background p-8 rounded-3xl"
                  style={{
                    border: "1px solid #f3f4f6",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#fbbf24";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#f3f4f6";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span className="text-4xl flex-shrink-0">{item.icon}</span>
                  <span className="text-lg font-semibold text-foreground/90 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-32 scroll-mt-20"
          style={{ background: "linear-gradient(to bottom, rgba(251, 191, 36, 0.03), transparent)" }}
        >
          <div className="container mx-auto px-4">
            <h2 className="premium-heading text-4xl md:text-5xl font-semibold text-center mb-6">
              Escolha suas datas — últimas vagas
            </h2>
            <p className="text-center text-muted-foreground text-xl mb-20">Garanta sua vaga antes que esgote</p>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
              {pricingOptions.map((option, index) => (
                <div key={index} className="pricing-card">
                  <div className="mb-6">
                    <div className="text-xs font-bold text-muted-foreground mb-3 tracking-widest">PERÍODO</div>
                    <div className="text-xl font-semibold leading-snug">{option.period}</div>
                  </div>

                  <div className="mb-6">
                    <div className="text-5xl font-bold mb-2" style={{ color: "#d97706" }}>
                      US$ {option.price}
                    </div>
                    <span className="text-base text-muted-foreground font-medium">por pessoa</span>
                  </div>

                  <div className="mb-8">
                    <span
                      className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold"
                      style={{
                        background: option.availability === "limited" ? "#fef2f2" : "#f0fdf4",
                        color: option.availability === "limited" ? "#991b1b" : "#166534",
                      }}
                    >
                      {option.status}
                    </span>
                  </div>

                  <button
                    onClick={handleWhatsAppClick}
                    aria-label="Reservar pelo WhatsApp"
                    className="w-full text-black font-bold text-lg py-5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                      boxShadow: "0 8px 25px rgba(245, 158, 11, 0.3)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
                      e.currentTarget.style.boxShadow = "0 12px 35px rgba(245, 158, 11, 0.4)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(245, 158, 11, 0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Reservar agora
                  </button>
                </div>
              ))}
            </div>

            {/* Trust Elements Below Pricing */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground mb-16">
              {[
                { icon: Shield, text: "Reserva segura SSL" },
                { icon: CreditCard, text: "Parcelamento disponível" },
                { icon: Check, text: "Cancelamento flexível" },
                { icon: MessageCircle, text: "Suporte 24/7" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-6 py-3 rounded-full"
                  style={{
                    background: "rgba(0, 0, 0, 0.03)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Payment Terms */}
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="premium-card">
                <h3 className="premium-heading text-2xl font-semibold mb-6">Formas de pagamento</h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Sinal de 20% — em até 24 horas</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Saldo de 80% — até 30 dias do embarque</span>
                  </p>
                </div>
              </div>

              <div className="premium-card">
                <h3 className="premium-heading text-2xl font-semibold mb-6">Política de cancelamento</h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Até 30 dias antes da data de início — reembolso de 80% do valor total</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>Entre 30 dias e a data de início — reembolso de 0% do valor total</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="premium-heading text-4xl md:text-5xl font-semibold text-center mb-20">
              O que você precisa saber antes de reservar
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background rounded-3xl px-8 py-2"
                    style={{
                      border: "1px solid #f3f4f6",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <AccordionTrigger className="premium-heading text-xl font-semibold hover:no-underline text-left py-7">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-7">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-32"
          style={{ background: "linear-gradient(to bottom, rgba(251, 191, 36, 0.08), rgba(251, 191, 36, 0.02))" }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="premium-heading text-4xl md:text-5xl font-semibold mb-6">
              Últimas vagas! Garanta sua vaga antes que acabe
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-medium">
              22+ pessoas visualizaram esta oferta nas últimas 24h
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="text-black font-bold text-2xl px-20 py-7 rounded-full mb-14"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                boxShadow: "0 15px 50px rgba(245, 158, 11, 0.4)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(245, 158, 11, 0.5)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
                e.currentTarget.style.boxShadow = "0 15px 50px rgba(245, 158, 11, 0.4)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              aria-label="Garantir minha vaga agora pelo WhatsApp"
            >
              Garantir minha vaga agora
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-base font-medium text-muted-foreground">
              {[
                { icon: Shield, text: "Pagamento seguro", color: "#059669" },
                { icon: Star, text: "Avaliação 5 estrelas", color: "#f59e0b" },
                { icon: Check, text: "Garantia do melhor preço", color: "#059669" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 rounded-full"
                  style={{
                    background: "white",
                    border: "1px solid #f3f4f6",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlackFridayMaldives;
