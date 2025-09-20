import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-elegant' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            AD.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:abinashdash022@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              size="sm"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/20 mt-2 rounded-lg shadow-elegant animate-fade-in">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-6 pt-4 border-t border-primary/20">
                <a 
                  href="mailto:abinashdash022@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full mt-4"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;