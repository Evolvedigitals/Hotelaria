
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-serif text-2xl font-bold">Hotel Luxuria</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Uma experiência de hospedagem excepcional onde o luxo encontra o conforto. 
              Criamos memórias inesquecíveis para nossos hóspedes.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-xl font-semibold text-gradient">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Avenida da Liberdade, 123</p>
                  <p className="text-gray-300">1250-096 Lisboa, Portugal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-300">+351 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-300">info@hotelluxuria.pt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-xl font-semibold text-gradient">Links Rápidos</span>
            <div className="space-y-2">
              {['Quartos & Suites', 'Restaurante', 'Spa & Wellness', 'Eventos', 'Ofertas Especiais', 'Política de Privacidade'].map((link) => (
                <button
                  key={link}
                  onClick={handleSocialClick}
                  className="block text-gray-300 hover:text-yellow-600 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-xl font-semibold text-gradient">Serviços</span>
            <div className="space-y-2">
              {['Concierge 24h', 'Room Service', 'Transfer Aeroporto', 'Estacionamento Valet', 'Centro de Negócios', 'Lavandaria'].map((service) => (
                <div key={service} className="text-gray-300">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Hotel Luxuria. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button onClick={handleSocialClick} className="hover:text-yellow-600 transition-colors">
                Termos de Uso
              </button>
              <button onClick={handleSocialClick} className="hover:text-yellow-600 transition-colors">
                Política de Privacidade
              </button>
              <button onClick={handleSocialClick} className="hover:text-yellow-600 transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
