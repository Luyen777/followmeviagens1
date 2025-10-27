/**
 * MALDIVES RESORTS DATA INDEX
 * 
 * NEW STRUCTURE (for efficiency):
 * - New resorts should be created in src/data/resorts/[slug].ts
 * - Import and add them to the maldivesResorts object below
 * - This reduces file size and credit usage for future edits
 * 
 * MIGRATION PLAN:
 * - Existing resorts remain inline for now
 * - Will be gradually migrated to individual files as needed
 */

import heroImage from "@/assets/maldives-hero-latest.avif";
import adaaranOverwaterVillasAerial from "@/assets/adaaran-select/overwater-villas-aerial.jpg";

// New modular imports (add new resorts here)
import intercontinentalMaldives from "./resorts/intercontinental-maldives";
import oneAndOnlyReethiRah from "./resorts/one-and-only-reethi-rah";
import patinaMaldives from "./resorts/patina-maldives";
import radissonBlu from "./resorts/radisson-blu";
import ritzCarltonMaldives from "./resorts/ritz-carlton-maldives";
import sixSensesKanuhura from "./resorts/six-senses-kanuhura";
import sixSensesLaamu from "./resorts/six-senses-laamu";
import siyamWorld from "./resorts/siyam-world";
import soMaldives from "./resorts/so-maldives";
import sonevaJani from "./resorts/soneva-jani";
import sonevaFushi from "./resorts/soneva-fushi";
import sonevaSecret from "./resorts/soneva-secret";
import theNautilus from "./resorts/the-nautilus";
import vakkaruMaldives from "./resorts/vakkaru-maldives";
import velaaPrivateIsland from "./resorts/velaa-private-island";
import waldorfAstoriaMaldives from "./resorts/waldorf-astoria-maldives";
import youAndMeByCocoon from "./resorts/you-and-me-by-cocoon";
import giliLankanfushi from "./resorts/gili-lankanfushi";
import kudadoo from "./resorts/kudadoo";
import joaliBeing from "./resorts/joali-being";
import conradMaldives from "./resorts/conrad-maldives";
import anantaraKihavah from "./resorts/anantara-kihavah";
import fourSeasonsKudaHuraa from "./resorts/four-seasons-kuda-huraa";
import fourSeasonsLandaaGiraavaru from "./resorts/four-seasons-landaa-giraavaru";
import chevalBlancRandheli from "./resorts/cheval-blanc-randheli";
import joaliMaldives from "./resorts/joali-maldives";
import niyamaPrivateIslands from "./resorts/niyama-private-islands";
import adaaranSelect from "./resorts/adaaran-select";
import amillaMaldives from "./resorts/amilla-maldives";
import anantaraDhigu from "./resorts/anantara-dhigu";
import ayadaMaldives from "./resorts/ayada-maldives";
import comoMaalifushi from "./resorts/como-maalifushi";
import emeraldFaarufushi from "./resorts/emerald-faarufushi";
import emeraldMaldives from "./resorts/emerald-maldives";
import fairmontMaldives from "./resorts/fairmont-maldives";
import finolhu from "./resorts/finolhu";
import hardRock from "./resorts/hard-rock";
import heritanceAarah from "./resorts/heritance-aarah";
import hideawayBeachResort from "./resorts/hideaway-beach-resort";
import hurawalhiIsland from "./resorts/hurawalhi-island";
import huvafenFushi from "./resorts/huvafen-fushi";
import iruVeli from "./resorts/iru-veli";
import jawakaraIslands from "./resorts/jawakara-islands";
import jwMarriottMaldives from "./resorts/jw-marriott-maldives";
import leMeridien from "./resorts/le-meridien";
import milaidhooIsland from "./resorts/milaidhoo-island";
import nooeMaldives from "./resorts/nooe-maldives";
import adaaranBeachVillasAerial from "@/assets/adaaran-select/beach-villas-aerial.jpg";
import adaaranBuffetRestaurant from "@/assets/adaaran-select/buffet-restaurant.jpg";
import adaaranSunsetVillaInterior from "@/assets/adaaran-select/sunset-villa-interior.jpg";
import adaaranDivingCoralReef from "@/assets/adaaran-select/diving-coral-reef.jpg";
import adaaranVillaBathroomOceanView from "@/assets/adaaran-select/villa-bathroom-ocean-view.jpg";
import adaaranMainRestaurantInterior from "@/assets/adaaran-select/main-restaurant-interior.jpg";
import adaaranSunsetWaterVillaRoom from "@/assets/adaaran-select/sunset-water-villa-room.jpg";
import adaaranResortAerialPool from "@/assets/adaaran-select/resort-aerial-pool.jpg";
import adaaranIslandAerialView from "@/assets/adaaran-select/island-aerial-view.jpg";

