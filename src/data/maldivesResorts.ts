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
import oneAndOnlyReethiRah from "./resorts/one-and-only-reethi-rah";
import patinaMaldives from "./resorts/patina-maldives";
import radissonBlu from "./resorts/radisson-blu";
import ritzCarltonMaldives from "./resorts/ritz-carlton-maldives";
import sixSensesKanuhura from "./resorts/six-senses-kanuhura";
import sixSensesLaamu from "./resorts/six-senses-laamu";
import siyamWorld from "./resorts/siyam-world";
import sonevaJani from "./resorts/soneva-jani";
import sonevaFushi from "./resorts/soneva-fushi";
import sonevaSecret from "./resorts/soneva-secret";
import theNautilus from "./resorts/the-nautilus";
import vakkaruMaldives from "./resorts/vakkaru-maldives";
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
  "ayada-maldives": {
    slug: "ayada-maldives",
    name: "Ayada Maldives",
    rating: 5,
    location: "Ilha Maguhdhuvaa, Atol Gaafu Dhaalu",
    transferTime: "Voo doméstico 55min + lancha 50min",
    heroImage: heroImage,
    heroTitle: "Ayada Maldives",
    heroSubtitle: "Resort 5 estrelas com hospitalidade turca e serviço de mordomo exclusivo",
    heroHighlights: ["Butler 24h", "122 Villas com Piscina", "Spa Premiado"],
    seoTitle: "Ayada Maldives - Resort 5★ com Butler | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas no Atol Gaafu Dhaalu com hospitalidade turca, serviço de mordomo exclusivo e 122 villas com piscina privativa. Gastronomia variada e spa premiado.",
    about: "Ayada Maldives é um resort 5 estrelas localizado na ilha privada de Maguhdhuvaa, Atol Gaafu Dhaalu, ao sul do arquipélago das Maldivas. Reconhecido internacionalmente por sua hospitalidade turca, serviço de mordomo exclusivo, design com influências locais e jardins exuberantes. Dispõe de 122 villas e suítes (praia e sobre a água), cada uma com piscina privativa, terraço e acesso direto à praia ou lagoa. O resort destaca-se pela gastronomia variada, excelentes condições de mergulho e spa premiado. Chegada via voo doméstico de Malé até Kaadedhdhoo (55 minutos) + lancha rápida (50 minutos).",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet internacional no Magu
- Serviço de mordomo exclusivo (butler) 24h para todas as villas
- Toalhas frias, água e amenidades durante o transfer
- Equipamentos de snorkeling, caiaque e stand-up paddle gratuitos
- Bicicletas disponíveis para cada hóspede
- Acesso à academia e quadras de esportes
- Wi-Fi gratuito em toda a ilha
- Arrumação duas vezes ao dia
- Welcome drink e amenidade de fruta fresca
- Chá da tarde diariamente (16h-18h)
- Entretenimento noturno (shows culturais, música ao vivo)
- Kids Club ZUZU gratuito (9h-18h)
- Sauna, banho turco e jacuzzi no AySpa
- Cinema sob as estrelas regularmente
- Acesso à infinity pool principal

Lua de Mel/Aniversário (mínimo 4 noites):

- Decoração especial, bolo, frutas e vinho na villa
- 60 minutos de massagem para casal no AySpa
- Amenidade de chá da tarde exclusiva
- Upgrade sujeito à disponibilidade

Estadias longas (7+ noites nas Suítes ou Residences):

- Jantar privativo na praia
- Experiência gastronômica turca
- Passeio guiado de snorkeling
- Transfer gratuito de bagagem extra`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling guiado no recife da ilha
- Caiaque, SUP, pedalinho, windsurf
- Quadras de tênis, vôlei de praia, badminton, futebol de areia
- Aulas de yoga em grupo (manhã/tarde)
- Academia com instrutor disponível
- Workshops culinários e mixologia
- Cinema sob as estrelas
- Kids Club ZUZU: atividades criativas, artes e jogos, área de playground externa
- Bicicletas para passeios pela ilha
- Oficinas de artesanato e culinária maldívia

Atividades com custo extra:

- Mergulho (PADI 5 estrelas): batismo, cursos completos, safaris de mergulho
- Esportes motorizados: jet ski, parasail, seabob, esqui aquático, fun tube
- Pesca ao pôr do sol, pesca tradicional maldívia
- Cruzeiros privativos de catamarã ou lancha (pôr do sol, observação de golfinhos, visita a bancos de areia)
- Passeio às ilhas locais
- Aula de culinária privada
- Experiência de jantar privado "White Room"
- Spa: tratamentos AySpa signature, hammam turco, terapias ayurvédicas e massagens premium
- Aulas de surf, kitesurf
- Aluguel de yacht privativo (preços sob consulta)

Esporte aquático motorizado (preços médios):

- Jet ski: USD $65 (15min)
- Parasail: USD $100 (20min)
- Wakeboard/Water ski: USD $60 (15min)
- Seabob: USD $70 (15min)
- Fun tube: USD $45 (15min)

Principais experiências aquáticas:

- Mergulho com mantas, tubarões e tartarugas
- Snorkeling noturno guiado
- Passeios de SUP ao pôr do sol
- Yoga sobre stand-up paddle

Restaurantes & Bares:

Restaurantes principais:

- Magu: Buffet internacional para café da manhã/jantar temático
- Ocean Breeze: Mediterrâneo à la carte com deck sobre a água
- Zero Degree: Restaurante casual e bar da piscina
- Kai: Asiático fusion (japonês, chinês e tailandês)
- Sea Salt: Grill de frutos do mar na praia (jantares especiais)
- Ottoman Lounge: Chás premium, doces turcos, ambiente tradicional
- Mizu Teppanyaki: Japonês teppanyaki (show cooking)

Bares:

- Ile de Joie: Wine & cheese bar premium sobre a água
- Zero Degree Bar: Drinks tropicais e petiscos à beira da piscina
- Ottoman Lounge Bar

Experiências Gastronômicas Especiais:

- Jantar privativo na praia ou villa
- Degustação de vinhos no Ile de Joie
- Menu de frutos do mar frescos no Sea Salt Grill
- White Room Private Dining (jantar personalizado em ambiente branco)
- Themed nights e jantares românticos
- Room Service 24h`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Ocean Villa (108m²): sobre a lagoa, piscina privativa, terraço coberto, acesso ao mar
- Sunset Ocean Suite (172m²): vista premiada para o pôr do sol, piscina privativa 16m, lounge externo, sala de estar separada
- Sunset Lagoon Suite: opções familiares disponíveis, piscina privativa
- Ayada Royal Ocean Suite (318m²): categoria máxima de luxo, sala de jantar, 2 quartos, piscina infinita, deck panorâmico

Comodidades:

- Piscina privativa (5-16m)
- King-size bed
- Banheiro aberto com amenities premium
- Espaço para refeições ao ar livre
- Menu de travesseiros
- Nespresso, minibar
- Smart TV, Bose sound system, Wi-Fi premium
- Berço ou cama extra sob solicitação
- Serviço de mordomo (butler) 24h`
      }
    ],
    accommodations: {
      title: "Acomodação",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio - Outubro",
          priceText: "Sob consulta",
          priceSubtext: "Melhores tarifas do ano"
        },
        {
          name: "Alta Temporada",
          period: "Novembro - Abril",
          priceText: "Sob consulta",
          priceSubtext: "Clima ideal e melhor visibilidade"
        }
      ],
      paymentTerms: [
        "20% de entrada no ato da reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento em até 10x sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Reembolso de 80% do valor pago para cancelamentos realizados com até 30 dias de antecedência da data de início da viagem"
    },
    faqs: [
      {
        question: "Como é o transfer para o Ayada Maldives?",
        answer: "O transfer é feito via voo doméstico de Malé até Kaadedhdhoo (55 minutos) seguido de lancha rápida (50 minutos). Todo o trajeto é coordenado pelo resort e inclui assistência completa."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet internacional, serviço de mordomo 24h, equipamentos de snorkeling e esportes aquáticos não motorizados, Wi-Fi, academia, Kids Club ZUZU, chá da tarde diário, entretenimento noturno e muito mais."
      },
      {
        question: "Todas as villas têm piscina privativa?",
        answer: "Sim, todas as 122 villas e suítes do Ayada Maldives possuem piscina privativa, além de terraço e acesso direto à praia ou lagoa."
      },
      {
        question: "O resort é adequado para crianças?",
        answer: "Sim, o Ayada Maldives oferece o Kids Club ZUZU gratuito (9h-18h) com atividades criativas, artes, jogos e playground externo. As villas também podem incluir berço ou cama extra sob solicitação."
      },
      {
        question: "Quais são os restaurantes disponíveis?",
        answer: "O resort possui 7 restaurantes principais: Magu (buffet internacional), Ocean Breeze (mediterrâneo), Zero Degree (casual), Kai (asiático fusion), Sea Salt (grill de frutos do mar), Ottoman Lounge (turco) e Mizu Teppanyaki (japonês)."
      },
      {
        question: "É possível fazer mergulho no resort?",
        answer: "Sim, o Ayada Maldives possui um centro de mergulho PADI 5 estrelas com batismos, cursos completos e safaris de mergulho. A região é excelente para ver mantas, tubarões e tartarugas."
      },
      {
        question: "O que é o serviço de mordomo (butler)?",
        answer: "Todas as villas incluem serviço de mordomo exclusivo 24h, uma marca registrada da hospitalidade turca do Ayada. O butler auxilia com reservas, experiências personalizadas e todas as necessidades durante a estadia."
      },
      {
        question: "Há benefícios para lua de mel?",
        answer: "Sim, casais em lua de mel ou aniversário (mínimo 4 noites) recebem decoração especial, bolo, frutas, vinho, 60 minutos de massagem para casal no AySpa e upgrade sujeito à disponibilidade."
      }
    ],
    images: [
      { src: heroImage, alt: "Ayada Maldives - Vista aérea do resort" },
      { src: "/src/assets/maldives-experiences/overwater-villas.jpg", alt: "Villas sobre a água com piscina privativa" },
      { src: "/src/assets/maldives-experiences/infinity-pool.jpg", alt: "Piscina infinita com vista para o oceano" },
      { src: "/src/assets/maldives-experiences/villa-sunset.jpg", alt: "Villa ao pôr do sol" },
      { src: "/src/assets/maldives-experiences/luxury-bathroom.jpg", alt: "Banheiro luxuoso" },
      { src: "/src/assets/maldives-experiences/romantic-dinner.jpg", alt: "Jantar romântico na praia" },
      { src: "/src/assets/maldives-experiences/snorkeling.jpg", alt: "Snorkeling no recife" },
      { src: "/src/assets/maldives-experiences/spa-treatment.jpg", alt: "Tratamento no spa" }
    ]
  },
  "amilla-maldives": {
    slug: "amilla-maldives",
    name: "Amilla Maldives Resort and Residences",
    rating: 5,
    location: "Baa Atoll - Reserva da Biosfera UNESCO",
    transferTime: "30-35 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Amilla Maldives Resort and Residences",
    heroSubtitle: "Resort 5 estrelas ultra-luxuoso na Reserva da Biosfera UNESCO com serviço de mordomo personalizado",
    heroHighlights: ["Serviço de Mordomo 24/7", "Reserva UNESCO", "67 Villas com Piscina"],
    seoTitle: "Amilla Maldives Resort - Ultra-Luxo 5★ Baa Atoll | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas ultra-luxuoso no Baa Atoll, Reserva da Biosfera UNESCO. 67 villas espaçosas com piscina privativa, serviço de mordomo personalizado, proximidade com Hanifaru Bay e compromisso com sustentabilidade.",
    about: "O Amilla Maldives Resort and Residences é um resort 5 estrelas ultra-luxuoso localizado no Atol de Baa, Reserva da Biosfera UNESCO, a 30-35 minutos de hidroavião do Aeroporto Internacional de Malé. Membro da prestigiada Small Luxury Hotels of the World, o resort ocupa uma das maiores ilhas privadas das Maldivas com 23,5 hectares e mais de 70% de selva tropical preservada.\n\nCom apenas 67 villas espaçosas (220m² a 2.400m²), todas equipadas com piscina privativa e serviço de mordomo pessoal (Katheeb) disponível 24/7, o Amilla oferece uma experiência verdadeiramente exclusiva. O resort destaca-se pela proximidade com Hanifaru Bay para observação de mantas e tubarões-baleia, excepcional house reef para snorkeling com biólogo marinho, e compromisso genuíno com sustentabilidade certificado pela EarthCheck Silver Certification.\n\nCom 8 restaurantes e bares de classe mundial, incluindo culinária japonesa, italiana, indiana e grega, jardins orgânicos próprios que abastecem os restaurantes, e experiências únicas como o Amilla Glamping em bolha transparente, o resort combina luxo sofisticado com respeito ao meio ambiente, criando o cenário perfeito para viajantes exigentes que buscam exclusividade e autenticidade.",
    sections: [
      {
        id: "section-1",
        title: "Inclusões do pacote",
        type: "text",
        content: `- Café da manhã buffet e à la carte no Fresh Restaurant
- Serviço de mordomo pessoal (Katheeb) 24/7 para cada villa
- Equipamentos de snorkeling, stand-up paddle e caiaques gratuitos
- Bicicletas personalizadas para cada hóspede
- Acesso a 3 academias equipadas (incluindo Jungle Gymnasium)
- Sessões de yoga e meditação no Javvu Spa
- Snorkeling guiado no house reef com biólogo marinho
- Wi-Fi gratuito em toda a ilha
- Água mineral e chás gourmet na villa
- Arrumação duas vezes ao dia e turndown service noturno
- Coquetel de boas-vindas semanal
- Entretenimento (música ao vivo, dança tradicional Bodu Beru, cinema ao ar livre)

Benefícios para Lua de Mel (4+ noites):
- Champagne de cortesia
- Romantic turndown service
- 30 minutos extras em tratamento de spa
- 7+ noites: Excursão surpresa + jantar romântico na praia + floating breakfast`
      },
      {
        id: "section-2",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:
- Esportes aquáticos não motorizados (caiaque, SUP, snorkeling)
- Programa Mini Marine Biologists para crianças (4-13 anos)
- Sultan's Village Kids Club (4-12 anos, 9h-17h diariamente)
- Quadras de tênis, badminton, vôlei de praia e futebol
- Treinamento de futebol em grupo (6x/semana)
- Sala de jogos (bilhar, ping-pong, xadrez)
- Workshops criativos (Alchemy Bar, culinária, mixologia, fotografia)
- Teen programme (DJ, aerial hoop, PlayStation 4)

Atividades com Custo Extra:
- Esportes motorizados: Jet ski (USD $150++ - 20min), wakeboard/water ski (USD $65-80++), subwing (USD $65++)
- Mergulho: A partir de USD $25++ por mergulho, equipamento completo USD $34++
- Excursões: Dolphin cruise (USD $1.200++), snorkeling safari (USD $700-1.200++), pesca tradicional (USD $700-850++), big game fishing (USD $1.200-2.200++), visita a Hanifaru Bay (sazonal)
- Javvu Spa: Tratamentos a partir de USD $175 (60min), programas signature com medicina herbal maldívia (Dhivehi Beys), massagem para casal sob as estrelas (USD $550 - 90min)
- Experiências especiais: Amilla Glamping em bolha transparente (USD $750-1.000++ por noite com pacotes wellness ou romance), jantar privativo na praia (Dine by Design), piquenique em banco de areia

Restaurantes:
- Feeling Koi - Japonês contemporâneo sobre a água com sunset bar no rooftop
- Barolo - Italiano autêntico do Piemonte
- East - Sul da Índia com especialidades tandoor
- Tessera - Grego mediterrâneo
- Fresh - Buffet internacional (café da manhã incluso, jantares temáticos)
- Emperor Beach Club - Casual na areia com noites temáticas 3x/semana
- Joe's Pizza - Pizzas artesanais
- Chill'd Café - Opções leves

Bares: Sunset Bar (rooftop), Baa Bar, The Cellar Door (adega premium), Baazaar Bar (piscina)`
      },
      {
        id: "section-3",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a Água:
- Reef Water Pool Villa (220m²) - 1 quarto, piscina 9,5m, suspensa sobre recife de coral, acesso direto para snorkeling, capacidade 2 adultos + 2 crianças
- Lagoon Water Pool Villa (280m²) - 1 ou 2 quartos, piscina expansiva, sobre lagoa turquesa, deck espaçoso

Comodidades em todas as villas: Piscina privativa (9,5-20m), cama king-size, banheira para dois, chuveiro ao ar livre, deck com espreguiçadeiras, TV 42" com Blu-Ray, sistema de som Bose, iPad de controle, máquina Nespresso, mini-bar e adega, amenities orgânicos premium, rede na praia, ar-condicionado individual. Berços, monitores de bebê e cadeiras altas disponíveis sob solicitação.

Política de Crianças:
- Menores de 2 anos: traslado gratuito, refeições gratuitas
- Acima de 12 anos: tarifa adulto
- Kids Club gratuito (4-12 anos), programa Mini Marine Biologists gratuito`
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
          priceSubtext: "7 noites em Reef Water Pool Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Reef Water Pool Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Menores de 2 anos: traslado gratuito e refeições gratuitas. Acima de 12 anos: tarifa adulto. Kids Club gratuito (4-12 anos)."
    },
    faqs: [
      {
        question: "O transfer de hidroavião está incluído?",
        answer: "O transfer de hidroavião (30-35 minutos) não está incluído no pacote base, mas pode ser adicionado. Consulte valores e disponibilidade."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, muito adequado! Temos Sultan's Village Kids Club gratuito (4-12 anos, 9h-17h), programa Mini Marine Biologists, teen programme, e villas espaçosas. Menores de 2 anos têm traslado e refeições gratuitas."
      },
      {
        question: "Como funciona o serviço de mordomo (Katheeb)?",
        answer: "Cada villa tem um mordomo pessoal (Katheeb) disponível 24/7 para atender todas as suas necessidades: organizar refeições, atividades, excursões, spa, e garantir que sua experiência seja perfeita."
      },
      {
        question: "Quando é possível visitar Hanifaru Bay?",
        answer: "A visita a Hanifaru Bay para observação de mantas e tubarões-baleia é sazonal, sendo melhor entre maio e novembro durante o período de alimentação do plâncton. Seu mordomo pode organizar a excursão."
      },
      {
        question: "O que é o Amilla Glamping?",
        answer: "É uma experiência única de dormir em uma bolha transparente sob as estrelas (USD $750-1.000++ por noite), com pacotes wellness ou romance incluindo tratamentos de spa, refeições e atividades especiais."
      },
      {
        question: "É necessário visto para as Maldivas?",
        answer: "Brasileiros não precisam de visto prévio. O visto de turista (30 dias) é concedido gratuitamente na chegada ao aeroporto de Malé."
      }
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=2670",
        alt: "Amilla Maldives - Vista aérea das luxuosas water villas sobre a lagoa turquesa"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "Interior ultra-luxuoso da villa com piscina privativa e deck sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Quarto principal com cama king-size e vista panorâmica para o oceano"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Deck privativo da villa com piscina infinita sobre o recife de coral"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Feeling Koi - Restaurante japonês contemporâneo sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling no excepcional house reef com biólogo marinho"
      },
      {
        src: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?q=80&w=2626",
        alt: "Javvu Spa - Tratamentos de wellness com medicina herbal maldívia"
      }
    ]
  },
  "adaaran-select": {
    slug: "adaaran-select",
    name: "Adaaran Select Hudhuranfushi",
    rating: 4,
    location: "North Malé Atoll",
    transferTime: "30 minutos de lancha",
    heroImage: heroImage,
    heroTitle: "Adaaran Select Hudhuranfushi",
    heroSubtitle: "Excelente custo-benefício com acesso a um dos melhores surf spots das Maldivas",
    heroHighlights: ["All Inclusive Premium", "Transfer de Lancha 30min", "Surf & Snorkeling"],
    seoTitle: "Adaaran Select Hudhuranfushi - Resort All Inclusive 4★ | Follow Me Viagens",
    seoDescription: "Resort 4 estrelas all inclusive no North Malé Atoll, a 30 minutos de Malé. Ideal para casais, famílias e surfistas com acesso ao Lohis. Melhor custo-benefício das Maldivas com snorkeling, kids club e esportes gratuitos.",
    about: "O Adaaran Select Hudhuranfushi é um resort 4 estrelas all inclusive localizado no North Malé Atoll, a apenas 30 minutos de lancha rápida do Aeroporto Internacional de Malé. Reconhecido como um dos melhores resorts de custo-benefício das Maldivas, oferece uma experiência completa com todas as refeições, bebidas (alcoólicas e não alcoólicas), esportes aquáticos e terrestres incluídos.\n\nO resort destaca-se pelo acesso exclusivo ao lendário surf spot Lohis, considerado uma das melhores ondas das Maldivas, com packages especiais e Ocean Villas dedicadas para surfistas. Para famílias, conta com Kids Club gratuito, playground, piscinas infantis e ampla variedade de atividades supervisionadas em beach villas espaçosas.\n\nCom instalações recém-renovadas, o Adaaran Select oferece a maior diversidade esportiva entre resorts 4 estrelas das Maldivas, incluindo snorkeling no house reef, centro de mergulho PADI 5★, Spa Mandara com tratamentos balineses, e diversas atividades de entretenimento diário. Ideal para casais, famílias e surfistas que buscam experiência autêntica nas Maldivas sem comprometer o orçamento.",
    sections: [
      {
        id: "inclusions",
        type: "text",
        title: "Inclusões do pacote (All Inclusive)",
        content: "- Café da manhã, almoço e jantar buffet no Banyan Restaurant\n- Seleção de bebidas alcoólicas/não alcoólicas nos bares selecionados (inclusive drinks, cervejas, refrigerantes e sucos)\n- Snacks, sorvetes, petiscos e chá da tarde\n- Minibar abastecido diariamente (água, cerveja, refrigerante; algumas tarifas)\n- Equipamento para snorkeling e esportes não motorizados (caiaque, windsurf, SUP)\n- Bicicletas para explorar a ilha\n- Atividades recreativas: tênis, squash, badminton, vôlei, futebol de areia, tênis de mesa\n- Academia e aulas fitness em grupo (yoga, alongamento)\n- Kids club & playground para crianças\n- Piscina central (adulto e infantil), serviço de praia/piscina\n- Wi-Fi gratuito nas áreas públicas\n- Show noturno, música ao vivo e eventos culturais semanais\n- Arrumação diária/turn down, amenities de boas-vindas\n- Traslado de lancha regular (pago à parte em maioria dos planos)\n- Serviço de concierge para excursões e reservas"
      },
      {
        id: "dining",
        type: "text",
        title: "Restaurantes & Bares",
        content: "- Banyan Restaurant (buffet internacional, todas as refeições)\n- Sunset Restaurant (sobre a água, frutos do mar e jantares especiais)\n- Lohis Wave (bar do surf, ambiente descontraído, drinks e snacks)\n- Hiyala Bar (principal bar central junto à piscina, drinks 24h)\n- Beach Bar (lanches, drinks à beira-mar)\n- Room service 24h (pago à parte)\n- Temas semanais: noites maldivas, seafood BBQ, noites asiáticas\n- Jantares privados na praia e piqueniques sob consulta/custo\n- Gastronomia: internacional, pratos maldivianos, frutos do mar frescos, asiático, snacks e pizzas, dietas especiais sob solicitação"
      },
      {
        id: "accommodation",
        type: "text",
        title: "Acomodação",
        content: "- Villas com ar-condicionado, minibar, smart TV, amenities premium, cofre, máquina de chá/café, ducha interna/externa e terraço\n- Ocean Villas: deck sobre a lagoa, acesso direto ao mar, sala de estar e serviço personalizado para adultos, opções sunrise/sunset\n- Menu de travesseiros, Wi-Fi, room service pago, amenidades kids e berço/cama extra sob reserva\n- Diferenciais: excelente privacidade nas villas, localização privilegiada para surfe, ótimo house reef para snorkeling e amplos jardins tropicais"
      },
      {
        id: "free-activities",
        type: "text",
        title: "Atividades gratuitas",
        content: "- Snorkeling (house reef + equipamento gratuito)\n- Caiaque, windsurf, SUP, pedalinho\n- Tênis, squash, badminton, futebol de areia, vôlei de praia\n- Bicicletas para explorar toda a ilha\n- Piscina adulto e infantil\n- Kids Club e playground\n- Aulas de yoga, fitness center\n- Shows noturnos temáticos, música ao vivo, eventos culturais\n- Entretenimento e programação semanal, happy hour de drinks"
      },
      {
        id: "paid-activities",
        type: "text",
        title: "Atividades com custo extra",
        content: "- Mergulho PADI 5* (batismo, cursos, snorkel guiado, night dive)\n- Esportes motorizados: jet ski, seabob, kite/windsurf, wakeboard, parasailing\n- Spa Mandara: tratamentos balineses, massagem, beauty, wellness\n- Surf (acesso restrito/reserva para Lohis, aluguel pranchas, aulas pros)\n- Excursões: sandbank picnic, pesca, island hopping, cruzeiro sunset, dolphin tour\n- Jantares privativos, degustação de vinhos, masterclasses culinária\n- Babysitting, sessões de fotos\n- Surf: destino top para surfistas (Lohis), com packages exclusivos, acesso limitado (reserva obrigatória alta temporada)"
      },
      {
        id: "highlights",
        type: "text",
        title: "Diferenciais",
        content: "Surf spot Lohis: referência nacional para surf, Ocean Villas exclusivas para adultos, excelente snorkeling no house reef, maior diversidade esportiva entre resorts 4* das Maldivas, spa Mandara de alto padrão e jardins tropicais exuberantes."
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
        "80% restante até 30 dias antes da viagem para garantir sua reserva",
        "Parcelamento em até 10x com opções flexíveis de pagamento disponíveis"
      ],
      cancellationPolicy: "Cancelamento até 30 dias antes da viagem com reembolso de 80% do valor pago",
      notes: "Valores sujeitos a alteração conforme disponibilidade e temporada. Entre em contato para cotação atualizada."
    },
    faqs: [
      {
        question: "O transfer do aeroporto está incluído?",
        answer: "Sim! O transfer de lancha compartilhada (30 minutos) está incluído no pacote. Saídas regulares do aeroporto de Malé para o resort."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, muito! Temos Kids Club gratuito, playground, piscina infantil e beach villas espaçosas. As Ocean Villas são exclusivas para adultos (ideal para surfistas)."
      },
      {
        question: "Como funciona o acesso ao surf spot Lohis?",
        answer: "O Lohis é um dos melhores surf spots das Maldivas. Guests do resort têm acesso exclusivo mediante reserva. Durante alta temporada (abril-outubro), recomendamos reservar com antecedência. Aluguel de pranchas e aulas disponíveis."
      },
      {
        question: "Quais bebidas alcoólicas estão incluídas?",
        answer: "O All Inclusive inclui cerveja, vinho, drinks, coquetéis da casa e spirits selecionados. Bebidas premium e vinhos especiais têm custo adicional."
      },
      {
        question: "É necessário visto para as Maldivas?",
        answer: "Brasileiros não precisam de visto prévio. O visto de turista (30 dias) é concedido gratuitamente na chegada ao aeroporto de Malé."
      },
      {
        question: "Qual a melhor época para visitar?",
        answer: "A alta temporada (dezembro a abril) tem clima mais seco e mar calmo, ideal para famílias. A baixa temporada (maio a novembro) oferece preços melhores e ondas maiores para surf."
      }
    ],
    images: [
      {
        src: adaaranOverwaterVillasAerial,
        alt: "Adaaran Select Hudhuranfushi - Vista aérea das ocean villas sobre águas cristalinas turquesa"
      },
      {
        src: adaaranBeachVillasAerial,
        alt: "Beach villas com acesso direto à praia de areia branca nas Maldivas"
      },
      {
        src: adaaranBuffetRestaurant,
        alt: "Buffet internacional do restaurante principal com variedade gastronômica"
      },
      {
        src: adaaranSunsetVillaInterior,
        alt: "Interior elegante e moderno das sunset villas recém-renovadas"
      },
      {
        src: adaaranDivingCoralReef,
        alt: "Mergulho e snorkeling no house reef com corais coloridos e vida marinha abundante"
      },
      {
        src: adaaranVillaBathroomOceanView,
        alt: "Banheiro luxuoso das villas com vista panorâmica para o oceano Índico"
      },
      {
        src: adaaranMainRestaurantInterior,
        alt: "Restaurante principal do Adaaran Select com ambiente sofisticado e aconchegante"
      },
      {
        src: adaaranSunsetWaterVillaRoom,
        alt: "Quarto espaçoso das water villas com vista para o pôr do sol"
      },
      {
        src: adaaranResortAerialPool,
        alt: "Vista aérea do resort mostrando piscina principal e área de lazer"
      },
      {
        src: adaaranIslandAerialView,
        alt: "Panorama aéreo completo da ilha Hudhuranfushi nas Maldivas"
      }
    ]
  },
  "anantara-dhigu": {
    slug: "anantara-dhigu",
    name: "Anantara Dhigu Maldives Resort",
    rating: 5,
    location: "Atol Sul de Malé",
    transferTime: "30-35 minutos de lancha rápida",
    heroImage: heroImage,
    heroTitle: "Anantara Dhigu Maldives Resort",
    heroSubtitle: "Resort 5 estrelas family-friendly com acesso ao resort irmão adults-only e ilha privativa",
    heroHighlights: ["110 Villas Espaçosas", "Acesso a 7+ Restaurantes", "Ilha Privativa Gulhifushi"],
    seoTitle: "Anantara Dhigu Maldives - Resort 5★ Family-Friendly | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas family-friendly no Atol Sul de Malé com 110 villas, acesso ao Anantara Veli adults-only, 7+ restaurantes, spa sobre a água, ilha privativa e excelente kids club.",
    about: "O Anantara Dhigu Maldives Resort é um resort 5 estrelas family-friendly localizado na ilha de Dhigufinolhu no Atol Sul de Malé, a apenas 30-35 minutos de lancha rápida do Aeroporto Internacional de Malé. O resort oferece 110 villas espaçosas, entre villas na praia e suítes sobre a água, todas com vista para o nascer ou pôr do sol. Possui acesso privilegiado ao resort irmão Anantara Veli (adults-only) através de uma ponte conectada, permitindo que os hóspedes desfrutem de mais de 7 restaurantes entre as duas propriedades. Destaca-se pelo spa sobre a água, escola de surf Tropicsurf, centro de esportes aquáticos Aquafanatics (PADI 5 estrelas), ilha privativa de piquenique Gulhifushi, e excelente kids club. Transferências disponíveis 24 horas por dia.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do pacote",
        type: "text",
        content: `- Café da manhã buffet internacional no Fushi Café (7h-11h)
- Recepção em lounge privativo no aeroporto com bebidas de cortesia
- Toalhas frias e água gelada durante o traslado de lancha
- Uso de equipamentos de snorkeling
- Caiaques e stand-up paddle
- Acesso a academia equipada com Technogym
- Piscina infinita
- Sessões de yoga em grupo diariamente
- Acesso à ilha privativa Gulhifushi com food truck e tiki bar
- Cinema sob as estrelas
- Entretenimento ao vivo (música, performances culturais)
- Wi-Fi gratuito

Benefícios para Lua de Mel (mínimo 4 noites):

- Garrafa de champagne na chegada
- Seleção de chocolates artesanais do chef
- Decoração romântica no quarto
- 50% de desconto no traslado para a noiva (ou traslado gratuito conforme período)
- Certificado de casamento necessário (máximo 12 meses após o evento)

Pacote Honeymoon Romance in Paradise (3+ noites):

- Acomodação de luxo com café da manhã e jantar diários
- Um cruzeiro ao pôr do sol para observação de golfinhos (casal)
- Um tratamento signature para casal no Anantara Spa
- Um Designer Dining privativo
- Experiência de coquetel no Yellow Fin Club
- Garrafa de champagne e arranjo de pétalas de rosa na chegada`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling na lagoa (equipamentos inclusos)
- Caiaques e SUP
- Dhoni Kids Club (para crianças, 9h-17h) com atividades artísticas, corrida de caranguejos, pintura de cocos, aulas de pizza
- Spice Spoons Cooking School (aulas de culinária maldívia e tailandesa)
- Tênis (quartas-feiras 19h-20h)
- Badminton e vôlei de praia
- Petanque, futebol de mesa, mesa de bilhar
- Sessões de yoga e fitness em grupo (3x por dia incluídas no direct booking)
- Acesso à ilha Gulhifushi com food truck (12h-16h) e tiki bar (10h-17h)

Atividades com Custo Extra:

- Mergulho com Aquafanatics: Discover Programme para iniciantes (lagoa até 12m), cursos PADI Open Water, safaris de mergulho meio dia/dia completo
- Esportes aquáticos motorizados: Jet ski, flyboarding, parasailing, wakeboard, kneeboard, water ski, fun rides (doughnuts)
- Surf school: Aulas de surf com Tropicsurf
- Vela: Catamarã, windsurf, kitesurf
- Anantara Spa (sobre a água): 6 salas de tratamento sobre o oceano, 2 salas abertas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, salão de beleza. Horário: 10h-19h. Cancela com 24h de antecedência
- Experiências especiais: Designer Dining (jantares privativos na praia ou dhoni tradicional), wine dinner, cruzeiros ao pôr do sol, pesca, passeios de iate, tours de snorkeling guiados, coral adoption programme (USD $185 patrocínio / USD $247 patrocínio + plantio)
- Teen Activities: Tênis amigável, aulas de surf, aventuras de barco com fundo de vidro

Restaurantes:

No Anantara Dhigu:

- Fushi Café - Buffet internacional, café da manhã (7h-11h) e jantares temáticos (18h30-22h): noite maldívia com performance Boduberu (domingo), festa do Oriente Médio (terça, USD $120++ incluído em HB/FB), buffet internacional
- Sea.Fire.Salt - Grelhados premium e frutos do mar frescos à beira-mar, almoço e jantar (12h30-15h30 / 18h30-22h). Suplemento USD $60 por pessoa em HB/FB
- Aqua Bar - Bar à beira da piscina, almoço leve (12h-16h), drinks ao pôr do sol, ambiente descontraído, vista para tubarões de recife circulando

No Anantara Veli (acesso via pontão - 2 minutos):

- Baan Huraa - Tailandês autêntico sobre a lagoa, casa de teca tradicional, pratos para compartilhar, jantar (18h30-22h). Suplemento USD $60 em HB/FB
- 73 Degrees - Buffet internacional oceanfront, café da manhã e jantares temáticos
- Origami - Japonês moderno com teppanyaki, sushi e sashimi (não incluído em HB/FB, pago separadamente)
- Dhoni Bar - Bar à beira da piscina (somente adultos 18+), tapas e coquetéis (10h-meia-noite), almoço leve (12h-16h), jantar (18h30-22h)
- Cumin - Cozinha do Sul da Ásia e Índia, especiarias do Oceano Índico, café da manhã (7h-11h) e jantar (18h30-22h)

Experiências Gastronômicas Especiais:

- Designer Dining by Anantara - Jantares privativos na praia, em dhoni tradicional ou localização personalizada
- Gulhifushi Picnic Island - Ilha privativa com food truck (12h-16h) e tiki bar (10h-17h), acessível por pontão ou caiaque`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Sunrise Beach Pool Villa

- Todas as comodidades da Sunrise Beach Villa
- Piscina privativa de 9m
- Ideal para famílias

Sunset Beach Pool Villa

- Todas as comodidades da Sunset Beach Villa
- Piscina privativa de 9m
- Vista espetacular para o pôr do sol

Two Bedroom Family Beach Pool Villa (220m²)

- Capacidade: 4 adultos ou 2 adultos + 3 crianças
- 2 quartos (1 king + configurações flexíveis)
- Piscina privativa de 9m
- Banheiro infantil em miniatura
- Sala de estar espaçosa
- Mesa de jantar
- Ideal para famílias

Sunrise Over Water Suite (85m²)

- Capacidade: 2 adultos + 1 criança
- Suspensa sobre águas cristalinas
- Janelas do chão ao teto
- Deck privativo para observar o nascer do sol
- Painéis de vidro no piso do banheiro para visualizar vida marinha

Comodidades em todas as villas: TV via satélite, minibar, frigobar, ventilador de teto, ar-condicionado, banheiro privativo, banheira/chuveiro combinado, varanda/terraço, filmes no quarto, roupões infantis e chinelos (para famílias), berços e camas extras gratuitas, serviço de lavanderia 50% off para crianças até 12 anos.

Política de Crianças:

- Menores de 12 anos: comem gratuitamente seguindo o meal plan dos pais (menu infantil)
- Máximo 2 crianças por família
- Crianças até 12 anos: 50% desconto nos traslados
- Menores de 2 anos: traslados gratuitos, refeições gratuitas
- Babysitting disponível a partir de 3 meses (custo adicional)`
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
          priceSubtext: "7 noites em Sunrise Beach Pool Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Sunrise Beach Pool Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Política de Crianças: Menores de 12 anos comem gratuitamente seguindo o meal plan dos pais (menu infantil), máximo 2 crianças por família. Crianças até 12 anos: 50% desconto nos traslados. Menores de 2 anos: traslados e refeições gratuitas. Babysitting disponível a partir de 3 meses (custo adicional)."
    },
    faqs: [
      {
        question: "O que está incluído no pacote?",
        answer: "Café da manhã buffet internacional, recepção em lounge privativo no aeroporto, traslado de lancha com toalhas frias e água, equipamentos de snorkeling, caiaques, SUP, yoga diária, academia, piscina infinita, acesso à ilha Gulhifushi, cinema sob as estrelas, entretenimento ao vivo e Wi-Fi gratuito."
      },
      {
        question: "Posso acessar o resort Anantara Veli?",
        answer: "Sim! O Anantara Dhigu possui acesso privilegiado ao resort irmão Anantara Veli (adults-only) através de uma ponte conectada. Isso permite que os hóspedes desfrutem de 7+ restaurantes e facilidades entre as duas propriedades."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, é um resort family-friendly com excelente Dhoni Kids Club (9h-17h), atividades variadas para crianças, banheiros infantis em miniatura nas family villas, e política generosa: menores de 12 anos comem gratuitamente no meal plan dos pais (máximo 2 crianças). Menores de 2 anos têm traslados e refeições gratuitas."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Para estadias de 4+ noites: champagne na chegada, chocolates artesanais, decoração romântica e 50% desconto no traslado da noiva. O pacote Romance in Paradise (3+ noites) inclui: café e jantar diários, cruzeiro ao pôr do sol, tratamento de spa para casal, Designer Dining privativo e experiência de coquetel."
      },
      {
        question: "O resort possui spa?",
        answer: "Sim, o Anantara Spa está localizado sobre a água e oferece 6 salas de tratamento sobre o oceano, 2 salas abertas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, e salão de beleza. Funciona das 10h às 19h."
      },
      {
        question: "Como funciona a ilha privativa Gulhifushi?",
        answer: "É uma ilha exclusiva para piqueniques acessível por pontão ou caiaque. Possui food truck funcionando das 12h às 16h e tiki bar das 10h às 17h. Ideal para experiências únicas em ambiente paradisíaco."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Gratuitas: snorkeling, caiaque e SUP. Com custo: mergulho PADI (Aquafanatics centro 5 estrelas), aulas de surf (Tropicsurf), esportes motorizados (jet ski, flyboarding, parasailing, wakeboard), vela (catamarã, windsurf, kitesurf), cruzeiros e pesca."
      },
      {
        question: "Quantos restaurantes o resort possui?",
        answer: "Os hóspedes têm acesso a 7+ restaurantes entre Anantara Dhigu (Fushi Café, Sea.Fire.Salt, Aqua Bar) e Anantara Veli (Baan Huraa tailandês, 73 Degrees, Origami japonês, Dhoni Bar, Cumin). Também há Designer Dining para jantares privativos e a ilha Gulhifushi."
      }
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Anantara Dhigu - Vista aérea do resort com villas na praia e sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Piscina infinita com vista para o oceano turquesa"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Interior luxuoso das villas com design elegante"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Anantara Spa sobre a água com salas de tratamento premium"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Restaurante à beira-mar com experiências gastronômicas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling na lagoa cristalina com vida marinha abundante"
      },
      {
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2626",
        alt: "Ilha privativa Gulhifushi para piqueniques exclusivos"
      }
    ]
  },
  "anantara-kihavah": {
    slug: "anantara-kihavah",
    name: "Anantara Kihavah Maldives Villas",
    rating: 5.5,
    location: "Kihavah Huravalhi, Atol de Baa, Reserva da Biosfera UNESCO",
    transferTime: "35 minutos de hidroavião ou 20 minutos de voo doméstico + 30 minutos de lancha",
    heroImage: "/src/assets/maldives-hero.jpg",
    heroTitle: "Anantara Kihavah Maldives Villas",
    heroSubtitle: "Resort 5,5 Estrelas Ultra-Luxuoso no Atol de Baa",
    heroHighlights: [
      "80 villas com piscina privativa (a partir de 258m²)",
      "Restaurante subaquático SEA com adega de 450 rótulos",
      "Único observatório sobre a água das Maldivas (SKY)",
      "House reef 'Golden Wall' premiado",
      "Serviço de mordomo 24h para cada villa"
    ],
    seoTitle: "Anantara Kihavah Maldives Villas - Resort 5,5 Estrelas Ultra-Luxuoso | Pacotes 2025",
    seoDescription: "Anantara Kihavah: resort ultra-luxuoso 5,5 estrelas no Atol de Baa com restaurante subaquático, observatório SKY, house reef premiado e serviço de mordomo 24h.",
    about: "O Anantara Kihavah Maldives Villas é um resort 5,5 estrelas ultra-luxuoso localizado na ilha privativa de Kihavah Huravalhi, no Atol de Baa, Reserva da Biosfera UNESCO. Situado a 35 minutos de hidroavião ou 20 minutos de voo doméstico + 30 minutos de lancha de Malé, o resort oferece 80 villas e residences com piscina privativa (a partir de 258m²), sendo 42 sobre a água. Destaque mundial pelo restaurante subaquático SEA com adega submersa de 450 rótulos, o único observatório sobre a água das Maldivas (SKY), e o excepcional house reef 'Golden Wall' considerado um dos melhores pontos de mergulho do país. O resort possui uma das piscinas infinitas mais longas das Maldivas (49m), spa overwater premiado, trampoline park, rock climbing wall, e cinema sob as estrelas. Serviço de mordomo 24h (Villa Host) para cada acomodação.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do pacote",
        type: "text",
        content: `- Acesso ao lounge VIP de hidroavião em Malé (com bebidas e Wi-Fi gratuito)
- Serviço de Villa Host (mordomo) 24 horas
- Equipamentos de snorkeling gratuitos
- Bicicletas personalizadas para adultos e crianças
- Acesso a 3 academias equipadas com Technogym
- Piscina infinita de 49m (uma das mais longas das Maldivas)
- Sessões de yoga, meditação, stretch and tone em grupo
- Wi-Fi gratuito em todas as áreas
- Cinema sob as estrelas
- Sunshine Butlers na piscina (suco fresco, toalhas frias, limpeza de óculos de sol, massagem nas costas de 5min)
- Spice Spoons Cooking Classes (aulas de culinária tailandesa e maldívia gratuitas)
- Entretenimento ao vivo e performances culturais

Benefícios para Lua de Mel (dentro de 12 meses do casamento, certidão necessária):

- Welcome amenity especial
- Garrafa de champagne na chegada
- Ritual de banho com velas e pétalas de rosas uma noite durante a estadia
- Decoração de cama com pétalas
- Pacote Honeymoon & Romance (4+ noites): Inclui café da manhã e jantar diários + Dining by Design privativo na praia + champagne breakfast na villa + sessão de stargazing compartilhada + Slumber Guru Ritual romântico`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling no house reef "Golden Wall" (2km de extensão, tartarugas hawksbill, arraias, tubarões de recife, moreia)
- Caiaques, stand-up paddle, catamarã
- Thiththi Boli Kids' Club (4-12 anos, 10h-18h): treasure hunts, Marine Biologist Programme, cooking classes, artes maldívias, cinema, pamper experience com spa
- Trampoline park
- Cinema sob as estrelas com filmes clássicos e blockbusters
- Spice Spoons Cooking Classes (culinária tailandesa e maldívia)
- Sessões de yoga, meditação e fitness em grupo
- Quadras de tênis, badminton, vôlei de praia
- Recreation area (bilhar, tênis de mesa, xadrez gigante, Jenga)
- Stargazing no SKY Observatory (observatório sobre a água com telescópio potente)

Atividades com Custo Extra:

- Mergulho: PADI 5 estrelas certificado, Discover Scuba Diving, cursos completos, safaris de mergulho
- Esportes motorizados: Jetpack, Seabob, jet ski, parasailing (Chute Me), wakeboard
- Pesca: Big game fishing, pesca tradicional dhoni, pesca noturna
- Excursões: Dolphin Discovery cruise, visita a Hanifaru Bay (maio-novembro, mantas e tubarões-baleia), island hopping, local island tours, Hawksbill Turtle Quest snorkel (2h)
- Muay Thai Boxing: Primeiro e único resort nas Maldivas a oferecer (com ring profissional e instrutor), sessões familiares disponíveis
- Anantara Spa overwater: 6 suítes sobre o oceano, 2 salas abertas para massagens tailandesas, sauna, sala de vapor, piscinas quentes e frias, Cocoon Medi Spa, salão de beleza e cabeleireiro, deck de relaxamento overwater com cold plunge pool
- Coral Adoption Programme (HARP): Patrocínio USD $185 | Patrocínio + plantio pessoal de coral: preço sob consulta
- Experiências especiais: Dining by Design (jantares privativos), private island picnics, cruzeiros de iate de luxo, degustação de vinhos envelhecidos subaquaticamente (USD $2.455++ para 2 pessoas)

Restaurantes:

SEA - Underwater Restaurant (Signature)

- Restaurante subaquático 6m abaixo da superfície
- Paredes curvas de vidro com vista 360° para o recife (tartarugas, mantas, tubarões, peixes-palhaço)
- Adega subaquática com mais de 450 rótulos de 24 países (votada melhor adega subaquática do mundo)
- Degustação de vinhos envelhecidos no oceano (Dom Pérignon 2008, Cervaro della Sala Chardonnay 2018)
- Menu de frutos do mar premium
- Crédito de USD $50 por pessoa em HB/FB para jantar
- Almoço de 4 pratos à la carte (incluído em alguns pacotes promocionais)

FIRE - Japanese Teppanyaki

- Cozinha japonesa com teppanyaki ao vivo
- Grelhados premium
- Crédito de USD $50 por pessoa em HB/FB

SALT - Fine Asiatic Restaurant

- 19 variedades de sais raros do planeta
- Salt Sommelier para auxiliar na escolha dos temperos
- Cozinha asiática sofisticada

SKY - Rooftop Bar & Observatory

- Bar no rooftop com vista panorâmica do Atol de Baa
- Observatório astronômico (único nas Maldivas sobre a água)
- Telescópio potente para stargazing sessions com Sky Guru
- Coquetéis exclusivos ao pôr do sol

Plates - International Buffet

- Café da manhã buffet (incluído em todos os meal plans)
- Jantares temáticos noturnos selecionados: árabe, europeu, frutos do mar, BBQ, internacional
- Estações ao vivo

SPICE - Asian Fusion

- Menu à la carte com seleção de 3 pratos
- Incluído em HB e FB

Manzaru - Beachfront Casual Dining

- Almoço casual à beira-mar (12h-17h)
- Menu à la carte de 2 pratos para FB
- Opções leves e descontraídas

Experiências Gastronômicas Especiais:

- Dining by Design - Jantares privativos na praia, underwater ou localizações exclusivas
- Wine Pairing Dinners - Jantares harmonizados
- Michelin Star Dinners - Eventos especiais com chefs estrelados
- Cinema Under the Stars - Jantar durante sessão de cinema ao ar livre`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a Água (Over Water Pool Villas):

Over Water Pool Villa (258m²)

- Suspensa sobre lagoa cristalina turquesa
- Piscina privativa e sundeck sobre a água
- Banheiro ao ar livre com banheira whirlpool com fundo de vidro (vista para vida marinha)
- Acesso direto ao recife "Golden Wall"
- Villa Host 24h
- Bicicletas privativas
- Cama king-size

Comodidades: Ar-condicionado, TV flat-screen via satélite, docking station iPod, máquina de café, minibar, adega climatizada, cofre para laptop, roupa de cama e toalhas premium, amenities Elemis, sistema de som Bose, serviço de streaming (Netflix), Blu-ray player, telefone, pillow e scent menus, produtos hipoalergênicos disponíveis.`
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
          priceSubtext: "7 noites em Over Water Pool Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Over Water Pool Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Transfer de hidroavião (35 min) ou voo doméstico + lancha não inclusos no pacote base. Crianças menores de 12 anos: consulte condições especiais. Villa Host 24h incluído em todas as acomodações."
    },
    faqs: [
      {
        question: "Como chegar ao Anantara Kihavah?",
        answer: "O resort está localizado a 35 minutos de hidroavião de Malé ou 20 minutos de voo doméstico + 30 minutos de lancha. O transfer é incluído em alguns pacotes ou pode ser contratado separadamente."
      },
      {
        question: "O que torna o restaurante SEA especial?",
        answer: "O SEA é um restaurante subaquático localizado 6 metros abaixo da superfície, com paredes curvas de vidro oferecendo vista 360° para o recife. Possui também uma adega subaquática com mais de 450 rótulos de 24 países, votada a melhor do mundo."
      },
      {
        question: "O que é o SKY Observatory?",
        answer: "É o único observatório sobre a água das Maldivas, localizado no rooftop. Conta com telescópio potente e sessões de stargazing com Sky Guru, além de servir coquetéis ao pôr do sol."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Casais em lua de mel (dentro de 12 meses do casamento) recebem welcome amenity, champagne, ritual de banho romântico e decoração especial. Pacotes de 4+ noites incluem café da manhã e jantar diários, Dining by Design na praia, champagne breakfast e experiências exclusivas."
      },
      {
        question: "O que é o house reef 'Golden Wall'?",
        answer: "É um recife de 2km de extensão considerado um dos melhores pontos de mergulho das Maldivas. Abriga tartarugas hawksbill, arraias, tubarões de recife, moreias e diversas espécies marinhas. Todas as villas sobre a água têm acesso direto."
      },
      {
        question: "O resort oferece atividades para crianças?",
        answer: "Sim, o Thiththi Boli Kids' Club atende crianças de 4-12 anos das 10h às 18h com treasure hunts, Marine Biologist Programme, cooking classes, artes maldívias, cinema e experiências de spa."
      },
      {
        question: "O que é o serviço de Villa Host?",
        answer: "Cada villa possui um mordomo dedicado disponível 24 horas para atender todas as necessidades dos hóspedes, desde arranjos de refeições até experiências personalizadas."
      },
      {
        question: "Quais experiências únicas o resort oferece?",
        answer: "Além do restaurante subaquático e observatório, o resort oferece degustação de vinhos envelhecidos no oceano, Muay Thai Boxing (único nas Maldivas), Coral Adoption Programme, e diversos jantares privativos em localizações exclusivas."
      }
    ],
    images: [
      {
        src: "/src/assets/maldives-hero.jpg",
        alt: "Anantara Kihavah Maldives Villas vista aérea"
      }
    ]
  },
  "cheval-blanc-randheli": {
    slug: "cheval-blanc-randheli",
    name: "Cheval Blanc Randheli",
    rating: 5,
    location: "Ilha Randheli, Atol de Noonu",
    transferTime: "40 minutos de hidroavião ou voo doméstico + lancha (25min)",
    heroImage: heroImage,
    heroTitle: "Cheval Blanc Randheli",
    heroSubtitle: "Resort ultra-luxuoso do grupo LVMH com arquitetura Jean-Michel Gathy e spa Guerlain exclusivo",
    heroHighlights: ["Mordomo 24h", "46 Villas LVMH", "Spa Guerlain"],
    seoTitle: "Cheval Blanc Randheli - Resort Ultra-Luxuoso LVMH | Follow Me Viagens",
    seoDescription: "Resort ultra-luxuoso do grupo LVMH com 46 villas exclusivas, spa Guerlain único nas Maldivas, gastronomia francesa premiada e serviço de mordomo 24h. Arquitetura Jean-Michel Gathy.",
    about: "O Cheval Blanc Randheli é um resort ultra-luxuoso do grupo LVMH, localizado na ilha de Randheli no Atol de Noonu, em uma região ainda intocada das Maldivas. O acesso é feito por hidroavião privativo (40 minutos de Malé) ou por voo doméstico até o Aeroporto de Maafaru + lancha rápida (25 minutos). O resort foi projetado pelo renomado arquiteto Jean-Michel Gathy, combinando artesanato europeu, design asiático e arte contemporânea. São apenas 46 villas à beira-mar, sobre a água ou nas ilhas privativas, todas com piscina de borda infinita, serviço de mordomo 24h e total privacidade. O Cheval Blanc Spa, único nas Maldivas com assinatura Guerlain, está em ilha reservada exclusiva para bem-estar. O resort é referência mundial em sofisticação e personalização de experiências, com destaque para gastronomia francesa, atendimento \"Alquimista\" (concierge dedicado) e coleção própria de arte contemporânea.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã à la carte e buffet premium
- Serviço de mordomo pessoal em todas as villas 24h
- Concierge "Alquimista" para experiências sob medida
- Recepção no lounge privado do hidroavião
- Welcome amenity personalizado, frutas frescas e bebidas não alcoólicas
- Wi-Fi de alta velocidade em toda a ilha
- Kit praia de boas-vindas (chapéu, chinelo, bolsa customizada)
- Equipamentos de snorkeling, caiaque, stand-up paddle, catamarã
- Bicicletas personalizadas
- Academia Technogym
- Sauna, hammam e jacuzzi (spa Guerlain)
- Arrumação duas vezes ao dia
- Programação cultural e entretenimento ao vivo
- Kids Club "Le Carrousel" gratuito (atividades, área de splash, jogos criativos)
- Teens Club "Le Paddock" (jogos virtuais, esportes, gaming)
- Experiência "Art de Recevoir" francesa em todos os detalhes

Benefícios Especiais Lua de Mel / Bodas (sob consulta):

- Decoração romântica, amenities especiais e ritual personalizado da Guerlain`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling em house reef riquíssimo
- Caiaque, stand-up paddle, catamarã, aulas de vela
- Academia com personal trainer
- Oficinas criativas, pintura, ioga e meditação guiadas
- Aulas de culinária francesa, degustação de vinhos
- Session de fitness, tênis (quadras iluminadas)
- Cinema sob as estrelas
- Bicicletas para passeios na ilha
- Kids Club "Le Carrousel" (atividades naturais e artes visuais)
- Teens Club "Le Paddock" (video games, sala de música, esportes)

Atividades com custo extra:

- Centro PADI 5* (batismo, open water, safáris, night dive)
- Esportes aquáticos motorizados: jet ski, seabob, esqui aquático
- Pesca de fundo e pesca esportiva
- Cruzeiros ao pôr do sol, observação de golfinhos
- Excursão de picnic champanhe em banco de areia privado, passeio de iate de luxo
- Aulas de surf
- Spa Guerlain: tratamentos exclusivos, wellness retreats, detox, beauty rituals, suíte para casal e massagem signature
- Tratamentos kids spa
- Babá e personalização extra no kids club
- Sessão privativa com "Alquimista" (personalização total de experiências)
- Sessão privada de fotografia

Principais experiências aquáticas:

- Mergulho com snorkel guiado em recifes isolados
- Saída privativa de barco para bancos de areia e ilhas desertas
- Mergulho noturno no house reef
- Stand-up paddle ao pôr do sol

Restaurantes:

- Le 1947: Francês gourmet, premiado, menu degustação harmonizado
- Diptyque: Teppanyaki, Sashimi, culinária asiática e show cooking
- Deelani: Italiano e mediterrâneo, decks suspensos sobre o mar
- White: Café da manhã internacional e menu wellness, pratos leves durante o dia
- La Table de Partage: Private dining, reuniões familiares e jantares exclusivos
- Carte blanche: Room service 24h, experiências gastronômicas sob medida

Bares:

- Le White Bar: Drinks autorais, lanches gourmet
- Cigar Lounge: Seleção premium de charutos, ambiente lounge
- Wine Museum: Para jantares harmonizados especiais sob reserva

Experiências Especiais:

- Private Picnic em banco de areia
- Jantar privativo a dois no "La Table de Partage" ou na villa
- Degustação de vinhos raros e champagne premium
- Sunset cruise em iate de luxo
- Celebrations personalizadas (casamentos, ocasiões especiais)`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Water Villa (240m²): deck, piscina privada, acesso direto ao mar
- Lagoon Villa: sobre águas transparentes, vista panorâmica
- Todas com banheira de imersão, amenities exclusivos Guerlain, living interno/externo, TV de última geração, bicicleta particular, mordomo 24h, wine fridge, amenities de praia, estação Nespresso
- Todas as acomodações têm piscina privativa e living integrado
- Personalização de amenities, cheiros, travesseiros e menu de amenities Guerlain

Política de Crianças:

- Até 12 anos: estadia e refeições grátis (máx. 2 crianças por villa)
- Kids Club Le Carrousel gratuito (4-12 anos)
- Teens Club disponível
- Menu infantil, amenities, cama/carrinho sob solicitação
- Babá sob demanda (cobrado à parte)
- Spa kids`
      }
    ],
    accommodations: {
      title: "Acomodação",
      description: "",
      types: []
    },
    pricing: {
      seasons: [
        {
          name: "Baixa Temporada",
          period: "Maio - Outubro",
          priceText: "Sob consulta",
          priceSubtext: "Melhores tarifas do ano"
        },
        {
          name: "Alta Temporada",
          period: "Novembro - Abril",
          priceText: "Sob consulta",
          priceSubtext: "Clima ideal e melhor visibilidade"
        }
      ],
      paymentTerms: [
        "20% de entrada no ato da reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento em até 10x sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Reembolso de 80% do valor pago para cancelamentos realizados com até 30 dias de antecedência da data de início da viagem"
    },
    faqs: [
      {
        question: "Como é o transfer para o Cheval Blanc Randheli?",
        answer: "O transfer pode ser feito por hidroavião privativo (40 minutos de Malé) ou por voo doméstico até o Aeroporto de Maafaru seguido de lancha rápida (25 minutos). Todo o trajeto é coordenado pelo resort com recepção no lounge privado."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã à la carte e buffet premium, serviço de mordomo 24h, concierge Alquimista, equipamentos de snorkeling e esportes aquáticos, Kids Club e Teens Club gratuitos, academia Technogym, Wi-Fi, entretenimento e muito mais."
      },
      {
        question: "O que é o serviço Alquimista?",
        answer: "O Alquimista é o concierge dedicado do Cheval Blanc Randheli, responsável por personalizar experiências únicas e sob medida para cada hóspede, garantindo uma estadia memorável e exclusiva."
      },
      {
        question: "O resort é adequado para crianças?",
        answer: "Sim, crianças até 12 anos podem se hospedar gratuitamente (máximo 2 por villa) com refeições incluídas. O resort oferece Kids Club Le Carrousel (4-12 anos), Teens Club Le Paddock e spa kids."
      },
      {
        question: "O que torna o Cheval Blanc Spa especial?",
        answer: "É o único spa nas Maldivas com assinatura Guerlain, localizado em uma ilha reservada exclusivamente para bem-estar. Oferece tratamentos exclusivos, wellness retreats, beauty rituals e suítes para casal."
      }
    ],
    images: [
      { src: heroImage, alt: "Cheval Blanc Randheli - Vista aérea do resort" },
      { src: "/src/assets/maldives-experiences/overwater-villas.jpg", alt: "Water villas com piscina privativa" },
      { src: "/src/assets/maldives-experiences/infinity-pool.jpg", alt: "Piscina infinita com vista para o oceano" },
      { src: "/src/assets/maldives-experiences/villa-sunset.jpg", alt: "Villa ao pôr do sol" },
      { src: "/src/assets/maldives-experiences/luxury-bathroom.jpg", alt: "Banheiro luxuoso com amenities Guerlain" },
      { src: "/src/assets/maldives-experiences/romantic-dinner.jpg", alt: "Jantar romântico na praia" },
      { src: "/src/assets/maldives-experiences/snorkeling.jpg", alt: "Snorkeling no recife" },
      { src: "/src/assets/maldives-experiences/spa-treatment.jpg", alt: "Tratamento no Cheval Blanc Spa by Guerlain" }
    ]
  },
  "como-maalifushi": {
    slug: "como-maalifushi",
    name: "COMO Maalifushi",
    rating: 5,
    location: "Atol Thaa, Sudoeste das Maldivas",
    transferTime: "Voo doméstico 60min + lancha rápida 30min",
    heroImage: heroImage,
    heroTitle: "COMO Maalifushi",
    heroSubtitle: "Resort 5 estrelas com foco em bem-estar, natureza e mergulho no atol Thaa",
    heroHighlights: ["66 Villas com Design Minimalista", "Spa COMO Shambhala sobre a Água", "Primeiro Resort do Atol Thaa"],
    seoTitle: "COMO Maalifushi - Resort 5★ de Bem-estar e Mergulho | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas no atol Thaa com 66 villas minimalistas, spa COMO Shambhala sobre a água, gastronomia saudável e experiências exclusivas de mergulho e surf.",
    about: "COMO Maalifushi é um resort 5 estrelas localizado no atol Thaa, sudoeste das Maldivas, sendo o primeiro resort da região. É referência em privacidade, bem-estar, natureza e mergulho, ideal para casais, famílias, surfistas e mergulhadores. Possui 66 villas e suítes (praia, jardim e sobre a água), todas com design minimalista, comodidades COMO Shambhala e piscina privativa em categorias superiores. Oferece ambiente sofisticado e sustentável, serviço atencioso e extenso leque de experiências exclusivas. Destaque para spa sobre a água, gastronomia saudável e excursões para ilhas privadas. Acesso via voo doméstico (60min de Malé) + lancha rápida (30min).",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet internacional e à la carte no Madi
- Welcome drink, frutas frescas e amenities Shambhala
- Wi-Fi de alta velocidade em toda a ilha
- Equipamentos de snorkeling, caiaque, stand-up paddle
- Bicicletas para explorar a ilha
- Yoga (aulas coletivas regulares)
- Uso da academia, sauna e jacuzzi no spa
- Piscina principal com serviço de praia
- Chá/água mineral, seleção de chás de ervas COMO em todas as villas
- Arrumação diária e serviço noturno
- Uso do Kids Club "Play by COMO" (4-12 anos)
- Cinema sob as estrelas semanal
- Programação cultural (Boduberu, noite de gerência)
- Sunset management happy hour semanal

Lua de Mel/Bodas:

- Decoração especial na villa, bolo comemorativo, amenities adicionais, jantar privativo e 60min de massagem para casal (mín. 4 noites, sob solicitação e disponibilidade).`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling (barreira de corais da ilha e recifes próximos)
- Caiaque, stand-up paddle, pedalinho
- Yoga, pilates e meditação (aulas regulares no pavilhão)
- Bicicletas para passeios
- Academia Technogym
- Sauna, jacuzzi e banho turco no COMO Shambhala Spa
- Kids Club "Play by COMO": atividades criativas, oficinas, aventuras na praia
- Noite de cinema ao ar livre

Atividades com Custo Extra:

- Mergulho PADI: batismo, cursos, safaris e mergulhos noturnos
- Esportes motorizados: jet ski, seabob, esqui aquático, fun tube
- Surf (aulas, locação de prancha e boat trips para waves locais)
- Pesca ao pôr do sol, pesca tradicional local
- Passeios de barco: cruzeiro pôr do sol com golfinhos, barbeque em pícnic privativo, sleepover na ilha deserta Lavadhoo
- Excursão à ilha local, visita a bancos de areia
- Spa COMO Shambhala: massagens asiáticas, tratamentos wellness, terapias ayurvédicas, ritual de beleza
- Yoga/mindfulness e wellness privé
- Jantar privativo "Castaway" em ilha deserta
- Cinema privativo sob as estrelas com snacks/gourmet BBQ
- Babá e serviço "Family Nanny" (fee extra)

Esporte aquático motorizado (preço médio):

- Jet ski: USD $65 (15min)
- Seabob: USD $70 (15min)
- Wakeboard/esqui aquático: USD $60 (15min)

Restaurantes & Bares:

Restaurantes principais:

- Madi: Internacional e maldívio, café da manhã buffet/à la carte, almoço mediterrâneo, jantares temáticos (segunda: Indian Ocean Night), Boduberu
- Tai: Japonês premium (sushi, sashimi, robata grill), jantar sobre água, live thrice weekly
- Thila: Casual ao ar livre, pizzas, grelhados, menu kids, poolside bar

Bares:

- Thila Bar: Bar à beira da piscina com cocktails, sucos, snacks durante o dia
- Serviço de praia: drinks, snacks, finger food na piscina/prainha
- Room Service 24h disponível

Experiências Gastronômicas Especiais:

- Jantar privativo "Castaway Picnic" em ilha deserta
- Sleepover em Lavadhoo: BBQ privativo, setup para dormir sob estrelas, movie by beach
- Japanese Omakase no Tai
- Menu wellness COMO Shambhala disponível em todos os restaurantes
- Degustação de vinhos privativa sob consulta`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Water Villa (215m²):

- Piscina infinita privativa, amplo solarium, sala aberta, vista mar espetacular

Comodidades em todas as villas:

- King bed com lençóis premium
- Banheira imersa, amenities COMO Shambhala
- Máquina de café Nespresso, minibar
- Smart TV, Bose sound, Wi-Fi premium
- Menu de travesseiros
- Bicicletas e snacks de boas-vindas
- Arrumação 2x/dia, serviço de mordomo na pool/COMO Villa

Política de Crianças:

- 0-12 anos: estadia gratuita acomodados com pais
- Até 2 crianças grátis na villa dos pais (menores de 12 anos)
- Menores de 12 anos: refeição gratuita nos mesmos planos dos pais
- Kids Club "Play by COMO" gratuito (4-12 anos), atividades temáticas e menus kids
- Serviço de babá/família disponível (custo adicional)`
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
          priceSubtext: "7 noites em Water Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Crianças de 0-12 anos: estadia e refeições gratuitas quando acomodadas com os pais (máximo 2 crianças por villa). Kids Club Play by COMO gratuito para crianças de 4-12 anos."
    },
    faqs: [
      {
        question: "Como chegar ao COMO Maalifushi?",
        answer: "O resort está localizado no atol Thaa, sudoeste das Maldivas. O acesso é feito via voo doméstico de Malé (60 minutos) seguido de lancha rápida (30 minutos), totalizando aproximadamente 1h30min de viagem."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet e à la carte, welcome drink, equipamentos de snorkeling e esportes aquáticos, bicicletas, yoga, academia, sauna e jacuzzi, Kids Club gratuito, cinema semanal, programação cultural e Wi-Fi."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças de 0-12 anos se hospedam gratuitamente (máximo 2 por villa) e comem gratuitamente nos mesmos planos dos pais. O Kids Club Play by COMO é gratuito para crianças de 4-12 anos, oferecendo atividades criativas e aventuras na praia."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Casais em lua de mel recebem decoração especial na villa, bolo comemorativo, amenities adicionais, jantar privativo e 60 minutos de massagem para casal (mínimo 4 noites, sob solicitação e disponibilidade)."
      },
      {
        question: "O que é o COMO Shambhala?",
        answer: "É a linha de bem-estar da COMO, presente em todas as villas através de amenities premium. O resort possui um spa COMO Shambhala sobre a água oferecendo massagens asiáticas, tratamentos wellness, terapias ayurvédicas e rituais de beleza."
      },
      {
        question: "O resort oferece experiências de mergulho?",
        answer: "Sim, o COMO Maalifushi é referência em mergulho no atol Thaa. Oferece batismo PADI, cursos completos, safaris de mergulho e mergulhos noturnos. O resort também é popular entre surfistas, oferecendo aulas e boat trips para waves locais."
      },
      {
        question: "Quais experiências especiais o resort oferece?",
        answer: "O resort oferece jantares privativos Castaway em ilha deserta, sleepover na ilha Lavadhoo com BBQ e cinema na praia, Japanese Omakase no Tai, menu wellness COMO Shambhala, e passeios de barco para observação de golfinhos."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "COMO Maalifushi - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water villas com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Spa COMO Shambhala sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Interior minimalista das villas"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Restaurante Tai japonês sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiência gastronômica no resort"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling no recife"
      }
    ]
  },
  "conrad-maldives": {
    slug: "conrad-maldives",
    name: "Conrad Maldives Rangali Island",
    rating: 6,
    location: "Atol de Ari Sul",
    transferTime: "30 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Conrad Maldives Rangali Island",
    heroSubtitle: "Resort 6 estrelas icônico com duas ilhas, The Muraka e restaurante subaquático Ithaa",
    heroHighlights: ["The Muraka - Primeira Villa Subaquática", "Restaurante Ithaa Subaquático", "2 Ilhas Conectadas"],
    seoTitle: "Conrad Maldives Rangali Island - Resort 6★ com Villa Subaquática | Follow Me Viagens",
    seoDescription: "Resort 6 estrelas icônico no Atol de Ari Sul com The Muraka (primeira villa subaquática do mundo), restaurante Ithaa subaquático, 2 ilhas conectadas e experiências exclusivas.",
    about: "Conrad Maldives Rangali Island é um resort 6 estrelas icônico no Atol de Ari Sul, instalado em duas ilhas paradisíacas conectadas por uma ponte de 500 metros, conhecido por suas praias intocadas de areia branca e vida marinha vibrante (arraias, tubarões, recifes). Destaca-se pelo inovador The Muraka (primeira villa subaquática do mundo), restaurante Ithaa (subaquático), extensa oferta gastronômica e experiências sob medida. Resort de referência tanto para casais como para famílias. Acomodações de altíssimo padrão, serviço de mordomo, spa premiado e Kids/Teens Club completam o cenário.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet completo em vários restaurantes
- Wi-Fi gratuito em toda a ilha e na villa
- Serviço de mordomo (The Muraka e Residences)
- Equipamentos de snorkeling, caiaque e pedalinho
- Bicicletas para adultos e crianças (sob pedido)
- Cinema sob as estrelas e eventos semanais
- Acesso ao fitness center 24h, sauna, jacuzzi e spa lounge
- Kids Club "Majaa Explorer's Hub" (4-12 anos)
- Playground, atividades teens
- Entretenimento noturno (shows culturais, música ao vivo)
- Arrumação diária e serviço de abertura de cama
- Academia moderna com aulas em grupo, pilates, yoga e personal trainer
- Chá da tarde, drinks de boas-vindas, frutas frescas
- Concierge para organização de experiências

Benefícios para Lua de Mel (mín. 4 noites, sob consulta):

- Amenidades românticas, decoração especial, upgrade mediante disponibilidade, jantar privativo ou piquenique

The Muraka Exclusive:

- Transfer privativo, mordomo e chef dedicados, buggy exclusivo, menu breakfast personalizável, experiências diárias inclusas (massagem, jantar privativo, fotoshoot, wine tasting, experiências de conservação de corais, movie night, entre outras - uma por dia)
- Amenidades de SPA Guerlain, celebração de boas-vindas, amenities premium`
      },
      {
        id: "activities",
        title: "Atividades e gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling, caiaque, stand-up paddle, pedalinho
- Quadras de tênis iluminadas, vôlei de praia, futebol de areia
- Yoga, pilates, fitness center 24h, fitness/aulas coletivas
- Kids Club Majaa para 4-12 anos (atividades criativas, caça ao tesouro, oficinas, games)
- Entretenimento noturno, shows culturais, cinema ao ar livre
- Bicicletas para explorar as ilhas (mediante solicitação)
- Piscinas: 3 (adultos, família, infantil)
- Biblioteca e sala de jogos

Atividades com custo extra:

- Mergulho PADI (iniciação, cursos completos, nitrox, night dive, safaris com manta e tubarão-baleia)
- Esportes motorizados: jet ski, seabob, esqui aquático, parasail, banana boat, flyboard
- Pesca esportiva, sunset cruise, observação de golfinhos e tubarões-baleia
- Excursões de catamarã, piqueniques em bancos de areia ou ilhas desertas
- Spa COMO Shambhala Retreat: massagens, terapias, hidroterapia, ritual de spa, hidroterapia, tratamentos signature
- Gastronomia privativa: sunset dinner, sandbank BBQ, wine and cheese dinner, cooking classes

Destaques exclusivos:

- Coral Conservation Programme: plantio de corais, experiência educativa
- Sessões de fotos profissionais
- Jantares privados sob as estrelas ou no sandbank
- Cinema by the sea privativo

Principais experiências aquáticas:

- Snorkeling tour guiado (house reef e recifes externos)
- Safe zone manta/snorkel safari
- Passeio em semi-submarino transparente
- Iate privado "Falcon 80" para experiências de luxo

Restaurantes & Bares:

Restaurantes principais:

- Ithaa Undersea Restaurant: Restaurante subaquático (primeiro do mundo, 5 metros abaixo d'água, menu multi course)
- Sunset Grill: Sobre a água, grelhados premium e frutos do mar
- Mandhoo: Menu wellness, pratos sazonais equilibrados
- Vilu Restaurant & Bar: Mediterrâneo, café da manhã e jantar à la carte
- Koko Grill: Teppanyaki japonês ao ar livre na praia
- Ufaa by Jereme Leung: Chinês contemporâneo de autor
- Atoll Market: Buffet internacional (estações temáticas)
- The Cheese & Wine Bar: Seleção de queijos raros e vinhos premium
- Rangali Bar: Drinks, tapas, lanche leve na piscina
- Wine Cellar: Primeira adega subterrânea das Maldivas, jantares harmonizados
- Room Service 24h

Bares:

- Rangali Bar (cocktails, música ao vivo), 2 Pool Bars, sunset decks

Experiências Gastronômicas Especiais:

- Jantar privado no sandbank
- Degustação de vinhos na Wine Cellar
- Jantares privativos na praia/villa
- Eventos especiais semanais (Maldivian Night, degustação de queijos, shows chef's table)`
      },
      {
        id: "acomodacao",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Water Villa (86-152m²): deck amplo, vista mar, acesso direto à lagoa, banheira com vista oceano, algumas categorias com piscina
- Superior Water Villa / Retreat Water Villa: área extendida, sunset/sunrise views, piscina privativa
- Premier Water Villa: luxo máximo, living integrado

The Muraka (villa subaquática):

- Dormitório principal a 5m de profundidade, janelas do chão ao teto, elevador, sala de estar sobre a água, deck, piscina, chef e mordomo privativos, acesso privativo (jet boat ou hidroavião), experiências signature

Política de Crianças:

- Até 12 anos: estadia, refeições e traslados grátis (máximo 2 crianças por villa em épocas promocionais)
- Kids Club Majaa para 4-12 anos, teens welcome, amenities kids-friendly sob pedido
- Serviço de babá disponível (custo extra)`
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
          priceSubtext: "7 noites em Water Villa com café da manhã"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com café da manhã"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "The Muraka (villa subaquática) possui condições especiais de reserva e cancelamento. Crianças até 12 anos: estadia e refeições gratuitas em épocas promocionais (máximo 2 crianças por villa)."
    },
    faqs: [
      {
        question: "O que é The Muraka?",
        answer: "The Muraka é a primeira villa subaquática do mundo, com dormitório principal a 5 metros de profundidade com janelas do chão ao teto. Inclui elevador, sala de estar sobre a água, deck, piscina, chef e mordomo privativos, além de experiências signature diárias inclusas."
      },
      {
        question: "O que é o restaurante Ithaa?",
        answer: "O Ithaa Undersea Restaurant é o primeiro restaurante subaquático do mundo, localizado 5 metros abaixo d'água. Oferece menu multi course com vista panorâmica para o recife e vida marinha através de paredes de vidro curvas."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet, Wi-Fi, equipamentos de snorkeling e esportes aquáticos, bicicletas, cinema sob as estrelas, fitness center 24h, Kids Club Majaa (4-12 anos), entretenimento noturno, chá da tarde e concierge."
      },
      {
        question: "Como são as duas ilhas do resort?",
        answer: "O Conrad Maldives está instalado em duas ilhas paradisíacas no Atol de Ari Sul, conectadas por uma ponte de 500 metros. As ilhas oferecem praias intocadas de areia branca, vida marinha vibrante e experiências exclusivas."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças até 12 anos podem se hospedar gratuitamente (máximo 2 por villa em épocas promocionais) com estadia, refeições e traslados inclusos. O resort oferece Kids Club Majaa (4-12 anos) e atividades teens."
      },
      {
        question: "Quais são os benefícios para lua de mel?",
        answer: "Casais em lua de mel (mínimo 4 noites) recebem amenidades românticas, decoração especial, upgrade mediante disponibilidade e jantar privativo ou piquenique."
      },
      {
        question: "O resort oferece experiências de mergulho?",
        answer: "Sim, o resort possui centro PADI completo oferecendo iniciação, cursos, nitrox, night dive e safaris com mantas e tubarões-baleia. Também oferece snorkeling tours guiados, safe zone manta safari e passeio em semi-submarino."
      },
      {
        question: "Quantos restaurantes o resort possui?",
        answer: "O resort oferece extensa opção gastronômica incluindo o Ithaa Undersea Restaurant (subaquático), Sunset Grill sobre a água, Vilu mediterrâneo, Koko Grill teppanyaki, Ufaa chinês, Atoll Market buffet, The Cheese & Wine Bar, Wine Cellar subterrânea e mais."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Conrad Maldives Rangali Island - Vista aérea das duas ilhas"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "The Muraka - Primeira villa subaquática do mundo"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante Ithaa subaquático"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Water villas com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Spa e experiências de bem-estar"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas exclusivas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Vida marinha e snorkeling"
      }
    ]
  },
  "emerald-maldives": {
    slug: "emerald-maldives",
    name: "Emerald Maldives Resort & Spa",
    rating: 5,
    location: "Ilha Fasmendhoo, Atol Raa",
    transferTime: "Hidroavião 40min ou voo doméstico 30min + lancha 15min",
    heroImage: heroImage,
    heroTitle: "Emerald Maldives Resort & Spa",
    heroSubtitle: "Resort 5 estrelas membro Leading Hotels of the World com Deluxe All Inclusive",
    heroHighlights: ["Deluxe All Inclusive", "120 Villas", "1.5km de Praia Privada"],
    seoTitle: "Emerald Maldives Resort & Spa - 5★ All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas membro Leading Hotels of the World no Atol Raa com sistema Deluxe All Inclusive, 120 villas, 1.5km de praia privada e gastronomia diversificada.",
    about: "Emerald Maldives Resort & Spa é um resort de luxo 5 estrelas, membro do Leading Hotels of the World, situado na ilha privada de Fasmendhoo, no Atol Raa, cercado por 1,5 km de praia de areia branca, vegetação tropical e lagoas azul-turquesa. São 120 villas (praia e sobre a água, todas com acabamento refinado e atmosfera contemporânea), ideal para casais, famílias e grupos. O resort é referência pelo sistema Deluxe All Inclusive, excelência de serviço, gastronomia diversificada, kids club e wellness. Aberto desde 2019, recebe hóspedes via hidroavião (40 min de Malé) ou voo doméstico (30 min Ifuru + 15 min lancha).",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído (Deluxe All Inclusive):

- Café da manhã no restaurante Aqua
- Almoço nos restaurantes Aqua ou Beach Club Grill
- Jantar nos restaurantes Aqua, Beach Club Grill (menus completos) e jantar por reserva em Amazonico e Asian (menus selecionados incluídos)
- Seleção de bebidas alcoólicas e não alcoólicas (refeições e bares, conforme política do hotel)
- Petiscos e bebidas incluídos durante o dia no Sunset Pool Café
- Minibar com reposição diária de bebidas e cervejas
- Drink de boas-vindas
- Equipamento de snorkeling, uso de caiaque e esportes náuticos não motorizados
- Snorkeling guiado (20 min, 2x por semana)
- Wi-Fi cortesia
- Toalhas, guarda-sóis e amenities de praia
- Kids Club com atividades diárias
- Gym, beach volley, tênis, campo de futebol, wellness center
- Entretenimento temático ocasional`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling (guiado 2x por semana e por conta própria)
- Caiaque, stand-up paddle, pedalinho
- Quadra de tênis, futebol, vôlei de praia, jogos de mesa
- Academia completa
- Sessões de wellness e yoga (programação variável)
- Piscina infinita principal
- Kids Club "Dolphin Club" com supervisão, atividades lúdicas e educativas

Atividades com Custo Extra:

- Esportes motorizados: jet ski, seabob, wakeboard, parasailing
- Mergulho (PADI 5*), batismo, certificação, saídas guiadas
- Pesca (tradicional, esportiva, noturna)
- Cruzeiros pôr do sol, passeio romântico, observação de golfinhos
- Massagens e tratamentos no Emerald Spa (pavilhão balinês, salas duplas, hidromassagem, banho turco)
- Excursões privadas para ilhas locais, bancos de areia e piqueniques exclusivos
- Aula de culinária

Restaurantes Principais:

- Aqua: Internacional, buffet e à la carte, café da manhã principal e almoço/jantar
- Beach Club Grill: Mediterrâneo, grelhados, pizza, massas, aberto para almoço/jantar
- Amazonico: Gastronomia sul-americana (reserva para jantar)
- Asian Restaurant: Sushi, teppanyaki, pan-asiático (reserva e menu especial incluídos no pacote)

Bares:

- Sunset Pool Café: Petiscos e drinks o dia todo
- Sunrise Café e Beach Club Bar: Coquetéis, vinhos, bebidas premium

Experiências Gastronômicas Especiais:

- Jantares privativos na praia
- Degustação de vinhos harmonizados
- Room service 24h disponível (pagamento à parte)`
      },
      {
        id: "accommodations",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Water Villa (168 m²): sobre lagoa, acesso ao mar, deck, banheira com vista mar, piscina privativa em categorias superiores
- Superior/Deluxe Water Villa: maior privacidade, deck e piscina mais amplos
- Presidential Villa: duas suítes master separadas, amplo living, piscina, serviço de mordomo

Comodidades em Todas as Villas:

- Camas king-size
- TV satélite
- Ar-condicionado e ventilador de teto
- Minibar com reposição diária
- Seleção de chás/cafés
- Wi-Fi premium
- Amenities de luxo
- Menu de travesseiros
- Área externa privativa
- Room service 24h

Política de Crianças:

- Até 12 anos: estadia e refeições grátis acompanhados pelos pais (máx. 2 crianças por villa)
- Kids Club gratuito (3-12 anos)
- Amenities infantis, camas extras, cadeiras, menu infantil
- Serviço de babá sob consulta (custo extra)`
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
          priceSubtext: "7 noites em Water Villa com Deluxe All Inclusive"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Water Villa com Deluxe All Inclusive"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Crianças até 12 anos: estadia e refeições gratuitas (máximo 2 crianças por villa). Sistema Deluxe All Inclusive inclui refeições e bebidas selecionadas conforme política do hotel."
    },
    faqs: [
      {
        question: "O que é o sistema Deluxe All Inclusive?",
        answer: "O sistema Deluxe All Inclusive do Emerald Maldives inclui todas as refeições nos restaurantes (café da manhã, almoço e jantar), bebidas alcoólicas e não alcoólicas selecionadas, minibar com reposição diária, snorkeling guiado, esportes náuticos não motorizados, Kids Club e entretenimento."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote All Inclusive inclui café da manhã, almoço e jantar nos restaurantes, bebidas selecionadas, minibar diário, equipamento de snorkeling, esportes náuticos, Wi-Fi, Kids Club, academia, quadras esportivas e entretenimento."
      },
      {
        question: "Como é o Kids Club?",
        answer: "O Dolphin Club é gratuito para crianças de 3-12 anos e oferece supervisão profissional com atividades lúdicas e educativas diárias. Inclui amenities infantis, menu kids e programação variada."
      },
      {
        question: "Quais restaurantes estão incluídos no All Inclusive?",
        answer: "O All Inclusive inclui refeições completas no Aqua (internacional) e Beach Club Grill (mediterrâneo). Também inclui jantares nos restaurantes Amazonico (sul-americano) e Asian (pan-asiático) mediante reserva e menu selecionado."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças até 12 anos se hospedam gratuitamente com estadia e refeições inclusas (máximo 2 por villa). O resort oferece Kids Club gratuito (3-12 anos), menu infantil, amenities kids e serviço de babá sob consulta."
      },
      {
        question: "O resort oferece experiências de spa e wellness?",
        answer: "Sim, o Emerald Spa possui pavilhão balinês com salas duplas, hidromassagem e banho turco. Também oferece sessões de wellness e yoga (incluídas) e tratamentos de spa (custo extra)."
      },
      {
        question: "O resort oferece experiências de mergulho?",
        answer: "Sim, o resort possui centro PADI 5 estrelas oferecendo batismo, certificação e saídas guiadas. Snorkeling guiado (20 minutos, 2x por semana) está incluído no All Inclusive."
      },
      {
        question: "Quantas villas o resort possui?",
        answer: "O resort possui 120 villas distribuídas entre praia e sobre a água, todas com acabamento refinado e atmosfera contemporânea. As categorias superiores incluem piscina privativa."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Emerald Maldives Resort & Spa - Vista aérea da ilha privada"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water villas sobre a lagoa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante principal com vista mar"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Piscina infinita principal"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Emerald Spa e tratamentos wellness"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling e vida marinha"
      }
    ]
  },
  "emerald-faarufushi": {
    slug: "emerald-faarufushi",
    name: "Emerald Faarufushi Resort & Spa",
    rating: 5,
    location: "Ilha Faarufushi, Atol Raa",
    transferTime: "Hidroavião 50min",
    heroImage: heroImage,
    heroTitle: "Emerald Faarufushi Resort & Spa",
    heroSubtitle: "Resort 5 estrelas membro Leading Hotels com barefoot luxury e Deluxe All Inclusive",
    heroHighlights: ["Deluxe All Inclusive", "80 Villas", "1.2km de Praia"],
    seoTitle: "Emerald Faarufushi Resort & Spa - 5★ All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas membro Leading Hotels of the World no Atol Raa com sistema Deluxe All Inclusive, 80 villas, 1.2km de praia e lagoa de 100 hectares com house reef.",
    about: "Emerald Faarufushi Resort & Spa é um resort 5 estrelas, membro do The Leading Hotels of the World, localizado na ilha privada de Faarufushi, Atol Raa, norte das Maldivas. O resort abriu em 2019 e está a aproximadamente 50 minutos de hidroavião de Malé. São 80 villas (38 na praia, 42 sobre a água), arquitetura minimalista e moderna, serviço requintado, atmosfera de barefoot luxury e integração total com a natureza – praia de 1,2 km, ilha de 7 hectares, lagoa de 100 hectares com excelente house reef.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído (Deluxe All Inclusive):

- Café da manhã no Aqua Restaurant
- Almoço no Aqua Restaurant e Beach Club Grill
- Jantar nos restaurantes Aqua Restaurant, Carnivorous Restaurant, Le Asiatique Restaurant & Teppanyaki Grill e The Mediterraneo Restaurant
- Snacks, petiscos e bebidas no Sunset Pool Café e bares
- Bebidas alcoólicas e não alcoólicas selecionadas (vinhos, cervejas, drinks, sucos, refrigerantes, cafés, chás)
- Minibar com reposição diária (cerveja, refrigerante, água)
- Welcome drink
- Equipamentos de snorkeling, caiaque, pedalinho, SUP
- Snorkeling guiado em grupo (30min, 2x/semana, sujeito a condições de mar)
- Academia Technogym
- Quadras de tênis e padel (durante o dia)
- Dolphin Kids Club (3-12 anos)
- Wi-Fi em toda a ilha
- Guarda-sóis, toalhas e amenities na praia/piscina
- Atividades esportivas: vôlei de praia, futebol de areia
- Bicicletas para uso dos hóspedes
- Arrumação diária, serviço noturno
- Entretenimento noturno e eventos temáticos`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling, caiaque, SUP, pedalinho
- Snorkeling guiado em grupo (30min, 2x por semana)
- Academia, padel, tênis, vôlei de praia
- Kids Club para 3-12 anos (atividades criativas, oficinas, jogos)
- Beach football, board games
- Entretenimento à noite (shows culturais, música ao vivo)

Atividades com Custo Extra:

- Esportes motorizados: jet ski, seabob, wakeboard, parasail
- Mergulho PADI (batismo, cursos, saídas)
- Pesca esportiva, pesca ao pôr do sol
- Cruzeiros de observação de golfinhos, sunset cruise
- Spa: Emerald Spa (massagens balinesas, tratamentos, pavilhão balinês, banho turco)
- Excursões privadas para ilhas, bancos de areia, piqueniques exclusivos
- Aula de culinária gourmet

Restaurantes Principais:

- Aqua Restaurant: Internacional (buffet, all meals)
- Beach Club Grill: Mediterrâneo, almoço e jantar (grelhados, pizzas, saladas)
- Carnivorous Restaurant: Churrascaria internacional (jantar)
- Le Asiatique Restaurant & Teppanyaki Grill: Cozinha asiática, japonesa, teppanyaki (jantar)
- The Mediterraneo Restaurant: Mediterrâneo sobre a água (jantar)

Bares:

- Sunset Pool Café: Cocktails, petiscos, música ao pôr do sol
- Bares de apoio à praia, piscina e restaurante

Experiências Gastronômicas Especiais:

- Jantar privativo na praia
- Degustação harmonizada de vinhos
- Room service (fora all inclusive, taxa extra)`
      },
      {
        id: "accommodations",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Ocean Villa com Piscina (172m²): deck sobre a lagoa, piscina privativa, acesso ao mar
- Ocean Suite com Piscina: categoria superior, espaços generosos, vista privilegiada do pôr do sol

Comodidades em Todas as Villas:

- Cama king-size
- TV
- Minibar com reposição diária
- Amenities premium
- Máquina Nespresso
- Menu de travesseiros
- Wi-Fi
- Arrumação 2x/dia

Política de Crianças:

- Até 12 anos: estadia e refeições grátis com pais (máx. 2 por villa)
- Kids Club gratuito (3-12 anos)
- Babá sob consulta (extra)
- Amenities infants, menu kids, cama extra grátis`
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
          priceSubtext: "7 noites em Ocean Villa com Deluxe All Inclusive"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites em Ocean Villa com Deluxe All Inclusive"
        }
      ],
      paymentTerms: [
        "Entrada de 20% via transferência bancária ao confirmar a reserva",
        "80% restante até 30 dias antes da viagem",
        "Parcelamento disponível em até 10 parcelas sem juros no cartão de crédito"
      ],
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Crianças até 12 anos: estadia e refeições gratuitas (máximo 2 crianças por villa). Sistema Deluxe All Inclusive inclui todas as refeições e bebidas selecionadas nos restaurantes e bares."
    },
    faqs: [
      {
        question: "O que é o sistema Deluxe All Inclusive?",
        answer: "O sistema Deluxe All Inclusive inclui todas as refeições (café da manhã, almoço e jantar) nos 5 restaurantes, bebidas alcoólicas e não alcoólicas selecionadas, minibar com reposição diária, snorkeling guiado, esportes náuticos não motorizados, Kids Club e entretenimento."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote All Inclusive inclui todas as refeições nos restaurantes, bebidas selecionadas, minibar diário, equipamentos de snorkeling e esportes náuticos, academia, tênis, padel, Kids Club (3-12 anos), Wi-Fi e entretenimento."
      },
      {
        question: "Como é o Kids Club?",
        answer: "O Dolphin Kids Club é gratuito para crianças de 3-12 anos e oferece atividades criativas, oficinas, jogos e programação diária. Amenities infantis e menu kids estão disponíveis."
      },
      {
        question: "Quais restaurantes estão incluídos no All Inclusive?",
        answer: "Todos os 5 restaurantes estão incluídos: Aqua Restaurant (internacional), Beach Club Grill (mediterrâneo), Carnivorous Restaurant (churrascaria), Le Asiatique (asiático/japonês) e The Mediterraneo (mediterrâneo sobre a água)."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, crianças até 12 anos se hospedam gratuitamente com estadia e refeições inclusas (máximo 2 por villa). O resort oferece Kids Club gratuito (3-12 anos), menu infantil e serviço de babá sob consulta."
      },
      {
        question: "Como é o house reef?",
        answer: "O resort possui excelente house reef em uma lagoa de 100 hectares, ideal para snorkeling. Snorkeling guiado em grupo (30min, 2x por semana) está incluído no All Inclusive."
      },
      {
        question: "O resort oferece experiências de spa?",
        answer: "Sim, o Emerald Spa oferece massagens balinesas, tratamentos diversos, pavilhão balinês e banho turco. Tratamentos de spa têm custo adicional."
      },
      {
        question: "Quantas villas o resort possui?",
        answer: "O resort possui 80 villas (38 na praia, 42 sobre a água) com arquitetura minimalista moderna. As villas sobre a água incluem piscina privativa e acesso direto ao mar."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Emerald Faarufushi Resort & Spa - Vista aérea da ilha"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean villas com piscina sobre a lagoa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Praia de 1.2km de areia branca"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Emerald Spa pavilhão balinês"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "House reef e vida marinha"
      }
    ]
  },
  "fairmont-maldives": {
    slug: "fairmont-maldives",
    name: "Fairmont Maldives Sirru Fen Fushi",
    rating: 5,
    location: "Atol Shaviyani",
    transferTime: "Hidroavião 55min ou voo doméstico + lancha",
    heroImage: heroImage,
    heroTitle: "Fairmont Maldives Sirru Fen Fushi",
    heroSubtitle: "Referência de luxo sustentável e privacidade com spa premiado e experiências ecológicas",
    heroHighlights: ["Luxo Sustentável", "Spa Premiado Arufen", "Kids/Teen Club"],
    seoTitle: "Fairmont Maldives Sirru Fen Fushi - Luxo Sustentável 5★ | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas referência em luxo sustentável nas Maldivas. Ideal para casais, famílias e amantes de experiências ecológicas com spa premiado, Kids/Teen Club e house reef excepcional.",
    about: "Fairmont Maldives Sirru Fen Fushi é referência de luxo sustentável e privacidade nas Maldivas, ideal para casais, famílias e amantes de experiências ecológicas e exclusivas, com serviços personalizados, spa premiado, Kids/Teen Club, praias e house reef excepcionais e opções flexíveis de refeição e acomodação, além de experiências gastronômicas e wellness de alto padrão.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet internacional
- Serviço de mordomo 24h para todas as villas
- Welcome drink, frutas frescas, amenities premium na chegada
- Wi-Fi gratuito em todo o resort
- Bicicletas para explorar a ilha
- Equipamentos de snorkeling, caiaque, stand-up paddle
- Uso de academia, quadra de tênis, beach volley
- Kids Club e Teen Club supervisionados
- Sauna, jacuzzi e piscina olímpica no Arufen Spa
- Cabanas e daybeds gratuitas na praia e piscina
- Arrumação diária e serviço noturno
- Cinema ao ar livre na selva/jardim
- Programa ecológico: plantio de coqueiros, coral restoration, liberação de tartarugas
- Programas especiais de wellness e fitness (yoga, pilates, anti-gravity yoga)
- Entretenimento variado

Estadias longas/lua de mel:

- Decoração especial, amenidade de boas-vindas, jantar privativo personalizado, massagens no Arufen Spa (sob consulta/disponibilidade)`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling (house reef, coral garden)
- Caiaque, SUP, pedalinho
- Academia 24h, quadras de tênis, beach volley
- Bicicletas, academia ao ar livre
- Yoga, pilates, meditação, anti-gravity yoga
- Cinema na selva
- Kids/Teen Club: oficinas criativas, splash, parque
- Piscinas: 4, piscina principal de 200m (olímpica), infantil
- Caminhadas ecológicas, oficinas de sustentabilidade, atividades ecológicas

Atividades com Custo Extra:

- Esportes motorizados: jet ski, parasail, seabob, wakeboard, tubing
- Mergulho (PADI): cursos, batismos, mergulho noturno, snorkel guiado
- Pesca, sunset cruise, piqueniques privativos, passeios de barco tradicional
- Spa Arufen: massagens balinesas, ayurvédicas, hidroterapia, sauna, Jacuzzi olímpica, IV drip wellness, tratamentos especiais
- Coral restoration, plantio de coqueiros, turtle release experiences
- Diversos workshops gourmet, experiências chef's table
- Pet sitter e babysitting

Restaurantes & Bares:

- Azure: internacional/contemporâneo, vista mar
- Kata: asiático moderno (sushi, robatayaki)
- Raha Market: principal (buffet internacional, café e jantar), noites temáticas
- Onu Onu Bar: bar bamboo ao ar livre (cocktails, pairoteca), carta de vinhos e coquetéis
- In Villa Dining 24h

Experiências Gastronômicas Especiais:

- Jantar privativo na praia/tenda na selva
- Degustação de vinhos privativa
- BBQ privativo, piquenique em banco de areia
- Cinema gastronômico noturno`
      },
      {
        id: "accommodations",
        title: "Acomodação",
        type: "text",
        content: `Villas sobre a água:

- Water Sunrise/Sunset Villa: 164m², deck amplo, piscina privativa, acesso direto à lagoa
- Grand Water Sunset Villa: espaço extra/família, piscina privativa

Comodidades em Todas as Villas:

- Cama king
- Amenidades de luxo
- Smart TV
- Minibar
- Máquina de café
- Banheira
- Jardim privativo
- Wi-Fi premium
- Bicicletas
- Serviço de mordomo 24h
- Menu de travesseiros
- Amenities ecológicas

Política de Crianças:

- Até 12 anos: estadia, refeições e transfers gratuitos com pais (máx. 2 por villa)
- Kids/Teen Club gratuito (4-17 anos)
- Menu kids, cama extra, amenities baby
- Babysitter sob consulta, pet sitter disponível`
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Crianças até 12 anos: estadia, refeições e transfers gratuitos (máximo 2 crianças por villa). Serviço de mordomo 24h incluído para todas as villas."
    },
    faqs: [
      {
        question: "O que torna o Fairmont Maldives especial?",
        answer: "O resort é referência em luxo sustentável com spa premiado Arufen, serviço de mordomo 24h para todas as villas, Kids/Teen Club supervisionado, house reef excepcional e programas ecológicos exclusivos como coral restoration e liberação de tartarugas."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã buffet internacional, serviço de mordomo 24h, equipamentos de snorkeling e esportes náuticos não motorizados, Wi-Fi, academia, quadra de tênis, beach volley, Kids/Teen Club, sauna e jacuzzi no Arufen Spa, cinema ao ar livre e programas ecológicos."
      },
      {
        question: "Como funciona o Kids/Teen Club?",
        answer: "O Kids/Teen Club é gratuito para crianças de 4-17 anos e oferece oficinas criativas, splash, parque e programação supervisionada. Menu infantil e amenities baby estão disponíveis."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece Azure (internacional/contemporâneo), Kata (asiático moderno com sushi e robatayaki), Raha Market (buffet internacional) e Onu Onu Bar. In Villa Dining 24h também está disponível."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, crianças até 12 anos têm estadia, refeições e transfers gratuitos (máximo 2 por villa). O resort oferece Kids/Teen Club gratuito (4-17 anos), piscinas incluindo infantil, e serviço de babysitter sob consulta."
      },
      {
        question: "Quais experiências ecológicas estão disponíveis?",
        answer: "O resort oferece programas de coral restoration, plantio de coqueiros, liberação de tartarugas (turtle release), caminhadas ecológicas e oficinas de sustentabilidade. Algumas experiências estão incluídas, outras têm custo adicional."
      },
      {
        question: "O que é o Arufen Spa?",
        answer: "O Arufen Spa é um spa premiado que oferece massagens balinesas, ayurvédicas, hidroterapia, sauna, Jacuzzi olímpica, IV drip wellness e tratamentos especiais. O acesso à sauna, jacuzzi e piscina olímpica está incluído no pacote."
      },
      {
        question: "Há benefícios para lua de mel ou estadias longas?",
        answer: "Sim, hóspedes em lua de mel ou estadias longas podem receber decoração especial, amenidade de boas-vindas, jantar privativo personalizado e massagens no Arufen Spa (sob consulta/disponibilidade)."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Fairmont Maldives Sirru Fen Fushi - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water villas com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Restaurante sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Praia e house reef"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Arufen Spa"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling e coral restoration"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Cinema na selva e entretenimento"
      }
    ]
  },
  "finolhu": {
    slug: "finolhu",
    name: "Finolhu Baa Atoll Maldives",
    rating: 5,
    location: "Atol de Baa, Reserva da Biosfera UNESCO",
    transferTime: "Hidroavião 30min",
    heroImage: heroImage,
    heroTitle: "Finolhu Baa Atoll Maldives",
    heroSubtitle: "Resort 5 estrelas de design vibrante na Reserva da Biosfera da UNESCO",
    heroHighlights: ["Barefoot Chic", "125 Villas", "Beach Club Icônico"],
    seoTitle: "Finolhu Baa Atoll Maldives - Resort 5★ UNESCO | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas premiado pelo design vibrante no Atol de Baa, Reserva da Biosfera da UNESCO. 125 villas barefoot chic, beach club icônico e gastronomia criativa.",
    about: "Finolhu Baa Atoll Maldives é um resort 5 estrelas de praia contemporânea localizado na Reserva da Biosfera Mundial da UNESCO do Atol de Baa. Acesso por hidroavião de 30 minutos a partir de Malé. Internacionalmente premiado pelo design vibrante, conceito 'barefoot chic' e atendimento descontraído, ideal tanto para casais quanto para famílias. O resort oferece 125 villas (praia e sobre a água, metade delas com piscina privativa), spa holístico, kids club, beach club de dois andares, experiências gastronômicas criativas e programa de atividades aquáticas completo.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã diário no Beach Kitchen com especialidades internacionais
- Almoço e jantar variados (internacional, árabe, asiático, frutos do mar, lanches e café especial)
- Bebidas alcoólicas e não alcoólicas selecionadas durante refeições e nos bares (de acordo com o plano de refeição escolhido)
- Traslado regular de hidroavião para/desde Malé (em planos promocionais ou acima de certas noites)
- Equipamentos para snorkeling, caiaque, stand-up paddle
- Bicicletas para adultos e crianças
- Entretenimento diário no Beach Club (DJ, música ao vivo, eventos)
- Uso da academia equipada (indoor/outdoor), yoga pavilion, beach sports (tênis, beach volley)
- Acesso ao Fehi Spa: sauna, banho turco, piscina relaxante (tratamentos pagos à parte)
- Arrumação diária, serviço noturno
- Kids Club Oceaneers (atividades supervisionadas para crianças e adolescentes)
- Wi-Fi de alta velocidade em todo o resort
- Bicicletas disponíveis
- Amenities de banho premium`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e Facilidades Gratuitas:

- Snorkeling (laguna e house reef)
- Caiaque, stand-up paddle
- Quadras de tênis, voleibol de praia, mini golf, academia indoor/outdoor
- Aulas de yoga em grupo no pavilhão ou praia
- Piscina principal e piscina infantil
- Entretenimento noturno (shows, DJ, cinema ao ar livre)
- Kids & Teens Club: Oceaneers Club (atividades criativas, arte, esportes, piscina, playground)
- Cinema open-air, eventos na praia
- Bicicletas para circular pela ilha

Atividades com Custo Extra:

- Centro de mergulho PADI 5*: batismo, cursos Open Water, nitrox, mergulhos guiados (inclusive noturno)
- Esportes aquáticos motorizados: jet ski, seabob, wakeboard, parasailing
- Windsurf, kitesurf
- Pesca (noturna, esportiva, tradicional)
- Passeios de barco: cruzeiro pôr do sol, dolphin cruise, excursões privativas
- Spa holístico Fehi Spa: massagens, tratamentos faciais/corpo, banho floral, wellness programs personalizados
- Experiences: jantares privados, sandbank picnic, wine/cheese tasting no Beach Club, masterclasses culinárias
- Baby-sitting e alugueis especiais

Esportes Aquáticos Motorizados:

- Jet ski, seabob, wakeboard, parasail, fun tubes, banana boat
- Preços sob consulta/local

Excursões e Passeios:

- Safáris de snorkeling a recifes próximos
- Mergulho com mantas e tubarão-baleia (sazonal)
- Observação de golfinhos
- Sandbank picnic e experiências em ilhas desertas
- Cruzeiros sunset
- Passeio de barco transparente (glass bottom)
- Pesca tradicional/excursão privativa

Atividades Aquáticas e Esportes:

- Centro náutico: todas as modalidades de esportes aquáticos motorizados e não motorizados
- Surf (por temporada)
- Snorkeling, mergulho, SUP, caiaque, wind/kite surf
- Badminton, tênis, vôlei de praia, fitness/aulas na praia
- Piscina central e kids pool
- Yoga na praia/pavilhão
- Wellness/day spa programs

Gastronomia:

Restaurantes Principais:

- Beach Kitchen: internacional, refeições principais (incluso café/jantar)
- Kanusan: japonês/asiático contemporâneo sobre a água
- Arabian Grill: culinária árabe-mediterrânea na praia
- Crab Shack: beach shack rustic, frutos do mar frescos, ambiente descontraído
- Milk LAB: cafeteria gourmet, snacks saudáveis
- Beach Club: coquetéis, música, lanches leves, sunset deck superior

Opções de Bares:

- Beach Club (2 andares): drinks premium, coquetéis autorais, DJ e sunset parties
- Bares anexos aos restaurantes: Crab Shack (vinhos brancos, rosé, cervejas), Kanusan Bar
- Milk LAB: cafés, sucos, smoothies, snacks
- Serviço de bar na piscina e beach service

Experiências Gastronômicas Especiais:

- Jantar privado na praia / sandbank
- Degustação de vinhos, masterclasses e festas temáticas
- Cinema dinner night, jantares à luz de tochas
- Surf & turf nights e tematizações semanais

Diferenciais do Hotel:

- Parte da Seaside Collection, padrão Design Hotels
- Localização privilegiada na Reserva da Biosfera da UNESCO (Atol de Baa)
- Praia de 2 km, visual panorâmico
- Design colorido, atmosfera "barefoot chic"
- Metade das villas com piscina, todas generosas em espaço e privacidade
- Gastronomia variada com restaurantes e bares inovadores
- Beach club icônico com festas sunset, música ao vivo
- Kids Club referência regional
- Spa integrado à natureza e wellness signature
- Atividades náuticas para todos os perfis
- Snorkeling e mergulho de classe mundial
- Serviço atencioso e política flexível de personalização
- Programa de sustentabilidade ativo`
      },
      {
        id: "accommodations",
        title: "Acomodação",
        type: "text",
        content: `Villas:

- Private Pool Villas (205-350 m²): piscina privativa

Comodidades na Villa:

- Espaço de 145 a 530 m², privacidade total
- Opções: acesso direto à praia, deck privado sobre a lagoa, piscina privativa em metade das categorias
- Cama king, menu de travesseiros
- Banheira de imersão e chuveiro interno/externo
- Minibar abastecido diariamente (conforme plano)
- Cafeteira, chaleira, água, snacks
- TV satélite, soundbar Bluetooth
- Wi-Fi, ar-condicionado, cofre, toalhas de praia`
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Metade das villas com piscina privativa. Planos de refeição flexíveis disponíveis."
    },
    faqs: [
      {
        question: "O que torna o Finolhu especial?",
        answer: "O resort é premiado internacionalmente pelo design vibrante e conceito 'barefoot chic', localizado na Reserva da Biosfera da UNESCO do Atol de Baa. Destaca-se pelo Beach Club icônico de dois andares, gastronomia criativa com 6 restaurantes, Kids Club referência regional e programa completo de atividades náuticas."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã no Beach Kitchen, equipamentos de snorkeling e esportes náuticos não motorizados, bicicletas, academia, quadras de tênis e beach volley, yoga, Kids Club Oceaneers, entretenimento noturno, Wi-Fi, acesso ao Fehi Spa (sauna, banho turco, piscina relaxante) e amenities premium."
      },
      {
        question: "Como funciona o Kids Club?",
        answer: "O Oceaneers Club é gratuito e oferece atividades supervisionadas para crianças e adolescentes, incluindo oficinas criativas, arte, esportes, piscina e playground. É considerado referência regional em entretenimento infantil."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece 6 restaurantes e bares: Beach Kitchen (internacional), Kanusan (japonês/asiático sobre a água), Arabian Grill (árabe-mediterrâneo), Crab Shack (frutos do mar rustic), Milk LAB (cafeteria gourmet) e Beach Club (2 andares com coquetéis e sunset parties)."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, o resort é ideal para famílias com Kids & Teens Club gratuito, piscina infantil, bicicletas para crianças, menu kids e baby-sitting disponível. Metade das villas possui piscina privativa, proporcionando privacidade e conforto para famílias."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Atividades gratuitas incluem snorkeling, caiaque e SUP. Com custo extra: mergulho PADI 5*, esportes motorizados (jet ski, seabob, wakeboard, parasailing), windsurf, kitesurf, pesca e passeios de barco incluindo observação de golfinhos e mantas."
      },
      {
        question: "O que é o Beach Club?",
        answer: "O Beach Club é um espaço icônico de dois andares que oferece drinks premium, coquetéis autorais, DJ, sunset parties e música ao vivo. É um dos principais diferenciais do resort, proporcionando entretenimento diário e experiências gastronômicas criativas."
      },
      {
        question: "O Finolhu oferece experiências de mergulho?",
        answer: "Sim, o resort possui centro de mergulho PADI 5* com batismo, cursos (Open Water, nitrox), mergulhos guiados incluindo noturnos, safáris de snorkeling e mergulho sazonal com mantas e tubarão-baleia na Reserva da Biosfera da UNESCO."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Finolhu Baa Atoll Maldives - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Private pool villas sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Kanusan Restaurant sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Beach Club e praia de 2km"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Fehi Spa holístico"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas criativas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling na Reserva da Biosfera UNESCO"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Cinema ao ar livre e entretenimento"
      }
    ]
  },
  "four-seasons-kuda": {
    slug: "four-seasons-kuda",
    name: "Four Seasons Resort Maldives at Kuda Huraa",
    rating: 5,
    location: "Ilha Privativa, Atol de Malé Norte",
    transferTime: "Lancha rápida 25min de Malé",
    heroImage: heroImage,
    heroTitle: "Four Seasons Resort Maldives at Kuda Huraa",
    heroSubtitle: "Luxo discreto e atmosfera de vila maldiva tradicional com escola de surfe profissional",
    heroHighlights: ["Spa em Ilha Separada", "Escola de Surfe Profissional", "Kids Club Premiado"],
    seoTitle: "Four Seasons Kuda Huraa - Resort 5★ com Surf School | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas no Atol de Malé Norte com luxo discreto, atmosfera de vila maldiva tradicional, spa em ilha separada, escola de surfe profissional e kids club premiado.",
    about: "Four Seasons Resort Maldives at Kuda Huraa é um resort 5 estrelas reconhecido pelo luxo discreto, serviço Four Seasons e atmosfera de vila maldiva tradicional, localizado em uma ilha privativa no Atol de Malé Norte. Seu grande diferencial é a integração de jardins tropicais, spa em ilha separada, escola de surfe profissional, kids club premiado, experiências aquáticas e gastronomia variada. Acesso fácil por lancha rápida (25 min) a partir de Malé.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã diário (buffet ou à la carte)
- Equipamentos para snorkeling, caiaque, stand-up paddle gratuitos
- Uso das bicicletas para hóspedes
- Kids Club (atividades supervisionadas de 4 a 12 anos)
- Academia (24h) com aulas de yoga, pilates e fitness
- Piscinas: principal, infantil e Serenity Pool (adults only)
- Wi-Fi premium em toda a ilha
- Welcome drink e frutas frescas na chegada
- Concierge multilíngue e serviços expressos
- Entretenimento noturno, excursões e atividades especiais
- Arrumação duas vezes ao dia, serviço noturno`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e Facilidades Gratuitas:

- Snorkeling na lagoa e recifes
- Caiaque, stand-up paddle, pedalinho
- Quadras de tênis, beach volley, academia indoor e ao ar livre
- Yoga, pilates, alongamento em grupo
- Kids e Teens Club: oficinas criativas, jogos, esportes, caça ao tesouro
- Bicicletas para adultos e crianças
- Piscinas infantis e piscina adults-only
- Aulas de culinária, oficinas culturais
- Shark safari, turtle discovery (atividades monitoradas)
- Entretenimento noturno, cinema ao ar livre

Atividades com custo extra:

- Mergulho PADI 5*: cursos, batismo, saídas guiadas
- Esportes motorizados: jet ski, wakeboard, seabob, parasailing, aulas de surf Top Surf School (treinamento profissional/locação de prancha)
- Pesca esportiva/tradicional
- Cruzeiros para observação de golfinhos, passeios de barco, excursões privadas
- Adventure: Robinson Crusoe picnic, exploração em bancos de areia
- Tratamentos e wellness no Island Spa (massagens, cosmetologia, hidroterapia, yoga privativa)
- Sessões de fotos profissionais, degustação de vinhos/jantares privativos
- Babysitting e personal nanny (extra)
- Surfari com pros
- Coral planting e experiência Marine Discovery

Gastronomia:

- Café da manhã: buffet/à la carte no restaurante principal
- Beach Grill: grelhados e frutos do mar na praia
- Rehendhi Restaurant & Bar: menu internacional/requintado
- Sunset Restaurant: culinária asiática/fusion à beira da água
- Poolside Bar, Swim-up bar e serviço de bar na praia
- Sea Breeze Café: lanches, pizzas, snacks
- Room service 24h (cardápio completo)

Experiências especiais:

- Jantar privativo na praia/ilha, degustação de vinhos
- Cinema dinner, piqueniques e eventos temáticos
- Private sandbank dinners e in-villa dining
- Masterclasses e nights temáticas

Planos de refeição: café da manhã incluso (demais refeições à la carte/suplemento HB/Full Board sob consulta).`
      },
      {
        id: "accommodation",
        title: "Acomodação",
        type: "text",
        content: `Villas:

- Water Villa/Suite: deck sobre a lagoa, piscina ou plunge pool privativa em metade delas, amplo living, banheiro premium, escada direta para o mar, sunset/sunrise views

Comodidades na Villa:

- Piscina privativa em todas as Beach Villas, Family Bungalows e algumas Water Villas
- Amplo espaço ao ar livre (novas Beach Villas: até 285 m² de área externa, piscina de 36 m²)
- Vista para oceano, lagoa, sunrise ou sunset (de acordo com categoria)
- Banheiro interno e jardim externo com ducha, algumas unidades com sala de família
- Cama king-size, daybed, mesa de jantar, walk-in closet
- Café, chá, minibar, água mineral renovada todos os dias
- TV, Wi-Fi premium, amenities de banho de luxo
- Serviço de quarto 24h

Política para crianças e diferenciais:

- Até 2 crianças até 12 anos grátis com pais em mesma villa
- Kids Club Oceaneers (4-12 anos): gratuito, completo
- Menu kids nos restaurantes
- Berço/cama extra grátis em todas as categorias, serviço de babá disponível (extra)
- Atividades lúdicas, educativas, contacto com biólogos e experiências marinhas
- Piscina infantil, playground, splash zone
- Prêmios internacionais para famílias e casais
- Programa ativo de preservação de corais e experiências marinhas
- Resort premiado por design, sustentabilidade, excelência de serviço e experiências de surfe
- Concierge multilíngue, serviços sob medida para famílias, casais e grupos`
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Piscina privativa em todas as Beach Villas, Family Bungalows e algumas Water Villas. Planos de refeição flexíveis disponíveis."
    },
    faqs: [
      {
        question: "O que torna o Four Seasons Kuda Huraa especial?",
        answer: "O resort é reconhecido pelo luxo discreto e atmosfera de vila maldiva tradicional no Atol de Malé Norte. Destaca-se pelo spa em ilha separada, escola de surfe profissional Top Surf School, kids club premiado Oceaneers, fácil acesso (25 min de lancha de Malé) e prêmios internacionais por design, sustentabilidade e excelência de serviço."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã (buffet ou à la carte), equipamentos de snorkeling e esportes náuticos não motorizados, bicicletas, Kids Club gratuito, academia 24h com aulas de yoga/pilates/fitness, piscinas (principal, infantil e adults-only), Wi-Fi premium, concierge multilíngue, entretenimento noturno e arrumação duas vezes ao dia."
      },
      {
        question: "Como funciona o Kids Club?",
        answer: "O Oceaneers Kids Club é gratuito para crianças de 4 a 12 anos, oferecendo atividades supervisionadas incluindo oficinas criativas, jogos, esportes, caça ao tesouro, atividades lúdicas e educativas com biólogos marinhos. É premiado internacionalmente e considerado referência regional."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece 6 opções gastronômicas: Beach Grill (grelhados e frutos do mar na praia), Rehendhi Restaurant & Bar (internacional/requintado), Sunset Restaurant (asiático/fusion), Sea Breeze Café (lanches/pizzas), Poolside Bar, Swim-up bar e room service 24h."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, o resort é ideal para famílias com até 2 crianças até 12 anos grátis com pais, Kids Club Oceaneers gratuito e premiado, menu kids nos restaurantes, berço/cama extra grátis, piscina infantil, playground, splash zone e babysitting disponível. Piscina privativa em todas as Beach Villas e Family Bungalows."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Atividades gratuitas incluem snorkeling, caiaque, SUP, pedalinho, shark safari e turtle discovery. Com custo extra: mergulho PADI 5*, esportes motorizados (jet ski, wakeboard, seabob, parasailing), aulas de surf profissional na Top Surf School, pesca, cruzeiros de observação de golfinhos e coral planting."
      },
      {
        question: "O que é o Island Spa?",
        answer: "O Island Spa está localizado em uma ilha separada e oferece tratamentos wellness incluindo massagens, cosmetologia, hidroterapia, yoga privativa e experiências holísticas. O acesso inclui sauna, jacuzzi e piscina de hidroterapia integrada aos jardins tropicais."
      },
      {
        question: "O Four Seasons Kuda Huraa oferece experiências de surfe?",
        answer: "Sim, o resort possui a Top Surf School com treinamento profissional, locação de pranchas e surfaris com instrutores experientes. É um dos poucos resorts nas Maldivas com escola de surfe dedicada, aproveitando os breaks de classe mundial próximos."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Four Seasons Resort Maldives at Kuda Huraa - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Beach Villas com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Water Villas sobre a lagoa"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Island Spa em ilha separada"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Top Surf School - escola de surfe profissional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Experiências gastronômicas variadas"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Snorkeling e atividades aquáticas"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Kids Club Oceaneers premiado"
      }
    ]
  },
  "four-seasons-landaa": {
    slug: "four-seasons-landaa",
    name: "Four Seasons Resort Maldives at Landaa Giraavaru",
    rating: 5,
    location: "Ilha Privativa, Atol Baa - Reserva da Biosfera UNESCO",
    transferTime: "Hidroavião 35min de Malé",
    heroImage: heroImage,
    heroTitle: "Four Seasons Resort Maldives at Landaa Giraavaru",
    heroSubtitle: "Luxo absoluto 7 estrelas em ilha privativa de 44 acres na Reserva da Biosfera UNESCO",
    heroHighlights: ["Spa Ayurvédico Holístico", "Marine Discovery Centre", "Piscina Olímpica 50m"],
    seoTitle: "Four Seasons Landaa Giraavaru - Resort 7★ Atol Baa UNESCO | Follow Me Viagens",
    seoDescription: "Resort 7 estrelas de luxo absoluto no Atol Baa - Reserva da Biosfera UNESCO. Ilha privativa de 44 acres com spa ayurvédico holístico, Marine Discovery Centre e piscina olímpica.",
    about: "Four Seasons Resort Maldives at Landaa Giraavaru é um resort 7 estrelas de luxo absoluto situado em uma ilha privativa de 44 acres, no Atol Baa — Reserva da Biosfera UNESCO. Acesso é feito em cerca de 35 minutos de hidroavião a partir de Malé. O resort destaca-se pela integração à natureza, serviço Four Seasons, design inspirado na tradição maldívia, spa ayurvédico holístico, atividades marinhas e ambientalismo. Há 103 villas e bungalows (praia e sobre a água), todas com alta privacidade, piscina privativa e vistas panorâmicas do oceano ou lagoa. Ideal para casais, famílias e grupos.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã buffet/à la carte
- Recepção no lounge privativo do hidroavião + traslado (taxa extra)
- Serviço de mordomo/villa host 24h para todas as villas
- Welcome drink e amenities premium na chegada
- Wi-Fi premium em toda a ilha
- Equipamentos de snorkeling, caiaque, pedalinho, stand-up paddle
- Bicicletas para adultos e crianças
- Acesso ao fitness center, quadras de tênis e padel, beach volley
- Kids Club "Kids for All Seasons" (4–12 anos) e Majaa Maizan para teens
- Piscina olímpica (50m, primeira das Maldivas), piscina Blu Beach Club, piscina de água salgada, piscina infantil
- Atividades diárias de bem-estar: yoga, pilates, meditação, alongamento
- Biblioteca, sala de jogos, entretenimento cultural
- Arrumação 2x/dia, serviço noturno
- Movie nights, eventos semanais, sunset happy hour
- Marine Discovery Centre: experiências com biólogos, coral/sea turtles programs

Lua de mel/longo prazo: amenidades exclusivas, decoração especial, jantares privativos, experiências wellness (sob consulta de tarifa/promoção).`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e facilidades gratuitas:

- Snorkeling (house reef/passeios guiados)
- Caiaque, stand-up paddle, windsurf, sailing, pedalinho
- Fitness center (24h), aulas de yoga/pilates/meditação
- Quadras de tênis/padel, beach volley, jogos de salão
- Kids Club (atividades criativas, culinária, ciência, esportes), Teens Club (jogos, praia, esportes)
- Sessões com biólogos no Marine Discovery Centre
- Piscinas: principal (olímpica), Blu (beach club), infantil, água salgada
- Biblioteca, sala de jogos, lounge reading
- Entretenimento noturno, cinema ao ar livre
- Bicicletas para usar na ilha, trilhas ecológicas

Atividades com custo extra:

- Mergulho PADI 5*: cursos, batismos, saídas guiadas diárias (fauna abundante, mantas e tubarões-baleia)
- Esportes motorizados: jet ski, seabob, wakeboard, hydrofoil
- Passeios de barco/yacht: shark safari, tours de manta, snorkeling em banco de areia privado, sunset & dolphin cruise
- Pesca tradicional/esportiva, coral planting, experiências de conservação
- Spa & Ayurvedic Retreat: tratamentos holísticos, massagens, terapias ayurvédicas, consulta com médico ayurveda
- Wellness programs, detox, hidroterapia, rituais de casal
- Jantares e piqueniques privativos em sandbank
- Aula de culinária, mixologia, degustação de vinhos
- Fretamento de yacht privado, helicopter/flyboard
- Serviço de babá, eventos especiais, fotografia profissional

Gastronomia:

- Al Barakat: Árabe/Mediterrâneo ao pôr do sol, dois andares sobre a lagoa
- Blu Beach Club: Italiano contemporâneo, vista sunset, piscina icônica, brunches lendários
- Café Landaa: Internacional/buffet temático, café da manhã, noites maldívias, culinária mundial
- Fuego Grill: Frutos do mar e carnes grelhadas ao ar livre
- Seabar: Tapas gourmet, DJs, vista para tubarões-limão
- Shisha Bar: Cocktails, chá e cachimbos
- In-Villa Dining 24h: Menus internacionais, piqueniques, experiências privativas
- Poolside bar, juice bar, sorveteria artesanal
- Jantar privativo em sandbank, wine tasting e noites temáticas especiais`
      },
      {
        id: "accommodation",
        title: "Acomodação",
        type: "text",
        content: `Villas:

- Water Villas/Family Water Villas: sobre lagoa, piscina privativa, sun deck, escada ao mar, banheiro amplo com banheira imersiva

Comodidades na villa:

- Piscina privativa (a partir de 12 metros em Beach Villas)
- Sala de estar "toes-in-the-sand" e espaço de jantar aberto
- Loft com vista mar/praia
- Cama king, menu de travesseiros, roupas de cama hipoalergênicas
- Banheiro: banheira imersiva, ducha interna/ext (padrão nas Water e Beach Villas)
- Smart TV 55", DVD, Wi-Fi premium, som Bluetooth
- Minibar, máquina Nespresso, amenities de banho de assinatura
- Bicicletas privativas, água mineral diária
- Serviço de quarto 24h
- Estação de trabalho, sala de jantar, jardim privativo, espreguiçadeiras
- Berço/cama extra gratuita sob solicitação

Política para crianças/diferenciais:

- Kids Club: 4-12 anos (gratuito), Teens club
- Até 2 crianças até 12 anos grátis nas villas dos pais; menu infantil; cama extra/berço free
- Serviço de babá sob consulta
- Amenities kids e teens, kit praia, bicicletas infantis
- Splash pool infantil, playground, atividades com biólogos
- Sistema de sustentabilidade ativo, programas de conservação marinha, parcerias científicas
- Spa premiado, Marine Discovery Center referência nacional
- Programa wellness/profissionais residentes (yoga, médicos, personal trainers, Ayurveda, nutrição)
- Concierge multilíngue e serviço personalizado Four Seasons`
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Todas as 103 villas possuem piscina privativa e vistas panorâmicas. Ilha privativa de 44 acres na Reserva da Biosfera UNESCO."
    },
    faqs: [
      {
        question: "O que torna o Four Seasons Landaa Giraavaru especial?",
        answer: "O resort 7 estrelas está situado em ilha privativa de 44 acres no Atol Baa - Reserva da Biosfera UNESCO. Destaca-se pela integração à natureza, spa ayurvédico holístico premiado, Marine Discovery Centre com biólogos residentes, piscina olímpica de 50m (primeira das Maldivas) e 103 villas com piscina privativa. Ideal para casais, famílias e grupos que buscam luxo absoluto e experiências ambientais."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã (buffet ou à la carte), serviço de mordomo/villa host 24h, equipamentos de snorkeling e esportes náuticos não motorizados, bicicletas, Kids Club 'Kids for All Seasons' (4-12 anos), Teens Club Majaa Maizan, piscinas (olímpica, Blu Beach Club, água salgada, infantil), fitness center 24h, aulas de yoga/pilates/meditação, Marine Discovery Centre, Wi-Fi premium e arrumação 2x/dia."
      },
      {
        question: "Como funciona o Marine Discovery Centre?",
        answer: "O Marine Discovery Centre oferece experiências com biólogos marinhos incluindo programas de conservação de corais, tartarugas marinhas, snorkeling educativo, workshops científicos e participação em projetos ambientais. É referência nacional em sustentabilidade e parcerias científicas, permitindo aos hóspedes contribuir ativamente para a preservação marinha."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece 7 opções gastronômicas principais: Al Barakat (árabe/mediterrâneo sobre lagoa), Blu Beach Club (italiano contemporâneo com brunches lendários), Café Landaa (internacional/buffet temático), Fuego Grill (frutos do mar e carnes), Seabar (tapas gourmet com DJs), Shisha Bar (cocktails), In-Villa Dining 24h, além de poolside bar, juice bar e sorveteria artesanal."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, o resort é ideal para famílias com até 2 crianças até 12 anos grátis, Kids Club 'Kids for All Seasons' (4-12 anos) gratuito, Teens Club Majaa Maizan, menu infantil, berço/cama extra grátis, piscina infantil, playground, atividades com biólogos marinhos e babysitting disponível. Todas as villas possuem piscina privativa."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Atividades gratuitas incluem snorkeling (house reef e guiado), caiaque, SUP, windsurf, sailing e pedalinho. Com custo extra: mergulho PADI 5* (mantas, tubarões-baleia), esportes motorizados (jet ski, seabob, wakeboard, hydrofoil), shark safari, tours de manta, sunset & dolphin cruise, pesca e coral planting."
      },
      {
        question: "O que é o Spa Ayurvédico?",
        answer: "O spa oferece tratamentos holísticos ayurvédicos autênticos com médico ayurveda residente, incluindo massagens, terapias, consultas personalizadas, wellness programs, detox, hidroterapia e rituais de casal. É um dos spas mais premiados das Maldivas, integrado à natureza com profissionais especializados em yoga, nutrição e medicina tradicional."
      },
      {
        question: "Qual é a política de piscina privativa?",
        answer: "Todas as 103 villas e bungalows do resort possuem piscina privativa, começando com 12 metros nas Beach Villas. As Water Villas e Family Water Villas também incluem piscina privativa no deck sobre a lagoa, oferecendo total privacidade e vistas panorâmicas do oceano."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Four Seasons Resort Maldives at Landaa Giraavaru - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Water Villas com piscina privativa sobre a lagoa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Beach Villas com piscina privativa de 12 metros"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa Ayurvédico holístico premiado"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Piscina olímpica de 50m - primeira das Maldivas"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Blu Beach Club - italiano contemporâneo"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Marine Discovery Centre - experiências com biólogos"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Kids Club Kids for All Seasons"
      }
    ]
  },
  "gili-lankanfushi": {
    slug: "gili-lankanfushi",
    name: "Gili Lankanfushi Maldives",
    rating: 7,
    location: "Ilha Lankanfushi, Atol de Malé Norte",
    transferTime: "Lancha rápida 20min de Malé",
    heroImage: heroImage,
    heroTitle: "Gili Lankanfushi Maldives",
    heroSubtitle: "Resort boutique ultra-luxuoso com conceito 'No News, No Shoes'",
    heroHighlights: ["Todas Villas sobre Água", "Zero Plastic Resort", "Mordomo Dedicado"],
    seoTitle: "Gili Lankanfushi Maldives - Resort 7★ Ultra-Luxuoso | Follow Me Viagens",
    seoDescription: "Resort boutique ultra-luxuoso com conceito 'No News, No Shoes', todas as villas sobre a água, sustentabilidade (Zero Plastic Resort) e serviço de mordomo dedicado 24h.",
    about: "Gili Lankanfushi Maldives é um resort boutique ultra-luxuoso localizado na ilha privada de Lankanfushi, no Atol de Malé Norte, a apenas 20 minutos de lancha rápida de Malé. Destaca-se internacionalmente pelo conceito 'No News, No Shoes', todas as villas sobre a água (total privacidade e serviço personalizado), sustentabilidade (Zero Plastic Resort) e experiências românticas e exclusivas. É ideal para casais, luas de mel e famílias que buscam sofisticação e contato profundo com a natureza, contando com um dos house reefs mais ricos das Maldivas e serviço de mordomo.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Traslado regular privativo de lancha (pago à parte/algumas tarifas incluem)
- Café da manhã gourmet no Kashiveli Restaurant
- Serviço Mr./Ms. Friday (mordomo/concierge dedicado 24h)
- Wi-Fi premium em todas as áreas
- Frutas frescas, água mineral e amenities orgânicos diários
- Bicicletas à disposição de cada hóspede
- Equipamentos de snorkeling livre, caiaque, windsurf, stand-up paddle
- Arrumação e serviço noturno
- Welcome drink e amenities customizadas
- Experiências de sustentabilidade e atividades de bem-estar regulares
- Kids Activities (com supervisão, mediante consulta)
- Biblioteca, salão de jogos, cinema sob as estrelas, slackline`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling guiado no house reef
- Caiaque, stand-up paddle, windsurf
- Aulas coletivas de ioga/meditação (agendadas)
- Academias, quadra de tênis, voleibol, mesa de ping pong
- Cinema ao ar livre na praia
- Bicicletas para explorar toda a ilha
- Acesso à biblioteca/jogos, slackline, sunset management weekly

Atividades com custo extra:

- Mergulho PADI (batismo, cursos, nitrox, night dive, excursões avançadas)
- Esportes motorizados: jet ski, seabob, wakeboard
- Pesca, sunset dolphin cruise, piqueniques em bancos de areia
- Tratamentos no Meera Spa (sobre a água): massagens balinesas, reflexologia, wellness programs, rituais ayurvédicos e holísticos
- Workshops veganos/culinária wellness, degustação de vinhos ou jantar privado no wine cellar
- Experiências privativas na ilha deserta ou sandbank
- Sessão fotográfica profissional, coral adoption
- Aula de surf (época do ano)

Gastronomia (restaurantes principais):

- Kashiveli: Internacional, mediterrânea (café/almoço/jantar, pés na areia)
- By The Sea: Asiático contemporâneo, jantares privativos
- Overwater Bar: Drinks, tapas, sushi lunches, sunset cocktails
- Fini Foni: Sorveteria e snacks junto à piscina principal
- Underground Wine Cellar: Degustações privativas de vinhos raros (jantares exclusivos)
- Experiências Especiais: jantares à luz de velas na praia, dining in-villa, floating breakfast, sandbank castaway picnic, sunset barbecue, masterclasses culinárias
- Room service 24h disponível`
      },
      {
        id: "accommodation",
        title: "Acomodação",
        type: "text",
        content: `Villas:

- Todas as 45 villas são sobre a água, com total privacidade
- Villa Suite: 210m², deck privativo, rooftop, sala de estar, espaço para refeições, espreguiçadeiras sobre o mar, rede na água, banheiro aberto, acesso direto à lagoa

Comodidades na villa:

- Todas contam com amenities orgânicos, minibar, café/chá, soundbar, Wi-Fi premium, bicicletas, serviço Mr./Ms. Friday 24h, menu de travesseiros, serviço de lavanderia e arrumação 2x/dia, room service 24h
- Villas sem plástico descartável, amenities eco-friendly, design sustentável, sistema de energia solar

Política para crianças/diferenciais:

- Até 2 crianças free com pais (menores de 12 anos)
- Berço/cama extra sem custo
- Kids Activities supervisionadas, menu kids, amenities baby sob solicitação
- Baby-sitting disponível (custo extra)
- Programa eco-kids, experiências sustentáveis, aula de culinária, aventuras marinhas guiadas
- Resort premiado como hotel eco-friendly e de experiências românticas e familiares`
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Todas as 45 villas são sobre a água com total privacidade. Resort Zero Plastic com conceito 'No News, No Shoes'."
    },
    faqs: [
      {
        question: "O que torna o Gili Lankanfushi especial?",
        answer: "O resort boutique ultra-luxuoso destaca-se pelo conceito 'No News, No Shoes' (descalço e desconectado), todas as 45 villas sobre a água com total privacidade, Zero Plastic Resort (sustentabilidade), house reef rico, serviço Mr./Ms. Friday (mordomo dedicado 24h) e experiências românticas exclusivas. Localizado a apenas 20 minutos de lancha de Malé."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "O pacote inclui café da manhã gourmet, serviço Mr./Ms. Friday (mordomo 24h), equipamentos de snorkeling, caiaque, windsurf, SUP, bicicletas, Wi-Fi premium, frutas frescas e água mineral diários, amenities orgânicos, arrumação e serviço noturno, experiências de sustentabilidade, biblioteca, cinema sob as estrelas e atividades de bem-estar regulares."
      },
      {
        question: "Como funciona o conceito 'No News, No Shoes'?",
        answer: "O conceito propõe experiência de desconexão total e contato direto com a natureza: não há sapatos necessários na ilha, não há TVs nas áreas comuns, e o ambiente convida ao relaxamento profundo. O resort oferece Zero Plastic Resort, design sustentável, amenities orgânicos e energia solar."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece 5 opções principais: Kashiveli (internacional/mediterrânea, pés na areia), By The Sea (asiático contemporâneo), Overwater Bar (drinks, tapas, sushi), Fini Foni (sorveteria e snacks), Underground Wine Cellar (degustações privativas), além de experiências especiais como floating breakfast, sandbank picnic e masterclasses culinárias. Room service 24h disponível."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, o resort é ideal para famílias com até 2 crianças até 12 anos grátis, Kids Activities supervisionadas, menu kids, berço/cama extra sem custo, amenities baby, programa eco-kids, aventuras marinhas guiadas e babysitting disponível (custo extra)."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Atividades gratuitas incluem snorkeling guiado no house reef (um dos mais ricos das Maldivas), caiaque, SUP, windsurf. Com custo extra: mergulho PADI (batismo, cursos, nitrox, night dive), esportes motorizados (jet ski, seabob, wakeboard), pesca, sunset dolphin cruise, piqueniques em bancos de areia e coral adoption."
      },
      {
        question: "O que é o Meera Spa?",
        answer: "O Meera Spa é um spa sobre a água que oferece massagens balinesas, reflexologia, wellness programs, rituais ayurvédicos e holísticos. Possui workshops veganos/culinária wellness, degustação de vinhos e experiências privativas na ilha deserta."
      },
      {
        question: "Como funciona o serviço Mr./Ms. Friday?",
        answer: "O serviço Mr./Ms. Friday é um mordomo/concierge dedicado 24h disponível para cada villa. Eles cuidam de todas as necessidades dos hóspedes, desde planejamento de refeições e atividades até solicitações especiais, garantindo experiência ultra-personalizada."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Gili Lankanfushi Maldives - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Villa Suite sobre a água com deck privativo"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Rooftop da villa com vista para o oceano"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Meera Spa sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "House reef - snorkeling"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Kashiveli Restaurant - pés na areia"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Underground Wine Cellar"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Floating breakfast - experiência especial"
      }
    ]
  },
  "hard-rock": {
    slug: "hard-rock",
    name: "Hard Rock Hotel Maldives",
    rating: 5,
    location: "CROSSROADS, Emboodhoo Lagoon",
    transferTime: "Lancha rápida 15min de Malé",
    heroImage: heroImage,
    heroTitle: "Hard Rock Hotel Maldives",
    heroSubtitle: "Resort 5 estrelas contemporâneo com atmosfera musical vibrante",
    heroHighlights: ["All Inclusive", "Roxity Kids & Teen Club", "Marina @ CROSSROADS"],
    seoTitle: "Hard Rock Hotel Maldives - Resort 5★ All Inclusive | Follow Me Viagens",
    seoDescription: "Resort 5 estrelas contemporâneo no complexo CROSSROADS com atmosfera musical vibrante, All Inclusive, Roxity Kids & Teen Club e acesso ao Marina Village.",
    about: "Hard Rock Hotel Maldives é um resort 5 estrelas contemporâneo que integra o complexo CROSSROADS, na Emboodhoo Lagoon, a apenas 15 minutos de lancha rápida do aeroporto de Malé. O hotel oferece atmosfera vibrante e temática musical, ideal para famílias, casais e grupos, com acesso a restaurantes do marina village, club kids/teens, atividades esportivas, spa, beach club com programação musical e eventos. O regime 'All Inclusive' garante facilidade total e acesso à maioria das experiências gastronômicas, bares e atividades não motorizadas.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `Incluído:

- Café da manhã no Sessions Restaurant
- Dependendo do plano: meia pensão, pensão completa ou All Inclusive (inclui refeições principais em restaurantes selecionados, snacks e bebidas alcoólicas/não alcoólicas em horários designados)
- Acesso ao Roxity Kids Club & Teen Spirit Club
- Equipamentos de snorkeling, caiaque e stand-up paddle
- Fitness center, quadra de tênis
- Piscina principal com serviço de bebidas
- Bicicletas gratuitas por disponibilidade
- Wi-Fi de alta velocidade
- Programação musical diária, cinema open-air, eventos e shows ao vivo
- Welcome amenity e serviço de quarto diário
- Traslado de lancha regular incluso em certas promoções/pacotes até oct/2025`
      },
      {
        id: "activities",
        title: "Atividades e Gastronomia",
        type: "text",
        content: `Atividades e Facilidades Gratuitas:

- Roxity Kids Club e Teen Spirit Club: oficina de DJ, games, artes, esportes, festas temáticas
- Snorkeling, caiaque, stand-up paddle, pedalinho
- Bicicletas, quadra de tênis e beach volley
- Cinema open-air e programação musical/entretenimento
- Academia (Fitness Center), aulas em grupo selecionadas
- Acesso ao Hard Rock Café, SAii Beach Club, restaurantes e entretenimento do Marina @ CROSSROADS

Atividades com Custo Extra:

- Esportes motorizados: jet ski, seabob, parasailing, wakeboard, fun tubes
- Mergulho PADI (batismo, cursos, saídas guiadas)
- Excursões privativas: cruzeiro pôr do sol, dolphin cruise, pesca esportiva
- Rock Spa: tratamentos signature, massagens, wellness programs, facial
- Jantares temáticos, experiências privativas (na praia, villa, sandbank)
- Babysitting sob consulta

Esportes Aquáticos Motorizados (valores sob consulta local):

- Jet ski
- Parasailing
- Seabob
- Wake/Water Ski
- Fun tubes e banana boat
- Paddle surfing elétrico

Excursões e Passeios:

- Cruzeiro sunset, observação de golfinhos
- Passeios para a capital e ilhas locais
- Experiências no sandbank, piquenique privativo
- Visitas ao Marine Discovery Center do CROSSROADS
- Tours culturais e wellness

Atividades Aquáticas e Esportes:

- Centro aquático com esportes não motorizados grátis
- Esportes motorizados sob custo
- Quadra de tênis, beach volley, academia 24h
- Piscina central (área kids e adulto)
- Yoga e fitness (aulas e academia)
- Kids & Teens Club, jogos de praia

Gastronomia:

- Sessions: internacional com live stations (café/jantar)
- The Elephant & The Butterfly: latino affairs, mex/latino durante dia e sunset (almoço/jantar)
- Hard Rock Café Maldives: american classics, drinks, música ao vivo
- Pool Bar: drinks tropicais e snacks na piscina
- In Villa Dining: 24h, variado
- Acesso a múltiplos restaurantes do Marina @ CROSSROADS (AI válido em selecionados)

Opções de Bares:

- Pool Bar
- The Elephant & The Butterfly Bar
- Lobby Bar
- Hard Rock Café Bar (shows ao vivo)
- Bares do CROSSROADS (AI têm acesso limitado, ver regras)
- Copa bar privativo nas Pool Villas

Experiências Gastronômicas Especiais:

- In Villa Dining 24h
- Jantar privado na praia ou sandbank (custo extra)
- Festas sunset, pool parties
- Masterclasses de coquetelaria e culinária
- Eventos temáticos, DJ nights
- Degustação privativa de vinhos ou tequila`
      },
      {
        id: "accommodation",
        title: "Acomodação",
        type: "text",
        content: `Villas:

- Platinum Overwater Villa: deck sobre a água, lounge net, escada lagoa
- Platinum Overwater Pool Villa: plunge pool privativa, terraço
- Diamond Overwater Pool Villa: maior privacidade, piscina sobre a água, amplo deck

Comodidades nas Villas/Suítes:

- Piscina privativa em quase todas as Pool Villas (plunge pool, terraço, espreguiçadeiras)
- Cama king-size ou duplas, sofá cama em unidades familiares
- Banheiro com banheira, chuveiro de efeito chuva, amenities premium
- Minibar (restocked diário no AI)
- Ar-condicionado, ventilador, TV smart, som, Wi-Fi
- Bicicletas, máquina de café/chá
- Deck aberto (sobre água ou praia), lounge nets (nas overwater)
- Serviço de quarto e limpeza diária
- Cofre eletrônico, amenities kids sob requisição
- Decoração moderna com toques "hard rock" e memorabilia exclusiva

Política para Crianças:

- Roxity Kids Club gratuito (4-12 anos) e Teen Spirit Club (13-17 anos)
- Até 2 crianças grátis com responsáveis em todos os planos (menores de 12 anos em promoções)
- Kids menu nos restaurantes, berço/cama extra grátis
- Serviço de babá disponível (extra)
- Atividades kids em parceria com Marina e SAii
- Política kids eat free em determinados pacotes/promos

Diferenciais do Hotel:

- Atmosfera musical temática (memorabilia exclusiva)
- Parte do CROSSROADS: acesso a marina, shopping, restaurante de chef, balada, kids aquário, museu musical
- Acesso fácil e rápido de lancha a Malé (ideal para famílias e grupos)
- Kids e Teens Club referência
- Villa sobre água e praia com design moderno, piscinas privativas em muitas categorias
- Agenda de festas, sunset music sessions, pool parties semanais
- Serviços exclusivos "hard rock" (guitarra na villa, playlist personalizada, rock spa)
- Resort pet friendly (sob consulta)
- Programa de sustentabilidade ativo
- Serviço All Inclusive abrangente e variado`
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
          priceSubtext: "7 noites All Inclusive"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites All Inclusive"
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
        question: "O que torna o Hard Rock Hotel Maldives especial?",
        answer: "O resort 5 estrelas integra o complexo CROSSROADS com atmosfera musical vibrante e temática, acesso ao Marina Village (shopping, restaurantes, entretenimento), Roxity Kids & Teen Club referência, All Inclusive abrangente, villas sobre água e praia com design moderno e memorabilia exclusiva. Localizado a apenas 15 minutos de lancha de Malé."
      },
      {
        question: "O que está incluído no All Inclusive?",
        answer: "O All Inclusive inclui café da manhã, refeições principais em restaurantes selecionados (Sessions, The Elephant & The Butterfly, Hard Rock Café, Pool Bar), snacks e bebidas alcoólicas/não alcoólicas em horários designados, Roxity Kids & Teen Club, equipamentos de snorkeling, caiaque, SUP, fitness center, quadra de tênis, piscina, bicicletas, Wi-Fi, programação musical diária, cinema open-air e eventos."
      },
      {
        question: "O que é o CROSSROADS?",
        answer: "CROSSROADS é um complexo integrado que oferece marina village com shopping, restaurantes de chef, balada, kids aquário, museu musical, SAii Beach Club e entretenimento. Hóspedes do Hard Rock têm acesso ao complexo, ampliando as opções de gastronomia, compras e atividades."
      },
      {
        question: "Quais restaurantes o resort possui?",
        answer: "O resort oferece Sessions (internacional com live stations), The Elephant & The Butterfly (latino/mex), Hard Rock Café Maldives (american classics com música ao vivo), Pool Bar (drinks tropicais e snacks), In Villa Dining 24h, além de acesso a múltiplos restaurantes do Marina @ CROSSROADS. Experiências especiais incluem jantares privativos, festas sunset, pool parties e masterclasses."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, o resort é ideal para famílias com até 2 crianças grátis (menores de 12 anos em promoções), Roxity Kids Club (4-12 anos) e Teen Spirit Club (13-17 anos) gratuitos com oficinas de DJ, games, artes e festas temáticas, kids menu, berço/cama extra grátis, política kids eat free em pacotes e babysitting disponível (extra)."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "Atividades gratuitas incluem snorkeling, caiaque, SUP, pedalinho. Com custo extra: mergulho PADI (batismo, cursos), esportes motorizados (jet ski, seabob, parasailing, wakeboard, fun tubes, banana boat), cruzeiro sunset, dolphin cruise, pesca esportiva e experiências em sandbank."
      },
      {
        question: "O que é o Rock Spa?",
        answer: "O Rock Spa oferece tratamentos signature inspirados no universo musical, massagens, wellness programs, faciais e experiências de casal. Integra a atmosfera temática do resort com profissionais especializados."
      },
      {
        question: "O que são os Kids & Teen Clubs?",
        answer: "Roxity Kids Club (4-12 anos) e Teen Spirit Club (13-17 anos) são gratuitos e oferecem oficinas de DJ, games, artes, esportes, festas temáticas e atividades supervisionadas. São referência na região com programação musical integrada e parceria com Marina e SAii."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Hard Rock Hotel Maldives - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Platinum Overwater Pool Villa com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Diamond Overwater Pool Villa - deck amplo"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Rock Spa - tratamentos signature"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Piscina principal com área kids e adulto"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Hard Rock Café Maldives - american classics"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Marina @ CROSSROADS - shopping e entretenimento"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Roxity Kids Club - oficinas e atividades"
      }
    ]
  },
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
  "niyama-private-islands": {
    slug: "niyama-private-islands",
    name: "Niyama Private Islands Maldives",
    rating: 6,
    location: "Atol Dhaalu (duas ilhas privadas - Play e Chill)",
    transferTime: "45 minutos de hidroavião",
    heroImage: heroImage,
    heroTitle: "Niyama Private Islands Maldives",
    heroSubtitle: "Resort 6 estrelas com duas ilhas privadas e restaurante submarino icônico",
    heroHighlights: ["Restaurante Submarino Subsix", "Surf Spot Exclusivo", "8 Restaurantes & Bares"],
    seoTitle: "Niyama Private Islands Maldives - Resort 6★ com Subsix | Follow Me Viagens",
    seoDescription: "Resort 6 estrelas no Atol Dhaalu com duas ilhas privadas, restaurante submarino Subsix, surf spot exclusivo, 8 restaurantes premiados e kids club completo. Renovado em 2025.",
    about: "Niyama Private Islands Maldives é um resort de luxo 6 estrelas situado no Atol Dhaalu, composto por duas ilhas privadas distintas, 'Play' (foco em famílias e atividades) e 'Chill' (foco em relaxamento e casais), conectadas por passarelas e praias. Distante 45 minutos de hidroavião de Malé, o resort foi renovado em 2025, com todas as villas modernizadas, design contemporâneo e tecnologia de ponta. É reconhecido internacionalmente pelo seu alto padrão de serviço, oferta gastronômica premiada, experiências aquáticas (surf e restaurante submarino), privacidade e lazer para todas as idades.",
    sections: [
      {
        id: "inclusions",
        title: "Atividades e Facilidades Gratuitas",
        type: "text",
        content: `Atividades Gratuitas:

- Snorkeling, caiaque, stand-up paddle, windsurf e bicicletas
- Piscinas no Play e Chill (com áreas kids e adults only)
- Academia completa, quadras de tênis, beach volley, spa, yoga pavilion
- Trilhas ecológicas, cinema ao ar livre, playground, salão de jogos, galeria de arte
- Clube infantil "Explorers Kids Club" (atividades supervisionadas para 12 meses até 12 anos, playground ao ar livre, programa teens)
- Atividades diárias: aulas fitness, bootcamp, workshops criativos, noites temáticas, música ao vivo
- Serviço completo de praia/piscina
- Lounge de chegada no aeroporto
- House reef para mergulho com snorkel e vida marinha abundante
- Happy hour, festas na praia, eventos sazonais/culturais

Atividades com Custo Extra:

- Surf (spot exclusivo junto ao Play Island; considerado o melhor de fácil acesso de toda a hotelaria maldiva)
- Escola de surfe para todos os níveis, professores profissionais
- Mergulho PADI 5*, cursos e saídas guiadas
- Esportes motorizados: jet ski, seabob, parasailing, wakeboard, flyboard
- Spa Drift (tratamentos signature, Ayurveda, massagens, tratamentos de casal)
- Passeios privativos: dolphin cruise, sandbank picnic, pesca esportiva, cruzeiro ao pôr do sol, iate
- Jantares privativos (submarino, na praia, tree top, sandbank)
- Sessão fotográfica profissional, degustação de vinhos, babysitting
- Programa de wellness, nutrição, esporte personalizado e eventos para grupos`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `8 Restaurantes e Bares Temáticos:

- Subsix: Icônico restaurante submarino seis metros abaixo do mar, ideal para café da manhã com champanhe, almoço e experiências privadas
- Nest: Jantar asiático entre as copas das árvores
- Tribal: Culinária africana/tribal em ambiente jungle
- Edge: Fine dining internacional à beira-mar, acessível de barco privado
- Blu: Mediterrâneo à beira da piscina, clima família
- Epicure: Buffet internacional, aberto todo o dia (inclusive para brunch)
- Dune: Grill à beira-mar, hambúrgueres, saladas
- Bares: The Deli, Fahrenheit (cocktails ao pôr do sol, DJ)

Experiências:

- Room service 24h
- Floating breakfast
- Jantares privativos e experiências personalizadas (piquenique, degustações, sandbank dinner)
- Menus infantis
- Opções vegetarianas e plant-based
- Adega de vinhos com degustações
- Gastronomia premiada pela criatividade, ambiente e qualidade`
      },
      {
        id: "accommodations-text",
        title: "Acomodação",
        type: "text",
        content: `Overwater Villas:

- Todas com piscina privativa
- Design maldiviano contemporâneo
- Sala de banho luxuosa
- Menu de travesseiros
- Smart TV
- Minibar completo
- Máquina de café/expresso
- Bicicletas
- Serviço de mordomo (thakuru) 24h

Comodidades nas Villas:

- Tecnologia de ponta: entretenimento, iluminação, música e detalhes de conforto acionados por comando digital
- Decoração inspirada em cores do pôr do sol e elementos naturais
- Amplos espaços internos e externos
- Muitos com chuveiro ao ar livre`
      },
      {
        id: "families",
        title: "Famílias, Crianças e Diferenciais",
        type: "text",
        content: `Para Famílias:

- Duas ilhas conectadas: Play (ideal para crianças/famílias) e Chill (sossego para casais/honeymoon)
- Kids Club para 12 meses a 12 anos
- Área adolescente
- Menus kids
- Amenities baby
- Berço e cama extra sem custo
- Babysitting (extra)
- Praia extensa
- Piscina família e adultos
- Splash area kids
- Surf para todas as idades/níveis

Diferenciais do Resort:

- Resort renovado em 2025 com villas modernizadas
- Personalização extrema, experiências exclusivas "unscripted" e "tailor made"
- Recomendado para casais ativos, honeymooners, famílias e apaixonados por experiências aquáticas e gastronômicas
- Certificado Condé Nast, TripAdvisor
- Referência em privacidade, arquitetura moderna e sustentabilidade
- Programas ecológicos e atenção ao ambiente local
- Melhor surf spot de fácil acesso das Maldivas
- Restaurante submarino icônico Subsix`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "Todas as villas foram renovadas em 2025 com design contemporâneo, tecnologia de ponta e piscinas privativas.",
      types: [
        {
          name: "Overwater Villa",
          size: "Consultar",
          beds: "King-size",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Piscina privativa",
            "Design maldiviano contemporâneo",
            "Sala de banho luxuosa",
            "Menu de travesseiros",
            "Smart TV",
            "Minibar completo",
            "Máquina de café/expresso",
            "Bicicletas",
            "Serviço de mordomo (thakuru) 24h",
            "Tecnologia de ponta (entretenimento, iluminação, música por comando digital)",
            "Decoração inspirada em cores do pôr do sol",
            "Amplos espaços internos e externos",
            "Chuveiro ao ar livre (em algumas villas)"
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
        answer: "O traslado é feito por hidroavião, com duração de 45 minutos do Aeroporto Internacional de Malé até o Niyama Private Islands Maldives."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort é ideal para famílias. A ilha Play é focada em famílias e atividades, com Explorers Kids Club para 12 meses a 12 anos, área adolescente, piscina família, splash area kids, menus kids, amenities baby, berço e cama extra sem custo, e surf para todas as idades. A ilha Chill é focada em relaxamento e casais."
      },
      {
        question: "O que são as ilhas Play e Chill?",
        answer: "Niyama Private Islands é composto por duas ilhas privadas distintas conectadas por passarelas e praias. Play é focada em famílias e atividades (kids club, surf spot, restaurantes temáticos), enquanto Chill é voltada para relaxamento e casais (spa, áreas adults only, privacidade)."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece 8 restaurantes e bares: Subsix (icônico restaurante submarino), Nest (asiático nas copas das árvores), Tribal (africano/jungle), Edge (fine dining à beira-mar), Blu (mediterrâneo na piscina), Epicure (buffet internacional), Dune (grill à beira-mar), The Deli e Fahrenheit (bar com DJ e cocktails ao pôr do sol)."
      },
      {
        question: "O que é o Subsix?",
        answer: "Subsix é o icônico restaurante submarino do resort, localizado seis metros abaixo do mar. Oferece café da manhã com champanhe, almoço e experiências privadas, sendo uma das principais atrações do Niyama Private Islands."
      },
      {
        question: "O resort possui surf?",
        answer: "Sim, o resort possui um surf spot exclusivo junto à ilha Play, considerado o melhor de fácil acesso de toda a hotelaria maldiva. Há escola de surfe para todos os níveis com professores profissionais (com custo extra)."
      },
      {
        question: "Quais atividades estão incluídas?",
        answer: "Gratuitas: snorkeling, caiaque, SUP, windsurf, bicicletas, piscinas (kids e adults only), academia, tênis, beach volley, yoga pavilion, trilhas ecológicas, cinema ao ar livre, playground, salão de jogos, Explorers Kids Club, fitness, bootcamp, workshops, música ao vivo, house reef, happy hour. Com custo extra: surf, mergulho PADI 5*, jet ski, seabob, parasailing, Spa Drift, passeios privativos, jantares privativos."
      },
      {
        question: "O que diferencia o Niyama Private Islands?",
        answer: "Resort 6 estrelas renovado em 2025 com duas ilhas privadas (Play e Chill), restaurante submarino icônico Subsix, melhor surf spot de fácil acesso das Maldivas, 8 restaurantes premiados, kids club completo, tecnologia de ponta nas villas, experiências tailor-made, certificados Condé Nast e TripAdvisor, e programas de sustentabilidade. Ideal para casais ativos, honeymooners e famílias."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Niyama Private Islands Maldives - Vista aérea das ilhas Play e Chill"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Overwater Villa - villa sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Villa ao pôr do sol"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa Drift - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Epicure Restaurant - buffet internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Subsix - restaurante submarino"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Nest Restaurant - gastronomia asiática"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Piscina principal"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "Surf spot - Play Island"
      }
    ]
  },
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
  "joali-being": {
    slug: "joali-being",
    name: "JOALI BEING",
    rating: 7,
    location: "Atol Raa, Ilha Bodufushi",
    transferTime: "Hidroavião privativo 40min",
    heroImage: heroImage,
    heroTitle: "JOALI BEING",
    heroSubtitle: "Resort 7 estrelas ultraexclusivo de bem-estar integral com arquitetura biophilic",
    heroHighlights: ["Wellness Ultra-Luxo", "68 Villas com Piscina", "Serviço de Mordomo Jadugar"],
    seoTitle: "JOALI BEING - Resort 7★ Wellness Maldivas | Follow Me Viagens",
    seoDescription: "Resort 7 estrelas ultraexclusivo no Atol Raa com foco em bem-estar integral. 68 villas com piscina privativa, serviço de mordomo Jadugar, arquitetura biophilic, Areka Spa e gastronomia earth to table. Forbes 5-Star e MICHELIN Keys.",
    about: "JOALI BEING é um resort 7 estrelas ultraexclusivo aberto em 2021 no Atol Raa, na ilha Bodufushi, a cerca de 40 minutos de hidroavião de Malé. O conceito central é bem-estar integral, refletido em toda a arquitetura biophilic e nas experiências customizadas para corpo, mente e alma. O resort oferece 68 villas (praia e sobre a água), todas com piscina privativa, serviço personalizado de mordomo (Jadugar), design contemporâneo integrado à natureza e experiências voltadas à transformação do hóspede. Acesso via hidroavião privativo (cerca de 40min de Malé) com recepção no lounge VIP JOALI antes do embarque.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote",
        type: "text",
        content: `- Café da manhã "earth to table" em várias opções de restaurante e sala privativa
- Minibar de boas-vindas (vinho, snacks) e amenities premium sustentáveis
- Serviço de mordomo Jadugar (butler) personalizado 24h por villa
- Wi-Fi premium em toda a ilha
- Bicicletas individuais por villa
- Equipamento para snorkeling e esportes aquáticos não motorizados
- Acesso ao fitness center, trilha ecológica, academia funcional
- Welcome ritual, amenities aromaterapia, kit herbal Aktar
- Lounge, biblioteca, cinema sob as estrelas
- Programação wellness e artístico-cultural diária
- Ritual do pôr do sol na praia
- Arrumação 2x ao dia, room service 24h`
      },
      {
        id: "wellness",
        title: "Benefícios de Bem-Estar",
        type: "text",
        content: `- Consulta inicial detalhada no Areka Spa
- Crédito/dia para spa nos principais programas wellness
- Exclusivo acesso à hidroterapia (Watsu pool, haloterapia, sauna, banho turco)
- Atividades diárias de yoga, breathwork, pilates, meditação, sound healing
- Uso do herbal centre Aktar - oficinas de chás, cosméticos naturais, aromaterapia, workshops
- Mentoria wellness com profissionais internacionais
- Ritual de sono, jornada de nutrição, fitness e mindful movement
- Detox digital e experiências "biophilic"`
      },
      {
        id: "dining",
        title: "Gastronomia e Bares",
        type: "text",
        content: `Restaurantes:

- FLOW: restaurante principal "earth to table", menu balanceado, saudável, criativo (café, almoço, jantar)
- MOJO: restaurante e beach club à beira-mar; cozinha mediterrânea, frutos do mar e drinks wellness
- Su: restaurante asiático de especialidade
- Sala privada de jantar/chef's table para experiências customizadas

Bares:

- Aktar Bar: infusões, tisanes, elixires naturais
- Room service 24h e experiências gastronômicas privativas (floating breakfast, sandbank dinner, degustação de vinhos)

Experiências Especiais:

- Cardápios personalizados conforme diagnóstico wellness
- Jantares temáticos, plant-based e harmonizações
- Bebidas alcoólicas e não alcoólicas premium inclusas nos principais planos`
      },
      {
        id: "activities",
        title: "Atividades",
        type: "text",
        content: `Atividades Gratuitas:

- Aulas diárias: yoga, pilates, breathwork, sound healing, movimento consciente
- Trilha ecológica, beach walk, oficinas de Aktar
- Hydrotherapy circuit no Areka Spa
- Academia, quadras de esportes, beach volley
- Sauna, banho turco, Watsu pool
- Workshop de culinária bem-estar
- Ritual de pôr do sol, programação artística, oficinas de criatividade
- Bicicletas para passeios e trilhas
- Snorkeling guiado, caiaque, SUP, pedalinho

Atividades com Custo Extra:

- Tratamentos signature no Areka Spa (massagens, terapias holísticas, ayurvédicas, medicina funcional, nutrição, bioscanning)
- Wellness immersions: programas multidia customizados (sono, detox, microbioma, fitness)
- Consulta com médicos internacionais
- Excursões: sandbank picnic, dolphin cruise, iate privativo, pescaria, visitas a ilha local
- Mergulho PADI, cursos avançados, experiências marinhas guiadas
- Jantares privativos, experiências na sala do chef, degustações de vinhos rare
- Fotos profissionais, babá, aulas privadas`
      },
      {
        id: "accommodations-text",
        title: "Acomodação",
        type: "text",
        content: `Ocean Pool Villa, Sunset Water Villa:

- Design contemporâneo integrado à natureza, cores suaves, teto alto, vidros panorâmicos
- Cama king-size, daybed, banheiro aberto com banheira imersa (e externa em algumas categorias), amenities aromaterapia
- Menu de travesseiros, minibar premium, adega de vinhos
- Soundbar, smart TV, Wi-Fi, bicicletas particulares, serviço Jadugar 24h
- Todas com privacidade total, arrumação 2x/dia, room service 24h`
      },
      {
        id: "families",
        title: "Famílias e Diferenciais",
        type: "text",
        content: `Política para Crianças:

- Resort majoritariamente adults only, aceita famílias em villas residenciais e mediante política sob consulta
- Kids amenities sob demanda, serviço de babá (extra), atividades criativas sob agendamento

Diferenciais:

- Experiências específicas para casais, retiros wellness, cerimônias personalizadas, elopements e celebrações privadas
- Spa subaquático, excursões exclusivas, mentoria fitness e nutrição
- Consultoria wellness multidisciplinar (especialistas residentes e convidados)
- Programa de sustentabilidade ativo: arquitetura biophilic, preservação da natureza, uso de energias limpas, cardápios responsáveis
- Premiações: MICHELIN Keys, Forbes 5-Star, referência mundial em wellness de altíssimo padrão`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "68 villas (praia e sobre a água), todas com piscina privativa, serviço de mordomo Jadugar e design contemporâneo integrado à natureza.",
      types: [
        {
          name: "Ocean Pool Villa",
          size: "Consultar",
          beds: "King-size",
          maxOccupancy: "2 adultos",
          features: [
            "Piscina privativa",
            "Design contemporâneo integrado à natureza",
            "Cores suaves, teto alto, vidros panorâmicos",
            "Daybed confortável",
            "Banheiro aberto com banheira imersa",
            "Amenities aromaterapia premium",
            "Menu de travesseiros",
            "Minibar premium e adega de vinhos",
            "Soundbar e Smart TV",
            "Wi-Fi premium",
            "Bicicletas particulares",
            "Serviço de mordomo Jadugar 24h",
            "Arrumação 2x ao dia",
            "Room service 24h"
          ]
        },
        {
          name: "Sunset Water Villa",
          size: "Consultar",
          beds: "King-size",
          maxOccupancy: "2 adultos",
          features: [
            "Piscina privativa sobre a água",
            "Vista privilegiada do pôr do sol",
            "Design contemporâneo integrado à natureza",
            "Banheiro aberto e banheira externa",
            "Amenities aromaterapia premium",
            "Menu de travesseiros",
            "Minibar premium e adega de vinhos",
            "Soundbar e Smart TV",
            "Wi-Fi premium",
            "Bicicletas particulares",
            "Serviço de mordomo Jadugar 24h",
            "Privacidade total",
            "Arrumação 2x ao dia",
            "Room service 24h"
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
          priceSubtext: "7 noites com wellness benefits"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "7 noites com wellness benefits"
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
        question: "O que torna o JOALI BEING especial?",
        answer: "JOALI BEING é um resort 7 estrelas ultraexclusivo com foco em bem-estar integral. Aberto em 2021, possui 68 villas com piscina privativa, arquitetura biophilic, serviço de mordomo Jadugar personalizado, Areka Spa com hidroterapia exclusiva, programas wellness customizados e gastronomia 'earth to table'. Premiado com Forbes 5-Star e MICHELIN Keys, é referência mundial em wellness de altíssimo padrão."
      },
      {
        question: "O que está incluído no pacote?",
        answer: "Inclui café da manhã 'earth to table', serviço de mordomo Jadugar 24h, minibar premium, amenities sustentáveis, Wi-Fi, bicicletas, equipamento de snorkeling, esportes aquáticos não motorizados, fitness center, welcome ritual, kit herbal Aktar, programação wellness diária (yoga, pilates, breathwork, meditação), cinema sob as estrelas, ritual do pôr do sol e arrumação 2x ao dia."
      },
      {
        question: "Quais benefícios de bem-estar estão inclusos?",
        answer: "Consulta inicial no Areka Spa, crédito/dia para spa nos principais programas, acesso exclusivo à hidroterapia (Watsu pool, haloterapia, sauna, banho turco), aulas diárias de yoga/breathwork/pilates/meditação/sound healing, uso do herbal centre Aktar com oficinas, mentoria wellness com profissionais internacionais, ritual de sono, jornada de nutrição e experiências biophilic."
      },
      {
        question: "Quais restaurantes o resort oferece?",
        answer: "FLOW (restaurante principal 'earth to table' saudável e criativo), MOJO (beach club mediterrâneo com frutos do mar e drinks wellness), Su (asiático de especialidade), sala privada de jantar/chef's table, Aktar Bar (infusões e elixires naturais), além de room service 24h e experiências gastronômicas privativas como floating breakfast e sandbank dinner."
      },
      {
        question: "O que é o Areka Spa?",
        answer: "Areka Spa é um spa de wellness de classe mundial com tratamentos signature, terapias holísticas, ayurvédicas, medicina funcional, nutrição e bioscanning. Oferece hidroterapia exclusiva (Watsu pool, haloterapia, sauna, banho turco) e wellness immersions customizados (programas multidia para sono, detox, microbioma, fitness) com especialistas internacionais."
      },
      {
        question: "O que é o serviço de mordomo Jadugar?",
        answer: "Jadugar é o serviço de mordomo personalizado 24h disponível em todas as villas. O mordomo auxilia com todas as necessidades durante a estadia, desde reservas e experiências especiais até cuidados personalizados, garantindo uma experiência transformadora de altíssimo padrão."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "O JOALI BEING é majoritariamente adults only, focado em wellness e retiros para casais. Aceita famílias em villas residenciais específicas e mediante política sob consulta. Kids amenities disponíveis sob demanda, serviço de babá (extra) e atividades criativas sob agendamento."
      },
      {
        question: "Quais experiências wellness estão disponíveis?",
        answer: "Consulta wellness inicial, programas multidia customizados (sono, detox, microbioma, fitness), tratamentos no Areka Spa, hidroterapia completa, aulas diárias de yoga/pilates/breathwork/meditação/sound healing, workshops no herbal centre Aktar, mentoria com profissionais internacionais, nutrição personalizada e experiências biophilic de detox digital."
      },
      {
        question: "Como é o acesso ao resort?",
        answer: "O traslado é feito via hidroavião privativo (cerca de 40 minutos do Aeroporto Internacional de Malé até a ilha Bodufushi no Atol Raa). Os hóspedes são recebidos no lounge VIP JOALI antes do embarque, garantindo uma experiência luxuosa desde o início."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "JOALI BEING - Vista aérea do resort wellness"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean Pool Villa - design biophilic"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Sunset Water Villa - pôr do sol sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Areka Spa - tratamentos wellness"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Yoga e meditação ao ar livre"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "FLOW Restaurant - gastronomia earth to table"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "MOJO Beach Club - culinária mediterrânea"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Aktar Herbal Centre - workshops wellness"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Hidroterapia - Watsu pool exclusiva"
      }
    ]
  },
  "joali-maldives": {
    slug: "joali-maldives",
    name: "JOALI Maldives",
    rating: 6,
    location: "Ilha Muravandhoo, Atol de Raa",
    transferTime: "Hidroavião 40min ou voo doméstico 35min + lancha 15min",
    heroImage: heroImage,
    heroTitle: "JOALI Maldives",
    heroSubtitle: "Resort de luxo 6 estrelas com foco em arte contemporânea e experiências inovadoras",
    heroHighlights: ["Arte & Design", "73 Villas Privativas", "Spa Forbes 5-Star"],
    seoTitle: "JOALI Maldives - Resort 6★ Arte e Luxo | Follow Me Viagens",
    seoDescription: "Resort de luxo 6 estrelas no Atol de Raa com 73 villas privativas, arte contemporânea, spa Forbes 5-Star, 6 restaurantes de alto padrão e programas de sustentabilidade. #1 Ásia T+L 2025.",
    about: "JOALI Maldives é um resort de luxo 6 estrelas situado na Ilha Muravandhoo, Atol de Raa, no extremo norte das Maldivas, a 171 km de Malé. O acesso é feito por hidroavião (40 min, recomendado) ou voo doméstico até Ifuru (35 min) + lancha rápida (15 min). O JOALI Maldives é ideal para quem busca luxo, arte, wellness, gastronomia e experiências inovadoras, em cenário paradisíaco e sustentável das Maldivas.",
    sections: [
      {
        id: "activities",
        title: "Atividades, Wellness e Sustentabilidade",
        type: "text",
        content: `Wellness e Fitness:

- Spa premiado (cinco estrelas Forbes)
- Pavilhão de yoga
- Academia Technogym
- Quadra de tênis
- Watersports center completo
- Yoga, meditação, wellness programs
- Fitness e personal trainer

Arte e Cultura:

- Estúdio de arte interativo
- Boutique Maison de Joali
- Workshops de arte
- Biblioteca
- Cinema open-air
- Eventos musicais e temáticos

Para Famílias:

- Kids Club completo
- Casa na árvore
- Playground
- Experiências de arte para crianças

Atividades Aquáticas:

- Snorkeling guiado
- Mergulho PADI
- Caiaque, SUP, windsurf
- Pesca
- Centro marinho com programas de restauração de corais

Sustentabilidade:

- Programas de restauração de corais
- Mínima intervenção na vegetação
- Banimento de plásticos descartáveis
- Trilhas ecológicas
- Atividades culturais focadas em preservação`
      },
      {
        id: "dining",
        title: "Gastronomia e Bares",
        type: "text",
        content: `Restaurantes:

- Saoke: japonês e nipo-peruano projetado sobre o mar, arquitetura Noriyoshi Muramatsu
- Bellinis: italiano do chef Michelin Theodor Falser
- Vandhoo: internacional, café da manhã e pratos globais
- Tuh'u: mediterrâneo ao ar livre
- Mura Bar: drinks, snacks, pratos descontraídos, sunsets
- La Joie: sorveteria e sobremesas

Experiências Gastronômicas Especiais:

- Jantares privativos na villa
- Sandbank dining experiences
- Degustações de vinhos
- Floating breakfast
- Cardápios kids e menus sazonais
- Cozinha saudável personalizada`
      },
      {
        id: "accommodations-text",
        title: "Acomodação",
        type: "text",
        content: `73 Villas Ultra Privativas:

- Vilas na praia ou sobre a água
- Todas com piscina privativa
- Design contemporâneo com foco em arte
- Alta tecnologia integrada
- Sensação "art gallery" em cada villa
- Serviço de mordomo Jadugar personalizado
- Amenities premium e sustentáveis
- Privacidade total
- Arrumação 2x ao dia
- Room service de alto padrão`
      },
      {
        id: "families",
        title: "Diferenciais, Famílias e Casais",
        type: "text",
        content: `Diferenciais do Resort:

- Destaque em arte contemporânea e design
- Sensação "art gallery" única nas Maldivas
- Spa Forbes 5-Star
- Premiações recentes: #1 Ásia e Top 10 Mundial (T+L 2025)
- Centro marinho com programas de restauração de corais
- Práticas sustentáveis exemplares

Para Famílias:

- Kids até 12 anos: estadia gratuita com pais (máx. 2/villa em promoções)
- Kids Club completo com atividades criativas
- Menu infantil em todos os restaurantes
- Experiências de arte para crianças
- Casa na árvore e playground
- Babá disponível (custo extra)
- Villas família com espaço amplo
- Amenidades kids sob demanda

Para Casais:

- Privacidade excepcional em todas as villas
- Amenidades especiais para honeymoon
- Programas wellness para casais
- Experiências gastronômicas românticas
- Jantares privativos na praia ou sandbank
- Spa treatments para casais
- Serviço altamente personalizado com mordomo Jadugar`
      }
    ],
    accommodations: {
      title: "Acomodações de Luxo",
      description: "73 villas ultra privativas distribuídas entre praia e sobre a água, todas com piscina privativa, design contemporâneo focado em arte e serviço de mordomo Jadugar.",
      types: [
        {
          name: "Beach Villa",
          size: "Consultar",
          beds: "King-size",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Piscina privativa",
            "Design contemporâneo com arte",
            "Acesso direto à praia",
            "Alta tecnologia integrada",
            "Sensação 'art gallery'",
            "Serviço de mordomo Jadugar",
            "Amenities premium sustentáveis",
            "Área de estar espaçosa",
            "Banheiro luxuoso",
            "Terraço privativo",
            "Arrumação 2x ao dia",
            "Room service premium"
          ]
        },
        {
          name: "Water Villa",
          size: "Consultar",
          beds: "King-size",
          maxOccupancy: "2 adultos + 2 crianças",
          features: [
            "Piscina privativa sobre a água",
            "Design contemporâneo com arte",
            "Acesso direto ao mar",
            "Alta tecnologia integrada",
            "Sensação 'art gallery'",
            "Serviço de mordomo Jadugar",
            "Amenities premium sustentáveis",
            "Deck amplo sobre a água",
            "Banheiro com vista panorâmica",
            "Privacidade total",
            "Arrumação 2x ao dia",
            "Room service premium"
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
      cancellationPolicy: "Cancelamento com até 30 dias de antecedência: reembolso de 80% do valor pago.",
      notes: "Os valores estão sujeitos a alteração sem aviso prévio. Consulte-nos para obter cotações atualizadas e disponibilidade."
    },
    faqs: [
      {
        question: "O que torna o JOALI Maldives especial?",
        answer: "JOALI Maldives é único por seu foco em arte contemporânea, criando uma sensação de 'art gallery' em todo o resort. Possui 73 villas ultra privativas com piscina, spa Forbes 5-Star, 6 restaurantes de alto padrão incluindo o Saoke sobre o mar e Bellinis do chef Michelin Theodor Falser. Foi premiado como #1 na Ásia e Top 10 Mundial pela T+L 2025."
      },
      {
        question: "Como é o acesso ao resort?",
        answer: "O acesso é feito por hidroavião (40 minutos de Malé, recomendado) ou voo doméstico até Ifuru (35 minutos) seguido de lancha rápida (15 minutos). O resort está localizado na Ilha Muravandhoo, Atol de Raa, a 171 km de Malé."
      },
      {
        question: "Quais restaurantes o resort oferece?",
        answer: "O resort possui 6 opções gastronômicas: Saoke (japonês e nipo-peruano sobre o mar), Bellinis (italiano do chef Michelin Theodor Falser), Vandhoo (internacional), Tuh'u (mediterrâneo ao ar livre), Mura Bar (drinks e sunsets) e La Joie (sorveteria e sobremesas). Oferece também experiências privativas como jantares na villa, sandbank dining e floating breakfast."
      },
      {
        question: "O resort é adequado para famílias?",
        answer: "Sim, é ideal para famílias. Possui Kids Club completo, casa na árvore, playground, menu infantil em todos os restaurantes, experiências de arte para crianças e villas família espaçosas. Até 2 crianças de até 12 anos podem ficar gratuitamente com os pais (em promoções). Babá disponível com custo extra."
      },
      {
        question: "O que é o spa do JOALI Maldives?",
        answer: "O resort possui um spa premiado com cinco estrelas Forbes, oferecendo tratamentos de altíssimo padrão, wellness programs personalizados, yoga, meditação, academia Technogym e personal trainer. É referência em wellness e relaxamento nas Maldivas."
      },
      {
        question: "O que é o serviço de mordomo Jadugar?",
        answer: "Jadugar é o serviço de mordomo personalizado disponível em todas as villas. O mordomo auxilia com todas as necessidades durante a estadia, desde reservas e experiências especiais até cuidados personalizados, garantindo uma experiência de alto padrão."
      },
      {
        question: "Quais atividades aquáticas estão disponíveis?",
        answer: "O resort oferece snorkeling guiado, mergulho PADI, caiaque, SUP, windsurf e pesca. Possui um centro marinho com programas de restauração de corais e watersports center completo. Todas as atividades são conduzidas com foco em sustentabilidade."
      },
      {
        question: "O resort é sustentável?",
        answer: "Sim, o JOALI Maldives possui práticas sustentáveis exemplares incluindo programas de restauração de corais, mínima intervenção na vegetação nativa, banimento total de plásticos descartáveis, trilhas ecológicas e atividades culturais focadas em preservação ambiental."
      },
      {
        question: "O resort é adequado para lua de mel?",
        answer: "Sim, é perfeito para lua de mel. Oferece privacidade excepcional em todas as villas, amenidades especiais para honeymoon, programas wellness para casais, experiências gastronômicas românticas, jantares privativos na praia ou sandbank, spa treatments para casais e serviço altamente personalizado."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "JOALI Maldives - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Beach Villa - design contemporâneo com arte"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Water Villa - sobre a água com piscina privativa"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa Forbes 5-Star - tratamentos de luxo"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "Vandhoo Restaurant - café da manhã internacional"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Saoke Restaurant - japonês sobre o mar"
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670",
        alt: "Kids Club - casa na árvore e playground"
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2680",
        alt: "Arte contemporânea - galeria interativa"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Centro marinho - restauração de corais"
      }
    ]
  },
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
  "kudadoo": {
    slug: "kudadoo",
    name: "Kudadoo Maldives Private Island",
    rating: 7,
    location: "Atol Lhaviyani",
    transferTime: "Hidroavião 40min",
    heroImage: heroImage,
    heroTitle: "Kudadoo Maldives Private Island",
    heroSubtitle: "Resort 7 estrelas ultra exclusivo 100% all inclusive AAA e sustentável",
    heroHighlights: ["All Inclusive AAA", "15 Ocean Residences", "100% Solar Powered"],
    seoTitle: "Kudadoo Maldives Private Island - Resort 7★ Ultra Exclusivo | Follow Me Viagens",
    seoDescription: "Resort 7 estrelas ultra exclusivo no Atol Lhaviyani com apenas 15 residências, 100% all inclusive AAA, spa ilimitado, esportes aquáticos motorizados e energia 100% solar.",
    about: "Kudadoo Maldives Private Island é um resort 7 estrelas ultra exclusivo, reconhecido internacionalmente por seu conceito 100% all inclusive e sustentabilidade. Localizado no Atol Lhaviyani, a cerca de 40 minutos de hidroavião de Malé, o hotel dispõe de apenas 15 Ocean Residences sobre a água, todas com piscina privativa, serviço de mordomo e design sustentável premiado. A experiência é personalizada: o plano AAA (Anything, Anytime, Anywhere) inclui todas as refeições, bebidas premium, spa ilimitado, esportes aquáticos motorizados e não motorizados, excursões personalizadas, experiências gastronômicas e acesso livre ao Hurawalhi, resort-irmão próximo. O resort é alimentado totalmente por energia solar, opera com desalinização própria de água e é referência internacional em hospitalidade ambientalmente responsável.",
    sections: [
      {
        id: "inclusions",
        title: "Inclusões do Pacote (All Inclusive AAA)",
        type: "text",
        content: `O conceito AAA (Anything, Anytime, Anywhere) inclui:

- Todas as refeições: café da manhã, almoço, jantar e snacks
- Todas as bebidas alcoólicas e não alcoólicas premium
- Minibar renovado diariamente
- Champanhe à chegada
- Room service 24h
- Spa SULHA: todos os tratamentos ilimitados (massagens, terapias holísticas, banho à luz de velas, sauna, steam room, hidroterapia, yoga)
- Todos os esportes aquáticos motorizados: jet ski, parasailing
- Todos os esportes aquáticos não motorizados: windsurf, caiaque, SUP, paddleboard
- Mergulho PADI ilimitado: batismo, cursos, night dive, snorkeling
- Barco privativo, pesca esportiva
- Excursões privadas: dolphin cruise, sunset tour, sandbank picnic, visita à ilha local
- Acesso livre aos 2 restaurantes do Hurawalhi Resort (Kashibo e Canneli)
- Academia, quadras de tênis, golf, salão de jogos
- Cinema open-air, noites culturais, eventos artísticos
- Aulas de culinária e degustação de vinhos
- Consultoria wellness, workshops ambientais
- Programação de yoga guiada
- Wi-Fi premium
- Serviço de mordomo 24h
- Traslado de hidroavião`
      },
      {
        id: "gastronomy",
        title: "Gastronomia",
        type: "text",
        content: `Experiências gastronômicas incluídas (All Inclusive AAA):

- Jantares privativos na villa
- Piqueniques em Dream Island
- Menus personalizados "earth to table"
- Experiências no restaurante The Retreat
- Beach dining sob palmeiras tropicais
- Acesso livre a 2 restaurantes do Hurawalhi Resort (Kashibo e Canneli), a 5 minutos de lancha privativa
- Bebidas alcoólicas e não alcoólicas premium
- Minibar renovado diariamente
- Cocktails sob demanda
- Champanhe à chegada

Experiências especiais incluídas:

- Floating breakfast
- Beach BBQ
- Chef privado na villa
- Sandbank picnics
- Degustações de vinhos
- Alimentos frescos, menus plant-based e orgânicos disponíveis sob consulta`
      },
      {
        id: "activities",
        title: "Atividades e Experiências",
        type: "text",
        content: `Spa SULHA (ilimitado e incluso):

- Todos os tratamentos disponíveis
- Terapias holísticas, massagens
- Banho à luz de velas
- Sauna, steam room, hidroterapia
- Yoga

Esportes aquáticos (SEM LIMITE, todos inclusos):

- Motorizados: jet ski, parasailing
- Não motorizados: windsurf, caiaque, SUP, paddleboard
- Mergulho PADI: batismo, cursos, night dive
- Snorkeling no house reef (acesso fácil, tartarugas e golfinhos frequentes)
- Barco privativo
- Pesca esportiva
- Trilha ecológica

Excursões privadas incluídas:

- Dolphin cruise
- Sunset tour
- Sandbank picnic
- Visita à ilha local
- Experiências personalizadas

Outras atividades incluídas:

- Academia
- Quadras de tênis
- Golf (próximo ou no local)
- Salão de jogos
- Cinema open-air
- Noites culturais
- Eventos artísticos temáticos
- Aulas de culinária
- Degustação de vinhos
- Consultoria wellness
- Workshops ambientais
- Visita a centro marinho do Hurawalhi
- Programação de bem-estar/yoga guiada`
      },
      {
        id: "sustainability",
        title: "Sustentabilidade & Diferenciais",
        type: "text",
        content: `Sustentabilidade pioneira:

- Único resort das Maldivas 100% solar powered
- 928 painéis solares de última geração
- Desalinização própria de água
- Hotel livre de plásticos
- Amenities biodegradáveis
- Menus eco-friendly
- Informações ambientais para hóspedes
- Equipe treinada em práticas sustentáveis

Prêmios e reconhecimentos:

- Luxury Travel Intelligence – melhor hotel novo de luxo do mundo 2018
- Robb Report - melhor ilha-resort do mundo 2019
- Hospitality Design Award 2019 - sustentabilidade

Diferenciais exclusivos:

- Apenas 15 Ocean Residences (ultra exclusivo)
- Conceito AAA: Anything, Anytime, Anywhere
- Serviço de mordomo 24h
- Acesso livre ao Hurawalhi Resort
- Spa ilimitado
- Todos os esportes aquáticos inclusos (motorizados e não motorizados)
- Todas as excursões incluídas
- Chef privado disponível
- Alto padrão de privacidade e personalização`
      },
      {
        id: "accommodations-text",
        title: "Acomodações",
        type: "text",
        content: `15 Ocean Private Pool Residences (1 e 2 quartos):

Características:

- Localizadas sobre a lagoa
- Piscina infinita privativa
- Terraço amplo
- Banheiro duplo com banheira de imersão
- Lounge interno
- Área gourmet
- Mesa externa
- Minibar premium abastecido diariamente
- Amenities personalizadas
- Menu de travesseiros
- Cama king-size
- Opções conectáveis para famílias

Amenidades e serviços:

- Alto padrão de privacidade e insonorização
- Varanda mobiliada
- Sala de jantar interna/externa
- Ar-condicionado
- Wi-Fi premium
- Room service 24h
- Mordomo privado 24h
- Amenities eco-friendly
- Detalhes personalizados (nome do hóspede, snacks, amenities à chegada)`
      },
      {
        id: "families",
        title: "Famílias, Celebrações e Exclusividade",
        type: "text",
        content: `Para famílias e grupos:

- Villas conectáveis para famílias/grupos privados
- Privacidade extrema com apenas 15 residências no resort

Ideal para celebrações:

- Resort sobre medida para lua de mel
- Casamentos e celebrações pequenas e exclusivas
- Consultoria para honeymooners e elopement
- Cerimônias privativas
- Eventos temáticos

Serviços exclusivos:

- Serviço de mordomo (butler) 24h
- Chef privado
- Experiências artísticas e wellness
- Personalização extrema
- Conceito AAA: Anything, Anytime, Anywhere (tudo, a qualquer hora, em qualquer lugar)`
      }
    ],
    accommodations: {
      title: "Ocean Private Pool Residences",
      description: "Apenas 15 residências ultra exclusivas sobre a água, todas com piscina privativa, serviço de mordomo 24h e design sustentável premiado.",
      types: [
        {
          name: "Ocean Private Pool Residence (1 Quarto)",
          size: "Ampla residência sobre a água",
          beds: "King-size",
          maxOccupancy: "2 adultos + 1 criança",
          features: [
            "Piscina infinita privativa",
            "Terraço amplo com área gourmet",
            "Banheiro duplo com banheira de imersão",
            "Lounge interno espaçoso",
            "Sala de jantar interna/externa",
            "Mesa externa com vista",
            "Minibar premium abastecido diariamente",
            "Cama king-size com menu de travesseiros",
            "Varanda mobiliada",
            "Ar-condicionado",
            "Wi-Fi premium",
            "Amenities eco-friendly personalizadas",
            "Room service 24h",
            "Mordomo privado 24h",
            "Alto padrão de insonorização e privacidade"
          ]
        },
        {
          name: "Ocean Private Pool Residence (2 Quartos)",
          size: "Residência familiar sobre a água",
          beds: "King-size + quarto adicional",
          maxOccupancy: "4 adultos + 2 crianças",
          features: [
            "Dois quartos com camas king-size",
            "Piscina infinita privativa ampliada",
            "Terraço expansivo com área gourmet",
            "Banheiros duplos com banheiras de imersão",
            "Lounge interno espaçoso",
            "Salas de jantar interna/externa",
            "Mesa externa com vista panorâmica",
            "Minibar premium abastecido",
            "Menu de travesseiros",
            "Varandas mobiliadas",
            "Ar-condicionado em todos os ambientes",
            "Wi-Fi premium",
            "Amenities eco-friendly",
            "Room service 24h",
            "Mordomo privado 24h",
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
          priceSubtext: "por pessoa, por noite, all inclusive AAA"
        },
        {
          name: "Alta Temporada",
          period: "Novembro a Abril",
          priceText: "Sob consulta",
          priceSubtext: "por pessoa, por noite, all inclusive AAA"
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
        answer: "O traslado é feito por hidroavião e leva cerca de 40 minutos do Aeroporto Internacional de Malé até o Kudadoo Maldives Private Island. O traslado está incluído no pacote."
      },
      {
        question: "O resort é adequado para famílias com crianças?",
        answer: "Sim, o resort oferece villas conectáveis de 1 e 2 quartos ideais para famílias e grupos. Com apenas 15 residências, garante privacidade extrema. Todas as atividades, spa, esportes aquáticos e experiências gastronômicas estão incluídas no conceito AAA."
      },
      {
        question: "O que significa o conceito AAA (Anything, Anytime, Anywhere)?",
        answer: "AAA significa tudo incluído, sem limites: todas as refeições, bebidas premium, spa ilimitado, todos os esportes aquáticos (motorizados e não motorizados), mergulho PADI, excursões privadas, acesso ao Hurawalhi Resort, room service 24h, mordomo 24h e experiências personalizadas. Verdadeiro all inclusive de luxo sem restrições."
      },
      {
        question: "Quais restaurantes estão disponíveis?",
        answer: "O resort oferece The Retreat, experiências gastronômicas privativas na villa, beach dining, piqueniques em Dream Island e acesso livre aos 2 restaurantes do Hurawalhi Resort (Kashibo e Canneli). Chef privado, floating breakfast, beach BBQ, sandbank picnics e degustações de vinhos estão incluídos."
      },
      {
        question: "Quais atividades estão incluídas?",
        answer: "TODAS as atividades estão incluídas no AAA: spa SULHA ilimitado (todos os tratamentos), esportes aquáticos motorizados (jet ski, parasailing), não motorizados (windsurf, caiaque, SUP), mergulho PADI (cursos, batismo, night dive), snorkeling, barco privativo, pesca, excursões (dolphin cruise, sunset tour, sandbank picnic), academia, tênis, golf, cinema, aulas de culinária, yoga, consultoria wellness e workshops ambientais."
      },
      {
        question: "O spa está incluído?",
        answer: "Sim, o Spa SULHA está 100% incluído e ILIMITADO. Todos os tratamentos disponíveis: massagens, terapias holísticas, banho à luz de velas, sauna, steam room, hidroterapia e yoga. Sem custos adicionais."
      },
      {
        question: "O que diferencia o Kudadoo Maldives?",
        answer: "Kudadoo é o único resort 7 estrelas das Maldivas 100% solar powered (928 painéis solares), com apenas 15 residências ultra exclusivas. Conceito AAA único (tudo incluído sem limites), spa ilimitado, todos esportes aquáticos motorizados inclusos, mordomo 24h, acesso ao Hurawalhi Resort, prêmios internacionais de sustentabilidade e luxo, e personalização extrema. Referência mundial em hospitalidade sustentável de alto padrão."
      },
      {
        question: "O resort é sustentável?",
        answer: "Sim, Kudadoo é pioneiro em sustentabilidade: único resort 100% solar powered das Maldivas, com 928 painéis solares, desalinização própria, livre de plásticos, amenities biodegradáveis e práticas eco-friendly em todas operações. Premiado com Hospitality Design Award 2019 de sustentabilidade."
      }
    ],
    images: [
      {
        src: heroImage,
        alt: "Kudadoo Maldives Private Island - Vista aérea do resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670",
        alt: "Ocean Private Pool Residence - residência sobre a água"
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
        alt: "Piscina infinita privativa ao pôr do sol"
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680",
        alt: "Spa SULHA - tratamentos ilimitados"
      },
      {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670",
        alt: "The Retreat - experiência gastronômica"
      },
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670",
        alt: "Beach dining - jantar na praia"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670",
        alt: "Painéis solares - sustentabilidade 100%"
      },
      {
        src: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=2670",
        alt: "Terraço privativo com área gourmet"
      },
      {
        src: "https://images.unsplash.com/photo-1587502536785-89fba1def866?q=80&w=2670",
        alt: "Mergulho PADI - ilimitado e incluso"
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670",
        alt: "Snorkeling no house reef"
      }
    ]
  },
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
  [vakkaruMaldives.slug]: vakkaruMaldives
};
