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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Image Carousel */}
        <Carousel className="w-full">
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
              <div 
                key={index} 
                className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-105"
              >
                <img
                  src={image}
                  alt={`${title} - Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResortImageCarousel;
