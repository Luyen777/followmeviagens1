import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-700/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-light text-white mb-6 tracking-tight leading-tight">
          InterContinental Maldives
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-white/90">
            Maamunagau Resort
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
          Paraíso exclusivo no Atol de Raa
        </p>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Pacote 5 dias | Overwater Pool Villa | Café da manhã e aperitivos incluídos
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            onClick={scrollToContact} 
            size="lg" 
            className="h-[60px] px-8 text-lg bg-black/30 hover:bg-black/40 text-white shadow-lg border-2 border-yellow-500 hover:border-yellow-400"
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
      </div>
    </section>
  );
};

export default Hero;
