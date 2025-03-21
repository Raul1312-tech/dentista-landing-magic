
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

const Index = () => {
  // Preload hero elements and apply initial animations
  useEffect(() => {
    // Add class for transition on initial load
    document.body.classList.add('animate-blur-in');
    
    // Remove class after animation completes
    const timeout = setTimeout(() => {
      document.body.classList.remove('animate-blur-in');
    }, 800);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f0f4ff] to-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ContactForm /> {/* Moved to just after the Hero */}
        
        {/* Services section */}
        <section id="servicios" className="section-padding bg-gradient-to-b from-white to-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#4361EE]/10 text-[#4361EE] font-medium text-sm px-4 py-1 rounded-full mb-4 animate-on-scroll">
                Nuestros Servicios
              </div>
              <h2 className="heading-lg mb-4 animate-on-scroll">Soluciones Especializadas para Clínicas Dentales</h2>
              <p className="text-lg text-dental-darkgray max-w-2xl mx-auto animate-on-scroll">
                Nos enfocamos exclusivamente en el sector dental para ofrecer resultados excepcionales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 - Campañas en Redes Sociales */}
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-darker animate-on-scroll card-hover transform hover:scale-105 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-[#4361EE]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE]">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Campañas en Redes Sociales</h3>
                <p className="text-dental-darkgray mb-4">
                  Diseñamos y gestionamos campañas publicitarias en Facebook e Instagram específicamente orientadas a captar primeras visitas de alta calidad.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Segmentación geográfica precisa</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Creatividades optimizadas</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Optimización continua</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 2 - Community Manager */}
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-darker animate-on-scroll card-hover transform hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 rounded-full bg-[#4361EE]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE]">
                    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Community Manager</h3>
                <p className="text-dental-darkgray mb-4">
                  Gestionamos la presencia digital de tu clínica, generando contenido de valor y respondiendo en tiempo real a todas las interacciones.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Gestión de redes sociales</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Creación de contenido dental</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Respuesta automática 24/7</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 3 - SEO y Posicionamiento */}
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-darker animate-on-scroll card-hover transform hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 rounded-full bg-[#4361EE]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE]">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">SEO y Posicionamiento</h3>
                <p className="text-dental-darkgray mb-4">
                  Optimizamos tu presencia online para que tu clínica aparezca en los primeros resultados de búsqueda para tratamientos dentales.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Optimización on-page</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Link building estratégico</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>SEO local especializado</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 4 - Protocolos de Venta */}
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-darker animate-on-scroll card-hover transform hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.6s' }}>
                <div className="w-14 h-14 rounded-full bg-[#4361EE]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE]">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Protocolos de Venta</h3>
                <p className="text-dental-darkgray mb-4">
                  Formamos a tu equipo en técnicas avanzadas de venta ética para maximizar la aceptación de presupuestos y optimizar tu negocio.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Formación personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Scripts de primera visita</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4361EE] mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Sistemas de seguimiento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <CaseStudies />
        <Roadmap />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
