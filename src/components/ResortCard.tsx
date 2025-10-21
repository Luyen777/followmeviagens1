import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface ResortCardProps {
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  category: string;
  description?: string;
  inclusions?: string[];
}
const ResortCard = ({
  name,
  location,
  rating,
  price,
  image,
  category,
  description,
  inclusions
}: ResortCardProps) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };
  
  return <Card className="overflow-hidden group border-border hover:shadow-luxury transition-all duration-500 rounded-3xl bg-card backdrop-blur-sm">
      {/* Image */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"></div>
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md text-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-luxury shadow-lg border border-white/20">
          {category}
        </div>
      </div>

      <CardContent className="p-6 sm:p-8">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-border'}`} />)}
          <span className="text-xs sm:text-sm text-muted-foreground ml-2">({rating}.0)</span>
        </div>

        {/* Name */}
        <h3 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-2 sm:mb-3 line-clamp-2 tracking-tight">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-3 sm:mb-4">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-xs sm:text-sm tracking-luxury">{location}</span>
        </div>

        {/* Description */}
        {description && <p className="text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
          <span className="text-3xl sm:text-4xl font-display font-medium text-foreground">
            R$ {price.toLocaleString()}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground tracking-luxury">por pessoa</span>
        </div>

        {/* Inclusions */}
        {inclusions && inclusions.length > 0 && <div className="space-y-2 sm:space-y-3">
            <h4 className="text-sm font-semibold text-foreground tracking-luxury mb-3">
              O que está incluído:
            </h4>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {inclusions.map((item, index) => <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>)}
            </ul>
          </div>}
      </CardContent>

      <CardFooter className="p-6 sm:p-8 pt-0 flex gap-3">
        <Button variant="outline" className="flex-1 text-xs sm:text-sm">
          Ver Detalhes
        </Button>
        <Button onClick={handleWhatsAppClick} variant="primary" className="flex-1 text-xs sm:text-sm bg-foreground hover:bg-foreground/90">
          WhatsApp
        </Button>
      </CardFooter>
    </Card>;
};
export default ResortCard;