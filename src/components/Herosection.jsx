"use client";
import React, { useState, useEffect } from 'react';
import { Instagram, MapPin, Clock, Phone, ChevronRight, Star } from 'lucide-react';

const SplitText = ({ children }) => {
  return (
    <span className="inline-block overflow-hidden">
      {children.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block translate-y-full animate-slideUp"
          style={{
            animationDelay: `${i * 0.05}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const HeroCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/bg.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>
    </div>
  );
};

const GoogleRatings = () => {
  return (
    <div className="w-full max-w-xs mx-auto mt-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-2xl border border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-white font-bold text-lg ml-2">4.5</span>
        </div>
        <p className="text-gray-300 text-sm mt-2 text-center">
          Google Ratings
        </p>
      </div>
    </div>
  );
};

const TattooSalonLanding = () => {
  const [hoveredArtist, setHoveredArtist] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas_Neue&family=Montserrat:wght@300;400;600;800&display=swap');

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes borderGlow {
          0% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.6); }
          50% { box-shadow: 0 0 25px rgba(239, 68, 68, 0.9), 0 0 40px rgba(239, 68, 68, 0.4); }
          100% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.6); }
        }
        @keyframes textGlow {
          0% { text-shadow: 0 0 10px rgba(239, 68, 68, 0.6); }
          50% { text-shadow: 0 0 20px rgba(239, 68, 68, 0.9), 0 0 30px rgba(239, 68, 68, 0.4); }
          100% { text-shadow: 0 0 10px rgba(239, 68, 68, 0.6); }
        }
        @keyframes logoRotate {
          from { transform: rotate(0deg) scale(0.8); opacity: 0; }
          to { transform: rotate(360deg) scale(1); opacity: 1; }
        }
        .hover-glow:hover {
          animation: borderGlow 2s infinite;
        }
        .text-glow {
          animation: textGlow 3s infinite;
        }
        .logo-animate {
          animation: logoRotate 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>

      <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="relative z-10 flex items-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0">
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <div className="overflow-hidden mb-4 flex items-center flex-wrap">
              <img 
                src="/logo.jpg"
                alt="Logo" 
                className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full logo-animate shadow-2xl hover:scale-110 transition-transform duration-500 mb-4 lg:mb-0" 
              />
              <h1 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-8xl tracking-wider font-black ml-4">
                <SplitText>ROCK</SplitText>
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <h1 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-8xl tracking-wider text-red-500 text-glow">
                <SplitText>TATTOO</SplitText>
              </h1>
            </div>
            <div 
              className="overflow-hidden mb-8 transform transition-all duration-700 hover:translate-x-2"
              style={{ animationDelay: '0.5s' }}
            >
              <p className="font-['Montserrat'] text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-semibold">
                <SplitText>Where passion meets artistry. Transform your ideas into timeless masterpieces</SplitText>
              </p>
            </div>
            <a 
              href="tel:+919663690821"
              className="inline-block w-full sm:w-auto relative overflow-hidden group bg-red-600 px-8 py-4 rounded-full text-lg sm:text-xl font-extrabold transition-all duration-500 hover:bg-red-700 hover-glow"
            >
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="relative z-10 font-['Montserrat'] tracking-wider">CALL NOW</span>
                <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </a>
            <GoogleRatings />
          </div>
        </div>

        <div className="absolute lg:relative inset-0 lg:inset-auto h-full animate-scaleIn -z-10 lg:z-0">
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}

export default TattooSalonLanding;