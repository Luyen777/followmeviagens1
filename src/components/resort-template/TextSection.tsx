interface TextSectionProps {
  id: string;
  title: string;
  content: string;
}

const TextSection = ({ id, title, content }: TextSectionProps) => {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-6">
            {title}
          </h2>
        </header>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <div className="text-lg leading-relaxed whitespace-pre-line text-center sm:text-left">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
