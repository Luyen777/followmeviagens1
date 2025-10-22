import heroImage from "@/assets/maldives-hero-latest.avif";

export interface ResortData {
  slug: string;
  name: string;
  rating: number;
  location: string;
  transferTime: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHighlights: string[];
  seoTitle: string;
  seoDescription: string;
  valueProps: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  sections: Array<{
    id: string;
    title: string;
    subtitle?: string;
    type: 'list' | 'cards' | 'text' | 'two-column';
    items?: Array<{
      title?: string;
      description?: string;
      icon?: string;
      badge?: string;
      items?: string[];
    }>;
    content?: string;
  }>;
  accommodations: {
    title: string;
    description: string;
    types: Array<{
      name: string;
      size: string;
      beds: string;
      maxOccupancy: string;
      features: string[];
    }>;
  };
  pricing: {
    seasons: Array<{
      name: string;
      period: string;
      priceText: string;
      priceSubtext?: string;
    }>;
    paymentTerms: string[];
    cancellationPolicy: string;
    notes?: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const maldivesResorts: Record<string, ResortData> = {
  "adaaran-select": {
    slug: "adaaran-select",
    name: "Adaaran Select Hudhuranfushi",
    rating: 4,
    location: "North Malé Atoll",
    transferTime: "30 minutos de lancha",
    heroImage: heroImage,
    heroTitle: "Adaaran Select Hudhuranfushi",
    heroSubtitle: "Excelente custo-benefício com acesso a um dos melhores surf spots das Maldivas",
    heroHighlights: ["All Inclusive Premium", "Transfer de Lancha 30min", "Surf & Snorkeling"],
    seoTitle: "Adaaran Select Hudhuranfushi - Resort All Inclusive 4★ | Follow Me Viagens",
    seoDescription: "Resort 4 estrelas all inclusive no North Malé Atoll, a 30 minutos de Malé. Ideal para casais, famílias e surfistas com acesso ao Lohis. Melhor custo-benefício das Maldivas com snorkeling, kids club e esportes gratuitos.",
    valueProps: [
      {
        icon: "DollarSign",
        title: "Melhor Custo-Benefício",
        description: "Resort 4 estrelas all inclusive com preços acessíveis, ideal para famílias e casais que buscam experiência completa nas Maldivas sem comprometer o orçamento."
      },
      {
        icon: "Waves",
        title: "Paraíso para Surfistas",
        description: "Acesso exclusivo ao lendário surf spot Lohis, uma das melhores ondas das Maldivas. Packages especiais e Ocean Villas exclusivas para surfistas."
      },
      {
        icon: "UtensilsCrossed",
        title: "All Inclusive Completo",
        description: "Todas as refeições, bebidas alcoólicas e não alcoólicas, esportes aquáticos e terrestres incluídos. Sem surpresas na conta no final da viagem."
      },
      {
        icon: "Users",
        title: "Ideal para Famílias",
        description: "Kids Club gratuito, playground, piscinas infantis e atividades supervisionadas. Beach villas espaçosas ideais para famílias com crianças."
      }
    ],
    sections: [
      {
        id: "activities",
        title: "Atividades & Experiências",
        subtitle: "A maior diversidade esportiva entre resorts 4 estrelas das Maldivas, com atividades para todos os perfis",
        type: "two-column",
        items: [
          {
            title: "Incluído no All Inclusive",
            icon: "Heart",
            badge: "Grátis",
            items: [
              "Snorkeling com equipamento gratuito no house reef",
              "Esportes aquáticos: caiaque, windsurf, SUP, pedalinho",
              "Esportes terrestres: tênis, squash, badminton, futebol, vôlei",
              "Bicicletas para explorar toda a ilha",
              "Piscina adulto e infantil com serviço de praia",
              "Kids Club e playground completos",
              "Aulas de yoga e fitness center",
              "Shows noturnos, música ao vivo e eventos culturais",
              "Happy hour de drinks e entretenimento semanal"
            ]
          },
          {
            title: "Atividades Premium",
            icon: "Waves",
            items: [
              "Mergulho PADI 5★: batismo, cursos, night dive",
              "Esportes motorizados: jet ski, seabob, kite, wakeboard, parasailing",
              "Spa Mandara: tratamentos balineses, massagens, wellness",
              "Surf no Lohis: aluguel de pranchas, aulas com profissionais",
              "Excursões: sandbank picnic, pesca, island hopping, dolphin tour",
              "Jantares privativos na praia e degustação de vinhos",
              "Masterclasses de culinária e sessões de fotos profissionais"
            ]
          }
        ]
      },
      {
        id: "dining",
        title: "Gastronomia All Inclusive",
        subtitle: "Experiências gastronômicas variadas com culinária internacional, pratos maldivinos autênticos e frutos do mar frescos",
        type: "cards",
        items: [
          {
            title: "Banyan Restaurant",
            description: "Restaurante principal com buffet variado servindo café da manhã, almoço e jantar. Culinária internacional com opções locais maldivinas.",
            badge: "Incluído"
          },
          {
            title: "Sunset Restaurant",
            description: "Restaurante overwater especializado em frutos do mar frescos e jantares especiais românticos com vista para o pôr do sol."
          },
          {
            title: "Lohis Wave",
            description: "Ambiente descontraído junto ao surf spot, servindo drinks tropicais, cervejas geladas e snacks durante todo o dia.",
            badge: "Incluído"
          },
          {
            title: "Hiyala Bar",
            description: "Bar central junto à piscina, aberto 24 horas com ampla seleção de drinks, coquetéis e bebidas premium.",
            badge: "Incluído"
          },
          {
            title: "Beach Bar",
            description: "Lanches, petiscos e drinks tropicais servidos à beira-mar com vista para as águas cristalinas.",
            badge: "Incluído"
          }
        ]
      },
      {
        id: "inclusions",
        title: "All Inclusive Premium",
        subtitle: "Tudo que você precisa para aproveitar ao máximo sua experiência nas Maldivas, sem preocupações",
        type: "list",
        items: [
          {
            title: "Refeições & Bebidas",
            items: [
              "Café da manhã, almoço e jantar no buffet internacional",
              "Snacks, lanches e sorvetes durante todo o dia",
              "Bebidas alcoólicas e não alcoólicas ilimitadas",
              "Chá da tarde com petiscos",
              "Água mineral, refrigerantes e sucos naturais"
            ]
          },
          {
            title: "Esportes & Atividades",
            items: [
              "Equipamentos de snorkeling gratuitos",
              "Esportes aquáticos não motorizados (caiaque, SUP, windsurf)",
              "Esportes terrestres (tênis, badminton, vôlei, futebol)",
              "Bicicletas para explorar a ilha",
              "Aulas de yoga e fitness center"
            ]
          },
          {
            title: "Entretenimento & Serviços",
            items: [
              "Shows noturnos e música ao vivo",
              "Kids Club com atividades supervisionadas",
              "Wi-Fi gratuito em todo o resort",
              "Toalhas de praia e piscina",
              "Impostos e taxas governamentais"
            ]
          }
        ]
      }
    ],
    accommodations: {
      title: "Acomodações Renovadas",
      description: "Villas recém-reformadas em 2023, combinando conforto moderno com charme tropical",
      types: [
        {
          name: "Ocean Villa",
          size: "90m²",
          beds: "1 King ou 2 Twin",
          maxOccupancy: "2 adultos (exclusivo)",
          features: [
            "Localizada sobre a água com deck privativo",
            "Banheiro aberto com vista para o oceano",
            "Acesso direto ao mar para snorkeling",
            "Ideal para surfistas com acesso ao Lohis",
            "Ar-condicionado, ventilador de teto, minibar",
            "Máquina de café, cofre, secador de cabelo"
          ]
        },
        {
          name: "Beach Villa",
          size: "75m²",
          beds: "1 King ou 2 Twin + sofá-cama",
          maxOccupancy: "3 adultos ou 2 adultos + 2 crianças",
          features: [
            "Acesso direto à praia de areia branca",
            "Terraço privativo com espreguiçadeiras",
            "Banheiro semi-aberto com chuveiro externo",
            "Ideal para famílias e casais",
            "Ar-condicionado, ventilador de teto, minibar",
            "Máquina de café, cofre, secador de cabelo"
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
        "80% restante até 30 dias antes da viagem para garantir sua reserva",
        "Parcelamento em até 10x com opções flexíveis de pagamento disponíveis"
      ],
      cancellationPolicy: "Cancelamento até 30 dias antes da viagem com reembolso de 80% do valor pago",
      notes: "Valores sujeitos a alteração conforme disponibilidade e temporada. Entre em contato para cotação atualizada."
    },
    faqs: [
      {
        question: "O transfer do aeroporto está incluído?",
        answer: "Sim! O transfer de lancha compartilhada (30 minutos) está incluído no pacote. Saídas regulares do aeroporto de Malé para o resort."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, muito! Temos Kids Club gratuito, playground, piscina infantil e beach villas espaçosas. As Ocean Villas são exclusivas para adultos (ideal para surfistas)."
      },
      {
        question: "Como funciona o acesso ao surf spot Lohis?",
        answer: "O Lohis é um dos melhores surf spots das Maldivas. Guests do resort têm acesso exclusivo mediante reserva. Durante alta temporada (abril-outubro), recomendamos reservar com antecedência. Aluguel de pranchas e aulas disponíveis."
      },
      {
        question: "Quais bebidas alcoólicas estão incluídas?",
        answer: "O All Inclusive inclui cerveja, vinho, drinks, coquetéis da casa e spirits selecionados. Bebidas premium e vinhos especiais têm custo adicional."
      },
      {
        question: "É necessário visto para as Maldivas?",
        answer: "Brasileiros não precisam de visto prévio. O visto de turista (30 dias) é concedido gratuitamente na chegada ao aeroporto de Malé."
      },
      {
        question: "Qual a melhor época para visitar?",
        answer: "A alta temporada (dezembro a abril) tem clima mais seco e mar calmo, ideal para famílias. A baixa temporada (maio a novembro) oferece preços melhores e ondas maiores para surf."
      }
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Adaaran Select Hudhuranfushi - Vista aérea das ocean villas sobre águas cristalinas"
      },
      {
        src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574",
        alt: "Adaaran Select - Beach villas com acesso direto à praia de areia branca"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Interior moderno e confortável das villas recém-renovadas"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Piscina principal do resort com área para adultos e crianças"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Sunset Restaurant - experiências gastronômicas sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling no house reef com vida marinha abundante"
      },
      {
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2626",
        alt: "Surf no famoso spot Lohis com ondas perfeitas"
      }
    ]
  }
};
