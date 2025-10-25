import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

export const sonevaFushi: ResortData = {
  slug: "soneva-fushi",
  name: "Soneva Fushi",
  rating: 5,
  location: "Kunfunadhoo Island, Baa Atoll",
  transferTime: "30 minutos de hidroavião",
  heroImage,
  heroTitle: "Soneva Fushi - O Original Resort de Luxo Ecológico das Maldivas",
  heroSubtitle: "Resort pioneiro em luxo sustentável em Reserva da Biosfera UNESCO com serviço Mr./Ms. Friday butler, gastronomia autoral e experiência 'No News, No Shoes'",
  heroHighlights: [
    "Baa Atoll - Reserva UNESCO",
    "Mr./Ms. Friday Butler 24h",
    "Cinema Paradiso open-air",
    "Observatório astronômico",
    "6 restaurantes autorais",
    "Luxo ecológico premiado"
  ],
  seoTitle: "Soneva Fushi Maldivas - Resort 5 Estrelas Luxo Sustentável | Baa Atoll UNESCO",
  seoDescription: "Soneva Fushi: resort original de luxo ecológico em Reserva da Biosfera UNESCO. Villas com piscina privativa, Mr./Ms. Friday butler, 6 restaurantes, cinema open-air, observatório e sustentabilidade premiada. Pacotes com café da manhã.",
  about: "Soneva Fushi é o resort original de luxo ecológico das Maldivas, localizado na Ilha Kunfunadhoo, Baa Atoll, que é uma Reserva da Biosfera da UNESCO. O acesso é feito por 30 minutos de hidroavião desde Malé, com chegada pelo lounge próprio do resort. O conceito segue o 'No News, No Shoes', promovendo o contato direto com a natureza, serviço altamente personalizado (Mr./Ms. Friday butler), e experiência sensorial de pés descalços, luxo despretensioso e sustentabilidade premiada. Soneva Fushi é referência absoluta em luxo sustentável, privacidade, gastronomia autoral, wellness e experiências exclusivas nas Maldivas, sendo ideal para casais, famílias e grupos que buscam contato autêntico com natureza, arte, bem-estar e serviço impecável.",
  sections: [
    {
      id: "inclusions",
      title: "Inclusões do Pacote",
      type: "text",
      content: `O pacote Soneva Fushi inclui:

- Café da manhã gourmet incluso
- Bicicletas privativas nas villas
- Serviço de mordomo (Mr./Ms. Friday) 24h
- Wi-Fi em toda a ilha
- Equipamento completo para snorkeling e acesso à house reef
- Esportes aquáticos não motorizados (caiaque, SUP, windsurf)
- Cinema Paradiso ao ar livre, telescópio no Observatório
- Kids club (Den) com programação diária
- Spa Six Senses (academia, wellness, sauna, tratamentos)
- Uso gratuito da biblioteca, salão de jogos, boutique de arte/vidro
- Atividades diárias: yoga, culinária, arte em vidro, sustentabilidade
- Amenities premium, minibar, máquina de chá/café na villa
- Arrumação 2x/dia, serviço noturno, welcome amenity
- Traslado interno por buggy
- Room service 24h`
    },
    {
      id: "gastronomy",
      title: "Atividades e Gastronomia",
      type: "text",
      content: `Esportes Aquáticos e Atividades:

- Snorkeling afamado na house reef (local de tartarugas, raias, peixes coloridos)
- Mergulho PADI (batismos/cursos/saídas guiadas)
- Esportes aquáticos: caiaque, stand-up paddle, windsurf, pesca, boat trips, sandbank picnic
- Cinema Paradiso (cinema open-air)
- Observatório (telescópio para astronomia)
- Spa completo com terapias holísticas, wellness, sauna
- Yoga, fitness, beach volley, tênis, futebol de areia
- Den Kids Club (brinquedoteca, atividades ecológicas, arte)
- Oficina de vidro, estudos ambientais, programas de sustentabilidade

Gastronomia:

- 6 restaurantes principais: Fresh in the Garden (tree top), Out of the Blue (sobre a água com toboágua), Down to Earth (orgânico/internacional), Mihiree Mithaa (buffet), Sobah's (maldiviano), By the Beach (japonês)
- Bares para pôr do sol e degustações privativas
- Chocolateria e sorveteria open-bar para hóspedes
- Jantares privativos, degustações de vinho, floating breakfast
- Experiências personalizadas com Mr./Ms. Friday butler`
    },
    {
      id: "accommodations-text",
      title: "Acomodação",
      type: "text",
      content: `Bangalôs Sobre as Águas com Piscina Privativa:

- Todas as villas oferecem isolamento máximo
- Bicicletas privadas incluídas
- Sala de estar externa/interna
- Amenities premium
- Serviço de arrumação dedicado
- Personalização extrema pelo Mr./Ms. Friday butler
- Piscina privativa
- Acesso direto à praia ou lagoa
- Design sustentável integrado à natureza

Para Famílias:

- Crianças até 5 anos grátis no regime dos pais em datas promocionais
- Menu kids disponível
- Berço e cama extra disponíveis`
    }
  ],
  accommodations: {
    title: "Villas e Bangalôs Sustentáveis",
    description: "Villas e bangalôs espaçosos com design ecológico integrado à natureza, todas com piscina privativa, bicicletas, Mr./Ms. Friday butler exclusivo e máxima privacidade em Reserva da Biosfera UNESCO.",
    types: [
      {
        name: "Villa com Piscina",
        size: "Variável",
        beds: "King-size",
        maxOccupancy: "2 adultos + crianças",
        features: [
          "Piscina privativa",
          "Bicicletas privadas",
          "Mr./Ms. Friday Butler 24h",
          "Sala de estar interna/externa",
          "Amenities premium orgânicos",
          "Minibar e máquina de chá/café",
          "Wi-Fi premium",
          "Arrumação 2x/dia",
          "Design sustentável",
          "Acesso direto à natureza",
          "Isolamento máximo",
          "Room service 24h"
        ]
      },
      {
        name: "Bangalô Overwater",
        size: "Amplo",
        beds: "King-size",
        maxOccupancy: "2-4 adultos + crianças",
        features: [
          "Sobre a lagoa",
          "Piscina privativa",
          "Deck amplo com espreguiçadeiras",
          "Mr./Ms. Friday Butler exclusivo",
          "Acesso direto à água",
          "Bicicletas privadas",
          "Sala de estar panorâmica",
          "Banheiro spa",
          "Amenities orgânicos",
          "Minibar premium",
          "Cinema e observatório acesso incluído",
          "Máxima privacidade"
        ]
      },
      {
        name: "Residência Familiar",
        size: "Extra ampla",
        beds: "Múltiplos King-size",
        maxOccupancy: "6-8+ pessoas",
        features: [
          "Múltiplos quartos",
          "Piscina privativa grande",
          "Bicicletas para toda família",
          "Mr./Ms. Friday Butler dedicado",
          "Salas de estar e jantar",
          "Cozinha completa",
          "Den Kids incluído",
          "Múltiplos banheiros spa",
          "Área de entretenimento",
          "Deck expansivo",
          "Chef privativo disponível",
          "Ideal para famílias e grupos"
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
      question: "Como é o traslado para Soneva Fushi?",
      answer: "O traslado é feito por hidroavião do lounge exclusivo Soneva em Malé, com duração de 30 minutos até Baa Atoll. O voo panorâmico sobre a Reserva da Biosfera UNESCO está incluído no pacote."
    },
    {
      question: "O que é o conceito 'No News, No Shoes'?",
      answer: "É a filosofia do resort que promove desconexão total e contato direto com a natureza. Os hóspedes são encorajados a andar descalços pela ilha e deixar preocupações para trás, vivenciando luxo despretensioso e autêntico."
    },
    {
      question: "O que é o serviço Mr./Ms. Friday?",
      answer: "É o mordomo exclusivo disponível 24h para cada villa, inspirado no personagem Friday do Robinson Crusoé. Ele conhece todos os detalhes da ilha e personaliza cada experiência conforme as preferências dos hóspedes."
    },
    {
      question: "O resort é adequado para famílias?",
      answer: "Sim! Soneva Fushi é perfeito para famílias. Possui Den Kids Club com programação diária, chocolateria e sorveteria open-bar, menu kids em todos os restaurantes, e crianças até 5 anos grátis no regime dos pais em datas promocionais."
    },
    {
      question: "O que torna Soneva Fushi especial?",
      answer: "É o resort original de luxo ecológico das Maldivas, localizado em Reserva da Biosfera UNESCO. Destaca-se pela sustentabilidade premiada, Cinema Paradiso (cinema open-air), Observatório astronômico, gastronomia autoral com 6 restaurantes, e experiência 'No News, No Shoes' única."
    },
    {
      question: "Quais atividades estão incluídas?",
      answer: "Incluídas: snorkeling (house reef com tartarugas), caiaque, SUP, windsurf, Cinema Paradiso, Observatório, Kids Club Den, spa Six Senses (academia/wellness/sauna), yoga, biblioteca, oficinas de vidro/arte, bicicletas, room service 24h e Mr./Ms. Friday butler."
    }
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80",
      alt: "Vista aérea das villas overwater em Baa Atoll"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      alt: "Interior sustentável de villa com design ecológico"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80",
      alt: "Piscina privativa ao pôr do sol"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
      alt: "Cinema Paradiso - cinema ao ar livre sobre a água"
    },
    {
      src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80",
      alt: "Fresh in the Garden - restaurante tree top"
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
      alt: "Observatório astronômico com telescópio"
    }
  ]
};

export default sonevaFushi;
