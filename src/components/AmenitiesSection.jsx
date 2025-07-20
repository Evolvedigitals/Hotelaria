
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Car, 
  Utensils, 
  Waves, 
  Dumbbell, 
  Coffee,
  Shield,
  Clock,
  Users,
  Sparkles,
  MapPin,
  Phone
} from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Wifi,
      title: 'Wi-Fi Premium',
      description: 'Internet de alta velocidade gratuita em todo o hotel'
    },
    {
      icon: Car,
      title: 'Estacionamento Valet',
      description: 'Serviço de estacionamento com manobrista 24 horas'
    },
    {
      icon: Utensils,
      title: 'Restaurante Gourmet',
      description: 'Culinária internacional com chef premiado'
    },
    {
      icon: Waves,
      title: 'Piscina & Spa',
      description: 'Piscina aquecida e centro de bem-estar completo'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Ginásio moderno com equipamentos de última geração'
    },
    {
      icon: Coffee,
      title: 'Room Service 24h',
      description: 'Serviço de quarto disponível a qualquer hora'
    },
    {
      icon: Shield,
      title: 'Segurança 24h',
      description: 'Vigilância e segurança contínua para sua tranquilidade'
    },
    {
      icon: Clock,
      title: 'Concierge',
      description: 'Assistência personalizada para todas as suas necessidades'
    },
    {
      icon: Users,
      title: 'Salas de Reunião',
      description: 'Espaços para eventos e reuniões de negócios'
    },
    {
      icon: Sparkles,
      title: 'Serviço de Limpeza',
      description: 'Limpeza diária e serviços de lavandaria'
    },
    {
      icon: MapPin,
      title: 'Transfer Aeroporto',
      description: 'Transporte gratuito de/para o aeroporto'
    },
    {
      icon: Phone,
      title: 'Suporte Multilíngue',
      description: 'Atendimento em português, inglês, francês e espanhol'
    }
  ];

  const featuredServices = [
    {
      title: 'Spa & Wellness',
      description: 'Centro de bem-estar com tratamentos exclusivos, sauna, banho turco e piscina de hidroterapia.',
      features: ['Massagens Terapêuticas', 'Tratamentos Faciais', 'Aromaterapia', 'Yoga & Meditação']
    },
    {
      title: 'Gastronomia',
      description: 'Experiências culinárias únicas com ingredientes frescos e pratos assinados pelo nosso chef.',
      features: ['Menu Degustação', 'Vinhos Selecionados', 'Cozinha Internacional', 'Serviço Personalizado']
    },
    {
      title: 'Eventos & Negócios',
      description: 'Espaços versáteis para conferências, casamentos e eventos corporativos com tecnologia avançada.',
      features: ['Salas Equipadas', 'Catering Personalizado', 'Suporte Técnico', 'Organização Completa']
    }
  ];

  return (
    <section id="comodidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Comodidades & <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma gama completa de serviços pensados para tornar a sua estadia excepcional
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <amenity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{amenity.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{amenity.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Serviços <span className="text-gradient">Destacados</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 hover-lift"
              >
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <img  
              className="w-full h-full object-cover"
              alt="Spa luxuoso com piscina de hidroterapia e ambiente relaxante"
             src="https://images.unsplash.com/photo-1694967456324-bf77c9975132" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-serif font-bold mb-2">Spa & Wellness</h4>
              <p className="text-sm opacity-90">Relaxe e rejuvenesça no nosso centro de bem-estar</p>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <img  
              className="w-full h-full object-cover"
              alt="Restaurante gourmet com ambiente elegante e culinária internacional"
             src="https://images.unsplash.com/photo-1686591711867-1731a2024586" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-serif font-bold mb-2">Gastronomia</h4>
              <p className="text-sm opacity-90">Sabores únicos criados pelo nosso chef premiado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
