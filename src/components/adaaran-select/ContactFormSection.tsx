import ContactForm from "@/components/ContactForm";

const ContactFormSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              Reserve sua experiência
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Preencha o formulário e nossos especialistas entrarão em contato para criar o pacote perfeito para você no Adaaran Select Hudhuranfushi
            </p>
          </div>
          
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <ContactForm resortName="Adaaran Select Hudhuranfushi - All Inclusive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
