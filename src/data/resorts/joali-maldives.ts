import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

export const joaliMaldives: ResortData = {
  slug: "joali-maldives",
  name: "JOALI Maldives",
  rating: 6,
  location: "Ilha Muravandhoo, Atol de Raa",
  transferTime: "Hidroavião 40min ou voo doméstico 35min + lancha 15min",
  heroImage,
  heroTitle: "JOALI Maldives",
  heroSubtitle: "Resort de luxo 6 estrelas com foco em arte contemporânea e experiências inovadoras",
  heroHighlights: ["Arte & Design", "73 Villas Privativas", "Spa Forbes 5-Star"],
  seoTitle: "JOALI Maldives - Resort 6★ Arte e Luxo | Follow Me Viagens",
  seoDescription: "Resort de luxo 6 estrelas no Atol de Raa com 73 villas privativas, arte contemporânea, spa Forbes 5-Star, 6 restaurantes de alto padrão e programas de sustentabilidade. #1 Ásia T+L 2025.",
  about: "JOALI Maldives é um resort de luxo 6 estrelas situado na Ilha Muravandhoo, Atol de Raa, no extremo norte das Maldivas, a 171 km de Malé. O acesso é feito por hidroavião (40 min, recomendado) ou voo doméstico até Ifuru (35 min) + lancha rápida (15 min). O JOALI Maldives é ideal para quem busca luxo, arte, wellness, gastronomia e experiências inovadoras, em cenário paradisíaco e sustentável das Maldivas.",
  sections: [
    {
      id: "activities",
      title: "Atividades, Wellness e Sustentabilidade",
      type: "text",
      content: `Wellness e Fitness:

- Spa premiado (cinco estrelas Forbes)
- Pavilhão de yoga
- Academia Technogym
- Quadra de tênis
- Watersports center completo
- Yoga, meditação, wellness programs
- Fitness e personal trainer

Arte e Cultura:

- Estúdio de arte interativo
- Boutique Maison de Joali
- Workshops de arte
- Biblioteca
- Cinema open-air
- Eventos musicais e temáticos

Para Famílias:

- Kids Club completo
- Casa na árvore
- Playground
- Experiências de arte para crianças

Atividades Aquáticas:

- Snorkeling guiado
- Mergulho PADI
- Caiaque, SUP, windsurf
- Pesca
- Centro marinho com programas de restauração de corais

Sustentabilidade:

- Programas de restauração de corais
- Mínima intervenção na vegetação
- Banimento de plásticos descartáveis
- Trilhas ecológicas
- Atividades culturais focadas em preservação`
    },
    {
      id: "dining",
      title: "Gastronomia e Bares",
      type: "text",
      content: `Restaurantes:

- Saoke: japonês e nipo-peruano projetado sobre o mar, arquitetura Noriyoshi Muramatsu
- Bellinis: italiano do chef Michelin Theodor Falser
- Vandhoo: internacional, café da manhã e pratos globais
- Tuh'u: mediterrâneo ao ar livre
- Mura Bar: drinks, snacks, pratos descontraídos, sunsets
- La Joie: sorveteria e sobremesas

Experiências Gastronômicas Especiais:

- Jantares privativos na villa
- Sandbank dining experiences
- Degustações de vinhos
- Floating breakfast
- Cardápios kids e menus sazonais
- Cozinha saudável personalizada`
    },
    {
      id: "accommodations-text",
      title: "Acomodação",
      type: "text",
      content: `73 Villas Ultra Privativas:

- Vilas na praia ou sobre a água
- Todas com piscina privativa
- Design contemporâneo com foco em arte
- Alta tecnologia integrada
- Sensação "art gallery" em cada villa
- Serviço de mordomo Jadugar personalizado
- Amenities premium e sustentáveis
- Privacidade total
- Arrumação 2x ao dia
- Room service de alto padrão`
    },
    {
      id: "families",
      title: "Diferenciais, Famílias e Casais",
      type: "text",
      content: `Diferenciais do Resort:

- Destaque em arte contemporânea e design
- Sensação "art gallery" única nas Maldivas
- Spa Forbes 5-Star
- Premiações recentes: #1 Ásia e Top 10 Mundial (T+L 2025)
- Centro marinho com programas de restauração de corais
- Práticas sustentáveis exemplares

Para Famílias:

- Kids até 12 anos: estadia gratuita com pais (máx. 2/villa em promoções)
- Kids Club completo com atividades criativas
- Menu infantil em todos os restaurantes
- Experiências de arte para crianças
- Casa na árvore e playground
- Babá disponível (custo extra)
- Villas família com espaço amplo
- Amenidades kids sob demanda

Para Casais:

- Privacidade excepcional em todas as villas
- Amenidades especiais para honeymoon
- Programas wellness para casais
- Experiências gastronômicas românticas
- Jantares privativos na praia ou sandbank
- Spa treatments para casais
- Serviço altamente personalizado com mordomo Jadugar`
    }
  ],
  accommodations: {
    title: "Acomodações de Luxo",
    description: "73 villas ultra privativas distribuídas entre praia e sobre a água, todas com piscina privativa, design contemporâneo focado em arte e serviço de mordomo Jadugar.",
    types: [
      {
        name: "Beach Villa",
        size: "Consultar",
        beds: "King-size",
        maxOccupancy: "2 adultos + 2 crianças",
        features: [
          "Piscina privativa",
          "Design contemporâneo com arte",
          "Acesso direto à praia",
          "Alta tecnologia integrada",
          "Sensação 'art gallery'",
          "Serviço de mordomo Jadugar",
          "Amenities premium sustentáveis",
          "Área de estar espaçosa",
          "Banheiro luxuoso",
          "Terraço privativo",
          "Arrumação 2x ao dia",
          "Room service premium"
        ]
      },
      {
        name: "Water Villa",
        size: "Consultar",
        beds: "King-size",
        maxOccupancy: "2 adultos + 2 crianças",
        features: [
          "Piscina privativa sobre a água",
          "Design contemporâneo com arte",
          "Acesso direto ao mar",
          "Alta tecnologia integrada",
          "Sensação 'art gallery'",
          "Serviço de mordomo Jadugar",
          "Amenities premium sustentáveis",
          "Deck amplo sobre a água",
          "Banheiro com vista panorâmica",
          "Privacidade total",
          "Arrumação 2x ao dia",
          "Room service premium"
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
        priceSubtext: "7 noites com café da manhã"
      },
      {
        name: "Alta Temporada",
        period: "Novembro a Abril",
        priceText: "Sob consulta",
        priceSubtext: "7 noites com café da manhã"
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
      question: "O que torna o JOALI Maldives especial?",
      answer: "JOALI Maldives é único por seu foco em arte contemporânea, criando uma sensação de 'art gallery' em todo o resort. Possui 73 villas ultra privativas com piscina, spa Forbes 5-Star, 6 restaurantes de alto padrão incluindo o Saoke sobre o mar e Bellinis do chef Michelin Theodor Falser. Foi premiado como #1 na Ásia e Top 10 Mundial pela T+L 2025."
    },
    {
      question: "Como é o acesso ao resort?",
      answer: "O acesso é feito por hidroavião (40 minutos de Malé, recomendado) ou voo doméstico até Ifuru (35 minutos) seguido de lancha rápida (15 minutos). O resort está localizado na Ilha Muravandhoo, Atol de Raa, a 171 km de Malé."
    },
    {
      question: "Quais restaurantes o resort oferece?",
      answer: "O resort possui 6 opções gastronômicas: Saoke (japonês e nipo-peruano sobre o mar), Bellinis (italiano do chef Michelin Theodor Falser), Vandhoo (internacional), Tuh'u (mediterrâneo ao ar livre), Mura Bar (drinks e sunsets) e La Joie (sorveteria e sobremesas). Oferece também experiências privativas como jantares na villa, sandbank dining e floating breakfast."
    },
    {
      question: "O resort é adequado para famílias?",
      answer: "Sim, é ideal para famílias. Possui Kids Club completo, casa na árvore, playground, menu infantil em todos os restaurantes, experiências de arte para crianças e villas família espaçosas. Até 2 crianças de até 12 anos podem ficar gratuitamente com os pais (em promoções). Babá disponível com custo extra."
    },
    {
      question: "O que é o spa do JOALI Maldives?",
      answer: "O resort possui um spa premiado com cinco estrelas Forbes, oferecendo tratamentos de altíssimo padrão, wellness programs personalizados, yoga, meditação, academia Technogym e personal trainer. É referência em wellness e relaxamento nas Maldivas."
    },
    {
      question: "O que é o serviço de mordomo Jadugar?",
      answer: "Jadugar é o serviço de mordomo personalizado disponível em todas as villas. O mordomo auxilia com todas as necessidades durante a estadia, desde reservas e experiências especiais até cuidados personalizados, garantindo uma experiência de alto padrão."
    },
    {
      question: "Quais atividades aquáticas estão disponíveis?",
      answer: "O resort oferece snorkeling guiado, mergulho PADI, caiaque, SUP, windsurf e pesca. Possui um centro marinho com programas de restauração de corais e watersports center completo. Todas as atividades são conduzidas com foco em sustentabilidade."
    },
    {
      question: "O resort é sustentável?",
      answer: "Sim, o JOALI Maldives possui práticas sustentáveis exemplares incluindo programas de restauração de corais, mínima intervenção na vegetação nativa, banimento total de plásticos descartáveis, trilhas ecológicas e atividades culturais focadas em preservação ambiental."
    },
    {
      question: "O resort é adequado para lua de mel?",
      answer: "Sim, é perfeito para lua de mel. Oferece privacidade excepcional em todas as villas, amenidades especiais para honeymoon, programas wellness para casais, experiências gastronômicas românticas, jantares privativos na praia ou sandbank, spa treatments para casais e serviço altamente personalizado."
    }
  ],
  images: [
    {
      src: heroImage,
      alt: "JOALI Maldives - Vista aérea do resort"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
      alt: "Beach Villa - design contemporâneo com arte"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
      alt: "Water Villa - sobre a água com piscina privativa"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
      alt: "Spa Forbes 5-Star - tratamentos de luxo"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
      alt: "Vandhoo Restaurant - café da manhã internacional"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
      alt: "Saoke Restaurant - japonês sobre o mar"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
      alt: "Kids Club - casa na árvore e playground"
    },
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
      alt: "Arte contemporânea - galeria interativa"
    },
    {
      src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
      alt: "Centro marinho - restauração de corais"
    }
  ]
};

export default joaliMaldives;
