import ContactForm from "@/components/ContactForm";

const ContactFormSection = () => {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você 
            para criar a viagem dos seus sonhos
          </p>
        </header>
        
        <ContactForm resortName="Consulta Geral - Homepage" />
      </div>
    </section>
  );
};

export default ContactFormSection;
