import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ResortImageCarouselProps {
  images: string[];
  title: string;
}

const ResortImageCarousel = ({ images, title }: ResortImageCarouselProps) => {
  // Filter out empty strings and ensure we have valid images
  const validImages = images.filter(img => img && img.trim() !== '');

  
  return (
    <div className="space-y-4">
      {/* Main Image Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {validImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`${title} - Imagem ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {validImages.length > 1 && (
          <>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </>
        )}
      </Carousel>

      {/* Thumbnail Row */}
      {validImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {validImages.slice(0, 5).map((image, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg border-2 border-border"
            >
              <img
                src={image}
                alt={`${title} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {validImages.length > 5 && (
            <div className="flex-shrink-0 w-20 h-20 rounded-lg border-2 border-border bg-muted flex items-center justify-center text-xs text-muted-foreground">
              +{validImages.length - 5}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResortImageCarousel;
