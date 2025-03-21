
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Search, Phone, LineChart, Trophy, Database, Users, Zap, BarChart3
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
    title: "Plan de éxito",
    description: "Prepararemos un plan 360° para que empieces a obtener resultados inmediatamente y liberar tu tiempo de la carga administrativa.",
    icon: <BarChart3 size={28} />,
    animation: "animate-pulse-slow",
    color: "#7E69AB",
    delay: 0.1
  },
  {
    id: 3,
    title: "Marketing magnético",
    description: "Pondremos en marcha estrategias de marketing ético para llenar tu clínica de pacientes de calidad para que pueda seguir creciendo.",
    icon: <Zap size={28} />,
    animation: "animate-fade-in-right",
    color: "#4361EE",
    delay: 0.2
  },
  {
    id: 4,
    title: "Implementación de Campañas",
    description: "Creamos y activamos campañas de alto impacto en redes sociales, optimizadas para tu público objetivo y área geográfica.",
    icon: <Users size={28} />,
    animation: "animate-scale",
    color: "#7E69AB",
    delay: 0.3
  },
  {
    id: 5,
    title: "Análisis y Optimización",
    description: "Informes detallados de rendimiento, coste por paciente y ajustes estratégicos para mejora continua.",
    icon: <LineChart size={28} />,
    animation: "animate-fade-in-left",
    color: "#4361EE",
    delay: 0.4
  },
  {
    id: 6,
    title: "Sistemas Automatizados",
    description: "Te entregaremos todos nuestros sistemas para que tu clínica funcione de forma eficaz y automática para que tus pacientes estén más felices.",
    icon: <Database size={28} />,
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
    <section id="proceso" className="section-padding bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
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
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {roadmapSteps.map((step) => (
              <div 
                key={step.id} 
                className={cn(
                  "roadmap-step invisible relative",
                  step.animation
                )}
                style={{ 
                  animationDelay: `${step.delay}s`,
                  animationDuration: '0.8s'
                }}
              >
                <div className="flex items-start gap-6 bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  {/* Step number and icon */}
                  <div className="flex-shrink-0">
                    <div 
                      className={cn(
                        "flex flex-col items-center"
                      )}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                        style={{ 
                          background: `radial-gradient(circle at center, ${step.color} 0%, rgba(0,0,0,0) 70%)`,
                          boxShadow: `0 0 20px ${step.color}80`
                        }}
                      >
                        <div 
                          className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center text-white",
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
                        className="text-3xl font-bold"
                        style={{ color: step.color }}
                      >
                        {String(step.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
                
                {/* Connection lines - visible only on desktop */}
                {step.id < roadmapSteps.length && step.id % 2 === 1 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-[#4361EE] to-[#7E69AB]"></div>
                )}
                {step.id < roadmapSteps.length && step.id % 2 === 0 && (
                  <div className="hidden md:block absolute -left-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-[#7E69AB] to-[#4361EE]"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Final step */}
          <div className="mt-16 text-center">
            <div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#4361EE] to-[#7E69AB] text-white mb-4 animate-pulse"
              style={{ 
                boxShadow: '0 0 30px rgba(126, 105, 171, 0.6)'
              }}
            >
              <Trophy size={36} />
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
