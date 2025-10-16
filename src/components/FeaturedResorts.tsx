import resort1 from "@/assets/resort-1.jpg";
import resort2 from "@/assets/resort-2.jpg";
import resort3 from "@/assets/resort-3.jpg";
import maldivesHero from "@/assets/maldives-hero-water.jpg";

const FeaturedResorts = () => {
  const moments = [
    {
      title: "Romance Sob as Estrelas",
      image: resort1
    },
    {
      title: "Aventuras Aquáticas",
      image: resort2
    },
    {
      title: "Relaxamento Absoluto",
      image: resort3
    },
    {
      title: "Gastronomia de Classe Mundial",
      image: maldivesHero
    }
  ];

  return (
    <section id="momentos" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground mb-4 sm:mb-6 tracking-tight text-balance leading-tight">
            Momentos Inesquecíveis
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-light tracking-luxury">
            Viva experiências únicas que só as Maldivas podem proporcionar
          </p>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="group relative h-[300px] rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image */}
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl sm:text-3xl font-display font-medium tracking-tight">
                  {moment.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/ilhas-maldivas"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-elegant hover:shadow-glow hover:scale-105"
          >
            <span className="text-base sm:text-lg">Descubra Todos os Resorts</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default FeaturedResorts;