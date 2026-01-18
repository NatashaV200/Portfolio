import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/70">
            © {currentYear} Faith Natasha. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/faithnatasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground hover:scale-110 transition-all"
              aria-label="GitHub">
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/faithnatasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground hover:scale-110 transition-all"
              aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:faith@example.com"
              className="text-foreground/60 hover:text-foreground hover:scale-110 transition-all"
              aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
