import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Star, Landmark, Heart, Utensils, Hotel, Shield, Clock, Plane, ThermometerSun, FileCheck, Syringe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import indiaHero from "@/assets/india-hero.jpg";

const IndiaLanding = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Triângulo Dourado - 7 Noites",
      description: "Explore Delhi, Jaipur e Agra com guias especializados, hotéis premium e transfers inclusos",
      duration: "7 noites / 8 dias",
      highlights: [
        "Taj Mahal ao nascer do sol",
        "Palácios de Jaipur e Delhi",
        "Guias em português",
        "Hotéis 5 estrelas"
      ],
      priceFrom: "Consulte",
      slug: "triangulo-dourado-7-noites",
      image: indiaHero
    },
    {
      id: 2,
      title: "Índia Espiritual - Em Breve",
      description: "Varanasi, Rishikesh e experiências de meditação e yoga no coração espiritual da Índia",
      duration: "10 noites",
      highlights: [
        "Cerimônias no Rio Ganges",
        "Retiro de yoga em Rishikesh",
        "Templos sagrados",
        "Guias especializados"
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
        <title>Índia - Pacotes Exclusivos de Viagem | Follow Me Viagens</title>
        <meta name="description" content="Descubra a Índia com pacotes exclusivos: Triângulo Dourado, Taj Mahal, palácios imperiais e experiências culturais. Hotéis premium e guias em português." />
        <meta property="og:title" content="Índia - Pacotes de Viagem | Follow Me Viagens" />
        <meta property="og:description" content="Taj Mahal, Delhi, Jaipur e Agra. Pacotes personalizados com guias especializados e suporte 24h." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/india" />
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
              Descubra a Índia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Patrimônios históricos, espiritualidade e cultura milenar em pacotes personalizados
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
                  A Índia é um país de contrastes fascinantes, onde templos milenares convivem com metrópoles vibrantes e tradições 
                  ancestrais se entrelaçam com a modernidade. Do icônico Taj Mahal aos palácios majestosos de Jaipur, passando pela 
                  espiritualidade de Varanasi e a energia caótica de Delhi - cada destino revela uma faceta única dessa nação 
                  extraordinária. A culinária aromática, as cores vibrantes dos mercados, a hospitalidade calorosa do povo indiano 
                  e os rituais espirituais criam uma experiência sensorial inesquecível. Ideal para casais em busca de romance, 
                  famílias querendo vivenciar uma cultura completamente diferente, e viajantes que desejam expandir seus horizontes 
                  em uma jornada transformadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why India Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Por que escolher a Índia?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Um destino que combina patrimônios históricos, espiritualidade profunda, cultura milenar e experiências gastronômicas únicas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patrimônios Históricos</h3>
                <p className="text-muted-foreground">
                  Taj Mahal, Forte Âmbar, Palácio dos Ventos e dezenas de monumentos UNESCO
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultura Espiritual</h3>
                <p className="text-muted-foreground">
                  Templos sagrados, cerimônias místicas e rituais milenares que tocam a alma
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Culinária Autêntica</h3>
                <p className="text-muted-foreground">
                  Sabores intensos, especiarias aromáticas e pratos que são patrimônio gastronômico
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Hotel className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hotéis Maharaja</h3>
                <p className="text-muted-foreground">
                  Palácios convertidos em hotéis 5 estrelas para uma experiência real
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Travel with Us Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Por que viajar com Follow Me Viagens?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-lg border text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Roteiros Personalizados</h3>
                <p className="text-sm text-muted-foreground">
                  Criados por especialistas em destinos asiáticos
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border text-center">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hotéis Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Curadoria de hospedagens 4-5 estrelas e palácios convertidos
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Suporte 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Assistência antes, durante e depois da viagem
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border text-center">
                <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Condições Especiais</h3>
                <p className="text-sm text-muted-foreground">
                  Vantagens exclusivas para viajantes brasileiros
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
                Tudo que você precisa saber antes de viajar para a Índia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Melhor Época</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Outubro a março - clima agradável para passeios
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <ThermometerSun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Temperatura</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Média de 15-30ºC no inverno - período ideal para turismo
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Tempo de Voo</h3>
                <p className="text-sm text-muted-foreground text-center">
                  ~17 horas com 1 conexão - voos via Europa ou Oriente Médio
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Documentação</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Visto eletrônico obrigatório - processo simples online
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
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Nossos Pacotes para a Índia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experiências únicas combinando história, cultura e espiritualidade
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
                        onClick={() => navigate(`/india/${pkg.slug}`)}
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

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Respostas para as dúvidas mais comuns sobre viagens à Índia
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    É seguro viajar para a Índia?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! A Índia é um destino seguro para turistas, especialmente nas principais rotas turísticas como o Triângulo 
                    Dourado. Nossos pacotes incluem transfers privativos, hotéis em áreas seguras, guias experientes e suporte 24h 
                    em português. As regiões turísticas têm excelente infraestrutura e recebem milhões de visitantes anualmente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Preciso de visto para viajar à Índia?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim, brasileiros precisam de visto para entrar na Índia. O processo é simples e feito online através do 
                    e-Visa (visto eletrônico). O visto turístico permite estadia de até 60 dias. Auxiliamos nossos clientes 
                    com todas as orientações necessárias para solicitar o visto de forma rápida e segura.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Qual moeda levar e como funciona o câmbio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A moeda oficial é a Rúpia Indiana (INR). Recomendamos levar dólares americanos ou euros para trocar no destino, 
                    onde você consegue melhores taxas. Cartões de crédito internacionais são aceitos em hotéis e restaurantes principais. 
                    Também é possível sacar rúpias em caixas eletrônicos. É útil ter dinheiro em espécie para mercados e gorjetas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    A comida indiana é muito apimentada?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A culinária indiana é rica em especiarias, mas nem tudo é apimentado! Os restaurantes turísticos e hotéis 
                    de qualidade oferecem opções adaptadas ao paladar ocidental. Você sempre pode solicitar pratos menos 
                    condimentados ("not spicy" ou "mild"). Recomendamos experimentar a diversidade gastronômica gradualmente, 
                    e nossos guias ajudam a escolher restaurantes adequados ao seu gosto.
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

export default IndiaLanding;
