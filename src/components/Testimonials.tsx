
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Team Leader",
    quote: "The most immersive escape room I've ever experienced. The attention to detail in 'The Haunted Mansion' was incredible, and the puzzles were challenging yet solvable. Our team bonded like never before!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Birthday Celebrant",
    quote: "Celebrated my 30th birthday here with friends and it was unforgettable! The 'Cyber Heist' room kept us on our toes the entire time. The staff was amazing and even added special birthday touches.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Corporate Event Organizer",
    quote: "We brought our entire department for team building, and everyone is still talking about it weeks later. The puzzles required genuine collaboration, and we discovered new strengths in our team members.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Escape Room Enthusiast",
    quote: "As someone who's done over 50 escape rooms across the country, I can confidently say this is in my top 3. The 'Ancient Temple' had innovative puzzles I've never seen before. Will definitely be back!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-escape-dark">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0)_0%,_rgba(15,23,42,0.8)_70%)] z-0" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-escape-highlight">
            What Our Escapists Say
          </h2>
          <p className="text-escape-highlight/70 text-lg">
            Don't just take our word for it—hear from those who have successfully escaped.
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="relative glass rounded-xl p-6 md:p-10 lg:p-12 max-w-4xl mx-auto">
          <div className="absolute top-8 left-10 text-escape-gold/30 opacity-50">
            <Quote className="w-20 h-20" />
          </div>
          
          <div className="relative z-10">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full mx-1 transition-all",
                      index === activeIndex ? "bg-escape-gold" : "bg-escape-light/30"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="relative h-64 md:h-52">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "absolute top-0 left-0 w-full transition-all duration-500",
                      index === activeIndex 
                        ? "opacity-100 translate-x-0" 
                        : index < activeIndex 
                          ? "opacity-0 -translate-x-full" 
                          : "opacity-0 translate-x-full"
                    )}
                  >
                    <blockquote className="text-lg md:text-xl text-center italic text-escape-highlight/90 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-5 h-5",
                            i < testimonial.rating ? "text-escape-gold fill-escape-gold" : "text-escape-light/30"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-escape-gold shadow-lg"
                />
                <div className="text-left">
                  <p className="font-medium text-escape-highlight">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-escape-highlight/70">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-escape-light/20 hover:bg-escape-light/30 rounded-full p-2 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-escape-highlight" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-escape-light/20 hover:bg-escape-light/30 rounded-full p-2 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-escape-highlight" />
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-escape-gold mb-2">4,000+</h3>
            <p className="text-escape-highlight/80">Happy Customers</p>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-escape-gold mb-2">97%</h3>
            <p className="text-escape-highlight/80">Would Recommend</p>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-escape-gold mb-2">42%</h3>
            <p className="text-escape-highlight/80">Return for More</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
