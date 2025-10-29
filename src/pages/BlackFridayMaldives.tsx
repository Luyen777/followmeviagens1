import { useState, useEffect, useRef } from "react";
import { MessageCircle, Check, Star, Shield, CreditCard, Clock, ChevronDown, Waves, Plane, Coffee, Wine, Heart, Sparkles, Calendar, Users, Gift, Activity, Utensils, Package, ChevronLeft, ChevronRight } from "lucide-react";
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
  return <section className="py-0">
      <div ref={containerRef} className="relative w-full overflow-hidden cursor-grab select-none" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onClick={togglePause}>
        <div ref={trackRef} className="flex gap-4 sm:gap-6 will-change-transform" style={{ width: 'fit-content' }}>
          {duplicatedExperiences.map((exp, index) => <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group">
                <img src={exp.image} alt={exp.alt} loading="eager" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" draggable="false" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
const BlackFridayMaldives = () => {
  const faqs = [{
    question: "O que está incluído no pacote?",
    answer: "O pacote inclui: 4 noites em bangalô overwater privativo, transfer de hidroavião ida e volta, sistema all inclusive com 3 refeições por dia, 1 café da manhã flutuante, open bar de chocolates diário, uma massagem para o casal, aulas de yoga 2x ao dia, equipamento de snorkel gratuito e welcome drinks."
  }, {
    question: "Qual é o melhor período para viajar?",
    answer: "As Maldivas têm clima tropical o ano todo. A estação seca (novembro a abril) oferece dias ensolarados e mar calmo, ideal para atividades aquáticas. A estação úmida (maio a outubro) pode ter chuvas ocasionais, mas ainda assim oferece temperaturas agradáveis e menos turistas."
  }, {
    question: "Como funciona o sistema all inclusive?",
    answer: "Este all inclusive premium inclui todas as refeições (café da manhã, almoço e jantar) nos restaurantes do resort, e bebidas não alcoólicas durante as refeições."
  }, {
    question: "É necessário visto para brasileiros?",
    answer: "Brasileiros recebem visto gratuito na chegada às Maldivas, válido por 30 dias. É necessário apenas passaporte com validade mínima de 6 meses, comprovante de reserva do hotel e passagem de retorno."
  }, {
    question: "Quais atividades estão disponíveis?",
    answer: "Além das inclusas no pacote, o resort oferece: mergulho com cilindro, pesca esportiva, passeios de barco ao pôr do sol, esportes aquáticos motorizados, experiências gastronômicas especiais e tratamentos no spa (com custo adicional)."
  }, {
    question: "Como funciona o transfer?",
    answer: "O transfer de hidroavião está incluído no pacote. A viagem dura aproximadamente 40 minutos com vistas espetaculares. Nossos parceiros aguardam vocês no aeroporto e cuidam de toda a logística."
  }];
  
  const [activeTab, setActiveTab] = useState(0);

  const pricingOptionsHeroSection = [{
    period: "Outubro até 25 de Dezembro 2025",
    price: "2.890",
    status: "Disponível",
    availability: "available"
  }, {
    period: "25 de Dezembro até 11 de Janeiro",
    price: "4.990",
    status: "Poucas vagas",
    availability: "limited"
  }, {
    period: "11 de Janeiro a 10 de Abril 2026",
    price: "3.050",
    status: "Disponível",
    availability: "available"
  }, {
    period: "10 de Abril a 21 de Dezembro 2026",
    price: "2.950",
    status: "Disponível",
    availability: "available"
  }];

  const pricingOptions = [{
    period: "Datas até 31/01/2025",
    price: "2.890",
    status: "Últimas 4 vagas",
    availability: "limited"
  }, {
    period: "Datas até 31/03/2025",
    price: "3.290",
    status: "Ainda há disponibilidade",
    availability: "available"
  }];

  const testimonials = [{
    name: "Ana e Pedro Silva",
    date: "Novembro 2024",
    rating: 5,
    text: "Nossa lua de mel foi simplesmente perfeita! O bangalô sobre as águas superou todas as expectativas, com vista incrível e privacidade total. O atendimento da Elite Lux foi impecável do início ao fim."
  }, {
    name: "Carlos e Juliana Mendes",
    date: "Outubro 2024",
    rating: 5,
    text: "Experiência inesquecível! A equipe cuidou de todos os detalhes, desde o transfer até as atividades no resort. O sistema all inclusive é realmente premium, com opções gastronômicas excepcionais."
  }, {
    name: "Rafael e Marina Costa",
    date: "Setembro 2024",
    rating: 5,
    text: "Vale cada centavo! As águas cristalinas, o spa, as aulas de yoga ao nascer do sol... tudo foi mágico. Agradeço à Elite Lux por tornar nosso sonho realidade com tanto profissionalismo."
  }];

  const packageStructuredData = createTravelPackageSchema({
    name: "Pacote Maldivas All-Inclusive - Bangalô sobre água privativo",
    description: "Experiência completa nas Maldivas com 4 noites em bangalô overwater, transfer de hidroavião e sistema all inclusive premium",
    image: heroImage,
    priceFrom: 2890,
    location: "Maldivas",
    url: "https://eliteluxtravel.com.br/promocoes/black-friday-maldivas"
  });
  const faqStructuredData = createFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));
  const breadcrumbStructuredData = createBreadcrumbSchema([{
    label: "Home",
    href: "https://eliteluxtravel.com.br"
  }, {
    label: "Pacotes",
    href: "https://eliteluxtravel.com.br/pacotes"
  }, {
    label: "Maldivas Black Friday",
    href: "https://eliteluxtravel.com.br/promocoes/black-friday-maldivas"
  }]);
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vi a oferta de Black Friday para as Maldivas e gostaria de mais informações sobre o pacote.");
    window.open(`https://wa.me/5511988347426?text=${message}`, "_blank");
  };
  return <>
      <SEOHead title="Pacote Maldivas All-Inclusive - Black Friday | Elite Lux Travel" description="Aproveite nossa oferta especial: 4 noites em bangalô overwater nas Maldivas com all-inclusive. Economize U$ 965 e parcele em até 10x sem juros." keywords={["pacote maldivas", "black friday maldivas", "viagem maldivas all inclusive", "bangalô overwater", "lua de mel maldivas"]} ogImage={heroImage} canonicalUrl="/promocoes/black-friday-maldivas" structuredData={[packageStructuredData, faqStructuredData, breadcrumbStructuredData]} />

      <WhatsAppButton />
      <Navigation />

      <main className="overflow-x-hidden">
        {/* REDESIGNED HERO SECTION */}
        <section className="relative min-h-screen bg-white dark:bg-slate-950">
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
          
          {/* Main content container */}
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-6">
            <div className="max-w-5xl mx-auto">
              {/* Offer badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>BLACK FRIDAY</span>
                  <span className="text-yellow-400">Oferta Limitada</span>
                </div>
              </div>

{/* Hero headline – clean, modern, less bold */}
              <h1 className="font-sans font-bold text-slate-900 dark:text-white text-center text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                Ilhas Maldivas: Luxo no Paraíso
                <span className="block font-sans font-normal text-slate-700 dark:text-slate-400 tracking-tight text-lg md:text-2xl lg:text-3xl mt-2">
                  Bangalô Sobre Águas Cristalinas • All Inclusive Premium
                </span>
              </h1>

