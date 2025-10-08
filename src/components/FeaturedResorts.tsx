import ResortCard from "./ResortCard";
import resort1 from "@/assets/resort-1.jpg";
import resort2 from "@/assets/resort-2.jpg";
import resort3 from "@/assets/resort-3.jpg";
const FeaturedResorts = () => {
  const resorts = [{
    name: "Velaa Private Island Maldives",
    location: "Noonu Atoll, Maldivas",
    rating: 5,
    price: 9400,
    image: resort1,
    category: "Lua de Mel",
    description: "4 noites em Sunset Lagoon Villa com experiência completa",
    inclusions: [
      "4 noites em Sunset Lagoon Villa (apartamento duplex)",
      "Praia privativa e segura ao lado da acomodação",
      "Todas as refeições inclusas em restaurantes familiares",
      "Transfers de hidroavião incluídos",
      "Café da manhã flutuante + cesta de boas-vindas na chegada",
      "Crianças grátis: desconto para menores de 12, menores de 2 anos grátis",
      "Amenidades especiais para crianças (brinquedos, jogos, roupões personalizados)",
      "Bicicletas para toda a família com nomes personalizados",
      "Equipamento de snorkel para adultos e crianças",
      "Esportes aquáticos não motorizados para todas as idades",
      "Atividades exclusivas: manta ray watching, caça ao tesouro e noites de contação de histórias",
      "Muito mais para toda a família"
    ]
  }, {
    name: "Soneva Jani",
    location: "Medhufaru Island, Maldivas",
    rating: 5,
    price: 11200,
    image: resort2,
    category: "Luxo Premium",
    description: "5 noites em Overwater Pool Villa com experiências românticas exclusivas",
    inclusions: [
      "5 noites em Overwater Pool Villa com rede e banheira com vista para o oceano",
      "Todas as refeições inclusas e bebidas ilimitadas",
      "Transfers de hidroavião para dois",
      "Reposição diária de minibar com bebidas",
      "Aulas de yoga matinais e noturnas",
      "Chocolate diário para momentos especiais",
      "Café da manhã flutuante na piscina privativa",
      "Champagne de boas-vindas",
      "Massagem para casal",
      "Jantar romântico à luz de velas na praia",
      "Experiências exclusivas e inesquecíveis"
    ]
  }, {
    name: "Six Senses Laamu",
    location: "Laamu Atoll, Maldivas",
    rating: 5,
    price: 7400,
    image: resort3,
    category: "Família",
    description: "5 noites no santuário de Ocean Pool Villa com programa completo de bem-estar",
    inclusions: [
      "5 noites no santuário de Ocean Pool Villa privativo",
      "Consulta de bem-estar personalizada antes da chegada",
      "Massagem terapêutica completa Four Pillar Signature",
      "Terapia aquática (Watsu ou Hammam)",
      "Sessões de terapia sonora ou AKTAR Mind Therapy",
      "Yoga, meditação ou pilates diários",
      "Chás e blends naturais desenvolvidos por especialistas",
      "Consultas especializadas (Ayurveda, Naturopatia, TCM ou Homeopatia)",
      "Aulas de culinária e workshops nutricionais",
      "Tratamentos restauradores de cabelo e couro cabeludo no Flora Lab",
      "Orientação de bem-estar para continuar saudável em casa"
    ]
  }];
  return <section id="resorts" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in px-4">
          <span className="inline-flex items-center gap-2 text-primary font-semibold sm:text-sm uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 text-xs">Pacotes Exclusivos</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground mb-6 sm:mb-8 tracking-tight text-balance leading-tight">
            Seleção Premium
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-light tracking-luxury">
            Cuidadosamente selecionados para proporcionar experiências 
            extraordinárias e momentos inesquecíveis
          </p>
        </div>

        {/* Resort Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resorts.map((resort, index) => <div key={index} className="animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <ResortCard {...resort} />
            </div>)}
        </div>

        {/* View All Link */}
        <div className="text-center px-4">
          <a href="#all-resorts" className="inline-flex items-center gap-2 px-6 py-3 text-foreground font-semibold hover:text-primary transition-all duration-300 group tracking-luxury bg-white/50 backdrop-blur-sm rounded-full border border-foreground/10 hover:border-primary/30 hover:bg-white/70">
            <span className="relative text-sm">
              Ver todos os 50+ resorts disponíveis
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>;
};
export default FeaturedResorts;