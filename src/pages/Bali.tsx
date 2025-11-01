import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Star, Landmark, Heart, Utensils, Waves, Shield, Clock, Plane, ThermometerSun, FileCheck, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Placeholder images - these need to be added to assets folder
// import baliHero from "@/assets/bali-landing-hero.jpg";
// import baliPackage from "@/assets/bali-package.avif";
import placeholderImage from "@/assets/maldives-hero.jpg"; // Using Maldives as placeholder

const Bali = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Bali Essencial - 7 Noites",
      description: "Explore Ubud, praias de Seminyak e templos sagrados com guias especializados e hotéis de charme",
      duration: "7 noites / 8 dias",
      highlights: [
        "Templo Tanah Lot ao pôr do sol",
        "Terraços de arroz de Tegallalang",
        "Praias de Seminyak e Uluwatu",
        "Hotéis boutique selecionados"
      ],
      priceFrom: "Consulte",
      slug: "bali-essencial-7-noites",
      image: placeholderImage
    },
    {
      id: 2,
      title: "Bali Cultural & Praias - Em Breve",
      description: "Combine a cultura de Ubud com as melhores praias e experiências de spa e gastronomia",
      duration: "10 noites",
      highlights: [
        "Floresta dos Macacos Sagrados",
        "Aulas de culinária balinesa",
        "Beach clubs em Canggu",
        "Tratamentos de spa tradicionais"
      ],
      priceFrom: "Em breve",
      slug: "",
      image: placeholderImage,
      comingSoon: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bali - Pacotes Exclusivos de Viagem | Follow Me Viagens</title>
        <meta name="description" content="Descubra Bali com pacotes exclusivos: templos sagrados, praias paradisíacas, terraços de arroz e cultura milenar. Hotéis de charme e experiências autênticas." />
        <meta property="og:title" content="Bali - Pacotes de Viagem | Follow Me Viagens" />
        <meta property="og:description" content="Templos, praias, cultura e natureza exuberante. Pacotes personalizados com guias especializados e suporte 24h." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/bali" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${placeholderImage})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Descubra Bali
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ilha dos Deuses: templos sagrados, praias paradisíacas e cultura milenar em pacotes personalizados
            </p>
          </div>
        </section>

        {/* About Destination Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
                Sobre o Destino
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center leading-relaxed">
                  Bali, conhecida como a "Ilha dos Deuses", é um paraíso indonésio que encanta visitantes do mundo todo
                  com sua mistura única de espiritualidade, natureza exuberante e hospitalidade calorosa. Dos terraços
                  de arroz em Tegallalang aos templos sagrados à beira-mar como Tanah Lot, das praias douradas de Seminyak
                  às florestas místicas de Ubud - cada canto da ilha revela uma experiência única. A rica cultura balinesa
                  se manifesta em cerimônias diárias, dança tradicional, arquitetura impressionante e uma culinária aromática
                  que celebra ingredientes locais e especiarias exóticas. Ideal para casais em lua de mel, famílias em busca
                  de aventura, surfistas procurando ondas perfeitas, e viajantes espirituais em busca de transformação interior.
                  Bali oferece resorts de luxo, praias paradisíacas, templos milenares e uma energia contagiante que toca a alma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bali Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Por que escolher Bali?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Um destino que combina praias paradisíacas, cultura espiritual profunda, natureza exuberante e experiências transformadoras
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Templos Sagrados</h3>
                <p className="text-muted-foreground">
                  Tanah Lot, Uluwatu, Besakih e centenas de templos que contam histórias milenares
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Waves className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Praias Paradisíacas</h3>
                <p className="text-muted-foreground">
                  De Seminyak a Nusa Dua, praias de areia branca e águas cristalinas para todos os gostos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultura & Espiritualidade</h3>
                <p className="text-muted-foreground">
                  Yoga, meditação, cerimônias tradicionais e uma energia que nutre corpo e alma
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gastronomia Única</h3>
                <p className="text-muted-foreground">
                  Sabores exóticos, beach clubs sofisticados e restaurantes premiados com vista para o mar
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Practical Information Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Informações Práticas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa saber antes de viajar para Bali
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Melhor Época</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Maio a outubro - estação seca com sol e clima agradável
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <ThermometerSun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Temperatura</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Média de 26-30ºC o ano todo - clima tropical quente
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Tempo de Voo</h3>
                <p className="text-sm text-muted-foreground text-center">
                  ~20-28 horas com conexões - via Oriente Médio ou Ásia
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Documentação</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Visto na chegada ou entrada gratuita - até 30 dias
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg px-6 py-3">
                <Users className="w-5 h-5 text-blue-600" />
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  <strong>Dica importante:</strong> Passaporte com 6 meses de validade e bilhete de retorno são obrigatórios
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Nossos Pacotes para Bali
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experiências únicas combinando praias, cultura, templos e natureza exuberante
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {pkg.comingSoon && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        Em Breve
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>

                    <div className="space-y-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">A partir de</p>
                      <p className="text-2xl font-bold text-primary">{pkg.priceFrom}</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    {pkg.comingSoon ? (
                      <Button className="w-full" size="lg" disabled>
                        Em Breve
                      </Button>
                    ) : (
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => navigate(`/bali/${pkg.slug}`)}
                      >
                        Ver Detalhes do Pacote
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 sm:py-44 relative overflow-hidden bg-gradient-to-b from-[#0a0d1f] via-[#0f1525] to-[#0a0d1f]">
          {/* Luxury bokeh light flares */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple-500/15 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-amber-500/10 via-yellow-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>

          {/* Abstract luxury pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px),
                                repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px)`
          }}></div>

          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

          <div className="container mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-24 sm:mb-32 animate-fade-in px-4">
              <p className="text-sm sm:text-base text-amber-400/80 font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Confiança e excelência em cada viagem
              </p>

              <h2 style={{ animationDelay: '0.2s', letterSpacing: '0.01em' }} className="sm:text-6xl font-display font-semibold text-white mb-8 tracking-tight leading-[1.1] text-balance animate-fade-in md:text-5xl text-5xl">
                Por Que Nos Escolher
              </h2>

              <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed font-light tracking-wide max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Excelência e dedicação em cada detalhe da sua viagem
              </p>
            </div>

            {/* Trust Signals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-28 sm:mb-32 px-4">
              {[
                {
                  icon: Shield,
                  title: "20 Anos de Expertise",
                  description: "Especialistas em jornadas de luxo"
                },
                {
                  icon: Star,
                  title: "5.000+ Clientes Satisfeitos",
                  description: "Depoimentos reais, experiências transformadoras"
                },
                {
                  icon: Heart,
                  title: "50+ Resorts Parceiros",
                  description: "Preços exclusivos em alguns dos melhores resorts do mundo"
                },
                {
                  icon: Clock,
                  title: "Atendimento 24/7",
                  description: "Suporte dedicado, sempre que você precisar"
                }
              ].map((signal, index) => {
                const Icon = signal.icon;
                return (
                  <div key={index} className="group relative animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.4}s` }}>
                    {/* Glassmorphism card */}
                    <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center transition-all duration-700 ease-out
                      hover:border-amber-500/40 hover:shadow-[0_20px_60px_-15px_rgba(251,191,36,0.3),0_0_40px_rgba(251,191,36,0.1)] hover:-translate-y-2 hover:bg-white/[0.12]
                      before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-amber-500/0 before:to-blue-500/0 before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-700">

                      {/* Subtle border gradient */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                      {/* Icon container with premium glow */}
                      <div className="inline-flex items-center justify-center w-20 h-20 mb-8 relative">
                        {/* Iridescent background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/20 via-purple-500/20 to-indigo-600/20 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-all duration-700"></div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

                        {/* Icon */}
                        <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl w-full h-full flex items-center justify-center border border-white/20 group-hover:border-amber-400/40 transition-all duration-700">
                          <Icon className="w-9 h-9 text-amber-400 group-hover:text-amber-300 relative z-10 group-hover:scale-110 transition-all duration-700 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-display font-semibold text-white mb-3 tracking-wide relative z-10 group-hover:text-amber-50 transition-colors duration-700">
                        {signal.title}
                      </h3>
                      <p className="text-base text-slate-300/90 leading-relaxed font-light tracking-wide relative z-10 group-hover:text-slate-200 transition-colors duration-700">
                        {signal.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Elegant divider */}
            <div className="relative mb-16 px-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-sm"></div>
            </div>

            {/* Premium Social Proof Badge */}
            <div className="text-center px-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="inline-flex items-center gap-5 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-full px-10 py-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(251,191,36,0.1)] hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.6),0_0_50px_rgba(251,191,36,0.2)] transition-all duration-700 hover:scale-105 group">
                <a href="https://instagram.com/followmeviagens" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5">
                  {/* Instagram icon with verification badge */}
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-[0_8px_16px_rgba(251,191,36,0.3)]">
                      <span className="text-white text-2xl">📸</span>
                    </div>
                    {/* Verification checkmark */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#0a0d1f] shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold text-lg tracking-wide group-hover:text-amber-300 transition-colors duration-300">
                        @followmeviagens
                      </span>
                    </div>
                    <div className="text-slate-300/90 text-sm tracking-wide font-light">
                      Confiado por <span className="text-amber-400 font-semibold">200.000+</span> viajantes
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Respostas para as dúvidas mais comuns sobre viagens a Bali
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Preciso de visto para viajar a Bali?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Brasileiros podem entrar em Bali com entrada gratuita por até 30 dias ou solicitar um Visto na
                    Chegada (Visa on Arrival) que também permite estadia de 30 dias, com possibilidade de extensão por
                    mais 30 dias. O visto na chegada custa aproximadamente IDR 500.000 (~$35 USD). É necessário passaporte
                    com no mínimo 6 meses de validade e bilhete de retorno ou continuação da viagem.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Qual a melhor época para visitar Bali?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A melhor época é durante a estação seca, de maio a outubro, quando o clima é ensolarado e menos úmido.
                    Os meses ideais são maio, junho, setembro e outubro, quando você encontra bom clima sem as multidões
                    do pico do verão. Julho e agosto são os meses mais movimentados. A estação chuvosa vai de novembro a
                    abril, mas ainda é possível viajar nesse período com temperaturas agradáveis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Qual moeda usar em Bali e como funciona o câmbio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A moeda oficial é a Rupia Indonésia (IDR). Recomendamos levar dólares americanos para trocar no destino
                    ou sacar rúpias em caixas eletrônicos locais. Cartões de crédito internacionais são aceitos em hotéis,
                    restaurantes e lojas principais, mas é importante ter dinheiro em espécie para mercados locais, pequenos
                    estabelecimentos e gorjetas. Casas de câmbio autorizadas oferecem boas taxas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    É seguro viajar para Bali?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! Bali é um destino muito seguro e recebe milhões de turistas anualmente. As principais áreas
                    turísticas como Seminyak, Ubud, Nusa Dua e Canggu têm excelente infraestrutura. Nossos pacotes incluem
                    transfers privativos, hotéis em áreas seguras e suporte 24h em português. Como em qualquer destino
                    turístico, recomendamos cuidados básicos com pertences pessoais e respeito às tradições locais.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Preciso de vacinas para ir a Bali?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não há vacinas obrigatórias para brasileiros que viajam diretamente para Bali. No entanto, recomenda-se
                    estar com a vacinação de rotina em dia e consultar um médico de viagens para orientações sobre vacinas
                    recomendadas como Hepatite A e B, febre tifoide e tétano. Se você passar por países com febre amarela
                    endêmica antes de chegar à Indonésia, a vacina contra febre amarela será obrigatória.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Bali;
