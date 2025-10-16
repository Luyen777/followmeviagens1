import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Hotel as HotelIcon, Info } from "lucide-react";

const itinerary = [
  {
    day: 1,
    title: "Chegada em Johannesburg",
    activities: "Recepção no aeroporto internacional O.R. Tambo em Johannesburg. Transfer confortável para sua acomodação. Check-in e descanso após a viagem internacional. Prepare-se para a aventura que está por vir!",
    accommodation: "Hotel em Johannesburg",
    notes: "Pernoite em Johannesburg"
  },
  {
    day: 2,
    title: "Kruger Park - Primeiro Safari",
    activities: "Transfer matinal para o Kruger Park (aproximadamente 5 horas de viagem panorâmica). Check-in no luxuoso Kapama River Lodge 5 estrelas. Almoço no lodge. Primeiro safari vespertino em veículo 4x4 aberto com guia especializado. Jantar especial no lodge com vista da savana africana sob as estrelas.",
    accommodation: "Kapama River Lodge (5⭐)",
    notes: "Inclui almoço e jantar"
  },
  {
    day: 3,
    title: "Kruger Park - Safari Completo",
    activities: "Safari matinal começando ao nascer do sol para avistar os Big Five. Café da manhã no meio da natureza (bush breakfast). Tempo livre para relaxar no lodge, aproveitar a piscina ou observar animais à beira do rio. Safari vespertino com parada para sundowner. Jantar no lodge.",
    accommodation: "Kapama River Lodge (5⭐)",
    notes: "Inclui café da manhã, almoço e jantar"
  },
  {
    day: 4,
    title: "Kruger Park para Cape Town",
    activities: "Último safari matinal opcional para despedida dos animais. Check-out após o café da manhã. Transfer para o aeroporto de Hoedspruit. Voo doméstico para Cape Town. Recepção e transfer para o moderno Radisson Red no centro de Cape Town. Check-in e tarde livre para explorar.",
    accommodation: "Radisson Red Cape Town (4⭐)",
    notes: "Inclui café da manhã e voo doméstico"
  },
  {
    day: 5,
    title: "Descobrindo Cape Town",
    activities: "City tour completo pela fascinante \"Cidade Mãe\". Subida à Table Mountain de teleférico (clima permitindo). Visita ao vibrante V&A Waterfront. Explore os bairros históricos de Bo-Kaap com casas coloridas. Passeio pelo Company's Garden. Tempo livre para compras e experiências locais.",
    accommodation: "Radisson Red Cape Town (4⭐)",
    notes: "Inclui café da manhã e city tour"
  },
  {
    day: 6,
    title: "Cape Town - Vinícolas e Praias",
    activities: "Tour pelas premiadas vinícolas de Stellenbosch, a segunda cidade mais antiga da África do Sul. Degustação de vinhos sul-africanos mundialmente reconhecidos. Almoço em restaurante de vinícola. Tarde visitando as deslumbrantes praias de Camps Bay e Clifton. Pôr do sol na costa atlântica com vista dos 12 Apóstolos.",
    accommodation: "Radisson Red Cape Town (4⭐)",
    notes: "Inclui café da manhã e tour das vinícolas"
  },
  {
    day: 7,
    title: "Cape Town Livre",
    activities: "Dia livre para atividades opcionais: visita a Robben Island (onde Mandela foi prisioneiro), passeio pela Cape Peninsula até o Cabo da Boa Esperança, shark cage diving, ou simplesmente relaxar e fazer compras no V&A Waterfront. Jantar de despedida recomendado em restaurante local.",
    accommodation: "Radisson Red Cape Town (4⭐)",
    notes: "Inclui café da manhã"
  },
  {
    day: 8,
    title: "Volta para o Brasil",
    activities: "Check-out do hotel após o café da manhã. Transfer privativo para o aeroporto internacional de Cape Town de acordo com o horário do seu voo. Fim dos nossos serviços com memórias inesquecíveis da África do Sul.",
    accommodation: "-",
    notes: "Fim dos serviços"
  }
];

const DetailedItinerary = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Seu roteiro dia a dia - 7 noites entre Safari e Cidade
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aventura perfeitamente equilibrada entre vida selvagem e sofisticação urbana
        </p>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {itinerary.map((item) => (
              <AccordionItem 
                key={item.day} 
                value={`day-${item.day}`}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {item.day}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        Dia {item.day}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 pt-4">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Atividades</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.activities}
                        </p>
                      </div>
                    </div>
                    
                    {item.accommodation !== "-" && (
                      <div className="flex gap-3">
                        <HotelIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Hospedagem</h4>
                          <p className="text-muted-foreground">
                            {item.accommodation}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                      <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Observações</h4>
                        <p className="text-muted-foreground">
                          {item.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DetailedItinerary;
