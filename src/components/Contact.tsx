import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "vijaysanthoshi652@gmail.com",
      link: "mailto:vijaysanthoshi652@gmail.com",
      primary: true
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/vijay-v-a23431371",
      link: "https://www.linkedin.com/in/vijay-v-a23431371",
      primary: true
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/vijayv",
      link: "https://github.com/vijayv",
      primary: true
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 7708310183",
      link: "tel:+917708310183",
      primary: false
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Tamil Nadu, India",
      link: null,
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-display text-center mb-4 text-foreground">Get In Touch</h2>
          <p className="text-center text-body text-muted-foreground mb-12 text-lg">
            Let's connect and explore opportunities in chemical engineering
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl text-subheading text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-primary flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        {method.link ? (
                          <a 
                            href={method.link}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elevated bg-gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl text-subheading text-foreground mb-6">Let's Connect</h3>
                <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                  I'm actively seeking internship opportunities and would love to discuss 
                  how my passion for chemical engineering and process optimization can 
                  contribute to your organization.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full shadow-soft" 
                    size="lg"
                    onClick={() => window.open('mailto:vijaysanthoshi652@gmail.com', '_blank')}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 shadow-soft"
                      onClick={() => window.open('https://www.linkedin.com/in/vijay-v-a23431371', '_blank')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 shadow-soft"
                      onClick={() => window.open('https://github.com/vijayv', '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Available for:</strong><br />
                    Internships • Full-time Opportunities • Collaborative Projects
                  </p>
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