import ContactForm from "@/components/ContactForm";

const ContactFormSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Pronto para sua aventura na Índia?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Preencha o formulário e receba uma proposta personalizada em até 24 horas
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10">
            <ContactForm 
              resortName="Índia - Pacote Completo 10 Dias"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
