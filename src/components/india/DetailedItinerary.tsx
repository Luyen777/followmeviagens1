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
    title: "Chegada em Delhi",
    activities: "Recepção e assistência na chegada ao aeroporto internacional de Delhi. Transfer confortável para hotel premium. Check-in no hotel (a partir das 14h). Rest do dia livre para descansar da viagem ou explorar os arredores do hotel.",
    accommodation: "Hotel 5 ou 6 estrelas em Delhi",
    notes: "Pernoite no hotel"
  },
  {
    day: 2,
    title: "Explorando Delhi",
    activities: "Tour completo por Delhi Antiga e Nova Delhi. Visite os principais atrativos históricos e culturais da capital indiana, incluindo o Forte Vermelho, Jama Masjid, Qutub Minar, Portão da Índia e muito mais. Experimente a vibrante mistura entre tradição e modernidade.",
    accommodation: "Hotel 5 ou 6 estrelas em Delhi",
    notes: "Pernoite no hotel"
  },
  {
    day: 3,
    title: "Transfer para Jaipur",
    activities: "Translado confortável de Delhi para Jaipur (aproximadamente 5 horas). Check-in no hotel. Tempo livre para explorar a cidade por conta própria ou relaxar nas instalações do hotel. À noite, primeira impressão da mágica Cidade Rosa.",
    accommodation: "Hotel 5 ou 6 estrelas em Jaipur",
    notes: "Pernoite no hotel"
  },
  {
    day: 4,
    title: "Descobrindo Jaipur",
    activities: "City tour completo pela fascinante \"Cidade Rosa\". Visite palácios majestosos como o City Palace, o icônico Hawa Mahal (Palácio dos Ventos), o Forte Amber e o observatório Jantar Mantar. Explore os mercados locais coloridos e descubra o artesanato tradicional rajasthani.",
    accommodation: "Hotel 5 ou 6 estrelas em Jaipur",
    notes: "Pernoite no hotel"
  },
  {
    day: 5,
    title: "Transfer para Agra",
    activities: "Translado de Jaipur para Agra (aproximadamente 4-5 horas), passando por paisagens encantadoras. Check-in no hotel. Tarde livre para relaxar ou fazer uma primeira exploração da cidade que abriga uma das Sete Maravilhas do Mundo Moderno.",
    accommodation: "Hotel 5 ou 6 estrelas em Agra",
    notes: "Pernoite no hotel"
  },
  {
    day: 6,
    title: "Agra e o Taj Mahal",
    activities: "Dia dedicado à exploração de Agra. Visite o majestoso Taj Mahal ao nascer do sol (horário ideal para fotos impressionantes). Tour pelo imponente Forte de Agra, Patrimônio Mundial da UNESCO. Tempo para conhecer outros monumentos históricos e fazer compras de artesanato local, especialmente mármore incrustado.",
    accommodation: "Hotel 5 ou 6 estrelas em Agra",
    notes: "Pernoite no hotel"
  },
  {
    day: 7,
    title: "Transfer para Delhi",
    activities: "Translado de Agra para Delhi. Tempo livre para compras de última hora ou visitas adicionais conforme interesse. Transfer para o aeroporto internacional de Delhi de acordo com o horário do seu voo. Fim dos nossos serviços com memórias inesquecíveis do Triângulo Dourado.",
    accommodation: "-",
    notes: "Fim dos serviços"
  }
];

const DetailedItinerary = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Seu roteiro dia a dia - 7 noites no Triângulo Dourado
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
