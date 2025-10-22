import MarkdownContent from "@/components/MarkdownContent";

interface TextSectionProps {
  id: string;
  title: string;
  content: string;
}

const TextSection = ({ id, title, content }: TextSectionProps) => {
  // Convert simple hyphens to proper markdown bullets
  const formattedContent = content
    .split('\n')
    .map(line => {
      const trimmed = line.trim();
      // Convert "- " at start to markdown bullet
      if (trimmed.startsWith('- ')) {
        return trimmed.replace(/^- /, '• ');
      }
      return line;
    })
    .join('\n');

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-6">
            {title}
          </h2>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed whitespace-pre-line text-foreground/80 space-y-4">
            {formattedContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
