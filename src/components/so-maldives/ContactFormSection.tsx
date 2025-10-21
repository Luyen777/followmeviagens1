import ContactForm from "@/components/ContactForm";

const ContactFormSection = () => {
  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba uma proposta personalizada para sua experiência no SO/ Maldives
          </p>
        </header>
        
        <ContactForm resortName="SO/ Maldives - Overwater Pool Villa" />
      </div>
    </section>
  );
};

export default ContactFormSection;
