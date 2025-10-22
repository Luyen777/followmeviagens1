import { Check } from "lucide-react";

interface TextSectionProps {
  id: string;
  title: string;
  content: string;
}

const TextSection = ({ id, title, content }: TextSectionProps) => {
  // Parse content into sections and lists
  const parseContent = () => {
    const lines = content.split('\n');
    const sections: { heading?: string; items: string[]; text?: string }[] = [];
    let currentSection: { heading?: string; items: string[]; text?: string } = { items: [] };

    lines.forEach(line => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        if (currentSection.items.length > 0 || currentSection.text) {
          sections.push(currentSection);
          currentSection = { items: [] };
        }
        return;
      }

      // Check if line ends with colon (it's a heading)
      if (trimmed.endsWith(':')) {
        if (currentSection.items.length > 0 || currentSection.text) {
          sections.push(currentSection);
        }
        currentSection = { heading: trimmed.slice(0, -1), items: [] };
      }
      // Check if it's a list item
      else if (trimmed.startsWith('- ')) {
        currentSection.items.push(trimmed.slice(2));
      }
      // Regular text
      else {
        if (currentSection.items.length > 0) {
          sections.push(currentSection);
          currentSection = { items: [], text: trimmed };
        } else {
          currentSection.text = (currentSection.text || '') + (currentSection.text ? '\n' : '') + trimmed;
        }
      }
    });

    if (currentSection.items.length > 0 || currentSection.text) {
      sections.push(currentSection);
    }

    return sections;
  };

  const sections = parseContent();
  const sectionIndex = parseInt(id.split('-')[1] || '0');
  const isAlternate = sectionIndex % 2 === 1;

  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${isAlternate ? 'bg-muted/30' : 'bg-background'} relative`}
    >
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Title with luxury styling */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 tracking-tight">
            {title}
          </h2>
          <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 rounded-full"></div>
        </header>
        
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              {/* Subsection heading */}
              {section.heading && (
                <h3 className="text-xl sm:text-2xl font-body font-semibold text-foreground mb-6 tracking-tight">
                  {section.heading}
                </h3>
              )}

              {/* Regular text */}
              {section.text && (
                <p className="text-lg leading-[1.7] text-foreground/80 mb-6 font-light">
                  {section.text}
                </p>
              )}

              {/* List items with premium styling */}
              {section.items.length > 0 && (
                <div className={`grid gap-4 ${section.items.length > 6 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <p className="text-base leading-[1.7] text-foreground/80 font-light flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle divider line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </section>
  );
};

export default TextSection;
