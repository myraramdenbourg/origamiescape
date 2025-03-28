
import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled 
          ? "py-4 bg-escape-dark/95 backdrop-blur-md border-b border-escape-light/10 shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="inline-flex items-center">
            <span className="text-2xl font-bold font-serif tracking-tight text-escape-highlight">
              ORIGAMI ESCAPE
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#experiences" className="underline-animation text-escape-highlight/90 hover:text-escape-highlight transition-colors duration-200">
            Experiences
          </a>
          <a href="#testimonials" className="underline-animation text-escape-highlight/90 hover:text-escape-highlight transition-colors duration-200">
            Testimonials
          </a>
          <a href="#booking" className="underline-animation text-escape-highlight/90 hover:text-escape-highlight transition-colors duration-200">
            Book Now
          </a>
          <a href="#contact" className="underline-animation text-escape-highlight/90 hover:text-escape-highlight transition-colors duration-200">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center text-escape-highlight/80">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">10:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center text-escape-highlight">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">+1 (555) 123-4567</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-escape-highlight"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-escape-dark/95 backdrop-blur-lg flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out transform z-40 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 text-center">
          <a 
            href="#experiences" 
            className="text-xl text-escape-highlight py-2 border-b border-escape-light/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experiences
          </a>
          <a 
            href="#testimonials" 
            className="text-xl text-escape-highlight py-2 border-b border-escape-light/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#booking" 
            className="text-xl text-escape-highlight py-2 border-b border-escape-light/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
          <a 
            href="#contact" 
            className="text-xl text-escape-highlight py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
        
        <div className="mt-10 space-y-4 text-center">
          <div className="flex items-center justify-center text-escape-highlight/80">
            <Clock className="w-5 h-5 mr-2" />
            <span>10:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center justify-center text-escape-highlight">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
