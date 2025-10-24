import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Viva a Experiência JOALI BEING
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Arquitetura biophilic, design contemporâneo e natureza exuberante em harmonia perfeita
          </p>
        </div>

        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
