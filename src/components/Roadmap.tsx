
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Search, Phone, LineChart, Trophy, BarChart, PieChart, MessageSquare, Zap
} from 'lucide-react';

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    title: "Análisis Inicial",
    description: "Evaluamos tu clínica, competencia y objetivos de crecimiento para diseñar una estrategia personalizada.",
    icon: <Search className="text-dental-blue" size={24} />
  },
  {
    id: 2,
    title: "Consulta Estratégica",
    description: "Presentamos nuestra propuesta detallada y definimos los indicadores clave de rendimiento (KPIs).",
    icon: <Phone className="text-dental-blue" size={24} />
  },
  {
    id: 3,
    title: "Implementación de Campañas",
    description: "Creamos y activamos campañas de alto impacto en redes sociales, optimizadas para tu público objetivo.",
    icon: <Zap className="text-dental-blue" size={24} />,
    highlight: true
  },
  {
    id: 4,
    title: "Seguimiento Continuo",
    description: "Monitorizamos y optimizamos las campañas en tiempo real para maximizar resultados.",
    icon: <LineChart className="text-dental-blue" size={24} />
  },
  {
    id: 5,
    title: "Análisis Mensual",
    description: "Informes detallados de rendimiento y ajustes estratégicos para mejora continua.",
    icon: <BarChart className="text-dental-blue" size={24} />
  },
  {
    id: 6,
    title: "Optimización y Escalado",
    description: "Ampliamos las campañas exitosas e incorporamos nuevos tratamientos para maximizar el crecimiento.",
    icon: <PieChart className="text-dental-blue" size={24} />,
    highlight: true
  }
];

const Roadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = roadmapRef.current?.querySelectorAll('.roadmap-step');
            steps?.forEach((step, i) => {
              setTimeout(() => {
                step.classList.add('animate-fade-in');
                step.classList.remove('opacity-0');
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
    <section id="proceso" className="section-padding bg-dental-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-dental-blue/10 text-dental-blue font-medium text-sm px-4 py-1 rounded-full mb-4 animate-on-scroll">
            Nuestro Proceso
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll">Colaboración Transparente y Efectiva</h2>
          <p className="text-lg text-dental-darkgray max-w-2xl mx-auto animate-on-scroll">
            Un proceso claro y orientado a resultados para transformar tu clínica dental
          </p>
        </div>
        
        <div 
          ref={roadmapRef} 
          className="max-w-5xl mx-auto relative"
        >
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-dental-blue/20 -z-10 hidden md:block" />
          
          <div className="space-y-16">
            {roadmapSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={cn(
                  "roadmap-step opacity-0 relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                  index % 2 !== 0 && "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div 
                  className={cn(
                    "bg-white p-6 rounded-xl shadow-lg glass-darker card-hover",
                    step.highlight && "border-2 border-dental-blue/30",
                    index % 2 === 0 ? "md:text-right md:mr-8" : "md:ml-8"
                  )}
                >
                  <div className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-full bg-dental-blue/10 mb-4",
                    index % 2 === 0 ? "md:float-right md:ml-4" : "md:float-left md:mr-4"
                  )}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-dental-darkgray">{step.description}</p>
                </div>
                
                {/* Timeline node for desktop */}
                <div className="hidden md:flex items-center justify-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full bg-dental-blue text-white flex items-center justify-center font-bold z-10",
                    step.highlight && "animate-pulse-slow"
                  )}>
                    {step.id}
                  </div>
                </div>
                
                {/* For mobile only - empty div to maintain grid */}
                <div className="md:hidden"></div>
              </div>
            ))}
          </div>
          
          {/* Final step */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dental-blue text-white mb-4 animate-float">
              <Trophy size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">¡Objetivos Alcanzados!</h3>
            <p className="text-dental-darkgray max-w-md mx-auto">
              Tu clínica dental con más primeras visitas, mayor facturación y un crecimiento sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
