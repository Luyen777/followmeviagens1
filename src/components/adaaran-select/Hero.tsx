import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Resort Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Resort 4★ All Inclusive</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-tight tracking-tight">
            Adaaran Select<br />
            <span className="font-light">Hudhuranfushi</span>
          </h1>

          {/* Location */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 font-light tracking-wide">
            North Malé Atoll • 30 minutos do aeroporto
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Excelente custo-benefício em resort all inclusive recém-renovado. Perfeito para casais, famílias e surfistas, com ondas mundialmente conhecidas, atmosfera descontraída e 83 acres de praias e jardins tropicais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#precos">
              <Button size="lg" className="h-14 px-8 text-base bg-foreground hover:bg-foreground/90 text-background">
                Ver Pacotes e Preços
              </Button>
            </a>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-base border-2 border-foreground/20 hover:bg-foreground/5"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>All Inclusive Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Transfer de Lancha</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Surf & Snorkeling</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Kids Club Gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
