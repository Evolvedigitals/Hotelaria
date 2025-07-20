
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SearchSection = () => {
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1'
  });
  
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    if (!searchData.checkIn || !searchData.checkOut) {
      toast({
        title: "Por favor, selecione as datas de check-in e check-out",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <section className="relative -mt-20 z-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-luxury p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
              Encontre a sua <span className="text-gradient">Estadia Perfeita</span>
            </h2>
            <p className="text-gray-600">
              Verifique a disponibilidade e reserve o seu quarto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Check-in Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Data de Check-in
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                />
                <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Data de Check-out
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  min={searchData.checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                />
                <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Number of Guests */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Hóspedes
              </label>
              <div className="relative">
                <select
                  value={searchData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors appearance-none"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Hóspede' : 'Hóspedes'}
                    </option>
                  ))}
                </select>
                <Users className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Number of Rooms */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Quartos
              </label>
              <select
                value={searchData.rooms}
                onChange={(e) => handleInputChange('rooms', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
              >
                {[1,2,3,4,5].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Quarto' : 'Quartos'}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 opacity-0">
                Pesquisar
              </label>
              <Button
                onClick={handleSearch}
                className="w-full h-12 luxury-gradient text-white hover:opacity-90 transition-opacity"
              >
                <Search className="w-5 h-5 mr-2" />
                Verificar Disponibilidade
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => toast({ title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀" })}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              >
                Ofertas Especiais
              </button>
              <span className="text-gray-300">•</span>
              <button 
                onClick={() => toast({ title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀" })}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              >
                Pacotes Românticos
              </button>
              <span className="text-gray-300">•</span>
              <button 
                onClick={() => toast({ title: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀" })}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              >
                Estadias Prolongadas
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;
