
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservation = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Quartos', href: '#quartos' },
    { name: 'Comodidades', href: '#comodidades' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Localização', href: '/localizacao' }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={`font-serif text-2xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Hotel Luxuria
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-colors hover:text-yellow-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-yellow-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${location.pathname === item.href ? 'text-yellow-600' : ''}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${
              isScrolled ? 'text-gray-600' : 'text-white/80'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="text-sm">+351 123 456 789</span>
            </div>
            <Button 
              onClick={handleReservation}
              className="luxury-gradient text-white hover:opacity-90 transition-opacity"
            >
              Reservar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md ${
                      location.pathname === item.href ? 'text-yellow-600 bg-gray-50' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+351 123 456 789</span>
                </div>
                <Button 
                  onClick={handleReservation}
                  className="w-full luxury-gradient text-white"
                >
                  Reservar Agora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
