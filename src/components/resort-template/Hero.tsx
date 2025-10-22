import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  image: string;
  name: string;
}

const Hero = ({ image, name }: HeroProps) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511971324865", "_blank");
  };

  const scrollToPricing = () => {
    document.getElementById("precos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={name} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-foreground mb-12 leading-tight">
          {name}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToPricing} 
            size="lg" 
            className="w-full sm:w-auto h-[50px] sm:h-[60px] px-6 sm:px-8 text-base sm:text-lg bg-black hover:bg-black/90 text-white shadow-lg border-2 border-yellow-500 hover:border-yellow-400"
          >
            Solicitar Orçamento Personalizado
          </Button>
          <Button 
            onClick={handleWhatsAppClick} 
            size="lg" 
            className="w-full sm:w-auto h-[50px] sm:h-[60px] px-6 sm:px-8 text-base sm:text-lg bg-green-700 hover:bg-green-800 text-white"
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
