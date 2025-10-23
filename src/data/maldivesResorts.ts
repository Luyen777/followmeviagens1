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
        id: "section-1",
        title: "Inclusões do pacote",
        type: "text",
        content: `- Café da manhã buffet e à la carte no Fresh Restaurant
- Serviço de mordomo pessoal (Katheeb) 24/7 para cada villa
- Equipamentos de snorkeling, stand-up paddle e caiaques gratuitos
- Bicicletas personalizadas para cada hóspede
- Acesso a 3 academias equipadas (incluindo Jungle Gymnasium)
- Sessões de yoga e meditação no Javvu Spa
- Snorkeling guiado no house reef com biólogo marinho
- Wi-Fi gratuito em toda a ilha
- Água mineral e chás gourmet na villa
- Arrumação duas vezes ao dia e turndown service noturno
- Coquetel de boas-vindas semanal
- Entretenimento (música ao vivo, dança tradicional Bodu Beru, cinema ao ar livre)

Benefícios para Lua de Mel (4+ noites):
- Champagne de cortesia
- Romantic turndown service
- 30 minutos extras em tratamento de spa
- 7+ noites: Excursão surpresa + jantar romântico na praia + floating breakfast`
      },
      {
        id: "section-2",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:
- Esportes aquáticos não motorizados (caiaque, SUP, snorkeling)
- Programa Mini Marine Biologists para crianças (4-13 anos)
- Sultan's Village Kids Club (4-12 anos, 9h-17h diariamente)
- Quadras de tênis, badminton, vôlei de praia e futebol
- Treinamento de futebol em grupo (6x/semana)
- Sala de jogos (bilhar, ping-pong, xadrez)
- Workshops criativos (Alchemy Bar, culinária, mixologia, fotografia)
- Teen programme (DJ, aerial hoop, PlayStation 4)

Atividades com Custo Extra:
- Esportes motorizados: Jet ski (USD $150++ - 20min), wakeboard/water ski (USD $65-80++), subwing (USD $65++)
- Mergulho: A partir de USD $25++ por mergulho, equipamento completo USD $34++
- Excursões: Dolphin cruise (USD $1.200++), snorkeling safari (USD $700-1.200++), pesca tradicional (USD $700-850++), big game fishing (USD $1.200-2.200++), visita a Hanifaru Bay (sazonal)
- Javvu Spa: Tratamentos a partir de USD $175 (60min), programas signature com medicina herbal maldívia (Dhivehi Beys), massagem para casal sob as estrelas (USD $550 - 90min)
- Experiências especiais: Amilla Glamping em bolha transparente (USD $750-1.000++ por noite com pacotes wellness ou romance), jantar privativo na praia (Dine by Design), piquenique em banco de areia

Restaurantes:
- Feeling Koi - Japonês contemporâneo sobre a água com sunset bar no rooftop
- Barolo - Italiano autêntico do Piemonte
- East - Sul da Índia com especialidades tandoor
- Tessera - Grego mediterrâneo
- Fresh - Buffet internacional (café da manhã incluso, jantares temáticos)
- Emperor Beach Club - Casual na areia com noites temáticas 3x/semana
- Joe's Pizza - Pizzas artesanais
- Chill'd Café - Opções leves

Bares: Sunset Bar (rooftop), Baa Bar, The Cellar Door (adega premium), Baazaar Bar (piscina)`
      },
      {
        id: "section-3",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a Água:
- Reef Water Pool Villa (220m²) - 1 quarto, piscina 9,5m, suspensa sobre recife de coral, acesso direto para snorkeling, capacidade 2 adultos + 2 crianças
- Lagoon Water Pool Villa (280m²) - 1 ou 2 quartos, piscina expansiva, sobre lagoa turquesa, deck espaçoso

Comodidades em todas as villas: Piscina privativa (9,5-20m), cama king-size, banheira para dois, chuveiro ao ar livre, deck com espreguiçadeiras, TV 42" com Blu-Ray, sistema de som Bose, iPad de controle, máquina Nespresso, mini-bar e adega, amenities orgânicos premium, rede na praia, ar-condicionado individual. Berços, monitores de bebê e cadeiras altas disponíveis sob solicitação.

Política de Crianças:
- Menores de 2 anos: traslado gratuito, refeições gratuitas
- Acima de 12 anos: tarifa adulto
- Kids Club gratuito (4-12 anos), programa Mini Marine Biologists gratuito`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
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
        id: "inclusions",
        type: "text",
        title: "Inclusões do pacote (All Inclusive)",
        content: "- Café da manhã, almoço e jantar buffet no Banyan Restaurant\n- Seleção de bebidas alcoólicas/não alcoólicas nos bares selecionados (inclusive drinks, cervejas, refrigerantes e sucos)\n- Snacks, sorvetes, petiscos e chá da tarde\n- Minibar abastecido diariamente (água, cerveja, refrigerante; algumas tarifas)\n- Equipamento para snorkeling e esportes não motorizados (caiaque, windsurf, SUP)\n- Bicicletas para explorar a ilha\n- Atividades recreativas: tênis, squash, badminton, vôlei, futebol de areia, tênis de mesa\n- Academia e aulas fitness em grupo (yoga, alongamento)\n- Kids club & playground para crianças\n- Piscina central (adulto e infantil), serviço de praia/piscina\n- Wi-Fi gratuito nas áreas públicas\n- Show noturno, música ao vivo e eventos culturais semanais\n- Arrumação diária/turn down, amenities de boas-vindas\n- Traslado de lancha regular (pago à parte em maioria dos planos)\n- Serviço de concierge para excursões e reservas"
      },
      {
        id: "dining",
        type: "text",
        title: "Restaurantes & Bares",
        content: "- Banyan Restaurant (buffet internacional, todas as refeições)\n- Sunset Restaurant (sobre a água, frutos do mar e jantares especiais)\n- Lohis Wave (bar do surf, ambiente descontraído, drinks e snacks)\n- Hiyala Bar (principal bar central junto à piscina, drinks 24h)\n- Beach Bar (lanches, drinks à beira-mar)\n- Room service 24h (pago à parte)\n- Temas semanais: noites maldivas, seafood BBQ, noites asiáticas\n- Jantares privados na praia e piqueniques sob consulta/custo\n- Gastronomia: internacional, pratos maldivianos, frutos do mar frescos, asiático, snacks e pizzas, dietas especiais sob solicitação"
      },
      {
        id: "accommodation",
        type: "text",
        title: "Acomodação",
        content: "- Villas com ar-condicionado, minibar, smart TV, amenities premium, cofre, máquina de chá/café, ducha interna/externa e terraço\n- Ocean Villas: deck sobre a lagoa, acesso direto ao mar, sala de estar e serviço personalizado para adultos, opções sunrise/sunset\n- Menu de travesseiros, Wi-Fi, room service pago, amenidades kids e berço/cama extra sob reserva\n- Diferenciais: excelente privacidade nas villas, localização privilegiada para surfe, ótimo house reef para snorkeling e amplos jardins tropicais"
      },
      {
        id: "free-activities",
        type: "text",
        title: "Atividades gratuitas",
        content: "- Snorkeling (house reef + equipamento gratuito)\n- Caiaque, windsurf, SUP, pedalinho\n- Tênis, squash, badminton, futebol de areia, vôlei de praia\n- Bicicletas para explorar toda a ilha\n- Piscina adulto e infantil\n- Kids Club e playground\n- Aulas de yoga, fitness center\n- Shows noturnos temáticos, música ao vivo, eventos culturais\n- Entretenimento e programação semanal, happy hour de drinks"
      },
      {
        id: "paid-activities",
        type: "text",
        title: "Atividades com custo extra",
        content: "- Mergulho PADI 5* (batismo, cursos, snorkel guiado, night dive)\n- Esportes motorizados: jet ski, seabob, kite/windsurf, wakeboard, parasailing\n- Spa Mandara: tratamentos balineses, massagem, beauty, wellness\n- Surf (acesso restrito/reserva para Lohis, aluguel pranchas, aulas pros)\n- Excursões: sandbank picnic, pesca, island hopping, cruzeiro sunset, dolphin tour\n- Jantares privativos, degustação de vinhos, masterclasses culinária\n- Babysitting, sessões de fotos\n- Surf: destino top para surfistas (Lohis), com packages exclusivos, acesso limitado (reserva obrigatória alta temporada)"
      },
      {
        id: "highlights",
        type: "text",
        title: "Diferenciais",
        content: "Surf spot Lohis: referência nacional para surf, Ocean Villas exclusivas para adultos, excelente snorkeling no house reef, maior diversidade esportiva entre resorts 4* das Maldivas, spa Mandara de alto padrão e jardins tropicais exuberantes."
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
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
    about: "O Anantara Dhigu Maldives Resort é um resort 5 estrelas family-friendly localizado na ilha de Dhigufinolhu no Atol Sul de Malé, a apenas 30-35 minutos de lancha rápida do Aeroporto Internacional de Malé. O resort oferece 110 villas espaçosas, entre villas na praia e suítes sobre a água, todas com vista para o nascer ou pôr do sol. Possui acesso privilegiado ao resort irmão Anantara Veli (adults-only) através de uma ponte conectada, permitindo que os hóspedes desfrutem de mais de 7 restaurantes entre as duas propriedades. Destaca-se pelo spa sobre a água, escola de surf Tropicsurf, centro de esportes aquáticos Aquafanatics (PADI 5 estrelas), ilha privativa de piquenique Gulhifushi, e excelente kids club. Transferências disponíveis 24 horas por dia.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do pacote",
        type: "text",
        content: `- Café da manhã buffet internacional no Fushi Café (7h-11h)
- Recepção em lounge privativo no aeroporto com bebidas de cortesia
- Toalhas frias e água gelada durante o traslado de lancha
- Uso de equipamentos de snorkeling
- Caiaques e stand-up paddle
- Acesso a academia equipada com Technogym
- Piscina infinita
- Sessões de yoga em grupo diariamente
- Acesso à ilha privativa Gulhifushi com food truck e tiki bar
- Cinema sob as estrelas
- Entretenimento ao vivo (música, performances culturais)
- Wi-Fi gratuito

Benefícios para Lua de Mel (mínimo 4 noites):

- Garrafa de champagne na chegada
- Seleção de chocolates artesanais do chef
- Decoração romântica no quarto
- 50% de desconto no traslado para a noiva (ou traslado gratuito conforme período)
- Certificado de casamento necessário (máximo 12 meses após o evento)

Pacote Honeymoon Romance in Paradise (3+ noites):

- Acomodação de luxo com café da manhã e jantar diários
- Um cruzeiro ao pôr do sol para observação de golfinhos (casal)
- Um tratamento signature para casal no Anantara Spa
- Um Designer Dining privativo
- Experiência de coquetel no Yellow Fin Club
- Garrafa de champagne e arranjo de pétalas de rosa na chegada`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling na lagoa (equipamentos inclusos)
- Caiaques e SUP
- Dhoni Kids Club (para crianças, 9h-17h) com atividades artísticas, corrida de caranguejos, pintura de cocos, aulas de pizza
- Spice Spoons Cooking School (aulas de culinária maldívia e tailandesa)
- Tênis (quartas-feiras 19h-20h)
- Badminton e vôlei de praia
- Petanque, futebol de mesa, mesa de bilhar
- Sessões de yoga e fitness em grupo (3x por dia incluídas no direct booking)
- Acesso à ilha Gulhifushi com food truck (12h-16h) e tiki bar (10h-17h)

Atividades com Custo Extra:

- Mergulho com Aquafanatics: Discover Programme para iniciantes (lagoa até 12m), cursos PADI Open Water, safaris de mergulho meio dia/dia completo
- Esportes aquáticos motorizados: Jet ski, flyboarding, parasailing, wakeboard, kneeboard, water ski, fun rides (doughnuts)
- Surf school: Aulas de surf com Tropicsurf
- Vela: Catamarã, windsurf, kitesurf
- Anantara Spa (sobre a água): 6 salas de tratamento sobre o oceano, 2 salas abertas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, salão de beleza. Horário: 10h-19h. Cancela com 24h de antecedência
- Experiências especiais: Designer Dining (jantares privativos na praia ou dhoni tradicional), wine dinner, cruzeiros ao pôr do sol, pesca, passeios de iate, tours de snorkeling guiados, coral adoption programme (USD $185 patrocínio / USD $247 patrocínio + plantio)
- Teen Activities: Tênis amigável, aulas de surf, aventuras de barco com fundo de vidro

Restaurantes:

No Anantara Dhigu:

- Fushi Café - Buffet internacional, café da manhã (7h-11h) e jantares temáticos (18h30-22h): noite maldívia com performance Boduberu (domingo), festa do Oriente Médio (terça, USD $120++ incluído em HB/FB), buffet internacional
- Sea.Fire.Salt - Grelhados premium e frutos do mar frescos à beira-mar, almoço e jantar (12h30-15h30 / 18h30-22h). Suplemento USD $60 por pessoa em HB/FB
- Aqua Bar - Bar à beira da piscina, almoço leve (12h-16h), drinks ao pôr do sol, ambiente descontraído, vista para tubarões de recife circulando

No Anantara Veli (acesso via pontão - 2 minutos):

- Baan Huraa - Tailandês autêntico sobre a lagoa, casa de teca tradicional, pratos para compartilhar, jantar (18h30-22h). Suplemento USD $60 em HB/FB
- 73 Degrees - Buffet internacional oceanfront, café da manhã e jantares temáticos
- Origami - Japonês moderno com teppanyaki, sushi e sashimi (não incluído em HB/FB, pago separadamente)
- Dhoni Bar - Bar à beira da piscina (somente adultos 18+), tapas e coquetéis (10h-meia-noite), almoço leve (12h-16h), jantar (18h30-22h)
- Cumin - Cozinha do Sul da Ásia e Índia, especiarias do Oceano Índico, café da manhã (7h-11h) e jantar (18h30-22h)

Experiências Gastronômicas Especiais:

- Designer Dining by Anantara - Jantares privativos na praia, em dhoni tradicional ou localização personalizada
- Gulhifushi Picnic Island - Ilha privativa com food truck (12h-16h) e tiki bar (10h-17h), acessível por pontão ou caiaque`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Sunrise Beach Pool Villa

- Todas as comodidades da Sunrise Beach Villa
- Piscina privativa de 9m
- Ideal para famílias

Sunset Beach Pool Villa

- Todas as comodidades da Sunset Beach Villa
- Piscina privativa de 9m
- Vista espetacular para o pôr do sol

Two Bedroom Family Beach Pool Villa (220m²)

- Capacidade: 4 adultos ou 2 adultos + 3 crianças
- 2 quartos (1 king + configurações flexíveis)
- Piscina privativa de 9m
- Banheiro infantil em miniatura
- Sala de estar espaçosa
- Mesa de jantar
- Ideal para famílias

Sunrise Over Water Suite (85m²)

- Capacidade: 2 adultos + 1 criança
- Suspensa sobre águas cristalinas
- Janelas do chão ao teto
- Deck privativo para observar o nascer do sol
- Painéis de vidro no piso do banheiro para visualizar vida marinha

Comodidades em todas as villas: TV via satélite, minibar, frigobar, ventilador de teto, ar-condicionado, banheiro privativo, banheira/chuveiro combinado, varanda/terraço, filmes no quarto, roupões infantis e chinelos (para famílias), berços e camas extras gratuitas, serviço de lavanderia 50% off para crianças até 12 anos.

Política de Crianças:

- Menores de 12 anos: comem gratuitamente seguindo o meal plan dos pais (menu infantil)
- Máximo 2 crianças por família
- Crianças até 12 anos: 50% desconto nos traslados
- Menores de 2 anos: traslados gratuitos, refeições gratuitas
- Babysitting disponível a partir de 3 meses (custo adicional)`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
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
        title: "Inclusões do pacote",
        type: "text",
        content: `- Acesso ao lounge VIP de hidroavião em Malé (com bebidas e Wi-Fi gratuito)
- Serviço de Villa Host (mordomo) 24 horas
- Equipamentos de snorkeling gratuitos
- Bicicletas personalizadas para adultos e crianças
- Acesso a 3 academias equipadas com Technogym
- Piscina infinita de 49m (uma das mais longas das Maldivas)
- Sessões de yoga, meditação, stretch and tone em grupo
- Wi-Fi gratuito em todas as áreas
- Cinema sob as estrelas
- Sunshine Butlers na piscina (suco fresco, toalhas frias, limpeza de óculos de sol, massagem nas costas de 5min)
- Spice Spoons Cooking Classes (aulas de culinária tailandesa e maldívia gratuitas)
- Entretenimento ao vivo e performances culturais

Benefícios para Lua de Mel (dentro de 12 meses do casamento, certidão necessária):

- Welcome amenity especial
- Garrafa de champagne na chegada
- Ritual de banho com velas e pétalas de rosas uma noite durante a estadia
- Decoração de cama com pétalas
- Pacote Honeymoon & Romance (4+ noites): Inclui café da manhã e jantar diários + Dining by Design privativo na praia + champagne breakfast na villa + sessão de stargazing compartilhada + Slumber Guru Ritual romântico`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling no house reef "Golden Wall" (2km de extensão, tartarugas hawksbill, arraias, tubarões de recife, moreia)
- Caiaques, stand-up paddle, catamarã
- Thiththi Boli Kids' Club (4-12 anos, 10h-18h): treasure hunts, Marine Biologist Programme, cooking classes, artes maldívias, cinema, pamper experience com spa
- Trampoline park
- Cinema sob as estrelas com filmes clássicos e blockbusters
- Spice Spoons Cooking Classes (culinária tailandesa e maldívia)
- Sessões de yoga, meditação e fitness em grupo
- Quadras de tênis, badminton, vôlei de praia
- Recreation area (bilhar, tênis de mesa, xadrez gigante, Jenga)
- Stargazing no SKY Observatory (observatório sobre a água com telescópio potente)

Atividades com Custo Extra:

- Mergulho: PADI 5 estrelas certificado, Discover Scuba Diving, cursos completos, safaris de mergulho
- Esportes motorizados: Jetpack, Seabob, jet ski, parasailing (Chute Me), wakeboard
- Pesca: Big game fishing, pesca tradicional dhoni, pesca noturna
- Excursões: Dolphin Discovery cruise, visita a Hanifaru Bay (maio-novembro, mantas e tubarões-baleia), island hopping, local island tours, Hawksbill Turtle Quest snorkel (2h)
- Muay Thai Boxing: Primeiro e único resort nas Maldivas a oferecer (com ring profissional e instrutor), sessões familiares disponíveis
- Anantara Spa overwater: 6 suítes sobre o oceano, 2 salas abertas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, Cocoon Medi Spa, salão de beleza e cabeleireiro, deck de relaxamento overwater com cold plunge pool
- Coral Adoption Programme (HARP): Patrocínio USD $185 | Patrocínio + plantio pessoal de coral: preço sob consulta
- Experiências especiais: Dining by Design (jantares privativos), private island picnics, cruzeiros de iate de luxo, degustação de vinhos envelhecidos subaquaticamente (USD $2.455++ para 2 pessoas)

Restaurantes:

SEA - Underwater Restaurant (Signature)

- Restaurante subaquático 6m abaixo da superfície
- Paredes curvas de vidro com vista 360° para o recife (tartarugas, mantas, tubarões, peixes-palhaço)
- Adega subaquática com mais de 450 rótulos de 24 países (votada melhor adega subaquática do mundo)
- Degustação de vinhos envelhecidos no oceano (Dom Pérignon 2008, Cervaro della Sala Chardonnay 2018)
- Menu de frutos do mar premium
- Crédito de USD $50 por pessoa em HB/FB para jantar
- Almoço de 4 pratos à la carte (incluído em alguns pacotes promocionais)

FIRE - Japanese Teppanyaki

- Cozinha japonesa com teppanyaki ao vivo
- Grelhados premium
- Crédito de USD $50 por pessoa em HB/FB

SALT - Fine Asiatic Restaurant

- 19 variedades de sais raros do planeta
- Salt Sommelier para auxiliar na escolha dos temperos
- Cozinha asiática sofisticada

SKY - Rooftop Bar & Observatory

- Bar no rooftop com vista panorâmica do Atol de Baa
- Observatório astronômico (único nas Maldivas sobre a água)
- Telescópio potente para stargazing sessions com Sky Guru
- Coquetéis exclusivos ao pôr do sol

Plates - International Buffet

- Café da manhã buffet (incluído em todos os meal plans)
- Jantares temáticos noturnos selecionados: árabe, europeu, frutos do mar, BBQ, internacional
- Estações ao vivo

SPICE - Asian Fusion

- Menu à la carte com seleção de 3 pratos
- Incluído em HB e FB

Manzaru - Beachfront Casual Dining

- Almoço casual à beira-mar (12h-17h)
- Menu à la carte de 2 pratos para FB
- Opções leves e descontraídas

Experiências Gastronômicas Especiais:

- Dining by Design - Jantares privativos na praia, underwater ou localizações exclusivas
- Wine Pairing Dinners - Jantares harmonizados
- Michelin Star Dinners - Eventos especiais com chefs estrelados
- Cinema Under the Stars - Jantar durante sessão de cinema ao ar livre`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a Água (Over Water Pool Villas):

Over Water Pool Villa (258m²)

- Suspensa sobre lagoa cristalina turquesa
- Piscina privativa e sundeck sobre a água
- Banheiro ao ar livre com banheira whirlpool com fundo de vidro (vista para vida marinha)
- Acesso direto ao recife "Golden Wall"
- Villa Host 24h
- Bicicletas privativas
- Cama king-size

Comodidades: Ar-condicionado, TV flat-screen via satélite, docking station iPod, máquina de café, minibar, adega climatizada, cofre para laptop, roupa de cama e toalhas premium, amenities Elemis, sistema de som Bose, serviço de streaming (Netflix), Blu-ray player, telefone, pillow e scent menus, produtos hipoalergênicos disponíveis.`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
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
  },
  "como-maalifushi": {
    slug: "como-maalifushi",
    name: "COMO Maalifushi",
    rating: 5,
    location: "Atol Thaa, Sudoeste das Maldivas",
    transferTime: "Voo doméstico 60min + lancha rápida 30min",
    heroImage: heroImage,
    heroTitle: "COMO Maalifushi",
    heroSubtitle: "Resort 5 estrelas com foco em bem-estar, natureza e mergulho no atol Thaa",
    heroHighlights: ["66 Villas com Design Minimalista", "Spa COMO Shambhala sobre a Água", "Primeiro Resort do Atol Thaa"],
    seoTitle: "COMO Maalifushi - Resort 5★ de Bem-estar e Mergulho | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas no atol Thaa com 66 villas minimalistas, spa COMO Shambhala sobre a água, gastronomia saudável e experiências exclusivas de mergulho e surf.",
    about: "COMO Maalifushi é um resort 5 estrelas localizado no atol Thaa, sudoeste das Maldivas, sendo o primeiro resort da região. É referência em privacidade, bem-estar, natureza e mergulho, ideal para casais, famílias, surfistas e mergulhadores. Possui 66 villas e suítes (praia, jardim e sobre a água), todas com design minimalista, comodidades COMO Shambhala e piscina privativa em categorias superiores. Oferece ambiente sofisticado e sustentável, serviço atencioso e extenso leque de experiências exclusivas. Destaque para spa sobre a água, gastronomia saudável e excursões para ilhas privadas. Acesso via voo doméstico (60min de Malé) + lancha rápida (30min).",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet internacional e à la carte no Madi
- Welcome drink, frutas frescas e amenities Shambhala
- Wi-Fi de alta velocidade em toda a ilha
- Equipamentos de snorkeling, caiaque, stand-up paddle
- Bicicletas para explorar a ilha
- Yoga (aulas coletivas regulares)
- Uso da academia, sauna e jacuzzi no spa
- Piscina principal com serviço de praia
- Chá/água mineral, seleção de chás de ervas COMO em todas as villas
- Arrumação diária e serviço noturno
- Uso do Kids Club "Play by COMO" (4-12 anos)
- Cinema sob as estrelas semanal
- Programação cultural (Boduberu, noite de gerência)
- Sunset management happy hour semanal

Lua de Mel/Bodas:

- Decoração especial na villa, bolo comemorativo, amenities adicionais, jantar privativo e 60min de massagem para casal (mín. 4 noites, sob solicitação e disponibilidade).`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling (barreira de corais da ilha e recifes próximos)
- Caiaque, stand-up paddle, pedalinho
- Yoga, pilates e meditação (aulas regulares no pavilhão)
- Bicicletas para passeios
- Academia Technogym
- Sauna, jacuzzi e banho turco no COMO Shambhala Spa
- Kids Club "Play by COMO": atividades criativas, oficinas, aventuras na praia
- Noite de cinema ao ar livre

Atividades com Custo Extra:

- Mergulho PADI: batismo, cursos, safaris e mergulhos noturnos
- Esportes motorizados: jet ski, seabob, esqui aquático, fun tube
- Surf (aulas, locação de prancha e boat trips para waves locais)
- Pesca ao pôr do sol, pesca tradicional local
- Passeios de barco: cruzeiro pôr do sol com golfinhos, barbeque em pícnic privativo, sleepover na ilha deserta Lavadhoo
- Excursão à ilha local, visita a bancos de areia
- Spa COMO Shambhala: massagens asiáticas, tratamentos wellness, terapias ayurvédicas, ritual de beleza
- Yoga/mindfulness e wellness privé
- Jantar privativo "Castaway" em ilha deserta
- Cinema privativo sob as estrelas com snacks/gourmet BBQ
- Babá e serviço "Family Nanny" (fee extra)

Esporte aquático motorizado (preço médio):

- Jet ski: USD $65 (15min)
- Seabob: USD $70 (15min)
- Wakeboard/esqui aquático: USD $60 (15min)

Restaurantes & Bares:

Restaurantes principais:

- Madi: Internacional e maldívio, café da manhã buffet/à la carte, almoço mediterrâneo, jantares temáticos (segunda: Indian Ocean Night), Boduberu
- Tai: Japonês premium (sushi, sashimi, robata grill), jantar sobre água, live thrice weekly
- Thila: Casual ao ar livre, pizzas, grelhados, menu kids, poolside bar

Bares:

- Thila Bar: Bar à beira da piscina com cocktails, sucos, snacks durante o dia
- Serviço de praia: drinks, snacks, finger food na piscina/prainha
- Room Service 24h disponível

Experiências Gastronômicas Especiais:

- Jantar privativo "Castaway Picnic" em ilha deserta
- Sleepover em Lavadhoo: BBQ privativo, setup para dormir sob estrelas, movie by beach
- Japanese Omakase no Tai
- Menu wellness COMO Shambhala disponível em todos os restaurantes
- Degustação de vinhos privativa sob consulta`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Water Villa (215m²):

- Piscina infinita privativa, amplo solarium, sala aberta, vista mar espetacular

Comodidades em todas as villas:

- King bed com lençóis premium
- Banheira imersa, amenities COMO Shambhala
- Máquina de café Nespresso, minibar
- Smart TV, Bose sound, Wi-Fi premium
- Menu de travesseiros
- Bicicletas e snacks de boas-vindas
- Arrumação 2x/dia, serviço de mordomo na pool/COMO Villa

Política de Crianças:

- 0-12 anos: estadia gratuita acomodados com pais
- Até 2 crianças grátis na villa dos pais (menores de 12 anos)
- Menores de 12 anos: refeição gratuita nos mesmos planos dos pais
- Kids Club "Play by COMO" gratuito (4-12 anos), atividades temáticas e menus kids
- Serviço de babá/família disponível (custo adicional)`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Crianças de 0-12 anos: estadia e refeições gratuitas quando acomodadas com os pais (máximo 2 crianças por villa). Kids Club Play by COMO gratuito para crianças de 4-12 anos."
    },
    faqs: [
      {
        question: "Como chegar ao COMO Maalifushi?",
        answer: "O resort está localizado no atol Thaa, sudoeste das Maldivas. O acesso é feito via voo doméstico de Malé (60 minutos) seguido de lancha rápida (30 minutos), totalizando aproximadamente 1h30min de viagem."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet e à la carte, welcome drink, equipamentos de snorkeling e esportes aquáticos, bicicletas, yoga, academia, sauna e jacuzzi, Kids Club gratuito, cinema semanal, programação cultural e Wi-Fi."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças de 0-12 anos se hospedam gratuitamente (máximo 2 por villa) e comem gratuitamente nos mesmos planos dos pais. O Kids Club Play by COMO é gratuito para crianças de 4-12 anos, oferecendo atividades criativas e aventuras na praia."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Casais em lua de mel recebem decoração especial na villa, bolo comemorativo, amenities adicionais, jantar privativo e 60 minutos de massagem para casal (mínimo 4 noites, sob solicitação e disponibilidade)."
      },
      {
        question: "O que é o COMO Shambhala?",
        answer: "É a linha de bem-estar da COMO, presente em todas as villas através de amenities premium. O resort possui um spa COMO Shambhala sobre a água oferecendo massagens asiáticas, tratamentos wellness, terapias ayurvédicas e rituais de beleza."
      },
      {
        question: "O resort oferece experiências de mergulho?",
        answer: "Sim, o COMO Maalifushi é referência em mergulho no atol Thaa. Oferece batismo PADI, cursos completos, safaris de mergulho e mergulhos noturnos. O resort também é popular entre surfistas, oferecendo aulas e boat trips para waves locais."
      },
      {
        question: "Quais experiências especiais o resort oferece?",
        answer: "O resort oferece jantares privativos Castaway em ilha deserta, sleepover na ilha Lavadhoo com BBQ e cinema na praia, Japanese Omakase no Tai, menu wellness COMO Shambhala, e passeios de barco para observação de golfinhos."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "COMO Maalifushi - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water villas com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Spa COMO Shambhala sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Interior minimalista das villas"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Restaurante Tai japonês sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiência gastronômica no resort"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling no recife"
      }
    ]
  },
  "conrad-maldives": {
    slug: "conrad-maldives",
    name: "Conrad Maldives Rangali Island",
    rating: 6,
    location: "Atol de Ari Sul",
    transferTime: "30 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Conrad Maldives Rangali Island",
    heroSubtitle: "Resort 6 estrelas icônico com duas ilhas, The Muraka e restaurante subaquático Ithaa",
    heroHighlights: ["The Muraka - Primeira Villa Subaquática", "Restaurante Ithaa Subaquático", "2 Ilhas Conectadas"],
    seoTitle: "Conrad Maldives Rangali Island - Resort 6★ com Villa Subaquática | Follow Me Viagens",
    seoDescription: "Resort 6 estrelas icônico no Atol de Ari Sul com The Muraka (primeira villa subaquática do mundo), restaurante Ithaa subaquático, 2 ilhas conectadas e experiências exclusivas.",
    about: "Conrad Maldives Rangali Island é um resort 6 estrelas icônico no Atol de Ari Sul, instalado em duas ilhas paradisíacas conectadas por uma ponte de 500 metros, conhecido por suas praias intocadas de areia branca e vida marinha vibrante (arraias, tubarões, recifes). Destaca-se pelo inovador The Muraka (primeira villa subaquática do mundo), restaurante Ithaa (subaquático), extensa oferta gastronômica e experiências sob medida. Resort de referência tanto para casais como para famílias. Acomodações de altíssimo padrão, serviço de mordomo, spa premiado e Kids/Teens Club completam o cenário.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet completo em vários restaurantes
- Wi-Fi gratuito em toda a ilha e na villa
- Serviço de mordomo (The Muraka e Residences)
- Equipamentos de snorkeling, caiaque e pedalinho
- Bicicletas para adultos e crianças (sob pedido)
- Cinema sob as estrelas e eventos semanais
- Acesso ao fitness center 24h, sauna, jacuzzi e spa lounge
- Kids Club "Majaa Explorer's Hub" (4-12 anos)
- Playground, atividades teens
- Entretenimento noturno (shows culturais, música ao vivo)
- Arrumação diária e serviço de abertura de cama
- Academia moderna com aulas em grupo, pilates, yoga e personal trainer
- Chá da tarde, drinks de boas-vindas, frutas frescas
- Concierge para organização de experiências

Benefícios para Lua de Mel (mín. 4 noites, sob consulta):

- Amenidades românticas, decoração especial, upgrade mediante disponibilidade, jantar privativo ou piquenique

The Muraka Exclusive:

- Transfer privativo, mordomo e chef dedicados, buggy exclusivo, menu breakfast personalizável, experiências diárias inclusas (massagem, jantar privativo, fotoshoot, wine tasting, experiências de conservação de corais, movie night, entre outras - uma por dia)
- Amenidades de SPA Guerlain, celebração de boas-vindas, amenities premium`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling, caiaque, stand-up paddle, pedalinho
- Quadras de tênis iluminadas, vôlei de praia, futebol de areia
- Yoga, pilates, fitness center 24h, fitness/aulas coletivas
- Kids Club Majaa para 4-12 anos (atividades criativas, caça ao tesouro, oficinas, games)
- Entretenimento noturno, shows culturais, cinema ao ar livre
- Bicicletas para explorar as ilhas (mediante solicitação)
- Piscinas: 3 (adultos, família, infantil)
- Biblioteca e sala de jogos

Atividades com custo extra:

- Mergulho PADI (iniciação, cursos completos, nitrox, night dive, safaris com manta e tubarão-baleia)
- Esportes motorizados: jet ski, seabob, esqui aquático, parasail, banana boat, flyboard
- Pesca esportiva, sunset cruise, observação de golfinhos e tubarões-baleia
- Excursões de catamarã, piqueniques em bancos de areia ou ilhas desertas
- Spa COMO Shambhala Retreat: massagens, terapias, hidroterapia, ritual de spa, hidroterapia, tratamentos signature
- Gastronomia privativa: sunset dinner, sandbank BBQ, wine and cheese dinner, cooking classes

Destaques exclusivos:

- Coral Conservation Programme: plantio de corais, experiência educativa
- Sessões de fotos profissionais
- Jantares privados sob as estrelas ou no sandbank
- Cinema by the sea privativo

Principais experiências aquáticas:

- Snorkeling tour guiado (house reef e recifes externos)
- Safe zone manta/snorkel safari
- Passeio em semi-submarino transparente
- Iate privado "Falcon 80" para experiências de luxo

Restaurantes & Bares:

Restaurantes principais:

- Ithaa Undersea Restaurant: Restaurante subaquático (primeiro do mundo, 5 metros abaixo d'água, menu multi course)
- Sunset Grill: Sobre a água, grelhados premium e frutos do mar
- Mandhoo: Menu wellness, pratos sazonais equilibrados
- Vilu Restaurant & Bar: Mediterrâneo, café da manhã e jantar à la carte
- Koko Grill: Teppanyaki japonês ao ar livre na praia
- Ufaa by Jereme Leung: Chinês contemporâneo de autor
- Atoll Market: Buffet internacional (estações temáticas)
- The Cheese & Wine Bar: Seleção de queijos raros e vinhos premium
- Rangali Bar: Drinks, tapas, lanche leve na piscina
- Wine Cellar: Primeira adega subterrânea das Maldivas, jantares harmonizados
- Room Service 24h

Bares:

- Rangali Bar (cocktails, música ao vivo), 2 Pool Bars, sunset decks

Experiências Gastronômicas Especiais:

- Jantar privado no sandbank
- Degustação de vinhos na Wine Cellar
- Jantares privativos na praia/villa
- Eventos especiais semanais (Maldivian Night, degustação de queijos, shows chef's table)`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Water Villa (86-152m²): deck amplo, vista mar, acesso direto à lagoa, banheira com vista oceano, algumas categorias com piscina
- Superior Water Villa / Retreat Water Villa: área extendida, sunset/sunrise views, piscina privativa
- Premier Water Villa: luxo máximo, living integrado

The Muraka (villa subaquática):

- Dormitório principal a 5m de profundidade, janelas do chão ao teto, elevador, sala de estar sobre a água, deck, piscina, chef e mordomo privativos, acesso privativo (jet boat ou hidroavião), experiências signature

Política de Crianças:

- Até 12 anos: estadia, refeições e traslados grátis (máximo 2 crianças por villa em épocas promocionais)
- Kids Club Majaa para 4-12 anos, teens welcome, amenities kids-friendly sob pedido
- Serviço de babá disponível (custo extra)`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "The Muraka (villa subaquática) possui condições especiais de reserva e cancelamento. Crianças até 12 anos: estadia e refeições gratuitas em épocas promocionais (máximo 2 crianças por villa)."
    },
    faqs: [
      {
        question: "O que é The Muraka?",
        answer: "The Muraka é a primeira villa subaquática do mundo, com dormitório principal a 5 metros de profundidade com janelas do chão ao teto. Inclui elevador, sala de estar sobre a água, deck, piscina, chef e mordomo privativos, além de experiências signature diárias inclusas."
      },
      {
        question: "O que é o restaurante Ithaa?",
        answer: "O Ithaa Undersea Restaurant é o primeiro restaurante subaquático do mundo, localizado 5 metros abaixo d'água. Oferece menu multi course com vista panorâmica para o recife e vida marinha através de paredes de vidro curvas."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet, Wi-Fi, equipamentos de snorkeling e esportes aquáticos, bicicletas, cinema sob as estrelas, fitness center 24h, Kids Club Majaa (4-12 anos), entretenimento noturno, chá da tarde e concierge."
      },
      {
        question: "Como são as duas ilhas do resort?",
        answer: "O Conrad Maldives está instalado em duas ilhas paradisíacas no Atol de Ari Sul, conectadas por uma ponte de 500 metros. As ilhas oferecem praias intocadas de areia branca, vida marinha vibrante e experiências exclusivas."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças até 12 anos podem se hospedar gratuitamente (máximo 2 por villa em épocas promocionais) com estadia, refeições e traslados inclusos. O resort oferece Kids Club Majaa (4-12 anos) e atividades teens."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Casais em lua de mel (mínimo 4 noites) recebem amenidades românticas, decoração especial, upgrade mediante disponibilidade e jantar privativo ou piquenique."
      },
      {
        question: "O resort oferece experiências de mergulho?",
        answer: "Sim, o resort possui centro PADI completo oferecendo iniciação, cursos, nitrox, night dive e safaris com mantas e tubarões-baleia. Também oferece snorkeling tours guiados, safe zone manta safari e passeio em semi-submarino."
      },
      {
        question: "Quantos restaurantes o resort possui?",
        answer: "O resort oferece extensa opção gastronômica incluindo o Ithaa Undersea Restaurant (subaquático), Sunset Grill sobre a água, Vilu mediterrâneo, Koko Grill teppanyaki, Ufaa chinês, Atoll Market buffet, The Cheese & Wine Bar, Wine Cellar subterrânea e mais."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Conrad Maldives Rangali Island - Vista aérea das duas ilhas"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "The Muraka - Primeira villa subaquática do mundo"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante Ithaa subaquático"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Water villas com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Spa e experiências de bem-estar"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas exclusivas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Vida marinha e snorkeling"
      }
    ]
  },
  "emerald-maldives": {
    slug: "emerald-maldives",
    name: "Emerald Maldives Resort & Spa",
    rating: 5,
    location: "Ilha Fasmendhoo, Atol Raa",
    transferTime: "Hidroavião 40min ou voo doméstico 30min + lancha 15min",
    heroImage: heroImage,
    heroTitle: "Emerald Maldives Resort & Spa",
    heroSubtitle: "Resort 5 estrelas membro Leading Hotels of the World com Deluxe All Inclusive",
    heroHighlights: ["Deluxe All Inclusive", "120 Villas", "1.5km de Praia Privada"],
    seoTitle: "Emerald Maldives Resort & Spa - 5★ All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas membro Leading Hotels of the World no Atol Raa com sistema Deluxe All Inclusive, 120 villas, 1.5km de praia privada e gastronomia diversificada.",
    about: "Emerald Maldives Resort & Spa é um resort de luxo 5 estrelas, membro do Leading Hotels of the World, situado na ilha privada de Fasmendhoo, no Atol Raa, cercado por 1,5 km de praia de areia branca, vegetação tropical e lagoas azul-turquesa. São 120 villas (praia e sobre a água, todas com acabamento refinado e atmosfera contemporânea), ideal para casais, famílias e grupos. O resort é referência pelo sistema Deluxe All Inclusive, excelência de serviço, gastronomia diversificada, kids club e wellness. Aberto desde 2019, recebe hóspedes via hidroavião (40 min de Malé) ou voo doméstico (30 min Ifuru + 15 min lancha).",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído (Deluxe All Inclusive):

- Café da manhã no restaurante Aqua
- Almoço nos restaurantes Aqua ou Beach Club Grill
- Jantar nos restaurantes Aqua, Beach Club Grill (menus completos) e jantar por reserva em Amazonico e Asian (menus selecionados incluídos)
- Seleção de bebidas alcoólicas e não alcoólicas (refeições e bares, conforme política do hotel)
- Petiscos e bebidas incluídos durante o dia no Sunset Pool Café
- Minibar com reposição diária de bebidas e cervejas
- Drink de boas-vindas
- Equipamento de snorkeling, uso de caiaque e esportes náuticos não motorizados
- Snorkeling guiado (20 min, 2x por semana)
- Wi-Fi cortesia
- Toalhas, guarda-sóis e amenities de praia
- Kids Club com atividades diárias
- Gym, beach volley, tênis, campo de futebol, wellness center
- Entretenimento temático ocasional`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling (guiado 2x por semana e por conta própria)
- Caiaque, stand-up paddle, pedalinho
- Quadra de tênis, futebol, vôlei de praia, jogos de mesa
- Academia completa
- Sessões de wellness e yoga (programação variável)
- Piscina infinita principal
- Kids Club "Dolphin Club" com supervisão, atividades lúdicas e educativas

Atividades com Custo Extra:

- Esportes motorizados: jet ski, seabob, wakeboard, parasailing
- Mergulho (PADI 5*), batismo, certificação, saídas guiadas
- Pesca (tradicional, esportiva, noturna)
- Cruzeiros pôr do sol, passeio romântico, observação de golfinhos
- Massagens e tratamentos no Emerald Spa (pavilhão balinês, salas duplas, hidromassagem, banho turco)
- Excursões privadas para ilhas locais, bancos de areia e piqueniques exclusivos
- Aula de culinária

Restaurantes Principais:

- Aqua: Internacional, buffet e à la carte, café da manhã principal e almoço/jantar
- Beach Club Grill: Mediterrâneo, grelhados, pizza, massas, aberto para almoço/jantar
- Amazonico: Gastronomia sul-americana (reserva para jantar)
- Asian Restaurant: Sushi, teppanyaki, pan-asiático (reserva e menu especial incluídos no pacote)

Bares:

- Sunset Pool Café: Petiscos e drinks o dia todo
- Sunrise Café e Beach Club Bar: Coquetéis, vinhos, bebidas premium

Experiências Gastronômicas Especiais:

- Jantares privativos na praia
- Degustação de vinhos harmonizados
- Room service 24h disponível (pagamento à parte)`
      },
      {
        id: "accommodations",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Water Villa (168 m²): sobre lagoa, acesso ao mar, deck, banheira com vista mar, piscina privativa em categorias superiores
- Superior/Deluxe Water Villa: maior privacidade, deck e piscina mais amplos
- Presidential Villa: duas suítes master separadas, amplo living, piscina, serviço de mordomo

Comodidades em Todas as Villas:

- Camas king-size
- TV satélite
- Ar-condicionado e ventilador de teto
- Minibar com reposição diária
- Seleção de chás/cafés
- Wi-Fi premium
- Amenities de luxo
- Menu de travesseiros
- Área externa privativa
- Room service 24h

Política de Crianças:

- Até 12 anos: estadia e refeições grátis acompanhados pelos pais (máx. 2 crianças por villa)
- Kids Club gratuito (3-12 anos)
- Amenities infantis, camas extras, cadeiras, menu infantil
- Serviço de babá sob consulta (custo extra)`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com Deluxe All Inclusive"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com Deluxe All Inclusive"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Crianças até 12 anos: estadia e refeições gratuitas (máximo 2 crianças por villa). Sistema Deluxe All Inclusive inclui refeições e bebidas selecionadas conforme política do hotel."
    },
    faqs: [
      {
        question: "O que é o sistema Deluxe All Inclusive?",
        answer: "O sistema Deluxe All Inclusive do Emerald Maldives inclui todas as refeições nos restaurantes (café da manhã, almoço e jantar), bebidas alcoólicas e não alcoólicas selecionadas, minibar com reposição diária, snorkeling guiado, esportes náuticos não motorizados, Kids Club e entretenimento."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote All Inclusive inclui café da manhã, almoço e jantar nos restaurantes, bebidas selecionadas, minibar diário, equipamento de snorkeling, esportes náuticos, Wi-Fi, Kids Club, academia, quadras esportivas e entretenimento."
      },
      {
        question: "Como é o Kids Club?",
        answer: "O Dolphin Club é gratuito para crianças de 3-12 anos e oferece supervisão profissional com atividades lúdicas e educativas diárias. Inclui amenities infantis, menu kids e programação variada."
      },
      {
        question: "Quais restaurantes estão incluídos no All Inclusive?",
        answer: "O All Inclusive inclui refeições completas no Aqua (internacional) e Beach Club Grill (mediterrâneo). Também inclui jantares nos restaurantes Amazonico (sul-americano) e Asian (pan-asiático) mediante reserva e menu selecionado."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças até 12 anos se hospedam gratuitamente com estadia e refeições inclusas (máximo 2 por villa). O resort oferece Kids Club gratuito (3-12 anos), menu infantil, amenities kids e serviço de babá sob consulta."
      },
      {
        question: "O resort oferece experiências de spa e wellness?",
        answer: "Sim, o Emerald Spa possui pavilhão balinês com salas duplas, hidromassagem e banho turco. Também oferece sessões de wellness e yoga (incluídas) e tratamentos de spa (custo extra)."
      },
      {
        question: "O resort oferece experiências de mergulho?",
        answer: "Sim, o resort possui centro PADI 5 estrelas oferecendo batismo, certificação e saídas guiadas. Snorkeling guiado (20 minutos, 2x por semana) está incluído no All Inclusive."
      },
      {
        question: "Quantas villas o resort possui?",
        answer: "O resort possui 120 villas distribuídas entre praia e sobre a água, todas com acabamento refinado e atmosfera contemporânea. As categorias superiores incluem piscina privativa."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Emerald Maldives Resort & Spa - Vista aérea da ilha privada"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water villas sobre a lagoa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante principal com vista mar"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Piscina infinita principal"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Emerald Spa e tratamentos wellness"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling e vida marinha"
      }
    ]
  },
  "emerald-faarufushi": {
    slug: "emerald-faarufushi",
    name: "Emerald Faarufushi Resort & Spa",
    rating: 5,
    location: "Ilha Faarufushi, Atol Raa",
    transferTime: "Hidroavião 50min",
    heroImage: heroImage,
    heroTitle: "Emerald Faarufushi Resort & Spa",
    heroSubtitle: "Resort 5 estrelas membro Leading Hotels com barefoot luxury e Deluxe All Inclusive",
    heroHighlights: ["Deluxe All Inclusive", "80 Villas", "1.2km de Praia"],
    seoTitle: "Emerald Faarufushi Resort & Spa - 5★ All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas membro Leading Hotels of the World no Atol Raa com sistema Deluxe All Inclusive, 80 villas, 1.2km de praia e lagoa de 100 hectares com house reef.",
    about: "Emerald Faarufushi Resort & Spa é um resort 5 estrelas, membro do The Leading Hotels of the World, localizado na ilha privada de Faarufushi, Atol Raa, norte das Maldivas. O resort abriu em 2019 e está a aproximadamente 50 minutos de hidroavião de Malé. São 80 villas (38 na praia, 42 sobre a água), arquitetura minimalista e moderna, serviço requintado, atmosfera de barefoot luxury e integração total com a natureza – praia de 1,2 km, ilha de 7 hectares, lagoa de 100 hectares com excelente house reef.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído (Deluxe All Inclusive):

- Café da manhã no Aqua Restaurant
- Almoço no Aqua Restaurant e Beach Club Grill
- Jantar nos restaurantes Aqua Restaurant, Carnivorous Restaurant, Le Asiatique Restaurant & Teppanyaki Grill e The Mediterraneo Restaurant
- Snacks, petiscos e bebidas no Sunset Pool Café e bares
- Bebidas alcoólicas e não alcoólicas selecionadas (vinhos, cervejas, drinks, sucos, refrigerantes, cafés, chás)
- Minibar com reposição diária (cerveja, refrigerante, água)
- Welcome drink
- Equipamentos de snorkeling, caiaque, pedalinho, SUP
- Snorkeling guiado em grupo (30min, 2x/semana, sujeito a condições de mar)
- Academia Technogym
- Quadras de tênis e padel (durante o dia)
- Dolphin Kids Club (3-12 anos)
- Wi-Fi em toda a ilha
- Guarda-sóis, toalhas e amenities na praia/piscina
- Atividades esportivas: vôlei de praia, futebol de areia
- Bicicletas para uso dos hóspedes
- Arrumação diária, serviço noturno
- Entretenimento noturno e eventos temáticos`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling, caiaque, SUP, pedalinho
- Snorkeling guiado em grupo (30min, 2x por semana)
- Academia, padel, tênis, vôlei de praia
- Kids Club para 3-12 anos (atividades criativas, oficinas, jogos)
- Beach football, board games
- Entretenimento à noite (shows culturais, música ao vivo)

Atividades com Custo Extra:

- Esportes motorizados: jet ski, seabob, wakeboard, parasail
- Mergulho PADI (batismo, cursos, saídas)
- Pesca esportiva, pesca ao pôr do sol
- Cruzeiros de observação de golfinhos, sunset cruise
- Spa: Emerald Spa (massagens balinesas, tratamentos, pavilhão balinês, banho turco)
- Excursões privadas para ilhas, bancos de areia, piqueniques exclusivos
- Aula de culinária gourmet

Restaurantes Principais:

- Aqua Restaurant: Internacional (buffet, all meals)
- Beach Club Grill: Mediterrâneo, almoço e jantar (grelhados, pizzas, saladas)
- Carnivorous Restaurant: Churrascaria internacional (jantar)
- Le Asiatique Restaurant & Teppanyaki Grill: Cozinha asiática, japonesa, teppanyaki (jantar)
- The Mediterraneo Restaurant: Mediterrâneo sobre a água (jantar)

Bares:

- Sunset Pool Café: Cocktails, petiscos, música ao pôr do sol
- Bares de apoio à praia, piscina e restaurante

Experiências Gastronômicas Especiais:

- Jantar privativo na praia
- Degustação harmonizada de vinhos
- Room service (fora all inclusive, taxa extra)`
      },
      {
        id: "accommodations",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Ocean Villa com Piscina (172m²): deck sobre a lagoa, piscina privativa, acesso ao mar
- Ocean Suite com Piscina: categoria superior, espaços generosos, vista privilegiada do pôr do sol

Comodidades em Todas as Villas:

- Cama king-size
- TV
- Minibar com reposição diária
- Amenities premium
- Máquina Nespresso
- Menu de travesseiros
- Wi-Fi
- Arrumação 2x/dia

Política de Crianças:

- Até 12 anos: estadia e refeições grátis com pais (máx. 2 por villa)
- Kids Club gratuito (3-12 anos)
- Babá sob consulta (extra)
- Amenities infants, menu kids, cama extra grátis`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Ocean Villa com Deluxe All Inclusive"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Ocean Villa com Deluxe All Inclusive"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Crianças até 12 anos: estadia e refeições gratuitas (máximo 2 crianças por villa). Sistema Deluxe All Inclusive inclui todas as refeições e bebidas selecionadas nos restaurantes e bares."
    },
    faqs: [
      {
        question: "O que é o sistema Deluxe All Inclusive?",
        answer: "O sistema Deluxe All Inclusive inclui todas as refeições (café da manhã, almoço e jantar) nos 5 restaurantes, bebidas alcoólicas e não alcoólicas selecionadas, minibar com reposição diária, snorkeling guiado, esportes náuticos não motorizados, Kids Club e entretenimento."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote All Inclusive inclui todas as refeições nos restaurantes, bebidas selecionadas, minibar diário, equipamentos de snorkeling e esportes náuticos, academia, tênis, padel, Kids Club (3-12 anos), Wi-Fi e entretenimento."
      },
      {
        question: "Como é o Kids Club?",
        answer: "O Dolphin Kids Club é gratuito para crianças de 3-12 anos e oferece atividades criativas, oficinas, jogos e programação diária. Amenities infantis e menu kids estão disponíveis."
      },
      {
        question: "Quais restaurantes estão incluídos no All Inclusive?",
        answer: "Todos os 5 restaurantes estão incluídos: Aqua Restaurant (internacional), Beach Club Grill (mediterrâneo), Carnivorous Restaurant (churrascaria), Le Asiatique (asiático/japonês) e The Mediterraneo (mediterrâneo sobre a água)."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças até 12 anos se hospedam gratuitamente com estadia e refeições inclusas (máximo 2 por villa). O resort oferece Kids Club gratuito (3-12 anos), menu infantil e serviço de babá sob consulta."
      },
      {
        question: "Como é o house reef?",
        answer: "O resort possui excelente house reef em uma lagoa de 100 hectares, ideal para snorkeling. Snorkeling guiado em grupo (30min, 2x por semana) está incluído no All Inclusive."
      },
      {
        question: "O resort oferece experiências de spa?",
        answer: "Sim, o Emerald Spa oferece massagens balinesas, tratamentos diversos, pavilhão balinês e banho turco. Tratamentos de spa têm custo adicional."
      },
      {
        question: "Quantas villas o resort possui?",
        answer: "O resort possui 80 villas (38 na praia, 42 sobre a água) com arquitetura minimalista moderna. As villas sobre a água incluem piscina privativa e acesso direto ao mar."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Emerald Faarufushi Resort & Spa - Vista aérea da ilha"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean villas com piscina sobre a lagoa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Praia de 1.2km de areia branca"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Emerald Spa pavilhão balinês"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "House reef e vida marinha"
      }
    ]
  },
  "fairmont-maldives": {
    slug: "fairmont-maldives",
    name: "Fairmont Maldives Sirru Fen Fushi",
    rating: 5,
    location: "Ilha Sirru Fen Fushi, Atol Shaviyani",
    transferTime: "Hidroavião 50min ou voo doméstico + lancha",
    heroImage: heroImage,
    heroTitle: "Fairmont Maldives Sirru Fen Fushi",
    heroSubtitle: "Luxo sustentável com serviço de mordomo 24h e experiências ecológicas exclusivas",
    heroHighlights: ["Butler 24h", "Luxo Sustentável", "Spa Arufen Premiado"],
    seoTitle: "Fairmont Maldives Sirru Fen Fushi - Luxo Sustentável | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas com foco em sustentabilidade, serviço de mordomo 24h em todas as villas, spa premiado Arufen, Kids/Teen Club e experiências ecológicas exclusivas.",
    about: "Fairmont Maldives Sirru Fen Fushi é referência de luxo sustentável e privacidade nas Maldivas, ideal para casais, famílias e amantes de experiências ecológicas e exclusivas, com serviços personalizados, spa premiado, Kids/Teen Club, praias e house reef excepcionais e opções flexíveis de refeição e acomodação, além de experiências gastronômicas e wellness de alto padrão.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet internacional
- Serviço de mordomo 24h para todas as villas
- Welcome drink, frutas frescas, amenities premium na chegada
- Wi-Fi gratuito em todo o resort
- Bicicletas para explorar a ilha
- Equipamentos de snorkeling, caiaque, stand-up paddle
- Uso de academia, quadra de tênis, beach volley
- Kids Club e Teen Club supervisionados
- Sauna, jacuzzi e piscina olímpica no Arufen Spa
- Cabanas e daybeds gratuitas na praia e piscina
- Arrumação diária e serviço noturno
- Cinema ao ar livre na selva/jardim
- Programa ecológico: plantio de coqueiros, coral restoration, liberação de tartarugas
- Programas especiais de wellness e fitness (yoga, pilates, anti-gravity yoga)
- Entretenimento variado

Estadias longas/lua de mel:

- Decoração especial, amenidade de boas-vindas, jantar privativo personalizado, massagens no Arufen Spa (sob consulta/disponibilidade)`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `**Atividades gratuitas:**

- Snorkeling (house reef, coral garden)
- Caiaque, SUP, pedalinho
- Academia 24h, quadras de tênis, beach volley
- Bicicletas, academia ao ar livre
- Yoga, pilates, meditação, anti-gravity yoga
- Cinema na selva
- Kids/Teen Club: oficinas criativas, splash, parque
- Piscinas: 4, piscina principal de 200m (olímpica), infantil
- Caminhadas ecológicas, oficinas de sustentabilidade, atividades ecológicas

**Atividades com custo extra:**

- Esportes motorizados: jet ski, parasail, seabob, wakeboard, tubing
- Mergulho (PADI): cursos, batismos, mergulho noturno, snorkel guiado
- Pesca, sunset cruise, piqueniques privativos, passeios de barco tradicional
- Spa Arufen: massagens balinesas, ayurvédicas, hidroterapia, sauna, Jacuzzi olímpica, IV drip wellness, tratamentos especiais
- Coral restoration, plantio de coqueiros, turtle release experiences
- Diversos workshops gourmet, experiências chef's table
- Pet sitter e babysitting

**Restaurantes & Bares:**

- Azure: internacional/contemporâneo, vista mar
- Kata: asiático moderno (sushi, robatayaki)
- Raha Market: principal (buffet internacional, café e jantar), noites temáticas
- Onu Onu Bar: bar bamboo ao ar livre (cocktails, pairoteca), carta de vinhos e coquetéis
- In Villa Dining 24h

**Experiências gastronômicas especiais:**

- Jantar privativo na praia/tenda na selva
- Degustação de vinhos privativa
- BBQ privativo, piquenique em banco de areia
- Cinema gastronômico noturno`
      },
      {
        id: "accommodations",
        title: "Acomodações",
        type: "text",
        content: `**Villas sobre a água:**

- Water Sunrise/Sunset Villa: 164m², deck amplo, piscina privativa, acesso direto à lagoa
- Grand Water Sunset Villa: espaço extra/família, piscina privativa

**Todas as villas incluem:**

Cama king, amenidades de luxo, smart TV, minibar, máquina de café, banheira, jardim privativo, Wi-Fi premium, bicicletas, serviço de mordomo 24h, menu de travesseiros, amenities ecológicas

**Política de crianças:**

- Até 12 anos: estadia, refeições e transfers gratuitos com pais (máx. 2 por villa)
- Kids/Teen Club gratuito (4-17 anos)
- Menu kids, cama extra, amenities baby
- Babysitter sob consulta, pet sitter disponível`
      }
    ],
    accommodations: {
      title: "Acomodações",
      description: "Todas as villas incluem serviço de mordomo 24h, piscina privativa e amenities de luxo sustentáveis",
      types: [
        {
          name: "Water Sunrise/Sunset Villa",
          size: "164m²",
          beds: "1 cama king-size",
          maxOccupancy: "3 adultos ou 2 adultos + 2 crianças",
          features: [
            "Piscina privativa com deck amplo",
            "Acesso direto à lagoa",
            "Vista para o nascer ou pôr do sol",
            "Serviço de mordomo 24h",
            "Smart TV e sistema de som",
            "Minibar e máquina de café Nespresso",
            "Banheira com vista",
            "Jardim privativo",
            "Bicicletas inclusas"
          ]
        },
        {
          name: "Grand Water Sunset Villa",
          size: "200m²+",
          beds: "1 cama king-size",
          maxOccupancy: "4 adultos ou 2 adultos + 3 crianças",
          features: [
            "Espaço extra ideal para famílias",
            "Piscina privativa ampliada",
            "Vista privilegiada do pôr do sol",
            "Serviço de mordomo 24h dedicado",
            "Área de estar expandida",
            "Deck com área de jantar externa",
            "Amenities premium ecológicas",
            "Menu de travesseiros",
            "Acesso direto ao house reef"
          ]
        }
      ]
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio - Outubro",
          priceText: "A partir de USD 1.200/noite",
          priceSubtext: "Base dupla com café da manhã e mordomo"
        },
        {
          name: "Alta Temporada",
          period: "Novembro - Abril",
          priceText: "A partir de USD 1.600/noite",
          priceSubtext: "Base dupla com café da manhã e mordomo"
        },
        {
          name: "Peak Season",
          period: "Dezembro - Janeiro",
          priceText: "A partir de USD 2.200/noite",
          priceSubtext: "Base dupla com café da manhã e mordomo"
        }
      ],
      paymentTerms: [
        "Sinal de 30% na reserva",
        "Saldo restante até 45 dias antes do check-in",
        "Pagamento via PIX, transferência ou cartão de crédito",
        "Parcelamento disponível (consultar condições)"
      ],
      cancellationPolicy: "Cancelamento gratuito até 45 dias antes do check-in. Entre 44-30 dias: retenção de 50%. Menos de 30 dias: retenção de 100%.",
      notes: "Valores sujeitos a alteração. Taxas governamentais não inclusas. Transfers via hidroavião (50min) ou voo doméstico + lancha. Suplemento para lua de mel e estadias especiais sob consulta."
    },
    faqs: [
      {
        question: "O que torna o Fairmont Maldives especial?",
        answer: "O resort é referência em luxo sustentável, oferecendo serviço de mordomo 24h em todas as villas, spa premiado Arufen com piscina olímpica, programas ecológicos exclusivos (plantio de corais, liberação de tartarugas) e experiências wellness de alto padrão, incluindo anti-gravity yoga."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet internacional, serviço de mordomo 24h, Wi-Fi gratuito, bicicletas, equipamentos de snorkeling e esportes náuticos, academia, quadras de tênis, Kids/Teen Club, sauna, jacuzzi, piscina olímpica, cinema na selva e programas ecológicos."
      },
      {
        question: "Como funciona o serviço de mordomo?",
        answer: "Todas as villas incluem serviço de mordomo 24h sem custo adicional. O mordomo cuida de todos os detalhes da estadia, desde arrumação até organização de experiências personalizadas, reservas em restaurantes e arranjos especiais."
      },
      {
        question: "Quais experiências ecológicas o resort oferece?",
        answer: "O resort oferece plantio de coqueiros, coral restoration, liberação de tartarugas, caminhadas ecológicas e oficinas de sustentabilidade. Estas experiências permitem aos hóspedes contribuir ativamente para a preservação ambiental."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, o resort é ideal para famílias. Crianças até 12 anos se hospedam gratuitamente com estadia, refeições e transfers inclusos (máximo 2 por villa). Oferece Kids Club gratuito (4-12 anos), Teen Club (13-17 anos), menu infantil e babysitter sob consulta."
      },
      {
        question: "Como é o Arufen Spa?",
        answer: "O Arufen Spa é premiado e oferece massagens balinesas, ayurvédicas, hidroterapia, IV drip wellness, sauna, jacuzzi olímpica e piscina de 200m. Dispõe de tratamentos especiais e experiências wellness personalizadas. Sauna, jacuzzi e piscina são gratuitos; tratamentos têm custo adicional."
      },
      {
        question: "Quantas piscinas o resort possui?",
        answer: "O resort possui 4 piscinas, incluindo a impressionante piscina principal de 200 metros (olímpica), piscina infantil e piscinas privativas em todas as villas sobre a água."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece Azure (internacional/contemporâneo), Kata (asiático moderno com sushi e robatayaki), Raha Market (buffet internacional) e Onu Onu Bar (cocktails e vinhos). In Villa Dining 24h também está disponível."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Fairmont Maldives Sirru Fen Fushi - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water Villa com piscina privativa e deck amplo"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Praia de areia branca e águas cristalinas"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Arufen Spa pavilhão com piscina olímpica"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante Kata asiático moderno"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas privativas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "House reef e coral restoration"
      },
      {
        src: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=2670",
        alt: "Cinema na selva ao ar livre"
      }
    ]
  }
};
