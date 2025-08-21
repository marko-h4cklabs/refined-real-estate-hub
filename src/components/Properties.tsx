import { MapPin, Bed, Bath, Square } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "/src/assets/nekretnina-1.jpg",
      title: "Modern Downtown Loft",
      location: "Downtown District",
      beds: 2,
      baths: 2,
      sqft: "1,200 sq ft",
      status: "For Sale",
      njuskaloLink: "https://www.njuskalo.hr/nekretnine/posebna-svijetla-novogradnja-poluprizemlju-75.00-m2-oglas-47471894" // Replace with actual njuskalo.hr link
    },
    {
      id: 2,
      image: "/src/assets/nekretnina-2.jpg",
      title: "Luxury Family Estate",
      location: "Prestigious Hills",
      beds: 5,
      baths: 4,
      sqft: "4,500 sq ft",
      status: "Sold",
      njuskaloLink: "https://www.njuskalo.hr/nekretnine/stan-zagreb-centar-238.00-m2-oglas-47206138" // Replace with actual njuskalo.hr link
    },
    {
      id: 3,
      image: "/src/assets/nekretnina-3.jpg",
      title: "Contemporary Villa",
      location: "Garden District",
      beds: 4,
      baths: 3,
      sqft: "3,200 sq ft",
      status: "For Sale",
      njuskaloLink: "https://www.njuskalo.hr/nekretnine/your-property-3-link" // Replace with actual njuskalo.hr link
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
            Discover exceptional properties that define luxury living and represent outstanding investment opportunities.
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