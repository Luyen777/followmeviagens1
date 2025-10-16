import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a melhor época para visitar a Índia?",
    answer: "A melhor época para visitar o Triângulo Dourado (Delhi, Jaipur e Agra) é entre outubro e março, quando as temperaturas são mais amenas, variando entre 10°C e 25°C. Evite os meses de abril a junho devido ao calor extremo (até 45°C) e julho a setembro pela época das monções. O período de novembro a fevereiro é ideal para turismo, com dias ensolarados e noites agradáveis."
  },
  {
    question: "Preciso de visto? Como obter?",
    answer: "Sim, brasileiros precisam de visto para entrar na Índia. O processo é simples através do e-Visa (visto eletrônico), que pode ser solicitado online no site oficial do governo indiano. O e-Visa de turismo tem validade de 30 dias e permite entrada única ou múltipla. Nossa equipe fornece todas as orientações necessárias e a lista de documentos para facilitar o processo, que geralmente leva de 3 a 5 dias úteis."
  },
  {
    question: "É seguro viajar para a Índia?",
    answer: "Sim! Os destinos incluídos neste roteiro (Delhi, Jaipur e Agra) são extremamente seguros e recebem milhões de turistas todos os anos. Trabalhamos apenas com guias certificados, hotéis de alto padrão e transfers privativos. Você terá suporte 24h em português e todas as orientações necessárias sobre costumes locais. Recomendamos sempre seguir as orientações do guia, não exibir objetos de valor excessivamente e contratar seguro viagem."
  },
  {
    question: "Que tipo de roupa devo levar?",
    answer: "Leve roupas leves e confortáveis de algodão para o dia, mas também inclua algumas peças para a noite que pode ser mais fresca, especialmente entre dezembro e fevereiro. Para visitas a templos e locais religiosos, é necessário cobrir ombros e joelhos - leve lenços/xales e calças leves. Sapatos confortáveis são essenciais pois há bastante caminhada. Não esqueça protetor solar, chapéu e óculos de sol. Roupas coloridas são bem-vindas!"
  },
  {
    question: "Como funciona a culinária indiana?",
    answer: "A culinária indiana é rica, variada e surpreendentemente deliciosa! Cada região tem suas especialidades. No norte (nosso roteiro), predominam pães como naan e roti, curry cremosos, tandoori e biryani. Os níveis de tempero podem ser ajustados ao seu paladar - sempre avise se prefere menos picante. O café da manhã está incluído diariamente, e nossos guias podem recomendar os melhores restaurantes para almoço e jantar, desde opções tradicionais até cozinha indiana contemporânea."
  },
  {
    question: "Qual moeda é usada e como pagar?",
    answer: "A moeda oficial é a Rúpia Indiana (INR). Recomendamos levar dólares ou euros para trocar em casas de câmbio oficiais em Delhi (melhor taxa). Cartões de crédito internacionais são aceitos em hotéis, restaurantes grandes e lojas, mas é essencial ter dinheiro para mercados locais, pequenos estabelecimentos e gorjetas. Caixas eletrônicos (ATMs) são amplamente disponíveis. Nossa equipe orienta sobre os melhores locais para câmbio e quanto dinheiro em espécie levar."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Perguntas frequentes sobre a Índia
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tire todas as suas dúvidas antes de embarcar nesta aventura
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
