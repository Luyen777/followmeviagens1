import { useState, useEffect, useRef } from "react";
import { MessageCircle, Check, Star, Shield, CreditCard, Clock, ChevronDown, Waves, Plane, Coffee, Wine, Heart, Sparkles, Calendar, Users, Gift, Activity, Utensils, Package } from "lucide-react";
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
  return <section className="relative w-full overflow-hidden">
      <div ref={containerRef} className="relative w-full h-[240px] md:h-[280px] lg:h-[300px] cursor-grab select-none" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 pointer-events-none z-10" />
        <div ref={trackRef} className="flex will-change-transform">
          {duplicatedExperiences.map((exp, index) => <div key={index} className="relative w-[440px] h-[240px] md:h-[280px] lg:h-[300px] flex-shrink-0 mx-2">
              <div className="relative h-full rounded-xl overflow-hidden shadow-lg">
                <img src={exp.image} alt={exp.alt} loading="eager" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
const BlackFridayMaldives = () => {
  const faqs = [{
    question: "O que está incluído no pacote?",
    answer: "O pacote inclui: 4 noites em bangalô overwater privativo, transfer de hidroavião ida e volta, sistema all inclusive com 3 refeições por dia, café da manhã flutuante, mini bar com bebidas alcoólicas, open bar de chocolates diário, uma massagem para o casal, aulas de yoga 2x ao dia, equipamento de snorkel gratuito e welcome drink."
  }, {
    question: "Qual é o melhor período para viajar?",
    answer: "As Maldivas têm clima tropical o ano todo. A estação seca (novembro a abril) oferece dias ensolarados e mar calmo, ideal para atividades aquáticas. A estação úmida (maio a outubro) pode ter chuvas ocasionais, mas ainda assim oferece temperaturas agradáveis e menos turistas."
  }, {
    question: "Como funciona o sistema all inclusive?",
    answer: "Nosso all inclusive premium inclui todas as refeições (café da manhã, almoço e jantar) em qualquer um dos restaurantes do resort, bebidas alcoólicas e não alcoólicas ilimitadas, minibar do quarto reabastecido diariamente e lanches ao longo do dia."
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
  const packageStructuredData = createTravelPackageSchema({
    name: "Pacote Maldivas All-Inclusive - Bangalô sobre água privativo",
    description: "Experiência completa nas Maldivas com 4 noites em bangalô overwater, transfer de hidroavião e sistema all inclusive premium",
    price: "2890",
    priceRange: "U$ 2.890 - U$ 3.290",
    startDate: "2025-01-01",
    endDate: "2025-03-31",
    duration: "P4D",
    location: "Maldivas",
    includesFood: true,
    includesAccommodation: true,
    includesTransport: true
  });
  const faqStructuredData = createFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));
  const breadcrumbStructuredData = createBreadcrumbSchema([{
    name: "Home",
    url: "https://eliteluxtravel.com.br"
  }, {
    name: "Pacotes",
    url: "https://eliteluxtravel.com.br/pacotes"
  }, {
    name: "Maldivas Black Friday",
    url: "https://eliteluxtravel.com.br/maldivas-black-friday"
  }]);
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vi a oferta de Black Friday para as Maldivas e gostaria de mais informações sobre o pacote.");
    window.open(`https://wa.me/5511944495505?text=${message}`, "_blank");
  };
  return <>
      <SEOHead title="Pacote Maldivas All-Inclusive - Black Friday | Elite Lux Travel" description="Aproveite nossa oferta especial: 4 noites em bangalô overwater nas Maldivas com all-inclusive. Economize U$ 965 e parcele em até 10x sem juros." keywords="pacote maldivas, black friday maldivas, viagem maldivas all inclusive, bangalô overwater, lua de mel maldivas" ogImage={heroImage} structuredData={[packageStructuredData, faqStructuredData, breadcrumbStructuredData]} />

      <WhatsAppButton />
      <Navigation />

      <main className="overflow-x-hidden">
        {/* REDESIGNED HERO SECTION */}
        <section className="relative min-h-screen bg-white dark:bg-slate-950">
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
          
          {/* Main content container */}
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Offer badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>BLACK FRIDAY</span>
                  <span className="text-yellow-400">Oferta Limitada</span>
                </div>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white text-center leading-tight mb-6">
                Maldivas All-Inclusive
                <span className="block text-3xl md:text-5xl lg:text-6xl text-slate-700 dark:text-slate-300 font-normal mt-2">
                  Bangalô sobre água privativo
                </span>
              </h1>

              {/* Price highlight box */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <div className="bg-slate-900 dark:bg-slate-800 text-white px-8 py-4 rounded-2xl shadow-xl">
                  <div className="text-sm font-medium mb-1 opacity-90">A partir de</div>
                  <div className="text-3xl md:text-4xl font-bold">U$ 2.890</div>
                  <div className="text-sm mt-1 opacity-90">por pessoa</div>
                </div>
                
                <div className="bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-xl animate-pulse">
                  <div className="text-sm font-medium mb-1">Economize</div>
                  <div className="text-2xl md:text-3xl font-bold">U$ 965</div>
                  <div className="text-sm mt-1">Desconto especial</div>
                </div>
              </div>

              {/* Features grid - clean layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Waves className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300">4 noites overwater</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300">Transfer hidroavião</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300">All inclusive premium</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Wine className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300">Mini bar incluso</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300">Massagem casal</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300">10x sem juros</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col items-center gap-6 mb-16">
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick} 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg px-12 py-7 h-auto rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reservar Agora
                </Button>

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
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center animate-bounce">
                <ChevronDown className="w-6 h-6 text-slate-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <CarouselSection />

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

            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
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
              icon: Wine,
              text: "Mini bar no quarto com bebidas alcoólicas"
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
              text: "Snorkeling equipmento gratuito"
            }, {
              icon: Heart,
              text: "Welcome drink e amenidades"
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