import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Code, Brain, Factory } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Engineering",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        "Fluid Mechanics",
        "Heat Transfer",
        "Mass Transfer",
        "Thermodynamics",
        "Process Control",
        "Chemical Reaction Engineering"
      ]
    },
    {
      title: "Process Technology",
      icon: <Factory className="h-6 w-6" />,
      skills: [
        "Cement Production",
        "VRM Operations",
        "Rotary Kiln",
        "ESP Systems",
        "CCR Operations",
        "GCT Technology"
      ]
    },
    {
      title: "Emerging Technologies",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "Nanotechnology",
        "Energy Storage",
        "Process Optimization",
        "AI in Chemical Engineering",
        "Sustainable Processes",
        "Green Chemistry"
      ]
    },
    {
      title: "Technical Tools",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "MATLAB",
        "Python",
        "Aspen Plus",
        "AutoCAD",
        "Microsoft Office",
        "Data Analysis"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <div className="text-primary mr-3">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm px-3 py-1 bg-accent/50 text-accent-foreground hover:bg-accent transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;