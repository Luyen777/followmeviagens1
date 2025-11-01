import { ResortData } from '../types';
import heroImage from "@/assets/maldives-hero-latest.avif";

export const leMeridien: ResortData = {
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
  };

export default leMeridien;
