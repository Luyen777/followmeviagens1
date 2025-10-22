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
  about: string;
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
  "ayada-maldives": {
    slug: "ayada-maldives",
    name: "Ayada Maldives",
    rating: 5,
    location: "Ilha Maguhdhuvaa, Atol Gaafu Dhaalu",
    transferTime: "Voo doméstico 55min + lancha 50min",
    heroImage: heroImage,
    heroTitle: "Ayada Maldives",
    heroSubtitle: "Resort 5 estrelas com hospitalidade turca e serviço de mordomo exclusivo",
    heroHighlights: ["Butler 24h", "122 Villas com Piscina", "Spa Premiado"],
    seoTitle: "Ayada Maldives - Resort 5★ com Butler | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas no Atol Gaafu Dhaalu com hospitalidade turca, serviço de mordomo exclusivo e 122 villas com piscina privativa. Gastronomia variada e spa premiado.",
    about: "Ayada Maldives é um resort 5 estrelas localizado na ilha privada de Maguhdhuvaa, Atol Gaafu Dhaalu, ao sul do arquipélago das Maldivas. Reconhecido internacionalmente por sua hospitalidade turca, serviço de mordomo exclusivo, design com influências locais e jardins exuberantes. Dispõe de 122 villas e suítes (praia e sobre a água), cada uma com piscina privativa, terraço e acesso direto à praia ou lagoa. O resort destaca-se pela gastronomia variada, excelentes condições de mergulho e spa premiado. Chegada via voo doméstico de Malé até Kaadedhdhoo (55 minutos) + lancha rápida (50 minutos).",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet internacional no Magu
- Serviço de mordomo exclusivo (butler) 24h para todas as villas
- Toalhas frias, água e amenidades durante o transfer
- Equipamentos de snorkeling, caiaque e stand-up paddle gratuitos
- Bicicletas disponíveis para cada hóspede
- Acesso à academia e quadras de esportes
- Wi-Fi gratuito em toda a ilha
- Arrumação duas vezes ao dia
- Welcome drink e amenidade de fruta fresca
- Chá da tarde diariamente (16h-18h)
- Entretenimento noturno (shows culturais, música ao vivo)
- Kids Club ZUZU gratuito (9h-18h)
- Sauna, banho turco e jacuzzi no AySpa
- Cinema sob as estrelas regularmente
- Acesso à infinity pool principal

Lua de Mel/Aniversário (mínimo 4 noites):

- Decoração especial, bolo, frutas e vinho na villa
- 60 minutos de massagem para casal no AySpa
- Amenidade de chá da tarde exclusiva
- Upgrade sujeito à disponibilidade

Estadias longas (7+ noites nas Suítes ou Residences):

- Jantar privativo na praia
- Experiência gastronômica turca
- Passeio guiado de snorkeling
- Transfer gratuito de bagagem extra`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling guiado no recife da ilha
- Caiaque, SUP, pedalinho, windsurf
- Quadras de tênis, vôlei de praia, badminton, futebol de areia
- Aulas de yoga em grupo (manhã/tarde)
- Academia com instrutor disponível
- Workshops culinários e mixologia
- Cinema sob as estrelas
- Kids Club ZUZU: atividades criativas, artes e jogos, área de playground externa
- Bicicletas para passeios pela ilha
- Oficinas de artesanato e culinária maldívia

Atividades com custo extra:

- Mergulho (PADI 5 estrelas): batismo, cursos completos, safaris de mergulho
- Esportes motorizados: jet ski, parasail, seabob, esqui aquático, fun tube
- Pesca ao pôr do sol, pesca tradicional maldívia
- Cruzeiros privativos de catamarã ou lancha (pôr do sol, observação de golfinhos, visita a bancos de areia)
- Passeio às ilhas locais
- Aula de culinária privada
- Experiência de jantar privado "White Room"
- Spa: tratamentos AySpa signature, hammam turco, terapias ayurvédicas e massagens premium
- Aulas de surf, kitesurf
- Aluguel de yacht privativo (preços sob consulta)

Esporte aquático motorizado (preços médios):

- Jet ski: USD $65 (15min)
- Parasail: USD $100 (20min)
- Wakeboard/Water ski: USD $60 (15min)
- Seabob: USD $70 (15min)
- Fun tube: USD $45 (15min)

Principais experiências aquáticas:

- Mergulho com mantas, tubarões e tartarugas
- Snorkeling noturno guiado
- Passeios de SUP ao pôr do sol
- Yoga sobre stand-up paddle

Restaurantes & Bares:

Restaurantes principais:

- Magu: Buffet internacional para café da manhã/jantar temático
- Ocean Breeze: Mediterrâneo à la carte com deck sobre a água
- Zero Degree: Restaurante casual e bar da piscina
- Kai: Asiático fusion (japonês, chinês e tailandês)
- Sea Salt: Grill de frutos do mar na praia (jantares especiais)
- Ottoman Lounge: Chás premium, doces turcos, ambiente tradicional
- Mizu Teppanyaki: Japonês teppanyaki (show cooking)

Bares:

- Ile de Joie: Wine & cheese bar premium sobre a água
- Zero Degree Bar: Drinks tropicais e petiscos à beira da piscina
- Ottoman Lounge Bar

Experiências Gastronômicas Especiais:

- Jantar privativo na praia ou villa
- Degustação de vinhos no Ile de Joie
- Menu de frutos do mar frescos no Sea Salt Grill
- White Room Private Dining (jantar personalizado em ambiente branco)
- Themed nights e jantares românticos
- Room Service 24h`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Ocean Villa (108m²): sobre a lagoa, piscina privativa, terraço coberto, acesso ao mar
- Sunset Ocean Suite (172m²): vista premiada para o pôr do sol, piscina privativa 16m, lounge externo, sala de estar separada
- Sunset Lagoon Suite: opções familiares disponíveis, piscina privativa
- Ayada Royal Ocean Suite (318m²): categoria máxima de luxo, sala de jantar, 2 quartos, piscina infinita, deck panorâmico

Comodidades:

- Piscina privativa (5-16m)
- King-size bed
- Banheiro aberto com amenities premium
- Espaço para refeições ao ar livre
- Menu de travesseiros
- Nespresso, minibar
- Smart TV, Bose sound system, Wi-Fi premium
- Berço ou cama extra sob solicitação
- Serviço de mordomo (butler) 24h`
      }
    ],
    accommodations: {
      title: "Acomodação",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio - Outubro",
          priceText: "Sob consulta",
          priceSubtext: "Melhores tarifas do ano"
        },
        {
          name: "Alta Temporada",
          period: "Novembro - Abril",
          priceText: "Sob consulta",
          priceSubtext: "Clima ideal e melhor visibilidade"
        }
      ],
      paymentTerms: [
        "20% de entrada no ato da reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento em até 10x sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Reembolso de 80% do valor pago para cancelamentos realizados com até 30 dias de antecedência da data de início da viagem"
    },
    faqs: [
      {
        question: "Como é o transfer para o Ayada Maldives?",
        answer: "O transfer é feito via voo doméstico de Malé até Kaadedhdhoo (55 minutos) seguido de lancha rápida (50 minutos). Todo o trajeto é coordenado pelo resort e inclui assistência completa."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet internacional, serviço de mordomo 24h, equipamentos de snorkeling e esportes aquáticos não motorizados, Wi-Fi, academia, Kids Club ZUZU, chá da tarde diário, entretenimento noturno e muito mais."
      },
      {
        question: "Todas as villas têm piscina privativa?",
        answer: "Sim, todas as 122 villas e suítes do Ayada Maldives possuem piscina privativa, além de terraço e acesso direto à praia ou lagoa."
      },
      {
        question: "O resort é adequado para crianças?",
        answer: "Sim, o Ayada Maldives oferece o Kids Club ZUZU gratuito (9h-18h) com atividades criativas, artes, jogos e playground externo. As villas também podem incluir berço ou cama extra sob solicitação."
      },
      {
        question: "Quais são os restaurantes disponíveis?",
        answer: "O resort possui 7 restaurantes principais: Magu (buffet internacional), Ocean Breeze (mediterrâneo), Zero Degree (casual), Kai (asiático fusion), Sea Salt (grill de frutos do mar), Ottoman Lounge (turco) e Mizu Teppanyaki (japonês)."
      },
      {
        question: "É possível fazer mergulho no resort?",
        answer: "Sim, o Ayada Maldives possui um centro de mergulho PADI 5 estrelas com batismos, cursos completos e safaris de mergulho. A região é excelente para ver mantas, tubarões e tartarugas."
      },
      {
        question: "O que é o serviço de mordomo (butler)?",
        answer: "Todas as villas incluem serviço de mordomo exclusivo 24h, uma marca registrada da hospitalidade turca do Ayada. O butler auxilia com reservas, experiências personalizadas e todas as necessidades durante a estadia."
      },
      {
        question: "Há benefícios para lua de mel?",
        answer: "Sim, casais em lua de mel ou aniversário (mínimo 4 noites) recebem decoração especial, bolo, frutas, vinho, 60 minutos de massagem para casal no AySpa e upgrade sujeito à disponibilidade."
      }
    ],
    images: [
      { src: heroImage, alt: "Ayada Maldives - Vista aérea do resort" },
      { src: "/src/assets/maldives-experiences/overwater-villas.jpg", alt: "Villas sobre a água com piscina privativa" },
      { src: "/src/assets/maldives-experiences/infinity-pool.jpg", alt: "Piscina infinita com vista para o oceano" },
      { src: "/src/assets/maldives-experiences/villa-sunset.jpg", alt: "Villa ao pôr do sol" },
      { src: "/src/assets/maldives-experiences/luxury-bathroom.jpg", alt: "Banheiro luxuoso" },
      { src: "/src/assets/maldives-experiences/romantic-dinner.jpg", alt: "Jantar romântico na praia" },
      { src: "/src/assets/maldives-experiences/snorkeling.jpg", alt: "Snorkeling no recife" },
      { src: "/src/assets/maldives-experiences/spa-treatment.jpg", alt: "Tratamento no spa" }
    ]
  },
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
    about: "O Amilla Maldives Resort and Residences é um resort 5 estrelas ultra-luxuoso localizado no Atol de Baa, Reserva da Biosfera UNESCO, a 30-35 minutos de hidroavião do Aeroporto Internacional de Malé. Membro da prestigiada Small Luxury Hotels of the World, o resort ocupa uma das maiores ilhas privadas das Maldivas com 23,5 hectares e mais de 70% de selva tropical preservada.\n\nCom apenas 67 villas espaçosas (220m² a 2.400m²), todas equipadas com piscina privativa e serviço de mordomo pessoal (Katheeb) disponível 24/7, o Amilla oferece uma experiência verdadeiramente exclusiva. O resort destaca-se pela proximidade com Hanifaru Bay para observação de mantas e tubarões-baleia, excepcional house reef para snorkeling com biólogo marinho, e compromisso genuíno com sustentabilidade certificado pela EarthCheck Silver Certification.\n\nCom 8 restaurantes e bares de classe mundial, incluindo culinária japonesa, italiana, indiana e grega, jardins orgânicos próprios que abastecem os restaurantes, e experiências únicas como o Amilla Glamping em bolha transparente, o resort combina luxo sofisticado com respeito ao meio ambiente, criando o cenário perfeito para viajantes exigentes que buscam exclusividade e autenticidade.",
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
    about: "O Adaaran Select Hudhuranfushi é um resort 4 estrelas all inclusive localizado no North Malé Atoll, a apenas 30 minutos de lancha rápida do Aeroporto Internacional de Malé. Reconhecido como um dos melhores resorts de custo-benefício das Maldivas, oferece uma experiência completa com todas as refeições, bebidas (alcoólicas e não alcoólicas), esportes aquáticos e terrestres incluídos.\n\nO resort destaca-se pelo acesso exclusivo ao lendário surf spot Lohis, considerado uma das melhores ondas das Maldivas, com packages especiais e Ocean Villas dedicadas para surfistas. Para famílias, conta com Kids Club gratuito, playground, piscinas infantis e ampla variedade de atividades supervisionadas em beach villas espaçosas.\n\nCom instalações recém-renovadas, o Adaaran Select oferece a maior diversidade esportiva entre resorts 4 estrelas das Maldivas, incluindo snorkeling no house reef, centro de mergulho PADI 5★, Spa Mandara com tratamentos balineses, e diversas atividades de entretenimento diário. Ideal para casais, famílias e surfistas que buscam experiência autêntica nas Maldivas sem comprometer o orçamento.",
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
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/6322740.jpg?k=0620ef260bc353798fd53368b292da9ab9301934666fa4fe653e87032b88d0b9&o=",
        alt: "Adaaran Select Hudhuranfushi - Vista aérea do resort e ocean villas"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/637868082.jpg?k=0a09b1589fb20280bc6fd59df9db2f0b33937ffc5bc45b4733d44089f0dd6d85&o=",
        alt: "Praia paradisíaca com águas cristalinas turquesa"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/637869866.jpg?k=e98cd852e4559ab92716e9fe807bed20560e188f83089efcef24898a35ba4639&o=",
        alt: "Ocean villas sobre a água com deck privativo"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/455034356.jpg?k=7f00321d1399493f6b612672549604731cd74cc6e76559946966552d72eebc7d&o=",
        alt: "Interior luxuoso da villa com cama king size"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/167942497.jpg?k=2ae26e7d9f0260758f3401f2825d43f6f932fd6c36a40848e6a5365b0e73fca5&o=",
        alt: "Restaurante principal com buffet all inclusive"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110228883.jpg?k=5e30f016d1b228b6893668710e8751260cbee8fa93ca4da8ab4f637a302915f7&o=",
        alt: "Piscina infinity com vista para o oceano"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/101361066.jpg?k=948495513a67f161d073e88a9f5a58f2746df50c7cd52b80de23d40b54567a09&o=",
        alt: "Bar na praia com espreguiçadeiras e guarda-sóis"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/70267725.jpg?k=96b6eb7e5bb17d34b6f423ed2b8e189010da9f9c1c6ce5e954f292aa517fe1be&o=",
        alt: "Banheiro moderno com ducha e amenities"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/167945244.jpg?k=09ea33c14fdd7ae2844c5b971b1ee25969f456acd7dfb8195324294745a2f402&o=",
        alt: "Sunset Restaurant sobre a água ao pôr do sol"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110228896.jpg?k=a91cfd62c280347679a5576e540faa819c0d629cf7f3807e18cc8903d7db1e96&o=",
        alt: "Beach villa com jardim tropical privativo"
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110228927.jpg?k=662218acaffd0e49c153249c094e3cec2eef4e61d5d4888e49eec64984606ff2&o=",
        alt: "Área de lazer com esportes aquáticos e atividades"
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
    about: "O Anantara Dhigu Maldives Resort é um resort 5 estrelas family-friendly localizado na ilha de Dhigufinolhu no Atol Sul de Malé, a apenas 30-35 minutos de lancha rápida do Aeroporto Internacional de Malé. O resort oferece 110 villas espaçosas, entre villas na praia e suítes sobre a água, todas com vista para o nascer ou pôr do sol. Possui acesso privilegiado ao resort irmão Anantara Veli (adults-only) através de uma ponte conectada, permitindo que os hóspedes desfrutem de mais de 7 restaurantes entre as duas propriedades. Destaca-se pelo spa sobre a água, escola de surf Tropicsurf, centro de esportes aquáticos Aquafanatics (PADI 5 estrelas), ilha privativa de piquenique Gulhifushi, e excelente kids club. Transferências disponíveis 24 horas por dia.",
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
  },
  "anantara-kihavah": {
    slug: "anantara-kihavah",
    name: "Anantara Kihavah Maldives Villas",
    rating: 5.5,
    location: "Kihavah Huravalhi, Atol de Baa, Reserva da Biosfera UNESCO",
    transferTime: "35 minutos de hidroavião ou 20 minutos de voo doméstico + 30 minutos de lancha",
    heroImage: "/src/assets/maldives-hero.jpg",
    heroTitle: "Anantara Kihavah Maldives Villas",
    heroSubtitle: "Resort 5,5 Estrelas Ultra-Luxuoso no Atol de Baa",
    heroHighlights: [
      "80 villas com piscina privativa (a partir de 258m²)",
      "Restaurante subaquático SEA com adega de 450 rótulos",
      "Único observatório sobre a água das Maldivas (SKY)",
      "House reef 'Golden Wall' premiado",
      "Serviço de mordomo 24h para cada villa"
    ],
    seoTitle: "Anantara Kihavah Maldives Villas - Resort 5,5 Estrelas Ultra-Luxuoso | Pacotes 2025",
    seoDescription: "Anantara Kihavah: resort ultra-luxuoso 5,5 estrelas no Atol de Baa com restaurante subaquático, observatório SKY, house reef premiado e serviço de mordomo 24h.",
    about: "O Anantara Kihavah Maldives Villas é um resort 5,5 estrelas ultra-luxuoso localizado na ilha privativa de Kihavah Huravalhi, no Atol de Baa, Reserva da Biosfera UNESCO. Situado a 35 minutos de hidroavião ou 20 minutos de voo doméstico + 30 minutos de lancha de Malé, o resort oferece 80 villas e residences com piscina privativa (a partir de 258m²), sendo 42 sobre a água. Destaque mundial pelo restaurante subaquático SEA com adega submersa de 450 rótulos, o único observatório sobre a água das Maldivas (SKY), e o excepcional house reef 'Golden Wall' considerado um dos melhores pontos de mergulho do país. O resort possui uma das piscinas infinitas mais longas das Maldivas (49m), spa overwater premiado, trampoline park, rock climbing wall, e cinema sob as estrelas. Serviço de mordomo 24h (Villa Host) para cada acomodação.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "list",
        items: [
          {
            title: "Serviços e Comodidades Incluídas",
            items: [
              "Acesso ao lounge VIP de hidroavião em Malé (com bebidas e Wi-Fi gratuito)",
              "Serviço de Villa Host (mordomo) 24 horas",
              "Equipamentos de snorkeling gratuitos",
              "Bicicletas personalizadas para adultos e crianças",
              "Acesso a 3 academias equipadas com Technogym",
              "Piscina infinita de 49m (uma das mais longas das Maldivas)",
              "Sessões de yoga, meditação, stretch and tone em grupo",
              "Wi-Fi gratuito em todas as áreas",
              "Cinema sob as estrelas",
              "Sunshine Butlers na piscina (suco fresco, toalhas frias, limpeza de óculos de sol, massagem nas costas de 5min)",
              "Spice Spoons Cooking Classes (aulas de culinária tailandesa e maldívia gratuitas)",
              "Entretenimento ao vivo e performances culturais"
            ]
          },
          {
            title: "Benefícios para Lua de Mel",
            items: [
              "Dentro de 12 meses do casamento, certidão necessária",
              "Welcome amenity especial",
              "Garrafa de champagne na chegada",
              "Ritual de banho com velas e pétalas de rosas uma noite durante a estadia",
              "Decoração de cama com pétalas",
              "Pacote Honeymoon & Romance (4+ noites): Inclui café da manhã e jantar diários + Dining by Design privativo na praia + champagne breakfast na villa + sessão de stargazing compartilhada + Slumber Guru Ritual romântico"
            ]
          }
        ]
      },
      {
        id: "activities",
        title: "Atividades & Experiências",
        subtitle: "Diversidade de experiências no Atol de Baa, Reserva da Biosfera UNESCO",
        type: "two-column",
        items: [
          {
            title: "Atividades Gratuitas",
            icon: "Heart",
            badge: "Incluído",
            items: [
              "Snorkeling no house reef 'Golden Wall' (2km de extensão, tartarugas hawksbill, arraias, tubarões de recife, moreia)",
              "Caiaques, stand-up paddle, catamarã",
              "Thiththi Boli Kids' Club (4-12 anos, 10h-18h): treasure hunts, Marine Biologist Programme, cooking classes, artes maldívias, cinema, pamper experience com spa",
              "Trampoline park",
              "Cinema sob as estrelas com filmes clássicos e blockbusters",
              "Spice Spoons Cooking Classes (culinária tailandesa e maldívia)",
              "Sessões de yoga, meditação e fitness em grupo",
              "Quadras de tênis, badminton, vôlei de praia",
              "Recreation area (bilhar, tênis de mesa, xadrez gigante, Jenga)",
              "Stargazing no SKY Observatory (observatório sobre a água com telescópio potente)"
            ]
          },
          {
            title: "Atividades Premium",
            icon: "Sparkles",
            items: [
              "Mergulho: PADI 5 estrelas certificado, Discover Scuba Diving, cursos completos, safaris de mergulho",
              "Esportes Motorizados: Jetpack, Seabob, jet ski, parasailing (Chute Me), wakeboard",
              "Pesca: Big game fishing, pesca tradicional dhoni, pesca noturna",
              "Excursões: Dolphin Discovery cruise, visita a Hanifaru Bay (maio-novembro, mantas e tubarões-baleia), island hopping, local island tours, Hawksbill Turtle Quest snorkel (2h)",
              "Muay Thai Boxing: Primeiro e único resort nas Maldivas a oferecer (com ring profissional e instrutor), sessões familiares disponíveis",
              "Anantara Spa overwater: 6 suítes sobre o oceano, 2 salas abertas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, Cocoon Medi Spa, salão de beleza e cabeleireiro, deck de relaxamento com cold plunge pool",
              "Coral Adoption Programme (HARP): Patrocínio USD $185 | Patrocínio + plantio pessoal de coral: preço sob consulta",
              "Experiências especiais: Dining by Design (jantares privativos), private island picnics, cruzeiros de iate de luxo, degustação de vinhos envelhecidos subaquaticamente (USD $2.455++ para 2 pessoas)"
            ]
          }
        ]
      },
      {
        id: "dining",
        title: "Experiências Gastronômicas",
        subtitle: "Restaurantes premiados e o único observatório sobre a água das Maldivas",
        type: "list",
        items: [
          {
            title: "Restaurantes e Bares",
            items: [
              "SEA - Underwater Restaurant: Restaurante subaquático 6m abaixo da superfície com paredes curvas de vidro com vista 360° para o recife. Adega subaquática com mais de 450 rótulos de 24 países (votada melhor adega subaquática do mundo). Crédito de USD $50 por pessoa em HB/FB para jantar.",
              "FIRE - Japanese Teppanyaki: Cozinha japonesa com teppanyaki ao vivo e grelhados premium. Crédito de USD $50 por pessoa em HB/FB.",
              "SALT - Fine Asiatic Restaurant: 19 variedades de sais raros do planeta com Salt Sommelier para auxiliar na escolha dos temperos. Cozinha asiática sofisticada.",
              "SKY - Rooftop Bar & Observatory: Bar no rooftop com vista panorâmica do Atol de Baa. Observatório astronômico (único nas Maldivas sobre a água) com telescópio potente para stargazing sessions com Sky Guru.",
              "Plates - International Buffet: Café da manhã buffet (incluído em todos os meal plans). Jantares temáticos noturnos selecionados: árabe, europeu, frutos do mar, BBQ, internacional.",
              "SPICE - Asian Fusion: Menu à la carte com seleção de 3 pratos. Incluído em HB e FB.",
              "Manzaru - Beachfront Casual Dining: Almoço casual à beira-mar (12h-17h). Menu à la carte de 2 pratos para FB.",
              "Experiências Especiais: Dining by Design (jantares privativos na praia, underwater ou localizações exclusivas), Wine Pairing Dinners, Michelin Star Dinners, Cinema Under the Stars."
            ]
          }
        ]
      }
    ],
    accommodations: {
      title: "Villas sobre a Água",
      description: "Todas as villas possuem piscina privativa, Villa Host 24h e acesso direto ao recife.",
      types: [
        {
          name: "Over Water Pool Villa",
          size: "258m²",
          beds: "1 cama king-size",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Suspensa sobre lagoa cristalina turquesa",
            "Piscina privativa e sundeck sobre a água",
            "Banheiro ao ar livre com banheira whirlpool com fundo de vidro (vista para vida marinha)",
            "Acesso direto ao recife 'Golden Wall'",
            "Villa Host 24h",
            "Bicicletas privativas",
            "Ar-condicionado e TV flat-screen via satélite",
            "Docking station iPod, máquina de café, minibar",
            "Adega climatizada e cofre para laptop",
            "Roupa de cama e toalhas premium",
            "Amenities Elemis e sistema de som Bose",
            "Serviço de streaming (Netflix) e Blu-ray player",
            "Pillow e scent menus",
            "Produtos hipoalergênicos disponíveis"
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
          priceSubtext: "7 noites em Over Water Pool Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Over Water Pool Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago. Cancelamentos com menos de 30 dias não têm direito a reembolso.",
      notes: "Transfer de hidroavião (35 min) ou voo doméstico + lancha não inclusos no pacote base. Crianças menores de 12 anos: consulte condições especiais. Villa Host 24h incluído em todas as acomodações."
    },
    faqs: [
      {
        question: "Como chegar ao Anantara Kihavah?",
        answer: "O resort está localizado a 35 minutos de hidroavião de Malé ou 20 minutos de voo doméstico + 30 minutos de lancha. O transfer é incluído em alguns pacotes ou pode ser contratado separadamente."
      },
      {
        question: "O que torna o restaurante SEA especial?",
        answer: "O SEA é um restaurante subaquático localizado 6 metros abaixo da superfície, com paredes curvas de vidro oferecendo vista 360° para o recife. Possui também uma adega subaquática com mais de 450 rótulos de 24 países, votada a melhor do mundo."
      },
      {
        question: "O que é o SKY Observatory?",
        answer: "É o único observatório sobre a água das Maldivas, localizado no rooftop. Conta com telescópio potente e sessões de stargazing com Sky Guru, além de servir coquetéis ao pôr do sol."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Casais em lua de mel (dentro de 12 meses do casamento) recebem welcome amenity, champagne, ritual de banho romântico e decoração especial. Pacotes de 4+ noites incluem café da manhã e jantar diários, Dining by Design na praia, champagne breakfast e experiências exclusivas."
      },
      {
        question: "O que é o house reef 'Golden Wall'?",
        answer: "É um recife de 2km de extensão considerado um dos melhores pontos de mergulho das Maldivas. Abriga tartarugas hawksbill, arraias, tubarões de recife, moreias e diversas espécies marinhas. Todas as villas sobre a água têm acesso direto."
      },
      {
        question: "O resort oferece atividades para crianças?",
        answer: "Sim, o Thiththi Boli Kids' Club atende crianças de 4-12 anos das 10h às 18h com treasure hunts, Marine Biologist Programme, cooking classes, artes maldívias, cinema e experiências de spa."
      },
      {
        question: "O que é o serviço de Villa Host?",
        answer: "Cada villa possui um mordomo dedicado disponível 24 horas para atender todas as necessidades dos hóspedes, desde arranjos de refeições até experiências personalizadas."
      },
      {
        question: "Quais experiências únicas o resort oferece?",
        answer: "Além do restaurante subaquático e observatório, o resort oferece degustação de vinhos envelhecidos no oceano, Muay Thai Boxing (único nas Maldivas), Coral Adoption Programme, e diversos jantares privativos em localizações exclusivas."
      }
    ],
    images: [
      {
        src: "/src/assets/maldives-hero.jpg",
        alt: "Anantara Kihavah Maldives Villas vista aérea"
      }
    ]
  },
  "cheval-blanc-randheli": {
    slug: "cheval-blanc-randheli",
    name: "Cheval Blanc Randheli",
    rating: 5,
    location: "Ilha Randheli, Atol de Noonu",
    transferTime: "40 minutos de hidroavião ou voo doméstico + lancha (25min)",
    heroImage: heroImage,
    heroTitle: "Cheval Blanc Randheli",
    heroSubtitle: "Resort ultra-luxuoso do grupo LVMH com arquitetura Jean-Michel Gathy e spa Guerlain exclusivo",
    heroHighlights: ["Mordomo 24h", "46 Villas LVMH", "Spa Guerlain"],
    seoTitle: "Cheval Blanc Randheli - Resort Ultra-Luxuoso LVMH | Follow Me Viagens",
    seoDescription: "Resort ultra-luxuoso do grupo LVMH com 46 villas exclusivas, spa Guerlain único nas Maldivas, gastronomia francesa premiada e serviço de mordomo 24h. Arquitetura Jean-Michel Gathy.",
    about: "O Cheval Blanc Randheli é um resort ultra-luxuoso do grupo LVMH, localizado na ilha de Randheli no Atol de Noonu, em uma região ainda intocada das Maldivas. O acesso é feito por hidroavião privativo (40 minutos de Malé) ou por voo doméstico até o Aeroporto de Maafaru + lancha rápida (25 minutos). O resort foi projetado pelo renomado arquiteto Jean-Michel Gathy, combinando artesanato europeu, design asiático e arte contemporânea. São apenas 46 villas à beira-mar, sobre a água ou nas ilhas privativas, todas com piscina de borda infinita, serviço de mordomo 24h e total privacidade. O Cheval Blanc Spa, único nas Maldivas com assinatura Guerlain, está em ilha reservada exclusiva para bem-estar. O resort é referência mundial em sofisticação e personalização de experiências, com destaque para gastronomia francesa, atendimento \"Alquimista\" (concierge dedicado) e coleção própria de arte contemporânea.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã à la carte e buffet premium
- Serviço de mordomo pessoal em todas as villas 24h
- Concierge "Alquimista" para experiências sob medida
- Recepção no lounge privado do hidroavião
- Welcome amenity personalizado, frutas frescas e bebidas não alcoólicas
- Wi-Fi de alta velocidade em toda a ilha
- Kit praia de boas-vindas (chapéu, chinelo, bolsa customizada)
- Equipamentos de snorkeling, caiaque, stand-up paddle, catamarã
- Bicicletas personalizadas
- Academia Technogym
- Sauna, hammam e jacuzzi (spa Guerlain)
- Arrumação duas vezes ao dia
- Programação cultural e entretenimento ao vivo
- Kids Club "Le Carrousel" gratuito (atividades, área de splash, jogos criativos)
- Teens Club "Le Paddock" (jogos virtuais, esportes, gaming)
- Experiência "Art de Recevoir" francesa em todos os detalhes

Benefícios Especiais Lua de Mel / Bodas (sob consulta):

- Decoração romântica, amenities especiais e ritual personalizado da Guerlain`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling em house reef riquíssimo
- Caiaque, stand-up paddle, catamarã, aulas de vela
- Academia com personal trainer
- Oficinas criativas, pintura, ioga e meditação guiadas
- Aulas de culinária francesa, degustação de vinhos
- Session de fitness, tênis (quadras iluminadas)
- Cinema sob as estrelas
- Bicicletas para passeios na ilha
- Kids Club "Le Carrousel" (atividades naturais e artes visuais)
- Teens Club "Le Paddock" (video games, sala de música, esportes)

Atividades com custo extra:

- Centro PADI 5* (batismo, open water, safáris, night dive)
- Esportes aquáticos motorizados: jet ski, seabob, esqui aquático
- Pesca de fundo e pesca esportiva
- Cruzeiros ao pôr do sol, observação de golfinhos
- Excursão de picnic champanhe em banco de areia privado, passeio de iate de luxo
- Aulas de surf
- Spa Guerlain: tratamentos exclusivos, wellness retreats, detox, beauty rituals, suíte para casal e massagem signature
- Tratamentos kids spa
- Babá e personalização extra no kids club
- Sessão privativa com "Alquimista" (personalização total de experiências)
- Sessão privada de fotografia

Principais experiências aquáticas:

- Mergulho com snorkel guiado em recifes isolados
- Saída privativa de barco para bancos de areia e ilhas desertas
- Mergulho noturno no house reef
- Stand-up paddle ao pôr do sol

Restaurantes:

- Le 1947: Francês gourmet, premiado, menu degustação harmonizado
- Diptyque: Teppanyaki, Sashimi, culinária asiática e show cooking
- Deelani: Italiano e mediterrâneo, decks suspensos sobre o mar
- White: Café da manhã internacional e menu wellness, pratos leves durante o dia
- La Table de Partage: Private dining, reuniões familiares e jantares exclusivos
- Carte blanche: Room service 24h, experiências gastronômicas sob medida

Bares:

- Le White Bar: Drinks autorais, lanches gourmet
- Cigar Lounge: Seleção premium de charutos, ambiente lounge
- Wine Museum: Para jantares harmonizados especiais sob reserva

Experiências Especiais:

- Private Picnic em banco de areia
- Jantar privativo a dois no "La Table de Partage" ou na villa
- Degustação de vinhos raros e champagne premium
- Sunset cruise em iate de luxo
- Celebrations personalizadas (casamentos, ocasiões especiais)`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Water Villa (240m²): deck, piscina privada, acesso direto ao mar
- Lagoon Villa: sobre águas transparentes, vista panorâmica
- Todas com banheira de imersão, amenities exclusivos Guerlain, living interno/externo, TV de última geração, bicicleta particular, mordomo 24h, wine fridge, amenities de praia, estação Nespresso
- Todas as acomodações têm piscina privativa e living integrado
- Personalização de amenities, cheiros, travesseiros e menu de amenities Guerlain

Política de Crianças:

- Até 12 anos: estadia e refeições grátis (máx. 2 crianças por villa)
- Kids Club Le Carrousel gratuito (4-12 anos)
- Teens Club disponível
- Menu infantil, amenities, cama/carrinho sob solicitação
- Babá sob demanda (cobrado à parte)
- Spa kids`
      }
    ],
    accommodations: {
      title: "Acomodação",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio - Outubro",
          priceText: "Sob consulta",
          priceSubtext: "Melhores tarifas do ano"
        },
        {
          name: "Alta Temporada",
          period: "Novembro - Abril",
          priceText: "Sob consulta",
          priceSubtext: "Clima ideal e melhor visibilidade"
        }
      ],
      paymentTerms: [
        "20% de entrada no ato da reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento em até 10x sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Reembolso de 80% do valor pago para cancelamentos realizados com até 30 dias de antecedência da data de início da viagem"
    },
    faqs: [
      {
        question: "Como é o transfer para o Cheval Blanc Randheli?",
        answer: "O transfer pode ser feito por hidroavião privativo (40 minutos de Malé) ou por voo doméstico até o Aeroporto de Maafaru seguido de lancha rápida (25 minutos). Todo o trajeto é coordenado pelo resort com recepção no lounge privado."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã à la carte e buffet premium, serviço de mordomo 24h, concierge Alquimista, equipamentos de snorkeling e esportes aquáticos, Kids Club e Teens Club gratuitos, academia Technogym, Wi-Fi, entretenimento e muito mais."
      },
      {
        question: "O que é o serviço Alquimista?",
        answer: "O Alquimista é o concierge dedicado do Cheval Blanc Randheli, responsável por personalizar experiências únicas e sob medida para cada hóspede, garantindo uma estadia memorável e exclusiva."
      },
      {
        question: "O resort é adequado para crianças?",
        answer: "Sim, crianças até 12 anos podem se hospedar gratuitamente (máximo 2 por villa) com refeições incluídas. O resort oferece Kids Club Le Carrousel (4-12 anos), Teens Club Le Paddock e spa kids."
      },
      {
        question: "O que torna o Cheval Blanc Spa especial?",
        answer: "É o único spa nas Maldivas com assinatura Guerlain, localizado em uma ilha reservada exclusivamente para bem-estar. Oferece tratamentos exclusivos, wellness retreats, beauty rituals e suítes para casal."
      }
    ],
    images: [
      { src: heroImage, alt: "Cheval Blanc Randheli - Vista aérea do resort" },
      { src: "/src/assets/maldives-experiences/overwater-villas.jpg", alt: "Water villas com piscina privativa" },
      { src: "/src/assets/maldives-experiences/infinity-pool.jpg", alt: "Piscina infinita com vista para o oceano" },
      { src: "/src/assets/maldives-experiences/villa-sunset.jpg", alt: "Villa ao pôr do sol" },
      { src: "/src/assets/maldives-experiences/luxury-bathroom.jpg", alt: "Banheiro luxuoso com amenities Guerlain" },
      { src: "/src/assets/maldives-experiences/romantic-dinner.jpg", alt: "Jantar romântico na praia" },
      { src: "/src/assets/maldives-experiences/snorkeling.jpg", alt: "Snorkeling no recife" },
      { src: "/src/assets/maldives-experiences/spa-treatment.jpg", alt: "Tratamento no Cheval Blanc Spa by Guerlain" }
    ]
  }
};
