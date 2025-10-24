import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Inclusions = () => {
  const inclusions = [
    {
      title: "Acomodação & Gastronomia",
      items: [
        "Café da manhã earth to table em várias opções",
        "Minibar de boas-vindas (vinho, snacks premium)",
        "Amenities premium sustentáveis",
        "Room service 24h",
        "Arrumação 2x ao dia",
        "Ritual do pôr do sol na praia"
      ]
    },
    {
      title: "Serviços & Facilidades",
      items: [
        "Serviço de mordomo Jadugar 24h por villa",
        "Transfer hidroavião privativo (40min de Malé)",
        "Recepção no lounge VIP JOALI",
        "Wi-Fi premium em toda a ilha",
        "Bicicletas individuais por villa",
        "Lounge, biblioteca e cinema sob as estrelas"
      ]
    },
    {
      title: "Wellness & Spa",
      items: [
        "Consulta inicial detalhada no Areka Spa",
        "Crédito diário para spa (programas wellness)",
        "Acesso à hidroterapia (Watsu pool, haloterapia)",
        "Sauna, banho turco e herbal centre Aktar",
        "Welcome ritual e amenities aromaterapia",
        "Kit herbal personalizado"
      ]
    },
    {
      title: "Atividades Wellness Diárias",
      items: [
        "Yoga, breathwork, pilates e meditação",
        "Sound healing e movimento consciente",
        "Workshops de chás, cosméticos naturais",
        "Mentoria wellness com profissionais",
        "Ritual de sono e jornada de nutrição",
        "Programação artística e cultural"
      ]
    },
    {
      title: "Esportes & Lazer",
      items: [
        "Equipamento para snorkeling completo",
        "Esportes aquáticos não motorizados",
        "Academia funcional e fitness center",
        "Trilha ecológica e beach walk",
        "Quadras de esportes e beach volley",
        "Caiaque, SUP e pedalinho"
      ]
    },
    {
      title: "Experiências Exclusivas",
      items: [
        "Detox digital e experiências biophilic",
        "Oficinas de Aktar (aromaterapia)",
        "Workshop de culinária bem-estar",
        "Snorkeling guiado pelos recifes",
        "Programação wellness e artística",
        "Jornada personalizada de transformação"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tudo Incluído no Pacote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiência wellness completa com serviços de altíssimo padrão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {inclusions.map((category, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inclusions;
