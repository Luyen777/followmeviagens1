import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a melhor época para fazer safari na África do Sul?",
    answer: "A melhor época para safari no Kruger Park é durante o inverno seco (maio a setembro), quando a vegetação é menos densa e os animais se concentram ao redor dos pontos de água, facilitando a observação. As temperaturas são mais amenas durante o dia (20-25°C) e frias à noite (5-10°C). O verão (novembro a março) também é excelente, com paisagens mais verdes e muitos filhotes, mas pode haver chuvas ocasionais. Para Cape Town, outubro a abril oferece clima ideal."
  },
  {
    question: "Brasileiros precisam de visto para a África do Sul?",
    answer: "Não! Brasileiros não precisam de visto para entrar na África do Sul para fins turísticos. Você receberá um carimbo de entrada válido por até 90 dias no aeroporto. É necessário apenas passaporte válido por pelo menos 30 dias após a data de retorno e com pelo menos duas páginas em branco consecutivas. Certifique-se também de ter comprovante de passagem de volta e reservas de hotel."
  },
  {
    question: "É seguro viajar pela África do Sul?",
    answer: "Sim, seguindo precauções básicas. As áreas turísticas incluídas neste roteiro (Kruger Park e Cape Town) são muito seguras. No Kruger, você estará sempre acompanhado por guias experientes em veículos seguros. Em Cape Town, como em qualquer grande cidade, recomendamos não exibir objetos de valor, evitar áreas isoladas à noite e usar sempre transfers do hotel. Nossa equipe fornece orientações detalhadas e suporte 24h. Milhares de brasileiros visitam a África do Sul anualmente com segurança."
  },
  {
    question: "Que roupas levar para o safari e Cape Town?",
    answer: "Para o safari: roupas leves em tons neutros (bege, cáqui, verde oliva - evite preto e branco que atraem insetos), calças compridas, jaqueta para safáris matinais (pode fazer 5°C), chapéu, óculos de sol e protetor solar. Para Cape Town: roupas casuais durante o dia, algo mais elegante para restaurantes à noite, agasalho leve (pode ventar), roupa de banho e tênis confortável. Importante: leve adaptador de tomada (tipo M, africano de 3 pinos redondos)."
  },
  {
    question: "Quais são os Big Five que posso ver no Kruger?",
    answer: "Os Big Five são: Leão, Leopardo, Elefante Africano, Rinoceronte (branco e preto) e Búfalo Africano. Eles foram assim chamados pelos caçadores devido à dificuldade e perigo de caçá-los a pé. No Kruger Park, as chances de ver os cinco são excelentes, especialmente com nossos 4 safáris incluídos. Além dos Big Five, você poderá avistar girafas, zebras, hipopótamos, crocodilos, hienas, guepardos, centenas de espécies de aves e muitos outros animais incríveis!"
  },
  {
    question: "Como é o clima em Cape Town?",
    answer: "Cape Town tem clima mediterrâneo com quatro estações bem definidas. Verão (dezembro-fevereiro): quente e seco, 25-30°C, melhor época para praias. Outono (março-maio): agradável, 18-23°C, ótimo para passeios. Inverno (junho-agosto): frio e chuvoso, 10-18°C, época das baleias. Primavera (setembro-novembro): florida e ventosa, 15-22°C. O vento é característico de Cape Town, especialmente no verão. Sempre leve uma jaqueta leve, mesmo no verão."
  },
  {
    question: "Posso beber água da torneira na África do Sul?",
    answer: "Sim! A água da torneira na África do Sul é potável e de excelente qualidade, tanto em Cape Town quanto no Kruger Park. O país possui um dos melhores sistemas de tratamento de água do mundo. Você pode beber água direto da torneira sem preocupações, o que também ajuda a reduzir o uso de plástico. Nos lodges de safari, sempre há água filtrada disponível para encher sua garrafa antes dos safáris."
  },
  {
    question: "Que moeda é usada e como pagar?",
    answer: "A moeda oficial é o Rand Sul-Africano (ZAR). Cartões de crédito internacionais (Visa e Mastercard) são amplamente aceitos em hotéis, restaurantes e lojas. Recomendamos levar dólares ou euros para trocar em casas de câmbio (melhor taxa que no aeroporto). ATMs são abundantes e seguros durante o dia. Para gorjetas e pequenas compras, tenha sempre alguns Rands em espécie. Nossa equipe orienta sobre quanto trocar e os melhores locais para câmbio."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Perguntas frequentes sobre a África do Sul
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tire todas as suas dúvidas antes de embarcar nesta aventura africana
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
