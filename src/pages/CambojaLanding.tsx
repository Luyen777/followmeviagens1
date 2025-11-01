import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Star, Landmark, Heart, Utensils, Hotel, Shield, Clock, Plane, ThermometerSun, FileCheck, Syringe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import indiaHero from "@/assets/india-landing-hero.jpg";

const CambojaLanding = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Templos de Angkor & Phnom Penh - 7 Noites",
      description: "Explore os templos milenares de Angkor Wat e a vibrante capital Phnom Penh com guias especializados",
      duration: "7 noites / 8 dias",
      highlights: [
        "Nascer do sol em Angkor Wat",
        "Templos de Bayon e Ta Prohm",
        "Palácio Real de Phnom Penh",
        "Hotéis boutique 4-5 estrelas"
      ],
      priceFrom: "Consulte",
      slug: "templos-angkor-phnom-penh",
      image: indiaHero
    },
    {
      id: 2,
      title: "Camboja Completo - Em Breve",
      description: "Templos históricos, praias paradisíacas e cultura khmer em um roteiro completo",
      duration: "12 noites",
      highlights: [
        "Complexo de Angkor",
        "Praias de Sihanoukville",
        "Ilha de Koh Rong",
        "Experiências culturais autênticas"
      ],
      priceFrom: "Em breve",
      slug: "",
      image: indiaHero,
      comingSoon: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Camboja - Pacotes Exclusivos de Viagem | Follow Me Viagens</title>
        <meta name="description" content="Descubra o Camboja com pacotes exclusivos: Angkor Wat, templos milenares, praias paradisíacas e cultura khmer. Hotéis premium e suporte 24h." />
        <meta property="og:title" content="Camboja - Pacotes de Viagem | Follow Me Viagens" />
        <meta property="og:description" content="Angkor Wat, Phnom Penh e praias de Sihanoukville. Pacotes personalizados com guias especializados." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/camboja" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${indiaHero})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Descubra o Camboja
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Templos milenares, praias paradisíacas e cultura khmer autêntica
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
                  O Camboja é um destino fascinante que combina história milenar, templos magníficos e praias paradisíacas.
                  O icônico complexo de Angkor Wat, considerado a maior estrutura religiosa do mundo, é apenas o começo de
                  uma jornada inesquecível. De Siem Reap, com seus templos cobertos por selva, até a vibrante capital Phnom Penh,
                  onde o Palácio Real e a herança francesa criam uma atmosfera única, cada destino revela a riqueza da cultura khmer.
                  As praias intocadas de Sihanoukville e as ilhas paradisíacas de Koh Rong completam a experiência. Com uma culinária
                  exótica e deliciosa, povo acolhedor e custos acessíveis, o Camboja encanta casais em busca de romance e aventura,
                  amantes de história e arqueologia, e viajantes que desejam descobrir um Sudeste Asiático autêntico e menos explorado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cambodia Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Por que escolher o Camboja?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Um destino que combina patrimônios arqueológicos únicos, praias paradisíacas, cultura autêntica e experiências transformadoras
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Angkor Wat</h3>
                <p className="text-muted-foreground">
                  A maior estrutura religiosa do mundo e dezenas de templos milenares cobertos pela selva
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultura Khmer</h3>
                <p className="text-muted-foreground">
                  Tradições ancestrais, dança tradicional apsara e hospitalidade calorosa do povo cambojano
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gastronomia Exótica</h3>
                <p className="text-muted-foreground">
                  Sabores únicos da culinária khmer com influências tailandesas, vietnamitas e francesas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Hotel className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Praias Paradisíacas</h3>
                <p className="text-muted-foreground">
                  Ilhas tropicais intocadas, águas cristalinas e resorts exclusivos no litoral
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
                Tudo que você precisa saber antes de viajar para o Camboja
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Melhor Época</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Novembro a março - estação seca com clima agradável
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <ThermometerSun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Temperatura</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Média de 25-32ºC - clima tropical o ano todo
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Tempo de Voo</h3>
                <p className="text-sm text-muted-foreground text-center">
                  ~27 horas com conexões - via Oriente Médio ou Ásia
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Documentação</h3>
                <p className="text-sm text-muted-foreground text-center">
                  E-visa obrigatório - processo simples online (USD 30)
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg px-6 py-3">
                <Syringe className="w-5 h-5 text-amber-600" />
                <p className="text-sm text-amber-900 dark:text-amber-200">
                  <strong>Vacinação recomendada:</strong> Hepatite A e B, febre tifoide - consulte seu médico
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Nossos Pacotes para o Camboja
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experiências únicas combinando história, cultura e praias paradisíacas
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
                        onClick={() => navigate(`/camboja/${pkg.slug}`)}
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
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#0a0d1f]">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50"></div>

          <div className="container mx-auto relative z-10 px-4">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-sm text-amber-400/70 font-medium tracking-widest uppercase mb-4">
                Confiança e excelência
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">
                Por Que Nos Escolher
              </h2>
              <p className="text-slate-400 text-lg font-light">
                Excelência e dedicação em cada detalhe da sua viagem
              </p>
            </div>

            {/* Trust Signals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto mb-20">
              {[
                {
                  icon: Shield,
                  title: "20 Anos de Expertise",
                  description: "Especialistas em jornadas de luxo"
                },
                {
                  icon: Star,
                  title: "5.000+ Clientes Satisfeitos",
                  description: "100% de avaliações positivas no Google e demais canais"
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
                  <div key={index} className="group">
                    <div className="text-center space-y-4 p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.02]">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-amber-400" strokeWidth={1.5} />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">
                          {signal.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-light">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

            {/* Social Proof */}
            <div className="text-center">
              <a
                href="https://instagram.com/followmeviagens"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📸</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#0a0d1f]">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-white font-medium group-hover:text-amber-300 transition-colors">
                    @followmeviagens
                  </div>
                  <div className="text-sm text-slate-400">
                    Confiado por <span className="text-amber-400 font-medium">200.000+</span> viajantes
                  </div>
                </div>
              </a>
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
                  Respostas para as dúvidas mais comuns sobre viagens ao Camboja
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    É seguro viajar para o Camboja?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! O Camboja é um destino seguro para turistas, especialmente nas principais áreas turísticas como Siem Reap,
                    Phnom Penh e Sihanoukville. Nossos pacotes incluem transfers privativos, hotéis em áreas seguras, guias experientes
                    e suporte 24h em português. As regiões turísticas têm excelente infraestrutura e recebem milhões de visitantes
                    anualmente. Recomendamos seguir as orientações básicas de segurança como em qualquer destino internacional.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Como funciona o visto para o Camboja?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Brasileiros precisam de visto para entrar no Camboja. O processo é simples através do e-Visa online, que custa
                    USD 30 e permite estadia de até 30 dias. O visto eletrônico é aprovado em 3 dias úteis. Também é possível obter
                    visto na chegada em aeroportos principais. Desde janeiro de 2025, é obrigatório preencher o e-Arrival Card até
                    7 dias antes da chegada. Auxiliamos nossos clientes com todas as orientações necessárias.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Quantos dias são necessários para conhecer o Camboja?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Recomendamos no mínimo 7-8 noites para aproveitar os principais destaques: 3-4 noites em Siem Reap para explorar
                    o complexo de Angkor, 2 noites em Phnom Penh para conhecer a capital e sua história, e 2-3 noites nas praias de
                    Sihanoukville ou ilhas. Para quem deseja um roteiro mais completo incluindo experiências culturais e natureza, o
                    ideal são 10-14 noites. Nossos consultores ajudam a montar o roteiro perfeito de acordo com seu tempo disponível.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Qual moeda usar no Camboja?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A moeda oficial é o Riel Cambojano (KHR), mas o dólar americano é amplamente aceito e usado em todo o país,
                    especialmente em áreas turísticas. Recomendamos levar dólares americanos em notas pequenas (USD 1, 5, 10, 20).
                    O troco pode vir em riels. Cartões de crédito são aceitos em hotéis e restaurantes principais, mas é importante
                    ter dinheiro em espécie para compras menores, mercados e gorjetas. Caixas eletrônicos (ATMs) estão disponíveis
                    nas principais cidades.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Posso combinar o Camboja com outros destinos?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Com certeza! O Camboja combina perfeitamente com Tailândia, Vietnã e Laos, formando roteiros incríveis pelo
                    Sudeste Asiático. Uma combinação popular é Bangkok + Angkor Wat, ou Ho Chi Minh + Camboja + Angkor. Também é
                    possível estender para praias da Tailândia (Phuket, Koh Samui) após os templos. Podemos criar um roteiro
                    personalizado que maximize sua experiência na região. Consulte-nos para opções de combinação.
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

export default CambojaLanding;
