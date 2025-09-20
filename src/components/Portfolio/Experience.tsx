import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer & UI/UX Intern",
      company: "GIFT Autonomous College, Bhubaneswar",
      duration: "June 2024 – Present",
      location: "Bhubaneswar",
      type: "Internship",
      description: [
        "Developed data-driven dashboards for college web applications using modern frameworks",
        "Applied UI/UX principles to create wireframes, prototypes, and responsive designs",
        "Collaborated with teams to integrate machine learning models into web applications",
        "Full-stack development using PHP (Yii2 Framework) and MySQL"
      ],
      technologies: ["PHP", "Yii2", "MySQL", "JavaScript", "Figma", "UI/UX Design"],
      current: true
    },
    {
      title: "AI/ML Intern",
      company: "Central Tool Room & Training Center (CTTC)",
      duration: "June 2024 – July 2024",
      location: "Bhubaneswar",
      type: "Internship",
      description: [
        "Worked on Deep Learning, Image Processing, and data analysis projects",
        "Built models for Face Detection, Age & Gender Prediction using Python",
        "Performed exploratory data analysis and feature engineering for ML models",
        "Enhanced UI components for better data representation and accessibility"
      ],
      technologies: ["Python", "Deep Learning", "OpenCV", "TensorFlow", "Data Analysis"],
      current: false
    },
    {
      title: "Programming Intern",
      company: "IIG Varsity",
      duration: "June 2023 – July 2023",
      location: "Bhubaneswar",
      type: "Internship",
      description: [
        "Developed Python scripts and SQL queries to analyze student datasets",
        "Created reports and visualizations to support academic project evaluations",
        "Developed 'Contacts Management System' with responsive web interface",
        "Implemented front-end features ensuring smooth user experience"
      ],
      technologies: ["Python", "SQL", "Data Visualization", "Web Development"],
      current: false
    }
  ];

  const certifications = [
    "IBM Data Science Professional Certificate",
    "Google Data Analytics Professional Certificate",
    "Google UX Design Professional Certificate",
    "Microsoft UX Design Professional Certificate",
    "Meta Frontend Developer Professional Certificate",
    "Google Digital Marketing & E-commerce Professional Certificate",
    "Tableau Data Visualization Certificate",
    "NPTEL: Introduction to Algorithms & Analysis"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey through various internships and continuous learning, building expertise 
            across multiple domains of technology and design.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-accent">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title}
                className={`
                  bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow
                  ${exp.current ? 'ring-2 ring-accent/30' : ''}
                  animate-fade-up
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                        {exp.title}
                        {exp.current && (
                          <Badge className="bg-accent text-accent-foreground text-xs">
                            Current
                          </Badge>
                        )}
                      </h4>
                      <p className="text-lg text-accent font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                      <div className="flex items-center text-muted-foreground">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-accent rounded-full text-sm font-medium hover:bg-primary/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-accent">Education</h3>
          <Card className="bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-fade-up">
            <CardContent className="p-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  B.Tech in Computer Science (Artificial Intelligence)
                </h4>
                <p className="text-lg text-accent font-semibold mb-2">GIFT Autonomous, Bhubaneswar</p>
                <p className="text-muted-foreground mb-4">2022 – Present • CGPA: 7.4</p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Specializing in Artificial Intelligence with focus on machine learning, data science, 
                  and modern software development practices. Active participation in various technical projects and internships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-accent">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={cert}
                className="bg-background/50 border-primary/20 hover:border-accent/40 transition-all duration-300 hover:shadow-elegant group animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-4">
                  <p className="text-sm text-foreground font-medium text-center group-hover:text-accent transition-colors duration-300">
                    {cert}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;