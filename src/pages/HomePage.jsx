import React from 'react';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection.jsx';
import RoomsSection from '@/components/RoomsSection.jsx';
import AmenitiesSection from '@/components/AmenitiesSection.jsx';
import GallerySection from '@/components/GallerySection.jsx';
import TestimonialsSection from '@/components/TestimonialsSection.jsx';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SearchSection />
      <RoomsSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;