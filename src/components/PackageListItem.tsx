interface PackageListItemProps {
  title: string;
  image: string;
  duration: string;
  destination: string;
  flightIncluded: string;
  validity: string;
  departures: string;
  mealPlan: string;
  referenceNumber: string;
  priceFrom: number;
}

const PackageListItem = ({
  title,
  image,
  duration,
  destination,
  flightIncluded,
  validity,
  departures,
  mealPlan,
  referenceNumber,
  priceFrom,
}: PackageListItemProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-500 flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="lg:w-2/5 h-64 lg:h-auto">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-6 tracking-tight">
            {title}
          </h3>

          {/* Package Details List */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-muted-foreground min-w-[140px] text-sm">Duração:</span>
              <span className="text-foreground text-sm font-medium">{duration}</span>
            </div>
            <div className="flex items-start">
              <span className="text-muted-foreground min-w-[140px] text-sm">Destino:</span>
              <span className="text-foreground text-sm font-medium">{destination}</span>
            </div>
            <div className="flex items-start">
              <span className="text-muted-foreground min-w-[140px] text-sm">Passagem Aérea:</span>
              <span className="text-foreground text-sm font-medium">{flightIncluded}</span>
            </div>
            <div className="flex items-start">
              <span className="text-muted-foreground min-w-[140px] text-sm">Validade:</span>
              <span className="text-foreground text-sm font-medium">{validity}</span>
            </div>
            <div className="flex items-start">
              <span className="text-muted-foreground min-w-[140px] text-sm">Saídas:</span>
              <span className="text-foreground text-sm font-medium">{departures}</span>
            </div>
            <div className="flex items-start">
              <span className="text-muted-foreground min-w-[140px] text-sm">Plano de Refeição:</span>
              <span className="text-foreground text-sm font-medium">{mealPlan}</span>
            </div>
            <div className="flex items-start">
              <span className="text-muted-foreground min-w-[140px] text-sm">Número de Referência:</span>
              <span className="text-foreground text-sm font-medium">{referenceNumber}</span>
            </div>
          </div>
        </div>

        {/* Price and CTA Section */}
        <div className="space-y-4 border-t border-border pt-6">
          <div className="text-foreground">
            <div className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-luxury">
              PREÇO A PARTIR
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-display font-medium">
                USD {priceFrom.toLocaleString()}*
              </span>
              <span className="text-sm text-muted-foreground">POR PESSOA, EM APTO DUPLO</span>
            </div>
          </div>
          <button className="w-full lg:w-auto lg:px-12 h-12 bg-foreground text-background hover:bg-foreground/90 rounded-2xl font-medium tracking-luxury transition-all duration-500 shadow-md hover:shadow-lg">
            VEJA O ROTEIRO
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageListItem;
