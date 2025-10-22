import { Heart, Waves, UtensilsCrossed, Check, LucideIcon } from "lucide-react";

interface ContentItem {
  title?: string;
  description?: string;
  icon?: string;
  badge?: string;
  items?: string[];
}

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  type: 'list' | 'cards' | 'text' | 'two-column';
  items?: ContentItem[];
  content?: string;
  background?: 'default' | 'muted';
}

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Waves,
  UtensilsCrossed,
  Check,
};

const ContentSection = ({ id, title, subtitle, type, items = [], content, background = 'default' }: ContentSectionProps) => {
  const bgClass = background === 'muted' ? 'bg-muted/30' : 'bg-background';

  if (type === 'two-column' && items.length === 2) {
    return (
      <section id={id} className={`py-20 ${bgClass}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-foreground/70 leading-relaxed">{subtitle}</p>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {items.map((item, index) => {
              const Icon = item.icon ? iconMap[item.icon] : null;
              const badgeColor = item.badge === 'Grátis' ? 'bg-green-500/10 text-green-700' : 'bg-primary/10 text-primary';
              
              return (
                <div key={index} className="bg-muted/30 rounded-3xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    {Icon && (
                      <div className={`w-12 h-12 rounded-full ${badgeColor} flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.items?.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span className="text-foreground/80">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (type === 'cards') {
    return (
      <section id={id} className={`py-20 ${bgClass}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-foreground/70 leading-relaxed">{subtitle}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <UtensilsCrossed className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                  {item.badge && (
                    <span className="px-3 py-1 bg-green-500/10 text-green-700 text-xs font-semibold rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (type === 'list') {
    return (
      <section id={id} className={`py-20 ${bgClass}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-foreground/70 leading-relaxed">{subtitle}</p>
            )}
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {items.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items?.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">{subtitle}</p>
          )}
          {content && (
            <div className="text-foreground/80 leading-relaxed whitespace-pre-line">{content}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
