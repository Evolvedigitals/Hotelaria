
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Porto, Portugal',
      rating: 5,
      text: 'Uma experiência absolutamente excepcional! O Hotel Luxuria superou todas as nossas expectativas. O atendimento foi impecável, os quartos luxuosos e a localização perfeita. Definitivamente voltaremos!',
      stay: 'Suite Executiva - 3 noites'
    },
    {
      name: 'John Anderson',
      location: 'Londres, Reino Unido',
      rating: 5,
      text: 'Outstanding service and incredible attention to detail. The staff went above and beyond to make our stay memorable. The spa facilities are world-class and the restaurant is simply divine.',
      stay: 'Suite Presidencial - 5 noites'
    },
    {
      name: 'Sophie Dubois',
      location: 'Paris, França',
      rating: 5,
      text: 'Un séjour magnifique dans un hôtel d\'exception. Le personnel est aux petits soins, les chambres sont somptueuses et la vue sur Lisbonne est à couper le souffle. Une adresse à retenir absolument!',
      stay: 'Quarto Deluxe - 2 noites'
    },
    {
      name: 'Carlos Rodriguez',
      location: 'Madrid, Espanha',
      rating: 5,
      text: 'Increíble experiencia en el Hotel Luxuria. Desde el momento de la llegada hasta la salida, todo fue perfecto. Las instalaciones son de primera clase y el servicio es excepcional.',
      stay: 'Suite Executiva - 4 noites'
    },
    {
      name: 'Ana Costa',
      location: 'Lisboa, Portugal',
      rating: 5,
      text: 'Como lisboeta, posso dizer que o Hotel Luxuria é verdadeiramente especial. Celebrámos o nosso aniversário de casamento aqui e foi mágico. O spa é divinal e o restaurante serve a melhor comida da cidade.',
      stay: 'Suite Presidencial - 1 noite'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            O que dizem os nossos <span className="text-gradient">Hóspedes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experiências reais de quem escolheu o Hotel Luxuria para momentos especiais
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
                <Quote className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                
                <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 font-light">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-300">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-sm text-yellow-400">
                    {testimonials[currentTestimonial].stay}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '4.9', label: 'Avaliação Média', suffix: '/5' },
            { number: '2,500+', label: 'Hóspedes Satisfeitos', suffix: '' },
            { number: '98%', label: 'Taxa de Recomendação', suffix: '' },
            { number: '15+', label: 'Prémios Recebidos', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Avaliado em múltiplas plataformas:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-white font-semibold">TripAdvisor</span>
            <span className="text-white font-semibold">Booking.com</span>
            <span className="text-white font-semibold">Google Reviews</span>
            <span className="text-white font-semibold">Expedia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
