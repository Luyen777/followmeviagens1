import ContactForm from "@/components/ContactForm";

const ContactFormSection = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30 relative">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 tracking-tight">
              Reserve sua experiência
            </h2>
            <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 rounded-full mb-4"></div>
            <p className="text-lg text-foreground/70 leading-[1.7] max-w-2xl mx-auto font-light">
              Preencha o formulário e nossos especialistas entrarão em contato para criar o pacote perfeito para você
            </p>
          </div>
          
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <ContactForm resortName="Adaaran Select Hudhuranfushi - All Inclusive" />
          </div>
        </div>
      </div>

      {/* Subtle divider line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </section>
  );
};

export default ContactFormSection;
