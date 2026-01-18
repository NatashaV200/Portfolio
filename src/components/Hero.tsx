import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="opacity-0 animate-fade-up">
            <p className="mono text-primary mb-4 text-sm tracking-wide">
              Hi, my name is
            </p>
          </div>

          <h1 className="opacity-0 animate-fade-up animation-delay-100">
            <span className="block text-5xl md:text-7xl font-bold text-foreground mb-2">
              Faith Natasha.
            </span>
            <span className="block text-4xl md:text-6xl font-bold text-muted-foreground">
              I build things for the web.
            </span>
          </h1>

          <p className="opacity-0 animate-fade-up animation-delay-200 mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm a full-stack software developer specializing in building exceptional 
            digital experiences. Currently focused on creating accessible, performant 
            applications with <span className="text-primary">React</span>, <span className="text-primary">Node.js</span>, 
            and modern cloud infrastructure.
          </p>

          <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="opacity-0 animate-fade-up animation-delay-400 flex gap-6 mt-12">
            <a
              href="https://github.com/faithnatasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/faithnatasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:faith@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
