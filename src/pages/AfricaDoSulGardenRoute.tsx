import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import southAfricaHero from "@/assets/south-africa-hero.jpg";

const AfricaDoSulGardenRoute = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Garden Route Explorer - 10 Noites na África do Sul | Follow Me Viagens</title>
        <meta name="description" content="Explore a famosa Garden Route da África do Sul em 10 noites. Praias paradisíacas, vida selvagem e paisagens deslumbrantes com hospedagem boutique." />
        <meta property="og:title" content="Garden Route Explorer - África do Sul | Follow Me Viagens" />
        <meta property="og:description" content="Pacote completo pela Garden Route com avistamento de baleias, praias exclusivas e hotéis boutique premium." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://followmeviagens.com/africa-do-sul/garden-route-explorer" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed" 
            style={{ backgroundImage: `url(${southAfricaHero})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Garden Route Explorer - 10 Noites
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Explore a famosa Garden Route com praias paradisíacas, vida selvagem e paisagens de tirar o fôlego
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={handleWhatsAppClick} 
                size="lg" 
                className="h-[60px] px-8 text-lg bg-green-700 hover:bg-green-800 text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">10 Noites</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">Hotéis Boutique</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">Avistamento de Baleias</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">Praias Exclusivas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Content */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Pacote em Desenvolvimento
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Este é um pacote exclusivo que estamos preparando especialmente para você. 
                Entre em contato conosco para receber informações detalhadas e um orçamento personalizado.
              </p>
              
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Destaques do Pacote</h3>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rota completa pela Garden Route, uma das estradas costeiras mais bonitas do mundo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Avistamento de baleias em Hermanus (temporada de junho a novembro)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Praias paradisíacas e exclusivas ao longo da costa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Hospedagem em hotéis boutique e pousadas charmosas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Experiências gastronômicas com frutos do mar frescos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Passeios opcionais: mergulho com tubarões, trilhas ecológicas, vinícolas</span>
                  </li>
                </ul>

                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale Conosco no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AfricaDoSulGardenRoute;
