import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 text-sm tracking-wide opacity-0 animate-fade-up">
            Hi, my name is
          </p>

          {/* Name and tagline */}
          <h1 className="opacity-0 animate-fade-up animation-delay-100">
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 tracking-tight">
              Faith Natasha
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/70">
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
