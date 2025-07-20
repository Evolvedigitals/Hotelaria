
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      category: 'Exterior',
      title: 'Fachada Principal',
      description: 'Vista impressionante da entrada principal do hotel'
    },
    {
      category: 'Quartos',
      title: 'Suite Presidencial',
      description: 'Luxuosa suite com vista panorâmica da cidade'
    },
    {
      category: 'Restaurante',
      title: 'Dining Room',
      description: 'Ambiente elegante do nosso restaurante gourmet'
    },
    {
      category: 'Spa',
      title: 'Centro de Wellness',
      description: 'Espaço de relaxamento e bem-estar'
    },
    {
      category: 'Piscina',
      title: 'Piscina Infinity',
      description: 'Piscina com vista deslumbrante sobre Lisboa'
    },
    {
      category: 'Eventos',
      title: 'Salão de Eventos',
      description: 'Espaço elegante para celebrações especiais'
    },
    {
      category: 'Lobby',
      title: 'Recepção',
      description: 'Hall de entrada com decoração sofisticada'
    },
    {
      category: 'Quartos',
      title: 'Quarto Deluxe',
      description: 'Conforto e elegância em cada detalhe'
    },
    {
      category: 'Vista',
      title: 'Vista da Cidade',
      description: 'Panorama espetacular de Lisboa'
    }
  ];

  const categories = ['Todos', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Galeria de <span className="text-gradient">Fotos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra a beleza e elegância do Hotel Luxuria através das nossas imagens
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'luxury-gradient text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${image.title}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover-lift"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-w-4 aspect-h-3 h-64">
                  {index === 0 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Fachada principal do Hotel Luxuria com arquitetura elegante"
                     src="https://images.unsplash.com/photo-1695244752938-b77bf05c0a86" />
                  )}
                  {index === 1 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Suite presidencial luxuosa com vista panorâmica da cidade"
                     src="https://images.unsplash.com/photo-1630142346469-e1628a29bd24" />
                  )}
                  {index === 2 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Restaurante gourmet com ambiente elegante e mesa posta"
                     src="https://images.unsplash.com/photo-1560053608-13721e0d69e8" />
                  )}
                  {index === 3 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Centro de wellness e spa com ambiente relaxante"
                     src="https://images.unsplash.com/photo-1651065213855-e6094f99ee65" />
                  )}
                  {index === 4 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Piscina infinity com vista deslumbrante sobre Lisboa"
                     src="https://images.unsplash.com/photo-1673004765673-1ad06d495d79" />
                  )}
                  {index === 5 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Salão de eventos elegante para celebrações especiais"
                     src="https://images.unsplash.com/photo-1698934641149-93431f3bd4f7" />
                  )}
                  {index === 6 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Lobby luxuoso com decoração sofisticada e iluminação elegante"
                     src="https://images.unsplash.com/photo-1683719228269-7398188955af" />
                  )}
                  {index === 7 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Quarto deluxe com decoração elegante e conforto premium"
                     src="https://images.unsplash.com/photo-1699084260268-e7422f82fc7d" />
                  )}
                  {index === 8 && (
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Vista panorâmica espetacular da cidade de Lisboa"
                     src="https://images.unsplash.com/photo-1692694754858-0da124b3babe" />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs bg-yellow-600 px-2 py-1 rounded-full mb-2 inline-block">
                      {image.category}
                    </span>
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 max-h-[80vh]">
                    {currentIndex === 0 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Fachada principal do Hotel Luxuria com arquitetura elegante"
                       src="https://images.unsplash.com/photo-1695244752938-b77bf05c0a86" />
                    )}
                    {currentIndex === 1 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Suite presidencial luxuosa com vista panorâmica da cidade"
                       src="https://images.unsplash.com/photo-1630142346469-e1628a29bd24" />
                    )}
                    {currentIndex === 2 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Restaurante gourmet com ambiente elegante e mesa posta"
                       src="https://images.unsplash.com/photo-1560053608-13721e0d69e8" />
                    )}
                    {currentIndex === 3 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Centro de wellness e spa com ambiente relaxante"
                       src="https://images.unsplash.com/photo-1651065213855-e6094f99ee65" />
                    )}
                    {currentIndex === 4 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Piscina infinity com vista deslumbrante sobre Lisboa"
                       src="https://images.unsplash.com/photo-1673004765673-1ad06d495d79" />
                    )}
                    {currentIndex === 5 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Salão de eventos elegante para celebrações especiais"
                       src="https://images.unsplash.com/photo-1698934641149-93431f3bd4f7" />
                    )}
                    {currentIndex === 6 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Lobby luxuoso com decoração sofisticada e iluminação elegante"
                       src="https://images.unsplash.com/photo-1683719228269-7398188955af" />
                    )}
                    {currentIndex === 7 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Quarto deluxe com decoração elegante e conforto premium"
                       src="https://images.unsplash.com/photo-1699084260268-e7422f82fc7d" />
                    )}
                    {currentIndex === 8 && (
                      <img  
                        className="w-full h-full object-contain"
                        alt="Vista panorâmica espetacular da cidade de Lisboa"
                       src="https://images.unsplash.com/photo-1692694754858-0da124b3babe" />
                    )}
                  </div>
                  
                  {/* Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Image Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs bg-yellow-600 px-2 py-1 rounded-full mb-2 inline-block">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-semibold text-xl">{selectedImage.title}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
