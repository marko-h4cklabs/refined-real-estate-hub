import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Nazovite bilo kada"
    },
    {
      icon: Mail,
      title: "Email",
      details: "matija@imbnekretnine.hr",
      subtitle: "24/7 response"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Palmotićeva 5",
      subtitle: "Visit by appointment"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7",
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-6 text-foreground">
            Stupite u <span className="text-primary font-medium">Kontakt</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spremni za pronaći ili prodati nekretninu iz snova?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-heading font-medium mb-8 text-foreground">
              Informacije o kontaktu
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-none">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-foreground mb-1">
                        {item.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-none border-border focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-none border-border focus:border-primary"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-none border-border focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-none border-border focus:border-primary resize-none"
                  placeholder="Tell me about your real estate needs..."
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <h3 className="text-lg font-heading font-medium mb-6 text-foreground">
            Pratite me na društvenim mrežama
          </h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/matija-kutnjak-662b3a2aa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-none hover:bg-primary/20 transition-colors"
            >
              <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/matijakutnjak/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-none hover:bg-primary/20 transition-colors"
            >
              <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.988-5.366 11.988-11.99C24.005 5.367 18.641.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.185-1.559l3.185-3.186 3.186 3.186c-.738.948-1.889 1.559-3.186 1.559zm3.568-8.544V12l-3.186 3.186V8.444h3.186zm4.541 8.544c-1.297 0-2.448-.611-3.185-1.559l3.185-3.186 3.186 3.186c-.738.948-1.889 1.559-3.186 1.559z"/>
              </svg>
            </a>
            <a 
              href="https://web.facebook.com/matija.kutnjak.33/about" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-none hover:bg-primary/20 transition-colors"
            >
              <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;