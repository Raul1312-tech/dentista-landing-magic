import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

// Tipo para los elementos que se animan al aparecer en el viewport
type AnimatedElementProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Componente para animar elementos cuando entran en el viewport
const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Dar tiempo para que se monte el componente antes de animarlo
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  // Animation on scroll with safer implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('opacity-0')) {
              entry.target.classList.add('animate-fade-in');
              entry.target.classList.remove('opacity-0');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        observer.observe(el);
        // Don't add opacity-0 if it's already animated
        if (!el.classList.contains('animate-fade-in')) {
          el.classList.add('opacity-0');
        }
      }
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contacto');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24" id="hero">
      {/* Fondo de partículas */}
      <ParticlesBackground />
      
      {/* Degradado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e1a] via-[#121638] to-[#121638] z-0"></div>
      
      {/* Círculos de color con desenfoque */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#4361EE]/20 filter blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-[#7209B7]/20 filter blur-[100px] animate-float-3d"></div>
      
      {/* Contenido principal */}
      <div className="container relative z-10 px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div className="order-2 lg:order-1">
            <AnimatedElement delay={300}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/30 text-white mb-6 text-sm font-medium">
                Marketing Digital para Clínicas Dentales
              </span>
            </AnimatedElement>
            
            <AnimatedElement delay={600}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Multiplica los pacientes de tu clínica dental
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={900}>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Aumenta tus ingresos mensuales con nuestra estrategia de marketing digital especializada para clínicas dentales. Sistema probado con más de 50 clínicas.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={1200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto" 
                  className="btn-primary bg-gradient-to-r from-[#4361EE] to-[#7209B7] text-white hover:shadow-lg hover:shadow-primary/50 group"
                >
                  Solicitar Información
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a 
                  href="#casos" 
                  className="btn-secondary"
                >
                  Ver Casos de Éxito
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          {/* Columna de vídeo con texto encima */}
          <div className="order-1 lg:order-2">
            <AnimatedElement delay={600}>
              <div className="glass-card tech-border p-4 mb-6 max-w-lg mx-auto">
                <h2 className="text-white text-lg md:text-xl font-semibold">
                  ¿Cómo hacemos que clínicas dentales puedan facturar más de 50.000€ extra al mes con nuestras campañas?
                </h2>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={900} className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefghijklmno&controls=1" 
                title="Estrategia de marketing para clínicas dentales" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="absolute inset-0 w-full h-full object-cover"
              ></iframe>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
