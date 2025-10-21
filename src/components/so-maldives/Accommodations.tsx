import { Card, CardContent } from "@/components/ui/card";
import { Bed, Ruler, Users } from "lucide-react";

const Accommodations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Acomodação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vilas exclusivas com design contemporâneo inspirado em arte e moda
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-display font-light text-foreground mb-6">
              Overwater Pool Villa
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Tamanho: 120 m²</p>
                  <p className="text-sm text-muted-foreground">Design open-plan com espelhos expansivos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Bed className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">1 cama king size ou twin beds</p>
                  <p className="text-sm text-muted-foreground">Inspirado em styling de celebridades</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Ocupação máxima</p>
                  <p className="text-sm text-muted-foreground">3 hóspedes</p>
                </div>
              </div>
            </div>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <h4 className="font-medium text-foreground mb-3">Facilidades da Villa</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Piscina infinita privada com design listrado característico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Deck wraparound com vistas oceânicas ininterruptas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Banheira flutuante cocoon com vista para o oceano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Janelas do chão ao teto com vistas panorâmicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Minibar premium com bebidas e petiscos (reposição diária)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670"
              alt="Overwater Pool Villa - Villa luxuosa sobre as águas com piscina infinita privativa e design contemporâneo"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
