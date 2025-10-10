import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Testimonials = () => {
  const testimonials = [{
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "A viagem dos sonhos! A equipe da Follow Me cuidou de cada detalhe, desde o voo até o resort. As Maldivas superaram todas as expectativas. Experiência 5 estrelas do início ao fim!",
    rating: 5,
    trip: "Lua de Mel - Soneva Jani"
  }, {
    name: "Carlos e Ana Oliveira",
    location: "Rio de Janeiro, RJ",
    text: "Levamos nossa família para as Maldivas e foi perfeito! O resort escolhido tinha atividades incríveis para as crianças e os adultos. Atendimento impecável da Follow Me Viagens.",
    rating: 5,
    trip: "Férias em Família - Six Senses"
  }, {
    name: "Rafael Santos",
    location: "Curitiba, PR",
    text: "Melhor investimento que já fiz! O atendimento personalizado me ajudou a encontrar o resort perfeito dentro do meu orçamento. Voltarei com certeza, e já estou planejando a próxima viagem!",
    rating: 5,
    trip: "Mergulho - Velaa Private Island"
  }];
  return <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in px-4">
          <span className="inline-flex items-center gap-2 text-primary font-semibold sm:text-sm uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 text-xs">EXPERIências</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground mb-6 sm:mb-8 tracking-tight text-balance">Experiências</h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-light tracking-luxury">Mais de 5.000 clientes já viajaram com a gente. 100% de avaliações positivas!</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="relative hover:shadow-lg-custom transition-all duration-500 rounded-3xl border-border bg-card animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-10">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-6" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 mb-8 leading-relaxed font-light tracking-luxury">
                  "{testimonial.text}"
                </p>

                {/* Trip Info */}
                <div className="text-sm text-primary font-medium mb-6 pb-6 border-b border-border tracking-luxury">
                  {testimonial.trip}
                </div>

                {/* Author */}
                <div>
                  <div className="font-medium text-foreground tracking-luxury">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground tracking-luxury">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="text-foreground/60 mb-4 tracking-luxury font-light text-sm sm:text-base">
            Veja mais depoimentos e fotos no Instagram
          </p>
          <a href="https://instagram.com/followmeviagens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-foreground font-semibold hover:text-primary transition-all duration-300 group tracking-luxury bg-white/50 backdrop-blur-sm rounded-full border border-foreground/10 hover:border-primary/30 hover:bg-white/70">
            <span className="relative text-sm">
              @followmeviagens - 200k seguidores
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>;
};
export default Testimonials;