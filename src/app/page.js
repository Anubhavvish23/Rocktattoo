// app/page.js
"use client";
import { useState } from 'react';
import Herosection from '../components/Herosection';
import Floatingnavbar from '../components/Floatingnavbar';
import Products from '../components/Products';
import PermanentTattoo from '../components/perm';
import Contactus from '../components/Contactus';
import Footer from '../components/Footer';
export default function Home() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNavClick = (category) => {
    setCurrentView('category');
    setSelectedCategory(category);
  };

  return (
    <>
      {currentView === 'home' ? (
        <>
          <Herosection />
          <Floatingnavbar />
          <Products onNavClick={handleNavClick} />
          <Contactus />
          <Footer />
        </>
      ) : (
        <>
          {selectedCategory === 'Permanent Tattoo' && (
            <PermanentTattoo onBack={() => setCurrentView('home')} />
          )}
          {/* Add other category components here when needed */}
        </>
      )}
    </>
  );
}