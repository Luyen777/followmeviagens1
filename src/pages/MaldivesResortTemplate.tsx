import { Helmet } from "react-helmet";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/resort-template/Hero";
import AboutSection from "@/components/resort-template/AboutSection";
import ContentSection from "@/components/resort-template/ContentSection";
import AccommodationSection from "@/components/resort-template/AccommodationSection";
import PricingSection from "@/components/resort-template/PricingSection";
import FAQSection from "@/components/resort-template/FAQSection";
import ImageCarousel from "@/components/adaaran-select/ImageCarousel";
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
            subtitle={resort.heroSubtitle}
            location={resort.location}
            transferTime={resort.transferTime}
            rating={resort.rating}
            highlights={resort.heroHighlights}
          />
          
          <AboutSection content={resort.about} />
          
          <ImageCarousel images={resort.images} />
          
          {resort.sections.map((section, index) => (
            <ContentSection
              key={section.id}
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              type={section.type}
              items={section.items}
              content={section.content}
              background={index % 2 === 0 ? 'default' : 'muted'}
            />
          ))}
          
          <AccommodationSection
            title={resort.accommodations.title}
            description={resort.accommodations.description}
            types={resort.accommodations.types}
          />
          
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
