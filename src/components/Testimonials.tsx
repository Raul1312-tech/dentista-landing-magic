
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  clinic: string;
  content: string;
  stars: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Carlos Mendoza",
    role: "Director",
    clinic: "Clínica Dental Mendoza",
    content: "Desde que trabajamos con ellos hemos duplicado nuestras primeras visitas mensuales, pasando de 25 a más de 50. Su enfoque específico en el sector dental marca la diferencia.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Dra. Laura Sánchez",
    role: "Propietaria",
    clinic: "Centro Odontológico Sánchez",
    content: "Invertir en sus servicios ha sido la mejor decisión para mi clínica. Su estrategia nos ha permitido aumentar nuestra facturación en un 40% en solo 3 meses.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Dr. Miguel Ángel Torres",
    role: "Ortodoncista",
    clinic: "Ortodent",
    content: "Sus campañas están perfectamente dirigidas al paciente dental. Conseguimos pacientes de calidad que buscan tratamientos de alto valor. Hemos triplicado nuestros casos de ortodoncia.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Dra. Elena Martínez",
    role: "Directora Médica",
    clinic: "Clínica Dental Integral",
    content: "Mi clínica estaba estancada hasta que empezamos a trabajar con ellos. Ahora tenemos los 3 gabinetes siempre ocupados y estamos pensando en ampliar.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialCards = testimonialsRef.current?.querySelectorAll('.testimonial-card');
            testimonialCards?.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-scale');
                card.classList.remove('opacity-0');
              }, i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonios" className="section-padding bg-dental-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block text-dental-blue mb-4 animate-on-scroll">
            <Quote size={32} strokeWidth={2} className="mx-auto" />
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-dental-darkgray max-w-2xl mx-auto animate-on-scroll">
            Dentistas de toda España confían en nosotros para aumentar su número de pacientes y facturación.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card opacity-0 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl card-hover glass-darker transition-smooth"
            >
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-dental-blue/30"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-dental-blue/20 flex items-center justify-center mr-4">
                    <span className="text-dental-blue font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-base">{testimonial.name}</h3>
                  <p className="text-dental-darkgray text-sm">{testimonial.role}, {testimonial.clinic}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={cn(
                      "mr-1",
                      i < testimonial.stars ? "fill-dental-blue text-dental-blue" : "text-gray-300"
                    )} 
                  />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
