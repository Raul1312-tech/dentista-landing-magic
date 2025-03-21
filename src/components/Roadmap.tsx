
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Search, 
  Phone, 
  LineChart, 
  Trophy, 
  Database, 
  Users, 
  Zap, 
  BarChart3,
  Presentation,
  Headphones
} from 'lucide-react';

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  animation: string;
  color: string;
  delay: number;
}

const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    title: "Análisis de tu clínica",
    description: "Nuestro equipo analizará todas las áreas de tu clínica para descubrir beneficios ocultos, puntos de mejora, y reforzar tus fortalezas.",
    icon: <Search size={28} />,
    animation: "animate-float",
    color: "#4361EE",
    delay: 0
  },
  {
    id: 2,
    title: "Creación de estrategia",
    description: "Desarrollamos escaleras de valor para cada tratamiento que quieras publicitar, maximizando la conversión en cada etapa.",
    icon: <Presentation size={28} />,
    animation: "animate-pulse-slow",
    color: "#7E69AB",
    delay: 0.1
  },
  {
    id: 3,
    title: "Configuración de campañas",
    description: "Creamos y configuramos anuncios específicos orientados a tu cliente ideal, con segmentación precisa por edad, ubicación e intereses.",
    icon: <Zap size={28} />,
    animation: "animate-fade-in-right",
    color: "#4361EE",
    delay: 0.2
  },
  {
    id: 4,
    title: "Formación de recepción",
    description: "Entrenamos a tu equipo para convertirse en expertos en preventa telefónica, maximizando la conversión de llamadas a visitas.",
    icon: <Headphones size={28} />,
    animation: "animate-scale",
    color: "#7E69AB",
    delay: 0.3
  },
  {
    id: 5,
    title: "Implementación de CRM",
    description: "Configuramos un sistema CRM automatizado para la recepción de datos de pacientes, seguimiento y gestión eficiente de leads.",
    icon: <Users size={28} />,
    animation: "animate-fade-in-left",
    color: "#4361EE",
    delay: 0.4
  },
  {
    id: 6,
    title: "Aumento de facturación",
    description: "Comenzarás a recibir un flujo constante de primeras visitas, aumentando la ocupación de tus gabinetes y tu facturación mensual.",
    icon: <Trophy size={28} />,
    animation: "animate-blur-in",
    color: "#7E69AB",
    delay: 0.5
  }
];

const Roadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.roadmap-step');
            steps.forEach((step, i) => {
              setTimeout(() => {
                step.classList.add('visible');
                step.classList.remove('invisible');
              }, i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proceso" className="section-padding bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 text-white font-medium text-sm px-4 py-1 rounded-full mb-4 animate-on-scroll backdrop-blur-sm">
            Nuestro Proceso
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll text-white">El Camino Hacia Tu Éxito</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll">
            Un proceso claro y orientado a resultados para transformar tu clínica dental
          </p>
        </div>
        
        <div 
          ref={roadmapRef} 
          className="max-w-6xl mx-auto relative"
        >
          {/* Línea central vertical - solo visible en dispositivos medianos y grandes */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#4361EE] via-[#7E69AB] to-[#4361EE] transform -translate-x-1/2"></div>
          
          {roadmapSteps.map((step, index) => (
            <div 
              key={step.id} 
              className={cn(
                "roadmap-step invisible relative mb-16 md:mb-28",
                "flex flex-col md:flex-row items-center",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
              style={{ 
                animationDelay: `${step.delay}s`,
                animationDuration: '0.8s'
              }}
            >
              {/* Círculo de conexión en la línea central - solo visible en dispositivos medianos y grandes */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#4361EE] to-[#7E69AB] rounded-full z-10"></div>
              
              {/* Step icon and number - always centered on small screens */}
              <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center items-center">
                <div className={cn(
                  "relative",
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                )}>
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-2"
                    style={{ 
                      background: `radial-gradient(circle at center, ${step.color} 0%, rgba(0,0,0,0) 70%)`,
                      boxShadow: `0 0 20px ${step.color}80`
                    }}
                  >
                    <div 
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center text-white",
                        step.animation
                      )}
                      style={{ 
                        backgroundColor: step.color,
                        animationIterationCount: 'infinite',
                        animationDuration: '3s'
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <div 
                    className="text-4xl font-bold text-center"
                    style={{ color: step.color }}
                  >
                    {String(step.id).padStart(2, '0')}
                  </div>
                </div>
              </div>
              
              {/* Step content */}
              <div className={cn(
                "md:w-1/2",
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              )}>
                <div 
                  className={cn(
                    "bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10",
                    "hover:border-white/30 transition-all duration-500",
                    "transform hover:scale-105 hover:shadow-lg",
                    step.animation
                  )}
                  style={{ 
                    animationDelay: `${step.delay + 0.3}s`,
                    animationDuration: '1s'
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
              
              {/* Línea de conexión horizontal - solo visible en dispositivos medianos y grandes */}
              <div 
                className={cn(
                  "hidden md:block absolute top-1/2 h-0.5",
                  index % 2 === 0 ? "right-1/2 mr-4" : "left-1/2 ml-4"
                )}
                style={{ 
                  background: `linear-gradient(to ${index % 2 === 0 ? 'left' : 'right'}, ${step.color}, transparent)`,
                  width: '8%'
                }}
              ></div>
            </div>
          ))}
          
          {/* Final step */}
          <div className="mt-16 text-center">
            <div 
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-[#4361EE] to-[#7E69AB] text-white mb-4 animate-pulse"
              style={{ 
                boxShadow: '0 0 30px rgba(126, 105, 171, 0.6)'
              }}
            >
              <Trophy size={42} className="animate-float" style={{ animationIterationCount: 'infinite', animationDuration: '3s' }} />
            </div>
            <h3 className="text-2xl font-bold mb-2">¡Objetivos Alcanzados!</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Tu clínica dental con más primeras visitas, mayor facturación y un crecimiento sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
