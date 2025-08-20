import { Button } from "@/components/ui/button";
import agentPortrait from "@/assets/agent-portrait.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent opacity-95"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in-up animate">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Luxury Real Estate
              <span className="block text-accent">Excellence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Delivering exceptional service and unparalleled expertise in luxury property markets. 
              Your dream home awaits with personalized guidance every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-accent">
                View Properties
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-luxury border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Agent Photo */}
          <div className="flex justify-center lg:justify-end fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl transform rotate-6 scale-110"></div>
              <img
                src={agentPortrait}
                alt="Professional Real Estate Agent"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-luxury transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-accent font-medium">
                25+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;