import { useState, useEffect, useRef } from "react";
import { MessageCircle, Check, Star, Shield, CreditCard, Clock, ChevronDown, Waves, Plane, Coffee, Wine, Heart, Sparkles, Calendar, Users } from "lucide-react";
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
const experiences = [{
  image: overwaterVillas,
  alt: "Villas sobre água com design luxuoso"
}, {
  image: luxuryBathroom,
  alt: "Banheiro de luxo com vista para o mar"
}, {
  image: chefCooking,
  alt: "Chef preparando experiências gastronômicas ao vivo"
}, {
  image: wineCellar,
  alt: "Adega de vinhos premium e experiências de degustação"
}, {
  image: beachWedding,
  alt: "Cerimônias românticas na praia paradisíaca"
}, {
  image: spaTreatment,
  alt: "Tratamentos de spa relaxantes e rejuvenescedores"
}, {
  image: diningExperience,
  alt: "Experiências gastronômicas em ambientes únicos"
}, {
  image: snorkeling,
  alt: "Mergulho em águas cristalinas e vida marinha vibrante"
}, {
  image: romanticDinner,
  alt: "Jantares românticos à beira-mar"
}, {
  image: luxuryBath,
  alt: "Banheiras de luxo com vista panorâmica"
}, {
  image: villasSunset,
  alt: "Villas exclusivas ao pôr do sol"
}];
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
        newScroll = singleSetWidth + newScroll % singleSetWidth;
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
        newScroll = singleSetWidth + newScroll % singleSetWidth;
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
  return <div className="mb-12 sm:mb-16 animate-fade-in">
      <div ref={containerRef} className="relative w-full overflow-hidden cursor-grab select-none" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onClick={togglePause}>
        <div ref={trackRef} className="flex gap-4 sm:gap-6 will-change-transform" style={{
        width: 'fit-content'
      }}>
          {duplicatedExperiences.map((experience, index) => <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 group">
                <img src={experience.image} alt={experience.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" draggable="false" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
const BlackFridayMaldives = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    // Countdown timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 6);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
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
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const breadcrumbItems = [{
    label: "Início",
    href: "/"
  }, {
    label: "Promoções",
    href: "/#pacotes"
  }, {
    label: "Black Friday Maldivas",
    href: "/promocoes/black-friday-maldivas"
  }];
  const faqs = [{
    question: "Posso cancelar minha reserva?",
    answer: "Até 30 dias antes da viagem, o reembolso é de 80% do valor. A partir de 30 dias antes da viagem, já não é possível cancelamento com reembolso."
  }, {
    question: "O que está incluído no preço do pacote?",
    answer: "O pacote inclui: 4 noites em bangalô overwater, café da manhã internacional diário, traslados de hidroavião ida e volta, mini bar de cortesia, snorkeling equipment e welcome amenities."
  }, {
    question: "Como funciona o traslado de hidroavião?",
    answer: "O hidroavião parte do aeroporto internacional de Malé e leva aproximadamente 20 minutos até o resort. O voo oferece vistas espetaculares das ilhas das Maldivas. O traslado está incluído no pacote."
  }, {
    question: "Qual a melhor época para visitar as Maldivas?",
    answer: "As Maldivas podem ser visitadas o ano todo. A estação seca (dezembro a abril) oferece menos chuva, enquanto maio a novembro pode ter chuvas ocasionais, mas com excelentes oportunidades de mergulho."
  }, {
    question: "Preciso de visto para as Maldivas?",
    answer: "Brasileiros não precisam de visto para estadias de até 30 dias. É necessário apenas passaporte com validade mínima de 6 meses."
  }];
  const pricingOptions = [{
    period: "25 DE DEZEMBRO A 29 DE DEZEMBRO, 2025",
    price: "2.890",
    status: "Últimas 3 vagas",
    availability: "limited"
  }, {
    period: "10 DE JANEIRO A 14 DE JANEIRO, 2026",
    price: "3.050",
    status: "6 vagas disponíveis",
    availability: "available"
  }, {
    period: "15 DE JANEIRO A 19 DE JANEIRO, 2026",
    price: "3.200",
    status: "Disponível",
    availability: "available"
  }, {
    period: "20 DE JANEIRO A 24 DE JANEIRO, 2026",
    price: "2.950",
    status: "2 vagas restantes",
    availability: "limited"
  }];
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
  return <>
      <SEOHead title="Lua de Mel Maldivas: 4 Noites Overwater com 25% OFF | Follow Me Viagens" description="Pacote lua de mel Maldivas com 25% desconto Black Friday. 4 noites bangalô overwater, traslados inclusos. A partir U$ 2.890. Reserve agora!" canonicalUrl="/promocoes/black-friday-maldivas" ogImage={heroImage} keywords={["maldivas lua de mel", "black friday maldivas", "bangalô overwater", "pacote maldivas", "viagem maldivas"]} structuredData={[packageSchema, faqSchema, breadcrumbSchema]} />

      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* Hero Section - Above the Fold */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Vista aérea das Maldivas" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
            {/* Countdown Badge */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="text-slate-700 px-5 py-2.5 rounded-full font-medium text-xs md:text-sm flex items-center gap-2 shadow-lg bg-white/95 backdrop-blur-sm border border-slate-200">
                <Clock className="w-4 h-4" />
                <span>Oferta Especial • Válida por {timeLeft.days} dias</span>
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-center">
              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight animate-fade-in lg:text-5xl">
                Lua de Mel nas Maldivas: 4 Noites em Bangalô Overwater com 25% de Desconto
              </h1>

              {/* Pricing */}
              <div className="mb-8 animate-fade-in">
                <div className="text-rose-400 text-3xl md:text-4xl font-bold mb-2">
                  A partir de U$ 2.890 por pessoa
                </div>
                <div className="text-white/90 text-lg md:text-xl">
                  <span className="line-through text-white/60">De U$ 3.855</span> <span className="text-white/40 mx-2">•</span> <span className="text-emerald-400 font-medium">Economize U$ 965</span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-left animate-fade-in">
                {["Bangalô Sobre a Água com Vista Incrível do Oceano", "Nós Pagamos Traslados de Hidroavião (U$ 450 de valor)", "Café da Manhã Internacional Incluído", "Cancelamento Flexível até 7 dias antes", "Garantia de Melhor Preço"].map((benefit, index) => <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <Check className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-lg">{benefit}</span>
                  </div>)}
              </div>

              {/* Primary CTA */}
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="text-white font-semibold text-base px-10 py-6 h-auto rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 mb-8 border border-slate-700 bg-green-800 hover:bg-green-700">
                Ver Datas Disponíveis
              </Button>

              {/* Trust Badges Row */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-400 fill-rose-400" />
                  <span>Avaliação 5.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Cancelamento Flexível</span>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="animate-bounce mt-8">
                <ChevronDown className="w-6 h-6 text-white/50 mx-auto" />
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
        <section className="py-24 bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-3">
              Por que escolher este pacote
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-sm md:text-base">
              Experiências cuidadosamente selecionadas para sua lua de mel perfeita
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 border-slate-200/60 bg-white/80 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-5">
                  <Waves className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Bangalô Overwater Privativo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Acorde com vista do oceano azul-turquesa direto da sua cama
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 border-slate-200/60 bg-white/80 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-50 mb-5">
                  <Plane className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Transfer Premium Incluído</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Traslado de hidroavião com vistas espetaculares das ilhas
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 border-slate-200/60 bg-white/80 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 mb-5">
                  <Coffee className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Café da Manhã Internacional</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comece cada dia com café gourmet de frente para o mar
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-3">
              Avaliações de clientes
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-sm">
              Experiências reais de casais que viajaram conosco
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <Card className="p-8 border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-rose-500 fill-rose-500" />)}
                </div>
                <p className="text-base mb-6 leading-relaxed text-foreground/90">
                  "A vista do bangalô era exatamente como nas fotos. Acordar sobre a água foi inesquecível!"
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Marina & Carlos • São Paulo
                </p>
              </Card>

              <Card className="p-8 border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-rose-500 fill-rose-500" />)}
                </div>
                <p className="text-base mb-6 leading-relaxed text-foreground/90">
                  "Resort simplesmente incrível. Experiência dos sonhos, vamos guardar pra sempre. Obrigada Follow Me Viagens pela organização impecável."
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Juliana & Roberto • Rio de Janeiro
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="text-white font-semibold text-base px-10 py-6 h-auto rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700">
                Ver Preços e Datas
              </Button>
            </div>
          </div>
        </section>

        {/* Gastronomy Section */}
        

        {/* Package Inclusions Section */}
        <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-3">
              O que está incluído
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-sm">
              Tudo pensado para sua experiência ser perfeita
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[{
              icon: Plane,
              text: "Transfer de hidroavião ida e volta"
            }, {
              icon: Coffee,
              text: "Café da manhã internacional diário"
            }, {
              icon: Waves,
              text: "4 noites em bangalô overwater privativo"
            }, {
              icon: Wine,
              text: "Mini bar de cortesia"
            }, {
              icon: Sparkles,
              text: "Snorkeling equipment gratuito"
            }, {
              icon: Heart,
              text: "Welcome drink e amenities"
            }, {
              icon: CreditCard,
              text: "Pagamento em até 10x sem juros"
            }].map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="flex items-start gap-4 bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                  <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground/90">{item.text}</span>
                </div>;
            })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-slate-600" />
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-center">
                Escolha suas datas
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 text-sm">
              Disponibilidade limitada para os próximos meses
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {pricingOptions.map((option, index) => <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-slate-200/60">
                  <div className="mb-5">
                    <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Período</div>
                    <div className="text-base font-semibold">{option.period}</div>
                  </div>

                  <div className="mb-5">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                      U$ {option.price}
                    </div>
                    <div className="text-sm text-muted-foreground">por pessoa</div>
                  </div>

                  <div className={`mb-6 text-sm font-medium ${option.availability === 'limited' ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {option.status}
                  </div>

                  <Button onClick={handleWhatsAppClick} className="w-full text-white font-semibold bg-slate-800 hover:bg-slate-900 border border-slate-700">
                    Reservar
                  </Button>
                </Card>)}
            </div>

            {/* Payment Terms */}
            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="p-6 border-slate-200/60">
                <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-slate-600" />
                  Formas de pagamento
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Sinal de 20% em até 24 horas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Saldo de 80% até 30 dias do embarque</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-slate-200/60">
                <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-slate-600" />
                  Política de cancelamento
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Até 30 dias antes: Reembolso de 80%</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Menos de 30 dias: Sem reembolso</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-3">
              Perguntas frequentes
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-sm">
              Tire suas dúvidas sobre a viagem
            </p>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-slate-900 rounded-lg px-6 border border-slate-200/60 dark:border-slate-800">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/20 dark:to-slate-950">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
              <Users className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3 max-w-2xl mx-auto">
              Pronto para sua lua de mel dos sonhos?
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
              Nossa equipe está pronta para ajudar você a planejar cada detalhe
            </p>

            <Button size="lg" onClick={handleWhatsAppClick} className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-base px-12 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border border-slate-700">
              Falar com Especialista
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Avaliação 5.0</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default BlackFridayMaldives;