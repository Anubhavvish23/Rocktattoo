"use client";
import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Phone, MapPin, Youtube, MessageCircle } from 'lucide-react';

const PhotoCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/1.jpg",
    "/9.jpg",
    "/10.jpg",
    "/7.jpg",
    "/8.jpg",
    "/5.jpg",
    "/4.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto h-[32rem] overflow-hidden rounded-2xl">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={img}
              alt={`Tattoo artwork ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-8 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Malleshwaram's Premier Tattoo Studio
        </h1>
        <p className="text-2xl text-gray-200">
          Trusted by celebrities and loved by locals, we've been creating masterpieces since 2017. 
          Our award-winning artists have tattooed numerous Sandalwood celebrities, 
          making us the most sought-after studio in Bangalore.
        </p>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="relative min-h-screen bg-black py-12 px-4">
      <PhotoCarousel />

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-lg rounded-full px-8 py-4 shadow-2xl border border-gray-800">
          <div className="w-[300px] overflow-hidden">
            <div className="flex space-x-8 animate-scroll whitespace-nowrap">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex space-x-8">
                  <a href="https://www.instagram.com/p/DFusKEpyrwV/?igsh=aTN4bW04d2kzb2Fi" className="text-pink-500 hover:text-white transition-all duration-300 hover:scale-110">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.facebook.com/share/14EiLDnFjGq/" className="text-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                    <Facebook size={24} />
                  </a>
                  <a href="https://wa.me/919663690821" className="text-green-500 hover:text-white transition-all duration-300 hover:scale-110">
                    <MessageCircle size={24} />
                  </a>
                  <a href="https://maps.app.goo.gl/s6yjS5wCNUu3PZq16" className="text-red-500 hover:text-white transition-all duration-300 hover:scale-110">
                    <MapPin size={24} />
                  </a>
                  <a href="https://youtube.com/@anilrocktattoos4044?si=tCjuOzA5CVautfR0" className="text-red-500 hover:text-white transition-all duration-300 hover:scale-110">
                    <Youtube size={24} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;