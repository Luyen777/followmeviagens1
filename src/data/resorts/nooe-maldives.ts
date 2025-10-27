import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

export const nooeMaldives: ResortData = {
    slug: "nooe-maldives",
    name: "NOOE Maldives Kunaavashi",
    rating: 5,
    location: "Vaavu Atoll",
    transferTime: "75 minutos de lancha ou 25 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "NOOE Maldives Kunaavashi",
    heroSubtitle: "Resort 5 estrelas com 72 villas modernas e house reef famoso",
    heroHighlights: ["72 Villas Modernas", "Duplex Overwater Villas", "House Reef com Tartarugas"],
    seoTitle: "NOOE Maldives Kunaavashi - Resort 5★ Vaavu Atoll | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas no Vaavu Atoll com 72 villas modernas, Duplex Overwater Villas com piscina privativa, house reef famoso por tartarugas e kids club completo. Ideal para casais, famílias e grupos.",
    about: "NOOE Maldives Kunaavashi é um resort 5 estrelas localizado no Vaavu Atoll, acessível em 75 minutos de lancha ou 25 minutos de hidroavião de Malé. O resort combina sofisticação e autenticidade maldiviana, ideal para casais, famílias e grupos, oferecendo 72 villas modernas à beira-mar e sobre a água, todas com privacidade, vistas abertas para o mar e design contemporâneo integrado à natureza.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Três refeições diárias (café da manhã, almoço e jantar em múltiplos pontos)
- Welcome drink
- Tratamento VIP na chegada
- Traslado speedboat ou hidroavião incluso em promoções/pacotes específicos
- Atividades aquáticas não motorizadas: caiaque, stand-up paddle, equipamentos de snorkel
- Amenidades para honeymoon: decoração especial, vinho/suco com sobremesa, presentinho, descontos de spa e loja
- Wi-Fi premium em toda a ilha
- Limpeza 2x/dia
- Amenities kids
- Bicicletas (sujeito a disponibilidade)`
      },
      {
        id: "activities",
        title: "Atividades e Lazer",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling e mergulho em house reef famoso por tartarugas, tubarões-nurse e recifes coloridos
- Infinity pool
- Centro fitness
- Kids Club completo (playground indoor/outdoor, atividades diárias)
- Área teens
- Jogos de tabuleiro
- Cinema open-air
- Programação de bem-estar (yoga, alongamento, trilhas)

Atividades com Custo Extra:

- Esportes aquáticos motorizados: jet ski, seabob, wakeboard
- Pesca oceânica
- Mergulho PADI
- Spa panorâmico
- Passeios guiados para ver golfinhos
- Piqueniques em sandbank
- Cruzeiros privativos
- Festas temáticas e eventos noturnos`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `Seis Espaços Gastronômicos:

- Buffet clássico
- Fine dining
- Restaurante japonês Washoku (teppanyaki)
- Mediterrâneo à beira-piscina
- Grills gourmet
- Bar de piscina com petiscos
- Beach lounge

Menus Especiais:

- Menus kids
- Dietas adaptadas

Experiências:

- Floating breakfast
- Jantares privativos na praia
- Degustação de vinhos
- Menu personalizado in-villa`
      },
      {
        id: "accommodations-text",
        title: "Acomodação",
        type: "text",
        content: `Duplex Overwater Villas com Piscina Privativa:

- Design inovador em dois andares
- Piscina suspensa
- Quarto master panorâmico
- Espaço social separado
- Rede sobre a água
- Banheira com vista oceano

Comodidades nas Villas:

- Minibar
- Wi-Fi
- Smart TV
- Menu de travesseiros
- Ar-condicionado
- Serviço de mordomo/butler sob solicitação
- Presidential Villas exclusivas com espaços amplos, decoração de luxo e acessibilidade máxima`
      },
      {
        id: "families",
        title: "Famílias e Diferenciais",
        type: "text",
        content: `Para Famílias:

- Até 2 crianças free por villa em várias promoções
- Kids club
- Amenities baby e menu kids gratuitos
- Berço/cama extra a pedido
- Villas conectáveis
- Villas residenciais com piscina privativa

Diferenciais do Resort:

- Resort pet friendly sob consulta
- Práticas sustentáveis
- Serviço multilíngue
- Foco em hospitalidade personalizada
- 72 villas modernas
- Design contemporâneo integrado à natureza
- House reef famoso por tartarugas e tubarões-nurse
- Duplex Overwater Villas inovadoras`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "72 villas modernas com design contemporâneo integrado à natureza, incluindo Duplex Overwater Villas inovadoras com piscina privativa.",
      types: [
        {
          name: "Duplex Overwater Villa com Piscina Privativa",
          size: "Consultar",
          beds: "King-size",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Design inovador em dois andares",
            "Piscina suspensa privativa",
            "Quarto master panorâmico",
            "Espaço social separado",
            "Rede sobre a água",
            "Banheira com vista oceano",
            "Minibar",
            "Wi-Fi",
            "Smart TV",
            "Menu de travesseiros",
            "Ar-condicionado",
            "Serviço de mordomo/butler sob solicitação"
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
        answer: "O traslado pode ser feito por lancha rápida (75 minutos) ou hidroavião (25 minutos) do Aeroporto Internacional de Malé até o NOOE Maldives Kunaavashi. O traslado está incluso em promoções/pacotes específicos."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort é ideal para famílias. Possui Kids Club completo com playground indoor/outdoor e atividades diárias, área teens, menus kids gratuitos, amenities baby, berço e cama extra a pedido, e até 2 crianças free por villa em várias promoções. Há também villas conectáveis e residenciais."
      },
      {
        question: "O que são as Duplex Overwater Villas?",
        answer: "São villas inovadoras com design em dois andares, piscina suspensa privativa, quarto master panorâmico, espaço social separado, rede sobre a água e banheira com vista oceano. Representam o máximo em sofisticação e privacidade."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece seis espaços gastronômicos: buffet clássico, fine dining, restaurante japonês Washoku (teppanyaki), mediterrâneo à beira-piscina, grills gourmet, bar de piscina com petiscos e beach lounge. Todos com menus kids e dietas adaptadas."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "Incluído: três refeições diárias, welcome drink, tratamento VIP, traslado (em promoções específicas), atividades aquáticas não motorizadas (caiaque, SUP, snorkel), amenidades para honeymoon (decoração, vinho/suco, presentinho, descontos), Wi-Fi premium, limpeza 2x/dia, amenities kids e bicicletas."
      },
      {
        question: "O house reef é bom para snorkeling?",
        answer: "Sim, o house reef do NOOE Maldives é famoso por tartarugas, tubarões-nurse e recifes coloridos, sendo um dos principais atrativos para snorkeling e mergulho. Equipamentos de snorkel estão incluídos."
      },
      {
        question: "Quais atividades estão disponíveis?",
        answer: "Gratuitas: snorkeling no house reef, infinity pool, fitness, kids club, área teens, jogos, cinema open-air, yoga, alongamento, trilhas. Com custo extra: jet ski, seabob, wakeboard, pesca oceânica, mergulho PADI, spa panorâmico, passeios para ver golfinhos, piqueniques em sandbank, cruzeiros privativos."
      },
      {
        question: "O que diferencia o NOOE Maldives?",
        answer: "Resort 5 estrelas no Vaavu Atoll com 72 villas modernas, Duplex Overwater Villas inovadoras com piscina suspensa, house reef famoso por tartarugas e tubarões-nurse, seis espaços gastronômicos (incluindo japonês teppanyaki), kids club completo, até 2 crianças free, pet friendly sob consulta, práticas sustentáveis e hospitalidade personalizada. Ideal para casais, famílias e grupos."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "NOOE Maldives Kunaavashi - Vista aérea"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Duplex Overwater Villa - villa sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa ao pôr do sol"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa panorâmico - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Buffet Restaurant - gastronomia internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Washoku Restaurant - gastronomia japonesa"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Fine Dining - experiência gastronômica"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Infinity pool"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef - snorkeling com tartarugas"
      }
    ]
  };

export default nooeMaldives;
