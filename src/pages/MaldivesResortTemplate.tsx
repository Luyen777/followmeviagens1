import { Helmet } from "react-helmet";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/resort-template/Hero";
import AboutSection from "@/components/resort-template/AboutSection";
import TextSection from "@/components/resort-template/TextSection";
import PricingSection from "@/components/resort-template/PricingSection";
import FAQSection from "@/components/resort-template/FAQSection";
import ResortImageCarousel from "@/components/ResortImageCarousel";
import ContactFormSection from "@/components/adaaran-select/ContactFormSection";
import { maldivesResorts } from "@/data/maldivesResorts";

const MaldivesResortTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const resort = slug ? maldivesResorts[slug] : null;

  if (!resort) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{resort.seoTitle}</title>
        <meta name="description" content={resort.seoDescription} />
        <meta property="og:title" content={resort.name} />
        <meta property="og:description" content={resort.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={resort.heroImage} />
        <link rel="canonical" href={`https://followmeviagens.com/ilhas-maldivas/${resort.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            "name": resort.name,
            "description": resort.seoDescription,
            "image": resort.heroImage,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": resort.location,
              "addressCountry": "MV"
            },
            "starRating": {
              "@type": "Rating",
              "ratingValue": resort.rating.toString()
            },
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />
        
        <main>
          <Hero
            image={resort.heroImage}
            name={resort.name}
          />
          
          <ResortImageCarousel
            images={resort.images.map(img => img.src)}
            title={resort.name}
          />
          
          <AboutSection content={resort.about} />
          
          {resort.sections.map((section) => (
            section.type === 'text' ? (
              <TextSection
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content || ''}
              />
            ) : null
          ))}
          
          <PricingSection
            seasons={resort.pricing.seasons}
            paymentTerms={resort.pricing.paymentTerms}
            cancellationPolicy={resort.pricing.cancellationPolicy}
            notes={resort.pricing.notes}
          />
          
          <ContactFormSection />
          
          <FAQSection faqs={resort.faqs} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MaldivesResortTemplate;
