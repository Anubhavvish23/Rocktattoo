import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      {/* Previous footer content remains the same */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
            Get your first Tattoo done by us with fair and reasonable prices. Visit us Today!.
            </p>
            <a 
              href="https://maps.app.goo.gl/s6yjS5wCNUu3PZq16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <p className="text-gray-400">
                  No 164, 9th Cross Road, Malleshwaram,
                  <br />
                  Bangalore - 560003
                  <br />
                  (Next to City Center Library)
                </p>
              </div>
              <a 
                href="tel:+919663690821" 
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Phone className="w-5 h-5 text-red-500" />
                +91 9663690821
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Opening Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-500 mt-1" />
              <div className="text-gray-400">
                <p>Monday - Sunday</p>
                <p>24 hours open</p>
              </div>
            </div>
          </div>

        
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="space-y-2">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Rock Tattoo. All rights reserved.
            </p>
            <p className="text-center text-gray-500">
              Designed and Developed by{' '}
              <a 
                href="https://www.notarc.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                Notarc
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;