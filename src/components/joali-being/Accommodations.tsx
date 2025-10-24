import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Bed, Home, Sparkles } from "lucide-react";

const Accommodations = () => {
  const accommodations = [
    {
      title: "Ocean Pool Villa",
      features: [
        "Design contemporâneo integrado à natureza",
        "Cama king-size e daybed confortável",
        "Banheiro aberto com banheira imersa",
        "Piscina privativa com vista oceânica",
        "Amenities aromaterapia premium",
        "Menu de travesseiros e minibar premium",
        "Serviço Jadugar (mordomo) 24h",
        "Bicicletas particulares incluídas"
      ]
    },
    {
      title: "Sunset Water Villa",
      features: [
        "Localização premium sobre a água",
        "Cores suaves e teto alto panorâmico",
        "Banheira externa adicional com vista",
        "Vidros panorâmicos e privacidade total",
        "Adega de vinhos e soundbar",
        "Smart TV e Wi-Fi de alta velocidade",
        "Arrumação 2x ao dia e room service 24h",
        "Acesso direto ao mar turquesa"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Acomodações Ultraexclusivas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            68 villas com piscina privativa, design biophilic e serviço de mordomo personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{accommodation.title}</CardTitle>
                </div>
                <CardDescription>
                  Privacidade total com arquitetura integrada à natureza
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {accommodation.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div className="text-center">
                    <Bed className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">King Size</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Spa Bath</p>
                  </div>
                  <div className="text-center">
                    <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Pool</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
