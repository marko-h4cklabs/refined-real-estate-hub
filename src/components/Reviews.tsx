import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Martina Jurić",
      role: "Kupac nekretnine",
      rating: 5,
      text: "Hvala timu EdenVille na profesionalnosti i fleksibilnosti. Osjećala sam se sigurno tijekom cijelog procesa kupnje kuće i sve je prošlo bez stresa.",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffemale-human-face-women-front-view&psig=AOvVaw1G8rCAldgZrzKpmdFFh_tx&ust=1755954719901000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDbkZ6_no8DFQAAAAAdAAAAABAE"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      rating: 5,
      text: "Outstanding expertise in luxury real estate. Helped us identify and secure multiple investment properties with excellent ROI potential.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      rating: 5,
      text: "Patient, knowledgeable, and truly caring. Made our first home purchase an enjoyable journey rather than a stressful ordeal.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-6 text-foreground">
            Client <span className="text-primary font-medium">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what my clients have to say about their experience working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={review.id} className="fade-in-up card-clean p-8" style={{ animationDelay: `${index * 0.1}s` }}>
              <Quote className="h-8 w-8 text-primary mb-6" />
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-heading font-medium text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;