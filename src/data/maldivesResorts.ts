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
  "heritance-aarah": {
    slug: "heritance-aarah",
    name: "Heritance Aarah Maldives",
    rating: 6,
    location: "Raa Atoll",
    transferTime: "Hidroavião 40min de Malé",
    heroImage: heroImage,
    heroTitle: "Heritance Aarah Maldives",
    heroSubtitle: "Resort 6 estrelas premium all inclusive com múltiplos prêmios internacionais",
    heroHighlights: ["Premium All Inclusive", "LEED Gold Certified", "Butler em todas as villas"],
    seoTitle: "Heritance Aarah Maldives - Resort 6★ Premium All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 6 estrelas premium all inclusive no Raa Atoll com múltiplos prêmios internacionais, LEED Gold certified, butler service, IASO Medi Spa e gastronomia premiada.",
    about: "Heritance Aarah Maldives é um resort 6 estrelas, premium all inclusive, situado no Raa Atoll, a cerca de 40 minutos de hidroavião de Malé. O hotel ganhou múltiplos prêmios internacionais e é referência em sustentabilidade (LEED Gold, Forbes, Condé Nast 2024). Combina arquitetura tradicional maldívia e design contemporâneo, sendo ideal tanto para casais em lua de mel quanto famílias exigentes, com mordomo em todas as categorias e experiências de alto padrão em gastronomia, lazer e wellness.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Premium All Inclusive:

- Café da manhã, almoço e jantar em vários restaurantes (Ranba, Ralu, Pizza Shack, Ginifati, Ambula, Hathaa)
- Snacks, doces, sorvetes e coquetéis dos Naughty Karts
- Bebidas alcoólicas e não alcoólicas selecionadas à vontade
- Minibar abastecido 1x/dia (2x/dia nas Ocean Suites with Infinity Pool)
- Garrafa de espumante na chegada (champagne nas Ocean Suites)
- Duas garrafas de vinho e duas de destilados selecionados reabastecidos diariamente (nas Ocean Suites: adega pessoal com 8 opções de vinhos e espumantes)
- Room service parcial para Ocean Suite with Infinity Pool
- Aulas de culinária e de mixologia
- Atividades esportivas não motorizadas: snorkeling, windsurf, caiaque, SUP, catamarã (habilitação/licença exigida para alguns)
- Consulta de bem-estar (30 min) e scanner facial para análise de pele (disponível nas primeiras 48h)
- US$ 50 crédito spa por adulto (Beach e Ocean Villas)
- Centro fitness completo
- Duas excursões incluídas por estadia: cruzeiro ao pôr do sol e pesca noturna
- Kids Club, Teen Club, ciclofaixa e playground
- Wi-Fi em toda a ilha
- Todas as taxas e impostos
- Traslado de hidroavião regular (incluso/pago à parte conforme pacote)`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e Facilidades Gratuitas:

- Snorkeling livre na house reef, caiaque, stand-up paddle, windsurf, catamarã
- Bicicletas para adultos e crianças
- Quadras de tênis e beach volley
- Espaço fitness, yoga e aulas wellness
- Duas excursões cortesia: sunset cruise e pesca noturna
- Kids Club (atividades criativas), Teen Club (games, esportes)
- Cinema open-air semanal, shows culturais, entretenimento noturno
- Biblioteca, águas aromatizadas, lounge relax

Atividades com Custo Extra:

- Mergulho (PADI center), cursos, saídas guiadas, night diving
- Esportes náuticos motorizados: jet ski, seabob, wakeboard, parasailing
- Passeios privados: dolphin cruise, piqueniques em bancos de areia, experiências românticas
- Spa IASO Medi Spa: tratamentos ayurvédicos, massagens balinesas, Wellness Centre, scanner facial detalhado, terapias de beleza
- Jantares privativos, degustação de vinhos, experiências especiais floating breakfast
- Aula de culinária particular e eventos temáticos
- Babysitting sob consulta

Restaurantes e Bares:

7 Restaurantes:

- Ranba: internacional/buffet
- Ralu: francês/brasserie
- Pizza Shack: pizzas artesanais
- Ginifati: frutos do mar grill
- Ambula: sri lankês
- Hathaa: asiático com show cooking
- Baani: árabe/mediterrâneo (exclusivo Ocean Suites)

5 Bares:

- Bandhi Bar: cocktails e snacks
- Ralu Bar: drinks e vinhos
- Udaras Bar: casual
- Falhumaa Bar: champagne, drinks premium
- Naughty Karts: coquetéis, sorvetes, snacks itinerantes

Experiências Gastronômicas Especiais:

- Jantares privativos na praia ou villa
- Floating breakfast
- BBQ e noites temáticas
- Wine tasting com sommelier
- Sandbank picnic
- Room service parcial incluído para algumas categorias
- Minibar completo, abastecido 1x ao dia (2x ao dia nas categorias superiores)`
      },
      {
        id: "accommodation",
        title: "Acomodação",
        type: "text",
        content: `Villas:

- Ocean Villa: 93m² sobre a água, deck com escada pro mar, sunset/sunrise, piscina privativa em categorias superiores

Comodidades nas Villas:

- Deck privativo com espreguiçadeiras
- Cama king-size e oversized day bed
- Banheiro amplo com amenities premium
- Menu de travesseiros
- TV tela plana via satélite
- Cofre eletrônico
- Minibar e máquina de café/chá espresso
- Wi-Fi high-speed
- Serviço de mordomo/butler personalizado
- Bicicletas sob pedido
- Room service parcial (para Ocean Suite with Infinity Pool)
- Estilo contemporâneo com detalhes maldívios
- Villas sobre a praia e sobre a água (com e sem piscina privativa)

Política para Crianças:

- Até 2 crianças até 12 anos grátis (quartos com os pais)
- Kids & Teens Club gratuitos
- Menus kids e atividades exclusivas
- Serviço de babá/personalizado (custo extra)

Diferenciais e Destaques:

- Resort LEED Gold, referência em sustentabilidade e wellness
- IASO Medi Spa (spa de wellness clínico único, scanner facial, medicina do sono, wellness retreats)
- Duas excursões cortesia por estadia (sunset cruise e noite de pesca)
- Gastronomia premiada (Condé Nast, Forbes Best)
- Resort com maior número de bares/restaurantes de sua categoria
- Destaque kids/famílias, casais e wellness
- Early check-in, late check-out e upgrades sob disponibilidade`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites Premium All Inclusive"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites Premium All Inclusive"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago."
    },
    faqs: [
      {
        question: "O que torna o Heritance Aarah especial?",
        answer: "O resort 6 estrelas é premium all inclusive com múltiplos prêmios internacionais (Forbes, Condé Nast 2024), certificação LEED Gold em sustentabilidade, butler service em todas as villas, IASO Medi Spa único, gastronomia premiada com 7 restaurantes e 5 bares, e duas excursões cortesia incluídas por estadia."
      },
      {
        question: "O que está incluído no Premium All Inclusive?",
        answer: "Inclui todas as refeições em 7 restaurantes, snacks e bebidas ilimitadas, minibar reabastecido diariamente, espumante na chegada, vinhos e destilados selecionados, aulas de culinária e mixologia, atividades não motorizadas, consulta wellness, US$ 50 crédito spa, duas excursões (sunset cruise e pesca noturna), Kids & Teen Club, Wi-Fi e todas as taxas."
      },
      {
        question: "O que é o IASO Medi Spa?",
        answer: "IASO Medi Spa é um spa de wellness clínico único com scanner facial para análise de pele, tratamentos ayurvédicos, massagens balinesas, Wellness Centre, medicina do sono e wellness retreats. Todos os hóspedes recebem consulta de bem-estar (30 min) e scanner facial nas primeiras 48h."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece 7 restaurantes: Ranba (internacional/buffet), Ralu (francês/brasserie), Pizza Shack, Ginifati (frutos do mar grill), Ambula (sri lankês), Hathaa (asiático com show cooking) e Baani (árabe/mediterrâneo exclusivo Ocean Suites). Possui ainda 5 bares e experiências especiais como floating breakfast, jantares privativos e wine tasting."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, é ideal para famílias com até 2 crianças até 12 anos grátis, Kids & Teens Club gratuitos com atividades criativas, games e esportes, menus kids, babysitting disponível (extra), ciclofaixa, playground e entretenimento noturno."
      },
      {
        question: "Quais excursões estão incluídas?",
        answer: "Todas as estadias incluem duas excursões cortesia: cruzeiro ao pôr do sol (sunset cruise) e pesca noturna. Excursões adicionais como dolphin cruise, piqueniques em bancos de areia e experiências românticas estão disponíveis com custo extra."
      },
      {
        question: "O que é o serviço de butler?",
        answer: "Todas as villas incluem serviço de mordomo/butler personalizado 24h que auxilia com reservas de restaurantes, atividades, experiências especiais e todas as necessidades durante a estadia, garantindo atendimento de alto padrão."
      },
      {
        question: "O resort é sustentável?",
        answer: "Sim, o Heritance Aarah é certificado LEED Gold e é referência em sustentabilidade nas Maldivas, combinando luxo com responsabilidade ambiental através de práticas ecológicas e arquitetura que respeita o meio ambiente."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Heritance Aarah Maldives - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean Villa com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa sobre a água com deck privativo"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "IASO Medi Spa - tratamentos wellness"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Restaurante Ranba - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiência gastronômica premiada"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Kids Club - atividades criativas"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Sunset cruise - excursão incluída"
      }
    ]
  },
  "hideaway-beach-resort": {
    slug: "hideaway-beach-resort",
    name: "Hideaway Beach Resort & Spa",
    rating: 5,
    location: "Ilha Dhonakulhi, Atol Haa Alifu",
    transferTime: "Hidroavião 1h ou voo doméstico + lancha",
    heroImage: heroImage,
    heroTitle: "Hideaway Beach Resort & Spa",
    heroSubtitle: "Resort exclusivo com as maiores villas das Maldivas e marina própria",
    heroHighlights: ["101 Villas Amplas", "Mordomo Privativo", "Marina para Iates"],
    seoTitle: "Hideaway Beach Resort & Spa - Resort 5★ Exclusivo | Follow Me Viagens",
    seoDescription: "Resort exclusivo no Atol Haa Alifu com as maiores villas das Maldivas, marina própria, mordomo privativo e gastronomia diferenciada. Privacidade máxima em 297.000m².",
    about: "Hideaway Beach Resort & Spa está situado na exclusiva ilha de Dhonakulhi, no Atol Haa Alifu, ao norte das Maldivas, ocupando 297.000m² e oferecendo privacidade máxima, marina para iates e paisagens naturais exuberantes. São 101 villas (praia e sobre a água), todas entre as maiores das Maldivas, cada uma com mordomo privativo, design elegante e ótimas opções para famílias e casais exigentes. Resort reconhecido pelas experiências tranquilas, gastronomia diferenciada, esportes aquáticos, spa, Kids Club e atividades ao ar livre. Acesso via hidroavião (1h de Malé) ou voo doméstico + lancha rápida.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `- Café da manhã luxuoso (continental, americano, buffet e à la carte)
- Serviço de mordomo privativo (todas as villas)
- Wi-Fi de alta velocidade gratuito em toda a ilha
- Equipamentos de snorkeling, caiaque, stand-up paddle, bicicleta e uso de quadras
- Bicicletas para explorar a ilha
- Arrumação e serviço noturno
- Amenidades de spa (acesso à sauna, jacuzzi, banho turco)
- Academia, personal trainer, yoga classes, spa lounge
- Duas piscinas infinitas: uma com splash infantil/Meeru Bar e outra com atmosfera adults-only/Sunset Pool Café
- Kids Club, teen room e playground
- Welcome drink, frutas frescas diárias na villa, minibar abastecido (sob plano)
- Cinema ao ar livre, eventos noturnos, shows, biblioteca, salão de jogos
- Café ou chá na villa, água mineral renovada diariamente
- Traslado de hidroavião ou voo/doméstico+lancha (sob consulta/pacotes)`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e Facilidades Gratuitas:

- Snorkeling (equipamento incluso) em house reef duplo, recife a 10-30m da praia; golfinhos, tartarugas, arraias, tubarões, possibilidade de whale shark
- Uso de bicicletas, caiaque, SUP e pedalinho
- Quadras de tênis, futebol, vôlei de praia, academia
- Piscinas (2 infinitas), splash infantil
- Yoga, pilates e aulas fitness inclusas (programação regular)
- Cinema ao ar livre semanal e festas temáticas
- Atividades kids/teens: Kids Club, teen room, playground, jogos de tabuleiro
- Trilha ecológica, slackline, caminhadas ao pôr do sol
- Entretenimento noturno: música ao vivo, shows, festas na praia/Meeru Bar
- Aulas de culinária e mixologia (sob programação)
- Happy hour diária

Atividades com Custo Extra:

- Esportes motorizados: jet ski, seabob, parasail, wakeboard
- Mergulho PADI 5*: cursos completos, saídas guiadas, night dive, batismo
- Fly fishing exclusivo no resort, golfe (putting green), windsurf, kite/windsurf
- Pesca tradicional, noturna e esportiva
- Cruzeiros de observação de golfinhos, whale shark, sunset private, sandbank picnic
- Spa Hideaway (12 salas): massagens, ayurvédico, banho turco, Natura Bisse, tratamentos de casal, áreas de relaxamento, salão de beleza, manicure/pedicure
- Degustação de vinhos, workshops de cocktail, experiências privadas
- Babysitting e sessão de fotos profissional

Restaurantes & Bares:

- Matheefaru: principal (internacional, buffet/à la carte, café e jantar)
- Samsara Asian Fusion: asiático contemporâneo sobre a água
- Meeru Bar & Grill: grelhados, pizzas, snacks, bar molhado, ambiente descontraído
- Sunset Pool Café: mediterrâneo, pratos saudáveis e drinks na piscina adults-only
- Oasis: restaurante da marina/yacht club (menu sazonal)
- Experiência privada: jantar na villa 24h, sandbank dinner, piquenique na praia, floating breakfast, beach BBQ privativo
- Cardápios kids nos restaurantes
- Bares: beach bar, pool bar, wine/champagne lounge com adega de rótulos raros, coquetelaria premium
- Room service 24h`
      },
      {
        id: "accommodation",
        title: "Acomodação",
        type: "text",
        content: `Deluxe Water Villa:

190m², sobre a água, amplo deck, banheira panorâmica, acesso direto à lagoa

Comodidades nas Villas:

- Villas (praia ou sobre a água), entre 176m² e 1.400m², as maiores das Maldivas
- Piscina privativa em todas as categorias superiores
- Banheiro interno/externo, ducha/cascata, banheira de imersão
- Sala de estar ampla, deck com solário privativo e espreguiçadeiras
- Amenidades de luxo (Bvlgari), minibar, máquina de café/chá, menu de travesseiros
- Ar-condicionado, TV satélite, home theater sound system
- Serviço de mordomo/butler exclusivo 24h
- Berço/cama extra e amenities kids sob solicitação
- Bicicletas, caiaque, beach bag, cofre pessoal
- Room service 24h`
      },
      {
        id: "kids-and-highlights",
        title: "Política para Crianças e Diferenciais",
        type: "text",
        content: `Política para Crianças:

- Até 2 crianças até 12 anos grátis (acompanhadas por adultos, mesmo plano de refeições)
- Kids Club gratuito (atividades até 12 anos); teen club (game room, esportes, sunset tour)
- Menu kids, amenities babies, berço e cama extra sob demanda
- Babysitter (custo extra)
- Villas família com playground privativo, espaços para adolescentes
- Piscina splash infantil, parque, programação kids temática

Diferenciais do Resort:

- Marina própria (primeira das Maldivas), fly fishing (exclusivo), campo de golfe/putting green
- Resort referência em privacidade, área de esqui aquático exclusiva, house reef duplo e excelente spa
- Sustentabilidade: redução plásticos, energia solar, iniciativa coral, hortas próprias, preservação ambiental
- Serviço personalizado, alto padrão para famílias e casais, ideal para celebrações
- Villas entre as maiores das Maldivas (176m² a 1.400m²)
- 101 villas com mordomo privativo 24h
- House reef duplo a 10-30m da praia com excelente biodiversidade`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago."
    },
    faqs: [
      {
        question: "O que torna o Hideaway Beach Resort especial?",
        answer: "O resort possui as maiores villas das Maldivas (176m² a 1.400m²), marina própria (primeira das Maldivas), serviço de mordomo privativo em todas as 101 villas, fly fishing exclusivo, house reef duplo a 10-30m da praia, campo de golfe/putting green e 297.000m² de privacidade máxima no Atol Haa Alifu."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "Inclui café da manhã luxuoso (continental, americano, buffet e à la carte), serviço de mordomo privativo 24h, Wi-Fi, equipamentos de snorkeling/caiaque/SUP/bicicletas, amenidades de spa (sauna, jacuzzi, banho turco), academia com personal trainer, yoga, duas piscinas infinitas, Kids Club, teen room, cinema ao ar livre, entretenimento noturno e água mineral renovada diariamente."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece 5 restaurantes: Matheefaru (internacional buffet/à la carte), Samsara Asian Fusion (asiático contemporâneo sobre a água), Meeru Bar & Grill (grelhados, pizzas, snacks), Sunset Pool Café (mediterrâneo saudável adults-only) e Oasis (marina/yacht club). Possui ainda múltiplos bares, wine/champagne lounge, room service 24h e experiências privativas."
      },
      {
        question: "O house reef é bom para snorkeling?",
        answer: "Sim, o resort possui house reef duplo a 10-30m da praia com excelente biodiversidade incluindo golfinhos, tartarugas, arraias, tubarões e possibilidade de avistamento de whale shark. Equipamento de snorkeling gratuito para todos os hóspedes."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, é ideal para famílias com até 2 crianças até 12 anos grátis, Kids Club gratuito (atividades até 12 anos), teen club com game room e esportes, menu kids, amenities babies, berço/cama extra, babysitting (extra), villas família com playground privativo, piscina splash infantil e programação kids temática."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Atividades gratuitas: snorkeling, caiaque, SUP, pedalinho, quadras, piscinas e aulas fitness. Com custo extra: jet ski, seabob, parasail, wakeboard, mergulho PADI 5* com cursos completos, fly fishing exclusivo, windsurf, kite, pesca tradicional/noturna/esportiva e cruzeiros privativos."
      },
      {
        question: "O que é exclusivo do Hideaway?",
        answer: "Marina própria (primeira das Maldivas) para iates, fly fishing exclusivo do resort, campo de golfe/putting green, área de esqui aquático exclusiva, villas entre as maiores das Maldivas, house reef duplo e serviço personalizado de alto padrão."
      },
      {
        question: "O resort é sustentável?",
        answer: "Sim, o Hideaway possui iniciativas de sustentabilidade incluindo redução de plásticos, energia solar, iniciativa de preservação de corais, hortas próprias para os restaurantes e programas ativos de preservação ambiental."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Hideaway Beach Resort & Spa - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Deluxe Water Villa - 190m² sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa sobre a água com deck privativo"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa Hideaway - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Matheefaru Restaurant - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Samsara Asian Fusion - gastronomia asiática"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Kids Club - atividades para crianças"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Marina - primeira marina das Maldivas"
      }
    ]
  },
  "hurawalhi-island": {
    slug: "hurawalhi-island",
    name: "Hurawalhi Island Resort",
    rating: 6,
    location: "Atol Lhaviyani",
    transferTime: "Hidroavião 40min de Malé",
    heroImage: heroImage,
    heroTitle: "Hurawalhi Island Resort",
    heroSubtitle: "Resort 6 estrelas adults only com restaurante subaquático exclusivo",
    heroHighlights: ["Adults Only 18+", "5.8 Undersea Restaurant", "Forbes Five-Star 2024"],
    seoTitle: "Hurawalhi Island Resort - Resort 6★ Adults Only | Follow Me Viagens",
    seoDescription: "Resort 6 estrelas adults only no Atol Lhaviyani com o maior restaurante subaquático do mundo, spa premiado, all-inclusive premium e experiências românticas exclusivas. Forbes Five-Star 2024.",
    about: "Hurawalhi Island Resort é um resort 6 estrelas, somente para adultos (18+), situado em ilha exclusiva no Atol Lhaviyani, Maldivas, e reconhecido internacionalmente pela atmosfera sofisticada, suas 90 villas luxuosas (sobre a água e praia), conceito barefoot chic e experiências românticas. Seu grande destaque é o icônico restaurante subaquático 5.8 Undersea Restaurant, o maior do mundo no gênero, além do spa premiado, centro marinho próprio (parceria Manta Trust) e programa de sustentabilidade. Acesso via hidroavião (40min de Malé). Resort premiado \"Forbes Travel Guide Five-Star 2024.\"",
    sections: [
      {
        id: "about",
        title: "Sobre o Resort",
        type: "text",
        content: `Hurawalhi Island Resort é um resort 6 estrelas, somente para adultos (18+), situado em ilha exclusiva no Atol Lhaviyani, Maldivas, e reconhecido internacionalmente pela atmosfera sofisticada, suas 90 villas luxuosas (sobre a água e praia), conceito barefoot chic e experiências românticas. Seu grande destaque é o icônico restaurante subaquático 5.8 Undersea Restaurant, o maior do mundo no gênero, além do spa premiado, centro marinho próprio (parceria Manta Trust) e programa de sustentabilidade. Acesso via hidroavião (40min de Malé). Resort premiado "Forbes Travel Guide Five-Star 2024."

Traslados: Hidroavião regular 40 minutos a partir de Malé.`
      },
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `- Café da manhã, almoço e jantar no restaurante principal Canneli (buffet com estações de show cooking)
- Snacks e lanches em bares selecionados
- Ampla seleção de bebidas alcoólicas e não alcoólicas durante as refeições e nos bares participantes
- Minibar abastecido diariamente na villa (inclui água, cerveja, refrigerante, sucos, snacks, vinho)
- 1 meia garrafa de champagne na chegada por estadia
- 1 cruzeiro ao pôr do sol por hóspede/por estadia
- Atividades esportivas não motorizadas: snorkeling, caiaque, stand-up paddle e windsurf
- Aula em grupo de snorkeling (30 minutos) e windsurf (30 minutos) incluídas, por hóspede/por estadia
- Uso da academia, quadras de tênis, campo de futebol, aulas de yoga, aqua fitness e circuito funcional
- Participação nas atividades fitness do resort
- Wi-Fi de alta velocidade por toda a ilha
- Acesso à lounge VIP no aeroporto na chegada (Wi-Fi, snacks, toalhas refrescantes)
- Serviços de limpeza duas vezes ao dia
- Welcome amenity fruto & drink
- Excursões e eventos semanais gratuitos (programação sazonal)
- Champagne Pavilion: não incluso no pacote all inclusive; alimentação/drinks pagos à parte
- Upgrade para all-inclusive pago por toda a estadia (não pode ser adquirido por noites avulsas)`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e Facilidades Gratuitas:

- Snorkeling no house reef, empréstimo de equipamento sem custo
- Caiaque, SUP, windsurf
- Piscina infinita panorâmica
- Fitness center, quadras de tênis, futebol, badminton
- Aulas de yoga, aqua fitness, circuit training
- Workshop de bem-estar, sessões coletivas de fitness
- Aulas em grupo de snorkeling e windsurf (30 min cada)
- Palestras e workshops ambientais (Manta Trust: biologia marinha, conservação)
- Biblioteca, sala de jogos, eventos semanais, cinema ao ar livre, festas temáticas
- Wi-Fi premium em toda a ilha
- Lounge VIP de chegada
- Excursão cruzeiro ao pôr do sol (1x por estadia)
- Programação noturna (eventos, música ao vivo, festas na piscina, noites temáticas)
- Uso de bikes sob consulta

Atividades com Custo Extra:

- Restaurante 5.8 Undersea Restaurant (menu degustação sob reserva)
- Jantares privativos na praia/villa, floating breakfast premium
- Esportes motorizados: jet ski, seabob, parasailing
- Mergulho PADI 5* (batismo, cursos, night dive, excursões a recifes diversos)
- Excursões privadas: pesca esportiva, piqueniques, sandbank trips, dolphin cruise adicional
- Sunset romantic cruise privativo
- Aula de culinária gourmet, degustação de vinhos
- SPA Duniye: massagens balinesas, tratamentos holísticos, wellness select
- Fotos profissionais, babá e experiências especiais
- Consumo no Champagne Pavilion e room service (não incluso no all-inclusive)

Esportes Aquáticos Motorizados:

- Jet ski, wakeboard
- Seabob, parasailing
- Waterski, fun tube
- Tarifas sob solicitação local e disponibilidade

Excursões e Passeios:

- Cruzeiro sunset (1x incluído/estadia – extra sob custo)
- Passeios de snorkeling guiado
- Whale shark/manta safari (época)
- Visita a ilha local, sandbank picnic, piqueniques privados
- Cruise dolphins e sunset privado
- Passeios fotográficos/experiências de conservação
- Yacht privado sob reserva

Atividades Aquáticas e Esportes:

- Snorkeling, aula guiada inclusa/sem custo
- Mergulho (PADI) sob reserva
- Windsurf, caiaque, SUP, tênis, futebol, badminton
- Piscina infinita
- Wellness: yoga, circuit training, aulas fitness
- Atividades fitness (programação rotativa diária)
- Bicicletas disponíveis para locomoção

Gastronomia:

- Canneli Restaurant: principal, buffet internacional (café, almoço, jantar)
- 5.8 Undersea Restaurant: fine dining degustação subaquático (menu, experiência inesquecível, reservas obrigatórias)
- Kashibo: restaurante e bar asiático, especialidades vegetarianas e frutos do mar
- Coco Bar: ao lado da piscina, drinks e lanches, aberto até tarde
- Champagne Pavilion: sunset privilege bar (não incluso no AI, carta premium)
- Romantic Beach Dinner: pacotes privativos
- In-room dining: 24h, cardápio seletivo (pagamento extra)
- Experiências Especiais: floating breakfast, vinhos cellar/wine tastings, sunset barbecue

Opções de Bares:

- Coco Bar: cocktails, cervejas, vinhos, snacks
- Kashibo Bar: drinks asiáticos, finger foods
- Champagne Pavilion: champanhes e coquetéis premium (pago à parte)
- Canneli: bebidas durante refeições`
      },
      {
        id: "accommodation",
        title: "Acomodação",
        type: "text",
        content: `Ocean Pool Villa/Wind Villa:

105-132m², deck privado sobre a água, piscina infinita, espreguiçadeiras, acesso direto à lagoa, banheiro/chuveiro aberto, enorme privacidade

Comodidades nas Villas:

- Terraço solar ou deck sobre a lagoa, acesso direto à água/sand
- Cama king-size, área de estar externa, espreguiçadeiras
- Banheiro interno com amenidades premium, chuveiro externo (em algumas categorias)
- Minibar equipado e wine cooler
- Máquina de café/chá
- Smart TV, Wi-Fi, ar-condicionado
- Menu de travesseiros, roupão, cofre, amenities eco-friendly
- Piscina privativa em categorias superiores (Ocean Pool Villa/Beach Pool Villa)
- Serviço diário de arrumação e mordomo sob consulta
- Room service 24h (custo extra e taxas podem ser aplicadas)`
      },
      {
        id: "adults-only",
        title: "Política Adults Only e Diferenciais",
        type: "text",
        content: `Política para Crianças:

- Resort exclusivamente ADULTS ONLY (hóspedes 18+ apenas)
- Política kids-free: foco romântico, serviço personalizado para casais/lua de mel

Diferenciais do Resort:

- Menu pillow/amenities, mordomo sob consulta, experiências tailor-made
- Prêmios internacionais por sustentabilidade (Manta Trust), restaurante undersea exclusivo, wellness integrado, spa premiado
- Parcerias: Manta Trust, Forbes 5-Star 2024, experiência contemporânea barefoot-chic
- 5.8 Undersea Restaurant: maior restaurante subaquático do mundo
- 90 villas luxuosas (sobre a água e praia) com conceito barefoot chic
- Centro marinho próprio em parceria com Manta Trust
- Programa completo de sustentabilidade e conservação marinha
- Spa Duniye premiado com tratamentos holísticos
- Conceito all-inclusive premium com experiências românticas exclusivas`
      }
    ],
    accommodations: {
      title: "",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta",
          priceSubtext: "7 noites com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago."
    },
    faqs: [
      {
        question: "O que torna o Hurawalhi Island Resort especial?",
        answer: "O resort é adults only (18+) e possui o 5.8 Undersea Restaurant, o maior restaurante subaquático do mundo. Foi premiado com Forbes Travel Guide Five-Star 2024, oferece 90 villas luxuosas com conceito barefoot chic, spa Duniye premiado, centro marinho em parceria com Manta Trust e programa completo de sustentabilidade."
      },
      {
        question: "O que está incluído no pacote all-inclusive?",
        answer: "Inclui todas as refeições no restaurante Canneli (buffet com show cooking), snacks e bebidas alcoólicas/não alcoólicas nos bares participantes, minibar abastecido diariamente, champagne na chegada, cruzeiro ao pôr do sol, atividades não motorizadas (snorkeling, caiaque, SUP, windsurf), aulas de yoga e fitness, Wi-Fi, lounge VIP no aeroporto, limpeza 2x ao dia e eventos semanais."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece: Canneli Restaurant (principal buffet internacional), 5.8 Undersea Restaurant (fine dining subaquático exclusivo - reserva obrigatória), Kashibo (asiático com especialidades vegetarianas e frutos do mar), Coco Bar (piscina, drinks e lanches) e Champagne Pavilion (bar premium não incluso no AI). In-room dining 24h disponível."
      },
      {
        question: "O 5.8 Undersea Restaurant está incluído no all-inclusive?",
        answer: "Não, o 5.8 Undersea Restaurant é um restaurante de fine dining com menu degustação exclusivo que requer reserva antecipada e pagamento à parte. É uma experiência gastronômica única servida 5.8 metros abaixo do nível do mar."
      },
      {
        question: "O resort aceita crianças?",
        answer: "Não, o Hurawalhi Island Resort é exclusivamente ADULTS ONLY, aceitando apenas hóspedes com 18 anos ou mais. O foco é proporcionar uma atmosfera romântica e tranquila ideal para casais e lua de mel."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Atividades gratuitas: snorkeling no house reef (equipamento incluso), caiaque, SUP, windsurf, aulas em grupo. Com custo extra: jet ski, seabob, parasailing, wakeboard, waterski, fun tube, mergulho PADI 5* (cursos completos, night dive), excursões de whale shark/manta safari e passeios privativos."
      },
      {
        question: "O resort possui programa de conservação marinha?",
        answer: "Sim, o Hurawalhi possui centro marinho próprio em parceria com a Manta Trust, oferecendo palestras e workshops ambientais sobre biologia marinha e conservação. O resort é reconhecido internacionalmente por seu programa de sustentabilidade e preservação dos recifes."
      },
      {
        question: "Quais são os prêmios e reconhecimentos do resort?",
        answer: "O resort foi premiado com Forbes Travel Guide Five-Star 2024, possui o maior restaurante subaquático do mundo (5.8 Undersea Restaurant), spa Duniye premiado, e reconhecimento internacional por sustentabilidade através da parceria com Manta Trust para conservação marinha."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Hurawalhi Island Resort - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean Pool Villa - villa sobre a água com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa sobre a água ao pôr do sol"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "5.8 Undersea Restaurant - restaurante subaquático"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa Duniye - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Canneli Restaurant - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Kashibo Restaurant - gastronomia asiática"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina infinita panorâmica"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Cruzeiro ao pôr do sol - experiência incluída"
      }
    ]
  },
  "huvafen-fushi": {
    slug: "huvafen-fushi",
    name: "Huvafen Fushi",
    rating: 5,
    location: "Atol de Malé Norte",
    transferTime: "30 minutos de lancha rápida",
    heroImage: heroImage,
    heroTitle: "Huvafen Fushi",
    heroSubtitle: "Resort boutique 6 estrelas com spa subaquático pioneiro",
    heroHighlights: [
      "Primeiro spa subaquático do mundo",
      "46 villas com piscina privativa",
      "House reef excepcional",
      "Adega subterrânea exclusiva"
    ],
    seoTitle: "Huvafen Fushi - Resort Boutique 6 Estrelas nas Maldivas",
    seoDescription: "Resort boutique 6 estrelas no Atol de Malé Norte. Primeiro spa subaquático do mundo, 46 villas com piscina privativa e experiências exclusivas. Ideal para casais e lua de mel.",
    about: "Huvafen Fushi é um resort boutique 6 estrelas situado em uma ilha privada no Atol de Malé Norte, a apenas 30 minutos de lancha rápida do aeroporto de Malé. Internacionalmente reconhecido pelo ambiente intimista, sofisticação e experiências exclusivas, foi pioneiro ao lançar o primeiro spa subaquático do mundo (Huvafen Spaquarium) e é referência em privacidade e atendimento personalizado. São apenas 46 villas e pavilhões (praia e sobre a água), todas com piscina privativa e arquitetura moderna integrada à natureza. Resort preferido para casais, honeymoons e viajantes em busca de luxo autêntico.",
    sections: [
      {
        id: "inclusoes",
        title: "Inclusões do Pacote",
        type: "text",
        content: `- Café da manhã em estilo buffet ou à la carte no Celsius (principal) ou designated restaurant
- Welcome drink, frutas frescas, água mineral, amenities premium
- Serviço de arrumação 2x ao dia, room service 24h
- Piscina privativa em todas as villas
- Snorkeling livre (equipamentos inclusos) no house reef excepcional
- Bicicletas, caiaque, stand-up paddle gratuitos
- Academia/gym, yoga e meditação guiadas
- Wi-Fi de alta velocidade em toda a ilha
- Uso da biblioteca, jogos de tabuleiro, cinema open-air semanal
- Concierge para experiências personalizadas e traslados
- Kids amenities sob pedido; berço/cama extra
- Lounge de chegada/partida
- Chaise longues, cabanas e serviço de praia/piscina
- Traslado de lancha: USD $300-400/adulto ida e volta (cobrado à parte ou incluso em certos pacotes)`
      },
      {
        id: "atividades-gastronomia",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e facilidades gratuitas:

- Snorkeling no house reef (um dos mais ricos das Maldivas)
- Caiaque, stand-up paddle, bicicleta
- Yoga/pilates/mindfulness com instrutor
- Academia 24h, circuito fitness, beach volley
- Biblioteca, lounge de jogos
- Piscina central e piscina privativa em cada villa
- Cinema ao ar livre semanal
- Programação cultural (eventos, jazz, música ao vivo)
- Beach games, piqueniques, trilhas guiadas
- Concierge para experiências personalizadas (cruzeiros, piqueniques privativos, festas)
- Aulas coletivas de culinária semanalmente

Atividades com custo extra:

- Mergulho PADI 5* (batismo, cursos, night dive, reef, wreck, manta trip)
- Esportes motorizados: jet ski, seabob, wakeboard, parasailing, tubing
- Passeios privativos (cruzeiro sunset, dolphin/whale shark/manta tour)
- Pesca artesanal e esportiva
- Yacht cruise privativo com tripulação
- Spaquarium: tratamentos no spa subaquático, massagens balinesas, terapias holísticas, beauty bar, pacotes wellness e ritual de casal
- Degustações de vinhos, jantares privativos (na praia, deck, wine cellar "Vinum")
- Floating breakfast, piquenique banc de areia
- Sessão fotográfica, babá sob reserva

Restaurantes principais:

- Celsius: restaurante central (pé na areia, internacional, café/almoço/jantar)
- Salt: fusión japonesa, menu omakase e grill sobre o mar
- Raw: cozinha saudável, vegetariana/vegan, pratos crus e leves
- Fogliani's: pizzas e massas ao ar livre sob as palmeiras
- Vinum: única adega underground das Maldivas para experiências privadas (vinhos raros, degustação harmonizada)
- Latitude Bar & Raw Sunset Bar: coquetéis clássicos e autorais, sunset bar, snacks internacionais
- Experiências Especiais: jantares privativos na praia, sandbank ou sand deck, degustação de champagnes e jantares a dois no Vinum

Opções de bares:

- Latitude Bar: cocktails exóticos, drinks clássicos, clima lounge
- Raw Sunset Bar: bar ao pôr do sol, DJ, menu especial
- Pool Bar & Beach Service: bebidas durante todo o dia à beira da piscina/praia
- Vinum: adega subterrânea para jantares privativos com harmonização premium

Experiências gastronômicas especiais:

- Jantar privativo (na praia, sandbank, deck, villa, wine cellar)
- Degustação de vinhos raros e champagnes (Vinum)
- Floating breakfast
- Chef privado sob demanda (Cube, Ocean Residence)
- Omakase no Salt, vegan night no Raw, festas temáticas

Atividades aquáticas e esportes:

- Snorkeling em house reef e recifes guiados (com biólogo ou instrutor)
- Caiaque, SUP, windsurf
- Jet ski, seabob, wakeboard, parasail
- Mergulho noturno/diurno PADI
- Pesca esportiva, cruises privativos, sandbank experience
- Piscina infinita central
- Beach volley, academia, yoga pavilion
- Aulas de wellness, pilates, mindfulness daily`
      },
      {
        id: "acomodacoes",
        title: "Acomodação",
        type: "text",
        content: `Ocean Bungalow with Pool:

(160m²) piscina privativa, terraço sobre a lagoa, espreguiçadeiras, sala lounge.

Comodidades nas Villas:

- Piscina privativa aquecida
- Terraço privativo com espreguiçadeiras e acesso à praia/mar
- Cama king-size, daybed
- Banheiro aberto com banheira de imersão e chuveiro de chuva/externo
- Smart TV de 45", som Bluetooth, menu de travesseiros
- Minibar, adega de vinhos, máquina de café/chá, amenities premium
- Ar-condicionado, ventilador de teto, blackout
- Bicicletas, cofre privativo, serviço de quarto 24h
- Itens kids sob consulta (berço, cama extra)`
      },
      {
        id: "politica-diferenciais",
        title: "Política para Crianças e Diferenciais",
        type: "text",
        content: `Política para crianças e diferenciais:

- Resort majoritariamente adulto/casal (não é adults only, aceita crianças sob consulta e com amenities kids, berço/cama extra)
- Kids activities sob solicitação, serviço de babá (extra)
- Política honeymoon: amenities, upgrade, jantar romântico, massagem cortesia (detalhes do pacote vigente)
- Serviço personalizado, mordomo para pavilions e residências, sustentabilidade ativa, spa subaquático, house reef de fácil acesso
- Prêmios: SLH Member, Forbes 5-Star, Traveller's Choice (Tripadvisor)
- Ideal para casamentos, elopements, festas privadas, small groups`
      }
    ],
    accommodations: {
      title: "Ocean Bungalow with Pool",
      description: "Villas de 160m² com piscina privativa, terraço sobre a lagoa e máxima privacidade.",
      types: [
        {
          name: "Ocean Bungalow with Pool",
          size: "160m²",
          beds: "Cama king-size",
          maxOccupancy: "2 adultos",
          features: [
            "Piscina privativa aquecada",
            "Terraço sobre a lagoa com acesso direto ao mar",
            "Banheiro aberto com banheira de imersão",
            "Smart TV, som Bluetooth",
            "Minibar e adega de vinhos"
          ]
        }
      ]
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta"
        }
      ],
      paymentTerms: [
        "Sinal de 20% na confirmação da reserva",
        "Saldo de 80% até 30 dias antes da viagem",
        "Parcelamento em até 10x sem juros no cartão de crédito (saldo)"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Os valores estão sujeitos a alteração sem aviso prévio. Consulte-nos para obter cotações atualizadas e disponibilidade."
    },
    faqs: [
      {
        question: "Qual é o tempo de traslado do aeroporto até o resort?",
        answer: "O traslado é feito por lancha rápida e leva aproximadamente 30 minutos do Aeroporto Internacional de Malé até o Huvafen Fushi."
      },
      {
        question: "O resort é adequado para crianças?",
        answer: "O Huvafen Fushi é majoritariamente voltado para adultos e casais, mas aceita crianças sob consulta. Amenities kids, berço e cama extra estão disponíveis mediante solicitação, e serviço de babá pode ser contratado com custo extra."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã, arrumação 2x ao dia, room service 24h, piscina privativa em todas as villas, snorkeling livre com equipamentos, bicicletas, caiaque, SUP, academia, yoga, Wi-Fi de alta velocidade, biblioteca, cinema semanal e concierge personalizado."
      },
      {
        question: "Quais são os destaques do resort?",
        answer: "O Huvafen Fushi é pioneiro com o primeiro spa subaquático do mundo (Huvafen Spaquarium), possui apenas 46 villas todas com piscina privativa, um house reef excepcional para snorkeling, e a única adega subterrânea das Maldivas (Vinum) para experiências gastronômicas exclusivas."
      },
      {
        question: "Quais restaurantes e bares estão disponíveis?",
        answer: "O resort oferece: Celsius (internacional), Salt (fusión japonesa/omakase), Raw (vegetariana/vegan), Fogliani's (pizzas e massas), Vinum (adega underground), Latitude Bar, Raw Sunset Bar e Pool Bar. Experiências privativas na praia, sandbank e wine cellar também estão disponíveis."
      },
      {
        question: "Quais atividades estão disponíveis?",
        answer: "Gratuitas: snorkeling no house reef, caiaque, SUP, bicicleta, yoga, pilates, academia 24h, beach volley, cinema ao ar livre e programação cultural. Com custo extra: mergulho PADI, jet ski, seabob, wakeboard, parasailing, passeios privativos, spa subaquático, degustações de vinhos e jantares privativos."
      },
      {
        question: "Como são as acomodações?",
        answer: "Todas as 46 villas e pavilhões possuem piscina privativa aquecada. A Ocean Bungalow with Pool (160m²) conta com terraço sobre a lagoa com acesso direto ao mar, banheiro aberto com banheira de imersão, Smart TV, minibar, adega de vinhos e amenities premium."
      },
      {
        question: "O resort oferece experiências especiais para lua de mel?",
        answer: "Sim, o resort é ideal para lua de mel e oferece política honeymoon com amenities especiais, possibilidade de upgrade, jantar romântico e massagem cortesia, conforme detalhes do pacote vigente."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Huvafen Fushi - Vista aérea do resort boutique"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean Bungalow with Pool - villa sobre a água com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa ao pôr do sol com piscina infinita"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Huvafen Spaquarium - primeiro spa subaquático do mundo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Celsius Restaurant - gastronomia internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Salt Restaurant - fusión japonesa sobre o mar"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Vinum - adega subterrânea exclusiva"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina central do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef excepcional para snorkeling"
      }
    ]
  },
  "iru-veli": {
    slug: "iru-veli",
    name: "Sun Siyam Iru Veli",
    rating: 5,
    location: "South Nilandhe Atoll (Dhaalu)",
    transferTime: "40 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Sun Siyam Iru Veli",
    heroSubtitle: "Resort 5 estrelas all inclusive com todas as suítes com piscina privativa",
    heroHighlights: [
      "Todas as suítes com piscina privativa",
      "All inclusive premium",
      "Kids club completo",
      "House reef excepcional"
    ],
    seoTitle: "Sun Siyam Iru Veli - Resort 5 Estrelas All Inclusive nas Maldivas",
    seoDescription: "Resort 5 estrelas all inclusive no Atol Dhaalu. Todas as suítes com piscina privativa, gastronomia variada e experiências para casais e famílias. Ótimo custo-benefício.",
    about: "Sun Siyam Iru Veli é um resort 5 estrelas all inclusive localizado na ilha privada do South Nilandhe Atoll (Dhaalu), a cerca de 40 minutos de hidroavião a partir de Malé. Todas as suas unidades são suítes com piscina privativa — sobre a água ou na praia — com design contemporâneo, serviço atencioso e atmosfera relaxada, ideal para casais e famílias. O resort é conhecido pelo alto padrão gastronômico, excelência de atendimento e ampla oferta de atividades e wellness.",
    sections: [
      {
        id: "inclusoes",
        title: "Inclusões do Pacote (All Inclusive)",
        type: "text",
        content: `- Café da manhã, almoço e jantar em estilo buffet e à la carte em restaurantes variados do resort
- Snacks, sorvetes e minibar reabastecido diariamente (bebidas, snacks, cervejas)
- Ampla seleção de bebidas alcoólicas e não alcoólicas em bares e refeições
- Experiências gastronômicas temáticas e jantares especiais em restaurantes de especialidade (mediante reserva)
- Room service disponível (slot limitado; serviços premium pagos à parte)
- Snorkeling, caiaque, stand-up paddle, windsurf
- Atividades esportivas: quadras de tênis, vôlei de praia, fitness center completo, atividades funcionais e yoga
- Bicicletas para circular pela ilha
- Piscinas principais, incluindo infantil
- Kids club "Turtle Kids Club" (atividades para crianças)
- Academia completa, sauna, salão de jogos
- Excursões de cortesia: cruzeiro ao pôr do sol, excursão de snorkeling guiado (dias e horários definidos pelo hotel)
- Lounge VIP de chegada (snacks, wi-fi) em Malé
- Arrumação 2x ao dia e serviço de turndown
- Wi-Fi de alta velocidade disponível por toda a ilha
- Traslado hidroavião (opcional/incluso em pacotes especiais)`
      },
      {
        id: "atividades-gastronomia",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Restaurantes & Bares:

- Aqua Orange: internacional, buffet, show cooking
- Roma: italiano à la carte (jantar, reserva)
- Grouper Grill: grill e frutos do mar à beira-mar
- Teppanyaki: japonês show-cooking (mediante reserva)
- Chemistry Bar: lobby bar, drinks autorais
- Fresh Water Pool Bar: bar molhado e snacks
- Wine Cellar: degustações temáticas
- Room service 24h (alguns serviços pagos à parte)

Atividades gratuitas:

- Snorkeling (house reef acessível, equipamento incluso)
- Caiaque, SUP, pedalinho, windsurf
- Quadra de tênis, vôlei de praia, futebol, academia
- Piscina principal infinita, piscina kids
- Aula fitness, yoga matinal, alongamento
- Kids club: atividades, esportes, oficinas criativas
- Excursão de snorkeling guiada e cruzeiro sunset cortesia (por estadia)
- Bicicletas para todos os hóspedes
- Programação cultural, cinema open-air, música ao vivo (sazonal)

Atividades com custo extra:

- Mergulho PADI 5*, cursos e saídas guiadas
- Esportes aquáticos motorizados: jet ski, seabob, wakeboard
- Spa "Sun Siyam Spa": tratamentos balineses, ayurvédicos, hidroterapia, massagens, ritual romântico de casal
- Experiência privativa: jantar na praia, piquenique em sandbank, degustação de vinhos
- Passeios de barco, pesca, dolphins tour, visitas a ilhas locais
- Babysitting (sob consulta)

Kids e facilidades para famílias:

- Kids Club para crianças de 3 a 12 anos
- Berço, cama extra, cardápio kids nos restaurantes
- Babysitting (custo extra)
- Programa de mini chefs, caça ao tesouro, esportes`
      },
      {
        id: "acomodacoes",
        title: "Acomodação",
        type: "text",
        content: `Ocean Suite with Pool:

Suspensa sobre a água, vidro no piso, piscina privativa.

Dolphin Ocean Suite with Pool:

Vista privilegiada para spotting de golfinhos.

Comodidades nas Villas:

- Villas sobre a água e na praia, todas com piscina privativa
- Cama king-size, banheiro com banheira de imersão e chuveiro, amenities premium
- Terraço amplo, espreguiçadeiras, mesa de jantar externa
- Minibar abastecido diariamente, máquina de café/chá
- TV smart, Wi-Fi premium, menu de travesseiros
- Ar-condicionado, ventilador, cofre, amenities kids (berço, cama extra sob consulta)`
      },
      {
        id: "destaques-diferenciais",
        title: "Destaques e Diferenciais",
        type: "text",
        content: `Destaques e diferenciais:

- Todas as suítes com piscina privativa
- All inclusive premium amplo e com bebidas de qualidade
- Kids club e muitas atividades para famílias
- House reef ótimo para snorkeling; localização em lagoa exclusiva
- Spa sobre a água e experiências românticas
- Gastronomia variada e tematizada; lounge VIP de chegada; serviço premiado
- Ótimo custo-benefício para quem busca privacidade com padrão internacional nas Maldivas`
      }
    ],
    accommodations: {
      title: "Ocean Suite with Pool",
      description: "Suítes sobre a água com piscina privativa, vidro no piso e design contemporâneo.",
      types: [
        {
          name: "Ocean Suite with Pool",
          size: "Consulte o resort",
          beds: "Cama king-size",
          maxOccupancy: "2 adultos + crianças",
          features: [
            "Piscina privativa",
            "Vidro no piso com vista para o oceano",
            "Terraço amplo sobre a água",
            "Banheiro com banheira de imersão",
            "Minibar abastecido diariamente"
          ]
        },
        {
          name: "Dolphin Ocean Suite with Pool",
          size: "Consulte o resort",
          beds: "Cama king-size",
          maxOccupancy: "2 adultos + crianças",
          features: [
            "Piscina privativa",
            "Vista privilegiada para golfinhos",
            "Terraço amplo sobre a água",
            "Banheiro com banheira de imersão",
            "Minibar abastecido diariamente"
          ]
        }
      ]
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio a Outubro",
          priceText: "Sob consulta"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta"
        }
      ],
      paymentTerms: [
        "Sinal de 20% na confirmação da reserva",
        "Saldo de 80% até 30 dias antes da viagem",
        "Parcelamento em até 10x sem juros no cartão de crédito (saldo)"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Os valores estão sujeitos a alteração sem aviso prévio. Consulte-nos para obter cotações atualizadas e disponibilidade."
    },
    faqs: [
      {
        question: "Qual é o tempo de traslado do aeroporto até o resort?",
        answer: "O traslado é feito por hidroavião e leva aproximadamente 40 minutos do Aeroporto Internacional de Malé até o Sun Siyam Iru Veli."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort é ideal para famílias. Possui Kids Club 'Turtle Kids Club' para crianças de 3 a 12 anos, piscina infantil, cardápio kids nos restaurantes, berço e cama extra sob consulta, e babysitting com custo extra."
      },
      {
        question: "O que está incluído no pacote all inclusive?",
        answer: "O all inclusive premium inclui café da manhã, almoço e jantar em múltiplos restaurantes (buffet e à la carte), snacks, sorvetes, minibar reabastecido diariamente, bebidas alcoólicas e não alcoólicas, snorkeling, caiaque, SUP, windsurf, atividades esportivas, kids club, academia, excursão de snorkeling guiado, cruzeiro ao pôr do sol, lounge VIP de chegada e Wi-Fi."
      },
      {
        question: "Todas as acomodações possuem piscina privativa?",
        answer: "Sim, todas as suítes do Sun Siyam Iru Veli possuem piscina privativa, seja sobre a água ou na praia."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece: Aqua Orange (internacional buffet), Roma (italiano à la carte), Grouper Grill (grill e frutos do mar), Teppanyaki (japonês), Chemistry Bar (lobby bar), Fresh Water Pool Bar, Wine Cellar (degustações) e room service 24h."
      },
      {
        question: "Quais atividades estão disponíveis?",
        answer: "Gratuitas: snorkeling no house reef, caiaque, SUP, pedalinho, windsurf, tênis, vôlei de praia, futebol, academia, yoga, kids club, excursão de snorkeling guiado e cruzeiro sunset. Com custo extra: mergulho PADI, jet ski, seabob, wakeboard, spa, jantares privativos, passeios de barco e pesca."
      },
      {
        question: "O resort possui spa?",
        answer: "Sim, o Sun Siyam Spa oferece tratamentos balineses, ayurvédicos, hidroterapia, massagens e ritual romântico de casal, com custo extra."
      },
      {
        question: "Quais são os principais diferenciais do resort?",
        answer: "Todas as suítes com piscina privativa, all inclusive premium com bebidas de qualidade, kids club completo, house reef excepcional para snorkeling, gastronomia variada, spa sobre a água e ótimo custo-benefício."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Sun Siyam Iru Veli - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean Suite with Pool - suíte sobre a água com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa ao pôr do sol"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Sun Siyam Spa - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Aqua Orange Restaurant - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Roma Restaurant - gastronomia italiana"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Grouper Grill - frutos do mar à beira-mar"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina infinita principal"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef - snorkeling"
      }
    ]
  },
  "jawakara-islands": {
    slug: "jawakara-islands",
    name: "Jawakara Islands Maldives",
    rating: 5,
    location: "Atol Lhaviyani (ilhas Mabin e Dheru)",
    transferTime: "Hidroavião 40min ou voo doméstico + lancha rápida 1h15",
    heroImage: heroImage,
    heroTitle: "Jawakara Islands Maldives",
    heroSubtitle: "Resort 5 estrelas com duas ilhas interligadas e 290 villas",
    heroHighlights: ["All Inclusive Premium", "290 Villas", "Duas Ilhas Conectadas"],
    seoTitle: "Jawakara Islands Maldives - Resort 5★ All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas no Atol Lhaviyani com duas ilhas interligadas, 290 villas, all inclusive premium, gastronomia variada e excelente house reef. Ideal para famílias e casais.",
    about: "Jawakara Islands Maldives é um resort 5 estrelas localizado no Atol Lhaviyani, composto por duas ilhas interligadas (Mabin e Dheru) por uma longa ponte sobre o house reef. O hotel conta com 290 villas distribuídas entre as duas ilhas, ideias tanto para famílias quanto para casais, e é referência em diversidade de experiências, espaço e gastronomia. O acesso se dá por hidroavião (cerca de 40min de Malé) ou voo doméstico + lancha rápida (cerca de 1h15 no total).",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote (All Inclusive)",
        type: "text",
        content: `Incluído:

- Café da manhã, almoço e jantar nos restaurantes buffet designados conforme a villa/localização
- 1 almoço ou jantar à la carte nos restaurantes Molo e Umi (com reserva e confirmação)
- Snacks, pizzas, petiscos e sorvete disponíveis nos bares Bonthi, Thila e Nika
- Seleção ampla de bebidas alcoólicas e não alcoólicas: cocktails, moquetéis, smoothies, milkshakes, sucos, destilados, licores, vinhos, cervejas, cafés, chás, refrigerantes e água
- Minibar reabastecido diariamente com vinho, cerveja, destilados, água, snacks e café
- Garrafa de champagne de boas-vindas
- 1 passeio regular de barco ao pôr do sol por estadia
- 30 minutos de tratamento de spa selecionado por pessoa (maiores de 15 anos)
- Acesso ao fitness center, quadras de tênis, campo de golf, tênis de mesa, bilhar, futebol
- Bicicletas de cortesia durante a estadia (sujeito à disponibilidade)
- Aulas de yoga em grupo
- Uso de caiaques e windsurf (por 1h/dia cada, requer experiência básica)
- Equipamento de snorkeling incluso e 2 passeios diários de barco ao recife para snorkeling (com reserva e confirmação)
- Kids Club
- Serviço de arrumação 2x ao dia e serviço de turndown
- Wi-Fi de alta velocidade em toda a ilha`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Restaurantes principais:

- Saima Buffet Restaurant
- Aila Buffet Restaurant
- Umi (asiático fusion, à la carte)
- Molo (mediterrâneo à la carte)
- Hideout (fast food internacional, burgers, saladas, opções vegetarianas)

Bares:

- Bonthi Bar
- Thila Bar
- Nika Bar
- Drinks de qualidade premium tanto nos restaurantes quanto nos bares, com snacks e sorvetes à vontade, além de eventos e programação musical noturna

Atividades gratuitas:

- Piscinas principais e infantis
- Spa: jacuzzi, sauna, massagens (inclusive incluídas via pacote)
- Fitness center e academia ao ar livre
- Quadras: tênis, futebol, golfe (com aula e equipamentos inclusos)
- Bicicletas para circular entre ilhas
- Trilhas ecológicas, caminhadas, tênis de mesa, bilhar
- Praia extensa e house reef para snorkeling/canoagem
- Kids Club para crianças e teens
- Programação com aulas de golf, yoga, snorkeling, windsurf
- Noite cultural, música ao vivo, cinema open-air

Atividades com custo extra:

- Mergulho PADI (batismo, cursos, saídas guiadas)
- Esportes motorizados: jet ski, seabob, wakeboard, parasailing
- Spa completo: massagens premium, tratamentos faciais, corpo, salão de beleza
- Jantares privativos, degustação de vinhos, experiências personalizadas
- Pesca esportiva, sunset cruise privativo, sandbank picnic
- Excursões para ilhas locais, banco de areia, dolphin tours
- Babysitting, sessão de fotos profissional`
      },
      {
        id: "accommodations-text",
        title: "Acomodação",
        type: "text",
        content: `Ocean Villa (sobre a água):

Deck privativo, escada para o mar, vista sunrise/sunset, sala ampla, amenities top.

Comodidades nas Villas:

- Todas as villas oferecem privacidade, serviço de arrumação 2x/dia, menu de travesseiros
- Minibar, room service sob consulta
- Amenities kids e berço/cama extra sob pedido
- Cama king-size ou twin beds
- Banheiro com chuveiro, amenities premium
- Terraço privativo com espreguiçadeiras
- Smart TV, Wi-Fi premium, ar-condicionado
- Cofre, ventilador de teto
- Máquina de café/chá`
      },
      {
        id: "families",
        title: "Famílias e Diferenciais",
        type: "text",
        content: `Política para crianças:

- Até 2 crianças até 12 anos grátis (com pais)
- Kids Club completo, menu infantil nos restaurantes
- Playground, babysitter (extra)
- Suítes familiares amplas, berço/cama extra livre
- Villa adaptada e amenities baby

Diferenciais do resort:

- Espetacular house reef e trilha ecológica
- Bicicletas disponíveis em todos os quartos
- Referência em custo-benefício all inclusive
- Gastronomia variada e programa kids/famílias
- Resort muito novo, padrão superior de limpeza e manutenção
- Programas sustentáveis e atendimento personalizado
- Duas ilhas interligadas por ponte sobre o house reef
- 290 villas distribuídas entre as duas ilhas`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "Todas as villas oferecem privacidade excepcional, design contemporâneo e comodidades premium para uma estadia memorável.",
      types: [
        {
          name: "Ocean Villa",
          size: "Consultar",
          beds: "King-size ou Twin",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Deck privativo sobre a água",
            "Escada direta para o mar",
            "Vista sunrise ou sunset",
            "Sala ampla e confortável",
            "Amenities premium",
            "Minibar reabastecido diariamente",
            "Banheiro com chuveiro",
            "Smart TV e Wi-Fi",
            "Ar-condicionado e ventilador",
            "Máquina de café/chá",
            "Cofre e menu de travesseiros"
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
        answer: "O traslado pode ser feito por hidroavião (cerca de 40 minutos) ou por voo doméstico + lancha rápida (cerca de 1h15 no total) do Aeroporto Internacional de Malé até o Jawakara Islands Maldives."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort é ideal para famílias. Possui Kids Club completo para crianças e teens, piscina infantil, menu infantil nos restaurantes, playground, suítes familiares amplas, berço e cama extra livre, e até 2 crianças até 12 anos grátis com os pais. Babysitting disponível com custo extra."
      },
      {
        question: "O que está incluído no pacote all inclusive?",
        answer: "O all inclusive premium inclui café da manhã, almoço e jantar nos restaurantes buffet, 1 almoço ou jantar à la carte, snacks e sorvete, ampla seleção de bebidas alcoólicas e não alcoólicas, minibar reabastecido, champagne de boas-vindas, cruzeiro ao pôr do sol, 30 min de spa, fitness center, quadras, bicicletas, yoga, caiaque, windsurf, equipamento de snorkeling, 2 passeios diários de snorkeling, kids club e Wi-Fi."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece: Saima Buffet Restaurant, Aila Buffet Restaurant, Umi (asiático fusion à la carte), Molo (mediterrâneo à la carte), Hideout (fast food internacional), além dos bares Bonthi Bar, Thila Bar e Nika Bar com snacks e drinks premium."
      },
      {
        question: "Quais atividades estão disponíveis?",
        answer: "Gratuitas: piscinas, spa (jacuzzi, sauna, 30 min de massagem incluso), fitness center, quadras de tênis/futebol/golf, bicicletas, trilhas ecológicas, tênis de mesa, bilhar, house reef para snorkeling, kids club, yoga, aulas de golf/snorkeling/windsurf, música ao vivo, cinema open-air. Com custo extra: mergulho PADI, jet ski, seabob, wakeboard, parasailing, spa completo, jantares privativos, pesca esportiva, excursões."
      },
      {
        question: "O resort possui spa?",
        answer: "Sim, o resort possui spa completo com jacuzzi, sauna e massagens. O pacote all inclusive já inclui 30 minutos de tratamento selecionado por pessoa (maiores de 15 anos). Massagens premium, tratamentos faciais, corporais e salão de beleza estão disponíveis com custo extra."
      },
      {
        question: "O que diferencia o Jawakara Islands?",
        answer: "O resort é único por ser composto por duas ilhas (Mabin e Dheru) interligadas por uma ponte sobre o house reef, possui 290 villas distribuídas entre as ilhas, all inclusive premium com gastronomia variada, é muito novo com padrão superior de limpeza, possui bicicletas em todos os quartos, house reef espetacular, kids club completo e excelente custo-benefício."
      },
      {
        question: "Crianças pagam?",
        answer: "Até 2 crianças de até 12 anos ficam gratuitamente quando acompanhadas dos pais, em villa compartilhada."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Jawakara Islands Maldives - Vista aérea das duas ilhas conectadas"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean Villa - villa sobre a água"
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
        alt: "Saima Buffet Restaurant - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Umi Restaurant - gastronomia asiática fusion"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Molo Restaurant - culinária mediterrânea"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina principal"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef - ponte conectando as ilhas"
      }
    ]
  },
  "le-meridien": {
    slug: "le-meridien",
    name: "Le Méridien Maldives Resort & Spa",
    rating: 5,
    location: "Ilha Thilamaafushi, Atol Lhaviyani",
    transferTime: "35 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Le Méridien Maldives Resort & Spa",
    heroSubtitle: "Resort 5 estrelas com design mid-century e atmosfera cosmopolita",
    heroHighlights: ["Design Mid-Century Moderno", "6 Restaurantes & Bares", "Le Méridien Family Kids Hub"],
    seoTitle: "Le Méridien Maldives Resort & Spa - Resort 5★ Moderno | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas na ilha de Thilamaafushi, Atol Lhaviyani, com design moderno mid-century, 6 restaurantes e bares, kids club completo e atmosfera cosmopolita. Ideal para casais e famílias.",
    about: "Le Méridien Maldives Resort & Spa é um resort 5 estrelas situado na ilha de Thilamaafushi, Atol Lhaviyani, a cerca de 35 minutos de hidroavião de Malé. O resort se destaca por seu design moderno com inspiração mid-century, integração com a natureza, atendimento familiar e atmosfera cosmopolita, ideal tanto para casais quanto para famílias, incluindo pequenos grupos.",
    sections: [
      {
        id: "inclusions",
        title: "Infraestrutura e Comodidades",
        type: "text",
        content: `Infraestrutura:

- 6 restaurantes/bars: cozinha internacional, grill, asiático, mediterrâneo, bar de praia, confeitaria/patisserie e wine cellar
- 2 piscinas infinitas (principal e infantil)
- Spa completo
- Clube infantil "Le Méridien Family Kids Hub"
- Academia completa
- Quadras de tênis, beach volley
- Salão de jogos
- Bicicletário
- Boutique
- Galeria de arte

Atividades Inclusas:

- Snorkeling (house reef)
- Caiaque
- Stand-up paddle
- Uso do centro fitness
- Ioga em grupo
- Trilhas ecológicas
- Shows e experiências culturais

Atividades com Custo Extra:

- Esportes aquáticos motorizados (jet ski, seabob)
- Mergulho PADI
- Excursões exclusivas (sunset cruise, pesca, sandbank picnic)

Para Famílias:

- Kids club e atividades infantis diárias
- Kids menu nos restaurantes
- Serviço de babysitting (extra)
- Amenities kids
- Berço/cama extra por solicitação`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `Restaurantes:

- Tabemasu: Restaurante de alta gastronomia japonesa com menu teppanyaki e sushi, oferecendo uma experiência elegante com vista para a lagoa turquesa
- Riviera Tapas & Bar: Restaurante à beira da praia com cozinha espanhola autêntica, incluindo tapas, paella e frutos do mar frescos
- Turquoise: Restaurante principal de estilo eclético que combina especialidades locais das Maldivas, pratos asiáticos preferidos e culinária europeia moderna, aberto para café da manhã, almoço e jantar
- Velaa Bar + Grill: Restaurante e bar na piscina e praia, que oferece pratos leves e drinks durante o dia, e à noite se transforma em um steakhouse com frutos do mar grelhados e especialidades ao forno a lenha
- Waves Café: Espaço para refeições conscientes, com ingredientes frescos, sucos naturais e opções equilibradas
- Latitude: Café e bar no Le Méridien Hub, inspirado na cultura europeia de café, servindo café Illy premium, bebidas refrescantes e snacks durante o dia
- La Vie: Bar exclusivo para adultos, sofisticado e descontraído, com vistas para o mar e piscina privada, inspirado na cultura francesa do vinho`
      },
      {
        id: "accommodations-text",
        title: "Acomodação",
        type: "text",
        content: `Overwater Villa e Pool Villa:

- 82 m²
- Acesso direto à lagoa
- Deck privativo
- Espetacular vista do mar ou sunset/sunrise
- Algumas com piscina privativa

Comodidades nas Villas:

- Minibar
- Máquina de café/chá
- Amenities premium Malin+Goetz
- Smart TV
- Wi-Fi gratuito
- Ar-condicionado
- Menu de travesseiros`
      },
      {
        id: "families",
        title: "Diferenciais e Info para Famílias",
        type: "text",
        content: `Diferenciais:

- Kids até 11 anos grátis com pais em alguns planos (consultar promoções vigentes)
- Clube Kids com atividades criativas, esportivas e educativas
- Villas familiar/Thilamaafushi Villa com 2 ou 3 quartos, privacidade total
- Menu kids e amenities baby
- Resort pet friendly em algumas tarifas (sob consulta)
- Bicicletas disponíveis
- Atividades culturais e trilhas ecológicas
- Sustentabilidade: adoção de práticas eco-friendly, redução de plásticos e restauração de recifes`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "Todas as villas oferecem design moderno mid-century, integração com a natureza e comodidades premium para uma estadia memorável.",
      types: [
        {
          name: "Overwater Villa / Pool Villa",
          size: "82m²",
          beds: "King-size",
          maxOccupancy: "2 adultos + 1 criança",
          features: [
            "Acesso direto à lagoa",
            "Deck privativo",
            "Vista do mar ou sunset/sunrise",
            "Algumas com piscina privativa",
            "Minibar",
            "Máquina de café/chá",
            "Amenities premium Malin+Goetz",
            "Smart TV",
            "Wi-Fi gratuito",
            "Ar-condicionado",
            "Menu de travesseiros"
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
        answer: "O traslado é feito por hidroavião, com duração de cerca de 35 minutos do Aeroporto Internacional de Malé até o Le Méridien Maldives Resort & Spa."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort é ideal para famílias. Possui Le Méridien Family Kids Hub com atividades criativas, esportivas e educativas, piscina infantil, kids menu nos restaurantes, amenities baby, berço e cama extra disponíveis. Kids até 11 anos podem ficar grátis com os pais em alguns planos."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece 6 restaurantes e bares: Tabemasu (japonês teppanyaki e sushi), Riviera Tapas & Bar (espanhol), Turquoise (eclético internacional), Velaa Bar + Grill (steakhouse e frutos do mar), Waves Café (refeições conscientes), Latitude (café Illy premium), e La Vie (bar de vinhos exclusivo para adultos)."
      },
      {
        question: "Quais atividades estão incluídas?",
        answer: "Gratuitas: snorkeling no house reef, caiaque, stand-up paddle, centro fitness, ioga em grupo, trilhas ecológicas, shows culturais, bicicletas. Com custo extra: esportes aquáticos motorizados (jet ski, seabob), mergulho PADI, excursões (sunset cruise, pesca, sandbank picnic), babysitting."
      },
      {
        question: "O resort possui spa?",
        answer: "Sim, o resort possui spa completo com diversos tratamentos disponíveis."
      },
      {
        question: "O que diferencia o Le Méridien Maldives?",
        answer: "O resort se destaca pelo design moderno com inspiração mid-century, atmosfera cosmopolita, 6 restaurantes e bares variados, kids club completo, práticas sustentáveis (redução de plásticos e restauração de recifes), e opção pet friendly em algumas tarifas. É ideal tanto para casais quanto para famílias."
      },
      {
        question: "Crianças pagam?",
        answer: "Kids até 11 anos podem ficar gratuitamente com os pais em alguns planos. Consulte-nos para verificar as promoções vigentes e disponibilidade."
      },
      {
        question: "O resort aceita animais de estimação?",
        answer: "Sim, o resort é pet friendly em algumas tarifas. Consulte-nos para verificar as condições e disponibilidade."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Le Méridien Maldives Resort & Spa - Vista aérea"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Overwater Villa - vista da lagoa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Pool Villa ao pôr do sol"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Turquoise Restaurant - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Tabemasu Restaurant - gastronomia japonesa"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Riviera Tapas & Bar - culinária espanhola"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina infinita principal"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "House reef - snorkeling"
      }
    ]
  },
  "milaidhoo-island": {
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
  },
  "niyama-private-islands": niyamaPrivateIslands,
  "nooe-maldives": {
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
  },
  "joali-being": joaliBeing,
  "joali-maldives": joaliMaldives,
  "jw-marriott-maldives": {
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
  },
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
