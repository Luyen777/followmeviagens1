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
  "amilla-maldives": {
    slug: "amilla-maldives",
    name: "Amilla Maldives Resort and Residences",
    rating: 5,
    location: "Baa Atoll - Reserva da Biosfera UNESCO",
    transferTime: "30-35 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Amilla Maldives Resort and Residences",
    heroSubtitle: "Resort 5 estrelas ultra-luxuoso na Reserva da Biosfera UNESCO com serviço de mordomo personalizado",
    heroHighlights: ["Serviço de Mordomo 24/7", "Reserva UNESCO", "67 Villas com Piscina"],
    seoTitle: "Amilla Maldives Resort - Ultra-Luxo 5★ Baa Atoll | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas ultra-luxuoso no Baa Atoll, Reserva da Biosfera UNESCO. 67 villas espaçosas com piscina privativa, serviço de mordomo personalizado, proximidade com Hanifaru Bay e compromisso com sustentabilidade.",
    valueProps: [
      {
        icon: "Crown",
        title: "Serviço Ultra-Luxuoso",
        description: "Mordomo pessoal (Katheeb) 24/7 para cada villa, membro da Small Luxury Hotels, villas de 220m² a 2.400m² com piscinas privativas e máximo conforto."
      },
      {
        icon: "Palmtree",
        title: "Reserva da Biosfera UNESCO",
        description: "Localizado no Atol de Baa, uma das maiores ilhas privadas das Maldivas com 23,5 hectares e mais de 70% de selva tropical preservada."
      },
      {
        icon: "Fish",
        title: "Hanifaru Bay & House Reef",
        description: "Proximidade com Hanifaru Bay para observação de mantas e tubarões-baleia, além de excepcional house reef para snorkeling com biólogo marinho."
      },
      {
        icon: "Leaf",
        title: "Sustentabilidade Certificada",
        description: "EarthCheck Silver Certification, jardins orgânicos próprios que abastecem os restaurantes e compromisso genuíno com o meio ambiente."
      }
    ],
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        subtitle: "Experiência ultra-luxuosa com serviço personalizado e comodidades premium incluídas",
        type: "list",
        items: [
          {
            title: "Refeições & Serviços",
            items: [
              "Café da manhã buffet e à la carte no Fresh Restaurant",
              "Água mineral e chás gourmet na villa",
              "Coquetel de boas-vindas semanal",
              "Arrumação duas vezes ao dia e turndown service noturno"
            ]
          },
          {
            title: "Atividades & Equipamentos",
            items: [
              "Equipamentos de snorkeling, stand-up paddle e caiaques gratuitos",
              "Bicicletas personalizadas para cada hóspede",
              "Snorkeling guiado no house reef com biólogo marinho",
              "Sessões de yoga e meditação no Javvu Spa",
              "Acesso a 3 academias equipadas (incluindo Jungle Gymnasium)"
            ]
          },
          {
            title: "Serviços Exclusivos",
            items: [
              "Serviço de mordomo pessoal (Katheeb) 24/7 para cada villa",
              "Wi-Fi gratuito em toda a ilha",
              "Entretenimento: música ao vivo, dança tradicional Bodu Beru, cinema ao ar livre"
            ]
          },
          {
            title: "Benefícios para Lua de Mel (4+ noites)",
            items: [
              "Champagne de cortesia",
              "Romantic turndown service",
              "30 minutos extras em tratamento de spa",
              "7+ noites: Excursão surpresa + jantar romântico na praia + floating breakfast"
            ]
          }
        ]
      },
      {
        id: "activities",
        title: "Atividades & Experiências",
        subtitle: "Diversidade de atividades em uma das maiores ilhas privadas das Maldivas",
        type: "two-column",
        items: [
          {
            title: "Atividades Gratuitas",
            icon: "Heart",
            badge: "Incluído",
            items: [
              "Esportes aquáticos não motorizados (caiaque, SUP, snorkeling)",
              "Programa Mini Marine Biologists para crianças (4-13 anos)",
              "Sultan's Village Kids Club (4-12 anos, 9h-17h diariamente)",
              "Quadras de tênis, badminton, vôlei de praia e futebol",
              "Treinamento de futebol em grupo (6x/semana)",
              "Sala de jogos (bilhar, ping-pong, xadrez)",
              "Workshops criativos (Alchemy Bar, culinária, mixologia, fotografia)",
              "Teen programme (DJ, aerial hoop, PlayStation 4)"
            ]
          },
          {
            title: "Atividades Premium",
            icon: "Sparkles",
            items: [
              "Esportes motorizados: Jet ski (USD $150++ - 20min), wakeboard/water ski (USD $65-80++)",
              "Mergulho: A partir de USD $25++ por mergulho, equipamento completo USD $34++",
              "Excursões: Dolphin cruise (USD $1.200++), snorkeling safari (USD $700-1.200++)",
              "Pesca tradicional (USD $700-850++), big game fishing (USD $1.200-2.200++)",
              "Visita a Hanifaru Bay para observação de mantas e tubarões-baleia (sazonal)",
              "Javvu Spa: Tratamentos a partir de USD $175 (60min), massagem para casal (USD $550 - 90min)",
              "Amilla Glamping em bolha transparente (USD $750-1.000++ por noite)",
              "Jantar privativo na praia (Dine by Design), piquenique em banco de areia"
            ]
          }
        ]
      },
      {
        id: "dining",
        title: "Gastronomia de Classe Mundial",
        subtitle: "8 restaurantes e bares com culinária internacional e jardins orgânicos próprios",
        type: "cards",
        items: [
          {
            title: "Feeling Koi",
            description: "Japonês contemporâneo sobre a água com sunset bar no rooftop, oferecendo sushi premium e experiências gastronômicas asiáticas.",
            badge: "Japonês"
          },
          {
            title: "Barolo",
            description: "Autêntica culinária italiana do Piemonte com massas artesanais, risottos e vinhos selecionados da região.",
            badge: "Italiano"
          },
          {
            title: "East",
            description: "Especialidades do Sul da Índia com tandoor autêntico, curries aromáticos e pratos tradicionais indianos.",
            badge: "Indiano"
          },
          {
            title: "Tessera",
            description: "Culinária grega mediterrânea com ingredientes frescos, frutos do mar e sabores do Mediterrâneo.",
            badge: "Grego"
          },
          {
            title: "Fresh Restaurant",
            description: "Buffet internacional com café da manhã incluso e jantares temáticos variados, usando produtos dos jardins orgânicos.",
            badge: "Incluído"
          },
          {
            title: "Emperor Beach Club",
            description: "Ambiente casual na areia com noites temáticas 3x/semana, ideal para almoços descontraídos e sunset drinks.",
            badge: "Beach Club"
          },
          {
            title: "Joe's Pizza & Chill'd Café",
            description: "Pizzas artesanais em forno a lenha e opções leves no café, perfeito para refeições informais.",
            badge: "Casual"
          },
          {
            title: "Bares Premium",
            description: "Sunset Bar (rooftop), Baa Bar, The Cellar Door (adega premium com vinhos raros), Baazaar Bar (piscina)."
          }
        ]
      }
    ],
    accommodations: {
      title: "Villas Ultra-Luxuosas sobre a Água",
      description: "Acomodações espaçosas de 220m² a 2.400m² com piscinas privativas e acesso direto ao mar",
      types: [
        {
          name: "Reef Water Pool Villa",
          size: "220m²",
          beds: "1 King",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Piscina privativa de 9,5m suspensa sobre recife de coral",
            "Acesso direto para snorkeling no house reef",
            "Banheira para dois e chuveiro ao ar livre",
            "Deck espaçoso com espreguiçadeiras e rede na praia",
            "TV 42\" com Blu-Ray, sistema de som Bose, iPad de controle",
            "Máquina Nespresso, mini-bar e adega climatizada",
            "Amenities orgânicos premium e serviço de mordomo 24/7",
            "Ar-condicionado individual e ventilação natural"
          ]
        },
        {
          name: "Lagoon Water Pool Villa",
          size: "280m²",
          beds: "1 ou 2 quartos King",
          maxOccupancy: "4 adultos ou 2 adultos + 2 crianças",
          features: [
            "Piscina expansiva privativa sobre lagoa turquesa",
            "Configuração de 1 ou 2 quartos para famílias",
            "Deck espaçoso com área de estar e jantar ao ar livre",
            "Banheira para dois e chuveiro ao ar livre",
            "TV 42\" com Blu-Ray, sistema de som Bose, iPad de controle",
            "Máquina Nespresso, mini-bar e adega climatizada",
            "Amenities orgânicos premium e serviço de mordomo 24/7",
            "Berços, monitores de bebê e cadeiras altas disponíveis"
          ]
        }
      ]
    },
    pricing: {
      seasons: [
        {
          name: "Consulte Valores",
          period: "Ano todo",
          priceText: "Sob consulta",
          priceSubtext: "Preço por pessoa em acomodação dupla"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível - consulte condições especiais"
      ],
      cancellationPolicy: "Política de cancelamento varia conforme a temporada e tipo de villa. Consulte condições detalhadas.",
      notes: "Menores de 2 anos: traslado gratuito e refeições gratuitas. Acima de 12 anos: tarifa adulto. Kids Club gratuito (4-12 anos)."
    },
    faqs: [
      {
        question: "O transfer de hidroavião está incluído?",
        answer: "O transfer de hidroavião (30-35 minutos) não está incluído no pacote base, mas pode ser adicionado. Consulte valores e disponibilidade."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, muito adequado! Temos Sultan's Village Kids Club gratuito (4-12 anos, 9h-17h), programa Mini Marine Biologists, teen programme, e villas espaçosas. Menores de 2 anos têm traslado e refeições gratuitas."
      },
      {
        question: "Como funciona o serviço de mordomo (Katheeb)?",
        answer: "Cada villa tem um mordomo pessoal (Katheeb) disponível 24/7 para atender todas as suas necessidades: organizar refeições, atividades, excursões, spa, e garantir que sua experiência seja perfeita."
      },
      {
        question: "Quando é possível visitar Hanifaru Bay?",
        answer: "A visita a Hanifaru Bay para observação de mantas e tubarões-baleia é sazonal, sendo melhor entre maio e novembro durante o período de alimentação do plâncton. Seu mordomo pode organizar a excursão."
      },
      {
        question: "O que é o Amilla Glamping?",
        answer: "É uma experiência única de dormir em uma bolha transparente sob as estrelas (USD $750-1.000++ por noite), com pacotes wellness ou romance incluindo tratamentos de spa, refeições e atividades especiais."
      },
      {
        question: "É necessário visto para as Maldivas?",
        answer: "Brasileiros não precisam de visto prévio. O visto de turista (30 dias) é concedido gratuitamente na chegada ao aeroporto de Malé."
      }
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=2670",
        alt: "Amilla Maldives - Vista aérea das luxuosas water villas sobre a lagoa turquesa"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "Interior ultra-luxuoso da villa com piscina privativa e deck sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Quarto principal com cama king-size e vista panorâmica para o oceano"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Deck privativo da villa com piscina infinita sobre o recife de coral"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Feeling Koi - Restaurante japonês contemporâneo sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling no excepcional house reef com biólogo marinho"
      },
      {
        src: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?q=80&w=2626",
        alt: "Javvu Spa - Tratamentos de wellness com medicina herbal maldívia"
      }
    ]
  },
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
