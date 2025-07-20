
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car, Plane, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const LocationPage = () => {
  const { toast } = useToast();

  const handleDirections = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const attractions = [
    { name: 'Castelo de São Jorge', distance: '2.5 km', time: '8 min' },
    { name: 'Rossio Square', distance: '1.2 km', time: '4 min' },
    { name: 'Chiado', distance: '800 m', time: '3 min' },
    { name: 'Bairro Alto', distance: '1.5 km', time: '6 min' },
    { name: 'Cais do Sodré', distance: '2.1 km', time: '7 min' },
    { name: 'Aeroporto de Lisboa', distance: '8.5 km', time: '15 min' }
  ];

  const transportOptions = [
    {
      icon: Car,
      title: 'De Carro',
      description: 'Estacionamento valet disponível 24h',
      details: 'Acesso direto pela A1 e A2'
    },
    {
      icon: Plane,
      title: 'Do Aeroporto',
      description: 'Transfer privado disponível',
      details: '15 minutos do Aeroporto Humberto Delgado'
    },
    {
      icon: Train,
      title: 'Transporte Público',
      description: 'Metro e autocarros próximos',
      details: 'Estação Avenida a 200m'
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Localização - Hotel Luxuria</title>
        <meta name="description" content="Descubra a localização privilegiada do Hotel Luxuria no coração de Lisboa. Próximo às principais atrações e com fácil acesso a transportes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover"
            alt="Vista aérea de Lisboa com destaque para a localização do hotel"
           src="https://images.unsplash.com/photo-1580639765484-d41f27a64bd5" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Localização <span className="text-gradient">Privilegiada</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              No coração de Lisboa, próximo às principais atrações da cidade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map and Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Encontre-nos
                </h2>
                <p className="text-gray-600 text-lg">
                  Localizado na prestigiada Avenida da Liberdade, o Hotel Luxuria oferece 
                  acesso fácil a todas as maravilhas de Lisboa.
                </p>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img  
                  className="w-full h-full object-cover"
                  alt="Mapa interativo mostrando a localização do Hotel Luxuria em Lisboa"
                 src="https://images.unsplash.com/photo-1586448428670-33f1c28fce94" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button 
                    onClick={handleDirections}
                    className="luxury-gradient text-white hover:opacity-90"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver Direções
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Informações de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p className="text-gray-600">
                        Avenida da Liberdade, 123<br />
                        1250-096 Lisboa, Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                      <p className="text-gray-600">+351 123 456 789</p>
                      <p className="text-sm text-gray-500">Disponível 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@hotelluxuria.pt</p>
                      <p className="text-sm text-gray-500">Resposta em 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Check-in / Check-out</h4>
                      <p className="text-gray-600">
                        Check-in: 15:00<br />
                        Check-out: 12:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Atrações <span className="text-gradient">Próximas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore o melhor de Lisboa a partir da nossa localização central
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover-lift"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{attraction.name}</h3>
                  <span className="text-sm text-yellow-600 font-medium">{attraction.time}</span>
                </div>
                <p className="text-gray-600">{attraction.distance}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Como <span className="text-gradient">Chegar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Múltiplas opções de transporte para sua conveniência
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 luxury-gradient rounded-full flex items-center justify-center mx-auto">
                  <option.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
                <p className="text-sm text-gray-500">{option.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
