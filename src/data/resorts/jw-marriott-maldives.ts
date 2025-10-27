import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

export const jwMarriottMaldives: ResortData = {
    slug: "jw-marriott-maldives",
    name: "JW Marriott Maldives Resort & Spa",
    rating: 6,
    location: "Ilha Vagaru, Atol Shaviyani",
    transferTime: "Hidroavião 1h",
    heroImage: heroImage,
    heroTitle: "JW Marriott Maldives Resort & Spa",
    heroSubtitle: "Resort de luxo 6 estrelas com kids club premiado e gastronomia excepcional",
    heroHighlights: ["All Inclusive Premium", "61 Villas com Piscina", "Kids Club Premiado"],
    seoTitle: "JW Marriott Maldives Resort & Spa - Resort 6★ All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 6 estrelas no Atol Shaviyani com 61 villas privadas, kids club premiado, gastronomia excepcional e spa sobre a água. Ideal para famílias e casais exigentes.",
    about: "JW Marriott Maldives Resort & Spa é um resort de luxo 6 estrelas localizado na exclusiva ilha Vagaru, no Atol Shaviyani, a cerca de 1 hora de hidroavião de Malé. Tem perfil sofisticado e familiar, com 61 villas privadas (praia e sobre a água, incluindo residências duplex) todas com piscina privativa, arquitetura que remete aos barcos Dhoni e amplo espaço. Destaca-se pelo serviço personalizado, kids club ímpar, gastronomia premiada, spa sobre a água e experiências tailor-made para casais, famílias e grupos exigentes.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote (All Inclusive)",
        type: "text",
        content: `Incluído:

- Café da manhã no Aailaa (buffet/à la carte), incluso em todos os planos
- Almoço e jantar à la carte em diversos restaurantes
- Bebidas alcoólicas e não-alcoólicas selecionadas
- Room service 24h
- Minibar completo, reabastecido diariamente
- Experiências kids/família: Little Griffins Kids Club (atividades, jogos, splash pool, oficinas, programas educativos), biblioteca, playground, sala de jogos
- Wi-Fi premium em toda a ilha
- Piscinas principais (três ao ar livre, uma infantil)
- Snorkeling, caiaque, stand-up paddle, bicicletas
- Fitness center 24h com aulas de ioga, pilates e personal
- Quadras esportivas (tênis, vôlei de praia, futebol), tênis de mesa, bilhar
- Bicicletas para adultos/crianças
- Amenities kids: chinelo, livros, cardápio infantil, berço/cama extra sob demanda
- Spa by JW (seis salas duplas e suíte exclusiva, tratamentos Babor, salão)
- Serviço de mordomo/villa host 24h em algumas categorias
- Arrumação duas vezes ao dia
- Concierge multilíngue, welcome drink, amenities chegada`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `Restaurantes e bares (7 opções):

- Aailaa: internacional, café da manhã/à la carte
- Fiamma: italiano, pratos à lenha
- Hashi: asiático/japonês
- Shio: steakhouse e frutos do mar premium
- Kaashi: tailandês à beira-mar
- Wabi Sabi: carta de saquês e cocktails
- Wine Room: degustações privativas

Experiências gastronômicas:

- Floating breakfast, degustação de vinhos, private sandbank BBQ, noite Maldivian
- Jantares especiais na praia, room service 24h
- Menu kids em todos os restaurantes
- Opções vegetarianas/vegan, seleção de vinhos e drinks internacionais`
      },
      {
        id: "activities",
        title: "Atividades",
        type: "text",
        content: `Atividades gratuitas:

- Snorkeling guiado, caiaque, stand-up paddle, equipamentos para esportes aquáticos não motorizados
- Aula de ioga e pilates, sessões fitness no pavilhão aberto ou academia
- Quadras de tênis, tênis de praia, futebol, programas diários de bem-estar
- Kids club e splash pool, sala de jogos, playground, caça ao tesouro, oficinas de arte e culinária para crianças
- Noite de cinema ao ar livre, festas temáticas, eventos culturais semanais
- Biblioteca, passeio de bicicleta na ilha

Atividades com custo extra:

- Mergulho PADI (batismo, cursos, saídas guiadas)
- Esportes motorizados: jet ski, seabob, wakeboard, pesca esportiva
- Passeios privados: iate, cruzeiro pôr do sol, snorkeling com golfinhos, visitas a ilha local/banco de areia
- Tratamentos e day spa (massagens, terapias Babor, ritmos do sono, casal)
- Gastronomia privativa (jantar na villa/praia, degustação chef's table)
- Babysitting e atividades para teens
- Sessão de fotos, experiências honeymoon`
      },
      {
        id: "accommodations-text",
        title: "Acomodações",
        type: "text",
        content: `Tipos de villa:

- Overwater Pool Villas (até 274m²)
- Duplex Overwater Pool Villa (residências de dois andares)

Características:

- Piscina infinita privativa, terraço amplo, sala de banho, banheira imersa
- Vista mar/jardim ou sunset
- Amenidades premium: cama king, minibar, máquina Nespresso
- Menu de travesseiros, smart TV, amenities de banho, bicicletas
- Decoração moderna, design inspirado em natureza e tradição maldívia
- Opção de residências familiares (2 quartos), ideais para grupos pequenos e famílias`
      },
      {
        id: "families",
        title: "Famílias e Diferenciais",
        type: "text",
        content: `Para famílias:

- Kids Club premiado, programa teens, piscina infantil, splash park
- Villas de 2 quartos e residências exclusivas para famílias/grupos
- Menu infantil, amenities baby, babysitter e oficinas criativas

Diferenciais do resort:

- Design inspirado nas tradições navais maldivas (dhoni), arquitetura moderna
- Piscinas privativas em todas as villas, excelente house reef, privacidade
- Spa sobre a água, wellness premium
- Resort eco-friendly, práticas sustentáveis
- Serviços multilíngues, excelência Marriott
- Gastronomia premiada com 7 restaurantes e bares
- Experiências tailor-made para casais, famílias e grupos exigentes`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "Todas as villas oferecem privacidade excepcional, piscina privativa e design contemporâneo inspirado nas tradições navais maldivas.",
      types: [
        {
          name: "Overwater Pool Villa",
          size: "Até 274m²",
          beds: "King-size",
          maxOccupancy: "3 adultos ou 2 adultos + 2 crianças",
          features: [
            "Piscina infinita privativa",
            "Terraço amplo com espreguiçadeiras",
            "Banheira imersa e chuveiro",
            "Vista mar, jardim ou sunset",
            "Cama king-size com menu de travesseiros",
            "Minibar reabastecido diariamente",
            "Máquina Nespresso",
            "Smart TV e Wi-Fi premium",
            "Amenities de banho premium",
            "Bicicletas particulares",
            "Ar-condicionado",
            "Cofre e cofre digital"
          ]
        },
        {
          name: "Duplex Overwater Pool Villa",
          size: "Residência de dois andares",
          beds: "King-size (2 quartos)",
          maxOccupancy: "4 adultos + 2 crianças",
          features: [
            "Dois andares com quartos separados",
            "Piscina infinita privativa",
            "Terraço amplo e múltiplos espaços de convivência",
            "Duas banheiras e chuveiros",
            "Vista panorâmica do oceano",
            "Sala de estar espaçosa",
            "Minibar completo",
            "Máquinas Nespresso",
            "Smart TVs em ambos os andares",
            "Amenities premium",
            "Ideal para famílias e grupos",
            "Serviço de mordomo disponível"
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
        answer: "O traslado é feito por hidroavião e leva cerca de 1 hora do Aeroporto Internacional de Malé até o JW Marriott Maldives Resort & Spa."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort é ideal para famílias. Possui Little Griffins Kids Club premiado com atividades diversificadas, splash pool, oficinas educativas, playground, biblioteca, sala de jogos, piscina infantil, menu infantil em todos os restaurantes e residências de 2 quartos. Babysitting disponível com custo extra."
      },
      {
        question: "O que está incluído no pacote all inclusive?",
        answer: "O all inclusive premium inclui café da manhã, almoço e jantar à la carte em diversos restaurantes, bebidas alcoólicas e não-alcoólicas, room service 24h, minibar reabastecido, experiências kids club, Wi-Fi premium, piscinas, snorkeling, caiaque, SUP, bicicletas, fitness center com yoga e pilates, quadras esportivas, amenities kids, spa by JW, arrumação 2x ao dia e concierge multilíngue."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece 7 opções de gastronomia: Aailaa (internacional), Fiamma (italiano), Hashi (asiático/japonês), Shio (steakhouse premium), Kaashi (tailandês), Wabi Sabi (bar de saquês e cocktails) e Wine Room (degustações privativas). Menu kids disponível em todos os restaurantes."
      },
      {
        question: "Quais atividades estão disponíveis?",
        answer: "Gratuitas: snorkeling guiado, caiaque, SUP, ioga, pilates, fitness, quadras de tênis/vôlei/futebol, kids club, splash pool, playground, oficinas infantis, cinema ao ar livre, festas temáticas, biblioteca, bicicletas. Com custo extra: mergulho PADI, jet ski, seabob, wakeboard, pesca esportiva, passeios privados, tratamentos spa completos, jantares privativos, babysitting, fotos profissionais."
      },
      {
        question: "O resort possui spa?",
        answer: "Sim, o resort possui Spa by JW sobre a água com seis salas duplas e suíte exclusiva, oferecendo tratamentos premium Babor, massagens, terapias para casal, ritmos do sono e salão de beleza. Diversos tratamentos estão incluídos no pacote."
      },
      {
        question: "O que diferencia o JW Marriott Maldives?",
        answer: "O resort se destaca pelo kids club premiado (Little Griffins), arquitetura inspirada nos barcos Dhoni tradicionais, 7 restaurantes e bares de gastronomia excepcional, spa sobre a água, 61 villas exclusivas todas com piscina privativa, residências duplex para famílias, excelente house reef, práticas sustentáveis e a excelência reconhecida da marca Marriott."
      },
      {
        question: "O resort aceita crianças?",
        answer: "Sim, o resort é family-friendly com estrutura completa: kids club premiado, splash pool, playground, menu infantil, amenities baby, berço e cama extra, villas de 2 quartos e babysitting disponível (extra)."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "JW Marriott Maldives Resort & Spa - Vista aérea da ilha"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Overwater Pool Villa - villa sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa ao pôr do sol com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa by JW - tratamentos de luxo sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Aailaa Restaurant - café da manhã internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Hashi Restaurant - gastronomia asiática e japonesa"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Fiamma Restaurant - culinária italiana"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina principal com vista para o oceano"
      },
      {
        src: "https://images.unsplash.com/photo-1587502536785-89fba1def866?q=80&w=2670",
        alt: "Little Griffins Kids Club - área infantil"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef - snorkeling"
      }
    ]
  };

export default jwMarriottMaldives;
