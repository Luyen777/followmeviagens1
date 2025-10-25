import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { createBreadcrumbSchema, BreadcrumbItem } from "@/lib/structuredData";
import { Helmet } from "react-helmet";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  // Create full URLs for schema
  const schemaItems = items.map(item => ({
    ...item,
    href: item.href.startsWith("http") 
      ? item.href 
      : `https://followmeviagens.com${item.href}`
  }));

  const schema = createBreadcrumbSchema(schemaItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <nav 
            className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap"
            aria-label="Breadcrumb"
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              
              return (
                <div key={index} className="flex items-center gap-2">
                  {isLast ? (
                    <span 
                      className="text-foreground font-medium"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <>
                      <Link 
                        to={item.href} 
                        className="hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                      <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
