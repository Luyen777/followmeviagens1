import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Star, Palmtree, Mountain, Wine, Hotel, Shield, Clock } from "lucide-react";
import southAfricaHero from "@/assets/south-africa-hero.jpg";

const AfricaDoSulLanding = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Safari Kruger & Cape Town",
      description: "Aventura selvagem no Kruger Park e charme urbano em Cape Town com hotéis premium",
      duration: "7 noites",
      highlights: ["Safari Big Five no Kruger", "Cape Town e Table Mountain", "Vinícolas premiadas", "Lodges 5 estrelas"],
      priceFrom: "Consulte",
      slug: "safari-cape-town-7-noites",
      image: southAfricaHero
    },
    {
      id: 2,
      title: "Garden Route Explorer",
      description: "Explore a famosa Garden Route com praias paradisíacas, vida selvagem e paisagens de tirar o fôlego",
      duration: "10 noites",
      highlights: ["Rota Jardim completa", "Avistamento de baleias", "Praias exclusivas", "Hospedagem boutique"],
      priceFrom: "Consulte",
      slug: "garden-route-explorer",
      image: southAfricaHero
    }
  ];

  return (
    <>
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
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed" 
            style={{ backgroundImage: `url(${southAfricaHero})` }}
          >
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Pacotes Completos</h3>
                <p className="text-sm text-muted-foreground">
                  Tudo incluído: voos, hotéis, transfers, passeios e suporte 24h
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Especialistas em Luxo</h3>
                <p className="text-sm text-muted-foreground">
                  15+ anos criando experiências exclusivas para viajantes exigentes
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Atendimento Personalizado</h3>
                <p className="text-sm text-muted-foreground">
                  Consultoria dedicada para customizar seu roteiro dos sonhos
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
                      onClick={() => navigate(`/africa-do-sul/${pkg.slug}`)}
                    >
                      Ver Detalhes do Pacote
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AfricaDoSulLanding;
