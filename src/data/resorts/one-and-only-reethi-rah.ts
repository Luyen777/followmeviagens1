import type { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

const oneAndOnlyReethiRah: ResortData = {
  slug: "one-and-only-reethi-rah",
  name: "One&Only Reethi Rah",
  rating: 5,
  location: "Ilha privada de Reethi Rah, North Malé Atoll",
  transferTime: "45-55 minutos de Malé (lancha rápida, iate de luxo ou hidroavião)",
  heroImage: heroImage,
  heroTitle: "One&Only Reethi Rah",
  heroSubtitle: "Um dos mais luxuosos e icônicos resorts das Maldivas em ilha privada de 44 hectares",
  heroHighlights: ["Mordomo em todas as villas", "12 Praias Privadas", "One&Only Spa sobre a Água"],
  seoTitle: "One&Only Reethi Rah - Resort 5★ Luxo Icônico | Follow Me Viagens",
  seoDescription: "One&Only Reethi Rah é considerado um dos mais luxuosos e icônicos resorts das Maldivas, em ilha privada de 44 hectares com 12 praias, serviço de mordomo e máximo espaço e privacidade.",
  about: "One&Only Reethi Rah é considerado um dos mais luxuosos e icônicos resorts das Maldivas, localizado na ilha privada de Reethi Rah, no North Malé Atoll, a cerca de 45-55 minutos do aeroporto de Malé, acessível por lancha rápida, iate de luxo ou hidroavião. A ilha é uma das maiores do arquipélago, com 44 hectares, rodeada por 12 praias de areia fina e lagoas azul-turquesa. O resort foi projetado por Jean-Michel Gathy e é referência global, sendo eleito um dos melhores resorts do Oceano Índico e África em 2025. Reethi Rah significa \"ilha linda\" em Dhivehi, e entrega máximo espaço, privacidade e elegância em cada ponto do hotel.",
  sections: [
    {
      id: "inclusions",
      title: "Inclusões do Pacote",
      type: "text",
      content: `Incluído:

- Bicicletas privativas na villa para circulação
- Serviço de mordomo (butler) em todas as categorias
- Wi-Fi premium em toda a ilha
- Acesso a todas as praias e piscinas do resort
- Uso do fitness center, quadras de tênis, campo de futebol FIFA, rock climbing
- Participação nas aulas de yoga no pavilhão sobre as águas
- Snorkeling livre no house reef (equipamento incluso nas villas)
- Atividades de arte, cerâmica e workshops
- Traslado de buggy interno
- Kids Clubs (KidsOnly para crianças de 4-9 anos; OneTribe para 9-11 anos)
- Lounge de chegada/partida
- Amenities premium, minibar abastecido, máquina de chá/café Nespresso
- Arrumação 2x/dia e serviço noturno
- Welcome amenities e chá de boas-vindas
- Biblioteca, salão de jogos, boutique de compras
- Concierge multilíngue e serviço 24h`
    },
    {
      id: "activities",
      title: "Atividades e Gastronomia",
      type: "text",
      content: `Atividades:

Esportes aquáticos: snorkeling, caiaque, SUP, windsurf, pedalinho, excursões guiadas

Mergulho PADI 5* (cursos e saídas para snorkel/diving em reefs do atol)

One&Only Spa: terapias holísticas, massagens balinesas, sauna, piscina de vitalidade, tratamentos masculino (Barber+Blade)

Piscinas: piscina principal (freeform), lap pool

Futebol, tênis, academia ampla, atividades wellness/yoga

Passeios de barco ou dhoni privativo, pesca esportiva, sandbank picnic, dolphin cruise, tours para ilhas próximas

Atividades culturais e criativas: arte, cerâmica, workshops com artistas

KidsOnly e OneTribe: programa completo com snorkel, culinária, esportes aquáticos, festas, artes e games

Cinema open-air, música ao vivo, festas temáticas e programas semanais

Gastronomia (7 restaurantes e bares principais):

- Botanica: orgânico garden-to-fork
- Rabarbaro: italiano sofisticado
- Hoshi: japonês contemporâneo
- Fanditha: árabe/mediterrâneo à beira-mar
- Tapasake: fusion asiático e grelhados no sunset
- Aqua e Beach Club: drinks, petiscos e refeições leves
- Rah Bar: drinks tropicais e snacks, ponto de sunset
- Room service 24h

Experiências especiais: jantares privados na vila/praia, floating breakfast, degustação de vinhos, sandbank dinner, gastronomia kids e menus vegetarianos/vegan

Adega de vinhos premiada, masterclasses e eventos de chef convidados`
    },
    {
      id: "accommodations-text",
      title: "Acomodação",
      type: "text",
      content: `Bangalô sobre as águas com piscina privativa:

O resort possui 8 conjuntos de Water Villas ultra privativas (cada conjunto com 4 villas), conectadas por passarelas exclusivas e separadas do restante da ilha. As Water Villas contam com piscina infinita privativa, deck panorâmico, acesso direto à lagoa, banheiro de luxo com banheira de imersão, iluminação personalizada, cama king-size, salão, minibar completo, bicicletas e serviço de mordomo 24h. A experiência foca na privacidade e integração completa com o oceano, ideal para casais ou quem busca exclusividade máxima.

Kids até 12 anos free com pais em promoções; berço/cama extra grátis por demanda`
    }
  ],
  accommodations: {
    title: "Acomodações de Luxo",
    description: "Water Villas ultra privativas com piscina infinita, deck panorâmico e serviço de mordomo 24h.",
    types: [
      {
        name: "Water Villa",
        size: "Ultra espaçosa",
        beds: "King-size",
        maxOccupancy: "2 adultos + 2 crianças",
        features: [
          "Piscina infinita privativa",
          "Deck panorâmico sobre a lagoa",
          "Acesso direto à lagoa",
          "Banheiro de luxo com banheira de imersão",
          "Iluminação personalizada",
          "Cama king-size",
          "Salão privativo",
          "Minibar completo",
          "Bicicletas privativas",
          "Serviço de mordomo 24h",
          "Amenities premium",
          "Máquina Nespresso"
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
    notes: "Os valores estão sujeitos a alteração sem aviso prévio. Consulte-nos para obter cotações atualizadas e disponibilidade. Kids até 12 anos free com pais em promoções; berço/cama extra grátis por demanda."
  },
  faqs: [
    {
      question: "Qual é o tempo de traslado do aeroporto até o resort?",
      answer: "O traslado pode ser feito por lancha rápida, iate de luxo ou hidroavião e leva cerca de 45-55 minutos do Aeroporto Internacional de Malé até o One&Only Reethi Rah."
    },
    {
      question: "O resort é adequado para famílias com crianças?",
      answer: "Sim, o resort oferece KidsOnly (4-9 anos) e OneTribe (9-11 anos) com programa completo incluindo snorkel, culinária, esportes aquáticos, festas, artes e games. Kids até 12 anos podem ser hospedados gratuitamente com os pais em promoções. Berço e cama extra disponíveis gratuitamente."
    },
    {
      question: "O que está incluído no pacote?",
      answer: "Incluído: bicicletas privativas, serviço de mordomo em todas as categorias, Wi-Fi premium, acesso a todas as praias e piscinas, fitness center, quadras de tênis, campo de futebol FIFA, yoga, snorkeling, atividades de arte e workshops, buggy interno, Kids Clubs, amenities premium, minibar, máquina Nespresso, arrumação 2x/dia, biblioteca, salão de jogos e concierge 24h."
    },
    {
      question: "Quais restaurantes estão disponíveis?",
      answer: "O resort oferece 7 restaurantes e bares principais: Botanica (orgânico), Rabarbaro (italiano), Hoshi (japonês), Fanditha (árabe/mediterrâneo), Tapasake (fusion asiático), Aqua e Beach Club (drinks e refeições leves) e Rah Bar (sunset bar). Room service 24h disponível."
    },
    {
      question: "Todas as villas têm serviço de mordomo?",
      answer: "Sim, todas as villas do One&Only Reethi Rah incluem serviço de mordomo (butler) 24h, uma marca registrada do resort que garante atendimento personalizado e exclusivo."
    },
    {
      question: "Quantas praias o resort possui?",
      answer: "O resort possui 12 praias de areia fina ao redor da ilha privada de 44 hectares, proporcionando máxima privacidade e exclusividade para os hóspedes."
    },
    {
      question: "O resort oferece atividades aquáticas?",
      answer: "Sim, o resort oferece snorkeling livre no house reef (equipamento incluso), caiaque, SUP, windsurf, pedalinho, excursões guiadas, mergulho PADI 5* (cursos e saídas), passeios de barco privativo, pesca esportiva, sandbank picnic e dolphin cruise."
    },
    {
      question: "O que diferencia o One&Only Reethi Rah?",
      answer: "O resort se destaca como um dos mais luxuosos das Maldivas, com ilha privada de 44 hectares (uma das maiores), 12 praias privadas, projeto de Jean-Michel Gathy, serviço de mordomo em todas as villas, 7 restaurantes premiados, One&Only Spa sobre a água, kids clubs completos e máximo espaço, privacidade e elegância. Eleito um dos melhores resorts do Oceano Índico e África em 2025."
    }
  ],
  images: [
    {
      src: heroImage,
      alt: "One&Only Reethi Rah - Vista aérea da ilha privada"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
      alt: "Water Villa com piscina infinita privativa"
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
      alt: "Deck panorâmico sobre a lagoa"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
      alt: "One&Only Spa sobre a água"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
      alt: "Restaurante Botanica - garden-to-fork"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
      alt: "Restaurante Hoshi - japonês contemporâneo"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
      alt: "Praia privada ao pôr do sol"
    },
    {
      src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
      alt: "Piscina principal freeform"
    },
    {
      src: "https://images.unsplash.com/photo-1587502536785-89fba1def866?q=80&w=2670",
      alt: "KidsOnly Club - atividades para crianças"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
      alt: "Snorkeling no house reef"
    }
  ]
};

export default oneAndOnlyReethiRah;
