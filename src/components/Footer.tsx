
import React from 'react';
import { 
  ArrowUp, Phone, Mail, MapPin, Facebook, 
  Instagram, Linkedin, Twitter 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.svg" 
                alt="DentMarketing Logo" 
                className="h-8 w-auto mr-2"
                onError={(e) => {
                  // Fallback if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.style.display = 'none';
                  const parentElement = target.parentElement;
                  if (parentElement) {
                    const fallbackText = document.createElement('span');
                    fallbackText.className = 'text-dental-blue font-bold text-xl';
                    fallbackText.innerText = 'DentMarketing';
                    parentElement.appendChild(fallbackText);
                  }
                }}
              />
            </div>
            <p className="text-dental-darkgray mb-6">
              Especialistas en marketing digital para clínicas dentales. Transformamos tu presencia online para maximizar las primeras visitas y aumentar tu facturación.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-smooth">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-smooth">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-smooth">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-smooth">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Servicios</a>
              </li>
              <li>
                <a href="#testimonios" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Testimonios</a>
              </li>
              <li>
                <a href="#casos" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Casos de Éxito</a>
              </li>
              <li>
                <a href="#proceso" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Nuestro Proceso</a>
              </li>
              <li>
                <a href="#contacto" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Contacto</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Campañas de Captación</a>
              </li>
              <li>
                <a href="#" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Marketing Digital</a>
              </li>
              <li>
                <a href="#" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Redes Sociales</a>
              </li>
              <li>
                <a href="#" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Estrategia Web</a>
              </li>
              <li>
                <a href="#" className="text-dental-darkgray hover:text-dental-blue transition-smooth">Analítica Dental</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-dental-blue mr-3 mt-1 flex-shrink-0" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-dental-blue mr-3 mt-1 flex-shrink-0" />
                <span>info@dentmarketing.es</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-dental-blue mr-3 mt-1 flex-shrink-0" />
                <span>Calle Gran Vía 123, 28013 Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dental-darkgray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DentMarketing. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-dental-darkgray hover:text-dental-blue text-sm transition-smooth">Política de Privacidad</a>
            <a href="#" className="text-dental-darkgray hover:text-dental-blue text-sm transition-smooth">Términos y Condiciones</a>
            <a href="#" className="text-dental-darkgray hover:text-dental-blue text-sm transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-dental-blue text-white flex items-center justify-center shadow-lg hover:bg-dental-darkblue transition-smooth animate-float"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
