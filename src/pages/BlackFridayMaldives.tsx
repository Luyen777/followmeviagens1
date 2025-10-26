import { useState, useEffect, useRef } from "react";
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

const experiences = [
  { image: overwaterVillas, alt: "Villas sobre água com design luxuoso" },
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

const CarouselSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationRef = useRef<number>();
  const baseTimeRef = useRef(0);
  const pausedOffsetRef = useRef(0);

  const duplicatedExperiences = [...experiences, ...experiences];

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
    
    const track = trackRef.current;
    if (track) {
      const transform = window.getComputedStyle(track).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        const currentPosition = -matrix.m41;
        pausedOffsetRef.current = currentPosition;
        baseTimeRef.current = 0;
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
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        const currentPosition = -matrix.m41;
        pausedOffsetRef.current = currentPosition;
        baseTimeRef.current = 0;
      }
    }
  };

  const togglePause = () => {
    if (!isDragging) {
      setIsPaused(!isPaused);
    }
  };

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
  );
};

const BlackFridayMaldives = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Countdown timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 6);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Promoções", href: "/#pacotes" },
    { label: "Black Friday Maldivas", href: "/promocoes/black-friday-maldivas" }
  ];

  const faqs = [
    {
      question: "Posso cancelar minha reserva?",
      answer: "Sim! Oferecemos cancelamento gratuito até 7 dias antes da data de partida. Para cancelamentos feitos com menos de 7 dias, consulte nossa política de cancelamento."
    },
    {
      question: "O que está incluído no preço do pacote?",
      answer: "O pacote inclui: 4 noites em bangalô overwater, café da manhã internacional diário, traslados de hidroavião ida e volta, mini bar de cortesia, snorkeling equipment e welcome amenities."
    },
    {
      question: "Como funciona o traslado de hidroavião?",
      answer: "O hidroavião parte do aeroporto internacional de Malé e leva aproximadamente 20 minutos até o resort. O voo oferece vistas espetaculares das ilhas das Maldivas. O traslado está incluído no pacote."
    },
    {
      question: "Qual a melhor época para visitar as Maldivas?",
      answer: "As Maldivas podem ser visitadas o ano todo. A estação seca (dezembro a abril) oferece menos chuva, enquanto maio a novembro pode ter chuvas ocasionais, mas com excelentes oportunidades de mergulho."
    },
    {
      question: "Preciso de visto para as Maldivas?",
      answer: "Brasileiros não precisam de visto para estadias de até 30 dias. É necessário apenas passaporte com validade mínima de 6 meses."
    }
  ];

  const pricingOptions = [
    {
      period: "25 DE DEZEMBRO A 29 DE DEZEMBRO, 2025",
      price: "2.890",
      status: "Últimas 3 vagas",
      availability: "limited"
    },
    {
      period: "10 DE JANEIRO A 14 DE JANEIRO, 2026",
      price: "3.050",
      status: "6 vagas disponíveis",
      availability: "available"
    },
    {
      period: "15 DE JANEIRO A 19 DE JANEIRO, 2026",
      price: "3.200",
      status: "Disponível",
      availability: "available"
    },
    {
      period: "20 DE JANEIRO A 24 DE JANEIRO, 2026",
      price: "2.950",
      status: "2 vagas restantes",
      availability: "limited"
    }
  ];

  const packageSchema = createTravelPackageSchema({
    name: "Lua de Mel nas Maldivas - Black Friday",
    description: "4 noites em bangalô overwater com traslados de hidroavião inclusos",
    priceFrom: 2890,
    image: heroImage,
    url: "https://followmeviagens.com/promocoes/black-friday-maldivas",
    location: "Maldivas"
  });

  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SEOHead
        title="Lua de Mel Maldivas: 4 Noites Overwater com 25% OFF | Follow Me Viagens"
        description="Pacote lua de mel Maldivas com 25% desconto Black Friday. 4 noites bangalô overwater, traslados inclusos. A partir U$ 2.890. Reserve agora!"
        canonicalUrl="/promocoes/black-friday-maldivas"
        ogImage={heroImage}
        keywords={["maldivas lua de mel", "black friday maldivas", "bangalô overwater", "pacote maldivas", "viagem maldivas"]}
        structuredData={[packageSchema, faqSchema, breadcrumbSchema]}
      />

      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* Hero Section - Above the Fold */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Vista aérea das Maldivas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
            {/* Countdown Badge */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="bg-amber-500 text-black px-6 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 shadow-2xl">
                <Clock className="w-5 h-5" />
                <span>ESQUENTA BLACK FRIDAY 25% OFF - Expira em {timeLeft.days} dias</span>
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-center">
              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight animate-fade-in">
                Lua de Mel nas Maldivas: 4 Noites em Bangalô Overwater com 25% de Desconto
              </h1>

              {/* Pricing */}
              <div className="mb-8 animate-fade-in">
                <div className="text-amber-400 text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  A partir de U$ 2.890 por pessoa
                </div>
                <div className="text-white/90 text-xl md:text-2xl">
                  <span className="line-through text-white/60">De U$ 3.855</span> | <span className="text-emerald-400 font-semibold">ECONOMIZE U$ 965 POR PESSOA</span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-left animate-fade-in">
                {[
                  "Bangalô Sobre a Água com Vista Incrível do Oceano",
                  "Nós Pagamos Traslados de Hidroavião (U$ 450 de valor)",
                  "Café da Manhã Internacional Incluído",
                  "Cancelamento Flexível até 7 dias antes",
                  "Garantia de Melhor Preço"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <Check className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <Button
                size="lg"
                onClick={() => scrollToSection('pricing')}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-12 py-6 h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
              >
                VER DATAS DISPONÍVEIS — ÚLTIMAS 12 VAGAS
              </Button>

              {/* Trust Badges Row */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span>Reserva Segura SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span>5/5 (127 avaliações)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>Certificado TripAdvisor 2024</span>
                </div>
              </div>

              {/* Payment Logos */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-white/80 text-xs">
                <span className="bg-white/20 px-4 py-2 rounded font-semibold">VISA</span>
                <span className="bg-white/20 px-4 py-2 rounded font-semibold">Mastercard</span>
                <span className="bg-white/20 px-4 py-2 rounded font-semibold">PIX</span>
                <span className="bg-white/20 px-4 py-2 rounded font-semibold">Stripe Secure</span>
              </div>

              {/* Social Proof */}
              <p className="text-white/90 text-lg font-medium mb-8">
                Mais de 500 casais já viveram sua lua de mel conosco
              </p>

              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <ChevronDown className="w-8 h-8 text-white/70 mx-auto" />
                <p className="text-white/70 text-sm mt-2">↓ Veja o que está incluído ↓</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Image Carousel Section */}
        <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto relative z-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
              <h2 className="sm:text-5xl font-display font-medium text-foreground mb-4 sm:mb-6 tracking-tight text-balance leading-tight md:text-5xl text-4xl">
                Momentos Inesquecíveis nas Maldivas
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-light tracking-luxury max-w-2xl mx-auto">
                Das villas exclusivas sobre o mar cristalino aos tratamentos de spa rejuvenescedores, cada momento nas Maldivas é desenhado para criar memórias eternas de luxo e tranquilidade absoluta.
              </p>
            </div>

            <CarouselSection />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              ✨ Por Que Este é o Pacote Perfeito Para Sua Lua de Mel
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Experiências inesquecíveis em um dos destinos mais românticos do mundo
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">Bangalô Overwater Privativo</h3>
                <p className="text-muted-foreground">
                  Acorde com vista maravilhosa do oceano azul-turquesa direto da sua cama
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-3">Transfer Premium Incluído</h3>
                <p className="text-muted-foreground">
                  Nós pagamos seu traslado de hidroavião - voe sobre ilhas paradisíacas
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🍇</div>
                <h3 className="text-xl font-bold mb-3">Café da Manhã de Frente Para o Mar</h3>
                <p className="text-muted-foreground">
                  Comece cada dia com café internacional enquanto observa o oceano
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              💬 O Que Nossos Clientes Estão Dizendo
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <Card className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 font-semibold">5/5</span>
                </div>
                <p className="text-lg mb-4 italic">
                  "A vista do bangalô era exatamente como nas fotos. Acordar sobre a água foi inesquecível!"
                </p>
                <p className="text-sm text-muted-foreground">
                  — Marina & Carlos, São Paulo | Lua de Mel, Março 2024
                </p>
              </Card>

              <Card className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 font-semibold">5/5</span>
                </div>
                <p className="text-lg mb-4 italic">
                  "Resort simplesmente incrível. Experiência dos sonhos, vamos guardar pra sempre. Obrigada Follow Me Viagens pela organização impecável ❤️"
                </p>
                <p className="text-sm text-muted-foreground">
                  — Juliana & Roberto, Rio de Janeiro | Aniversário, Janeiro 2024
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('pricing')}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-10 py-6 h-auto rounded-xl"
              >
                GARANTIR MINHA VAGA COM 25% OFF
              </Button>
            </div>
          </div>
        </section>

        {/* Gastronomy Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6">
                🍽️ Experiências Gastronômicas de Classe Mundial
              </h2>
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src={diningImage}
                  alt="Experiência gastronômica nas Maldivas"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <p className="text-center text-lg text-muted-foreground">
                Saboreie pratos italianos, asiáticos e locais preparados por chefs premiados em 3 restaurantes diferentes
              </p>
            </div>
          </div>
        </section>

        {/* Package Inclusions Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              ✨ O Que Está Incluído no Seu Pacote
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "✈️", text: "Nós pagamos transfer de hidroavião (ida e volta)" },
                { icon: "🍉", text: "Café da manhã internacional todos os dias" },
                { icon: "✨", text: "4 noites em bangalô overwater privativo" },
                { icon: "🥂", text: "Mini bar de cortesia (bebidas não-alcoólicas)" },
                { icon: "🌊", text: "Snorkeling equipment gratuito" },
                { icon: "❤️", text: "Welcome drink e box de chocolate" },
                { icon: "💳", text: "Pagamento em até 10x sem juros" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-background p-6 rounded-lg shadow-sm">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              📅 Escolha Suas Datas - Últimas Vagas
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Garanta sua vaga antes que esgote
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {pricingOptions.map((option, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">PERÍODO</div>
                    <div className="text-lg font-bold">{option.period}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-amber-600">
                      U$ {option.price}
                    </div>
                    <div className="text-sm text-muted-foreground">por pessoa</div>
                  </div>

                  <div className={`mb-6 font-semibold ${option.availability === 'limited' ? 'text-red-600' : 'text-emerald-600'}`}>
                    {option.status}
                  </div>

                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold"
                  >
                    RESERVAR
                  </Button>
                </Card>
              ))}
            </div>

            {/* Trust Elements Below Pricing */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Reserva Segura SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span>Parcelamento Disponível</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Cancelamento Flexível</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Suporte 24/7</span>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Formas de pagamento</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>✓ Sinal de 20% - em até 24 horas</p>
                  <p>✓ Saldo de 80% - até 30 dias do embarque</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Política de cancelamento</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>✓ Até 30 dias antes da data de início - Reembolso de 80% do valor total</p>
                  <p>✓ Entre 30 dias e a data de início - Reembolso de 0% do valor total</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              O Que Você Precisa Saber Antes de Reservar
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20 dark:to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Últimas Vagas! Garanta Sua Vaga Antes Que Acabe
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              22+ pessoas visualizaram esta oferta nas últimas 24h
            </p>

            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-16 py-8 h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              GARANTIR MINHA VAGA AGORA
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>Avaliação 5 Estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Garantia de Melhor Preço</span>
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
