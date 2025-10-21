import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const included = [
  "Café da manhã diário completo das 07:00 às 11:00 no Café Umi",
  "Chá da tarde diário das 15:00 às 17:00 no The Retreat ou The Collective",
  "Aperitivo das 17:00 às 19:00 no The Collective & The Retreat",
  "Refrescos durante todo o dia no The Retreat e Pool Bar (11:00-18:00)",
  "Transfer privado de e para o terminal de hidroavião",
  "Check-in personalizado na villa",
  "Serviço de mordomo 24 horas",
  "Bicicletas disponíveis durante toda a estadia",
  "Esportes aquáticos não motorizados (caiaque, SUP, windsurf)",
  "Equipamentos de snorkeling completos",
  "Aulas semanais de yoga, pilates e respiração profunda",
  "Centro de fitness 24 horas totalmente equipado",
  "Acesso aos clubes infantis indoor e outdoor",
  "Tênis de mesa e jogos recreativos",
  "Sessão de fotos de 30 minutos no resort",
  "Wi-Fi gratuito nas vilas e áreas públicas",
];

const notIncluded = [
  "Passagens aéreas internacionais e domésticas",
  "Visto de entrada nas Maldivas (se aplicável)",
  "Seguro viagem (altamente recomendado)",
  "Refeições e bebidas não especificadas nas inclusões",
  "Tratamentos de spa e massagens",
  "Atividades opcionais (mergulho, passeios privativos, etc.)",
  "Despesas pessoais e gorjetas",
  "Taxas governamentais e de serviço do resort",
];

const Inclusions = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            O que está incluído
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa saber sobre as inclusões do pacote
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-display font-light text-foreground">
                  Incluído no Pacote
                </h3>
              </div>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <X className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-display font-light text-foreground">
                  Não Incluído
                </h3>
              </div>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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
              <strong className="text-foreground">Importante:</strong> Todas as inclusões estão sujeitas 
              aos horários e disponibilidade do resort. Algumas atividades podem ter restrições de idade 
              ou condições climáticas. Consulte nossa equipe para mais detalhes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Inclusions;
