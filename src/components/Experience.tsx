const experiences = [
  {
    role: "Full-Stack Developer",
    company: "TechNova Solutions",
    type: "Contract",
    period: "2023 — Present",
    description: "Leading development of client-facing web applications for fintech startups. Architecting scalable backend systems and implementing responsive frontend interfaces.",
    highlights: [
      "Reduced API response times by 60% through database optimization and caching strategies",
      "Built authentication system serving 50K+ monthly active users",
      "Mentored junior developers on React best practices and code review",
    ],
  },
  {
    role: "Backend Developer",
    company: "DataStream Inc.",
    type: "Full-time",
    period: "2021 — 2023",
    description: "Developed and maintained RESTful APIs for a data analytics platform. Focused on performance optimization and system reliability.",
    highlights: [
      "Designed microservices architecture handling 1M+ daily API requests",
      "Implemented real-time data processing pipeline with Node.js and Redis",
      "Reduced infrastructure costs by 40% through efficient resource utilization",
    ],
  },
  {
    role: "Junior Developer",
    company: "WebCraft Agency",
    type: "Full-time",
    period: "2020 — 2021",
    description: "Built custom web solutions for small to medium businesses. Gained hands-on experience with the full development lifecycle.",
    highlights: [
      "Delivered 15+ client projects on time and within budget",
      "Introduced Git workflow and code review practices to the team",
      "Created reusable component library reducing development time by 30%",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Where I've <span className="gradient-text">Worked</span>
          </h3>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            My professional journey building impactful software solutions.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-0 w-3 h-3 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0 ? "left-0 md:left-1/2 md:-translate-x-1.5" : "left-0 md:left-1/2 md:-translate-x-1.5"
                  }`} />

                  <div className={`p-6 rounded-xl bg-card border border-border card-hover ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}>
                    <div className={`flex flex-col md:flex-row md:items-center gap-2 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <span className="text-xs mono text-primary">{exp.period}</span>
                      <span className="hidden md:block text-muted-foreground">•</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                    <p className="text-primary mb-4">{exp.company}</p>
                    <p className={`text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground">
                          <span className="text-primary mr-2">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
