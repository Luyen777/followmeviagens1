import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Star, Palmtree, Mountain, Wine, Hotel, Shield, Clock, Plane, ThermometerSun, FileCheck, Syringe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import southAfricaHero from "@/assets/south-africa-hero.jpg";
const AfricaDoSulLanding = () => {
  const navigate = useNavigate();
  const packages = [{
    id: 1,
    title: "Safari Kruger & Cape Town",
    description: "Aventura selvagem no Kruger Park e charme urbano em Cape Town com hotéis premium",
    duration: "7 noites",
    highlights: ["Safari Big Five no Kruger", "Cape Town e Table Mountain", "Vinícolas premiadas", "Lodges 5 estrelas"],
    priceFrom: "Consulte",
    slug: "safari-cape-town-7-noites",
    image: southAfricaHero
  }, {
    id: 2,
    title: "Garden Route Explorer",
    description: "Explore a famosa Garden Route com praias paradisíacas, vida selvagem e paisagens de tirar o fôlego",
    duration: "10 noites",
    highlights: ["Rota Jardim completa", "Avistamento de baleias", "Praias exclusivas", "Hospedagem boutique"],
    priceFrom: "Consulte",
    slug: "garden-route-explorer",
    image: southAfricaHero
  }];
  return <>
      <Helmet>
        <title>África do Sul - Pacotes Exclusivos de Viagem | Follow Me Viagens</title>
        <meta name="description" content="Descubra a África do Sul com pacotes exclusivos: Safari no Kruger Park, Cape Town, Garden Route e muito mais. Hotéis premium e suporte 24h." />
        <meta property="og:title" content="África do Sul - Pacotes de Viagem | Follow Me Viagens" />
        <meta property="og:description" content="Safari no Kruger Park, Cape Town, vinícolas e praias paradisíacas. Pacotes personalizados para a África do Sul." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/africa-do-sul" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
          backgroundImage: `url(${southAfricaHero})`
        }}>
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Descubra a África do Sul
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Escolha seu pacote ideal: Safari selvagem, charme urbano ou rotas panorâmicas
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
                  A África do Sul é um dos destinos mais completos do mundo, unindo natureza exuberante, vida selvagem impressionante e cultura vibrante. 
                  Dos safáris no famoso Kruger Park, onde você pode avistar os Big Five, às paisagens cinematográficas da Garden Route, passando pelo 
                  charme cosmopolita de Cape Town e vinícolas premiadas de Stellenbosch - cada dia é uma nova aventura. Com clima agradável na maior 
                  parte do ano, infraestrutura de primeiro mundo e experiências que vão de praias paradisíacas a montanhas épicas, a África do Sul 
                  encanta casais em lua de mel, famílias em busca de experiências marcantes e grupos que desejam viver o extraordinário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why South Africa Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Por que escolher a África do Sul?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Um destino que combina aventura selvagem, cultura vibrante, paisagens deslumbrantes e experiências gastronômicas de classe mundial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palmtree className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safari Big Five</h3>
                <p className="text-muted-foreground">
                  Encontros inesquecíveis com leões, elefantes, rinocerontes, búfalos e leopardos no Kruger Park
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Paisagens Épicas</h3>
                <p className="text-muted-foreground">
                  De Cape Town e Table Mountain até a famosa Garden Route com praias e montanhas espetaculares
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vinícolas Premium</h3>
                <p className="text-muted-foreground">
                  Degustação em vinícolas premiadas de Stellenbosch e Franschhoek, entre as melhores do mundo
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Hotel className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hospedagem de Luxo</h3>
                <p className="text-muted-foreground">
                  Lodges 5 estrelas, hotéis boutique e resorts exclusivos para uma experiência premium
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        

        {/* Practical Information Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Informações Práticas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa saber antes de viajar para a África do Sul
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Melhor Época</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Setembro a maio - clima perfeito para safáris e passeios
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <ThermometerSun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Temperatura</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Média anual de 15-28ºC - clima agradável o ano todo
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Tempo de Voo</h3>
                <p className="text-sm text-muted-foreground text-center">
                  ~9 horas de São Paulo - voos diretos disponíveis
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-center mb-2">Documentação</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Sem visto para até 90 dias - apenas passaporte válido
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg px-6 py-3">
                <Syringe className="w-5 h-5 text-amber-600" />
                <p className="text-sm text-amber-900 dark:text-amber-200">
                  <strong>Vacinação recomendada:</strong> Febre amarela - certificado internacional
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
                Nossos Pacotes para a África do Sul
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experiências únicas combinando natureza, cultura e luxo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {packages.map(pkg => <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
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
                      {pkg.highlights.map((highlight, idx) => <div key={idx} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>)}
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">A partir de</p>
                      <p className="text-2xl font-bold text-primary">{pkg.priceFrom}</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full" size="lg" onClick={() => navigate(`/africa-do-sul/${pkg.slug}`)}>
                      Ver Detalhes do Pacote
                    </Button>
                  </CardFooter>
                </Card>)}
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
                  Respostas para as dúvidas mais comuns sobre viagens à África do Sul
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    É seguro viajar para a África do Sul?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! A África do Sul é um destino seguro quando se seguem as orientações básicas de segurança. 
                    Nossos pacotes incluem transfers privativos, hotéis em áreas seguras e suporte 24h. As principais 
                    áreas turísticas como Cape Town, Kruger Park e Garden Route têm excelente infraestrutura e são 
                    muito frequentadas por turistas do mundo todo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Dá para combinar a África do Sul com outros destinos?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Com certeza! A África do Sul combina perfeitamente com destinos como Ilhas Maurício, Seychelles, 
                    Moçambique e até Victoria Falls (Zimbábue/Zâmbia). Podemos criar um roteiro personalizado que 
                    inclua praia paradisíaca após o safari, ou estender sua aventura africana. Consulte-nos para 
                    opções de combinação.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Qual moeda levar e como funciona o câmbio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A moeda oficial é o Rand Sul-Africano (ZAR). Recomendamos levar dólares americanos ou euros para 
                    trocar no destino, onde você consegue melhores taxas. Cartões de crédito internacionais são amplamente 
                    aceitos. Também é possível sacar rands em caixas eletrônicos. Evite trocar dinheiro em aeroportos, 
                    pois as taxas costumam ser desfavoráveis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Quantos dias são necessários para conhecer a África do Sul?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Recomendamos no mínimo 7-8 noites para aproveitar os principais destaques: 3 noites de safari no 
                    Kruger Park e 4 noites em Cape Town e região das vinícolas. Para quem deseja incluir a Garden Route 
                    ou outros destinos, o ideal são 10-14 noites. Nossos consultores ajudam a montar o roteiro perfeito 
                    de acordo com seu tempo disponível.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>;
};
export default AfricaDoSulLanding;