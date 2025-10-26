import React, { useState, useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { MessageCircle, Check, Star, Shield, CreditCard, Clock, ChevronDown } from "lucide-react";
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

// Premium look that works from this file alone (Lovable-friendly)
const BODY_STACK =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif';
const DISPLAY_STACK = 'Georgia, Cambria, "Times New Roman", Times, serif';

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
    const scrollSpeed = 50;
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
        style={maskStyles}
      >
        <div ref={trackRef} className="flex gap-4 sm:gap-6 will-change-transform" style={{ width: "fit-content" }}>
          {duplicatedExperiences.map((experience, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg border border-slate-200 transition-all duration-500 group">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-500" />
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  // Light pattern for depth
  const patternLight: CSSProperties = {
    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(2,6,23,0.06) 1px, rgba(255,255,255,0) 0)",
    backgroundSize: "24px 24px",
  };

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

      <main className="min-h-screen bg-white text-slate-800" style={{ fontFamily: BODY_STACK }}>
        {/* HERO — reverted to dark overlay style */}
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={heroImage} alt="Vista aérea das Maldivas" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 text-center max-w-[80ch]">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-cyan-100 text-xs tracking-widest uppercase">
              <Clock className="w-4 h-4" /> 25% OFF · expira em {timeLeft.days} dias
            </div>

            <h1
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08]"
              style={{ fontFamily: DISPLAY_STACK }}
            >
              Lua de mel nas Maldivas: 4 noites em bangalô sobre a água
            </h1>

            <div className="mt-6">
              <div className="text-cyan-200 text-3xl md:text-4xl font-bold">A partir de US$ 2.890 por pessoa</div>
              <div className="text-white/90 text-lg md:text-xl mt-1">
                <span className="line-through text-white/60">De US$ 3.855</span>
                <span className="mx-2">•</span>
                <span className="text-emerald-300 font-semibold">Economize US$ 965 por pessoa</span>
              </div>
            </div>

            <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto text-left">
              {[
                "Bangalô sobre a água com vista para o oceano",
                "Traslado de hidroavião incluído (ida e volta)",
                "Café da manhã internacional diário",
                "Cancelamento gratuito até 7 dias",
                "Garantia do melhor preço",
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-white/10 backdrop-blur-sm p-3">
                  <Check className="w-5 h-5 text-emerald-300 mt-0.5" />
                  <span className="text-white">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => scrollToSection("pricing")}
                className="normal-case bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-900 font-semibold text-lg px-8 py-6 h-auto rounded-xl shadow-lg"
              >
                Ver datas disponíveis
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                className="normal-case border-cyan-200/60 text-cyan-100 hover:text-white hover:bg-white/10 px-8 py-6 h-auto rounded-xl"
              >
                Falar com especialista
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-300" /> Reserva segura SSL
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-200 fill-cyan-200" /> 5/5 (127 avaliações)
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-300" /> Certificado TripAdvisor 2024
              </div>
            </div>

            <div className="mt-10 motion-safe:animate-pulse text-white/70">
              <ChevronDown className="w-7 h-7 mx-auto" />
              <p className="text-xs mt-2">Role para ver mais</p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Signature Mosaic Gallery */}
        <section className="py-20" style={patternLight}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: DISPLAY_STACK }}>
                Momentos inesquecíveis
              </h2>
              <p className="text-slate-600 mt-2">
                Uma curadoria visual: villas sobre o mar, gastronomia autoral, spas serenos e pores do sol dourados.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              <div className="md:col-span-2 row-span-2 aspect-[4/5] overflow-hidden rounded-xl">
                <img src={overwaterVillas} alt="Overwater" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-xl">
                <img src={diningExperience} alt="Gastronomia" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={snorkeling} alt="Snorkel" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={spaTreatment} alt="Spa" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-xl">
                <img src={villasSunset} alt="Pôr do sol" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={wineCellar} alt="Adega" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={luxuryBathroom} alt="Banheiro luxo" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-xl">
                <img src={beachWedding} alt="Casamento praia" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Why this package */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: DISPLAY_STACK }}>
                  Por que este pacote?
                </h2>
                <p className="mt-2 text-slate-600">
                  Luxo descomplicado: tudo que importa está incluso, com curadoria para casais que buscam privacidade,
                  conforto e serviço impecável.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Bangalô overwater privativo com vista infinita",
                    "Traslado de hidroavião incluído, ida e volta",
                    "Café da manhã internacional diário",
                    "Cancelamento gratuito até 7 dias",
                    "Garantia do melhor preço",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200">
                        <Check className="w-4 h-4 text-cyan-700" />
                      </span>
                      <span className="text-slate-800">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                  <img src={romanticDinner} alt="Jantar" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                  <img src={luxuryBath} alt="Banheira" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-xl">
                  <img src={chefCooking} alt="Chef" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel strip */}
        <section className="py-16" style={patternLight}>
          <div className="container mx-auto px-4">
            <CarouselSection />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: DISPLAY_STACK }}>
                Escolha suas datas
              </h2>
              <p className="text-slate-600">Garanta sua vaga antes que esgote</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
              {pricingOptions.map((option, idx) => (
                <Card
                  key={idx}
                  className="relative p-8 bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-t-xl" />

                  <div className="mt-2 mb-4">
                    <div className="text-xs tracking-widest text-slate-500 mb-2 uppercase">Período</div>
                    <div className="text-lg font-semibold text-slate-900" style={{ fontFamily: DISPLAY_STACK }}>
                      {option.period}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-slate-900">
                      US$ {option.price} <span className="text-sm text-slate-500 font-medium">por pessoa</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border ${option.availability === "limited" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"}`}
                    >
                      {option.status}
                    </span>
                  </div>

                  <Button
                    onClick={handleWhatsAppClick}
                    aria-label="Reservar pelo WhatsApp"
                    className="normal-case w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl"
                  >
                    Reservar
                  </Button>
                </Card>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Reserva segura SSL
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Parcelamento disponível
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Cancelamento flexível
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Suporte 24/7
              </div>
            </div>

            {/* Terms */}
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900" style={{ fontFamily: DISPLAY_STACK }}>
                  Formas de pagamento
                </h3>
                <div className="space-y-1 text-slate-600">
                  <p>✓ Sinal de 20% — em até 24 horas</p>
                  <p>✓ Saldo de 80% — até 30 dias do embarque</p>
                </div>
              </Card>
              <Card className="p-6 bg-white border border-slate-200">
                <h3 className="font-semibold mb-2 text-slate-900" style={{ fontFamily: DISPLAY_STACK }}>
                  Política de cancelamento
                </h3>
                <div className="space-y-1 text-slate-600">
                  <p>✓ Até 30 dias antes da data de início — reembolso de 80% do valor total</p>
                  <p>✓ Entre 30 dias e a data de início — reembolso de 0% do valor total</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={patternLight}>
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900"
              style={{ fontFamily: DISPLAY_STACK }}
            >
              Antes de reservar
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-slate-200 rounded-lg px-6 py-2"
                  >
                    <AccordionTrigger className="text-lg font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA (ocean tint over image) */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 -z-10">
            <img src={villasSunset} alt="Pôr do sol nas Maldivas" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(1000px 400px at 50% 0, rgba(34,211,238,0.18), transparent 60%)" }}
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: DISPLAY_STACK }}>
              Pronto para a viagem dos sonhos?
            </h2>
            <p className="text-white/80 mt-2 mb-8">22+ pessoas visualizaram esta oferta nas últimas 24h</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="normal-case bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-900 font-semibold text-lg px-10 py-7 h-auto rounded-xl shadow-xl"
                aria-label="Garantir minha vaga agora pelo WhatsApp"
              >
                Garantir minha vaga agora
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("pricing")}
                className="normal-case border-white/60 text-white hover:bg-white/10 px-8 py-7 h-auto rounded-xl"
              >
                Ver preços e datas
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlackFridayMaldives;
