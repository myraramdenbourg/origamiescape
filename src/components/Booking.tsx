
import React, { useState } from 'react';
import { Calendar, Clock, Users, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const rooms = [
  { id: 1, name: "The Haunted Mansion", capacity: "2-6 players" },
  { id: 2, name: "Cyber Heist", capacity: "2-5 players" },
  { id: 3, name: "Ancient Temple", capacity: "2-8 players" },
];

const timeSlots = [
  "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", 
  "4:00 PM", "5:30 PM", "7:00 PM", "8:30 PM"
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    room: '',
    players: '',
    specialRequests: ''
  });
  
  const [activeStep, setActiveStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRoomSelect = (roomId: number) => {
    setSelectedRoom(roomId);
    setFormData(prev => ({ ...prev, room: rooms.find(r => r.id === roomId)?.name || '' }));
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, time }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Booking form submitted:', formData);
    
    // Show success message
    setActiveStep(4);
  };
  
  return (
    <section id="booking" className="py-20 bg-escape-medium relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-escape-highlight">
            Book Your Escape
          </h2>
          <p className="text-escape-highlight/70 text-lg">
            Select your preferred room, date, and time to begin your next adventure.
          </p>
        </div>
        
        {/* Booking form */}
        <div className="glass rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          {/* Progress steps */}
          <div className="flex justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-escape-light/30 -translate-y-1/2 z-0" />
            
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative z-10 flex flex-col items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all relative",
                    step < activeStep 
                      ? "bg-escape-gold text-escape-dark" 
                      : step === activeStep 
                        ? "bg-escape-light/20 border-2 border-escape-gold text-escape-highlight" 
                        : "bg-escape-light/20 text-escape-highlight/70"
                  )}
                >
                  {step < activeStep ? <Check className="w-5 h-5" /> : step}
                </div>
                <span 
                  className={cn(
                    "mt-2 text-sm",
                    step <= activeStep ? "text-escape-highlight" : "text-escape-highlight/50"
                  )}
                >
                  {step === 1 ? 'Select Room' : 
                   step === 2 ? 'Date & Time' : 
                   step === 3 ? 'Your Details' : 'Confirmation'}
                </span>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Room */}
            {activeStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-medium text-escape-highlight mb-6">Choose Your Experience</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {rooms.map((room) => (
                    <div 
                      key={room.id}
                      onClick={() => handleRoomSelect(room.id)}
                      className={cn(
                        "cursor-pointer border rounded-lg p-5 transition-all",
                        selectedRoom === room.id 
                          ? "border-escape-gold bg-escape-light/20" 
                          : "border-escape-light/30 hover:border-escape-light/50 bg-escape-light/10"
                      )}
                    >
                      <div className="flex items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-escape-highlight mb-1">{room.name}</h4>
                          <p className="text-sm flex items-center text-escape-highlight/80">
                            <Users className="w-3 h-3 mr-1" /> {room.capacity}
                          </p>
                        </div>
                        <div 
                          className={cn(
                            "w-5 h-5 rounded-full border flex items-center justify-center",
                            selectedRoom === room.id 
                              ? "border-escape-gold bg-escape-gold" 
                              : "border-escape-light/50"
                          )}
                        >
                          {selectedRoom === room.id && <Check className="w-3 h-3 text-escape-dark" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={() => selectedRoom && setActiveStep(2)}
                    disabled={!selectedRoom}
                    className={cn(
                      "px-6 py-3 rounded-lg font-medium transition-all",
                      selectedRoom 
                        ? "bg-escape-gold text-escape-dark hover:bg-escape-gold/90" 
                        : "bg-escape-light/20 text-escape-highlight/50 cursor-not-allowed"
                    )}
                  >
                    Continue to Date & Time
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Date & Time */}
            {activeStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-medium text-escape-highlight mb-6">Select Date & Time</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-escape-highlight mb-2">Choose a Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full p-3 rounded-lg bg-escape-light/10 border border-escape-light/30 text-escape-highlight focus:border-escape-gold focus:outline-none"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-escape-highlight/50 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-escape-highlight mb-2">Choose a Time</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <div 
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={cn(
                            "cursor-pointer border rounded-lg p-3 flex items-center justify-center transition-all",
                            selectedTime === time 
                              ? "border-escape-gold bg-escape-light/20" 
                              : "border-escape-light/30 hover:border-escape-light/50 bg-escape-light/10"
                          )}
                        >
                          <Clock className="w-4 h-4 mr-2 text-escape-highlight/70" />
                          <span>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-escape-highlight mb-2">Number of Players</label>
                    <select
                      name="players"
                      value={formData.players}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-escape-light/10 border border-escape-light/30 text-escape-highlight focus:border-escape-gold focus:outline-none"
                    >
                      <option value="">Select number of players</option>
                      <option value="2">2 Players</option>
                      <option value="3">3 Players</option>
                      <option value="4">4 Players</option>
                      <option value="5">5 Players</option>
                      <option value="6">6 Players</option>
                      <option value="7">7 Players</option>
                      <option value="8">8 Players</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setActiveStep(1)}
                    className="px-6 py-3 rounded-lg bg-escape-light/10 text-escape-highlight border border-escape-light/30 hover:bg-escape-light/20 transition-all"
                  >
                    Back
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => (formData.date && formData.time && formData.players) && setActiveStep(3)}
                    disabled={!formData.date || !formData.time || !formData.players}
                    className={cn(
                      "px-6 py-3 rounded-lg font-medium transition-all",
                      (formData.date && formData.time && formData.players)
                        ? "bg-escape-gold text-escape-dark hover:bg-escape-gold/90" 
                        : "bg-escape-light/20 text-escape-highlight/50 cursor-not-allowed"
                    )}
                  >
                    Continue to Your Details
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Your Details */}
            {activeStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-medium text-escape-highlight mb-6">Your Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-escape-highlight mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full p-3 rounded-lg bg-escape-light/10 border border-escape-light/30 text-escape-highlight focus:border-escape-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-escape-highlight mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full p-3 rounded-lg bg-escape-light/10 border border-escape-light/30 text-escape-highlight focus:border-escape-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-escape-highlight mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full p-3 rounded-lg bg-escape-light/10 border border-escape-light/30 text-escape-highlight focus:border-escape-gold focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-escape-highlight mb-2">Special Requests (Optional)</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any special requests or accommodations?"
                    className="w-full p-3 rounded-lg bg-escape-light/10 border border-escape-light/30 text-escape-highlight focus:border-escape-gold focus:outline-none resize-none"
                  />
                </div>
                
                <div className="mt-4 bg-escape-light/10 border border-escape-light/30 rounded-lg p-4">
                  <h4 className="font-medium text-escape-highlight mb-2">Booking Summary</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-escape-highlight/70">Room:</p>
                    <p className="text-escape-highlight">{formData.room}</p>
                    
                    <p className="text-escape-highlight/70">Date:</p>
                    <p className="text-escape-highlight">{formData.date}</p>
                    
                    <p className="text-escape-highlight/70">Time:</p>
                    <p className="text-escape-highlight">{formData.time}</p>
                    
                    <p className="text-escape-highlight/70">Players:</p>
                    <p className="text-escape-highlight">{formData.players}</p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="px-6 py-3 rounded-lg bg-escape-light/10 text-escape-highlight border border-escape-light/30 hover:bg-escape-light/20 transition-all"
                  >
                    Back
                  </button>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-escape-gold text-escape-dark hover:bg-escape-gold/90 font-medium transition-all"
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 4: Confirmation */}
            {activeStep === 4 && (
              <div className="text-center py-10 animate-fade-in">
                <div className="bg-escape-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-escape-gold" />
                </div>
                
                <h3 className="text-2xl font-bold text-escape-highlight mb-2">Booking Confirmed!</h3>
                <p className="text-escape-highlight/80 max-w-md mx-auto mb-8">
                  Your escape room experience has been booked. A confirmation email has been sent to {formData.email}.
                </p>
                
                <div className="bg-escape-light/10 border border-escape-light/30 rounded-lg p-6 max-w-md mx-auto mb-8">
                  <h4 className="font-medium text-escape-highlight mb-4 text-left">Booking Details</h4>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <p className="text-escape-highlight/70">Booking Reference:</p>
                    <p className="text-escape-highlight">ESC-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
                    
                    <p className="text-escape-highlight/70">Room:</p>
                    <p className="text-escape-highlight">{formData.room}</p>
                    
                    <p className="text-escape-highlight/70">Date:</p>
                    <p className="text-escape-highlight">{formData.date}</p>
                    
                    <p className="text-escape-highlight/70">Time:</p>
                    <p className="text-escape-highlight">{formData.time}</p>
                    
                    <p className="text-escape-highlight/70">Players:</p>
                    <p className="text-escape-highlight">{formData.players}</p>
                    
                    <p className="text-escape-highlight/70">Name:</p>
                    <p className="text-escape-highlight">{formData.name}</p>
                  </div>
                </div>
                
                <a 
                  href="/"
                  className="inline-block px-6 py-3 rounded-lg bg-escape-gold text-escape-dark hover:bg-escape-gold/90 font-medium transition-all"
                >
                  Back to Home
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
