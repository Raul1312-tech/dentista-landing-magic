import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-[#0b0e1a]/80 backdrop-blur-md border-b border-white/5"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            {process.env.NEXT_PUBLIC_SITE_LOGO ? (
              <img
                src={process.env.NEXT_PUBLIC_SITE_LOGO}
                alt={process.env.NEXT_PUBLIC_SITE_NAME || "Landing Magic"}
                width={180}
                height={45}
                className="object-contain h-10"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = 'text-white font-bold text-xl';
                    span.textContent = process.env.NEXT_PUBLIC_SITE_NAME || "Landing Magic";
                    parent.appendChild(span);
                  }
                }}
              />
            ) : (
              <span className="text-white font-bold text-xl">
                {process.env.NEXT_PUBLIC_SITE_NAME || "Landing Magic"}
              </span>
            )}
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <a
              href="#servicios"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Servicios
            </a>
            <a
              href="#casos"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Casos de Éxito
            </a>
            <a
              href="#proceso"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Nuestro Proceso
            </a>
            <a
              href="#testimonios"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Preguntas
            </a>
            <a
              href="#contacto"
              className="bg-white text-[#141b2d] px-5 py-2 rounded-md font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-[#0b0e1a]/95 backdrop-blur-md transition-transform duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-8 py-20">
          <nav className="flex flex-col space-y-6 items-center">
            <a
              href="#servicios"
              className="text-white/90 hover:text-white transition-colors duration-200 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#casos"
              className="text-white/90 hover:text-white transition-colors duration-200 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Casos de Éxito
            </a>
            <a
              href="#proceso"
              className="text-white/90 hover:text-white transition-colors duration-200 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nuestro Proceso
            </a>
            <a
              href="#testimonios"
              className="text-white/90 hover:text-white transition-colors duration-200 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="text-white/90 hover:text-white transition-colors duration-200 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Preguntas
            </a>
            <a
              href="#contacto"
              className="bg-white text-[#141b2d] px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors duration-200 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
