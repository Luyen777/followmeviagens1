import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Ship, Sunset, MapPinned, Dumbbell, Baby } from "lucide-react";

const Activities = () => {
  const watersports = [
    { name: "Jet ski", price: "$150-200 por sessão" },
    { name: "X-Jetblade", price: "Preços premium" },
    { name: "Wakeboard/Wake foil", price: "$125 por 15 minutos" },
    { name: "Aulas de kite surf", price: "$150 por hora" },
    { name: "Wing-surfer", price: "$95 por hora" },
  ];

  const excursions = [
    { name: "Tours de snorkeling", price: "$50-600" },
    { name: "Passeio para ver golfinhos", price: "$175" },
    { name: "Passeio do pôr do sol", price: "$175" },
    { name: "Visita a ilhas locais", price: "$150" },
    { name: "Tour pela cidade de Malé", price: "$150" },
  ];

  const complimentary = [
    "Caiaque",
    "Stand-up paddleboard",
    "Equipamento de windsurf",
    "Equipamento de snorkeling",
    "Catamarã (para velejadores certificados)",
    "Bicicletas",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Atividades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências aquáticas e aventuras terrestres em ambiente paradisíaco
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-primary" />
                Esportes Aquáticos Motorizados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {watersports.map((item, index) => (
                  <li key={index} className="flex justify-between items-start">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-muted-foreground text-sm">{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ship className="w-5 h-5 text-primary" />
                Excursões e Passeios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {excursions.map((item, index) => (
                  <li key={index} className="flex justify-between items-start">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-muted-foreground text-sm">{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center">Atividades Gratuitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {complimentary.map((activity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">{activity}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary/20">
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-primary" />
                Facilidades Complementares
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                <div>• Academia 24 horas</div>
                <div>• Piscinas externa e infinita</div>
                <div>• Sauna e sala de vapor</div>
                <div>• Vôlei de praia, bocha, futebol</div>
                <div className="flex items-center gap-1">
                  <Baby className="w-3 h-3" />
                  Kids Club (4-11 anos)
                </div>
                <div>• Teens Club (12-16 anos)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Activities;
