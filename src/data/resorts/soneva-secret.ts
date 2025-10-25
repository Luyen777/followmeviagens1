import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

export const sonevaSecret: ResortData = {
  slug: "soneva-secret",
  name: "Soneva Secret",
  rating: 5,
  location: "Atol Makunudhoo, Noroeste das Maldivas",
  transferTime: "Hidroavião direto de Malé",
  heroImage,
  heroTitle: "Soneva Secret - Luxo Ultraexclusivo no Atol Mais Remoto",
  heroSubtitle: "Apenas 14 villas em cenário intocado com serviço altamente personalizado",
  heroHighlights: [
    "Resort ultraexclusivo inaugurado em 2024",
    "14 villas incluindo primeira villa flutuante das Maldivas",
    "Atol Makunudhoo - extremo noroeste remoto",
    "Serviço dedicado com butler e chef privativo 24h"
  ],
  seoTitle: "Soneva Secret - Resort Ultraexclusivo nas Maldivas | 14 Villas de Luxo",
  seoDescription: "Soneva Secret oferece luxo extremo com apenas 14 villas no remoto Atol Makunudhoo. Resort inaugurado em 2024 com serviço personalizado, chef privativo e primeira villa flutuante das Maldivas.",
  about: "Soneva Secret é um resort ultraexclusivo inaugurado em 2024, situado no remoto Atol Makunudhoo, extremo noroeste das Maldivas. A propriedade conta com apenas 14 villas (sobre a água, na praia e a primeira villa flutuante das Maldivas), garantindo privacidade máxima e serviço altamente personalizado em um dos cenários mais intocados do arquipélago. O acesso é feito por hidroavião direto de Malé, e a ilha destaca-se pelo isolamento, laguna de intensa beleza e biodiversidade marinha abundante, incluindo mantas, tartarugas e recifes preservados. Soneva Secret é referência de luxo extremo, hospitalidade personalizada e experiências únicas no atol mais remoto das Maldivas, ideal para quem busca privacidade, contato genuíno com a natureza marinha e a incomparável assinatura Soneva em hospitalidade, wellness e gastronomia.",
  sections: [
    {
      id: "inclusoes",
      title: "Inclusões do Pacote",
      type: "text",
      content: "Café da manhã incluso (regimes ampliados sob consulta). Serviço completo: cada villa conta com time dedicado, incluindo Barefoot Guardian (butler), Barefoot Assistant e chef privativo disponível 24h. Bicicletas e tricycles privativos por villa e buggy service 24h para circular na ilha. Wi-Fi premium (com opção de desligar para maior imersão). Acesso a todas as instalações: spa, fitness center, academia, yoga platform, sala de meditação. Equipamento de snorkeling, caiaque, SUP, esportes aquáticos não motorizados. Arrumação 2x/dia e amenities ecológicas de alto padrão. Kids amenity pack, sala criança/adolescente sob consulta. Check-in e check-out flexíveis, amenities de boas-vindas. Serviço de lavanderia, concierge multilíngue, lounge de chegada/partida."
    },
    {
      id: "atividades",
      title: "Atividades e Experiências",
      type: "text",
      content: "Snorkeling e mergulho em alguns dos recifes mais preservados do país (spot de mantas e tartarugas). Passeios a ilhas inabitadas e sandbank para piqueniques, cruzeiro ao pôr do sol e experiências 'The Secret Day'. Esportes aquáticos: SUP, caiaque, vela, pesca esportiva. Yoga, wellness e tratamentos de spa privativos na villa ou centro dedicado. Workshops ambientais, trilha ecológica, jardinagem. Kids Club e experiências infantis/adolescentes exclusivas. Observação de estrelas (rooftop Out of this World), sessões de cinema open-air."
    },
    {
      id: "gastronomia",
      title: "Gastronomia",
      type: "text",
      content: "So Primitive: restaurante principal (fogueira à beira-mar, técnicas ancestrais). Out of This World: restaurante sobre palafitas instalado sobre a água, fine dining internacional, wine cellar, rooftop estelar. Jantares privativos na vila/praia, degustações, floating breakfast, menus vegetarianos e kids. Cada villa com chef privativo capaz de preparar menus exclusivos para gostos e restrições especiais."
    },
    {
      id: "acomodacoes",
      title: "Acomodações",
      type: "text",
      content: "Bangalôs sobre as águas com piscina privativa. Villas com piscinas privativas, escorregador para o mar, deck panorâmico, daybeds, living aberto e acesso à lagoa ou recife. A arquitetura é sustentável, toda em madeira natural, e o design inteligente curto-circuita o mar e o interior das villas. Cada villa oferece rooftop retrátil sobre a suíte master (para contemplação das estrelas), quarto extra para crianças/teens, sala de banho externa/interna, banheira spa e ducha com vista oceano, gadgets de última geração, wine fridge, Wi-Fi, amenities orgânicos e sistema multimídia completo. Kids até 12 anos grátis no mesmo regime dos pais em períodos promocionais; berço/cama extra sob consulta."
    }
  ],
  accommodations: {
    title: "Acomodações Ultraexclusivas",
    description: "Apenas 14 villas com serviço dedicado e privacidade máxima",
    types: [
      {
        name: "Villas sobre a Água",
        size: "Espaçosas",
        beds: "King size",
        maxOccupancy: "Consultar",
        features: [
          "Piscina privativa",
          "Escorregador para o mar",
          "Deck panorâmico",
          "Chef privativo 24h",
          "Rooftop retrátil para estrelas"
        ]
      },
      {
        name: "Villas na Praia",
        size: "Amplas",
        beds: "King size",
        maxOccupancy: "Consultar",
        features: [
          "Piscina privativa",
          "Acesso direto à praia",
          "Living aberto",
          "Barefoot Guardian (butler)",
          "Sala de banho externa/interna"
        ]
      },
      {
        name: "Villa Flutuante",
        size: "Exclusiva",
        beds: "King size",
        maxOccupancy: "Consultar",
        features: [
          "Primeira villa flutuante das Maldivas",
          "Piscina privativa",
          "Vista 360° do oceano",
          "Time dedicado completo",
          "Máxima privacidade"
        ]
      }
    ]
  },
  pricing: {
    seasons: [
      {
        name: "Alta Temporada",
        period: "Dezembro a Março",
        priceText: "Sob consulta",
        priceSubtext: "Valores variam conforme categoria de villa e regime"
      },
      {
        name: "Baixa Temporada",
        period: "Maio a Outubro",
        priceText: "Sob consulta",
        priceSubtext: "Melhores tarifas e promoções especiais"
      }
    ],
    paymentTerms: [
      "Sinal de 30% na confirmação da reserva",
      "Saldo restante até 60 dias antes do check-in",
      "Parcelamento em até 10x sem juros no cartão de crédito",
      "Pagamento via PIX com 5% de desconto"
    ],
    cancellationPolicy: "Cancelamento gratuito até 90 dias antes do check-in. Entre 90 e 60 dias: retenção de 30%. Entre 60 e 30 dias: retenção de 50%. Menos de 30 dias: retenção de 100%.",
    notes: "Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade e tarifas exatas para suas datas."
  },
  faqs: [
    {
      question: "Quantas villas tem o Soneva Secret?",
      answer: "O resort conta com apenas 14 villas, sendo sobre a água, na praia e incluindo a primeira villa flutuante das Maldivas, garantindo privacidade máxima."
    },
    {
      question: "Como é o acesso ao resort?",
      answer: "O acesso é feito por hidroavião direto de Malé até o remoto Atol Makunudhoo, no extremo noroeste das Maldivas."
    },
    {
      question: "O que está incluído no serviço de cada villa?",
      answer: "Cada villa conta com time dedicado incluindo Barefoot Guardian (butler), Barefoot Assistant e chef privativo disponível 24h para preparar menus personalizados."
    },
    {
      question: "Quais são os restaurantes disponíveis?",
      answer: "So Primitive (restaurante principal com fogueira à beira-mar) e Out of This World (fine dining sobre palafitas com rooftop estelar). Além disso, há jantares privativos na villa ou praia."
    },
    {
      question: "O resort é adequado para crianças?",
      answer: "Sim, crianças até 12 anos ficam grátis no mesmo regime dos pais em períodos promocionais. Há Kids Club e experiências exclusivas para crianças e adolescentes."
    },
    {
      question: "Quais atividades marinhas estão disponíveis?",
      answer: "Snorkeling e mergulho em recifes preservados (spot de mantas e tartarugas), SUP, caiaque, vela, pesca esportiva, além de passeios a ilhas inabitadas e sandbanks."
    }
  ],
  images: [
    {
      src: "/placeholder.svg",
      alt: "Vista aérea do Soneva Secret no Atol Makunudhoo"
    },
    {
      src: "/placeholder.svg",
      alt: "Villa flutuante - primeira das Maldivas"
    },
    {
      src: "/placeholder.svg",
      alt: "Villa sobre a água com piscina privativa"
    },
    {
      src: "/placeholder.svg",
      alt: "Restaurante Out of This World sobre palafitas"
    },
    {
      src: "/placeholder.svg",
      alt: "Interior de villa com rooftop retrátil"
    },
    {
      src: "/placeholder.svg",
      alt: "Praia privativa e laguna cristalina"
    },
    {
      src: "/placeholder.svg",
      alt: "Snorkeling com mantas no recife preservado"
    },
    {
      src: "/placeholder.svg",
      alt: "Restaurante So Primitive com fogueira à beira-mar"
    }
  ]
};
