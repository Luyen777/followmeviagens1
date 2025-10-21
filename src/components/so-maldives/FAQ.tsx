import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como chegar ao SO/ Maldives?",
      answer: "O resort está localizado a apenas 15 minutos de lancha rápida do Aeroporto Internacional de Malé. O transfer está incluído no pacote e é providenciado diretamente pelo resort."
    },
    {
      question: "O que está incluído no pacote All-Inclusive?",
      answer: "O pacote inclui todas as refeições nos três restaurantes, minibar com reposição diária, esportes aquáticos não motorizados (caiaque, SUP, snorkeling), acesso às facilidades (piscinas, academia, sauna, vapor), Kids Club, Teens Club e entretenimento noturno."
    },
    {
      question: "Quais atividades têm custo adicional?",
      answer: "Esportes aquáticos motorizados (jet ski, wakeboard), excursões especiais (snorkeling avançado, passeio de golfinhos), tratamentos de spa e experiências gastronômicas exclusivas (floating breakfast, private dining) têm custo adicional."
    },
    {
      question: "O resort é adequado para famílias com crianças?",
      answer: "Sim! O SO/ Maldives oferece Kids Club 'The Nest' para crianças de 4-11 anos e Teens Club 'The Zone' para adolescentes de 12-16 anos, ambos com programação supervisionada e atividades recreativas."
    },
    {
      question: "Qual a melhor época para visitar as Maldivas?",
      answer: "A melhor época é de novembro a abril (estação seca), com clima mais estável e águas cristalinas ideais para mergulho. Maio a outubro é temporada de chuvas, mas oferece tarifas mais vantajosas."
    },
    {
      question: "É necessário visto para brasileiros?",
      answer: "Não é necessário visto prévio. Brasileiros recebem visto gratuito de 30 dias na chegada ao Aeroporto de Malé, válido apenas para turismo."
    },
    {
      question: "O resort oferece serviços de spa?",
      answer: "Sim, o SO/ Spa oferece tratamentos completos incluindo massagens (a partir de $175), faciais ($220), pacotes de spa ($420-650) e acesso às facilidades wellness como sauna, vapor e vitality pool."
    },
    {
      question: "Posso personalizar meu pacote?",
      answer: "Sim! Trabalhamos com pacotes totalmente personalizados. Entre em contato para adaptar número de noites, categoria de acomodação, experiências extras e criar o roteiro perfeito para você."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o SO/ Maldives
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-primary/20 rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-medium text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
