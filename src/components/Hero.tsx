
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Particles initialization
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

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
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: 'transparent',
              },
            },
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: ["#4361EE", "#7E69AB", "#6E59A5"],
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: 6,
                random: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
              },
            },
          }}
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4ff] via-white to-[#e6e9ff] -z-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4361EE]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7E69AB]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#6E59A5]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tag line */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#4361EE]/10 text-[#4361EE] font-medium text-sm mb-6 animate-fade-in">
            Especialistas en Marketing para Clínicas Dentales
          </div>
          
          {/* Headline */}
          <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-[#4361EE]">Multiplica</span> la Captación de Pacientes y{' '}
            <span className="text-[#7E69AB]">Transforma</span> tu Clínica Dental
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-dental-darkgray mb-10 max-w-3xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Generamos un flujo constante de primeras visitas para tu clínica dental mediante campañas de alto impacto en redes sociales, aumentando tu facturación y pacientes recurrentes.
          </p>
          
          {/* CTA Buttons - Updated to direct to contact form */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button onClick={scrollToContactForm} className="btn-primary bg-gradient-to-r from-[#4361EE] to-[#7E69AB] hover:scale-105 transition-transform duration-300">
              Completar mi Cuestionario
            </button>
            <a href="#casos" className="btn-secondary hover:scale-105 transition-transform duration-300">
              Ver Casos de Éxito
            </a>
          </div>
          
          {/* Video Section with fixed height and responsive width */}
          <div 
            ref={videoRef}
            className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/20 animate-fade-in glass-darker transform hover:scale-[1.02] transition-all duration-300" 
            style={{ animationDelay: '0.8s' }}
          >
            <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="ClimaDent Marketing" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Scroll indicator - now points to contact form */}
          <button 
            onClick={scrollToContactForm}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-[#4361EE] transition-smooth"
            aria-label="Scroll to contact form"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
