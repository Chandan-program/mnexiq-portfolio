import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Folder, 
  ArrowRight,
  Globe,
  Smartphone,
  Code,
  Palette,
  Zap,
  Users
} from "lucide-react";

const Portfolio = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with advanced inventory management, real-time analytics, and seamless payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: ["Multi-vendor support", "Real-time inventory", "Advanced analytics", "Mobile responsive"],
      icon: Globe,
      gradient: "from-primary to-primary-hover"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive mobile banking application with biometric authentication and real-time transaction monitoring.",
      technologies: ["React Native", "TypeScript", "Firebase", "Plaid API"],
      features: ["Biometric security", "Real-time notifications", "Transaction history", "Budget tracking"],
      icon: Smartphone,
      gradient: "from-accent to-accent-hover"
    },
    {
      title: "Healthcare Management System",
      category: "Custom Software",
      description: "Comprehensive healthcare management platform for clinics with patient records, appointment scheduling, and telemedicine features.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      features: ["Patient management", "Telemedicine", "Appointment scheduling", "Medical records"],
      icon: Users,
      gradient: "from-orange to-orange-hover"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Data Analytics",
      description: "Intelligent business analytics platform with machine learning insights and predictive modeling capabilities.",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "ML insights"],
      icon: Zap,
      gradient: "from-primary to-accent"
    },
    {
      title: "Brand Identity & Web Design",
      category: "UI/UX Design",
      description: "Complete brand redesign and modern web presence for a tech startup, including logo, style guide, and responsive website.",
      technologies: ["Figma", "Adobe Suite", "React", "Tailwind CSS"],
      features: ["Brand strategy", "Logo design", "Style guide", "Responsive design"],
      icon: Palette,
      gradient: "from-accent to-orange"
    },
    {
      title: "Enterprise Software Migration",
      category: "Digital Transformation",
      description: "Large-scale legacy system modernization project involving data migration, process optimization, and staff training.",
      technologies: ["Microservices", "Docker", "Kubernetes", "API Gateway"],
      features: ["Legacy migration", "Microservices", "Cloud deployment", "Staff training"],
      icon: Code,
      gradient: "from-orange to-primary"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, user flows, and technical architecture to ensure optimal user experience and system performance."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Using agile methodologies, we build your solution with continuous testing, code reviews, and regular client feedback integration."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We handle seamless deployment and provide ongoing support, maintenance, and optimization to ensure long-term success."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Folder className="w-4 h-4" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-accent">MnexIQ</span> Has Done Some
            <br />
            Amazing Works on Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our knowledge and know more about software development. 
            Each project represents our commitment to excellence and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-large transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Project Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${project.gradient}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Category Badge */}
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-hover mt-auto"
                  onClick={() => scrollToSection('contact')}
                >
                  View Details
                  <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Our Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process in Action
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-white rounded-2xl font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-muted/50 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              We're here to turn your vision into reality.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              Let's Build Something Great Together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;