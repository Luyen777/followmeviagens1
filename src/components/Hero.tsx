import { Search, MessageCircle, Shield, Heart, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/maldives-hero-latest.avif";
const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };
  
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Maldivas - Paraíso Tropical" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-36 pb-24 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground mb-4 leading-[1.2] tracking-tight overflow-visible font-light lg:text-6xl">
            Descubra o <span className="font-bold">paraíso.</span>
          </h1>

          {/* Subtitle - Expertise */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 font-display mb-6 tracking-tight">
            Especialistas em Ilhas Maldivas e destinos de luxo
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">Reserve a experiência perfeita com os melhores preços. Pacotes personalizados, suporte 24h e experiência sem estresse — 100% de avaliações positivas!</p>

          {/* Search Bar - Desktop Only */}
          <div className="mb-6 sm:mb-8 max-w-3xl mx-auto px-4 hidden lg:block">
            <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-luxury">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/60" />
                <Input type="text" placeholder="Buscar destino, resort ou experiência..." className="h-12 sm:h-14 pl-12 bg-white/50 border-0 text-foreground placeholder:text-foreground/60 focus-visible:ring-2 focus-visible:ring-primary" />
              </div>
              <Button size="lg" className="h-12 sm:h-14 px-8 text-white font-semibold shadow-lg text-sm bg-foreground hover:bg-foreground/90">Buscar</Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
            <Link to="/ilhas-maldivas">
              <Button variant="outline" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-foreground border-2 border-foreground/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold w-full sm:w-auto">
                Ver Resorts nas Maldivas
              </Button>
            </Link>
            <Button onClick={handleWhatsAppClick} size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-white font-semibold shadow-lg w-full sm:w-auto bg-lime-800 hover:bg-lime-700">
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale no WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col gap-2 items-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:gap-4 max-w-5xl mx-auto px-4">
            {/* First Row - 2 badges side by side on mobile */}
            <div className="flex gap-2 w-full justify-center sm:contents">
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-amber-700 whitespace-nowrap">20+ Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-green-500/10 rounded-full border border-green-500/20">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-green-700 whitespace-nowrap">50+ Resorts Parceiros</span>
              </div>
            </div>
            {/* Second Row - Desktop only badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              <Heart className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-blue-700 whitespace-nowrap">200k+ Seguidores</span>
            </div>
            {/* Second Row - Centered badge on mobile */}
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-purple-700 whitespace-nowrap">5000+ Clientes Felizes</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;