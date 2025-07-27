import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle, Globe, Zap, Users, Star, Award, TrendingUp } from "lucide-react";
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-95 z-10" />
        <img 
          src={heroImage} 
          alt="MnexIQ Solutions Team" 
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] hover:scale-110"
        />
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange/20 rounded-full blur-3xl animate-pulse z-5" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000 z-5" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse delay-2000 z-5" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Enhanced Badge */}
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur opacity-20" />
                <span className="relative inline-flex items-center gap-3 bg-white/15 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-lg border border-white/20 shadow-large">
                  <Globe className="w-5 h-5 animate-spin-slow" />
                  <span className="bg-gradient-to-r from-orange to-accent bg-clip-text text-transparent font-semibold">
                    Globally Connected Digital Solutions
                  </span>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </span>
              </div>
            </div>
            
            {/* Enhanced Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                <span className="block opacity-90">Personalized</span>
                <span className="block text-transparent bg-gradient-to-r from-orange via-accent to-orange bg-clip-text animate-gradient-x bg-300% font-extrabold">
                  Software Solutions
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 mt-2">
                  For Your Business Growth
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative">
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed font-light">
                We work as your <span className="text-orange font-semibold">tech partner</span> so that you can scale up your business the fastest way. 
                <br />
                <span className="text-accent font-medium">Delivering innovation, expertise, and results</span> that drive your digital transformation.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden shadow-2xl hover:shadow-orange/25 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get In Touch
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection('about')}
                className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-lg shadow-large hover:shadow-xl transition-all duration-300"
              >
                <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Learn More</span>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <CheckCircle className="w-6 h-6 text-orange group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-orange/20 rounded-full blur group-hover:blur-md transition-all duration-300" />
                </div>
                <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">Top-tier Talent</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <Zap className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur group-hover:blur-md transition-all duration-300" />
                </div>
                <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">Real-Time Support</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <Users className="w-6 h-6 text-orange group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-orange/20 rounded-full blur group-hover:blur-md transition-all duration-300" />
                </div>
                <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">98% Client Retention</span>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Statistics */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up delay-300">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-large hover:shadow-xl">
                <div className="text-4xl md:text-5xl font-black text-orange mb-3 group-hover:scale-110 transition-transform duration-300">110+</div>
                <div className="text-white/90 text-sm font-medium tracking-wide">Projects Completed</div>
                <Star className="w-5 h-5 text-orange/60 mx-auto mt-2 group-hover:text-orange transition-colors duration-300" />
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-large hover:shadow-xl">
                <div className="text-4xl md:text-5xl font-black text-accent mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-white/90 text-sm font-medium tracking-wide">Satisfied Clients</div>
                <Award className="w-5 h-5 text-accent/60 mx-auto mt-2 group-hover:text-accent transition-colors duration-300" />
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-large hover:shadow-xl">
                <div className="text-4xl md:text-5xl font-black text-orange mb-3 group-hover:scale-110 transition-transform duration-300">6</div>
                <div className="text-white/90 text-sm font-medium tracking-wide">Years of Experience</div>
                <TrendingUp className="w-5 h-5 text-orange/60 mx-auto mt-2 group-hover:text-orange transition-colors duration-300" />
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-large hover:shadow-xl">
                <div className="text-4xl md:text-5xl font-black text-accent mb-3 group-hover:scale-110 transition-transform duration-300">42+</div>
                <div className="text-white/90 text-sm font-medium tracking-wide">Skilled Experts</div>
                <Users className="w-5 h-5 text-accent/60 mx-auto mt-2 group-hover:text-accent transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative group cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10 group-hover:border-white/80 transition-colors duration-300">
            <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 group-hover:bg-white transition-colors duration-300" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs font-medium whitespace-nowrap group-hover:text-white/80 transition-colors duration-300">
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;