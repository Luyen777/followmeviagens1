import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This would come from your CMS/database
const blogPostData = {
  "melhor-epoca-visitar-maldivas": {
    title: "Melhor Época para Visitar as Maldivas: Guia Completo 2024",
    excerpt: "Descubra quando é a melhor época para viajar às Maldivas, considerando clima, preços e experiências únicas para sua lua de mel ou férias em família.",
    category: "Guias de Viagem",
    image: "/placeholder.svg",
    author: "Equipe Follow Me",
    date: "2024-03-15",
    readTime: "8 min",
    keywords: ["maldivas", "melhor época", "clima maldivas", "quando viajar"],
    content: `
      <h2>Introdução</h2>
      <p>As Maldivas são um destino de sonho durante todo o ano, mas escolher a época certa pode fazer toda a diferença na sua experiência. Neste guia completo, vamos explorar os melhores períodos para visitar este paraíso tropical.</p>
      
      <h2>Estação Seca (Dezembro a Abril)</h2>
      <p>A estação seca é considerada a alta temporada nas Maldivas, com clima perfeito para aproveitar as praias e atividades aquáticas.</p>
      
      <h3>Vantagens:</h3>
      <ul>
        <li>Sol abundante e céu azul</li>
        <li>Mar calmo ideal para mergulho e snorkeling</li>
        <li>Baixa probabilidade de chuva</li>
      </ul>
      
      <h3>Desvantagens:</h3>
      <ul>
        <li>Preços mais elevados</li>
        <li>Resorts mais lotados</li>
        <li>Necessário reservar com antecedência</li>
      </ul>
      
      <h2>Estação das Monções (Maio a Novembro)</h2>
      <p>Apesar de ser a estação chuvosa, ainda é possível ter uma experiência maravilhosa nas Maldivas durante este período.</p>
      
      <h2>Conclusão</h2>
      <p>A melhor época para visitar as Maldivas depende do seu orçamento e preferências pessoais. Para clima perfeito, escolha dezembro a abril. Para economizar, considere maio a novembro.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In production, fetch post data based on slug from CMS/database
  const post = slug ? blogPostData[slug as keyof typeof blogPostData] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <Link to="/blog">
            <Button>Voltar ao Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{post.title} | Follow Me Viagens</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://followmeviagens.com.br/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://followmeviagens.com.br/blog/${slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
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
        
        {/* Back to Blog */}
        <div className="pt-28 pb-8 border-b">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <header className="container mx-auto px-4 mb-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge className="bg-primary/10 text-primary border-0">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <span>Por {post.author}</span>
              </div>

              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          {/* Article Footer */}
          <footer className="container mx-auto px-4 mt-16">
            <div className="max-w-3xl mx-auto pt-8 border-t">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Palavras-chave:</p>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <Badge key={keyword} variant="secondary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </footer>
        </article>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-light">
                Pronto para sua viagem dos sonhos?
              </h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato e monte seu pacote personalizado para as Maldivas
              </p>
              <Button size="lg" className="text-base">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
