const AboutSection = ({ content }: { content: string }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-6">
            Sobre o Resort
          </h2>
        </header>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed whitespace-pre-line text-center sm:text-left">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
