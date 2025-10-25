import type { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-gradient.jpg";
import intercontinentalBathroom from "@/assets/maldives-experiences/intercontinental-bathroom.jpg";

const intercontinentalMaldives: ResortData = {
  slug: "intercontinental",
  name: "InterContinental Maldives Maamunagau Resort",
  rating: 5,
  location: "Atol de Raa",
  transferTime: "35 minutos de hidroavião desde Malé",
  heroImage: heroImage,
  heroTitle: "InterContinental Maldives Maamunagau Resort",
  heroSubtitle: "Paraíso exclusivo no Atol de Raa",
  heroHighlights: ["5 Restaurantes Gourmet", "Spa Premiado", "Lagoa Privativa"],
  seoTitle: "InterContinental Maldives Maamunagau Resort - Pacote Completo | Follow Me Viagens",
  seoDescription: "Resort de luxo no Atol de Raa com villas overwater, 5 restaurantes gourmet, spa premiado e lagoa privativa. Pacote all-inclusive com mordomo 24h e transfer de hidroavião incluído.",
  about: "O InterContinental Maldives Maamunagau Resort é um paraíso exclusivo localizado no Atol de Raa, acessível por um voo panorâmico de hidroavião de 35 minutos desde Malé. Este resort de luxo oferece uma experiência inesquecível com suas villas overwater e beach villas elegantemente projetadas, cercadas por águas cristalinas e recifes de coral vibrantes.\n\nCom seis restaurantes gourmet, um spa premiado e uma lagoa privativa perfeita para snorkeling e mergulho, o InterContinental combina sofisticação contemporânea com a beleza natural intocada das Maldivas, criando o cenário ideal para lua de mel, celebrações especiais ou simplesmente momentos de puro relaxamento tropical.",
  sections: [
    {
      id: "inclusions",
      title: "Inclusões do Pacote",
      subtitle: "Tudo que você precisa saber sobre as inclusões do pacote",
      type: "text",
      content: `O pacote InterContinental Maldives inclui:

- Café da manhã diário completo das 07:00 às 11:00 no Café Umi
- Chá da tarde diário das 15:00 às 17:00 no The Retreat ou The Collective
- Aperitivo das 17:00 às 19:00 no The Collective & The Retreat ou das 18:30 às 19:00 no Sunset Bar
- Refrescos durante todo o dia no The Retreat e Pool Bar das 11:00 às 18:00
- Transfer privado de e para o terminal de hidroavião
- Check-in na vila
- Serviço de mordomo 24 horas
- Bicicletas disponíveis durante a estadia
- Esportes aquáticos não motorizados (caiaque, prancha de remo e windsurf)
- Equipamentos de snorkeling
- Aulas semanais de yoga, pilates e respiração profunda
- Centro de fitness 24 horas
- Acesso aos clubes infantis indoor e outdoor
- Tênis de mesa
- Sessão de fotos de 30 minutos no resort
- Wi-Fi gratuito nas vilas e áreas públicas`
    },
    {
      id: "dining",
      title: "Gastronomia de Excelência",
      subtitle: "5 restaurantes gourmet e 3 bares para experiências culinárias memoráveis",
      type: "text",
      content: `O InterContinental Maldives oferece 5 restaurantes principais e 3 bares:

Restaurantes:

- Café Umi - Restaurante durante todo o dia com influência japonesa e experiência teppanyaki interativa
- Fish Market - Conceito "do oceano ao prato" onde você escolhe frutos do mar frescos
- The Lighthouse - Especialidades mediterrâneas com vistas panorâmicas
- The Collective - Pizzas artesanais
- The Retreat - Santuário exclusivo para adultos com vistas da lagoa

Bares:

- Sunset Bar - Cocktails com vista para o pôr do sol
- Pool Bar - Bebidas à beira da piscina
- Gelato Bar - Sorvetes artesanais`
    },
    {
      id: "activities",
      title: "Atividades Disponíveis",
      subtitle: "Aventuras aquáticas, relaxamento e experiências únicas nas Maldivas",
      type: "text",
      content: `O resort oferece uma ampla variedade de atividades para todos os gostos:

Esportes Aquáticos:
- Snorkeling
- Mergulho
- Windsurf
- Caiaque
- Stand-up paddle

Bem-estar:
- AVI Spa overwater com massagens e tratamentos

Fitness:
- Centro de fitness 24h
- Aulas de yoga e pilates

Recreação:
- Kids Club
- Parque infantil
- Sala de jogos

Experiências Especiais:
- Cruzeiro para observação de golfinhos
- Aula de culinária maldívia
- Centro de Descoberta Marinha: Filmes educacionais e colaboração com a Manta Trust Foundation`
    },
  ],
  accommodations: {
    title: "Acomodação",
    description: "Villas elegantes sobre águas cristalinas com design contemporâneo",
    types: [
      {
        name: "Overwater Pool Villa",
        size: "100 m² (1.075 pés quadrados)",
        beds: "1 cama king size",
        maxOccupancy: "Ocupação máxima 2 adultos",
        features: [
          "Banheiro em planta aberta",
          "Piscina infinita privada",
          "Daybed acolchoado",
          "Área de jantar ao ar livre"
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
      "80% restante até 30 dias antes da viagem",
      "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
    ],
    cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
    notes: "Os valores estão sujeitos a alteração sem aviso prévio. Consulte-nos para obter cotações atualizadas e disponibilidade."
  },
  faqs: [
    {
      question: "Como chegar ao InterContinental Maldives Maamunagau Resort?",
      answer: "O resort está localizado no Atol de Raa e é acessível através de um voo panorâmico de hidroavião de 35 minutos desde o Aeroporto Internacional de Malé. O transfer de hidroavião está incluído no pacote e oferece vistas espetaculares das ilhas e lagoas das Maldivas."
    },
    {
      question: "Qual é a melhor época para visitar as Maldivas?",
      answer: "As Maldivas podem ser visitadas durante todo o ano. A alta temporada é de dezembro a abril, com clima mais seco e ensolarado. A baixa temporada (maio a novembro) pode ter chuvas ocasionais, mas oferece melhores preços e menos turistas. O resort oferece experiências incríveis em qualquer época do ano."
    },
    {
      question: "O resort é adequado para lua de mel?",
      answer: "Sim! O InterContinental Maldives é perfeito para lua de mel. Com villas overwater privativas, jantares românticos à beira-mar, spa para casais e pôr do sol espetaculares, o resort oferece o cenário ideal para celebrar momentos especiais. Nossa equipe pode personalizar experiências exclusivas para tornar sua lua de mel inesquecível."
    },
    {
      question: "Posso fazer mergulho e snorkeling no resort?",
      answer: "Absolutamente! O resort oferece equipamentos de snorkeling gratuitos e possui uma lagoa privativa com recifes de coral vibrantes. Para mergulho, há um centro de mergulho certificado no local que oferece aulas e passeios guiados para todos os níveis de experiência (custo adicional)."
    },
    {
      question: "O que está incluído no serviço de mordomo 24 horas?",
      answer: "O serviço de mordomo oferece assistência personalizada durante toda a sua estadia, incluindo: organização de refeições e reservas em restaurantes, planejamento de atividades, check-in na villa, preparação de banhos aromáticos, serviço de despensa de cortesia e qualquer outra necessidade especial que você possa ter."
    },
    {
      question: "Há opções vegetarianas e para restrições alimentares?",
      answer: "Sim, todos os restaurantes do resort podem acomodar diferentes restrições alimentares, incluindo opções vegetarianas, veganas, sem glúten e outras necessidades dietéticas. Informe nossas necessidades alimentares ao fazer a reserva e o chef preparará menus personalizados para você."
    },
    {
      question: "Preciso de visto para as Maldivas?",
      answer: "Brasileiros recebem visto de turista gratuito por 30 dias na chegada ao aeroporto de Malé. É necessário apresentar passaporte válido por pelo menos 6 meses, passagem de retorno e comprovante de hospedagem. Recomendamos verificar os requisitos atualizados antes da viagem."
    },
    {
      question: "Posso estender minha estadia além das 4 noites?",
      answer: "Sim! Você pode adicionar noites extras ao seu pacote. Entre em contato com nossa equipe para consultar disponibilidade e valores para noites adicionais. Recomendamos reservar com antecedência, especialmente durante a alta temporada."
    }
  ],
  images: [
    {
      src: heroImage,
      alt: "InterContinental Maldives - Vista aérea do resort"
    },
    {
      src: intercontinentalBathroom,
      alt: "Overwater Pool Villa - Banheiro luxuoso em planta aberta com banheira de imersão e vista panorâmica do oceano"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
      alt: "Villa overwater com piscina infinita privativa"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
      alt: "Deck privativo sobre a lagoa"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
      alt: "AVI Spa overwater - tratamentos exclusivos"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
      alt: "Café Umi - experiência teppanyaki"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
      alt: "Fish Market - frutos do mar frescos"
    }
  ]
};

export default intercontinentalMaldives;
