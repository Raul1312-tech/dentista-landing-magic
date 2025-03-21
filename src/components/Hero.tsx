
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Animation on scroll for elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
      el.classList.add('opacity-0');
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('servicios');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-dental-blue/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-dental-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-dental-lightblue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tag line */}
          <div className="inline-block px-4 py-1 rounded-full bg-dental-blue/10 text-dental-blue font-medium text-sm mb-6 animate-fade-in">
            Especialistas en Marketing para Clínicas Dentales
          </div>
          
          {/* Headline */}
          <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-dental-blue">Multiplica</span> la Captación de Pacientes y{' '}
            <span className="text-dental-blue">Transforma</span> tu Clínica Dental
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-dental-darkgray mb-10 max-w-3xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Generamos un flujo constante de primeras visitas para tu clínica dental mediante campañas de alto impacto en redes sociales, aumentando tu facturación y pacientes recurrentes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#contacto" className="btn-primary">
              Quiero Más Pacientes
            </a>
            <a href="#casos" className="btn-secondary">
              Ver Casos de Éxito
            </a>
          </div>
          
          {/* Video Section */}
          <div 
            ref={videoRef}
            className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/20 animate-fade-in glass-darker" 
            style={{ animationDelay: '0.8s' }}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Dent Marketing" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-dental-blue transition-smooth"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
