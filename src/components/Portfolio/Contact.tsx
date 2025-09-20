import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abinashdash022@gmail.com",
      href: "mailto:abinashdash022@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-7978825471",
      href: "tel:+917978825471"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bhubaneswar, Odisha, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:abinashdash022@gmail.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, or just have a chat about 
            technology, design, and data science. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-fade-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="border-primary/30 focus:border-accent bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-primary/30 focus:border-accent bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="border-primary/30 focus:border-accent bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    className="border-primary/30 focus:border-accent bg-background/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                    >
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">Follow Me</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-4 bg-primary/20 rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:bg-primary/30`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="bg-gradient-accent border-0 text-accent-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Available for Opportunities</h3>
                <p className="mb-4 opacity-90">
                  I'm currently open to internships, freelance projects, and full-time opportunities 
                  in data science, UI/UX design, and frontend development.
                </p>
                <div className="inline-flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;