{/* Luxury Price Highlight – Unified Card, Mobile Responsive */}
              <div className="flex flex-col items-center justify-center my-8">
                <div className="bg-white/95 border border-slate-200 shadow-lg rounded-xl px-4 py-4 sm:px-8 sm:py-6 w-full max-w-xs sm:max-w-md text-center">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <div className="flex items-center gap-2 mb-1 flex-wrap justify-center">
                      <span className="bg-yellow-100 text-yellow-800 rounded px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        Black Friday Exclusivo
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 rounded px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        25% OFF
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 my-1">
                      U$ 2.890 <span className="text-[12px] sm:text-lg font-normal text-slate-400">/ pessoa</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap justify-center">
                      <span className="text-[13px] sm:text-base text-emerald-600 font-semibold">
                        Você economiza <span className="font-bold">U$ 965</span>
                      </span>
                      <span className="bg-emerald-50 text-emerald-700 rounded px-2 py-0.5 text-[10px] sm:text-xs font-bold uppercase">
                        Oferta Especial
                      </span>
                    </div>
                  </div>
                </div>
              </div>



{/* CTA & Trust section – Trust badges first, then the button below */}
              <div className="flex flex-col items-center gap-8 mb-4">
                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-slate-400" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>Avaliação 5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Cancelamento Flexível</span>
                  </div>
                </div>
              
                {/* CTA Button – now centered below badges */}
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFC300] hover:from-[#FFC300] hover:to-[#FFA500] text-black font-medium text-base px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2.5 group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Reservar Agora
                </Button>
              </div>

              {/* Carousel Section - Integrated into Hero */}
              <div className="mt-24">
                <CarouselSection />
              </div>


            </div>
          </div>
        </section>

        {/* Package Details Section */}
        <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Package className="w-5 h-5 text-slate-600" />
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-center">
                O que está incluído
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 text-sm max-w-2xl mx-auto">
              Pacote completo com tudo que você precisa para uma experiência inesquecível
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto place-items-start md:place-items-center">
              {[{
              icon: Waves,
              text: "4 noites em bangalô overwater privativo"
            }, {
              icon: Plane,
              text: "Transfer de hidroavião ida e volta"
            }, {
              icon: Coffee,
              text: "Sistema all inclusive (3 refeições por dia)"
            }, {
              icon: Utensils,
              text: "Um café da manhã flutuante na piscina do quarto"
            }, {
              icon: Gift,
              text: "Open Bar de chocolates todos os dias"
            }, {
              icon: Heart,
              text: "Uma massagem para o casal"
            }, {
              icon: Activity,
              text: "Aula de yoga 2x por dia"
            }, {
              icon: Sparkles,
              text: "Snorkeling - equipmento gratuito"
            }, {
              icon: Heart,
              text: "Welcome drink e amenidades"
            }, {
              icon: CreditCard,
              text: "Pagamento em até 10x sem juros!"
            }].map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="flex items-start gap-4 bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200/60 dark:border-slate-800 w-full md:max-w-md justify-self-start md:justify-self-center">
                  <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground/90 text-left">{item.text}</span>
                </div>;
            })}
            </div>
          </div>
        </section>

        {/* Pricing Cards Section - Hero */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-center">
                Preços Especiais Black Friday
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 text-sm">
              Selecione o período desejado - Oferta limitada!
            </p>

            {/* Tabs Navigation */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {pricingOptionsHeroSection.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
                    }`}
                  >
                    <div className="text-xs md:text-sm whitespace-nowrap">
                      {option.period}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Card Display */}
            <div className="max-w-md mx-auto mb-12">
              <Card className="relative overflow-hidden shadow-2xl transition-all duration-500 border-slate-200/60 animate-in fade-in-50 slide-in-from-bottom-4">
                <div className="p-8">
                  <div className="mb-6 text-center">
                    <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      Período Selecionado
                    </div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {pricingOptionsHeroSection[activeTab].period}
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                      U$ {pricingOptionsHeroSection[activeTab].price}
                    </div>
                    <div className="text-sm text-muted-foreground">por pessoa</div>
                  </div>

                  <div className={`mb-6 text-center text-base font-medium ${
                    pricingOptionsHeroSection[activeTab].availability === 'limited' ? 'text-rose-600' : 'text-emerald-600'
                  }`}>
                    {pricingOptionsHeroSection[activeTab].status}
                  </div>

                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-medium h-12 text-base"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Reservar Este Período
                  </Button>
                </div>
              </Card>
            </div>

            {/* Payment Terms and Cancellation Policy */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 place-items-center md:place-items-start">
              <Card className="p-6 border-slate-200/60 w-full">
                <h3 className="font-semibold text-[1.2rem] mb-4 flex items-center justify-center md:justify-start gap-2">
                  <CreditCard className="w-5 h-5 text-slate-600" />
                  Formas de pagamento
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start justify-center md:justify-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-center md:text-left">Sinal de 20% em até 24 horas</span>
                  </div>
                  <div className="flex items-start justify-center md:justify-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-center md:text-left">Saldo de 80% até 30 dias do embarque</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-slate-200/60 w-full">
                <h3 className="font-semibold text-[1.2rem] mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Shield className="w-5 h-5 text-slate-600" />
                  Política de cancelamento
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start justify-center md:justify-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-center md:text-left">Até 30 dias antes: Reembolso de 80%</span>
                  </div>
                  <div className="flex items-start justify-center md:justify-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-center md:text-left">Menos de 30 dias: Sem reembolso</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-center">
                Avaliações dos Clientes
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 text-sm">
              Veja o que nossos clientes dizem sobre a experiência
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-slate-200/60">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Average rating */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 dark:bg-slate-900 rounded-full">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">5.0</span>
                <span className="text-muted-foreground">de 5.0 • 127 avaliações</span>
              </div>
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
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/20 dark:to-slate-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3 max-w-2xl mx-auto">
              Pronto para sua lua de mel dos sonhos?
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
              Nossa equipe está pronta para ajudar você a planejar cada detalhe
            </p>

            <Button 
              size="lg" 
              onClick={handleWhatsAppClick} 
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-medium text-base px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Falar com Especialista
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
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