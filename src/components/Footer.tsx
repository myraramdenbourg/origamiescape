
import React from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-escape-dark relative overflow-hidden pt-16 pb-8">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-escape-light/10">
          {/* Company info */}
          <div>
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-serif text-escape-highlight">
                ESCAPADE
              </span>
            </a>
            <p className="text-escape-highlight/70 mb-6">
              Immersive escape room experiences designed to challenge, entertain, and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-escape-light/10 flex items-center justify-center hover:bg-escape-light/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-escape-highlight/80" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-escape-light/10 flex items-center justify-center hover:bg-escape-light/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-escape-highlight/80" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-escape-light/10 flex items-center justify-center hover:bg-escape-light/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-escape-highlight/80" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-medium text-escape-highlight mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#experiences" className="text-escape-highlight/70 hover:text-escape-highlight flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Our Experiences
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-escape-highlight/70 hover:text-escape-highlight flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#booking" className="text-escape-highlight/70 hover:text-escape-highlight flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="text-escape-highlight/70 hover:text-escape-highlight flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-escape-highlight/70 hover:text-escape-highlight flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="#" className="text-escape-highlight/70 hover:text-escape-highlight flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-medium text-escape-highlight mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-escape-gold mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-escape-highlight/70">
                  123 Mystery Lane<br />
                  Downtown, Cityville<br />
                  CA 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-escape-gold mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-escape-highlight/70 hover:text-escape-highlight">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-escape-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@escapade.com" className="text-escape-highlight/70 hover:text-escape-highlight">
                  info@escapade.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-escape-gold mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-escape-highlight/70">
                  <div>Monday - Friday: 10:00 AM - 10:00 PM</div>
                  <div>Saturday - Sunday: 9:00 AM - 11:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium text-escape-highlight mb-6">Newsletter</h4>
            <p className="text-escape-highlight/70 mb-4">
              Subscribe to receive updates on new rooms, special offers, and exclusive events.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-escape-light/10 border border-escape-light/30 text-escape-highlight focus:border-escape-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-escape-gold text-escape-dark py-3 rounded-lg font-medium hover:bg-escape-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright & Policy Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-escape-highlight/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Escapade. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <a href="#" className="text-escape-highlight/60 hover:text-escape-highlight mb-2 md:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="text-escape-highlight/60 hover:text-escape-highlight mb-2 md:mb-0">
              Terms of Service
            </a>
            <a href="#" className="text-escape-highlight/60 hover:text-escape-highlight mb-2 md:mb-0">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
