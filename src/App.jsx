
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import LocationPage from '@/pages/LocationPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>Hotel Luxuria - Experiência de Hospedagem Excepcional</title>
          <meta name="description" content="Descubra o Hotel Luxuria, onde o luxo encontra o conforto. Quartos elegantes, serviços excepcionais e uma localização privilegiada para uma estadia inesquecível." />
        </Helmet>
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/localizacao" element={<LocationPage />} />
        </Routes>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
