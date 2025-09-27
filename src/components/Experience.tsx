import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-display text-center mb-12 text-foreground">Experience</h2>
          
          <Card className="shadow-elevated bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <CardTitle className="text-2xl text-subheading text-foreground">Industrial Intern</CardTitle>
                    <p className="text-xl text-emphasis text-primary">UltraTech Cement</p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-muted-foreground">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Summer 2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-body text-muted-foreground text-lg leading-relaxed">
                Gained comprehensive hands-on experience in cement manufacturing processes through 
                an intensive industrial internship program, working directly with cutting-edge 
                equipment and learning from industry professionals.
              </p>
              
              <div>
                <h4 className="text-lg text-subheading text-foreground mb-3">Key Learning Areas:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-body text-muted-foreground">Vertical Roller Mill (VRM) Operations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Gas Conditioning Tower (GCT) Systems</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Electrostatic Precipitator (ESP)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Rotary Kiln Operations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Coal Combustion & Recovery (CCR)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Quality Control Processes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg text-subheading text-foreground mb-3">Skills Developed:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Process Analysis",
                    "Equipment Operation",
                    "Safety Protocols",
                    "Quality Control",
                    "Industrial Documentation",
                    "Team Collaboration"
                  ].map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;