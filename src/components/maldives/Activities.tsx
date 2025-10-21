import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Sparkles, Dumbbell, Users } from "lucide-react";

const activities = [
  {
    title: "Esportes Aquáticos",
    icon: Waves,
    items: [
      "Snorkeling em recifes de coral vibrantes",
      "Mergulho com instrutor certificado",
      "Windsurf e kitesurf",
      "Caiaque pelo oceano cristalino",
      "Stand-up paddle na lagoa privativa",
    ],
  },
  {
    title: "Bem-estar & Relaxamento",
    icon: Sparkles,
    items: [
      "AVI Spa overwater com tratamentos exclusivos",
      "Massagens terapêuticas e ayurvédicas",
      "Rituais de beleza e tratamentos faciais",
      "Aulas de yoga com vista para o mar",
      "Sessões de pilates e respiração profunda",
    ],
  },
  {
    title: "Fitness & Recreação",
    icon: Dumbbell,
    items: [
      "Centro de fitness 24 horas equipado",
      "Tênis de mesa e jogos recreativos",
      "Bicicletas disponíveis para explorar o resort",
      "Parque infantil e sala de jogos",
      "Aulas de fitness em grupo",
    ],
  },
  {
    title: "Experiências Especiais",
    icon: Users,
    items: [
      "Cruzeiro ao pôr do sol com observação de golfinhos",
      "Aula de culinária maldívia com chef local",
      "Centro de Descoberta Marinha educacional",
      "Kids Club indoor e outdoor supervisionado",
      "Sessão de fotos profissional de 30 minutos",
    ],
  },
];

const Activities = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Atividades & Experiências
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aventuras aquáticas, relaxamento e experiências únicas nas Maldivas
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              <strong className="text-foreground">Parceria Especial:</strong> O resort colabora com a 
              Manta Trust Foundation para conservação marinha. Os hóspedes podem participar de filmes 
              educacionais e aprender sobre a vida marinha local no Centro de Descoberta Marinha.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Activities;
