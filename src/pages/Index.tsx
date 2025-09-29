import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Goals />
      <Contact />
    </div>
  );
};

export default Index;
