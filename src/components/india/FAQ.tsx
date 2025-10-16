import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de visto para viajar para a Índia?",
    answer: "Sim, brasileiros precisam de visto para entrar na Índia. Oferecemos assistência completa no processo de obtenção do e-Visa, que é simples e pode ser feito online. O processo leva cerca de 3-5 dias úteis e inclui instruções detalhadas em português."
  },
  {
    question: "Qual a melhor época para visitar a Índia?",
    answer: "A melhor época é entre outubro e março, quando o clima é mais ameno e seco, perfeito para turismo. Evite os meses de junho a setembro (monções) e abril-maio (muito calor). Nossa equipe pode ajudar a escolher as datas ideais para sua viagem."
  },
  {
    question: "O pacote inclui seguro viagem?",
    answer: "Sim, todos os nossos pacotes incluem seguro viagem internacional completo com cobertura médica, bagagem e cancelamento. Você viaja com total tranquilidade e assistência 24/7 em português."
  },
  {
    question: "As refeições estão incluídas?",
    answer: "O café da manhã está incluído todos os dias. Algumas refeições (almoços e jantares) também estão inclusas conforme descrito no roteiro. Recomendamos que mantenha algumas refeições livres para explorar a culinária local por conta própria."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com parcelamento facilitado: entrada de 30% na confirmação e o saldo pode ser dividido em até 10x sem juros no cartão de crédito. Também aceitamos PIX com desconto especial."
  },
  {
    question: "Os guias falam português?",
    answer: "Os guias locais falam inglês fluente e você terá acompanhamento de um coordenador brasileiro em grupos maiores. Fornecemos material informativo completo em português e assistência 24/7 com nossa equipe brasileira."
  },
  {
    question: "Posso personalizar o roteiro?",
    answer: "Absolutamente! Este é um roteiro base, mas podemos personalizar completamente de acordo com seus interesses, adicionar ou remover dias, mudar hotéis, incluir experiências especiais. Entre em contato para criarmos seu roteiro ideal."
  },
  {
    question: "Qual o tamanho do grupo?",
    answer: "Trabalhamos com grupos pequenos de no máximo 12 pessoas para garantir uma experiência mais exclusiva e personalizada. Também oferecemos pacotes privativos para casais, famílias ou grupos fechados."
  },
  {
    question: "É seguro viajar para a Índia?",
    answer: "Sim! Os destinos incluídos neste roteiro são muito seguros e turísticos. Fornecemos orientações detalhadas, guias locais experientes, transfers privativos e suporte 24/7. Milhares de brasileiros viajam para a Índia todos os anos com total segurança."
  },
  {
    question: "O que não está incluído no pacote?",
    answer: "Não estão inclusos: passagens aéreas internacionais Brasil-Índia (podemos incluir sob consulta), bebidas alcoólicas, gorjetas opcionais, despesas pessoais e passeios não mencionados no roteiro. Tudo está claramente especificado na proposta detalhada."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tudo o que você precisa saber antes de fazer sua viagem dos sonhos
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 text-left">
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
