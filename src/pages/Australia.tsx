import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Star, Shield, Heart, Clock, Plane, ThermometerSun, FileCheck, CreditCard, Globe, Palmtree, Building2, Mountain } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Import Australia images
import australiaHero from "@/assets/australia/photo-1519406155028-39dbcdf8400c.avif";
import australiaPackage from "@/assets/australia/photo-1548296404-93c7694b2f91.avif";

const Australia = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Austrália Completa - 10 Noites",
      description: "Explore Sydney, Melbourne e Cairns com transfers privativos, hospedagem de luxo e tours exclusivos",
      duration: "10 noites / 11 dias",
      highlights: [
        "Sydney Opera House e cruzeiro pela baía",
        "Melbourne: arte urbana e Yarra Valley",
        "Grande Barreira de Corais em Cairns",
        "Hotéis de luxo e guias especializados"
      ],
      priceFrom: "Consulte",
      slug: "australia-completa-10-noites",
      image: australiaPackage
    }
  ];

  return (
    <>
      <Helmet>
        <title>Austrália - Pacotes Exclusivos de Viagem | Follow Me Viagens</title>
        <meta name="description" content="Descubra a Austrália com pacotes exclusivos: Sydney, Melbourne, Grande Barreira de Corais e experiências únicas. Hotéis premium e suporte completo." />
        <meta property="og:title" content="Austrália - Pacotes de Viagem | Follow Me Viagens" />
        <meta property="og:description" content="Sydney Opera House, Grande Barreira de Corais, Melbourne e muito mais. Pacotes personalizados com suporte 24h." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/australia" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${australiaHero})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Austrália: Destino dos Sonhos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Diversidade impressionante, paisagens inesquecíveis e experiências de alto padrão
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
                  A Austrália é um país-continente de contrastes e belezas naturais, onde desertos avermelhados encontram
                  praias paradisíacas e florestas tropicais se alternam com metrópoles cosmopolitas. A fauna única — cangurus,
                  coalas, wallabies, diabo-da-tasmânia — e paisagens icônicas, como a Grande Barreira de Corais e Uluru, fazem
                  do país uma referência para quem busca natureza exuberante e experiências culturais autênticas. Sydney e
                  Melbourne lideram a cena urbana, combinando arquitetura moderna, gastronomia premiada, eventos esportivos e
                  arte de rua. Prepare-se para um destino vibrante, seguro, moderno e repleto de hospitalidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Australia Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Por Que Escolher a Austrália?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Uma viagem completa que mistura aventura, cultura e sofisticação
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualidade de Vida</h3>
                <p className="text-muted-foreground">
                  Cidades entre as melhores do mundo em bem-estar e segurança
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palmtree className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Natureza Selvagem</h3>
                <p className="text-muted-foreground">
                  Praias cristalinas, parques nacionais e vida selvagem única
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experiências Exclusivas</h3>
                <p className="text-muted-foreground">
                  Grande Barreira de Corais, roteiros gourmet e eventos internacionais
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Infraestrutura Moderna</h3>
                <p className="text-muted-foreground">
                  Aeroportos internacionais, hotéis de luxo e transportes eficientes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Information Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Informações Práticas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa saber antes de viajar para a Austrália
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Melhor Época</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Ano todo - verão para praias, inverno para deserto
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <ThermometerSun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Temperatura</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Varia de tropical ao norte a temperado no sul
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Tempo de Voo</h3>
                <p className="text-sm text-muted-foreground text-center">
                  20-30 horas com 1 ou 2 escalas internacionais
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Documentação</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Visto obrigatório - processo online simples
                </p>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Documentação e Visto</h3>
                    <p className="text-muted-foreground">
                      Brasileiros precisam de visto para entrar na Austrália. Os principais tipos são o eVisitor (subclasse 651),
                      gratuito e com validade de até 90 dias, e o visto de turista (subclasse 600), indicado para estadias prolongadas.
                      Ambos podem ser solicitados online; é obrigatório ter passaporte válido por pelo menos seis meses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Moeda e Custos</h3>
                    <p className="text-muted-foreground">
                      A moeda é o dólar australiano (AUD). Cartões de crédito são amplamente aceitos, mas recomenda-se portar
                      dinheiro para pequenas despesas em áreas remotas. O custo de vida é alto: refeições variam de R$ 60 a R$ 300
                      por pessoa, hospedagens de R$ 150 (hostel) a R$ 600+ (hotéis centrais).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Saúde e Seguro</h3>
                    <p className="text-muted-foreground">
                      Não há vacinas obrigatórias para brasileiros, mas quem estiver em áreas de risco de febre amarela precisa
                      apresentar o certificado internacional. O sistema de saúde é excelente, mas caro—contratar seguro viagem é
                      indispensável.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transporte</h3>
                    <p className="text-muted-foreground">
                      Voos internos são recomendados para longas distâncias. Em cidades, o transporte público é moderno e eficiente.
                      Alugar carro é ideal para percorrer roteiros como a Great Ocean Road ou regiões vinícolas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Banner */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-start gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg px-6 py-4 text-left max-w-2xl">
                <Star className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    <strong>Dicas de Ouro:</strong> Use filtro solar regularmente, fique atento a avisos em praias e parques sobre
                    animais (medusas, crocodilos), e compre passes de atrações para economizar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Nosso Pacote Para a Austrália
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experiências exclusivas combinando natureza, cultura e sofisticação
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => navigate(`/australia/${pkg.slug}`)}
                    >
                      Ver Detalhes do Pacote
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Personalize seu roteiro conosco. Consulte opções completas com aéreo, hotéis, refeições e tours guiados.
                Atendemos grupos, famílias, casais, lua de mel e viagens solo com foco em conforto, segurança e exclusividade.
              </p>
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
                  Respostas para as dúvidas mais comuns sobre viagens à Austrália
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Preciso de visto para viajar para a Austrália?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim, todos os brasileiros precisam solicitar visto antes do embarque. O processo é todo online e nosso
                    time orienta de ponta a ponta. Os principais tipos são o eVisitor (gratuito, até 90 dias) e o visto de
                    turista para estadias prolongadas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Qual a melhor época para visitar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Primavera e outono oferecem clima agradável em todas as regiões, mas a escolha ideal depende do roteiro.
                    O verão (dez-fev) é perfeito para as praias; o inverno (jun-ago) para o deserto ou regiões montanhosas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Quanto tempo dura o voo do Brasil até a Austrália?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Entre 20 e 30 horas, sempre com 1 ou 2 escalas em cidades internacionais. Os voos geralmente fazem
                    conexão em Dubai, Doha, Santiago ou Auckland.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Posso viajar com crianças?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! O país é muito seguro e há inúmeros passeios adaptados para famílias, como zoológicos, parques
                    aquáticos e roteiros ecológicos. A Austrália é um destino excelente para viagens em família.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Preciso de seguro viagem?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Recomendamos fortemente para todos os viajantes, pois o sistema de saúde é pago para estrangeiros.
                    O seguro cobre emergências médicas, cancelamentos e outros imprevistos durante a viagem.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Quais são os principais atrativos?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sydney Opera House, Grande Barreira de Corais, Uluru, praias paradisíacas, roteiros de gastronomia e
                    vinhos, arte urbana em Melbourne, parques nacionais e experiências com a fauna única australiana.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Qual idioma é falado?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Inglês é o idioma oficial. É interessante conhecer algumas expressões australianas, que nosso time
                    compartilha no material de viagem fornecido aos clientes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    Qual moeda levar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Leve dólar australiano (AUD) ou utilize cartão internacional para mais praticidade. Cartões de crédito
                    são amplamente aceitos em todo o país.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    Preciso de vacinas especiais?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não há vacinas obrigatórias para brasileiros, exceto para quem passou por áreas endêmicas de febre amarela,
                    que deve apresentar o certificado internacional. Sempre sugerimos manter o calendário vacinal em dia.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    Como funcionam os pagamentos para os pacotes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Parcelamos em reais (R$) com conversão realizada na data do pagamento. Consulte-nos para formas, prazos
                    e detalhes personalizados do seu pacote.
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

export default Australia;
