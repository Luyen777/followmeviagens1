import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670)`
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in">
          JOALI BEING - Wellness Ultraexclusivo
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light animate-fade-in">
          Resort 7 estrelas no Atol Raa com bem-estar integral, arquitetura biophilic e transformação corpo-mente-alma
        </h2>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="h-[60px] px-8 text-lg bg-foreground hover:bg-foreground/90 text-white shadow-lg"
          >
            Solicitar Orçamento Personalizado
          </Button>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="h-[60px] px-8 text-lg bg-green-700 hover:bg-green-800 text-white"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 animate-fade-in">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">68 Villas com Piscina Privativa</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">Serviço Jadugar 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">Areka Spa & Wellness</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">Hidroavião Privativo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
