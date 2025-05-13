
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container">
        <div className="py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <a href="/" className="text-2xl font-bold">
                <span className="text-white">Agência</span>
                <span className="text-accent">Digital</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Transformando ideias em resultados digitais com estratégias personalizadas e foco em conversão.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-accent">
                Links Rápidos
              </span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="/#sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="/#portfolio" className="hover:text-accent transition-colors">Portfólio</a></li>
              <li><a href="/#blog" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-accent">
                Serviços
              </span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Criação de Sites</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Gestão de Redes Sociais</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Tráfego Pago</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Automação de WhatsApp</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Consultoria em Marketing</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">SEO</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-accent">
                Contato
              </span>
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <a href="tel:+5585000000000" className="hover:text-accent transition-colors">
                    +55 (85) 0000-0000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <a href="mailto:contato@agenciadigital.com" className="hover:text-accent transition-colors">
                    contato@agenciadigital.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span>
                    Av. Santos Dumont, 1589<br />
                    Fortaleza - CE
                  </span>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 py-6">
        <div className="container px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Agência Digital. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/politica-de-privacidade" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-accent transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
