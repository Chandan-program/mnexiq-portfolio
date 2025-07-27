import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Brain, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements and scale with your growth.",
      features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
      gradient: "from-primary to-primary-hover"
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description: "Create compelling user experiences and strong brand identities that engage your audience and drive conversions.",
      features: ["User research", "Wireframing & prototyping", "Brand strategy", "Design systems"],
      gradient: "from-accent to-accent-hover"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile App Development",
      description: "Responsive web applications and native mobile apps that deliver seamless experiences across all devices and platforms.",
      features: ["Cross-platform development", "Progressive web apps", "App store optimization", "Real-time features"],
      gradient: "from-orange to-orange-hover"
    },
    {
      icon: Brain,
      title: "Digital Strategy Consulting",
      description: "Strategic guidance to help you navigate digital transformation and make technology decisions that drive business growth.",
      features: ["Technology roadmap", "Architecture planning", "Process optimization", "ROI analysis"],
      gradient: "from-primary to-accent"
    },
    {
      icon: Users,
      title: "Outsourced Development Teams",
      description: "Dedicated development teams that integrate seamlessly with your organization to accelerate project delivery.",
      features: ["Team scaling", "Project management", "Quality assurance", "24/7 support"],
      gradient: "from-accent to-orange"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and technology infrastructure.",
      features: ["Legacy system migration", "Cloud solutions", "Automation", "Data analytics"],
      gradient: "from-orange to-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a full spectrum of digital services to help your business thrive in the modern marketplace. 
            From concept to deployment, we're your trusted technology partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-large transition-all duration-300 transform hover:scale-105 group border-0 bg-card"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-hover"
                  onClick={() => scrollToSection('contact')}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-primary text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive digital solutions can help you achieve your business goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                Book a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('portfolio')}
              >
                View Our Work
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;