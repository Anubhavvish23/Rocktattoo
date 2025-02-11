// components/perm.jsx
"use client";
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PermanentTattoo = ({ onBack }) => {
  const tattooImages = [
   
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Title */}
        <h1 className="text-5xl font-serif text-red-600 mb-12">
           Tattoo Removal<br/> <span> Be the First to Remove the Tattoo</span>
        </h1>
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tattooImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Permanent Tattoo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PermanentTattoo;