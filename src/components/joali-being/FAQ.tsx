import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como é o acesso ao JOALI BEING?",
      answer: "O acesso é feito por hidroavião privativo, com cerca de 40 minutos de voo panorâmico saindo de Malé. Antes do embarque, você será recepcionado no lounge VIP JOALI no aeroporto, com amenities e conforto premium."
    },
    {
      question: "O que torna o JOALI BEING único entre os resorts de luxo nas Maldivas?",
      answer: "JOALI BEING é o primeiro resort 7 estrelas ultraexclusivo focado 100% em bem-estar integral. Com apenas 68 villas, arquitetura biophilic, serviço Jadugar (mordomo personalizado), Areka Spa de classe mundial e experiências wellness transformadoras personalizadas para cada hóspede."
    },
    {
      question: "O que é o serviço Jadugar?",
      answer: "Jadugar é o nome do serviço de mordomo personalizado 24h disponível em cada villa. Cada hóspede tem seu próprio 'mágico' que antecipa necessidades, organiza experiências, cuida de cada detalhe e garante privacidade e discrição absolutas."
    },
    {
      question: "Quais tipos de experiências wellness estão incluídas?",
      answer: "O pacote base inclui consulta inicial no Areka Spa, crédito diário para tratamentos, aulas de yoga, pilates, breathwork, meditação, sound healing, acesso à hidroterapia (Watsu pool, haloterapia, sauna, banho turco), workshops do herbal centre Aktar e programação wellness personalizada."
    },
    {
      question: "O resort aceita famílias com crianças?",
      answer: "O JOALI BEING é majoritariamente adults-only, sendo ideal para casais e viajantes em busca de transformação e tranquilidade. Famílias podem ser aceitas em villas residenciais específicas mediante política sob consulta prévia com o resort."
    },
    {
      question: "Quais são as opções de refeições?",
      answer: "O conceito é 'earth to table' com ingredientes frescos e sustentáveis. Inclui café da manhã no FLOW (restaurante principal), opções no MOJO (beach club mediterrâneo), Su (asiático), Aktar Bar (infusões wellness) e experiências privativas. Cardápios são personalizados conforme diagnóstico wellness individual."
    },
    {
      question: "Qual a duração mínima recomendada de estadia?",
      answer: "Para vivenciar plenamente a jornada de transformação wellness, recomendamos estadia mínima de 5 a 7 noites. Programas wellness immersions (sono, detox, fitness) geralmente têm duração de 7 a 14 dias."
    },
    {
      question: "O que são os Wellness Immersions?",
      answer: "São programas multidia customizados focados em objetivos específicos: melhora do sono, detox integral, equilíbrio do microbioma, fitness transformador, gestão de stress. Incluem consultas com especialistas internacionais, tratamentos diários, nutrição personalizada e acompanhamento pós-estadia."
    },
    {
      question: "Posso realizar cerimônias ou celebrações privadas no resort?",
      answer: "Sim! O JOALI BEING oferece elopements, renovação de votos, cerimônias wellness, retiros personalizados e celebrações privadas. Cada experiência é customizada pela equipe com locações exclusivas (sandbank, deck privativo, sala do chef)."
    },
    {
      question: "Quais atividades têm custo adicional?",
      answer: "Tratamentos signature no Areka Spa (além do crédito diário), wellness immersions, consultas com médicos especializados, mergulho PADI, excursões (dolphin cruise, sandbank picnic, iate privativo), jantares privativos, degustações de vinhos raros, fotografia profissional e serviço de babá."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre sua experiência transformadora
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
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
