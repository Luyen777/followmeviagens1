import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

export const milaidhooIsland: ResortData = {
    slug: "milaidhoo-island",
    name: "Milaidhoo Island Maldives",
    rating: 5,
    location: "Atol Baa (Reserva da Biosfera UNESCO)",
    transferTime: "35 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Milaidhoo Island Maldives",
    heroSubtitle: "Resort boutique 5 estrelas com apenas 50 villas ultra privativas",
    heroHighlights: ["50 Villas Exclusivas", "Piscina Infinita Privativa", "Serviço de Mordomo"],
    seoTitle: "Milaidhoo Island Maldives - Resort Boutique 5★ | Follow Me Viagens",
    seoDescription: "Resort boutique 5 estrelas no Atol Baa com apenas 50 villas ultra privativas, todas com piscina infinita, serviço de mordomo e arquitetura maldiviana autêntica. Exclusivo para maiores de 9 anos.",
    about: "Milaidhoo Island Maldives é um resort boutique 5 estrelas situado em uma ilha particular no Atol Baa (Reserva da Biosfera UNESCO), acessível por hidroavião (35 minutos de Malé). O resort oferece apenas 50 villas ultra privativas (sobre a água ou praia), todas com piscina infinita privativa, serviço de mordomo e arquitetura maldiviana autêntica. Sua filosofia é proporcionada por experiências tranquilas, exclusivas e contato pleno com a natureza oceânica, mantendo foco no luxo natural e atendimento personalizado, ideal para casais e viajantes sofisticados.",
    sections: [
      {
        id: "inclusions",
        title: "Atividades Inclusas",
        type: "text",
        content: `Atividades Inclusas:

- Snorkeling livre na house reef (recife protegido, spot de mergulho)
- Esportes não motorizados: caiaque, SUP, windsurf
- Piscina principal
- Yoga, culinária, wellness, experiências ecológicas
- Excursões: night sandbank, dolphin cruise, picnics privativos
- Aulas de mixologia
- Trilha ecológica
- Programas de regeneração de corais
- Atividades com Manta Trust
- Spa (tratamentos pagos)
- Academia completa
- Shows/sessões culturais
- Biblioteca
- Sala de jogos, sinuca/ping-pong

Atividades com Custo Extra:

- Mergulho PADI
- Esportes motorizados
- Cruzeiros privativos
- Pesca esportiva
- Jantares especiais
- Spa: massagens, rituals mindfulness, wellness holístico`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `Restaurantes:

- Ba'theli Lounge & Restaurant: Único sobre barcos tradicionais focado em culinária maldiviana de alto padrão
- Ocean Restaurant: Cozinha internacional
- Shoreline Grill: Carnes e frutos do mar grelhados à beira-mar
- Bar de praia com piso de areia

Experiências:

- Jantar privativo na praia/sandbank
- Floating breakfast
- Degustações de vinhos
- Menu personalizado
- Serviço in-villa 24h
- Meia pensão inclusa em todas as reservas
- Upgrade para all inclusive sob disponibilidade`
      },
      {
        id: "accommodations-text",
        title: "Acomodação",
        type: "text",
        content: `Water Pool Villa:

- 245 m²
- Deck sobre o oceano
- Piscina borda infinita
- Acesso direto à água
- Sala de jantar externa
- Banheiro com banheira e chuveiro rain
- Vistas panorâmicas

Comodidades nas Villas:

- TV, DVD, dock iPod
- Nespresso
- Minibar com champagne
- Wi-Fi
- Ar-condicionado
- Produtos de banho de alta qualidade
- Roupão
- Menu de travesseiros
- Serviço de mordomo`
      },
      {
        id: "families",
        title: "Política de Crianças e Diferenciais",
        type: "text",
        content: `Política de Crianças:

- Apenas maiores de 9 anos permitidos
- Foco em tranquilidade e privacidade
- Menu kids
- Amenities kid sob consulta
- Berço/cama extra (mediante pedido)

Diferenciais do Resort:

- Resort LGBTQIA+ friendly
- Práticas ambientais (regeneração coral, estação água)
- Programas sociais (Manta Trust)
- Serviço de mordomo
- Experiências totalmente tailor-made
- 50 villas ultra privativas com piscina infinita
- Arquitetura maldiviana autêntica
- Atol Baa - Reserva da Biosfera UNESCO`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "Apenas 50 villas ultra privativas com arquitetura maldiviana autêntica, todas com piscina infinita e serviço de mordomo personalizado.",
      types: [
        {
          name: "Water Pool Villa",
          size: "245m²",
          beds: "King-size",
          maxOccupancy: "2 adultos",
          features: [
            "Deck sobre o oceano",
            "Piscina borda infinita privativa",
            "Acesso direto à água",
            "Sala de jantar externa",
            "Banheiro com banheira e chuveiro rain",
            "Vistas panorâmicas",
            "TV, DVD, dock iPod",
            "Nespresso",
            "Minibar com champagne",
            "Wi-Fi",
            "Ar-condicionado",
            "Produtos de banho de alta qualidade",
            "Roupão",
            "Menu de travesseiros",
            "Serviço de mordomo"
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
        answer: "O traslado é feito por hidroavião, com duração de 35 minutos do Aeroporto Internacional de Malé até o Milaidhoo Island Maldives."
      },
      {
        question: "O resort aceita crianças?",
        answer: "O resort aceita apenas maiores de 9 anos, mantendo o foco em tranquilidade e privacidade. Menu kids e amenities kid disponíveis sob consulta, com berço e cama extra mediante pedido."
      },
      {
        question: "Quantas villas o resort possui?",
        answer: "O Milaidhoo Island é um resort boutique com apenas 50 villas ultra privativas, todas com piscina infinita privativa, serviço de mordomo e arquitetura maldiviana autêntica."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece 3 restaurantes: Ba'theli Lounge & Restaurant (único sobre barcos tradicionais com culinária maldiviana de alto padrão), Ocean Restaurant (internacional) e Shoreline Grill (carnes e frutos do mar grelhados à beira-mar), além de bar de praia com piso de areia."
      },
      {
        question: "O que está incluído nas reservas?",
        answer: "Meia pensão está inclusa em todas as reservas, com opção de upgrade para all inclusive sob disponibilidade. Inclui snorkeling na house reef, esportes não motorizados (caiaque, SUP, windsurf), piscina, yoga, experiências ecológicas, excursões como night sandbank e dolphin cruise, academia completa e shows culturais."
      },
      {
        question: "Quais atividades estão disponíveis?",
        answer: "Gratuitas: snorkeling na house reef, caiaque, SUP, windsurf, piscina, yoga, wellness, trilha ecológica, regeneração de corais, Manta Trust, academia, shows culturais, biblioteca, sinuca/ping-pong. Com custo extra: mergulho PADI, esportes motorizados, cruzeiros privativos, pesca esportiva, spa (massagens, wellness holístico)."
      },
      {
        question: "O que diferencia o Milaidhoo Island?",
        answer: "Resort boutique exclusivo com apenas 50 villas ultra privativas, todas com piscina infinita e serviço de mordomo. Localizado no Atol Baa (Reserva da Biosfera UNESCO), possui arquitetura maldiviana autêntica, restaurante único sobre barcos tradicionais, experiências tailor-made, é LGBTQIA+ friendly e possui práticas ambientais como regeneração coral e parceria com Manta Trust."
      },
      {
        question: "O resort é LGBTQIA+ friendly?",
        answer: "Sim, o Milaidhoo Island Maldives é um resort LGBTQIA+ friendly, oferecendo experiências totalmente personalizadas e ambiente acolhedor para todos os hóspedes."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Milaidhoo Island Maldives - Vista aérea"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water Pool Villa - villa sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa ao pôr do sol"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Ocean Restaurant - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Ba'theli Restaurant - culinária maldiviana"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Shoreline Grill - frutos do mar"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina infinita privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef - snorkeling"
      }
    ]
  };

export default milaidhooIsland;
