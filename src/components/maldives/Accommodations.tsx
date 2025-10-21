import { Card, CardContent } from "@/components/ui/card";
import { Bed, Ruler, Users } from "lucide-react";
import intercontinentalBathroom from "@/assets/maldives-experiences/intercontinental-bathroom.jpg";

const Accommodations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Acomodação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Villas elegantes sobre águas cristalinas com design contemporâneo
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
                  <p className="text-foreground font-medium">Tamanho: 100 m²</p>
                  <p className="text-sm text-muted-foreground">(1.075 pés quadrados)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Bed className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">1 cama king size</p>
                  <p className="text-sm text-muted-foreground">Roupas de cama premium</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Ocupação máxima</p>
                  <p className="text-sm text-muted-foreground">2 adultos</p>
                </div>
              </div>
            </div>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <h4 className="font-medium text-foreground mb-3">Facilidades da Villa</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Banheiro em planta aberta com vista panorâmica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Piscina infinita privativa com acesso direto à lagoa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Daybed acolchoado para relaxamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Área de jantar ao ar livre com vista para o oceano</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={intercontinentalBathroom}
              alt="Overwater Pool Villa - Banheiro luxuoso em planta aberta com banheira de imersão e vista panorâmica do oceano"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
