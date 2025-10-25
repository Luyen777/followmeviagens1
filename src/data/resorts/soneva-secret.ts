import { ResortData } from '../types';
import heroImage from '@/assets/maldives-hero-latest.avif';

export const sonevaSecret: ResortData = {
  slug: 'soneva-secret',
  name: 'Soneva Secret',
  rating: 5,
  location: 'Atol Makunudhoo, Maldivas',
  transferTime: 'Hidroavião direto de Malé',
  heroImage,
  heroTitle: 'Soneva Secret',
  heroSubtitle: 'Resort ultraexclusivo no remoto Atol Makunudhoo',
  heroHighlights: [
    'Apenas 14 villas exclusivas',
    'Primeira villa flutuante das Maldivas',
    'Chef privativo 24h em cada villa',
    'Atol mais remoto e preservado'
  ],
  seoTitle: 'Soneva Secret - Resort Ultraexclusivo nas Maldivas | Pacote Completo',
  seoDescription: 'Soneva Secret: apenas 14 villas no remoto Atol Makunudhoo. Resort inaugurado em 2024 com villa flutuante, chef privativo e privacidade máxima. Reserve agora.',
  about: `Soneva Secret é um resort ultraexclusivo inaugurado em 2024, situado no remoto Atol Makunudhoo, extremo noroeste das Maldivas. A propriedade conta com apenas 14 villas (sobre a água, na praia e a primeira villa flutuante das Maldivas), garantindo privacidade máxima e serviço altamente personalizado em um dos cenários mais intocados do arquipélago. O acesso é feito por hidroavião direto de Malé, e a ilha destaca-se pelo isolamento, laguna de intensa beleza e biodiversidade marinha abundante, incluindo mantas, tartarugas e recifes preservados. Soneva Secret é referência de luxo extremo, hospitalidade personalizada e experiências únicas no atol mais remoto das Maldivas, ideal para quem busca privacidade, contato genuíno com a natureza marinha e a incomparável assinatura Soneva em hospitalidade, wellness e gastronomia.`,
  sections: [
    {
      id: 'inclusoes',
      title: 'O que está incluído',
      type: 'text',
      content: `• Café da manhã incluso (regimes ampliados sob consulta)
• Serviço completo: cada villa conta com time dedicado, incluindo Barefoot Guardian (butler), Barefoot Assistant e chef privativo disponível 24h
• Bicicletas e tricycles privativos por villa e buggy service 24h para circular na ilha
• Wi-Fi premium (com opção de desligar para maior imersão)
• Acesso a todas as instalações: spa, fitness center, academia, yoga platform, sala de meditação
• Equipamento de snorkeling, caiaque, SUP, esportes aquáticos não motorizados
• Arrumação 2x/dia e amenities ecológicas de alto padrão
• Kids amenity pack, sala criança/adolescente sob consulta
• Check-in e check-out flexíveis, amenities de boas-vindas
• Serviço de lavanderia, concierge multilíngue, lounge de chegada/partida`
    },
    {
      id: 'atividades-gastronomia',
      title: 'Atividades e Gastronomia',
      type: 'text',
      content: `• Snorkeling e mergulho em alguns dos recifes mais preservados do país (spot de mantas e tartarugas)
• Passeios a ilhas inabitadas e sandbank para piqueniques, cruzeiro ao pôr do sol e experiências "The Secret Day"
• Esportes aquáticos: SUP, caiaque, vela, pesca esportiva
• Yoga, wellness e tratamentos de spa privativos na villa ou centro dedicado
• Workshops ambientais, trilha ecológica, jardinagem
• Kids Club e experiências infantis/adolescentes exclusivas
• Observação de estrelas (rooftop Out of this World), sessões de cinema open-air`
    },
    {
      id: 'gastronomia',
      title: 'Gastronomia',
      type: 'text',
      content: `• So Primitive: restaurante principal (fogueira à beira-mar, técnicas ancestrais)
• Out of This World: restaurante sobre palafitas instalado sobre a água, fine dining internacional, wine cellar, rooftop estelar
• Jantares privativos na vila/praia, degustações, floating breakfast, menus vegetarianos e kids
• Cada villa com chef privativo capaz de preparar menus exclusivos para gostos e restrições especiais`
    },
    {
      id: 'acomodacoes',
      title: 'Acomodações',
      type: 'text',
      content: `Bangalôs sobre as águas com piscina privativa. Villas com piscinas privativas, escorregador para o mar, deck panorâmico, daybeds, living aberto e acesso à lagoa ou recife. A arquitetura é sustentável, toda em madeira natural, e o design inteligente curto-circuita o mar e o interior das villas.

Cada villa oferece rooftop retrátil sobre a suíte master (para contemplação das estrelas), quarto extra para crianças/teens, sala de banho externa/interna, banheira spa e ducha com vista oceano, gadgets de última geração, wine fridge, Wi-Fi, amenities orgânicos e sistema multimídia completo.

Kids até 12 anos grátis no mesmo regime dos pais em períodos promocionais; berço/cama extra sob consulta`
    }
  ],
  accommodations: {
    title: 'Tipos de Acomodação',
    description: 'Apenas 14 villas ultraexclusivas com serviço dedicado',
    types: [
      {
        name: 'Villa sobre a água',
        size: 'A partir de 300m²',
        beds: 'King size',
        maxOccupancy: '4 pessoas',
        features: [
          'Piscina privativa',
          'Escorregador para o mar',
          'Chef privativo 24h',
          'Barefoot Guardian (butler)',
          'Rooftop retrátil para observação de estrelas'
        ]
      },
      {
        name: 'Villa na praia',
        size: 'A partir de 300m²',
        beds: 'King size',
        maxOccupancy: '4 pessoas',
        features: [
          'Piscina privativa',
          'Acesso direto à praia',
          'Chef privativo 24h',
          'Barefoot Guardian (butler)',
          'Deck panorâmico'
        ]
      },
      {
        name: 'Villa flutuante',
        size: 'A partir de 400m²',
        beds: 'King size',
        maxOccupancy: '4 pessoas',
        features: [
          'Primeira villa flutuante das Maldivas',
          'Piscina privativa',
          'Chef privativo 24h',
          'Barefoot Guardian (butler)',
          'Vista 360° do oceano'
        ]
      }
    ]
  },
  pricing: {
    seasons: [
      {
        name: 'Baixa Temporada',
        period: 'Maio a Outubro',
        priceText: 'A partir de US$ 3.500',
        priceSubtext: 'por noite, por villa'
      },
      {
        name: 'Alta Temporada',
        period: 'Novembro a Abril',
        priceText: 'A partir de US$ 4.500',
        priceSubtext: 'por noite, por villa'
      }
    ],
    paymentTerms: [
      '30% de entrada na reserva',
      '70% até 60 dias antes do check-in'
    ],
    cancellationPolicy: 'Cancelamento gratuito até 90 dias antes do check-in. Entre 90-60 dias: retenção de 50%. Menos de 60 dias: retenção de 100%.',
    notes: 'Valores sujeitos a alteração conforme disponibilidade. Mínimo de 3 noites. Taxas de serviço e impostos governamentais não inclusos.'
  },
  faqs: [
    {
      question: 'Como é o transfer para o Soneva Secret?',
      answer: 'O acesso é feito por hidroavião direto de Malé até o remoto Atol Makunudhoo.'
    },
    {
      question: 'Quantas villas tem o resort?',
      answer: 'O Soneva Secret possui apenas 14 villas, garantindo máxima privacidade e exclusividade.'
    },
    {
      question: 'O que é a villa flutuante?',
      answer: 'É a primeira villa flutuante das Maldivas, oferecendo uma experiência única com vista 360° do oceano.'
    },
    {
      question: 'Cada villa tem chef privativo?',
      answer: 'Sim, cada villa conta com chef privativo disponível 24h para preparar menus exclusivos.'
    },
    {
      question: 'Crianças podem se hospedar?',
      answer: 'Sim, kids até 12 anos ficam grátis no mesmo regime dos pais em períodos promocionais.'
    }
  ],
  images: [
    {
      src: '/placeholder.svg',
      alt: 'Villa sobre a água com piscina privativa'
    },
    {
      src: '/placeholder.svg',
      alt: 'Villa flutuante vista aérea'
    },
    {
      src: '/placeholder.svg',
      alt: 'Restaurante So Primitive à beira-mar'
    },
    {
      src: '/placeholder.svg',
      alt: 'Out of This World restaurante sobre palafitas'
    },
    {
      src: '/placeholder.svg',
      alt: 'Interior de villa com rooftop retrátil'
    },
    {
      src: '/placeholder.svg',
      alt: 'Snorkeling em recife preservado'
    }
  ]
};

export default sonevaSecret;
