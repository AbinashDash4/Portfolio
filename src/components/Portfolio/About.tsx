import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Palette, TrendingUp } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Data Science",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Tableau", "Power BI"],
      description: "Machine Learning, Predictive Modeling, Data Visualization"
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
      description: "User-Centered Design, Design Systems, Usability Testing"
    },
    {
      category: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git"],
      description: "Responsive Design, Modern Web Technologies, API Integration"
    },
    {
      category: "Digital Marketing",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: ["SEO", "Social Media", "Content Strategy", "Analytics", "Email Marketing"],
      description: "Growth Hacking, Campaign Optimization, Performance Metrics"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate technologist pursuing B.Tech in Computer Science (AI) at GIFT Autonomous, Bhubaneswar. 
            With expertise spanning data science, UI/UX design, and frontend development, I love creating solutions 
            that combine analytical insights with exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillSet, index) => (
            <Card 
              key={skillSet.category}
              className="bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4 text-primary-foreground group-hover:animate-glow">
                    {skillSet.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {skillSet.category}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {skillSet.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/20 text-accent rounded-full text-sm font-medium hover:bg-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: "3+", label: "Years of Learning" },
            { number: "10+", label: "Projects Completed" },
            { number: "8+", label: "Certifications" },
            { number: "100%", label: "Passion Driven" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;