export interface ResortData {
  slug: string;
  name: string;
  rating: number;
  location: string;
  transferTime: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHighlights: string[];
  seoTitle: string;
  seoDescription: string;
  about: string;
  sections: Array<{
    id: string;
    title: string;
    subtitle?: string;
    type: 'list' | 'cards' | 'text' | 'two-column';
    items?: Array<{
      title?: string;
      description?: string;
      icon?: string;
      badge?: string;
      items?: string[];
    }>;
    content?: string;
  }>;
  accommodations: {
    title: string;
    description: string;
    types: Array<{
      name: string;
      size: string;
      beds: string;
      maxOccupancy: string;
      features: string[];
    }>;
  };
  pricing: {
    seasons: Array<{
      name: string;
      period: string;
      priceText: string;
      priceSubtext?: string;
    }>;
    paymentTerms: string[];
    cancellationPolicy: string;
    notes?: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const maldivesResorts: Record<string, ResortData> = {
  "ayada-maldives": ayadaMaldives,
  "amilla-maldives": amillaMaldives,
  "adaaran-select": adaaranSelect,
  "anantara-dhigu": anantaraDhigu,
  "anantara-kihavah": anantaraKihavah,
  "cheval-blanc-randheli": chevalBlancRandheli,
  "como-maalifushi": comoMaalifushi,
  "conrad-maldives": conradMaldives,
  "emerald-maldives": emeraldMaldives,
  "emerald-faarufushi": emeraldFaarufushi,
  "fairmont-maldives": fairmontMaldives,
  "four-seasons-kuda": fourSeasonsKudaHuraa,
  "four-seasons-landaa": fourSeasonsLandaaGiraavaru,
  "finolhu": finolhu,
  "gili-lankanfushi": giliLankanfushi,
  "hard-rock": hardRock,
  "heritance-aarah": heritanceAarah,
  "hideaway-beach-resort": hideawayBeachResort,
  "hurawalhi-island": hurawalhiIsland,
  "huvafen-fushi": huvafenFushi,
  "iru-veli": iruVeli,
  "jawakara-islands": jawakaraIslands,
  "le-meridien": leMeridien,
  "milaidhoo-island": milaidhooIsland,
  "niyama-private-islands": niyamaPrivateIslands,
  "nooe-maldives": nooeMaldives,
  "joali-being": joaliBeing,
  "joali-maldives": joaliMaldives,
  "jw-marriott-maldives": jwMarriottMaldives,
  "kuda-villingili": {
    slug: "kuda-villingili",
    name: "Kuda Villingili Resort Maldives",
    rating: 6,
    location: "North Malé Atoll, ilha privada",
    transferTime: "Lancha rápida 30min",
    heroImage: heroImage,
    heroTitle: "Kuda Villingili Resort Maldives",
    heroSubtitle: "Resort 6 estrelas com piscina de 150 metros e personalização total",
    heroHighlights: ["Breakfast Incluído", "Piscina Panorâmica 150m", "Kids Club"],
    seoTitle: "Kuda Villingili Resort Maldives - Resort 6★ North Malé | Follow Me Viagens",
    seoDescription: "Resort 6 estrelas no North Malé Atoll com piscina panorâmica de 150 metros, kids club estruturado e experiências personalizadas. Traslado de 30 minutos de lancha.",
    about: "Kuda Villingili Resort Maldives é um resort 6 estrelas em uma ilha privada no North Malé Atoll, a cerca de 30 minutos de lancha rápida de Malé. O resort é reconhecido pela atmosfera sofisticada, atendimento atencioso e infraestrutura contemporânea cercada por praias de areia branca e lagoa azul-turquesa. Abriga diferentes perfis de viajantes—casais, famílias ou grupos de amigos—com destaque para união, privacidade e personalização da experiência.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã no restaurante principal ("The Restaurant")
- Welcome amenity, frutas frescas e água mineral
- Traslado regular de lancha rápida incluído em muitos pacotes
- Uso gratuito de todos os esportes aquáticos não motorizados: caiaque, stand-up paddle, pedalinho, windsurf
- Equipamento de snorkeling de cortesia (máscara e nadadeiras)
- Uso incluído do centro de fitness, academia aberta 24h e quadras de tênis, vôlei de praia e futebol
- Programação de aulas de yoga e atividades wellness
- Piscina panorâmica de 150 metros (uma das maiores das Maldivas)
- Bicicletas gratuitas sob disponibilidade
- Kids Club, playground e atividades para crianças
- Wi-Fi de alta velocidade grátis em toda a ilha
- Entretenimento noturno, shows e eventos semanais
- Arrumação e serviço de abertura de cama
- Concierge multilíngue, serviço de lavanderia, área de negócios
- Serviços especiais sob demanda: mordomo, chef privado, organização de experiências exclusivas`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `Restaurantes e bares:

- The Restaurant: café buffet internacional, almoço e jantar à la carte
- Restaurantes de especialidade: opções asiática, mediterrânea, grelhados, frutos do mar e fast-food saudável
- Bares: pool bar panorâmico, beach bar, sunset bar (cocktails, vinhos, cervejas premium)

Experiências gastronômicas:

- Room service 24h e experiências privadas: floating breakfast, jantares na praia/sandbank, wine/cheese tasting
- Opções vegetarianas, kids menu, adega para degustações
- Temas e eventos gastronômicos regulares, noites culturais, sushi, churrasco e festas na praia`
      },
      {
        id: "activities",
        title: "Atividades e Facilidades",
        type: "text",
        content: `Atividades gratuitas:

- Esportes não motorizados: SUP, caiaque, pedalinho, windsurf
- Snorkeling livre; house reef com vida marinha rica
- Piscina de 150m, central, com borda infinita
- Quadra de tênis, academia moderna, beach volley, futebol de areia
- Yoga diária e aulas de wellness
- Kids Club estruturado, playground
- Cinema ao ar livre, eventos culturais, shows noturnos
- Bicicletas para hóspedes
- Biblioteca, salão de jogos, área de negócios

Atividades com custo extra:

- Esportes aquáticos motorizados: jet ski, seabob, wakeboard, parasailing
- Mergulho PADI: cursos, batismos, saídas guiadas, snorkeling com guia
- Cruzeiros privativos: pôr do sol, pesca, sandbank/ilhas desertas, dolphin/whale watching
- Tratamentos no Kuda Spa: massagens balinesas, aromaterapia, hidroterapia e rituais de casal
- Jantares temáticos, BBQ privativo, experiências à la carte
- Babá e serviço de fotografia, chef privativo, experiências especiais para celebrações`
      },
      {
        id: "accommodations-text",
        title: "Acomodações",
        type: "text",
        content: `Características das villas:

- Overwater villas, decoradas em estilo contemporâneo e amplo espaço privativo
- Opções para famílias e casais

Amenidades incluídas:

- Cama king-size, ar-condicionado, TV de tela plana
- Wi-Fi, minibar, banheiro completo (algumas com chuveiro externo/banheira)
- Amenities premium, deck com vista
- Serviço diário de arrumação, menu de travesseiros
- Amenities kids sob solicitação
- Serviço de mordomo disponível mediante categoria ou solicitação`
      },
      {
        id: "families",
        title: "Famílias, Crianças e Diferenciais",
        type: "text",
        content: `Para famílias:

- Kids até 12 anos grátis (em planos e épocas promocionais)
- Kids Club completo, playground, atividades, menus kids
- Amenities baby sob consulta
- Serviço de babá (sob demanda, pago à parte)
- Villas família com quartos conectados, amplos espaços externos, privacidade

Diferenciais do resort:

- Piscina panorâmica de 150 metros (uma das maiores das Maldivas)
- Resort LGBTQ+ friendly e multilingue
- Concierge dedicado para casais, famílias e eventos
- Foco em privacidade, arquitetura contemporânea, sustentabilidade
- Práticas eco-friendly
- Prêmios regionais como melhor piscina das Maldivas
- Recomendação por agências especializadas
- Destaque em hospitalidade personalizada e equipe multilíngue
- House reef com vida marinha rica`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "Overwater villas em estilo contemporâneo com amplo espaço privativo, perfeitas para casais e famílias que buscam conforto e privacidade.",
      types: [
        {
          name: "Overwater Villa",
          size: "Amplo espaço privativo",
          beds: "King-size",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Design contemporâneo",
            "Deck privativo com vista",
            "Banheiro completo (algumas com chuveiro externo/banheira)",
            "Cama king-size com menu de travesseiros",
            "Ar-condicionado",
            "TV de tela plana",
            "Wi-Fi gratuito",
            "Minibar",
            "Amenities premium",
            "Serviço diário de arrumação",
            "Amenities kids sob solicitação",
            "Cofre"
          ]
        },
        {
          name: "Family Villa",
          size: "Quartos conectados",
          beds: "King-size + quartos adicionais",
          maxOccupancy: "4 adultos + 2 crianças",
          features: [
            "Quartos conectados ideais para famílias",
            "Amplos espaços externos privativos",
            "Deck com vista panorâmica",
            "Banheiros completos",
            "Design contemporâneo",
            "Ar-condicionado em todos os ambientes",
            "TVs de tela plana",
            "Wi-Fi gratuito",
            "Minibar completo",
            "Amenities premium",
            "Amenities kids incluídos",
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
          priceSubtext: "por pessoa, por noite, café da manhã incluído"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "por pessoa, por noite, café da manhã incluído"
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
        answer: "O traslado é feito por lancha rápida e leva cerca de 30 minutos do Aeroporto Internacional de Malé até o Kuda Villingili Resort Maldives."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort é ideal para famílias. Possui Kids Club completo, playground, atividades diversificadas, menus kids em todos os restaurantes, amenities baby sob consulta, villas família com quartos conectados e piscina infantil. Kids até 12 anos grátis em planos e épocas promocionais. Babysitting disponível com custo extra."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã no The Restaurant, welcome amenity, frutas frescas, água mineral, traslado de lancha em muitos planos, esportes aquáticos não motorizados (caiaque, SUP, pedalinho, windsurf), equipamento de snorkeling, fitness center 24h, quadras esportivas, yoga, wellness, piscina panorâmica de 150m, bicicletas, Kids Club, Wi-Fi, entretenimento noturno, arrumação, concierge multilíngue e serviços especiais sob demanda."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece The Restaurant (internacional buffet e à la carte), restaurantes de especialidade (asiática, mediterrânea, grelhados, frutos do mar, fast-food saudável), pool bar panorâmico, beach bar e sunset bar. Room service 24h disponível. Experiências privadas incluem floating breakfast, jantares na praia/sandbank e wine/cheese tasting."
      },
      {
        question: "Quais atividades estão disponíveis?",
        answer: "Gratuitas: SUP, caiaque, pedalinho, windsurf, snorkeling, piscina de 150m, quadra de tênis, academia, beach volley, futebol, yoga, wellness, Kids Club, playground, cinema ao ar livre, shows, bicicletas, biblioteca, salão de jogos. Com custo extra: jet ski, seabob, wakeboard, parasailing, mergulho PADI, cruzeiros privativos, pesca, dolphin watching, tratamentos spa, jantares temáticos, BBQ privativo, babá, fotografia profissional."
      },
      {
        question: "O resort possui spa?",
        answer: "Sim, o resort possui Kuda Spa oferecendo massagens balinesas, aromaterapia, hidroterapia e rituais de casal. Tratamentos disponíveis com custo extra."
      },
      {
        question: "O que diferencia o Kuda Villingili Resort?",
        answer: "O resort se destaca pela piscina panorâmica de 150 metros (uma das maiores das Maldivas), traslado curto de apenas 30 minutos, atmosfera sofisticada, atendimento personalizado, house reef rico em vida marinha, arquitetura contemporânea, práticas eco-friendly sustentáveis, equipe multilíngue e prêmios regionais incluindo melhor piscina das Maldivas."
      },
      {
        question: "O resort aceita crianças?",
        answer: "Sim, o resort é family-friendly com estrutura completa: Kids Club, playground, piscina infantil, menu kids em todos os restaurantes, amenities baby, villas família com quartos conectados, kids até 12 anos grátis em promoções e babysitting disponível (extra)."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Kuda Villingili Resort Maldives - Vista aérea da ilha"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Overwater Villa - villa sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Piscina panorâmica de 150 metros"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Kuda Spa - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "The Restaurant - café da manhã internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Restaurante de especialidade - gastronomia asiática"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Beach Bar - sunset drinks"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Deck privativo com vista para o oceano"
      },
      {
        src: "https://images.unsplash.com/photo-1587502536785-89fba1def866?q=80&w=2670",
        alt: "Kids Club - área infantil"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef - snorkeling"
      }
    ]
  },
  "kudadoo": kudadoo,
  "kuredhivaru": {
    slug: "kuredhivaru",
    name: "Kuredhivaru Maldives",
    rating: 6,
    location: "Atol Noonu",
    transferTime: "45 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Kuredhivaru Maldives",
    heroSubtitle: "Luxo e Privacidade no Atol Noonu",
    heroHighlights: [
      "Resort 6 estrelas com villas privativas",
      "Piscina privativa em todas as villas",
      "All Inclusive premium",
      "Kids Club completo",
      "House reef excepcional"
    ],
    seoTitle: "Kuredhivaru Maldives - Resort 6 Estrelas All Inclusive | Atol Noonu",
    seoDescription: "Experimente o luxo do Kuredhivaru Resort & Spa Maldives, resort 6 estrelas no Atol Noonu. Villas com piscina privativa, all inclusive premium, kids club e house reef excepcional. Pacote completo de 5 dias.",
    about: `Kuredhivaru Resort & Spa Maldives, anteriormente Mövenpick, é um resort 6 estrelas localizado na ilha de Kuredhivaru, Atol Noonu, a cerca de 45 minutos de hidroavião de Malé. O resort é conhecido pelo alto padrão de serviço, villas de praia e sobre a água com piscina privativa, ambiente sofisticado e clima ideal para casais, famílias e grupos que buscam privacidade, conforto e contato privilegiado com o oceano Índico.`,
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote (All Inclusive)",
        type: "text",
        content: `Incluído:

- Lounge VIP no terminal de hidroavião
- Café da manhã buffet no restaurante ONU Marché
- Almoço à la carte nos restaurantes Latitude 5.5 ou Bodumas
- Jantar em estilo buffet no ONU Marché ou à la carte nos mesmos restaurantes
- Chocolate e sorvete cortesia na "hora do chocolate" (16-17h)
- Bebidas alcoólicas e não alcoólicas nos bares durante horário de funcionamento (exceto OAK Lounge)
- Minibar reabastecido diariamente
- Uso de equipamentos para snorkeling
- Esportes aquáticos não motorizados (caiaque, windsurf, SUP, exceto caiaque transparente/bicicleta aquática)
- Academia fitness, quadras de tênis, vôlei de praia e poliesportiva
- Sessões de yoga em grupo (manhã e fim de tarde)
- Kids Club (Little Birds Club)`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `Experiências gastronômicas refinadas:

Restaurantes:

- ONU Marché: restaurante principal, culinária internacional (buffet e à la carte, noites temáticas)
- Latitude 5.5: grelhados e pratos internacionais à beira da piscina
- Bodumas: frutos do mar, internacional, ambiente mais intimista
- In-villa dining: refeições particulares na villa, experiências customizadas como jantares privativos ou BBQ

Bebidas e experiências:

- Cartas de vinhos e coquetéis premium
- Sorveteria
- Hora do chocolate diária (16-17h)
- Minibar incluso e reabastecido diariamente`
      },
      {
        id: "wellness-activities",
        title: "Wellness e Atividades",
        type: "text",
        content: `Bem-estar e lazer completos:

Wellness:

- Sun Spa by Esthederm: massagens, tratamentos faciais/corporais, wellness
- Duas piscinas externas (uma dedicada ao relaxamento)
- Spa completo com tratamentos Esthederm
- Pavilhão de yoga com sessões em grupo

Atividades incluídas:

- Snorkeling e mergulho autônomo em house reef com vida marinha rica
- Equipamentos de snorkeling inclusos
- Esportes aquáticos não motorizados (caiaque, windsurf, SUP)
- Atividades e esportes terrestres: tênis, vôlei, futebol
- Salão de jogos
- Academia fitness
- Sessões de yoga em grupo (manhã e fim de tarde)

Entretenimento:

- Programação noturna (música ao vivo, eventos, entretenimento cultural periódico)
- Biblioteca
- Loja de conveniência
- Wi-fi em toda ilha

Atividades com custo extra:

- Esportes aquáticos motorizados (jet ski, seabob, wakeboard)
- Mergulho PADI (batismo, cursos, night dive)
- Excursões de barco, pesca, sandbank picnic, cruzeiro sunset
- Spa, experiências privativas (jantar, BBQ, floating breakfast, degustações)
- Babysitting sob reserva`
      },
      {
        id: "accommodations",
        title: "Acomodações",
        type: "text",
        content: `Villas de luxo com piscina privativa:

Todas as villas incluem:

- Piscina privativa
- Villas modernas na praia e sobre a água
- Amplos espaços internos/externos
- Banheira de imersão
- Menu de travesseiros
- Amenidades premium
- Serviço de arrumação duas vezes ao dia

Categorias:

- Beach Villas com piscina privativa
- Overwater Villas com piscina privativa
- Suítes com 2 quartos para famílias

Cada villa oferece privacidade total e conforto excepcional, com design moderno e elegante que combina perfeitamente com o ambiente natural das Maldivas.`
      },
      {
        id: "families",
        title: "Famílias e Diferenciais",
        type: "text",
        content: `Perfeito para famílias e viajantes exigentes:

Para famílias:

- Kids Club completo (Little Birds Club)
- Playground e atividades kids
- Amenities baby, berço e cama extra sob consulta
- Menus kids nos restaurantes
- Serviço babysitting (extra)
- Villas família com 2 quartos
- Área kids dedicada
- Amenidades para crianças e adolescentes

Diferenciais do resort:

- Certificado Green Globe em sustentabilidade e práticas eco-friendly
- Resort multilingue
- Serviços personalizados
- Experiências tailor-made para casais, honeymoon e grupos
- Alto padrão de serviço
- House reef excepcional com vida marinha rica
- Ambiente sofisticado e intimista
- Localização privilegiada no Atol Noonu`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "Todas as villas possuem piscina privativa, amplos espaços e amenidades premium",
      types: [
        {
          name: "Beach Villa",
          size: "com piscina privativa",
          beds: "1 King",
          maxOccupancy: "3 adultos ou 2 adultos + 2 crianças",
          features: [
            "Localização na praia",
            "Piscina privativa",
            "Banheira de imersão",
            "Terraço amplo",
            "Acesso direto à praia",
            "Arrumação duas vezes ao dia"
          ]
        },
        {
          name: "Overwater Villa",
          size: "com piscina privativa",
          beds: "1 King",
          maxOccupancy: "3 adultos ou 2 adultos + 2 crianças",
          features: [
            "Sobre a água",
            "Piscina infinita privativa",
            "Deck amplo sobre o oceano",
            "Banheira de imersão",
            "Vista panorâmica",
            "Escada de acesso direto ao mar"
          ]
        },
        {
          name: "Family Suite",
          size: "2 quartos com piscina privativa",
          beds: "2 King",
          maxOccupancy: "6 adultos ou 4 adultos + 4 crianças",
          features: [
            "Ideal para famílias",
            "Dois quartos",
            "Piscina privativa",
            "Áreas separadas",
            "Amenities kids",
            "Espaço amplo"
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
        question: "O que está incluído no plano All Inclusive?",
        answer: "O plano All Inclusive inclui todas as refeições (buffet e à la carte), bebidas alcoólicas e não alcoólicas, minibar reabastecido, equipamentos de snorkeling, esportes aquáticos não motorizados, academia, yoga, kids club e muito mais."
      },
      {
        question: "Como funciona o transfer de Malé para o resort?",
        answer: "O transfer é realizado por hidroavião e leva aproximadamente 45 minutos. Você terá acesso ao lounge VIP no terminal enquanto aguarda o voo. O transfer deve ser contratado à parte ou incluído no pacote."
      },
      {
        question: "O resort é adequado para crianças?",
        answer: "Sim! O Kuredhivaru oferece o Little Birds Club (kids club completo), playground, atividades kids, menus infantis em todos os restaurantes e amenities especiais para crianças. Há também villas familiares com 2 quartos."
      },
      {
        question: "Quais atividades têm custo adicional?",
        answer: "Esportes aquáticos motorizados (jet ski, seabob), mergulho PADI, excursões de barco, spa, experiências privativas como jantares na praia e floating breakfast, e serviço de babysitting têm custo adicional."
      },
      {
        question: "O resort oferece experiências para casais?",
        answer: "Sim, o Kuredhivaru é perfeito para lua de mel e casais. Oferecemos jantares privativos, experiências de spa para casais, floating breakfast, cruzeiro ao pôr do sol e outras experiências românticas personalizadas."
      },
      {
        question: "Todas as villas têm piscina privativa?",
        answer: "Sim, todas as villas do Kuredhivaru possuem piscina privativa, seja na praia ou sobre a água, garantindo total privacidade e conforto."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Vista aérea do Kuredhivaru Resort"
      },
      {
        src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2674",
        alt: "Overwater Villa com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Beach Villa com acesso direto à praia"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Restaurante ONU Marché"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Sun Spa by Esthederm"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Piscina principal do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670",
        alt: "Snorkeling no house reef"
      },
      {
        src: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?q=80&w=2670",
        alt: "Little Birds Kids Club"
      },
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2670",
        alt: "Dining experience à beira-mar"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Yoga pavilhão ao amanhecer"
      }
    ]
  },
  // New modular resorts (from individual files)
  [oneAndOnlyReethiRah.slug]: oneAndOnlyReethiRah,
  [patinaMaldives.slug]: patinaMaldives,
  [radissonBlu.slug]: radissonBlu,
  [ritzCarltonMaldives.slug]: ritzCarltonMaldives,
  [sixSensesKanuhura.slug]: sixSensesKanuhura,
  [sixSensesLaamu.slug]: sixSensesLaamu,
  [siyamWorld.slug]: siyamWorld,
  [sonevaJani.slug]: sonevaJani,
  [sonevaFushi.slug]: sonevaFushi,
  [sonevaSecret.slug]: sonevaSecret,
  [theNautilus.slug]: theNautilus,
  [vakkaruMaldives.slug]: vakkaruMaldives,
  [velaaPrivateIsland.slug]: velaaPrivateIsland,
  [waldorfAstoriaMaldives.slug]: waldorfAstoriaMaldives,
  [youAndMeByCocoon.slug]: youAndMeByCocoon,
  [intercontinentalMaldives.slug]: intercontinentalMaldives,
  [soMaldives.slug]: soMaldives
};
