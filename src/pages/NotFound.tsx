
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-escape-dark p-4">
      <div className="glass rounded-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold font-serif text-escape-gold mb-6">404</h1>
        <p className="text-2xl text-escape-highlight mb-6">Oops! You've gone off the map.</p>
        <p className="text-escape-highlight/70 mb-8">
          The page you're looking for seems to have vanished into thin air, just like the mysteries in our escape rooms.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-escape-gold text-escape-dark font-medium transition-all hover:bg-escape-gold/90"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
