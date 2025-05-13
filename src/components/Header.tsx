
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/#sobre" },
    { name: "Serviços", path: "/#servicos" },
    { name: "Portfólio", path: "/#portfolio" },
    { name: "Blog", path: "/#blog" },
    { name: "Contato", path: "/#contato" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <RouterLink to="/" className="text-2xl font-bold text-primary">
            <span className="text-primary">Agência</span>
            <span className="text-accent">Digital</span>
          </RouterLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-accent hover:bg-accent-hover text-accent-foreground px-4 py-2 rounded-md transition-colors duration-300"
        >
          <Phone size={18} className="mr-2" />
          <span className="font-medium">WhatsApp</span>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="py-3 border-b border-gray-100 font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-accent text-accent-foreground mt-4 px-4 py-3 rounded-md"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
