import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Heart, Palmtree, Waves } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Heart,
      title: "Wellness Transformador",
      description: "Programas multidia personalizados",
      items: [
        "Tratamentos signature no Areka Spa",
        "Terapias holísticas e ayurvédicas",
        "Medicina funcional e nutrição",
        "Bioscanning e consultas médicas internacionais",
        "Wellness immersions (sono, detox, microbioma)",
        "Mentoria fitness personalizada"
      ]
    },
    {
      icon: Waves,
      title: "Experiências Marinhas",
      description: "Explore as águas cristalinas",
      items: [
        "Mergulho PADI e cursos avançados",
        "Experiências marinhas guiadas",
        "Dolphin cruise e sandbank picnic",
        "Pescaria tradicional",
        "Iate privativo para excursões",
        "Visitas a ilha local"
      ]
    },
    {
      icon: Dumbbell,
      title: "Fitness & Movimento",
      description: "Academia e atividades físicas",
      items: [
        "Personal training e aulas privadas",
        "Functional fitness e crossfit",
        "Beach sports e yoga flow",
        "Pilates reformer",
        "Trail running ecológico",
        "Mindful movement sessions"
      ]
    },
    {
      icon: Palmtree,
      title: "Experiências Exclusivas",
      description: "Momentos inesquecíveis",
      items: [
        "Jantares privativos (sandbank, deck)",
        "Experiências na sala do chef",
        "Degustações de vinhos raros",
        "Cerimônias personalizadas",
        "Elopements e celebrações privadas",
        "Fotografia profissional"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Atividades & Experiências
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformação, aventura e momentos exclusivos personalizados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <activity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                    <CardDescription className="mt-1">{activity.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {activity.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/30 rounded-lg max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            <strong className="text-foreground">Observação:</strong> Atividades gratuitas incluem yoga, pilates, breathwork, sound healing, 
            hydrotherapy circuit, academia, workshops Aktar e snorkeling. Tratamentos spa, mergulho, excursões e experiências privativas 
            têm custo adicional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Activities;
