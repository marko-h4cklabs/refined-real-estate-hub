import { MapPin, Bed, Bath, Square } from "lucide-react";
import nekretnina1 from "@/assets/nekretnina-1.jpg";
import nekretnina2 from "@/assets/nekretnina-2.jpg";
import nekretnina3 from "@/assets/nekretnina-3.jpg";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: nekretnina1,
      title: "NOVOGRADNJA, STAN 80 m2",
      location: "ZAGREB, DUBRAVA",
      beds: 2,
      baths: 1,
      sqft: "80 m2",
      status: "For Sale",
      njuskaloLink: "https://www.njuskalo.hr/nekretnine/posebna-svijetla-novogradnja-poluprizemlju-75.00-m2-oglas-47471894" // Replace with actual njuskalo.hr link
    },
    {
      id: 2,
      image: nekretnina2,
      title: "Urbane Vile",
      location: "Prestigious Hills",
      beds: 3,
      sqft: "89 m2",
      status: "Najam",
      njuskaloLink: "https://www.njuskalo.hr/nekretnine/novogradnja-urbane-vile-stan-cca-80-m2-3-spavace-sobe-oglas-40375876" // Replace with actual njuskalo.hr link
    },
    {
      id: 3,
      image: nekretnina3,
      title: "5-SOBNI DVOETAŽNI DIZAJNERSKI STAN",
      location: "ZAGREB, DONJI GRAD",
      sqft: "233 m2",
      status: "For Sale",
      njuskaloLink: "https://www.njuskalo.hr/nekretnine/stan-zagreb-centar-238.00-m2-oglas-47206138" // Replace with actual njuskalo.hr link
    },
  ];

  const handlePropertyClick = (njuskaloLink: string) => {
    window.open(njuskaloLink, '_blank');
  };

  return (
    <section id="properties" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-6 text-foreground">
            Featured <span className="text-primary font-medium">Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Otkrijte iznimne nekretnine koje utjelovljuju luksuzan život i predstavljaju izvrsne investicijske prilike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className="fade-in-up card-clean overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handlePropertyClick(property.njuskaloLink)}
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover image-hover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-wide ${
                  property.status === 'Sold' 
                    ? 'bg-muted-foreground text-white' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  {property.status}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                
                <h3 className="text-xl font-heading font-medium text-foreground mb-4">
                  {property.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {property.sqft}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;