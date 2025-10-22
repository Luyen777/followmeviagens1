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
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Reef Water Pool Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Reef Water Pool Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago. Cancelamentos com menos de 30 dias não têm direito a reembolso.",
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
  },
  "anantara-dhigu": {
    slug: "anantara-dhigu",
    name: "Anantara Dhigu Maldives Resort",
    rating: 5,
    location: "Atol Sul de Malé",
    transferTime: "30-35 minutos de lancha rápida",
    heroImage: heroImage,
    heroTitle: "Anantara Dhigu Maldives Resort",
    heroSubtitle: "Resort 5 estrelas family-friendly com acesso ao resort irmão adults-only e ilha privativa",
    heroHighlights: ["110 Villas Espaçosas", "Acesso a 7+ Restaurantes", "Ilha Privativa Gulhifushi"],
    seoTitle: "Anantara Dhigu Maldives - Resort 5★ Family-Friendly | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas family-friendly no Atol Sul de Malé com 110 villas, acesso ao Anantara Veli adults-only, 7+ restaurantes, spa sobre a água, ilha privativa e excelente kids club.",
    valueProps: [
      {
        icon: "Users",
        title: "Dois Resorts em Um",
        description: "Acesso privilegiado ao resort irmão Anantara Veli (adults-only) através de ponte conectada, permitindo desfrutar de 7+ restaurantes e facilidades premium."
      },
      {
        icon: "Waves",
        title: "Spa & Atividades Aquáticas",
        description: "Spa sobre a água com 6 salas de tratamento, escola de surf Tropicsurf, centro de mergulho PADI 5 estrelas Aquafanatics e esportes aquáticos completos."
      },
      {
        icon: "UtensilsCrossed",
        title: "Experiências Gastronômicas",
        description: "7+ restaurantes entre os dois resorts: tailandês autêntico, grelhados premium, japonês teppanyaki, buffets internacionais e jantares privativos Designer Dining."
      },
      {
        icon: "Palmtree",
        title: "Ilha Privativa Gulhifushi",
        description: "Ilha exclusiva para piqueniques com food truck (12h-16h) e tiki bar (10h-17h), acessível por pontão ou caiaque para experiências únicas."
      }
    ],
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        subtitle: "Experiência completa com serviços premium e atividades incluídas",
        type: "list",
        items: [
          {
            title: "Refeições & Serviços",
            items: [
              "Café da manhã buffet internacional no Fushi Café (7h-11h)",
              "Recepção em lounge privativo no aeroporto com bebidas de cortesia",
              "Toalhas frias e água gelada durante o traslado de lancha",
              "Wi-Fi gratuito em todo o resort"
            ]
          },
          {
            title: "Atividades & Equipamentos",
            items: [
              "Equipamentos de snorkeling gratuitos",
              "Caiaques e stand-up paddle",
              "Sessões de yoga em grupo diariamente",
              "Cinema sob as estrelas",
              "Entretenimento ao vivo (música, performances culturais)"
            ]
          },
          {
            title: "Facilidades Premium",
            items: [
              "Acesso a academia equipada com Technogym",
              "Piscina infinita",
              "Acesso à ilha privativa Gulhifushi com food truck e tiki bar",
              "Transferências disponíveis 24 horas por dia"
            ]
          },
          {
            title: "Benefícios para Lua de Mel (4+ noites)",
            items: [
              "Garrafa de champagne na chegada",
              "Seleção de chocolates artesanais do chef",
              "Decoração romântica no quarto",
              "50% desconto no traslado para a noiva (ou gratuito conforme período)",
              "Certificado de casamento necessário (máximo 12 meses)"
            ]
          },
          {
            title: "Pacote Honeymoon Romance in Paradise (3+ noites)",
            items: [
              "Acomodação de luxo com café da manhã e jantar diários",
              "Cruzeiro ao pôr do sol para observação de golfinhos (casal)",
              "Tratamento signature para casal no Anantara Spa",
              "Designer Dining privativo",
              "Experiência de coquetel no Yellow Fin Club",
              "Garrafa de champagne e arranjo de pétalas de rosa"
            ]
          }
        ]
      },
      {
        id: "activities",
        title: "Atividades & Experiências",
        subtitle: "Diversidade de atividades para famílias, casais e aventureiros",
        type: "two-column",
        items: [
          {
            title: "Atividades Gratuitas",
            icon: "Heart",
            badge: "Incluído",
            items: [
              "Snorkeling na lagoa com equipamentos inclusos",
              "Caiaques e stand-up paddle",
              "Dhoni Kids Club (9h-17h) com atividades artísticas, corrida de caranguejos, pintura de cocos, aulas de pizza",
              "Spice Spoons Cooking School (aulas de culinária maldívia e tailandesa)",
              "Tênis (quartas-feiras 19h-20h)",
              "Badminton e vôlei de praia",
              "Petanque, futebol de mesa, mesa de bilhar",
              "Sessões de yoga e fitness em grupo (3x por dia)",
              "Acesso à ilha Gulhifushi com food truck (12h-16h) e tiki bar (10h-17h)"
            ]
          },
          {
            title: "Atividades Premium",
            icon: "Sparkles",
            items: [
              "Mergulho com Aquafanatics: Discover Programme para iniciantes (lagoa até 12m), cursos PADI Open Water, safaris de mergulho",
              "Esportes motorizados: Jet ski, flyboarding, parasailing, wakeboard, kneeboard, water ski, fun rides (doughnuts)",
              "Aulas de surf com Tropicsurf",
              "Vela: Catamarã, windsurf, kitesurf",
              "Anantara Spa sobre a água: 6 salas de tratamento sobre o oceano, 2 salas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, salão de beleza (10h-19h)",
              "Designer Dining (jantares privativos na praia ou dhoni tradicional), wine dinner",
              "Cruzeiros ao pôr do sol, pesca, passeios de iate",
              "Tours de snorkeling guiados, coral adoption programme (USD $185 patrocínio / USD $247 patrocínio + plantio)",
              "Teen Activities: tênis amigável, aulas de surf, aventuras de barco com fundo de vidro"
            ]
          }
        ]
      },
      {
        id: "dining",
        title: "Gastronomia entre Dois Resorts",
        subtitle: "7+ restaurantes com culinária internacional entre Anantara Dhigu e Anantara Veli",
        type: "cards",
        items: [
          {
            title: "Fushi Café",
            description: "Buffet internacional no Dhigu. Café da manhã (7h-11h) e jantares temáticos (18h30-22h): noite maldívia com Boduberu (domingo), festa do Oriente Médio (terça, USD $120++), buffet internacional.",
            badge: "Dhigu"
          },
          {
            title: "Sea.Fire.Salt",
            description: "Grelhados premium e frutos do mar frescos à beira-mar. Almoço e jantar (12h30-15h30 / 18h30-22h). Suplemento USD $60 por pessoa em HB/FB.",
            badge: "Dhigu"
          },
          {
            title: "Aqua Bar",
            description: "Bar à beira da piscina no Dhigu. Almoço leve (12h-16h), drinks ao pôr do sol, ambiente descontraído com vista para tubarões de recife circulando.",
            badge: "Dhigu"
          },
          {
            title: "Baan Huraa",
            description: "Tailandês autêntico sobre a lagoa no Veli, casa de teca tradicional, pratos para compartilhar, jantar (18h30-22h). Suplemento USD $60 em HB/FB.",
            badge: "Veli"
          },
          {
            title: "73 Degrees",
            description: "Buffet internacional oceanfront no Veli. Café da manhã e jantares temáticos variados.",
            badge: "Veli"
          },
          {
            title: "Origami",
            description: "Japonês moderno com teppanyaki, sushi e sashimi no Veli. Não incluído em HB/FB, pago separadamente.",
            badge: "Veli"
          },
          {
            title: "Dhoni Bar",
            description: "Bar à beira da piscina no Veli (somente adultos 18+). Tapas e coquetéis (10h-meia-noite), almoço leve (12h-16h), jantar (18h30-22h).",
            badge: "Veli - 18+"
          },
          {
            title: "Cumin",
            description: "Cozinha do Sul da Ásia e Índia no Veli, especiarias do Oceano Índico. Café da manhã (7h-11h) e jantar (18h30-22h).",
            badge: "Veli"
          },
          {
            title: "Designer Dining",
            description: "Experiências gastronômicas privativas na praia, em dhoni tradicional ou localização personalizada. Jantares românticos sob medida.",
            badge: "Especial"
          },
          {
            title: "Gulhifushi Picnic Island",
            description: "Ilha privativa com food truck (12h-16h) e tiki bar (10h-17h), acessível por pontão ou caiaque para piqueniques únicos.",
            badge: "Ilha Privativa"
          }
        ]
      }
    ],
    accommodations: {
      title: "Villas Espaçosas na Praia e Sobre a Água",
      description: "110 villas com vista para o nascer ou pôr do sol, todas com comodidades premium",
      types: [
        {
          name: "Sunrise Beach Pool Villa",
          size: "N/D",
          beds: "1 King",
          maxOccupancy: "N/D",
          features: [
            "Piscina privativa de 9m",
            "Vista para o nascer do sol",
            "Ideal para famílias",
            "TV via satélite, minibar, frigobar",
            "Ventilador de teto e ar-condicionado",
            "Banheira/chuveiro combinado",
            "Varanda/terraço privativo",
            "Roupões e chinelos",
            "Berços e camas extras gratuitas"
          ]
        },
        {
          name: "Sunset Beach Pool Villa",
          size: "N/D",
          beds: "1 King",
          maxOccupancy: "N/D",
          features: [
            "Piscina privativa de 9m",
            "Vista espetacular para o pôr do sol",
            "TV via satélite, minibar, frigobar",
            "Ventilador de teto e ar-condicionado",
            "Banheira/chuveiro combinado",
            "Varanda/terraço privativo",
            "Filmes no quarto",
            "Roupões infantis e chinelos (para famílias)",
            "Serviço de lavanderia 50% off para crianças até 12 anos"
          ]
        },
        {
          name: "Two Bedroom Family Beach Pool Villa",
          size: "220m²",
          beds: "2 quartos: 1 King + configurações flexíveis",
          maxOccupancy: "4 adultos ou 2 adultos + 3 crianças",
          features: [
            "Piscina privativa de 9m",
            "Banheiro infantil em miniatura",
            "Sala de estar espaçosa",
            "Mesa de jantar",
            "Ideal para famílias",
            "TV via satélite, minibar, frigobar",
            "Ar-condicionado e ventilação",
            "Roupões infantis e chinelos",
            "Berços e camas extras gratuitas"
          ]
        },
        {
          name: "Sunrise Over Water Suite",
          size: "85m²",
          beds: "1 King",
          maxOccupancy: "2 adultos + 1 criança",
          features: [
            "Suspensa sobre águas cristalinas",
            "Janelas do chão ao teto",
            "Deck privativo para observar o nascer do sol",
            "Painéis de vidro no piso do banheiro para visualizar vida marinha",
            "TV via satélite, minibar",
            "Ar-condicionado",
            "Banheira/chuveiro combinado",
            "Varanda/terraço sobre a água"
          ]
        }
      ]
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Sunrise Beach Pool Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Sunrise Beach Pool Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago. Cancelamentos com menos de 30 dias não têm direito a reembolso.",
      notes: "Política de Crianças: Menores de 12 anos comem gratuitamente seguindo o meal plan dos pais (menu infantil), máximo 2 crianças por família. Crianças até 12 anos: 50% desconto nos traslados. Menores de 2 anos: traslados e refeições gratuitas. Babysitting disponível a partir de 3 meses (custo adicional)."
    },
    faqs: [
      {
        question: "O que está incluído no pacote?",
        answer: "Café da manhã buffet internacional, recepção em lounge privativo no aeroporto, traslado de lancha com toalhas frias e água, equipamentos de snorkeling, caiaques, SUP, yoga diária, academia, piscina infinita, acesso à ilha Gulhifushi, cinema sob as estrelas, entretenimento ao vivo e Wi-Fi gratuito."
      },
      {
        question: "Posso acessar o resort Anantara Veli?",
        answer: "Sim! O Anantara Dhigu possui acesso privilegiado ao resort irmão Anantara Veli (adults-only) através de uma ponte conectada. Isso permite que os hóspedes desfrutem de 7+ restaurantes e facilidades entre as duas propriedades."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, é um resort family-friendly com excelente Dhoni Kids Club (9h-17h), atividades variadas para crianças, banheiros infantis em miniatura nas family villas, e política generosa: menores de 12 anos comem gratuitamente no meal plan dos pais (máximo 2 crianças). Menores de 2 anos têm traslados e refeições gratuitas."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Para estadias de 4+ noites: champagne na chegada, chocolates artesanais, decoração romântica e 50% desconto no traslado da noiva. O pacote Romance in Paradise (3+ noites) inclui: café e jantar diários, cruzeiro ao pôr do sol, tratamento de spa para casal, Designer Dining privativo e experiência de coquetel."
      },
      {
        question: "O resort possui spa?",
        answer: "Sim, o Anantara Spa está localizado sobre a água e oferece 6 salas de tratamento sobre o oceano, 2 salas abertas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, e salão de beleza. Funciona das 10h às 19h."
      },
      {
        question: "Como funciona a ilha privativa Gulhifushi?",
        answer: "É uma ilha exclusiva para piqueniques acessível por pontão ou caiaque. Possui food truck funcionando das 12h às 16h e tiki bar das 10h às 17h. Ideal para experiências únicas em ambiente paradisíaco."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Gratuitas: snorkeling, caiaque e SUP. Com custo: mergulho PADI (Aquafanatics centro 5 estrelas), aulas de surf (Tropicsurf), esportes motorizados (jet ski, flyboarding, parasailing, wakeboard), vela (catamarã, windsurf, kitesurf), cruzeiros e pesca."
      },
      {
        question: "Quantos restaurantes o resort possui?",
        answer: "Os hóspedes têm acesso a 7+ restaurantes entre Anantara Dhigu (Fushi Café, Sea.Fire.Salt, Aqua Bar) e Anantara Veli (Baan Huraa tailandês, 73 Degrees, Origami japonês, Dhoni Bar, Cumin). Também há Designer Dining para jantares privativos e a ilha Gulhifushi."
      }
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Anantara Dhigu - Vista aérea do resort com villas na praia e sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Piscina infinita com vista para o oceano turquesa"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Interior luxuoso das villas com design elegante"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Anantara Spa sobre a água com salas de tratamento premium"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Restaurante à beira-mar com experiências gastronômicas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling na lagoa cristalina com vida marinha abundante"
      },
      {
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2626",
        alt: "Ilha privativa Gulhifushi para piqueniques exclusivos"
      }
    ]
  }
};
