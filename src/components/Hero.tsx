
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, Lock } from 'lucide-react';

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-escape-dark via-escape-dark to-escape-medium opacity-95 z-10" />
        <div className="absolute inset-0 grid-pattern opacity-20 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0)_0%,_rgba(15,23,42,0.8)_70%)] z-10" />
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left column - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block glass px-4 py-2 rounded-full">
                <p className="text-sm md:text-base text-escape-highlight flex items-center">
                  <Lock className="w-4 h-4 mr-2" /> 
                  <span>Immersive Mystery Experiences</span>
                </p>
              </div>
              
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-glow opacity-0 transform transition-all duration-700 ease-out"
              >
                Escape the Ordinary, <br />
                <span className="text-escape-gold">Embrace the Mystery</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-escape-highlight/80 max-w-xl opacity-0 transition-all duration-700 delay-300 ease-out"
              >
                Step into meticulously crafted worlds where every clue, puzzle, and hidden secret draws you deeper into an unforgettable adventure.
              </p>
            </div>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 transition-all duration-700 delay-500 ease-out"
            >
              <a 
                href="#booking" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-escape-gold text-escape-dark font-medium text-lg transition-all duration-200 hover:bg-escape-gold/90 hover:shadow-lg hover:scale-[1.02]"
              >
                Book Your Escape
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <a 
                href="#experiences" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-escape-highlight/20 hover:border-escape-highlight/40 bg-escape-light/10 backdrop-blur-sm text-escape-highlight font-medium text-lg transition-all duration-200"
              >
                Explore Rooms
              </a>
            </div>
          </div>
          
          {/* Right column - Image/Animation */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-escape-dark to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                alt="Mysterious escape room atmosphere"
                className="w-full h-full object-cover object-center absolute inset-0 z-0 animate-fade-in"
              />
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-24 glass rounded-xl p-6 opacity-0 transition-all duration-700 delay-700 ease-out"
        >
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-serif font-bold text-escape-gold">5+</p>
            <p className="text-sm md:text-base text-escape-highlight/80">Immersive Rooms</p>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-serif font-bold text-escape-gold">60</p>
            <p className="text-sm md:text-base text-escape-highlight/80">Minutes Per Game</p>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-serif font-bold text-escape-gold">30k+</p>
            <p className="text-sm md:text-base text-escape-highlight/80">Puzzles Solved</p>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-serif font-bold text-escape-gold">97%</p>
            <p className="text-sm md:text-base text-escape-highlight/80">5-Star Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
