import { Star, Quote } from "lucide-react";
import martinaPortrait from "@/assets/martina-juric-portrait.jpg";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Martina Jurić",
      role: "Kupac nekretnine",
      rating: 5,
      text: "Hvala Matiji na profesionalnosti i fleksibilnosti. Osjećala sam se sigurno tijekom cijelog procesa kupnje kuće i sve je prošlo bez stresa.",
      image: martinaPortrait
    },
    {
      id: 2,
      name: "Luka Babić",
      role: "Kupac nekretnine",
      rating: 5,
      text: "Zahvljajući agenciji EdenVille, kupnja našeg doma prošla je brzo i bez komplikacija. Preporuke svima koji traže slično.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ivana Radniković",
      role: "Prodavaoc stana",
      rating: 5,
      text: "Nakon puno neuspjelih pokušaja prodaje našeg stana. Obratili smo se agentu Matiji i on nam je pomogao prodati naš stan u brzom vremenu bez komplikacija. Svaka preporuka svima",
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
            Što naši klijenti kažu o nama
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