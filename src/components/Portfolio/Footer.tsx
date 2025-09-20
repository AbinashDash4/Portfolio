import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 mb-6 inline-block"
          >
            Abinash Dash
          </button>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            Bridging the gap between data science, design, and development to create meaningful digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:abinashdash022@gmail.com"
              className="p-3 bg-primary/20 rounded-lg text-muted-foreground hover:text-accent hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#"
              className="p-3 bg-primary/20 rounded-lg text-muted-foreground hover:text-accent hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#"
              className="p-3 bg-primary/20 rounded-lg text-muted-foreground hover:text-accent hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {[
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-primary/20 pt-6">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {currentYear} Abinash Dash. Made with 
              <Heart className="w-4 h-4 text-accent fill-current" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;