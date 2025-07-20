
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Car, Coffee, Tv, Bath, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RoomsSection = () => {
  const { toast } = useToast();

  const rooms = [
    {
      name: 'Quarto Deluxe',
      price: '€180',
      size: '35m²',
      guests: '2',
      description: 'Elegante quarto com vista para a cidade, decoração contemporânea e todas as comodidades modernas.',
      amenities: ['Wi-Fi Gratuito', 'TV Smart', 'Minibar', 'Cofre', 'Ar Condicionado'],
      features: [
        { icon: Users, text: 'Até 2 hóspedes' },
        { icon: Wifi, text: 'Wi-Fi gratuito' },
        { icon: Tv, text: 'TV Smart 55"' },
        { icon: Coffee, text: 'Minibar premium' }
      ]
    },
    {
      name: 'Suite Executiva',
      price: '€320',
      size: '55m²',
      guests: '3',
      description: 'Espaçosa suite com área de estar separada, ideal para viajantes de negócios e estadias prolongadas.',
      amenities: ['Sala de Estar', 'Escritório', 'Vista Panorâmica', 'Serviço de Quarto 24h'],
      features: [
        { icon: Users, text: 'Até 3 hóspedes' },
        { icon: Wifi, text: 'Wi-Fi premium' },
        { icon: Car, text: 'Estacionamento incluído' },
        { icon: Bath, text: 'Banheira de hidromassagem' }
      ]
    },
    {
      name: 'Suite Presidencial',
      price: '€650',
      size: '85m²',
      guests: '4',
      description: 'A nossa suite mais luxuosa com terraço privado, decoração exclusiva e serviços personalizados.',
      amenities: ['Terraço Privado', 'Mordomo Pessoal', 'Champagne de Boas-vindas', 'Transfer Gratuito'],
      features: [
        { icon: Users, text: 'Até 4 hóspedes' },
        { icon: Wifi, text: 'Wi-Fi dedicado' },
        { icon: Car, text: 'Valet parking' },
        { icon: Bath, text: 'Spa privado' }
      ]
    }
  ];

  const handleBooking = (roomName) => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handleViewDetails = (roomName) => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <section id="quartos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Quartos & <span className="text-gradient">Suites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada acomodação é cuidadosamente projetada para oferecer o máximo conforto e elegância
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                {index === 0 && (
                  <img  
                    className="w-full h-full object-cover"
                    alt="Quarto Deluxe com decoração elegante e vista para a cidade"
                   src="https://images.unsplash.com/photo-1633282429041-0ba41b9effca" />
                )}
                {index === 1 && (
                  <img  
                    className="w-full h-full object-cover"
                    alt="Suite Executiva espaçosa com área de estar e escritório"
                   src="https://images.unsplash.com/photo-1655314873087-a3ca9343e8cf" />
                )}
                {index === 2 && (
                  <img  
                    className="w-full h-full object-cover"
                    alt="Suite Presidencial luxuosa com terraço privado e decoração exclusiva"
                   src="https://images.unsplash.com/photo-1660562229022-ddf20f275066" />
                )}
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-gray-900">{room.size}</span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-gray-900">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600">{room.price}</div>
                    <div className="text-sm text-gray-500">por noite</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <feature.icon className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm text-gray-600">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Comodidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, amenityIndex) => (
                      <span
                        key={amenityIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={() => handleBooking(room.name)}
                    className="w-full luxury-gradient text-white hover:opacity-90 transition-opacity"
                  >
                    Reservar Agora
                  </Button>
                  <Button
                    onClick={() => handleViewDetails(room.name)}
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Todas as Acomodações Incluem
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Wi-Fi Gratuito de Alta Velocidade',
                'Serviço de Limpeza Diário',
                'Amenities de Banho Premium',
                'Serviço de Concierge 24h'
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
