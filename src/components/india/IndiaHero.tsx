import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import indiaHero from "@/assets/india-hero.avif";
const IndiaHero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", '_blank');
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
      backgroundImage: `url(${indiaHero})`
    }}>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in">Descubra a Índia - Triângulo Dourado</h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light animate-fade-in">
          Explore Delhi, Jaipur e Agra com especialistas locais, hotéis premium e suporte 24h em português
        </h2>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button onClick={scrollToContact} size="lg" className="h-[60px] px-8 text-lg bg-foreground hover:bg-foreground/90 text-white shadow-lg border-2 border-yellow-500">
            Solicitar Orçamento Personalizado
          </Button>
          <Button onClick={handleWhatsAppClick} size="lg" className="h-[60px] px-8 text-lg bg-green-700 hover:bg-green-800 text-white">
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 animate-fade-in">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">Guias Especializados</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">Hotéis 4-5 Estrelas</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">Transfers Inclusos</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base">Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>;
};
export default IndiaHero;