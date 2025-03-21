
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="relative h-10 w-36 overflow-hidden">
            <img 
              src="/logo.svg" 
              alt="ClimaDent Logo" 
              className="h-full w-auto object-contain"
              onError={(e) => {
                // Fallback if logo fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.style.display = 'none';
                const parentElement = target.parentElement;
                if (parentElement) {
                  const fallbackText = document.createElement('span');
                  fallbackText.className = 'text-[#4361EE] font-bold text-xl';
                  fallbackText.innerText = 'ClimaDent';
                  parentElement.appendChild(fallbackText);
                }
              }}
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-foreground hover:text-[#4361EE] transition-smooth">Servicios</a>
          <a href="#testimonios" className="text-foreground hover:text-[#4361EE] transition-smooth">Testimonios</a>
          <a href="#casos" className="text-foreground hover:text-[#4361EE] transition-smooth">Casos de Éxito</a>
          <a href="#proceso" className="text-foreground hover:text-[#4361EE] transition-smooth">Nuestro Proceso</a>
          <a href="#contacto" className="btn-primary bg-gradient-to-r from-[#4361EE] to-[#7E69AB] text-white">Contactar</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col space-y-6 p-8 text-center">
          <a 
            href="#servicios" 
            className="text-lg font-medium hover:text-[#4361EE] transition-smooth"
            onClick={() => setMobileMenuOpen(false)}
          >
            Servicios
          </a>
          <a 
            href="#testimonios" 
            className="text-lg font-medium hover:text-[#4361EE] transition-smooth"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonios
          </a>
          <a 
            href="#casos" 
            className="text-lg font-medium hover:text-[#4361EE] transition-smooth"
            onClick={() => setMobileMenuOpen(false)}
          >
            Casos de Éxito
          </a>
          <a 
            href="#proceso" 
            className="text-lg font-medium hover:text-[#4361EE] transition-smooth"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nuestro Proceso
          </a>
          <a 
            href="#contacto" 
            className="btn-primary bg-gradient-to-r from-[#4361EE] to-[#7E69AB] mx-auto w-full max-w-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contactar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
