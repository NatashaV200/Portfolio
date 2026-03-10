import { ScrollReveal } from "./ScrollReveal";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "SMCF",
    type: "Contract",
    period: "2023 — Present",
    description:
      "Leading development of client-facing web applications for fintech startups. Architecting scalable backend systems and implementing responsive frontend interfaces.",
    highlights: [
      "Reduced API response times by 65% through database query optimization and caching",
      "Built authentication system now serving 75,000+ monthly active users across 3 applications",
      "Mentored 4 junior developers, with 2 promoted to mid-level within 8 months",
      "Architected microservices handling 200,000+ daily requests with 99.5% uptime",
    ],
  },
  {
    role: "Backend Developer",
    company: "Cipher",
    type: "Full-time",
    period: "2021 — 2023",
    description:
      "Developed and maintained RESTful APIs for a data analytics platform. Focused on performance optimization and system reliability.",
    highlights: [
      "Designed microservices architecture handling 2.5M+ daily requests at peak traffic",
      "Implemented real-time data processing reducing latency from 2 seconds to 300ms",
      "Reduced infrastructure costs by 45% through optimized resource allocation",
      "Achieved 99.95% API reliability with comprehensive error handling and monitoring",
    ],
  },
  {
    role: "Junior Developer",
    company: "Jetlux",
    type: "Full-time",
    period: "2020 — 2021",
    description:
      "Built custom web solutions for small to medium businesses. Gained experience with the full development lifecycle.",
    highlights: [
      "Delivered 18+ client projects with 100% on-time completion rate",
      "Introduced Git workflow reducing code conflicts by 70%",
      "Created reusable component library reducing development time by 35% for new projects",
      "Maintained 95% client satisfaction score across all delivered projects",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-primary mb-3 text-center">
              Experience
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Work History
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              My professional journey building impactful software.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={300 + index * 120}>
                <div className="relative pl-6 border-l-2 border-border">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary animate-bounce-subtle" />

                  <div className="pb-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-primary">{exp.company}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 text-sm text-foreground/60 mb-3">
                      <span>{exp.period}</span>
                      <span>·</span>
                      <span>{exp.type}</span>
                    </div>

                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
