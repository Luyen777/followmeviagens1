import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Placeholder blog posts - replace with real data from CMS/database
const blogPosts = [
  {
    id: "1",
    slug: "melhor-epoca-visitar-maldivas",
    title: "Melhor Época para Visitar as Maldivas: Guia Completo 2024",
    excerpt: "Descubra quando é a melhor época para viajar às Maldivas, considerando clima, preços e experiências únicas para sua lua de mel ou férias em família.",
    category: "Guias de Viagem",
    image: "/placeholder.svg",
    author: "Equipe Follow Me",
    date: "2024-03-15",
    readTime: "8 min",
    keywords: ["maldivas", "melhor época", "clima maldivas", "quando viajar"]
  },
  {
    id: "2",
    slug: "top-10-resorts-lua-de-mel-maldivas",
    title: "Top 10 Resorts para Lua de Mel nas Maldivas",
    excerpt: "Conheça os resorts mais românticos e exclusivos das Maldivas, perfeitos para tornar sua lua de mel inesquecível.",
    category: "Resorts",
    image: "/placeholder.svg",
    author: "Equipe Follow Me",
    date: "2024-03-10",
    readTime: "12 min",
    keywords: ["lua de mel", "resorts maldivas", "viagem romântica"]
  },
  {
    id: "3",
    slug: "quanto-custa-viagem-maldivas",
    title: "Quanto Custa uma Viagem para as Maldivas em 2024?",
    excerpt: "Planejamento completo de orçamento para sua viagem às Maldivas, incluindo passagens, hospedagem, alimentação e passeios.",
    category: "Planejamento",
    image: "/placeholder.svg",
    author: "Equipe Follow Me",
    date: "2024-03-05",
    readTime: "10 min",
    keywords: ["custo maldivas", "orçamento viagem", "preço maldivas"]
  },
  {
    id: "4",
    slug: "all-inclusive-vs-meia-pensao-maldivas",
    title: "All Inclusive vs Meia Pensão: O Que Escolher nas Maldivas?",
    excerpt: "Compare as opções de planos de refeição nos resorts das Maldivas e descubra qual é a melhor para seu estilo de viagem.",
    category: "Dicas",
    image: "/placeholder.svg",
    author: "Equipe Follow Me",
    date: "2024-02-28",
    readTime: "6 min",
    keywords: ["all inclusive", "plano de refeição", "alimentação maldivas"]
  },
  {
    id: "5",
    slug: "hidroaviao-speedboat-transfer-maldivas",
    title: "Hidroavião ou Speedboat? Entenda os Transfers nas Maldivas",
    excerpt: "Tudo sobre as opções de transporte do aeroporto de Malé até seu resort: hidroavião, lancha rápida e voo doméstico.",
    category: "Guias de Viagem",
    image: "/placeholder.svg",
    author: "Equipe Follow Me",
    date: "2024-02-20",
    readTime: "7 min",
    keywords: ["transfer maldivas", "hidroavião", "transporte maldivas"]
  },
  {
    id: "6",
    slug: "documentos-necessarios-viajar-maldivas",
    title: "Documentos Necessários para Viajar às Maldivas",
    excerpt: "Lista completa de documentos, vistos e requisitos para brasileiros viajarem às Maldivas sem complicações.",
    category: "Planejamento",
    image: "/placeholder.svg",
    author: "Equipe Follow Me",
    date: "2024-02-15",
    readTime: "5 min",
    keywords: ["documentos maldivas", "visto maldivas", "passaporte"]
  }
];

const categories = ["Todos", "Guias de Viagem", "Resorts", "Planejamento", "Dicas"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog de Viagens - Guias e Dicas para Maldivas | Follow Me Viagens</title>
        <meta name="description" content="Descubra guias completos, dicas de viagem e informações sobre as Maldivas e outros destinos paradisíacos. Planeje sua viagem dos sonhos com a Follow Me Viagens." />
        <meta name="keywords" content="blog viagens maldivas, guia maldivas, dicas viagem maldivas, quando viajar maldivas, resorts maldivas" />
        <link rel="canonical" href="https://followmeviagens.com.br/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog de Viagens - Guias e Dicas para Maldivas" />
        <meta property="og:description" content="Descubra guias completos, dicas de viagem e informações sobre as Maldivas e outros destinos paradisíacos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://followmeviagens.com.br/blog" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Follow Me Viagens Blog",
            "description": "Guias e dicas de viagem para Maldivas e destinos paradisíacos",
            "url": "https://followmeviagens.com.br/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Follow Me Viagens",
              "logo": {
                "@type": "ImageObject",
                "url": "https://followmeviagens.com.br/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-40 pb-24 bg-gradient-to-b from-background via-background/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
                Blog
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Guias, dicas e inspiração para sua próxima aventura
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="pl-12 h-12 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-foreground text-background"
                        : "bg-card border border-border hover:border-foreground/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-lg text-muted-foreground">
                    Nenhum artigo encontrado. Tente outra busca.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
