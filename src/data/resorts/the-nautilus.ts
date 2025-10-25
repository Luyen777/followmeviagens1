import type { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

const theNautilus: ResortData = {
  slug: "the-nautilus",
  name: "The Nautilus Maldives",
  rating: 6,
  location: "Thiladhoo, Baa Atoll - Reserva da Biosfera UNESCO",
  transferTime: "40 minutos de hidroavião",
  heroImage: heroImage,
  heroTitle: "The Nautilus Maldives",
  heroSubtitle: "Boutique resort ultra-luxuoso com apenas 26 casas, House Master exclusivo e experiências sem horários",
  heroHighlights: ["26 Casas Exclusivas", "House Master 24h", "Bohemian Luxury"],
  seoTitle: "The Nautilus Maldives - Boutique Resort 6★ Ultra-Luxo | Follow Me Viagens",
  seoDescription: "Boutique resort ultra-luxuoso com apenas 26 casas na ilha de Thiladhoo, Baa Atoll UNESCO. House Master exclusivo 24h, atmosfera boêmia-chique e experiências personalizadas fora do tempo.",
  about: "The Nautilus Maldives é um boutique resort de luxo, situado na ilha de Thiladhoo, Baa Atoll, uma Reserva da Biosfera da UNESCO. O acesso é feito via hidroavião, aproximadamente 40 minutos a partir de Malé. Considerado um dos resorts mais exclusivos das Maldivas, tem apenas 26 casas e residências (beach houses e ocean houses), todas com piscina privativa e atendimento dedicado do House Master (mordomo 24h). O conceito diferencia-se pelos serviços absolutamente personalizados, privacidade máxima e atmosfera boêmia-chique, projetada para proporcionar experiências fora do tempo, sem restrição rígida de horários e completamente sob medida para o hóspede.",
  sections: [
    {
      id: "inclusions",
      title: "Inclusões do Pacote",
      type: "text",
      content: `Incluído:

- Café da manhã à la carte personalizado incluído, servido em qualquer lugar da ilha, a qualquer hora
- House Master (butler) exclusivo e atendimento de concierge completo
- Piscina privativa em todas as casas e residências
- Wi-Fi premium gratuito em toda a ilha
- Minibar abastecido (reposição diária)
- Atividades aquáticas não motorizadas: caiaque, stand-up paddle, snorkeling, windsurf, hobie cat
- Uso de bicicletas privativas
- Acesso ao fitness center, yoga pavilion e programação diária de wellness/yoga
- Clube infantil e amenities kids sob consulta
- Equipamentos de snorkeling gratuitos para uso na house reef
- Arrumação e serviço noturno diário
- Welcome amenities e amenities premium
- Traslado de buggy por toda a ilha
- Serviço de lavanderia (quantidade diária gratuita)
- Lounge de chegada/partida
- Room service 24h sem taxas extras
- Check-in e check-out flexíveis sob disponibilidade`
    },
    {
      id: "gastronomy",
      title: "Atividades e Gastronomia",
      type: "text",
      content: `Atividades:

- Snorkeling e mergulho com acesso ao house reef e excursões para manta rays, tartarugas, tubarões-baleia no Baa Atoll
- Centro PADI para mergulho (batismos/cursos/saídas guiadas)
- Solasta Spa (sobre a água), com tratamentos personalizados, massagens, terapias holísticas, rituais de sono e wellness
- Aulas de yoga, meditação e workshops de bem-estar
- Esportes aquáticos não motorizados: caiaque, stand-up paddle, windsurf
- Passeios de iate ou dhoni privativo, pesca, sandbank picnics, sunset cruise
- Cine privativo sob as estrelas, piqueniques, aulas de culinária, degustações de vinho
- Kids Club, espaço teens, jogos de tabuleiro, programação educativa
- Observação de estrelas, trilhas ecológicas, workshops de conservação marinha com biólogo residente

Restaurantes e Gastronomia:

4 restaurantes com conceito "unscripted dining" (personalização total do menu, horário e local do jantar) sem dress code ou restrição de horário:

- Zeytoun: gourmet mediterrâneo/oriente médio sobre o mar
- Thyme: internacional
- Ocaso: latino-asiático e grill à beira-mar
- Naiboli Bar: piscina/bar a qualquer hora

Todos os restaurantes são à la carte com menu personalizado. Experiências disponíveis:

- Room service 24h
- Floating breakfast
- Jantares privativos
- Experiências na villa e praia`
    },
    {
      id: "accommodations-text",
      title: "Acomodação",
      type: "text",
      content: `26 Casas e Residências Exclusivas:

Todas as casas (beach houses e ocean houses) possuem piscina privativa, House Master exclusivo e design inspirado na concha nautilus.

Ocean Houses - Bangalôs sobre as águas:

- Piscina infinita privativa
- Deck amplo
- Sala e quarto integrados em design circular (inspirado na concha nautilus)
- Mesa de refeições ao ar livre
- Solarium e acesso direto à lagoa
- Banheira de imersão com vista para o mar
- Amenities de luxo
- Minibar abastecido
- Serviço de mordomo e bikes privativas

Comodidades em Todas as Casas:

- Projetadas para total isolamento
- Café da manhã/floating breakfast na villa
- Refeições privativas na própria casa
- Kids até 12 anos grátis
- Berço/cama extra sob pedido
- Personalização total do ambiente e serviços`
    }
  ],
  accommodations: {
    title: "Acomodações Exclusivas",
    description: "26 casas e residências contemporâneas com piscina privativa, House Master exclusivo e design inspirado na concha nautilus.",
    types: [
      {
        name: "Ocean House",
        size: "A partir de 185m²",
        beds: "King-size",
        maxOccupancy: "2 adultos + 2 crianças",
        features: [
          "Piscina infinita privativa",
          "Deck amplo com espreguiçadeiras",
          "Sala e quarto integrados em design circular",
          "Mesa de refeições ao ar livre",
          "Solarium e acesso direto à lagoa",
          "Banheira de imersão com vista para o mar",
          "Amenities de luxo",
          "Minibar abastecido diariamente",
          "House Master (mordomo) 24h exclusivo",
          "Bicicletas privativas",
          "Wi-Fi premium",
          "Arrumação e serviço noturno diário",
          "Design inspirado na concha nautilus",
          "Total isolamento e privacidade"
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
        priceSubtext: "por pessoa, por noite"
      },
      {
        name: "Alta Temporada",
        period: "Novembro a Abril",
        priceText: "Sob consulta",
        priceSubtext: "por pessoa, por noite"
      }
    ],
    paymentTerms: [
      "Entrada de 20% via transferência bancária ao confirmar a reserva",
      "80% restante até 30 dias antes da viagem",
      "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
    ],
    cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
    notes: "Os valores estão sujeitos a alteração sem aviso prévio. Consulte-nos para obter cotações atualizadas e disponibilidade. Kids até 11 anos grátis no mesmo regime dos pais em datas/promos especiais."
  },
  faqs: [
    {
      question: "Qual é o tempo de traslado do aeroporto até o resort?",
      answer: "O traslado é feito por hidroavião e leva cerca de 40 minutos do Aeroporto Internacional de Malé até The Nautilus Maldives na ilha de Thiladhoo, Baa Atoll."
    },
    {
      question: "O que é o House Master?",
      answer: "O House Master é o mordomo exclusivo 24h dedicado a cada casa. É o anfitrião pessoal do hóspede, responsável por personalizar completamente a experiência, desde o café da manhã servido em qualquer lugar e horário até organizar experiências sob medida. É uma das características mais marcantes do serviço do The Nautilus."
    },
    {
      question: "O que significa experiências 'fora do tempo'?",
      answer: "The Nautilus não possui horários fixos para refeições, check-in ou check-out. Tudo é flexível e personalizado. Você pode tomar café da manhã ao meio-dia, jantar às 22h na praia ou fazer check-out às 18h. O conceito é proporcionar total liberdade e atendimento sob medida, sem restrições de horário ou dress code."
    },
    {
      question: "Quantas casas o resort possui?",
      answer: "The Nautilus possui apenas 26 casas e residências (beach houses e ocean houses), garantindo máxima privacidade e exclusividade. Todas possuem piscina privativa e House Master dedicado 24h."
    },
    {
      question: "O que está incluído no pacote?",
      answer: "Incluído: café da manhã à la carte personalizado servido em qualquer lugar/horário, House Master exclusivo 24h, piscina privativa, Wi-Fi premium, minibar abastecido diariamente, atividades aquáticas não motorizadas (caiaque, SUP, snorkeling, windsurf), bicicletas, fitness center, yoga pavilion, clube infantil, equipamentos de snorkeling, arrumação e serviço noturno diário, lavanderia diária gratuita, room service 24h sem taxas extras e check-in/check-out flexíveis."
    },
    {
      question: "Quantos restaurantes o resort possui?",
      answer: "O resort oferece 4 restaurantes: Zeytoun (mediterrâneo/oriente médio sobre o mar), Thyme (internacional), Ocaso (latino-asiático e grill à beira-mar) e Naiboli Bar (piscina/bar). Todos seguem o conceito 'unscripted dining' com personalização total do menu, horário e local do jantar, sem dress code ou restrição de horário. Room service 24h disponível."
    },
    {
      question: "O resort é adequado para famílias com crianças?",
      answer: "Sim, o resort recebe famílias. Possui Kids Club, espaço teens, programação educativa e amenities kids sob consulta. Kids até 12 anos ficam grátis, e berço/cama extra estão disponíveis sob pedido. O House Master pode personalizar completamente a experiência para famílias."
    },
    {
      question: "O resort possui spa?",
      answer: "Sim, o Solasta Spa (sobre a água) oferece tratamentos personalizados, massagens, terapias holísticas e rituais de sono e wellness. É reconhecido pela excelência em tratamentos sob medida."
    },
    {
      question: "Quais atividades estão disponíveis?",
      answer: "Gratuitas: snorkeling na house reef, caiaque, stand-up paddle, windsurf, hobie cat, bicicletas, fitness center, yoga, meditação, workshops de bem-estar, Kids Club, observação de estrelas, workshops de conservação marinha. Com custo extra: mergulho PADI (batismos/cursos/saídas guiadas), passeios de iate/dhoni privativo, pesca, sandbank picnics, sunset cruise, cine privativo, aulas de culinária, degustações de vinho, Solasta Spa."
    },
    {
      question: "O que diferencia The Nautilus Maldives?",
      answer: "The Nautilus se destaca como um dos resorts mais exclusivos das Maldivas: apenas 26 casas, todas com piscina privativa e House Master exclusivo 24h; conceito 'fora do tempo' sem horários fixos para nada; 'unscripted dining' com personalização total de menu, horário e local; atmosfera boêmia-chique; localização no Baa Atoll UNESCO com acesso a manta rays e tubarões-baleia; e serviço absolutamente personalizado e sob medida. Ideal para viajantes que buscam máxima privacidade, exclusividade e liberdade."
    }
  ],
  images: [
    {
      src: heroImage,
      alt: "The Nautilus Maldives - Vista aérea do resort"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
      alt: "Ocean House com piscina infinita privativa sobre a lagoa"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
      alt: "Deck privativo com acesso direto ao mar"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
      alt: "Solasta Spa - tratamentos personalizados sobre a água"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
      alt: "Zeytoun - restaurante mediterrâneo sobre o mar"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
      alt: "Thyme - restaurante internacional"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
      alt: "Ocaso - grill latino-asiático à beira-mar"
    },
    {
      src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
      alt: "Piscina privativa com vista panorâmica"
    },
    {
      src: "https://images.unsplash.com/photo-1587502536785-89fba1def866?q=80&w=2670",
      alt: "Kids Club - área infantil exclusiva"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
      alt: "Design circular inspirado na concha nautilus"
    }
  ]
};

export default theNautilus;