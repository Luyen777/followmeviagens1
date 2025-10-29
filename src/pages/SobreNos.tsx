import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MapPin, Users, Headphones, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { useScrollReveal, useScrollRevealGroup } from "@/hooks/useScrollReveal";

// Images
import equipeFollowMe from "@/assets/equipe-follow-me.jpg";
import famososCollage from "@/assets/famosos-collage.jpg";

const SobreNos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll reveal refs
  const heroTitleRef = useScrollReveal({ delay: 0, once: true });
  const heroSubtitleRef = useScrollReveal({ delay: 200, once: true });
  const heroParagraphsRef = useScrollRevealGroup(3, { staggerDelay: 150, once: true });
  
  const instagramContentRef = useScrollReveal({ delay: 0, once: true });
  const instagramStatsRef = useScrollReveal({ delay: 200, once: true });
  
  const clienteleHeaderRef = useScrollReveal({ delay: 0, once: true });
  const clienteleContentRef = useScrollReveal({ delay: 200, once: true });
  
  const teamHeaderRef = useScrollReveal({ delay: 0, once: true });
  const teamContentRef = useScrollReveal({ delay: 200, once: true });
  const teamFeaturesRef = useScrollRevealGroup(3, { staggerDelay: 150, once: true });

  const ctaRef = useScrollReveal({ delay: 0, once: true });
  const famososImageRef = useScrollReveal({ delay: 200, once: true });

  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/followmemaldives", "_blank");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEOHead
        title="Sobre Nós - Follow Me Viagens | 20 Anos de Expertise em Destinos Exóticos"
        description="Conheça a Follow Me Viagens: 20 anos de experiência em turismo de luxo, especialistas em Maldivas e Ásia. Mais de 200 mil seguidores."
        canonicalUrl="/sobre-nos"
        keywords={["sobre follow me viagens", "agência de viagens maldivas", "especialistas maldivas são paulo", "turismo de luxo brasil", "agência viagens exóticas"]}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          
          <div className="max-w-5xl mx-auto text-center">
            <div ref={heroTitleRef} className="scroll-reveal scroll-reveal-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 tracking-tight">
                Transformando Sonhos em
                <span className="block mt-2 text-gold">Experiências Inesquecíveis</span>
              </h1>
            </div>
            
            <div ref={heroSubtitleRef} className="scroll-reveal scroll-reveal-fade">
              <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide mb-12">
                20 Anos de Expertise em Destinos Exóticos
              </p>
            </div>

            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-12"></div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80">
              <p ref={(el) => (heroParagraphsRef.current[0] = el)} className="scroll-reveal scroll-reveal-fade">
                Com duas décadas de experiência no mercado de turismo de luxo, a Follow Me Viagens se consolidou como referência absoluta em destinos exóticos, com especialização nas Maldivas, Ásia e outros destinos de luxo. Nossa missão vai além de vender pacotes: criamos jornadas personalizadas que transformam suas expectativas mais altas em realidade.
              </p>
              
              <p ref={(el) => (heroParagraphsRef.current[1] = el)} className="scroll-reveal scroll-reveal-fade">
                Nosso conhecimento profundo dos resorts mais exclusivos das Maldivas, combinado com parcerias estratégicas, nos permite oferecer não apenas viagens, mas experiências autênticas e memoráveis. Cada detalhe é planejado por nossa equipe de especialistas, garantindo que sua viagem supere qualquer expectativa.
              </p>
              
              <p ref={(el) => (heroParagraphsRef.current[2] = el)} className="scroll-reveal scroll-reveal-fade">
                Nosso diretor, Rafael Wiedman, é formado em Turismo pela Universidade de São Paulo (USP) e construiu sua carreira com forte foco em destinos de luxo como as Maldivas. Todo ano, Rafael e membros da equipe Follow Me visitam as Ilhas Malvivas, realizando visitas técnicas e firmando parcerias para garantir as melhores condições aos nossos clientes.
              </p>

              {/* Team Image */}
              <div ref={(el) => (heroParagraphsRef.current[3] = el)} className="mt-12 scroll-reveal scroll-reveal-fade">
                <img 
                  src={equipeFollowMe} 
                  alt="Equipe Follow Me Viagens" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Community Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-wider uppercase">
                  <Instagram className="w-5 h-5" />
                  <span>Nossa Comunidade</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground tracking-tight">
                  Mais de 200 Mil Viajantes Confiam em Nossa Expertise
                </h2>

                <p className="text-xl text-gold font-light">
                  Uma Comunidade Apaixonada por Destinos Extraordinários
                </p>

                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Nossa presença nas redes sociais reflete anos de experiência compartilhada, inspiração diária e conexão autêntica com viajantes que buscam o extraordinário. Com mais de 200.000 seguidores engajados, criamos uma comunidade vibrante onde compartilhamos destinos paradisíacos, dicas e bastidores das Maldivas e Ásia
                  </p>
                  
                  <p>
                  </p>
                </div>

                <Button
                  onClick={handleInstagramClick}
                  variant="outline"
                  size="lg"
                  className="group border-gold text-foreground hover:bg-gold hover:text-gold-foreground transition-all duration-500 mt-8"
                >
                  <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Siga @followmemaldives
                </Button>
              </div>

              {/* Right: Statistics */}
              <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in lg:border-l-2 lg:border-gold/20 lg:pl-16">
                <div className="text-center">
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-display font-bold text-gold mb-4">
                    200K+
                  </div>
                  <p className="text-xl text-foreground/70 font-light tracking-wide">
                    Seguidores Engajados
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-2">
                      20+
                    </div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      Anos de Expertise
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-2">
                      50+
                    </div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      Resorts Parceiros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prestigious Clientele Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div ref={clienteleHeaderRef} className="scroll-reveal scroll-reveal-up">
              <div className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-wider uppercase mb-6">
                <Award className="w-5 h-5" />
                <span>Excelência Reconhecida</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 tracking-tight">
                A Escolha de Clientes Exigentes
              </h2>

              <p className="text-xl text-gold font-light mb-12">
                Confiança Conquistada através de Excelência
              </p>

              <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-12"></div>
            </div>

            <div ref={clienteleContentRef} className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80 mb-16 scroll-reveal scroll-reveal-fade">
              <p>
                Ao longo de duas décadas, tivemos a honra de atender pessoas de destaque na sociedade brasileira e viajantes que buscam o melhor em experiências de alto padrão. Nossa reputação foi construída através de serviço impecável, atenção aos detalhes e resultados que excedem expectativas.
              </p>
              
              <p>
                Da seleção criteriosa de resorts exclusivos à coordenação logística perfeita, cada aspecto do seu itinerário recebe nossa atenção personalizada. Nossos clientes retornam não apenas pelas Maldivas deslumbrantes, mas pelo nível de expertise e cuidado que demonstramos em cada interação.
              </p>
              <p>
               Nos orgulhamos de ter 100% de availações positivas no Google e demais canais, e nosso comprometimento é com a satisfação absoluta dos viajantes que decidem confiar na nossa agência.
              </p>
            </div>

            {/* Celebrity Showcase Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                Alguns clientes de destaque que viajaram conosco recentemente
              </h3>
              <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>

            {/* Celebrity Showcase Image */}
            <div ref={famososImageRef} className="mb-12 sm:mb-16 scroll-reveal scroll-reveal-fade">
              <img 
                src={famososCollage} 
                alt="Clientes famosos que viajaram com a Follow Me para as Maldivas" 
                className="w-full max-w-xl mx-auto rounded-2xl shadow-elegant object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Our Team & Office Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative">
          <div className="max-w-6xl mx-auto">
            <div ref={teamHeaderRef} className="text-center mb-16 scroll-reveal scroll-reveal-up">
              <div className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-wider uppercase mb-6">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, Brasil</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 tracking-tight">
                Agência com 20 Anos de Expertise,
                <span className="block mt-2">& Alcance Global</span>
              </h2>

              <p className="text-xl text-gold font-light mb-8">
                Seu Time Dedicado de Especialistas
              </p>

              <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>

            <div ref={teamContentRef} className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80 mb-16 text-center scroll-reveal scroll-reveal-fade">
              <p>
                Nossa agência abriga uma equipe completa e altamente especializados, com profundo conhecimento em destinos específicos. Não somos apenas agentes de viagem, somos especialistas que visitaram, exploraram e compreendem intimamente cada resort, cada ilha, cada detalhe que tornam os destinos únicos.
              </p>
              
              <p>
                Com atendimento personalizado, nossa equipe se dedica a compreender as suas preferências, estilo e expectativas para criar itinerários verdadeiramente inesquecíveis. Do primeiro contato até seu retorno, você terá o suporte de profissionais comprometidos com a excelência em cada etapa da sua jornada.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div ref={(el) => (teamFeaturesRef.current[0] = el)} className="text-center space-y-4 p-6 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors duration-500 scroll-reveal scroll-reveal-scale">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Consultores Especializados
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Equipe com experiência prática nos destinos que oferecemos
                </p>
              </div>

              <div ref={(el) => (teamFeaturesRef.current[1] = el)} className="text-center space-y-4 p-6 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors duration-500 scroll-reveal scroll-reveal-scale">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Atendimento Personalizado
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Cada cliente recebe um planejamento exclusivo e sob medida
                </p>
              </div>

              <div ref={(el) => (teamFeaturesRef.current[2] = el)} className="text-center space-y-4 p-6 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors duration-500 scroll-reveal scroll-reveal-scale">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mx-auto">
                  <Headphones className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Suporte Integral
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Assistência completa antes, durante e após sua viagem
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          
          <div ref={ctaRef} className="max-w-4xl mx-auto text-center scroll-reveal scroll-reveal-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-8 tracking-tight">
              Pronto para Planejar
              <span className="block mt-2 text-gold">Sua Próxima Aventura?</span>
            </h2>

            <p className="text-xl text-foreground/70 leading-relaxed mb-12 max-w-3xl mx-auto">
              Realize a sua viagem dos sonhos com a Follow Me Viagens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 border-2 border-gold shadow-luxury group min-w-[250px]"
              >
                Fale com Nossa Equipe
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>

              <Button
                onClick={() => window.location.href = '/ilhas-maldivas'}
                variant="outline"
                size="lg"
                className="border-2 border-gold text-foreground hover:bg-gold hover:text-gold-foreground min-w-[250px] transition-all duration-500"
              >
                Explore Nossos Pacotes
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SobreNos;