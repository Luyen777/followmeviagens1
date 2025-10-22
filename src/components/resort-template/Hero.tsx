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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt={name} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Subtle ocean wave pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMTBDMjUgNSA1MCAxNSA3NSAxMEM5MCA3LjUgMTAwIDUgMTAwIDUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3dhdmVzKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Luxury hero bar */}
        <div className="inline-block mb-8">
          <div className="bg-primary/10 backdrop-blur-sm px-8 py-3 rounded-full border border-primary/20">
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium">Resort Premium</p>
          </div>
        </div>

        {/* Main title with gradient underline */}
        <div className="inline-block">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground mb-3 leading-tight tracking-tight">
            {name}
          </h1>
          <div className="h-[3px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 rounded-full"></div>
        </div>
        
        <div className="h-12"></div>

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
