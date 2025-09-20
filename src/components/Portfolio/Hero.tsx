import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 36, 60, 0.8), rgba(34, 36, 60, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-glow/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Abinash Dash
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-accent font-semibold">Data Scientist</span>
            <span className="mx-2 text-primary">•</span>
            <span className="text-accent font-semibold">UI/UX Designer</span>
            <span className="mx-2 text-primary">•</span>
            <span className="text-accent font-semibold">Frontend Developer</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Passionate about transforming data into insights and creating exceptional user experiences. 
            I bridge the gap between technology and design to build innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="mailto:abinashdash022@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a 
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="text-muted-foreground cursor-pointer hover:text-accent transition-colors duration-300"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;