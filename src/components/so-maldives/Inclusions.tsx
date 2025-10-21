import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Wifi, Dumbbell, Baby, Waves, Sparkles } from "lucide-react";

const Inclusions = () => {
  const villaAmenities = [
    "Minibar com bebidas alcoólicas, não-alcoólicas e petiscos (reposição diária)",
    "Piscina infinita privada com design listrado",
    "Roupões, chinelos, bolsa de praia",
    "Produtos de higiene premium",
    "Wi-Fi em toda a propriedade",
    "Limpeza diária",
  ];

  const freeActivities = [
    "Caiaque",
    "Stand-up paddleboard",
    "Equipamento de windsurf (exceto aulas)",
    "Equipamento de snorkeling",
    "Uso básico de catamarã (apenas para velejadores certificados)",
    "Aluguel gratuito de bicicletas",
  ];

  const facilities = [
    "Acesso à academia (24 horas)",
    "Piscinas (externa e infinita)",
    "Kids Club 'The Nest' (idades 4-11)",
    "Teens Club 'The Zone' (idades 12-16)",
    "Vôlei de praia, bocha, futebol",
    "Transfer gratuito para CROSSROADS",
    "Acesso à sauna e sala de vapor",
    "Entretenimento noturno (cinema, DJ, apresentações culturais)",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            O que está incluído
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pacote completo de comodidades e experiências para sua estadia
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="w-5 h-5 text-primary" />
                Comodidades na Villa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {villaAmenities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Waves className="w-5 h-5 text-primary" />
                Esportes Aquáticos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {freeActivities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Dumbbell className="w-5 h-5 text-primary" />
                Facilidades & Entretenimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {facilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> Tratamentos de spa, esportes aquáticos motorizados e algumas excursões têm custo adicional
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Inclusions;
