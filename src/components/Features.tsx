
import React from 'react';
import { Clock, Users, Brain, Lightbulb, Zap, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const roomData = [
  {
    id: 1,
    title: "The Haunted Mansion",
    description: "Uncover the dark secrets of a Victorian mansion haunted by the ghosts of its tragic past.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    difficulty: "Challenging",
    time: "60 minutes",
    capacity: "2-6 players",
    theme: "Horror",
    isPopular: true
  },
  {
    id: 2,
    title: "Cyber Heist",
    description: "Infiltrate a high-security tech corporation's server room to steal valuable data before time runs out.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    difficulty: "Expert",
    time: "60 minutes",
    capacity: "2-5 players",
    theme: "Sci-Fi",
    isPopular: false
  },
  {
    id: 3,
    title: "Ancient Temple",
    description: "Navigate the perilous traps of a forgotten temple to retrieve a legendary artifact.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    difficulty: "Moderate",
    time: "60 minutes",
    capacity: "2-8 players",
    theme: "Adventure",
    isPopular: true
  },
];

const Features = () => {
  return (
    <section id="experiences" className="py-20 bg-escape-medium relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-escape-highlight">
            Unforgettable Escape Experiences
          </h2>
          <p className="text-escape-highlight/70 text-lg">
            Choose your adventure from our meticulously designed escape rooms, each with a unique storyline and challenging puzzles.
          </p>
        </div>
        
        {/* Room cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roomData.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
        
        {/* Features grid */}
        <div className="glass rounded-xl p-8 md:p-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-escape-highlight">
              What Makes Our Rooms Special
            </h3>
            <p className="text-escape-highlight/70">
              We've carefully crafted every aspect of our escape rooms to provide the ultimate immersive experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="w-6 h-6" />}
              title="Mind-Bending Puzzles"
              description="Our puzzles are designed to challenge your intellect and creativity, requiring teamwork to solve."
            />
            <FeatureCard 
              icon={<Lightbulb className="w-6 h-6" />}
              title="Immersive Storytelling"
              description="Each room has a rich narrative that unfolds as you progress, making you a part of the story."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="High-Tech Elements"
              description="Cutting-edge technology brings our rooms to life with interactive elements and special effects."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="Family Friendly"
              description="Options available for all ages, with appropriate difficulty levels and themes."
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6" />}
              title="Team Building"
              description="Perfect for corporate events, fostering communication and collaboration skills."
            />
            <FeatureCard 
              icon={<Clock className="w-6 h-6" />}
              title="Adjustable Difficulty"
              description="Hint systems available for beginners, with optional challenges for experienced players."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface RoomCardProps {
  room: {
    id: number;
    title: string;
    description: string;
    image: string;
    difficulty: string;
    time: string;
    capacity: string;
    theme: string;
    isPopular: boolean;
  };
  index: number;
}

const RoomCard = ({ room, index }: RoomCardProps) => {
  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden h-[450px] shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]",
        "opacity-0 animate-fade-up"
      )}
      style={{ animationDelay: `${200 + index * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={room.image} 
          alt={room.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-escape-dark via-escape-dark/90 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        {room.isPopular && (
          <div className="absolute top-4 right-4 bg-escape-gold text-escape-dark px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-escape-highlight mb-2">{room.title}</h3>
        <p className="text-escape-highlight/80 mb-4 line-clamp-3">{room.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="glass px-3 py-1 rounded-full text-xs">
            {room.difficulty}
          </span>
          <span className="glass px-3 py-1 rounded-full text-xs flex items-center">
            <Clock className="w-3 h-3 mr-1" /> {room.time}
          </span>
          <span className="glass px-3 py-1 rounded-full text-xs flex items-center">
            <Users className="w-3 h-3 mr-1" /> {room.capacity}
          </span>
          <span className="glass px-3 py-1 rounded-full text-xs">
            {room.theme}
          </span>
        </div>
        
        <a
          href="#booking"
          className="w-full text-center py-3 bg-escape-light/20 border border-escape-light/30 rounded-lg text-escape-highlight font-medium transition-all duration-300 hover:bg-escape-light/30"
        >
          Book This Room
        </a>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-escape-light/10 border border-escape-light/20 rounded-lg p-6 transition-all duration-300 hover:bg-escape-light/15">
      <div className="bg-escape-gold/10 p-3 rounded-full w-fit mb-4">
        <div className="text-escape-gold">
          {icon}
        </div>
      </div>
      <h4 className="text-xl font-semibold mb-2 text-escape-highlight">{title}</h4>
      <p className="text-escape-highlight/70">{description}</p>
    </div>
  );
};

export default Features;
