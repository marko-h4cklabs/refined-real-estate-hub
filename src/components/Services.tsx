import { Home, Search, FileText, Calculator, Shield, CreditCard, Camera, Megaphone, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Prodaja nekretnina",
      description: "Posredujemo pri prodaji stanova, kuća, zemljišta i poslovnih prostora – brzo, sigurno i uz stručnu podršku."
    },
    {
      icon: Search,
      title: "Kupnja nekretnina", 
      description: "Pomažemo pri traženju, provjeri dokumentacije i pregovorima – od prvog koraka do preuzimanja ključeva."
    },
    {
      icon: FileText,
      title: "Najam i zakup nekretnina",
      description: "Organiziramo dugoročni najam stambenih i poslovnih prostora, s pažljivo odabranim najmoprimcima."
    },
    {
      icon: Calculator,
      title: "Procjena nekretnina",
      description: "Procjenjujemo tržišnu vrijednost nekretnine – informativno ili stručno, ovisno o vašim potrebama."
    },
    {
      icon: Shield,
      title: "Pravna i administrativna podrška",
      description: "Brinemo o provjeri vlasništva, zemljišnoknjižnim upisima i izradi ugovora."
    },
    {
      icon: CreditCard,
      title: "Kreditno savjetovanje",
      description: "Pomažemo vam odabrati najpovoljniji kredit i prolazimo s vama cijeli proces do odobrenja."
    },
    {
      icon: Camera,
      title: "Profesionalno fotografiranje",
      description: "Kvalitetne fotografije ističu prednosti nekretnine i privlače više zainteresiranih."
    },
    {
      icon: Megaphone,
      title: "Oglašavanje",
      description: "Vašu nekretninu promoviramo na portalima, društvenim mrežama i kroz direktnu mrežu klijenata."
    },
    {
      icon: TrendingUp,
      title: "Pronalaženje investicijskih nekretnina",
      description: "Pronalazimo prilike za ulaganje – bilo za najam, bilo za preprodaju."
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Naše usluge
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading text-foreground mb-4 font-medium">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;