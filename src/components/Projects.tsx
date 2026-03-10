import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";

const projects = [
  {
    title: "TaskFlow Pro",
    description:
      "A real-time project management platform with kanban boards, team collaboration, and automated workflow triggers. Achieved 99.9% uptime and reduced team planning time by 40% for 200+ active users.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    liveDemo: "#",
    github: "https://github.com/faithnatasha/taskflow-pro",
  },
  {
    title: "SecureVault API",
    description:
      "An encrypted secrets management service with team access controls and audit logging. Processes 50,000+ API requests daily with 150ms average response time.",
    tech: ["Node.js", "Express", "MongoDB", "Docker"],
    liveDemo: "#",
    github: "https://github.com/faithnatasha/securevault-api",
  },
  {
    title: "HealthTrack Dashboard",
    description:
      "A patient wellness monitoring dashboard aggregating data from multiple health APIs. Helps 15+ clinics track 5,000+ patient metrics with real-time trend analysis.",
    tech: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
    liveDemo: "#",
    github: "https://github.com/faithnatasha/healthtrack",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics. Handles ₹10L+ in monthly transactions with 500+ daily active users.",
    tech: ["React", "Node.js", "MongoDB", "Daraja API"],
    liveDemo: "#",
    github: "https://github.com/faithnatasha/ecommerce-platform",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-primary mb-3 text-center">
              Projects
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Selected Work
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              A selection of projects demonstrating full-stack development
              capabilities.
            </p>
          </ScrollReveal>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={300 + index * 120}>
                <div className="p-6 rounded-lg bg-background border border-border hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover-scale gap-1 transition-all duration-300 hover:border-primary/50">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo">
                          <ExternalLink size={16} />
                          <span>Demo</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover-scale gap-1 transition-all duration-300 hover:border-primary/50">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code">
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-foreground/80 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
