const About = () => {
  const achievements = [
    { number: "500+", label: "Properties Sold", icon: "🏡" },
    { number: "$2.5B+", label: "Sales Volume", icon: "💰" },
    { number: "25+", label: "Years Experience", icon: "⭐" },
    { number: "98%", label: "Client Satisfaction", icon: "👥" }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6">
            About Your Agent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over two decades of excellence in luxury real estate, I bring unmatched expertise, 
            dedication, and personalized service to every client relationship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-heading font-semibold text-primary mb-6">
              Passion Meets Expertise
            </h3>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                My journey in real estate began with a simple belief: every client deserves 
                exceptional service and genuine care. This philosophy has guided me through 
                over 25 years of successful transactions in the luxury market.
              </p>
              <p>
                Specializing in high-end residential properties, I've built lasting relationships 
                with discerning clients who value expertise, discretion, and results. My deep 
                understanding of market trends and negotiation skills ensure optimal outcomes.
              </p>
              <p>
                Whether you're buying your dream home or selling a cherished property, 
                I'm committed to making the process seamless, enjoyable, and successful.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {achievements.map((achievement, index) => (
              <div key={index} className="card-luxury p-6 text-center">
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="card-luxury p-8 text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h4 className="text-2xl font-heading font-semibold text-primary mb-6">
            Professional Credentials
          </h4>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              Licensed Real Estate Broker
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              Certified Luxury Home Marketing Specialist
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              Graduate, REALTOR® Institute
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              Million Dollar Guild Member
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;