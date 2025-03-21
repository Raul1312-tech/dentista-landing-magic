
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    clinicName: '',
    cabinets: '',
    currentVisits: '',
    targetVisits: '',
    previousExperience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto",
        variant: "default",
      });
      
      // Reset form after showing success state
      setTimeout(() => {
        setFormData({
          fullName: '',
          clinicName: '',
          cabinets: '',
          currentVisits: '',
          targetVisits: '',
          previousExperience: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#f8faff] to-white">
      {/* Background elements */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-[#4361EE]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#7E69AB]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="heading-lg mb-4 animate-on-scroll">
              Completa este Cuestionario Antes de Nuestra Reunión
            </h2>
            <p className="text-lg text-dental-darkgray max-w-2xl mx-auto animate-on-scroll">
              Para preparar una estrategia personalizada, necesitamos conocer mejor tu clínica.
              Rellena estos datos que revisaremos juntos durante nuestra próxima reunión.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 glass-darker animate-on-scroll hover:shadow-2xl transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First row - Name and Clinic Name */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="label-field">Nombre completo *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="input-field hover:border-[#4361EE]/50 focus:border-[#4361EE] transition-colors"
                    placeholder="Dr. Juan Pérez"
                  />
                </div>
                
                <div>
                  <label htmlFor="clinicName" className="label-field">Nombre de la clínica *</label>
                  <input
                    id="clinicName"
                    name="clinicName"
                    type="text"
                    required
                    value={formData.clinicName}
                    onChange={handleChange}
                    className="input-field hover:border-[#4361EE]/50 focus:border-[#4361EE] transition-colors"
                    placeholder="Clínica Dental Sonrisa"
                  />
                </div>
              </div>
              
              {/* Second row - Numbers */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="cabinets" className="label-field">Número de gabinetes *</label>
                  <input
                    id="cabinets"
                    name="cabinets"
                    type="number"
                    required
                    min="1"
                    value={formData.cabinets}
                    onChange={handleChange}
                    className="input-field hover:border-[#4361EE]/50 focus:border-[#4361EE] transition-colors"
                    placeholder="3"
                  />
                </div>
                
                <div>
                  <label htmlFor="currentVisits" className="label-field">Primeras visitas/mes actuales *</label>
                  <input
                    id="currentVisits"
                    name="currentVisits"
                    type="number"
                    required
                    min="0"
                    value={formData.currentVisits}
                    onChange={handleChange}
                    className="input-field hover:border-[#4361EE]/50 focus:border-[#4361EE] transition-colors"
                    placeholder="20"
                  />
                </div>
                
                <div>
                  <label htmlFor="targetVisits" className="label-field">Primeras visitas objetivo *</label>
                  <input
                    id="targetVisits"
                    name="targetVisits"
                    type="number"
                    required
                    min="1"
                    value={formData.targetVisits}
                    onChange={handleChange}
                    className="input-field hover:border-[#4361EE]/50 focus:border-[#4361EE] transition-colors"
                    placeholder="50"
                  />
                </div>
              </div>
              
              {/* Third row - Previous experience */}
              <div>
                <label htmlFor="previousExperience" className="label-field">Experiencias previas con marketing digital</label>
                <textarea
                  id="previousExperience"
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleChange}
                  className="input-field min-h-[120px] hover:border-[#4361EE]/50 focus:border-[#4361EE] transition-colors"
                  placeholder="Cuéntanos sobre tus experiencias previas con marketing digital..."
                ></textarea>
              </div>
              
              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={cn(
                    "btn-primary w-full py-4 text-lg font-medium transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-[#4361EE] to-[#7E69AB] hover:shadow-lg",
                    (isSubmitting || submitted) && "bg-dental-darkblue"
                  )}
                >
                  <span className={cn(
                    "flex items-center justify-center gap-2 transition-opacity duration-300",
                    (isSubmitting || submitted) && "opacity-0"
                  )}>
                    Enviar Información <Send size={18} />
                  </span>
                  
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  )}
                  
                  {submitted && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Check size={24} className="text-white" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
