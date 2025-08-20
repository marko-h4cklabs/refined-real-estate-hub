import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: "Modern Luxury Estate",
      location: "Beverly Hills, CA",
      price: "$8,500,000",
      type: "Single Family Home",
      beds: 6,
      baths: 8,
      sqft: "12,000"
    },
    {
      id: 2,
      image: property2,
      title: "Penthouse Perfection",
      location: "Manhattan, NY",
      price: "$15,750,000",
      type: "Penthouse",
      beds: 4,
      baths: 6,
      sqft: "8,500"
    },
    {
      id: 3,
      image: property3,
      title: "Oceanfront Masterpiece",
      location: "Malibu, CA",
      price: "$22,000,000",
      type: "Waterfront Estate",
      beds: 8,
      baths: 12,
      sqft: "18,000"
    }
  ];

  return (
    <section id="properties" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover exceptional properties that define luxury living. Each home is carefully selected 
            for its architectural excellence, prime location, and unique character.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="card-luxury overflow-hidden group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium bg-accent/90 text-accent-foreground px-3 py-1 rounded-full">
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                      {property.title}
                    </h3>
                    <p className="text-muted-foreground">{property.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-heading font-bold text-accent">
                      {property.price}
                    </div>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="font-semibold text-primary">{property.beds}</div>
                    <div className="text-xs text-muted-foreground uppercase">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">{property.baths}</div>
                    <div className="text-xs text-muted-foreground uppercase">Baths</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">{property.sqft}</div>
                    <div className="text-xs text-muted-foreground uppercase">Sq Ft</div>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full mt-6 btn-outline-luxury text-center py-3 rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Looking for something specific? I have access to exclusive off-market properties.
          </p>
          <button className="btn-accent px-8 py-4 rounded-lg font-medium">
            Browse All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;