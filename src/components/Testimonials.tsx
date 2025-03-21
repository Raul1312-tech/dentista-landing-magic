
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Quote, Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  clinic: string;
  content: string;
  stars: number;
  image?: string;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Carlos Mendoza",
    role: "Director",
    clinic: "Clínica Dental Mendoza",
    content: "Desde que trabajamos con ellos hemos duplicado nuestras primeras visitas mensuales, pasando de 25 a más de 50. Su enfoque específico en el sector dental marca la diferencia.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Dra. Laura Sánchez",
    role: "Propietaria",
    clinic: "Centro Odontológico Sánchez",
    content: "Invertir en sus servicios ha sido la mejor decisión para mi clínica. Su estrategia nos ha permitido aumentar nuestra facturación en un 40% en solo 3 meses.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Dr. Miguel Ángel Torres",
    role: "Ortodoncista",
    clinic: "Ortodent",
    content: "Sus campañas están perfectamente dirigidas al paciente dental. Conseguimos pacientes de calidad que buscan tratamientos de alto valor. Hemos triplicado nuestros casos de ortodoncia.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    name: "Dra. Elena Martínez",
    role: "Directora Médica",
    clinic: "Clínica Dental Integral",
    content: "Mi clínica estaba estancada hasta que empezamos a trabajar con ellos. Ahora tenemos los 3 gabinetes siempre ocupados y estamos pensando en ampliar.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);

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

  const openVideoModal = (id: number) => {
    setActiveTestimonial(id);
  };

  const closeVideoModal = () => {
    setActiveTestimonial(null);
  };

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-b from-white to-[#f0f4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block text-[#4361EE] mb-4 animate-on-scroll">
            <Quote size={32} strokeWidth={2} className="mx-auto" />
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-dental-darkgray max-w-2xl mx-auto animate-on-scroll">
            Dentistas de toda España confían en nosotros para aumentar su número de pacientes y facturación.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="relative">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div 
                    className="testimonial-card opacity-0 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl card-hover glass-darker transition-smooth h-full mx-2"
                  >
                    <div className="flex items-center mb-4">
                      {testimonial.image ? (
                        <div className="mr-4 relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#4361EE]/30"
                          />
                          {testimonial.videoUrl && (
                            <button 
                              className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#4361EE] flex items-center justify-center text-white hover:bg-[#7E69AB] transition-colors"
                              onClick={() => openVideoModal(testimonial.id)}
                              aria-label={`Ver video de ${testimonial.name}`}
                            >
                              <Play size={12} />
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-[#4361EE]/20 flex items-center justify-center mr-4">
                          <span className="text-[#4361EE] font-bold text-xl">
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
                            i < testimonial.stars ? "fill-[#4361EE] text-[#4361EE]" : "text-gray-300"
                          )} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-foreground leading-relaxed">{testimonial.content}</p>
                    
                    {testimonial.videoUrl && (
                      <button 
                        className="mt-4 flex items-center gap-2 text-[#4361EE] hover:text-[#7E69AB] transition-colors font-medium"
                        onClick={() => openVideoModal(testimonial.id)}
                      >
                        <Play size={16} /> Ver testimonio en video
                      </button>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-[#4361EE]/20 hover:bg-[#4361EE] hover:text-white transition-colors" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-[#4361EE]/20 hover:bg-[#4361EE] hover:text-white transition-colors" />
          </Carousel>
        </div>
      </div>

      {/* Video Modal */}
      {activeTestimonial !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full">
            <button 
              className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-[#4361EE] hover:text-white transition-colors"
              onClick={closeVideoModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={testimonials.find(t => t.id === activeTestimonial)?.videoUrl} 
                title={`${testimonials.find(t => t.id === activeTestimonial)?.name} Testimonio`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
