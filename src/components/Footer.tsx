import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";
import mnexiqLogo from "@/assets/mnexiq-logo.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    "Custom Software Development",
    "UI/UX Design & Branding",
    "Web & Mobile Development",
    "Digital Strategy Consulting",
    "Outsourced Development",
    "Digital Transformation"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={mnexiqLogo} alt="MnexIQ Solutions" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="text-2xl font-bold">MnexIQ</h3>
                <p className="text-primary-foreground/80">Solutions</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 max-w-md leading-relaxed">
              A globally connected digital solutions company delivering personalized software solutions 
              for business growth. We transform ideas into powerful digital experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange" />
                <span className="text-primary-foreground/90">hello@mnexiq.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange" />
                <span className="text-primary-foreground/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange" />
                <span className="text-primary-foreground/90">Global Remote Team</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Button size="icon" variant="ghost" className="text-primary-foreground/80 hover:text-orange hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground/80 hover:text-orange hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground/80 hover:text-orange hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-orange transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/80 hover:text-orange transition-colors duration-300 text-left text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <span>&copy; 2024 MnexIQ Solutions. All rights reserved.</span>
            <button className="hover:text-orange transition-colors">Privacy Policy</button>
            <button className="hover:text-orange transition-colors">Terms of Service</button>
          </div>

          {/* Back to Top */}
          <Button
            size="sm"
            variant="ghost"
            onClick={scrollToTop}
            className="text-primary-foreground/80 hover:text-orange hover:bg-white/10 group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;