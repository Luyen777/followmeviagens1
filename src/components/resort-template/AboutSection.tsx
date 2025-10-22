const AboutSection = ({ content }: { content: string }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 tracking-tight">
            Sobre o Resort
          </h2>
          <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 rounded-full"></div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg sm:text-xl leading-[1.7] whitespace-pre-line text-center text-foreground/80 font-light">
            {content}
          </p>
        </div>
      </div>

      {/* Subtle divider line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </section>
  );
};

export default AboutSection;
