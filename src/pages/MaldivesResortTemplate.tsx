import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/resort-template/Hero";
import AboutSection from "@/components/resort-template/AboutSection";
import TextSection from "@/components/resort-template/TextSection";
import PricingSection from "@/components/resort-template/PricingSection";
import FAQSection from "@/components/resort-template/FAQSection";
import ResortImageCarousel from "@/components/ResortImageCarousel";
import ContactFormSection from "@/components/adaaran-select/ContactFormSection";
import { maldivesResorts } from "@/data/maldivesResorts";
import { createTravelPackageSchema, createFAQSchema } from "@/lib/structuredData";

const MaldivesResortTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const resort = slug ? maldivesResorts[slug] : null;

  if (!resort) {
    return <Navigate to="/404" replace />;
  }

  const travelPackageSchema = createTravelPackageSchema({
    name: resort.name,
    description: resort.seoDescription,
    image: resort.heroImage,
    priceFrom: 0, // Resort files don't have pricing in data structure
    location: resort.location,
    url: `https://followmeviagens.com/ilhas-maldivas/${resort.slug}`
  });

  const faqSchema = resort.faqs.length > 0 ? createFAQSchema(resort.faqs) : null;

  const structuredData = faqSchema 
    ? [travelPackageSchema, faqSchema] 
    : travelPackageSchema;

  return (
    <>
      <SEOHead
        title={resort.seoTitle}
        description={resort.seoDescription}
        canonicalUrl={`/ilhas-maldivas/${resort.slug}`}
        ogImage={resort.heroImage}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppButton />
        
        <Breadcrumbs 
          items={[
            { label: "Início", href: "/" },
            { label: "Ilhas Maldivas", href: "/ilhas-maldivas" },
            { label: resort.name, href: `/ilhas-maldivas/${resort.slug}` }
          ]}
        />
        
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
          
          {resort.sections.map((section, index) => (
            section.type === 'text' ? (
              <TextSection
                key={section.id}
                id={`section-${index}`}
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
