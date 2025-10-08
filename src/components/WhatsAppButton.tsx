import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre pacotes para as Maldivas.");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-luxury hover:scale-110 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative flex items-center justify-center w-16 h-16">
        <MessageCircle className="w-8 h-8" />
      </div>
    </button>
  );
};

export default WhatsAppButton;
