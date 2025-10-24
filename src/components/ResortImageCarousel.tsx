import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ResortImageCarouselProps {
  images: string[];
  title: string;
}

const ResortImageCarousel = ({ images, title }: ResortImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  // Filter out empty strings and ensure we have valid images
  const validImages = images.filter(img => img && img.trim() !== '');

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Image Carousel */}
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {validImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image}
                    alt={`${title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {validImages.length > 1 && (
            <>
              <CarouselPrevious className="left-4 bg-background/90 hover:bg-background" />
              <CarouselNext className="right-4 bg-background/90 hover:bg-background" />
            </>
          )}
        </Carousel>

        {/* Thumbnail Row */}
        {validImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {validImages.slice(0, 8).map((image, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-105 ${
                  current === index 
                    ? 'border-primary ring-2 ring-primary/50' 
                    : 'border-border hover:border-primary'
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${title} - Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResortImageCarousel;
