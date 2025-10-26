import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown, Instagram } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new.png";
const destinations = [{
  label: "Dubai",
  href: "/dubai"
}, {
  label: "Tailândia",
  href: "/tailandia"
}, {
  label: "Índia",
  href: "/india"
}, {
  label: "África do Sul",
  href: "/africa-do-sul"
}, {
  label: "Seychelles",
  href: "/seychelles"
}, {
  label: "Egito",
  href: "/egito"
}, {
  label: "Vietnã",
  href: "/vietna"
}, {
  label: "Turquia",
  href: "/turquia"
}, {
  label: "Grécia",
  href: "/grecia"
}, {
  label: "Bali",
  href: "/bali"
}, {
  label: "Taiti",
  href: "/taiti"
}, {
  label: "Austrália",
  href: "/australia"
}, {
  label: "Nova Zelândia",
  href: "/nova-zelandia"
}, {
  label: "Ilhas Maurício",
  href: "/ilhas-mauricio"
}, {
  label: "Fiji",
  href: "/fiji"
}, {
  label: "Camboja",
  href: "/camboja"
}];
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isMobileDestinationsOpen, setIsMobileDestinationsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/followmeviagens", "_blank");
  };
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#contato');
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById('contato');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById('contato');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Handle scroll to hash on navigation
  useEffect(() => {
    if (location.hash === '#contato') {
      setTimeout(() => {
        const element = document.getElementById('contato');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);
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
    label: "Promoções",
    href: "/promocoes/black-friday-maldivas"
  }, {
    label: "Blog",
    href: "/blog"
  }, {
    label: "Sobre Nós",
    href: "#sobre"
  }, {
    label: "Contato",
    href: "/#contato"
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
                const handleMouseEnter = () => {
                  if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    setCloseTimeout(null);
                  }
                  setIsDestinationsOpen(true);
                };
                const handleMouseLeave = () => {
                  const timeout = setTimeout(() => {
                    setIsDestinationsOpen(false);
                  }, 200); // 200ms delay before closing
                  setCloseTimeout(timeout);
                };
                return <div key={item.label} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <button className="px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-foreground/80 hover:text-foreground uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex items-center gap-1">
                        {item.label}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      {isDestinationsOpen && <div className="absolute top-full left-0 pt-1 z-50">
                          <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
                            {destinations.map(dest => <Link key={dest.href} to={dest.href} className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors">
                                {dest.label}
                              </Link>)}
                          </div>
                        </div>}
                    </div>;
              }

              // Regular menu items
              return item.href.startsWith('/') ? <Link key={item.label} to={item.href} className="px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-foreground/80 hover:text-foreground uppercase tracking-wider transition-all duration-300 whitespace-nowrap">
                    {item.label}
                  </Link> : item.label === "Contato" ? <a key={item.label} href={item.href} onClick={handleContactClick} className="px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-foreground/80 hover:text-foreground uppercase tracking-wider transition-all duration-300 whitespace-nowrap">
                    {item.label}
                  </a> : <a key={item.label} href={item.href} className="px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-foreground/80 hover:text-foreground uppercase tracking-wider transition-all duration-300 whitespace-nowrap">
                    {item.label}
                  </a>;
            })}
            </div>
          </div>

          {/* Contact Info & CTA - Right */}
          <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-6 flex-shrink-0">
            <button onClick={handleWhatsAppClick} className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300" aria-label="Fale conosco no WhatsApp">
              <MessageCircle className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={handleInstagramClick} className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300" aria-label="Siga-nos no Instagram">
              <Instagram className="w-5 h-5 text-foreground" />
            </button>
            <a href="#contato">
              <Button variant="primary" size="default" className="shadow-luxury whitespace-nowrap text-xs xl:text-sm px-4 xl:px-6 bg-slate-950 hover:bg-slate-800">
                Solicitar Orçamento
              </Button>
            </a>
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
              return <div key={item.label}>
                      <button onClick={() => setIsMobileDestinationsOpen(!isMobileDestinationsOpen)} className="w-full flex items-center justify-between px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider">
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileDestinationsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileDestinationsOpen && <div className="pl-4 mt-1 space-y-1 animate-fade-in">
                          {destinations.map(dest => <Link key={dest.href} to={dest.href} onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobileDestinationsOpen(false);
                  }} className="block px-4 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-300">
                              {dest.label}
                            </Link>)}
                        </div>}
                    </div>;
            }

            // Regular menu items
            return item.href.startsWith('/') ? <Link key={item.label} to={item.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider">
                    {item.label}
                  </Link> : item.label === "Contato" ? <a key={item.label} href={item.href} onClick={handleContactClick} className="px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider">
                    {item.label}
                  </a> : <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider">
                    {item.label}
                  </a>;
          })}
              <div className="flex flex-col space-y-3 px-4 pt-6 border-t border-foreground/10 mt-4">
                <button onClick={handleWhatsAppClick} className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300 font-semibold text-foreground">
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar no WhatsApp</span>
                </button>
                <button onClick={handleInstagramClick} className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300 font-semibold text-foreground">
                  <Instagram className="w-5 h-5" />
                  <span>Visite nosso Instagram</span>
                </button>
                <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;