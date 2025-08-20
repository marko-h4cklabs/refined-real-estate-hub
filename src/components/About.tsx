import { CheckCircle, Home, Users, Award } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Home, number: "250+", label: "Properties Sold" },
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
  ];

  const credentials = [
    "Licensed Real Estate Professional",
    "Certified Luxury Home Marketing Specialist",
    "Member of National Association of Realtors",
    "Graduate, Realtor Institute",
  ];

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-6 text-foreground">
              About <span className="text-primary font-medium">Your Agent</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in luxury real estate, I specialize in helping clients 
              find their dream properties and make informed investment decisions. My commitment to 
              excellence and personalized service has earned the trust of hundreds of satisfied clients.
            </p>
            
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Agent Image & Stats */}
          <div className="fade-in-up">
            <div className="relative">
              <img
                src="/src/assets/agent-portrait.jpg"
                alt="Real Estate Agent"
                className="w-full h-96 object-cover rounded-none shadow-card"
              />
              
              {/* Achievement Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-luxury">
                <div className="grid grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-heading font-medium text-foreground">
                          {achievement.number}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {achievement.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;