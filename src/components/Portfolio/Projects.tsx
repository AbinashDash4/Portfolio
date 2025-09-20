import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Stock Price Direction Prediction",
      category: "Data Science",
      description: "Combined historical stock prices with financial news headlines to predict stock movement using Python and NLP techniques.",
      technologies: ["Python", "NLP", "Pandas", "Scikit-learn", "News API"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
    },
    {
      title: "Personal Finance & Expense Manager App",
      category: "UI/UX Design",
      description: "Built intuitive dashboards, budgeting tools, and goal-setting features for users with comprehensive user research.",
      technologies: ["Figma", "User Research", "Prototyping", "Design Systems"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },
    {
      title: "E-Commerce Website Redesign",
      category: "Frontend Development",
      description: "Improved product discovery and checkout experience with user-centered design and modern web technologies.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Customer Segmentation Analysis",
      category: "Data Science",
      description: "Applied clustering algorithms to retail datasets to identify customer segments for targeted marketing strategies.",
      technologies: ["Python", "K-Means", "Data Visualization", "Matplotlib", "Seaborn"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Event & Carnival Mobile App",
      category: "UI/UX Design",
      description: "Designed live schedules, ticketing, and interactive maps for festivals and tech carnivals with focus on user experience.",
      technologies: ["Adobe XD", "Mobile Design", "User Journey Mapping", "Interactive Prototypes"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop"
    },
    {
      title: "Employee Leave Management System",
      category: "Frontend Development",
      description: "Full-stack development using PHP (Yii2 Framework) and MySQL with responsive frontend and intuitive admin panel.",
      technologies: ["PHP", "Yii2", "MySQL", "Bootstrap", "JavaScript"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Data Science", "UI/UX Design", "Frontend Development"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work across data science, design, and development. Each project represents 
            a unique challenge and solution in the intersection of technology and user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`
                ${activeFilter === category 
                  ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                  : "border-primary/30 text-foreground hover:bg-primary/10"
                } 
                transition-all duration-300 hover:scale-105
              `}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Badge 
                  className="absolute top-4 left-4 bg-accent text-accent-foreground"
                >
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-accent rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-accent hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;