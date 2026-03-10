import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 -left-12 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-24 right-[-4rem] h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-blue-400/10 dark:bg-blue-300/10 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl relative z-10">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 text-sm tracking-wide opacity-0 animate-fade-up">
            Hi, my name is
          </p>

          {/* Name and tagline */}
          <h1 className="opacity-0 animate-fade-up animation-delay-100">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 tracking-tight leading-[1.05] bg-gradient-to-r from-primary via-primary to-foreground dark:to-foreground bg-clip-text text-transparent">
              Faith Natasha
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground/85">
              Full-Stack Developer
            </span>
          </h1>

          {/* Description */}
          <p className="opacity-0 animate-fade-up animation-delay-200 mt-8 text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed">
            I build accessible, performant web applications with modern
            technologies. Focused on creating clean solutions that solve real
            problems.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 mt-10">
            <Button size="lg" asChild className="hover-lift">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="opacity-0 animate-fade-up animation-delay-400 flex gap-5 mt-10">
            <a
              href="https://github.com/faithnatasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-all hover-scale p-2 -m-2"
              aria-label="GitHub">
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/faithnatasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-all hover-scale p-2 -m-2"
              aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:faith@example.com"
              className="text-foreground/60 hover:text-foreground transition-all hover-scale p-2 -m-2"
              aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
