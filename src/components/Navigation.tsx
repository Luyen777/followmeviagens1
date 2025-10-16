import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const destinations = [
  { label: "Dubai", href: "/dubai" },
  { label: "Tailândia", href: "/tailandia" },
  { label: "Índia", href: "/india" },
  { label: "África do Sul", href: "/africa-do-sul" },
  { label: "Seychelles", href: "/seychelles" },
  { label: "Egito", href: "/egito" },
  { label: "Vietnã", href: "/vietna" },
  { label: "Turquia", href: "/turquia" },
  { label: "Grécia", href: "/grecia" },
  { label: "Bali", href: "/bali" },
  { label: "Taiti", href: "/taiti" },
  { label: "Austrália", href: "/australia" },
  { label: "Nova Zelândia", href: "/nova-zelandia" },
  { label: "Ilhas Maurício", href: "/ilhas-mauricio" },
  { label: "Fiji", href: "/fiji" },
  { label: "Camboja", href: "/camboja" },
];
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isMobileDestinationsOpen, setIsMobileDestinationsOpen] = useState(false);
  const menuItems = [{
    label: "Buscar",
    href: "#buscar",
    mobileOnly: true
  }, {
    label: "Ilhas Maldivas",
    href: "/ilhas-maldivas"
  }, {
    label: "Outros Destinos",
    href: "#destinos"
  }, {
    label: "Pacotes",
    href: "#pacotes"
  }, {
    label: "Blog",
    href: "/blog"
  }, {
    label: "Sobre Nós",
    href: "#sobre"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Left on desktop, centered on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0 flex items-center justify-center lg:justify-start flex-shrink-0">
            <Link to="/" className="cursor-pointer">
              <img src={logo} alt="Follow Me Viagens" className="h-11 md:h-12 lg:h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-0.5">
              {menuItems.filter(item => !item.mobileOnly).map(item => {
                // Handle Outros Destinos dropdown
                if (item.label === "Outros Destinos") {
                  return (
                    <div 
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setIsDestinationsOpen(true)}
                      onMouseLeave={() => setIsDestinationsOpen(false)}
                    >
                      <button className="px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-foreground/80 hover:text-foreground uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex items-center gap-1">
                        {item.label}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      {isDestinationsOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px] z-50 animate-fade-in">
                          {destinations.map(dest => (
                            <Link
                              key={dest.href}
                              to={dest.href}
                              className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
                            >
                              {dest.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                // Regular menu items
                return item.href.startsWith('/') ? (
                  <Link key={item.label} to={item.href} className="px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-foreground/80 hover:text-foreground uppercase tracking-wider transition-all duration-300 whitespace-nowrap">
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} className="px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-foreground/80 hover:text-foreground uppercase tracking-wider transition-all duration-300 whitespace-nowrap">
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info & CTA - Right */}
          <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-6 flex-shrink-0">
            <a href="tel:+5511999999999" className="flex items-center text-xs xl:text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-300">
              <Phone className="w-4 h-4 mr-1.5" />
              <span className="whitespace-nowrap">(11) 99999-9999</span>
            </a>
            <Button variant="primary" size="default" className="shadow-luxury whitespace-nowrap text-xs xl:text-sm px-4 xl:px-6 bg-slate-950 hover:bg-slate-800">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button - Right */}
          <div className="flex items-center justify-end lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-foreground/10 transition-colors duration-300" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden py-6 border-t border-foreground/10 animate-fade-in bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-1">
              {menuItems.map(item => {
                // Handle Outros Destinos expandable section
                if (item.label === "Outros Destinos") {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsMobileDestinationsOpen(!isMobileDestinationsOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileDestinationsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileDestinationsOpen && (
                        <div className="pl-4 mt-1 space-y-1 animate-fade-in">
                          {destinations.map(dest => (
                            <Link
                              key={dest.href}
                              to={dest.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDestinationsOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-300"
                            >
                              {dest.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                // Regular menu items
                return item.href.startsWith('/') ? (
                  <Link key={item.label} to={item.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider">
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider">
                    {item.label}
                  </a>
                );
              })}
              <div className="flex flex-col space-y-3 px-4 pt-6 border-t border-foreground/10 mt-4">
                <a href="tel:+5511999999999" className="flex items-center text-foreground/70 hover:text-foreground transition-colors duration-300 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(11) 99999-9999</span>
                </a>
                <Button variant="primary" className="w-full">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;