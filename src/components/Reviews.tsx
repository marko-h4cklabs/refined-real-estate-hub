const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Tech Executive",
      review: "Exceptional service from start to finish. The attention to detail and market knowledge made our luxury home purchase seamless. Highly recommend for anyone seeking premium real estate expertise.",
      rating: 5,
      location: "Beverly Hills, CA"
    },
    {
      id: 2,
      name: "James Thompson",
      role: "Investment Banker",
      review: "Professional, knowledgeable, and truly dedicated. Sold our $12M property in record time and above asking price. The marketing strategy was brilliant and execution flawless.",
      rating: 5,
      location: "Manhattan, NY"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Entertainment Industry",
      review: "Found us our dream home in an incredibly competitive market. The negotiation skills and industry connections made all the difference. Couldn't be happier with the outcome.",
      rating: 5,
      location: "Malibu, CA"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-accent' : 'text-muted'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-br from-secondary/50 to-accent-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what discerning clients say about their 
            experience working with me on their luxury real estate transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="card-luxury p-8 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-foreground/80 text-lg leading-relaxed mb-6 italic">
                "{review.review}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="text-center border-t border-border pt-6">
                <div className="font-heading font-semibold text-primary text-lg mb-1">
                  {review.name}
                </div>
                <div className="text-muted-foreground text-sm mb-2">
                  {review.role}
                </div>
                <div className="text-accent text-sm font-medium">
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="card-luxury p-8">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-muted-foreground">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">Top 1%</div>
                <div className="text-sm">National Agents</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">A+</div>
                <div className="text-sm">BBB Rating</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">500+</div>
                <div className="text-sm">5-Star Reviews</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">25+</div>
                <div className="text-sm">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;