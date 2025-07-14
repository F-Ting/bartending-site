import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, GlassWater, Calendar } from "lucide-react";
import privateDinner from "@/assets/private-dinner.jpg";
import bartending from "@/assets/bartending.jpg";
import eventPlanning from "@/assets/event-planning.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Private Dinner Experiences",
      description: "Tailored culinary experiences in the comfort of your own space",
      details: "Book a private dinner experience tailored to your taste and vibe. From intimate gatherings to special celebrations, every detail is crafted to perfection.",
      image: privateDinner,
      features: ["Custom Menu Design", "Professional Chef Service", "Elegant Table Setting", "Wine Pairing Available"]
    },
    {
      icon: GlassWater,
      title: "Professional Bartending",
      description: "Expert mixology for weddings, parties, and special occasions",
      details: "Hire professional bartending services for weddings, birthdays, and everything in between. Signature cocktails and impeccable service guaranteed.",
      image: bartending,
      features: ["Signature Cocktails", "Premium Bar Setup", "Professional Service", "Custom Drink Menus"]
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "Full-service event planning from concept to execution",
      details: "Coordinate your next event with support from start to finish. Every detail managed so you can focus on enjoying your special moment.",
      image: eventPlanning,
      features: ["Full Event Planning", "Vendor Coordination", "Timeline Management", "Day-of Execution"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything is custom, personal, and made to feel effortless. 
            Let's make your next event unforgettable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-500 animate-slide-up bg-gradient-card border-warm-gray/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 p-3 bg-wine rounded-full text-primary-foreground">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-wine transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="elegant" 
                  className="w-full mt-6"
                  onClick={scrollToContact}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;