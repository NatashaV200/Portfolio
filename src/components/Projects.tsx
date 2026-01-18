import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "TaskFlow Pro",
    problem: "Teams struggle to coordinate tasks across multiple projects, leading to missed deadlines and communication gaps.",
    description: "A real-time project management platform with kanban boards, team collaboration, and automated workflow triggers.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "Redis", "JWT Auth"],
    features: [
      "Real-time collaboration with WebSocket updates",
      "Role-based access control with team workspaces",
      "Automated task assignments and deadline notifications",
      "Integration with Slack and email notifications",
    ],
    architecture: "Microservices architecture with separate services for auth, notifications, and core logic. Redis for caching and pub/sub messaging.",
    github: "https://github.com/faithnatasha/taskflow-pro",
    live: "https://taskflow-pro.demo.com",
    featured: true,
  },
  {
    title: "SecureVault API",
    problem: "Small businesses need a secure way to manage API keys and secrets across development environments.",
    description: "An encrypted secrets management service with team access controls, audit logging, and environment-specific configurations.",
    tech: ["Node.js", "Express", "MongoDB", "AES-256", "OAuth2", "Docker"],
    features: [
      "End-to-end encryption for all stored secrets",
      "Environment segregation (dev, staging, production)",
      "Complete audit trail with IP logging",
      "SDK clients for multiple languages",
    ],
    architecture: "Stateless API design with encrypted MongoDB storage. All secrets encrypted at rest and in transit using AES-256-GCM.",
    github: "https://github.com/faithnatasha/securevault-api",
    live: "https://securevault-api.demo.com",
    featured: true,
  },
  {
    title: "HealthTrack Dashboard",
    problem: "Healthcare providers lack a unified view of patient wellness metrics from various wearable devices.",
    description: "A patient wellness monitoring dashboard aggregating data from multiple health APIs with trend analysis and alerts.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Chart.js", "REST APIs"],
    features: [
      "Real-time sync with Fitbit, Apple Health APIs",
      "Customizable alert thresholds per patient",
      "Historical trend visualization and reporting",
      "HIPAA-compliant data handling",
    ],
    architecture: "Event-driven architecture with background workers for API polling. PostgreSQL with row-level security for multi-tenant data isolation.",
    github: "https://github.com/faithnatasha/healthtrack",
    live: "https://healthtrack.demo.com",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    problem: "Independent retailers need a modern, customizable storefront without enterprise-level complexity.",
    description: "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary", "SendGrid"],
    features: [
      "Multi-currency support with Stripe integration",
      "Real-time inventory tracking and low-stock alerts",
      "Customer analytics and purchase insights",
      "Automated email sequences for abandoned carts",
    ],
    architecture: "Modular monolith with clear domain boundaries. Webhook-driven payment processing with idempotency guarantees.",
    github: "https://github.com/faithnatasha/ecommerce-platform",
    live: "https://ecommerce.demo.com",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Featured Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Projects I've <span className="gradient-text">Built</span>
          </h3>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            A selection of full-stack applications demonstrating end-to-end development capabilities.
          </p>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group rounded-2xl bg-card border border-border overflow-hidden card-hover ${
                  project.featured ? "md:grid md:grid-cols-2" : ""
                }`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    {project.featured && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
                        Featured
                      </span>
                    )}
                    <span className="text-xs mono text-muted-foreground">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-primary/80 text-sm mb-4 italic">
                    "{project.problem}"
                  </p>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {project.featured && (
                  <div className="p-8 md:p-10 bg-secondary/30 border-t md:border-t-0 md:border-l border-border">
                    <h5 className="text-sm font-semibold text-primary mb-4">Key Features</h5>
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowUpRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h5 className="text-sm font-semibold text-primary mb-2">Architecture</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
