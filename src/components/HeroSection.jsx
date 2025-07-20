
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const slides = [
    {
      title: "Experiência de Luxo Incomparável",
      subtitle: "Onde cada detalhe é pensado para o seu conforto",
      description: "Descubra um refúgio de elegância no coração de Lisboa"
    },
    {
      title: "Quartos & Suites Excepcionais",
      subtitle: "Espaços únicos com vista deslumbrante",
      description: "Acomodações luxuosas com todas as comodidades modernas"
    },
    {
      title: "Serviços de Classe Mundial",
      subtitle: "Atendimento personalizado 24 horas",
      description: "Uma equipe dedicada ao seu bem-estar e satisfação"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleReservation = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handleVideoPlay = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {currentSlide === 0 && (
              <img  
                className="w-full h-full object-cover"
                alt="Lobby luxuoso do hotel com decoração elegante e iluminação sofisticada"
               src="https://images.unsplash.com/photo-1683719228269-7398188955af" />
            )}
            {currentSlide === 1 && (
              <img  
                className="w-full h-full object-cover"
                alt="Suite presidencial com vista panorâmica da cidade e decoração requintada"
               src="https://images.unsplash.com/photo-1630142346469-e1628a29bd24" />
            )}
            {currentSlide === 2 && (
              <img  
                className="w-full h-full object-cover"
                alt="Spa e área de wellness com piscina infinita e ambiente relaxante"
               src="https://images.unsplash.com/photo-1604601600542-c751186db4a3" />
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-6"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.h2 
                  className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-light"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-200 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Button 
                    onClick={handleReservation}
                    size="lg"
                    className="luxury-gradient text-white hover:opacity-90 transition-opacity text-lg px-8 py-4"
                  >
                    Reservar Agora
                  </Button>
                  
                  <Button 
                    onClick={handleVideoPlay}
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-lg px-8 py-4"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Ver Vídeo
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
