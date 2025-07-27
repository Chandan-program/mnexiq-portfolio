import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Clock, Target, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Users,
      title: "Top-tier Talent",
      description: "Our globally distributed team brings diverse expertise and innovative perspectives to every project."
    },
    {
      icon: Clock,
      title: "Real-Time Support",
      description: "24/7 availability across time zones ensures your project never sleeps and issues are resolved instantly."
    },
    {
      icon: Target,
      title: "Measurable Outcomes",
      description: "We focus on delivering tangible results that directly impact your business growth and success metrics."
    },
    {
      icon: Lightbulb,
      title: "End-to-End Consultation",
      description: "From initial strategy to final deployment, we guide you through every step of your digital transformation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Who Are We?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Are <span className="text-primary">MnexIQ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A one-stop software solution provider for companies around the globe. 
            Since our inception in 2018, we have been focusing on building and serving 
            market-fit products for business.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              A one-stop software solution provider for companies around the globe
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Since our inception in 2018, we have been focusing on building and serving 
                market-fit products for business. In that day, we have successfully delivered 
                50+ products and more satisfied 50+ clients across the world. Our next goal 
                is to deliver digital solutions for 1M+ businesses globally.
              </p>
              <p>
                We don't just deliver software; we deliver experiences that transform how your 
                customers interact with your brand. Our approach combines technical excellence 
                with deep business understanding to create solutions that drive real growth.
              </p>
              <p>
                Our distributed team model allows us to tap into global talent while maintaining 
                the collaborative spirit of a close-knit team. This unique approach ensures that 
                every project benefits from diverse perspectives and cutting-edge expertise.
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Mission/Vision Cards */}
          <div className="space-y-8">
            <Card className="p-8 bg-primary text-primary-foreground">
              <Award className="w-12 h-12 mb-4 text-orange" />
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-primary-foreground/90">
                To empower businesses worldwide with innovative digital solutions that drive 
                growth, efficiency, and competitive advantage through cutting-edge technology 
                and exceptional service.
              </p>
            </Card>
            
            <Card className="p-8 bg-accent text-accent-foreground">
              <Target className="w-12 h-12 mb-4 text-orange" />
              <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
              <p className="text-accent-foreground/90">
                To be the global leader in personalized software solutions, transforming 
                how businesses operate and scale in the digital age, reaching 1M+ businesses worldwide.
              </p>
            </Card>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">What Sets Us Apart</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our unique approach to software development combines global expertise 
            with personalized attention to deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Recommended Stats */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-accent text-white max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Recommended By 98% Of Our Retained Clients</h4>
            <p className="text-white/90">
              For years we have been serving our clients with market-fit products, 
              building long-term partnerships based on trust, quality, and results.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;