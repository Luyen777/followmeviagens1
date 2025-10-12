import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { fetchResortsFromGoogleSheets, PackageData } from "@/services/googleSheetsService";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ResortImageCarousel from "@/components/ResortImageCarousel";
import ContactForm from "@/components/ContactForm";
import MarkdownContent from "@/components/MarkdownContent";
import { Star, Clock, Utensils, Plane, Sparkles, ChevronRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ResortDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [resort, setResort] = useState<PackageData | null>(null);
  const [relatedResorts, setRelatedResorts] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResortData = async () => {
      try {
        setLoading(true);
        const resorts = await fetchResortsFromGoogleSheets();
        
        const foundResort = resorts.find(r => r.slug === slug);
        
        if (!foundResort) {
          setError("Resort não encontrado");
          setLoading(false);
          return;
        }

        setResort(foundResort);

        // Find related resorts (same classification or similar price)
        const related = resorts
          .filter(r => r.slug !== slug && (
            r.classification === foundResort.classification ||
            Math.abs(r.priceFrom - foundResort.priceFrom) < 1000
          ))
          .slice(0, 3);
        
        setRelatedResorts(related);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar informações do resort");
        setLoading(false);
      }
    };

    loadResortData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto py-20 flex justify-center items-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (error || !resort) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-display mb-4">Resort não encontrado</h1>
          <Link to="/ilhas-maldivas" className="text-primary hover:underline">
            Voltar para pacotes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": resort.title,
    "description": resort.description,
    "image": resort.image,
    "offers": {
      "@type": "Offer",
      "price": resort.priceFrom,
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Helmet>
        <title>{resort.title} - Pacotes para Maldivas | Luxo e Conforto</title>
        <meta name="description" content={resort.aboutPackage ? resort.aboutPackage.substring(0, 160) : `${resort.description} Classificação ${resort.classification}. Pacotes a partir de USD ${resort.priceFrom}. Reserve sua experiência única nas Maldivas.`} />
        <meta property="og:title" content={`${resort.title} - Pacotes Maldivas`} />
        <meta property="og:description" content={resort.aboutPackage ? resort.aboutPackage.substring(0, 160) : resort.description} />
        <meta property="og:image" content={resort.image} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://yourdomain.com/ilhas-maldivas/${resort.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />

        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/ilhas-maldivas" className="hover:text-foreground transition-colors">Pacotes Maldivas</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">{resort.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section with Title */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto py-8 md:py-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {resort.focusTags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs font-medium px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground mb-4">
              {resort.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {resort.description}
            </p>
          </div>
        </section>

        {/* Image Carousel */}
        <section className="bg-background">
          <div className="container mx-auto py-8">
            <ResortImageCarousel 
              images={[resort.image, ...resort.additionalImages]} 
              title={resort.title} 
            />
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="bg-background">
          <div className="container mx-auto py-12">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Left Column - Resort Details */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Key Features */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-display font-medium text-foreground mb-6">Detalhes do Pacote</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Classificação</div>
                        <div className="text-lg font-medium text-foreground">{resort.classification}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duração</div>
                        <div className="text-lg font-medium text-foreground">{resort.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Plano de Refeição</div>
                        <div className="text-lg font-medium text-foreground">{resort.mealPlan}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Plane className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Transfer de Malé</div>
                        <div className="text-lg font-medium text-foreground">{resort.flightIncluded}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Unique Perk Highlight */}
                {resort.uniquePerk && (
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                          DESTAQUE EXCLUSIVO
                        </div>
                        <p className="text-lg text-foreground font-medium leading-relaxed">
                          {resort.uniquePerk}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* About Package Section */}
                {resort.aboutPackage && (
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl font-display font-medium text-foreground mb-6">Sobre o Pacote</h2>
                    <MarkdownContent content={resort.aboutPackage} />
                  </div>
                )}

                {/* Accommodations Section */}
                {resort.accommodations && (
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl font-display font-medium text-foreground mb-6">Acomodações</h2>
                    <MarkdownContent content={resort.accommodations} />
                  </div>
                )}

                {/* Experiences Section */}
                {resort.experiences && (
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl font-display font-medium text-foreground mb-6">Experiências & Atividades</h2>
                    <MarkdownContent content={resort.experiences} />
                  </div>
                )}

                {/* Dining Section */}
                {resort.dining && (
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl font-display font-medium text-foreground mb-6">Gastronomia</h2>
                    <MarkdownContent content={resort.dining} />
                  </div>
                )}

                {/* Additional Information */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-display font-medium text-foreground mb-6">Informações Importantes</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong className="text-foreground">Destino:</strong> {resort.destination}</p>
                    <p><strong className="text-foreground">Validade:</strong> {resort.validity}</p>
                    <p><strong className="text-foreground">Referência:</strong> {resort.referenceNumber}</p>
                    <p className="text-sm pt-4 border-t border-border">
                      * Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade e condições especiais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Price & Contact */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  
                  {/* Price Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <div className="text-center mb-6">
                      <div className="text-sm text-muted-foreground uppercase tracking-luxury mb-2">
                        PREÇO A PARTIR
                      </div>
                      <div className="text-5xl font-display font-medium text-foreground mb-2">
                        USD {resort.priceFrom.toLocaleString()}*
                      </div>
                      <div className="text-sm text-muted-foreground">
                        POR PESSOA, EM APTO DUPLO
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <ContactForm resortName={resort.title} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resorts */}
        {relatedResorts.length > 0 && (
          <section className="bg-muted/30 border-t border-border">
            <div className="container mx-auto py-12 md:py-16">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-8">
                Você também pode gostar
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedResorts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/ilhas-maldivas/${related.slug}`}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-500 group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {related.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">A partir de</span>
                        <span className="text-2xl font-display font-medium text-foreground">
                          USD {related.priceFrom.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default ResortDetail;
