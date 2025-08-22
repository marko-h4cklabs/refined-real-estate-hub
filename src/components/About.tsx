import { CheckCircle, Home, Users, Award } from "lucide-react";
import agentPortrait from "@/assets/agent-portrait.jpg";

const About = () => {
  const achievements = [
    { icon: Home, number: "+20", label: "Prodanih nekretnina" },
    { icon: Users, number: "+50", label: "Zadovoljnih klijenata" },
    { icon: Award, number: "+3", label: "Godine iskustva" },
  ];

  const credentials = [
    "Licencirani agent za nekretnine",
    "+10 godina iskustva u prodaji",
    "Poslovni savjetnik",
    "Investicije / Kupnje / Najmovi"
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
              – EdenVille je agencija za premium nekretnine specijalizirana za luksuzne vile, ekskluzivne stanove i investicijske projekte na prestižnim lokacijama u Hrvatskoj.
              <br></br>
              – Ponosni su partneri dubrovačke agencije IMB nekretnine s više od 30 godina uspješnog poslovanja.
              <br></br>
              - Osnivač je Matija Kutnjak, licencirani agent s dugogodišnjim iskustvom i prodajama većim od milijun eura.
              <br></br>
              – Matija je poznat po profesionalizmu, ambicioznosti i disciplini, a bivši je državni prvak u powerliftingu.
              <br></br>
              – Agencija vodi kompleksne projekte i investicije s naglaskom na diskreciju, personalizirani pristup i vrhunsku uslugu klijentima.

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
                src={agentPortrait}
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