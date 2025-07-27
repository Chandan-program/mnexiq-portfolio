import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle, Globe, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
        <img 
          src={heroImage} 
          alt="MnexIQ Solutions Team" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <Globe className="w-4 h-4" />
                Globally Connected Digital Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Personalized
              <span className="block text-transparent bg-gradient-to-r from-orange to-accent bg-clip-text">
                Software Solutions
              </span>
              For Your Business Growth
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              We work as your tech partner so that you can scale up your business the fastest way. 
              Delivering innovation, expertise, and results that drive your digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection('about')}
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <PlayCircle className="w-5 h-5" />
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange" />
                <span className="text-sm">Top-tier Talent</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm">Real-Time Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange" />
                <span className="text-sm">98% Client Retention</span>
              </div>
            </div>
          </div>

          {/* Right Content - Statistics */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-orange mb-2">110+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/80 text-sm">Satisfied Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-orange mb-2">6</div>
              <div className="text-white/80 text-sm">Years of Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">42+</div>
              <div className="text-white/80 text-sm">Skilled Experts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;