import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Laos = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
          Laos
        </h1>
        {/* Content to be added */}
      </div>

      <Footer />
    </main>
  );
};

export default Laos;
