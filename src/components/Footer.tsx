import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const destinations = [
    "Maldivas", "Dubai", "Tailândia", "Bali", "Seychelles", 
    "Mauritius", "Grécia", "Taiti"
  ];

  const packages = [
    "Lua de Mel", "Família", "Wellness", "Mergulho", 
    "Luxo Premium", "All Inclusive"
  ];

  return (
    <footer className="bg-foreground text-background pt-24 pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-medium mb-6 tracking-tight">
              Follow Me <span className="text-primary">Viagens</span>
            </h3>
            <p className="text-background/70 mb-8 leading-relaxed font-light tracking-luxury">
              Especialistas em viagens de luxo para as Maldivas e destinos 
              paradisíacos ao redor do mundo.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/followmeviagens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-gradient-luxury rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/followmeviagens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-gradient-luxury rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@followmeviagens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-gradient-luxury rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-luxury">Destinos</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a 
                    href={`#${destination.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors duration-300 tracking-luxury font-light"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-luxury">Pacotes</h4>
            <ul className="space-y-3">
              {packages.map((pkg) => (
                <li key={pkg}>
                  <a 
                    href={`#${pkg.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors duration-300 tracking-luxury font-light"
                  >
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-luxury">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+5511999999999" 
                    className="text-background/70 hover:text-primary transition-colors duration-300 tracking-luxury font-light"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:contato@followmeviagens.com" 
                    className="text-background/70 hover:text-primary transition-colors duration-300 break-all tracking-luxury font-light"
                  >
                    contato@followmeviagens.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/70 tracking-luxury font-light">
                  São Paulo, SP<br />
                  Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-background/60 text-sm tracking-luxury font-light">
              © 2025 Follow Me Viagens. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-sm">
              <a 
                href="#privacidade" 
                className="text-background/60 hover:text-primary transition-colors duration-300 tracking-luxury font-light"
              >
                Política de Privacidade
              </a>
              <a 
                href="#termos" 
                className="text-background/60 hover:text-primary transition-colors duration-300 tracking-luxury font-light"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
