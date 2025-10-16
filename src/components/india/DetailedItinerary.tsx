import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Hotel as HotelIcon, Utensils } from "lucide-react";

const itinerary = [
  {
    day: 1,
    title: "Chegada em Delhi",
    activities: "Chegada ao aeroporto internacional de Delhi, recepção e transfer para o hotel. Rest do dia livre para aclimatação. À noite, jantar de boas-vindas com apresentação do roteiro.",
    accommodation: "Hotel Taj Palace Delhi ou similar (5 estrelas)",
    meals: "Jantar"
  },
  {
    day: 2,
    title: "Exploração de Old e New Delhi",
    activities: "Visita ao Forte Vermelho, Jama Masjid (maior mesquita da Índia), passeio de rickshaw em Chandni Chowk. À tarde, tour por New Delhi: Qutub Minar, Portão da Índia, e Templo de Lótus.",
    accommodation: "Hotel Taj Palace Delhi ou similar (5 estrelas)",
    meals: "Café da manhã, Almoço"
  },
  {
    day: 3,
    title: "Delhi - Agra (4h de viagem)",
    activities: "Transfer para Agra pela manhã. À tarde, visita ao majestoso Taj Mahal ao pôr do sol, uma das Sete Maravilhas do Mundo Moderno. Experiência fotográfica guiada.",
    accommodation: "ITC Mughal Agra ou similar (5 estrelas)",
    meals: "Café da manhã, Jantar"
  },
  {
    day: 4,
    title: "Agra - Jaipur via Fatehpur Sikri",
    activities: "Visita ao Forte de Agra pela manhã. Parada em Fatehpur Sikri, cidade imperial abandonada e Patrimônio Mundial da UNESCO. Chegada a Jaipur à noite.",
    accommodation: "The Oberoi Rajvilas ou similar (5 estrelas)",
    meals: "Café da manhã, Almoço"
  },
  {
    day: 5,
    title: "Cidade Rosa - Jaipur",
    activities: "Visita ao icônico Forte Amber com passeio de elefante. Tour pelo Palácio da Cidade, Observatório Jantar Mantar, e o fotogênico Hawa Mahal (Palácio dos Ventos). À noite, jantar com show cultural.",
    accommodation: "The Oberoi Rajvilas ou similar (5 estrelas)",
    meals: "Café da manhã, Jantar"
  },
  {
    day: 6,
    title: "Jaipur - Pushkar",
    activities: "Transfer para a cidade sagrada de Pushkar. Visita ao Templo de Brahma (único no mundo) e ao lago sagrado. Tarde livre para explorar o mercado local e bazares coloridos.",
    accommodation: "Pushkar Palace ou similar (Heritage Hotel)",
    meals: "Café da manhã, Jantar vegetariano"
  },
  {
    day: 7,
    title: "Pushkar - Udaipur (5h de viagem)",
    activities: "Viagem cênica para Udaipur, a 'Veneza do Oriente'. À tarde, passeio de barco no Lago Pichola ao pôr do sol com vista para o Palácio do Lago.",
    accommodation: "The Leela Palace Udaipur ou similar (5 estrelas)",
    meals: "Café da manhã, Jantar"
  },
  {
    day: 8,
    title: "Udaipur - Cidade dos Lagos",
    activities: "Visita ao magnífico City Palace, Templo Jagdish, e Jardins Saheliyon ki Bari. Tarde livre para compras ou experiências opcionais. Jantar com vista para o palácio iluminado.",
    accommodation: "The Leela Palace Udaipur ou similar (5 estrelas)",
    meals: "Café da manhã, Jantar"
  },
  {
    day: 9,
    title: "Udaipur - Delhi (voo)",
    activities: "Voo para Delhi pela manhã. Tarde livre para compras de última hora no Dilli Haat ou Khan Market. Jantar de despedida com culinária indiana contemporânea.",
    accommodation: "Hotel Taj Palace Delhi ou similar (5 estrelas)",
    meals: "Café da manhã, Jantar de despedida"
  },
  {
    day: 10,
    title: "Partida",
    activities: "Café da manhã no hotel e transfer para o aeroporto internacional conforme horário do voo. Fim dos serviços.",
    accommodation: "-",
    meals: "Café da manhã"
  }
];

const DetailedItinerary = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Roteiro Detalhado - 10 Dias
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Cada dia planejado cuidadosamente para uma experiência inesquecível
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
                      <Utensils className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Refeições Inclusas</h4>
                        <p className="text-muted-foreground">
                          {item.meals}
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
