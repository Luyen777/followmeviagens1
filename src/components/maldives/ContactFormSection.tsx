import ContactForm from "@/components/ContactForm";

const ContactFormSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light text-foreground mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você em até 24 horas 
            com um orçamento personalizado para sua viagem ao InterContinental Maldives.
          </p>
        </header>
        
        <div className="bg-card rounded-2xl shadow-xl p-8">
          <ContactForm resortName="InterContinental Maldives - Pacote 5 dias" />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
