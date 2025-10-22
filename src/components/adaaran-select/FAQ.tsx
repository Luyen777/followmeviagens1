import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o sistema All Inclusive do Adaaran Select?",
      answer: "O All Inclusive inclui todas as refeições buffet no Banyan Restaurant, bebidas alcoólicas e não alcoólicas nos bares selecionados, snacks ao longo do dia, equipamentos de snorkeling, esportes aquáticos não motorizados, bicicletas, atividades recreativas, kids club, academia, shows noturnos e Wi-Fi nas áreas públicas. Alguns serviços como spa, mergulho, esportes motorizados e excursões têm custo adicional."
    },
    {
      question: "Qual a diferença entre Beach Villa e Ocean Villa?",
      answer: "Beach Villas ficam na praia com jardim tropical, são ideais para famílias e têm acesso direto à areia. Ocean Villas ficam sobre a água com deck privativo, acesso direto ao mar, sala de estar separada e serviço personalizado. São exclusivas para adultos e ideais para surfistas que querem estar perto do spot Lohis."
    },
    {
      question: "O resort é bom para surf? Como funciona o acesso ao Lohis?",
      answer: "Sim! O Adaaran Select é um dos melhores destinos para surf nas Maldivas, com acesso ao famoso spot Lohis, reconhecido mundialmente. O resort oferece packages exclusivos para surfistas, com acesso limitado para garantir a melhor experiência. Reserva é obrigatória na alta temporada. As Ocean Villas são recomendadas para surfistas adultos."
    },
    {
      question: "O resort é adequado para famílias com crianças?",
      answer: "Absolutamente! O resort possui Kids Club gratuito, playground, piscina infantil, bicicletas, ampla variedade de atividades recreativas e esportes não motorizados. As Beach Villas são perfeitas para famílias. Berços, camas extras e amenidades para crianças estão disponíveis sob reserva."
    },
    {
      question: "Como é o transfer do aeroporto até o resort?",
      answer: "O transfer é feito por lancha rápida (speedboat) e leva apenas 30 minutos do aeroporto internacional de Malé até o resort. É um dos transfers mais curtos e práticos das Maldivas. O custo do transfer pode estar incluído ou ser pago à parte, dependendo do pacote escolhido."
    },
    {
      question: "O snorkeling é bom no resort?",
      answer: "Sim! O Adaaran Select possui um excelente house reef, considerado um dos melhores entre resorts 4 estrelas. Equipamento completo de snorkeling está incluído no All Inclusive. Você pode ver vida marinha abundante, peixes tropicais coloridos e corais vibrantes direto do resort."
    },
    {
      question: "Há restrições de horário para as refeições?",
      answer: "O Banyan Restaurant serve buffet em horários regulares (café da manhã, almoço e jantar). Os bares funcionam durante todo o dia, alguns até 24h como o Hiyala Bar. Snacks, sorvetes e chá da tarde estão disponíveis em horários específicos. Room service 24h está disponível com custo adicional."
    },
    {
      question: "Qual a melhor época para visitar o resort?",
      answer: "As Maldivas têm clima tropical o ano todo. A alta temporada (dezembro a abril) oferece menos chuvas e mar mais calmo. Para surf, os meses de março a outubro são ideais para pegar as melhores ondas no Lohis. Recomendamos reservar com antecedência, especialmente para a alta temporada e períodos de férias."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Tire suas dúvidas sobre o Adaaran Select Hudhuranfushi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-2xl border border-border px-6 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">
            Ainda tem dúvidas? Fale com nossos especialistas!
          </p>
          <a 
            href="https://wa.link/followmeviagens" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
