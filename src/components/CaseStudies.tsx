
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, TrendingUp, Calendar, Users, Activity } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  stats: {
    visitIncrease: string;
    revenue: string;
    timeframe: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Clínica Dental Barcelona",
    description: "Implementamos una campaña de captación enfocada en implantes dentales, segmentando por zonas de alto poder adquisitivo.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    stats: {
      visitIncrease: "145%",
      revenue: "+€75K",
      timeframe: "3 meses"
    }
  },
  {
    id: 2,
    title: "Ortodent Madrid",
    description: "Desarrollamos una estrategia de marketing digital enfocada en tratamientos de ortodoncia invisible para adultos.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    stats: {
      visitIncrease: "92%",
      revenue: "+€110K",
      timeframe: "6 meses"
    }
  },
  {
    id: 3,
    title: "DentalCare Valencia",
    description: "Creamos una campaña centrada en estética dental, aprovechando la temporada de bodas y eventos sociales.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    stats: {
      visitIncrease: "120%",
      revenue: "+€55K",
      timeframe: "4 meses"
    }
  }
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const casesRef = useRef<HTMLDivElement>(null);

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

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

    document.querySelectorAll('.case-animate').forEach((el) => {
      observer.observe(el);
      el.classList.add('opacity-0');
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      nextCase();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="casos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-dental-blue/10 text-dental-blue font-medium text-sm px-4 py-1 rounded-full mb-4 case-animate">
            Historias de Éxito
          </div>
          <h2 className="heading-lg mb-4 case-animate">Casos de Éxito</h2>
          <p className="text-lg text-dental-darkgray max-w-2xl mx-auto case-animate">
            Descubre cómo hemos ayudado a otras clínicas dentales a aumentar significativamente su número de pacientes y facturación.
          </p>
        </div>
        
        <div ref={casesRef} className="max-w-5xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={caseStudy.id}
              className={cn(
                "relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out glass-darker",
                activeCase === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 absolute inset-0 -z-10"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold font-display mb-4">{caseStudy.title}</h3>
                  <p className="text-dental-darkgray mb-6">{caseStudy.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-dental-gray rounded-lg p-4 text-center">
                      <TrendingUp className="text-dental-blue mb-2 mx-auto" size={24} />
                      <p className="text-sm text-dental-darkgray mb-1">Aumento Visitas</p>
                      <p className="text-xl font-bold text-dental-blue">{caseStudy.stats.visitIncrease}</p>
                    </div>
                    
                    <div className="bg-dental-gray rounded-lg p-4 text-center">
                      <Activity className="text-dental-blue mb-2 mx-auto" size={24} />
                      <p className="text-sm text-dental-darkgray mb-1">Facturación</p>
                      <p className="text-xl font-bold text-dental-blue">{caseStudy.stats.revenue}</p>
                    </div>
                    
                    <div className="bg-dental-gray rounded-lg p-4 text-center">
                      <Calendar className="text-dental-blue mb-2 mx-auto" size={24} />
                      <p className="text-sm text-dental-darkgray mb-1">Periodo</p>
                      <p className="text-xl font-bold text-dental-blue">{caseStudy.stats.timeframe}</p>
                    </div>
                  </div>
                  
                  <a href="#contacto" className="btn-primary self-start flex items-center gap-2">
                    Quiero resultados similares <ArrowRight size={18} />
                  </a>
                </div>
                
                <div className="h-64 md:h-auto order-1 md:order-2">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeCase === index ? "bg-dental-blue w-8" : "bg-dental-blue/30"
                )}
                aria-label={`Ver caso ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
