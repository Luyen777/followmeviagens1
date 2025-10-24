import ContactForm from "@/components/ContactForm";

const ContactFormSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Solicite Seu Orçamento Personalizado
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato para criar sua experiência transformadora no JOALI BEING
            </p>
          </div>
          
          <ContactForm resortName="JOALI BEING - Maldivas" />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
