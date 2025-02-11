"use client";
import React, { useState, useRef } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import PermanentTattoo from './perm';
import TemporaryTattoo from './temp';
import ColorTattoo from './color';
import RemoveTattoo from './remove';
import Piercings from './nose';

const ProductCategories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollContainerRef = useRef(null);

  const mainCategories = [
    { title: 'Permanent Tattoo', description: '', image: '/perm.jpg' },
    { title: 'Nose & ear piercing', description: '', image: '/n1.jpg' },
    { title: 'Temproary Tattoo', description: '', image: '/t6.jpg' },
    { title: 'Colour Tattoo', description: '', image: '/color.jpg' },
    { title: 'Tattoo Removal', description: '', image: '/remove.jpg' }
  ];

  // Component mapping object
  const categoryComponents = {
    'Permanent Tattoo': PermanentTattoo,
    'Nose & ear piercing': Piercings,
    'Temproary Tattoo': TemporaryTattoo,
    'Colour Tattoo': ColorTattoo,
    'Tattoo Removal': RemoveTattoo
  };

  const handleCategoryClick = (title) => {
    if (!isDragging) {
      setSelectedCategory(title);
    }
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Render selected category component if one is selected
  if (selectedCategory) {
    const SelectedComponent = categoryComponents[selectedCategory];
    return <SelectedComponent onBack={handleBack} />;
  }

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20 animate-gradient-shift" />
      
      <section className="w-full py-12 relative">
        <div className="text-center mb-6 relative">
          <h2 className="text-5xl font-serif text-transparent bg-clip-text bg-red-600 inline-flex items-center gap-3 animate-text-shine">
            Our Services
            <Sparkles className="text-red-600 animate-pulse" size={32} />
          </h2>
          <div className="flex items-center justify-center mt-4 text-gray-400 text-sm gap-2 animate-pulse">
            <span>scroll right</span>
            <ChevronRight size={16} className="animate-bounce-x" />
          </div>
        </div>

        <div className="relative overflow-hidden px-4">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar touch-pan-x"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {mainCategories.map((category, index) => (
              <div 
                key={`scroll-1-${category.title}-${index}`}
                className="min-w-[350px] px-4"
              >
                <CategoryCard 
                  category={category}
                  index={index}
                  hoveredCategory={hoveredCategory}
                  setHoveredCategory={setHoveredCategory}
                  handleCategoryClick={handleCategoryClick}
                />
              </div>
            ))}
            {mainCategories.map((category, index) => (
              <div 
                key={`scroll-2-${category.title}-${index}`}
                className="min-w-[350px] px-4"
              >
                <CategoryCard 
                  category={category}
                  index={index}
                  hoveredCategory={hoveredCategory}
                  setHoveredCategory={setHoveredCategory}
                  handleCategoryClick={handleCategoryClick}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes text-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25%); }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-text-shine {
          animation: text-shine 2s linear infinite;
          background-size: 200% auto;
        }

        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </div>
  );
};

const CategoryCard = ({ category, index, hoveredCategory, setHoveredCategory, handleCategoryClick }) => (
  <div
    className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-[450px] w-full bg-gradient-to-br from-purple-900/10 to-black"
    onMouseEnter={() => setHoveredCategory(index)}
    onMouseLeave={() => setHoveredCategory(null)}
    onClick={() => handleCategoryClick(category.title)}
  >
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-300">
      <h3 className="text-3xl font-serif mb-3 transform group-hover:translate-x-2 transition-transform duration-300">
        {category.title}
      </h3>
      <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        {category.description}
      </p>
      <div className={`flex items-center text-red-400 transform transition-all duration-300 ${hoveredCategory === index ? 'translate-x-4' : ''}`}>
        <span className="mr-2">View Collection</span>
        <ChevronRight size={16} className="animate-bounce-x" />
      </div>
    </div>
  </div>
);

export default ProductCategories;