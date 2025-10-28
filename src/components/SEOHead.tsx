import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string[];
  structuredData?: object | object[];
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
  keywords = [],
  structuredData,
  additionalMeta = []
}: SEOHeadProps) => {
  // Ensure URLs are absolute
  const defaultCanonicalUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://followmeviagens.com';
  
  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith("http") 
        ? canonicalUrl 
        : `https://followmeviagens.com${canonicalUrl}`)
    : defaultCanonicalUrl;
  
  const fullOgImage = ogImage?.startsWith("http")
    ? ogImage
    : ogImage 
    ? `https://followmeviagens.com${ogImage}`
    : "https://followmeviagens.com/logo.png";

  // Format structured data
  const structuredDataArray = Array.isArray(structuredData) 
    ? structuredData 
    : structuredData 
    ? [structuredData] 
    : [];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Follow Me Viagens" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => {
        if (meta.name) {
          return <meta key={index} name={meta.name} content={meta.content} />;
        }
        if (meta.property) {
          return <meta key={index} property={meta.property} content={meta.content} />;
        }
        return null;
      })}

      {/* Structured Data (JSON-LD) */}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
