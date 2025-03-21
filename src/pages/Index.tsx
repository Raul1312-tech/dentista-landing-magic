
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Roadmap from '@/components/Roadmap';
import ContactForm from '@/components/ContactForm';
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Services section */}
        <section id="servicios" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-dental-blue/10 text-dental-blue font-medium text-sm px-4 py-1 rounded-full mb-4 animate-on-scroll">
                Nuestros Servicios
              </div>
              <h2 className="heading-lg mb-4 animate-on-scroll">Soluciones Especializadas para Clínicas Dentales</h2>
              <p className="text-lg text-dental-darkgray max-w-2xl mx-auto animate-on-scroll">
                Nos enfocamos exclusivamente en el sector dental para ofrecer resultados excepcionales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-darker animate-on-scroll card-hover">
                <div className="w-14 h-14 rounded-full bg-dental-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Campañas en Redes Sociales</h3>
                <p className="text-dental-darkgray mb-4">
                  Diseñamos y gestionamos campañas publicitarias en Facebook e Instagram específicamente orientadas a captar primeras visitas de alta calidad.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Segmentación geográfica precisa</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Creatividades optimizadas</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Optimización continua</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-darker animate-on-scroll card-hover" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 rounded-full bg-dental-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Estrategia de Marketing Dental</h3>
                <p className="text-dental-darkgray mb-4">
                  Desarrollamos un plan integral que incluye análisis de competencia, posicionamiento y mensajes clave adaptados a cada tratamiento.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Análisis de público objetivo</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Plan de acción personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Objetivos claros y medibles</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-darker animate-on-scroll card-hover" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 rounded-full bg-dental-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Análisis y Optimización</h3>
                <p className="text-dental-darkgray mb-4">
                  Monitorización constante de resultados con informes detallados y ajustes estratégicos para maximizar el retorno de inversión.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Informes semanales de rendimiento</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Optimización en tiempo real</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-blue mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Análisis de coste por paciente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <CaseStudies />
        <Roadmap />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
