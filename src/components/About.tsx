import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-display text-center mb-12 text-foreground">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl text-subheading text-foreground">Education</h3>
                </div>
                <p className="text-body text-muted-foreground mb-3">
                  <strong className="text-emphasis text-foreground">B.Tech Chemical Engineering</strong>
                </p>
                <p className="text-body text-muted-foreground mb-2">SASTRA Deemed University</p>
                <p className="text-body text-muted-foreground">3rd Year Student</p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl text-subheading text-foreground">Focus Areas</h3>
                </div>
                <ul className="text-body text-muted-foreground space-y-2">
                  <li>• Fluid Mechanics</li>
                  <li>• Heat Transfer</li>
                  <li>• Nanotechnology</li>
                  <li>• Cement Production Processes</li>
                  <li>• Energy Storage Systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-elevated bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl text-subheading text-foreground">My Journey</h3>
              </div>
              <p className="text-body text-muted-foreground text-lg leading-relaxed">
                As a passionate Chemical Engineering student, I'm fascinated by the intersection of theoretical 
                principles and real-world applications. My academic journey has been focused on understanding 
                complex processes, from fluid dynamics to energy systems. Through hands-on learning and industry 
                exposure, I'm building expertise in process optimization and exploring how emerging technologies 
                like AI can revolutionize traditional chemical engineering practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;