import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TikTokGallery from './components/TikTokGallery';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TikTokGallery />
        <LocationHours />
      </main>
      <Footer />
    </div>
  );
}

export default App;
