import { Star, Clock, Utensils, Plane, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
interface PackageListItemProps {
  title: string;
  description?: string;
  image: string;
  duration: string;
  destination: string;
  flightIncluded: string;
  validity: string;
  classification: string;
  mealPlan: string;
  referenceNumber: string;
  priceFrom: number;
  focusTags?: string[];
  uniquePerk?: string;
  slug: string;
}
const PackageListItem = ({
  title,
  description,
  image,
  duration,
  destination,
  flightIncluded,
  validity,
  classification,
  mealPlan,
  referenceNumber,
  priceFrom,
  focusTags = [],
  uniquePerk,
  slug
}: PackageListItemProps) => {
  return <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-500 flex flex-col lg:flex-row">
      {/* Content Section - Left */}
      <div className="flex-1 p-6 sm:p-8 order-2 lg:order-1">
        <div>
          {/* Header with Title and Focus Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {focusTags.map((tag, index) => <Badge key={index} variant="secondary" className="text-xs font-medium px-3 py-1">
                  {tag}
                </Badge>)}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-2xl font-display font-medium text-foreground mb-2 tracking-tight">
              {title}
            </h3>

            {/* Description */}
            {description && <p className="text-muted-foreground text-sm leading-relaxed mb-4 lg:mb-3">
                {description}
              </p>}
          </div>

          {/* Key Features with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-2 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Classificação</div>
                <div className="text-sm font-medium text-foreground">{classification}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Duração</div>
                <div className="text-sm font-medium text-foreground">{duration}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Plano de Refeição</div>
                <div className="text-sm font-medium text-foreground">{mealPlan}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Transfer</div>
                <div className="text-sm font-medium text-foreground">{flightIncluded}</div>
              </div>
            </div>

          </div>

          {/* Unique Perk Highlight */}
          {uniquePerk && <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 lg:p-3 mb-4 lg:mb-3">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-medium text-primary uppercase tracking-wide mb-1">DESTAQUE EXCLUSIVO</div>
                  <div className="text-sm text-foreground font-medium">
                    {uniquePerk}
                  </div>
                </div>
              </div>
            </div>}

          {/* Reference Number */}
          <div className="text-xs text-muted-foreground/60">
            Ref: {referenceNumber}
          </div>
        </div>
      </div>

      {/* Right Column - Image + Price (Desktop) / Top on Mobile */}
      <div className="lg:w-[320px] flex-shrink-0 flex flex-col order-1 lg:order-2 lg:border-l border-border">
        {/* Image Section */}
        <div className="h-[13.6rem] lg:h-[240px] flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Price and CTA Section */}
        <div className="p-6 sm:p-8 lg:p-6 border-t border-border flex flex-col justify-center flex-1">
          <div className="space-y-4">
            <div className="text-foreground">
              <div className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-luxury">
                PREÇO A PARTIR
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl lg:text-3xl font-display font-medium">
                  USD {priceFrom.toLocaleString()}*
                </span>
                <span className="text-xs text-muted-foreground">POR PESSOA, EM APTO DUPLO</span>
              </div>
            </div>
            <Link 
              to={`/ilhas-maldivas/${slug}`}
              className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 rounded-2xl font-medium tracking-luxury transition-all duration-500 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              VEJA O ROTEIRO
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default PackageListItem;