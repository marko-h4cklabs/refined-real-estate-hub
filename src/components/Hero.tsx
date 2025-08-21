import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/src/assets/property-1.jpg',
    '/src/assets/property-2.jpg',
    '/src/assets/property-3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image Carousel */}
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`
          }}
        />
      ))}
      
      {/* Dark Overlay - Made darker for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="fade-in-up animate">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light mb-6 tracking-wide">
            Agent za nekretnine kojemu možete vjerovati
            <br></br>
            <br></br>
            <span className="block text-primary font-medium">Eden Ville</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('properties')}
              className="btn-primary text-lg"
            >
              View Properties
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="btn-white text-lg"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;