import { ResortData } from '../types';
import heroImage from '@/assets/maldives-hero.avif';

const theNautilus: ResortData = {
  slug: 'the-nautilus',
  name: 'The Nautilus Maldives',
  rating: 5,
  location: 'Thiladhoo, Baa Atoll',
  transferTime: '40 minutos de hidroavião desde Malé',
  heroImage: heroImage,
  heroTitle: 'The Nautilus Maldives',
  heroSubtitle: 'Luxo boêmio-chique sem restrições no Baa Atoll, Reserva da Biosfera UNESCO',
  heroHighlights: [
    'Apenas 26 casas e residências ultra-exclusivas',
    'House Master (mordomo) 24h dedicado',
    'Unscripted dining: refeições personalizadas a qualquer hora',
    'Baa Atoll - Reserva da Biosfera UNESCO'
  ],
  seoTitle: 'The Nautilus Maldives - Pacote All Inclusive Boutique Resort | Viagens Maldivas',
  seoDescription: 'The Nautilus Maldives: boutique resort ultra-exclusivo no Baa Atoll. 26 casas com piscina privativa, House Master dedicado e experiências completamente personalizadas sem horários.',
  about: `The Nautilus Maldives é um boutique resort de luxo, situado na ilha de Thiladhoo, Baa Atoll, uma Reserva da Biosfera da UNESCO. O acesso é feito via hidroavião, aproximadamente 40 minutos a partir de Malé. Considerado um dos resorts mais exclusivos das Maldivas, tem apenas 26 casas e residências ("beach houses" e "ocean houses"), todas com piscina privativa e atendimento dedicado do House Master (mordomo 24h). O conceito diferencia-se pelos serviços absolutamente personalizados, privacidade máxima e atmosfera boêmia-chique, projetada para proporcionar experiências "fora do tempo", sem restrição rígida de horários e completamente sob medida para o hóspede.`,
  sections: [
    {
      id: 'inclusoes',
      title: 'Inclusões do Pacote',
      type: 'text',
      content: `Café da manhã à la carte personalizado incluído, servido em qualquer lugar da ilha, a qualquer hora

House Master (butler) exclusivo e atendimento de concierge completo

Piscina privativa em todas as casas e residências

Wi-Fi premium gratuito em toda a ilha

Minibar abastecido (reposição diária)

Atividades aquáticas não motorizadas: caiaque, stand-up paddle, snorkeling, windsurf, hobie cat

Uso de bicicletas privativas

Acesso ao fitness center, yoga pavilion e programação diária de wellness/yoga

Clube infantil e amenities kids sob consulta

Equipamentos de snorkeling gratuitos para uso na house reef

Arrumação e serviço noturno diário

Welcome amenities e amenities premium

Traslado de buggy por toda a ilha

Serviço de lavanderia (quantidade diária gratuita)

Lounge de chegada/partida

Room service 24h sem taxas extras

Check-in e check-out flexíveis sob disponibilidade`
    },
    {
      id: 'atividades',
      title: 'Atividades e Experiências',
      type: 'text',
      content: `Snorkeling e mergulho com acesso ao house reef e excursões para manta rays, tartarugas, tubarões-baleia no Baa Atoll

Centro PADI para mergulho (batismos/cursos/saídas guiadas)

Solasta Spa (sobre a água), com tratamentos personalizados, massagens, terapias holísticas, rituais de sono e wellness

Aulas de yoga, meditação e workshops de bem-estar

Esportes aquáticos não motorizados: caiaque, stand-up paddle, windsurf

Passeios de iate ou dhoni privativo, pesca, sandbank picnics, sunset cruise

Cine privativo sob as estrelas, piqueniques, aulas de culinária, degustações de vinho

Kids Club, espaço teens, jogos de tabuleiro, programação educativa

Observação de estrelas, trilhas ecológicas, workshops de conservação marinha com biólogo residente`
    },
    {
      id: 'gastronomia',
      title: 'Gastronomia',
      type: 'text',
      content: `Zeytoun: gourmet mediterrâneo/oriente médio sobre o mar

Thyme: internacional

Ocaso: latino-asiático e grill à beira-mar

Naiboli Bar: piscina/bar a qualquer hora

Todos os restaurantes operam com "unscripted dining" - personalização total do menu, horário e local do jantar, sem dress code ou restrição de horário

Room service 24h, floating breakfast, jantares privativos, experiências na villa e praia`
    }
  ],
  accommodations: {
    title: 'Acomodações',
    description: 'Bangalôs sobre as águas com piscina privativa, design inspirado na concha nautilus e total privacidade.',
    types: [
      {
        name: 'Beach & Ocean Houses',
        size: 'Amplas e espaçosas',
        beds: 'King size',
        maxOccupancy: 'Até 3 adultos ou 2 adultos + 2 crianças',
        features: [
          'Deck amplo',
          'Piscina infinita privativa',
          'Sala e quarto integrados em design circular (inspirado na concha nautilus)',
          'Mesa de refeições ao ar livre',
          'Solarium e acesso direto à lagoa',
          'Banheira de imersão com vista para o mar',
          'Amenities de luxo',
          'Minibar abastecido',
          'Serviço de mordomo e bikes privativas',
          'Projetadas para total isolamento, permitem café da manhã/floating breakfast e refeições privativas na própria villa',
          'Kids até 12 anos grátis, berço/cama extra sob pedido'
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
      question: 'Qual é o diferencial do The Nautilus Maldives?',
      answer: 'O The Nautilus se destaca pelo conceito "Bohemian Luxe" com apenas 26 casas ultra-exclusivas, cada uma com House Master (mordomo) dedicado 24h. O resort oferece experiências completamente personalizadas sem horários fixos, incluindo o conceito "unscripted dining" onde você pode comer o que quiser, onde quiser, a qualquer hora.'
    },
    {
      question: 'Como funciona o conceito de "unscripted dining"?',
      answer: 'O "unscripted dining" permite que você personalize completamente suas refeições - escolha o menu, o horário e o local (praia, villa, restaurante, sobre a água) sem qualquer restrição. Não há dress code nem horários fixos. Seu House Master coordena tudo com os chefs para criar experiências gastronômicas únicas.'
    },
    {
      question: 'O que está incluído no House Master service?',
      answer: 'Cada casa tem um House Master dedicado 24h que funciona como mordomo pessoal, concierge e organizador de experiências. Ele cuida de todos os detalhes da sua estadia, desde preparar refeições personalizadas até organizar atividades, tratamentos de spa e experiências exclusivas.'
    },
    {
      question: 'Quais atividades aquáticas estão incluídas?',
      answer: 'Estão incluídos: caiaque, stand-up paddle, snorkeling (com equipamentos), windsurf e hobie cat. O resort está no Baa Atoll, Reserva da Biosfera UNESCO, com excelente house reef para snorkeling e acesso a pontos de mergulho com mantas, tartarugas e tubarões-baleia.'
    },
    {
      question: 'O resort é adequado para crianças?',
      answer: 'Sim! O The Nautilus oferece Kids Club com programação educativa e entretenimento, espaço para teens e amenities especiais. Crianças até 12 anos podem ficar gratuitamente no mesmo regime dos pais (sob consulta). Berços e camas extras disponíveis mediante solicitação.'
    },
    {
      question: 'Qual é o tempo de transfer do aeroporto?',
      answer: 'O transfer é feito via hidroavião, com duração aproximada de 40 minutos desde o aeroporto internacional de Malé. O voo panorâmico sobre os atóis já faz parte da experiência única das Maldivas.'
    }
  ],
  images: [
    {
      src: heroImage,
      alt: "The Nautilus Maldives - Vista aérea do resort"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
      alt: "Ocean House com piscina infinita privativa"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
      alt: "Deck privativo sobre a lagoa"
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
      alt: "Ocaso - latino-asiático à beira-mar"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
      alt: "Experiências gastronômicas personalizadas"
    },
    {
      src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
      alt: "House reef no Baa Atoll UNESCO"
    },
    {
      src: "https://images.unsplash.com/photo-1587502536785-89fba1def866?q=80&w=2670",
      alt: "Kids Club e programação educativa"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
      alt: "Design boêmio-chique inspirado na concha nautilus"
    }
  ]
};

export default theNautilus;
