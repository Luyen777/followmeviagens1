// Helper functions to generate Schema.org JSON-LD structured data

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface OrganizationData {
  name: string;
  description: string;
  url: string;
  logo: string;
  email?: string;
  phone?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

export interface BlogPostData {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  url: string;
}

export interface ResortData {
  name: string;
  description: string;
  image: string;
  priceFrom: number;
  location?: string;
  rating?: number;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function createOrganizationSchema(data: OrganizationData) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "logo": {
      "@type": "ImageObject",
      "url": data.logo
    },
    ...(data.email && {
      "email": data.email
    }),
    ...(data.phone && {
      "telephone": data.phone
    }),
    ...(data.socialMedia && {
      "sameAs": Object.values(data.socialMedia).filter(Boolean)
    })
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href
    }))
  };
}

export function createBlogPostingSchema(post: BlogPostData) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.datePublished,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Follow Me Viagens",
      "logo": {
        "@type": "ImageObject",
        "url": "https://followmeviagens.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    }
  };
}

export function createItemListSchema(resorts: ResortData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": resorts.map((resort, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Resort",
        "name": resort.name,
        "description": resort.description,
        "image": resort.image,
        "url": resort.url
      }
    }))
  };
}

export function createTravelPackageSchema(resort: ResortData) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": resort.name,
    "description": resort.description,
    "image": resort.image,
    "touristType": "Luxury Travelers",
    ...(resort.location && {
      "itinerary": {
        "@type": "Place",
        "name": resort.location,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MV"
        }
      }
    }),
    "offers": {
      "@type": "Offer",
      "price": resort.priceFrom,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Follow Me Viagens"
    }
  };
}

export function createFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function createTouristDestinationSchema(destination: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "url": destination.url
  };
}
