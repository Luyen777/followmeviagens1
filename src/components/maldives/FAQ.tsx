import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como chegar ao InterContinental Maldives Maamunagau Resort?",
    answer: "O resort está localizado no Atol de Raa e é acessível através de um voo panorâmico de hidroavião de 35 minutos desde o Aeroporto Internacional de Malé. O transfer de hidroavião está incluído no pacote e oferece vistas espetaculares das ilhas e lagoas das Maldivas.",
  },
  {
    question: "Qual é a melhor época para visitar as Maldivas?",
    answer: "As Maldivas podem ser visitadas durante todo o ano. A alta temporada é de dezembro a abril, com clima mais seco e ensolarado. A baixa temporada (maio a novembro) pode ter chuvas ocasionais, mas oferece melhores preços e menos turistas. O resort oferece experiências incríveis em qualquer época do ano.",
  },
  {
    question: "O resort é adequado para lua de mel?",
    answer: "Sim! O InterContinental Maldives é perfeito para lua de mel. Com villas overwater privativas, jantares românticos à beira-mar, spa para casais e pôr do sol espetaculares, o resort oferece o cenário ideal para celebrar momentos especiais. Nossa equipe pode personalizar experiências exclusivas para tornar sua lua de mel inesquecível.",
  },
  {
    question: "Posso fazer mergulho e snorkeling no resort?",
    answer: "Absolutamente! O resort oferece equipamentos de snorkeling gratuitos e possui uma lagoa privativa com recifes de coral vibrantes. Para mergulho, há um centro de mergulho certificado no local que oferece aulas e passeios guiados para todos os níveis de experiência (custo adicional).",
  },
  {
    question: "O que está incluído no serviço de mordomo 24 horas?",
    answer: "O serviço de mordomo oferece assistência personalizada durante toda a sua estadia, incluindo: organização de refeições e reservas em restaurantes, planejamento de atividades, check-in na villa, preparação de banhos aromáticos, serviço de despensa de cortesia e qualquer outra necessidade especial que você possa ter.",
  },
  {
    question: "Há opções vegetarianas e para restrições alimentares?",
    answer: "Sim, todos os restaurantes do resort podem acomodar diferentes restrições alimentares, incluindo opções vegetarianas, veganas, sem glúten e outras necessidades dietéticas. Informe nossas necessidades alimentares ao fazer a reserva e o chef preparará menus personalizados para você.",
  },
  {
    question: "Preciso de visto para as Maldivas?",
    answer: "Brasileiros recebem visto de turista gratuito por 30 dias na chegada ao aeroporto de Malé. É necessário apresentar passaporte válido por pelo menos 6 meses, passagem de retorno e comprovante de hospedagem. Recomendamos verificar os requisitos atualizados antes da viagem.",
  },
  {
    question: "Posso estender minha estadia além das 4 noites?",
    answer: "Sim! Você pode adicionar noites extras ao seu pacote. Entre em contato com nossa equipe para consultar disponibilidade e valores para noites adicionais. Recomendamos reservar com antecedência, especialmente durante a alta temporada.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas para as dúvidas mais comuns sobre o InterContinental Maldives
          </p>
        </header>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contact"
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Entre em contato com nossa equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
