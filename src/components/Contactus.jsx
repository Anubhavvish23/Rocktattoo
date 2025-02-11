import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500 mb-3">Contact Us</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="flex-1 bg-black rounded-xl shadow-lg overflow-hidden border border-red-500">
            <div className="relative h-full min-h-[400px]">
              <Image 
                src="/l1.jpg"
                alt="Location Map"
                fill
                className="object-cover"
              />
              <a 
                href="https://maps.app.goo.gl/s6yjS5wCNUu3PZq16"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Get Location
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex-1 bg-black rounded-xl shadow-lg p-8 border border-red-500">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-500 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
                  <div className="mt-1">
                    <MapPin className="w-6 h-6 text-red-500 group-hover:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Our Location</h4>
                    <p className="text-red-300 leading-relaxed group-hover:text-red-200">
                      No 164, 9th Cross Road, Malleshwaram,
                      <br />
                      Bangalore - 560003
                      <br />
                      (Next to City Center Library)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a 
                  href="tel:+919663690821" 
                  className="flex items-start gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <div className="mt-1">
                    <Phone className="w-6 h-6 text-red-500 group-hover:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Phone</h4>
                    <p className="text-red-300 group-hover:text-red-200">+91 9663690821</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:anilrocktattoos@gmail.com" 
                  className="flex items-start gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <div className="mt-1">
                    <Mail className="w-6 h-6 text-red-500 group-hover:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Email</h4>
                    <p className="text-red-300 group-hover:text-red-200">
                      anilrocktattoos@gmail.com
                    </p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-105">
                  <div className="mt-1">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Business Hours</h4>
                    <p className="text-red-300">
                      Monday - Sunday: 24 hours open
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <a 
                  href="tel:+919663690821"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a 
                  href="mailto:anilrocktattoos@gmail.com"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;