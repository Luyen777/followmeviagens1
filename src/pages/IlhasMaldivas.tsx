import { ChevronDown, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageListItem from "@/components/PackageListItem";
import { fetchResortsFromGoogleSheets, type PackageData } from "@/services/googleSheetsService";


const IlhasMaldivas = () => {
  const [resorts, setResorts] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResorts = async () => {
      setLoading(true);
      try {
        const data = await fetchResortsFromGoogleSheets();
        setResorts(data);
      } catch (err) {
        setError('Erro ao carregar resorts. Por favor, tente novamente.');
        console.error('Error loading resorts:', err);
      } finally {
        setLoading(false);
      }
    };
    loadResorts();
  }, []);

  return <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-display font-light text-foreground mb-8 tracking-tight leading-tight lg:text-5xl">Pacotes de viagem para as Ilhas Maldivas</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Explore os melhores pacotes para as Maldivas. Cada resort oferece experiências únicas, com opções de luxo e lazer para todos os estilos. Todos os pacotes são customizáveis - fale com a nossa equipe para encontrar a opção perfeita pra você!</p>
        </div>
      </section>

      {/* Packages List */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Sorting Dropdown */}
          <div className="mb-12 flex justify-end">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-2.5 cursor-pointer hover:border-foreground/20 transition-colors duration-200">
              <span className="text-sm text-muted-foreground font-medium">
                Ordenar por
              </span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-destructive">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-8">
              {resorts.map((pkg, index) => <PackageListItem key={pkg.referenceNumber || index} {...pkg} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>;
};

export default IlhasMaldivas;
