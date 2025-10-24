import type { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

const siyamWorld: ResortData = {
  slug: "siyam-world",
  name: "Siyam World Maldives",
  rating: 5,
  location: "Dhigurah, Noonu Atoll",
  transferTime: "40 minutos de hidroavião ou voo doméstico até Maafaru + lancha",
  heroImage: heroImage,
  heroTitle: "Siyam World Maldives",
  heroSubtitle: "Resort 5 estrelas all inclusive de grande porte com conceito playground",
  heroHighlights: ["All Inclusive Premium", "54 Hectares", "Floating Water Park"],
  seoTitle: "Siyam World Maldives - Resort 5★ All Inclusive | Follow Me Viagens",
  seoDescription: "Resort 5 estrelas all inclusive no Noonu Atoll com 54 hectares, conceito playground, Floating Water Park, 8 restaurantes e bares. Ideal para famílias, casais e grupos de amigos.",
  about: "Siyam World Maldives é um resort 5 estrelas all inclusive de grande porte, localizado na Ilha Dhigurah, Noonu Atoll, com 54 hectares, cercado por praias de areia branca e lagoas azul-turquesa. Acesso ocorre por hidroavião (40 minutos de Malé) ou por voo doméstico até Maafaru seguido de lancha. O resort oferece um conceito \"playground\" com experiências diversas, arquitetura contemporânea, e é ideal tanto para casais quanto para famílias ou grupos de amigos, com atmosfera animada e inclusiva.",
  sections: [
    {
      id: "inclusions",
      title: "Inclusões do Pacote",
      type: "text",
      content: `Incluído:

- Café da manhã, almoço e jantar estilo buffet em Tempo e Baraabaru, além de opções à la carte mediante reserva (Takrai, Wahoo Grill, Saffron, Kurry Leaf)
- Snacks, chá da tarde (Together)
- Bebidas alcoólicas e não alcoólicas selecionadas em bares e restaurantes
- Minibar reabastecido diariamente (cervejas, vinhos, refrigerantes, snacks)
- Sunset Fishing (1 passeio por estadia)
- Floating Water Park, centros de recreação e fitness (academia, esportes internos e externos, tênis, tênis de mesa)
- Atividades aquáticas não motorizadas: SUP, caiaque, pedalinho
- Equipamento de snorkel incluído
- Kids club para crianças de 4 a 12 anos
- Serviço de babá (2h gratuita por estadia)
- Entretenimento noturno com música ao vivo e DJ
- Wi-Fi gratuito nas áreas públicas
- Traslados regulares (hidroavião/voo doméstico + lancha)
- Taxa ambiental (green tax)`
    },
    {
      id: "gastronomy",
      title: "Atividades e Gastronomia",
      type: "text",
      content: `Esportes Aquáticos:

- Snorkeling
- Stand-up paddle
- Caiaque
- Pedalinho
- Acesso ao Floating Water Park

Esportes e Fitness:

- Academia
- Quadras de tênis
- Tênis de mesa
- Vôlei
- Beach football
- Centro fitness
- Yoga

Spa e Wellness:

- Spa (custo extra)
- Tratamentos personalizados
- Massagens
- Terapias

Entretenimento:

- Pesca ao pôr do sol
- Kids Club completo
- Salão de jogos para todas as idades
- Entretenimento noturno com festas temáticas
- Música ao vivo
- DJ

8 Restaurantes e Bares:

- Tempo e Baraabaru: buffet internacional
- The Happening: experiências gastronômicas
- Jungali: gastronomia exótica
- Takrai: culinária tailandesa
- The Wahoo Grill: grill e seafood
- Saffron: gastronomia indiana
- Kurry Leaf: pratos asiáticos
- KulhiVaru: bar 24h

Experiências Especiais:

- Jantares privativos
- Floating breakfast
- Degustações de vinho
- Jantares temáticos
- Room service 24h`
    },
    {
      id: "accommodations-text",
      title: "Acomodação",
      type: "text",
      content: `Villas de Luxo:

Water Villas, Lagoon Villas, Ocean e Reef Villas sobre a água, todas com piscina privativa, ampla área externa, acesso direto à lagoa e muitos modelos com toboágua privativo escorregando para o mar.

Características das Villas:

- Decoração contemporânea
- Ar-condicionado
- Smart TV
- Minibar
- Sala de banho de luxo
- Bikes privativas sob consulta
- Serviço de arrumação 2x/dia

Villas sobre a Água:

- Piscina privativa
- Deck panorâmico
- Ducha exterior
- Acesso direto ao mar
- Amenidades premium
- Privacidade máxima
- Toboágua privativo (modelos selecionados)`
    }
  ],
  accommodations: {
    title: "Villas de Luxo",
    description: "Water Villas, Lagoon Villas, Ocean e Reef Villas com piscina privativa e acesso direto à lagoa.",
    types: [
      {
        name: "Water Villa com Piscina",
        size: "Espaçosas",
        beds: "King-size",
        maxOccupancy: "2 adultos + 2 crianças",
        features: [
          "Piscina privativa",
          "Deck panorâmico",
          "Acesso direto à lagoa",
          "Toboágua privativo (modelos selecionados)",
          "Ducha exterior",
          "Decoração contemporânea",
          "Ar-condicionado",
          "Smart TV",
          "Minibar reabastecido diariamente",
          "Sala de banho de luxo",
          "Bikes privativas sob consulta",
          "Serviço de arrumação 2x/dia",
          "Amenidades premium",
          "Ampla área externa"
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
        priceSubtext: "por pessoa, por noite, all inclusive"
      },
      {
        name: "Alta Temporada",
        period: "Novembro a Abril",
        priceText: "Sob consulta",
        priceSubtext: "por pessoa, por noite, all inclusive"
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
      question: "Qual é o tempo de traslado do aeroporto até o resort?",
      answer: "O traslado pode ser feito por hidroavião (40 minutos) ou por voo doméstico até Maafaru seguido de lancha do Aeroporto Internacional de Malé até o Siyam World Maldives."
    },
    {
      question: "O resort é adequado para famílias com crianças?",
      answer: "Sim, o resort é ideal para famílias. Possui Kids Club para crianças de 4 a 12 anos, Floating Water Park, salão de jogos, serviço de babá (2h gratuita por estadia), menu infantil nos restaurantes e atmosfera animada e inclusiva. Perfeito para famílias, casais e grupos de amigos."
    },
    {
      question: "O que está incluído no pacote all inclusive?",
      answer: "Incluído: café da manhã, almoço e jantar buffet (Tempo e Baraabaru), opções à la carte mediante reserva (Takrai, Wahoo Grill, Saffron, Kurry Leaf), snacks, chá da tarde, bebidas alcoólicas e não alcoólicas selecionadas, minibar reabastecido diariamente, Sunset Fishing (1x), Floating Water Park, academia, esportes (tênis, tênis de mesa, vôlei, beach football), atividades aquáticas não motorizadas (SUP, caiaque, pedalinho), equipamento de snorkel, Kids Club, babá (2h gratuita), entretenimento noturno, Wi-Fi, traslados e green tax."
    },
    {
      question: "Quantos restaurantes o resort possui?",
      answer: "O resort oferece 8 restaurantes e bares: Tempo e Baraabaru (buffet internacional), The Happening, Jungali, Takrai (tailandês), The Wahoo Grill (grill/seafood), Saffron (indiano), Kurry Leaf (asiático) e KulhiVaru (bar 24h). Room service 24h disponível."
    },
    {
      question: "O que é o Floating Water Park?",
      answer: "O Floating Water Park é um parque aquático flutuante exclusivo do resort, com escorregadores, trampolins e obstáculos sobre a lagoa. É uma atração única nas Maldivas e está incluído no pacote all inclusive."
    },
    {
      question: "Quais atividades estão disponíveis?",
      answer: "Gratuitas: snorkeling, SUP, caiaque, pedalinho, Floating Water Park, academia, tênis, tênis de mesa, vôlei, beach football, yoga, Sunset Fishing (1x), Kids Club, salão de jogos, entretenimento noturno com música ao vivo e DJ. Com custo extra: spa, mergulho, esportes motorizados, passeios de barco, experiências privadas."
    },
    {
      question: "O resort possui spa?",
      answer: "Sim, o resort possui spa completo com tratamentos personalizados, massagens e terapias. Os serviços de spa estão disponíveis com custo extra."
    },
    {
      question: "O que diferencia o Siyam World Maldives?",
      answer: "O resort 5 estrelas se destaca pelo conceito \"playground\" com 54 hectares, Floating Water Park exclusivo, 8 restaurantes e bares, all inclusive premium, villas sobre a água com piscina privativa (muitas com toboágua), Kids Club completo, entretenimento noturno animado, atmosfera inclusiva e ideal tanto para casais quanto para famílias ou grupos de amigos. Oferece experiências diversas e arquitetura contemporânea."
    },
    {
      question: "As villas possuem toboágua?",
      answer: "Sim, muitos modelos de villas sobre a água possuem toboágua privativo que escorrega diretamente para o mar, proporcionando uma experiência única e divertida."
    }
  ],
  images: [
    {
      src: heroImage,
      alt: "Siyam World Maldives - Vista aérea do resort"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
      alt: "Water Villa com piscina privativa"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
      alt: "Villa sobre a água com toboágua"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
      alt: "Floating Water Park"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
      alt: "Restaurante The Wahoo Grill"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
      alt: "Restaurante Takrai - culinária tailandesa"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
      alt: "Bar KulhiVaru 24h"
    },
    {
      src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
      alt: "Lagoa azul-turquesa"
    },
    {
      src: "https://images.unsplash.com/photo-1587502536785-89fba1def866?q=80&w=2670",
      alt: "Kids Club"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
      alt: "Praia de areia branca"
    }
  ]
};

export default siyamWorld;
