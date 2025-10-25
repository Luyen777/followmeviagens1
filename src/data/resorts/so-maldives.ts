import type { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-gradient.jpg";
import soMaldivesVilla from "@/assets/so-maldives-villa.jpg";

const soMaldives: ResortData = {
  slug: "so-maldives",
  name: "SO/ Maldives",
  rating: 5,
  location: "Emboodhoo Lagoon, Atol de Kaafu",
  transferTime: "15 minutos de lancha rápida desde Malé",
  heroImage: heroImage,
  heroTitle: "SO/ Maldives",
  heroSubtitle: "Resort avant-garde a 15 minutos de Malé",
  heroHighlights: ["Design Avant-Garde", "3 Restaurantes Assinatura", "15min de Malé"],
  seoTitle: "SO/ Maldives - Resort Avant-Garde de Luxo | Momentos Inesquecíveis",
  seoDescription: "Descubra o SO/ Maldives, resort avant-garde de luxo com 80 vilas exclusivas, 3 restaurantes assinatura e design inspirado em arte e moda. Apenas 15 minutos do aeroporto de Malé.",
  about: "O SO/ Maldives é um resort avant-garde de luxo localizado na lagoa privativa de Emboodhoo, no Atol de Kaafu, a apenas 15 minutos de lancha rápida do Aeroporto Internacional de Malé. Este refúgio exclusivo reinventa a experiência de ilha tropical ao combinar design contemporâneo inspirado em moda e arte com 80 vilas personalizadas à beira-mar e sobre as águas cristalinas.\n\nCom uma proposta sofisticada e descontraída, o resort oferece experiências gastronômicas diversificadas em restaurantes como o Hadaba (culinária levantina), The Citronelle Club (sabores pan-asiáticos) e o boêmio Lazuli Beach Club à beira-mar.\n\nO SO/ Maldives também conta com um wellness camp sereno equipado com spa, hammam, academia de última geração e uma vibrante programação de esportes aquáticos na deslumbrante lagoa, criando o cenário perfeito para quem busca relaxamento luxuoso com um toque artístico e contemporâneo.",
  sections: [
    {
      id: "dining",
      title: "Gastronomia",
      subtitle: "Três restaurantes assinatura com proposta gastronômica diversificada",
      type: "cards",
      items: [
        {
          title: "The Citronelle Club",
          description: "Fusão Pan-Asiática - Ambiente zen frente à praia com design asiático. Cozinha aberta com woks e pratos como bacalhau enegrecido e costelas de cordeiro agridoce. Extensa oferta de dim sum e pratos leves como spring rolls de rúcula.",
          icon: "UtensilsCrossed"
        },
        {
          title: "Lazuli Beach Club",
          description: "Mediterrâneo & Saudável - Ambiente de beach club sofisticado com charme da Côte d'Azur. Pratos como robalo grelhado, molho de pepino e espetadas de vegetais. Churrascos temáticos, pop-ups e festas de paella. Cocktails vibrantes pensados para compartilhar.",
          icon: "Wine"
        },
        {
          title: "Hadaba",
          description: "Culinária Levantina (Assinatura) - Localizado na ponta costeira do resort em dois andares. Especialidades do Golfo da Arábia ao Mediterrâneo. Pão Laffa fresco assado no 'Saj' personalizado. Especiais diários de ceviche e icônico Cordeiro Shawarma de cozimento lento.",
          icon: "Sparkles"
        }
      ]
    },
    {
      id: "activities",
      title: "Atividades",
      subtitle: "Experiências aquáticas e aventuras terrestres em ambiente paradisíaco",
      type: "cards",
      items: [
        {
          title: "Esportes Aquáticos Motorizados",
          icon: "Waves",
          items: [
            "Jet ski - $150-200 por sessão",
            "X-Jetblade - Preços premium",
            "Wakeboard/Wake foil - $125 por 15 minutos",
            "Aulas de kite surf - $150 por hora",
            "Wing-surfer - $95 por hora"
          ]
        },
        {
          title: "Excursões e Passeios",
          icon: "Ship",
          items: [
            "Tours de snorkeling - $50-600",
            "Passeio para ver golfinhos - $175",
            "Passeio do pôr do sol - $175",
            "Visita a ilhas locais - $150",
            "Tour pela cidade de Malé - $150"
          ]
        },
        {
          title: "Atividades Gratuitas",
          icon: "Check",
          items: [
            "Caiaque",
            "Stand-up paddleboard",
            "Equipamento de windsurf",
            "Equipamento de snorkeling",
            "Catamarã (para velejadores certificados)",
            "Bicicletas",
            "Academia 24 horas",
            "Piscinas externa e infinita",
            "Sauna e sala de vapor",
            "Vôlei de praia, bocha, futebol",
            "Kids Club (4-11 anos)",
            "Teens Club (12-16 anos)"
          ]
        }
      ]
    },
    {
      id: "inclusions",
      title: "O que está incluído",
      subtitle: "Pacote completo de comodidades e experiências para sua estadia",
      type: "cards",
      items: [
        {
          title: "Comodidades na Villa",
          icon: "Sparkles",
          items: [
            "Minibar com bebidas alcoólicas, não-alcoólicas e petiscos (reposição diária)",
            "Piscina infinita privada com design listrado",
            "Roupões, chinelos, bolsa de praia",
            "Produtos de higiene premium",
            "Wi-Fi em toda a propriedade",
            "Limpeza diária"
          ]
        },
        {
          title: "Esportes Aquáticos",
          icon: "Waves",
          items: [
            "Caiaque",
            "Stand-up paddleboard",
            "Equipamento de windsurf (exceto aulas)",
            "Equipamento de snorkeling",
            "Uso básico de catamarã (apenas para velejadores certificados)",
            "Aluguel gratuito de bicicletas"
          ]
        },
        {
          title: "Facilidades & Entretenimento",
          icon: "Dumbbell",
          items: [
            "Acesso à academia (24 horas)",
            "Piscinas (externa e infinita)",
            "Kids Club 'The Nest' (idades 4-11)",
            "Teens Club 'The Zone' (idades 12-16)",
            "Vôlei de praia, bocha, futebol",
            "Transfer gratuito para CROSSROADS",
            "Acesso à sauna e sala de vapor",
            "Entretenimento noturno (cinema, DJ, apresentações culturais)"
          ]
        }
      ]
    }
  ],
  accommodations: {
    title: "Acomodação",
    description: "Vilas exclusivas com design contemporâneo inspirado em arte e moda",
    types: [
      {
        name: "Overwater Pool Villa",
        size: "120 m²",
        beds: "1 cama king size ou twin beds",
        maxOccupancy: "3 hóspedes",
        features: [
          "Piscina infinita privada com design listrado característico",
          "Deck wraparound com vistas oceânicas ininterruptas",
          "Banheira flutuante cocoon com vista para o oceano",
          "Janelas do chão ao teto com vistas panorâmicas",
          "Minibar premium com bebidas e petiscos (reposição diária)"
        ]
      }
    ]
  },
  pricing: {
    seasons: [
      {
        name: "Baixa Temporada",
        period: "Maio até Novembro",
        priceText: "Consulte valores",
        priceSubtext: "Preço por pessoa"
      },
      {
        name: "Alta Temporada",
        period: "Dezembro até Abril",
        priceText: "Consulte valores",
        priceSubtext: "Preço por pessoa"
      }
    ],
    paymentTerms: [
      "Entrada de 20% via transferência bancária ao confirmar a reserva",
      "80% restante até 30 dias antes da viagem",
      "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
    ],
    cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
    notes: "Os valores estão sujeitos a alteração sem aviso prévio. Consulte-nos para obter cotações atualizadas e disponibilidade."
  },
  faqs: [
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
  ],
  images: [
    {
      src: heroImage,
      alt: "SO/ Maldives - Vista aérea do resort"
    },
    {
      src: soMaldivesVilla,
      alt: "SO/ Maldives Overwater Pool Villa - Villa luxuosa com piscina infinita privativa listrada e design contemporâneo sobre águas cristalinas"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
      alt: "SO/ Maldives - Overwater villa com piscina infinita privativa ao pôr do sol"
    },
    {
      src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574",
      alt: "SO/ Maldives - Vista aérea do resort com vilas sobre águas cristalinas"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
      alt: "SO/ Maldives - Interior moderno da villa com design contemporâneo"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
      alt: "SO/ Maldives - Piscina infinita privativa com vista oceânica"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
      alt: "SO/ Maldives - Experiência gastronômica à beira-mar"
    }
  ]
};

export default soMaldives;
