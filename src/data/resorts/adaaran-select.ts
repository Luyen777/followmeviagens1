import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";
import adaaranOverwaterVillasAerial from "@/assets/adaaran-select/overwater-villas-aerial.jpg";
import adaaranBeachVillasAerial from "@/assets/adaaran-select/beach-villas-aerial.jpg";
import adaaranBuffetRestaurant from "@/assets/adaaran-select/buffet-restaurant.jpg";
import adaaranSunsetVillaInterior from "@/assets/adaaran-select/sunset-villa-interior.jpg";
import adaaranDivingCoralReef from "@/assets/adaaran-select/diving-coral-reef.jpg";
import adaaranVillaBathroomOceanView from "@/assets/adaaran-select/villa-bathroom-ocean-view.jpg";
import adaaranMainRestaurantInterior from "@/assets/adaaran-select/main-restaurant-interior.jpg";
import adaaranSunsetWaterVillaRoom from "@/assets/adaaran-select/sunset-water-villa-room.jpg";
import adaaranResortAerialPool from "@/assets/adaaran-select/resort-aerial-pool.jpg";
import adaaranIslandAerialView from "@/assets/adaaran-select/island-aerial-view.jpg";

export const adaaranSelect: ResortData = {
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
  };

export default adaaranSelect;
