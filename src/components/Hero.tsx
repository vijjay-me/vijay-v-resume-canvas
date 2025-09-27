import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl text-display mb-6 animate-fade-in">
            Vijay V
          </h1>
          <p className="text-xl md:text-2xl text-emphasis mb-8 opacity-90 leading-relaxed">
            Aspiring Chemical Engineer | Fluid Mechanics & Process Design Enthusiast
          </p>
          <p className="text-lg md:text-xl text-body mb-12 opacity-80 max-w-2xl mx-auto">
            3rd Year B.Tech Chemical Engineering Student at SASTRA Deemed University
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="shadow-soft"
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-white/30 text-white hover:bg-white/10 shadow-soft"
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:vijay@example.com" className="text-white/80 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/vijayv" className="text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/vijayv" className="text-white/80 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;