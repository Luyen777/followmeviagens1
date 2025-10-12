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
    <Carousel className="w-full">
      <CarouselContent>
        {validImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl">
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
  );
};

export default ResortImageCarousel;
