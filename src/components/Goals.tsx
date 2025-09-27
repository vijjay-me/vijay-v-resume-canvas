import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Calendar, CheckCircle, Circle, Rocket } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      category: "Short-term (Next 6 months)",
      icon: <Circle className="h-5 w-5" />,
      items: [
        { text: "Complete current academic semester with distinction", completed: false },
        { text: "Secure summer internship in process optimization", completed: false },
        { text: "Develop Python skills for chemical process modeling", completed: false },
        { text: "Attend industry conferences and networking events", completed: false }
      ]
    },
    {
      category: "Medium-term (Next 12 months)",
      icon: <Target className="h-5 w-5" />,
      items: [
        { text: "Complete final year project on AI in chemical processes", completed: false },
        { text: "Gain expertise in advanced process simulation software", completed: false },
        { text: "Build portfolio of process optimization projects", completed: false },
        { text: "Establish professional network in chemical engineering", completed: false }
      ]
    },
    {
      category: "Career Objective (Before 2025)",
      icon: <Rocket className="h-5 w-5" />,
      items: [
        { text: "Secure full-time position in chemical engineering", completed: false },
        { text: "Specialize in process optimization and automation", completed: false },
        { text: "Lead innovative projects in sustainable processes", completed: false },
        { text: "Contribute to research in AI-driven process control", completed: false }
      ]
    }
  ];

  return (
    <section id="goals" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Career Goals</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My roadmap to securing a position in chemical engineering before 2025
          </p>
          
          <div className="space-y-8">
            {goals.map((goalSet, index) => (
              <Card key={index} className="shadow-card bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <div className="text-primary mr-3">
                      {goalSet.icon}
                    </div>
                    {goalSet.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {goalSet.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        {item.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`${item.completed ? 'text-foreground line-through' : 'text-muted-foreground'}`}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 shadow-elevated bg-gradient-hero border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Vision Statement</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                To become a leading chemical engineer who bridges traditional process engineering 
                with cutting-edge AI and automation technologies, contributing to sustainable 
                industrial practices and innovative solutions for global challenges.
              </p>
              <div className="flex justify-center mt-6">
                <Badge className="bg-white/20 text-white border-white/30 text-base px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Target: Employed by December 2024
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Goals;