const experiences = [
  {
    role: "Full-Stack Developer",
    company: "SMCF",
    type: "Contract",
    period: "2023 — Present",
    description:
      "Leading development of client-facing web applications for fintech startups. Architecting scalable backend systems and implementing responsive frontend interfaces.",
    highlights: [
      "Reduced API response times by 60% through database optimization",
      "Built authentication system serving 50K+ monthly active users",
      "Mentored junior developers on React best practices",
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
      "Designed microservices architecture handling 1M+ daily requests",
      "Implemented real-time data processing with Node.js and Redis",
      "Reduced infrastructure costs by 40%",
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
      "Delivered 15+ client projects on time and within budget",
      "Introduced Git workflow and code review practices",
      "Created reusable component library reducing dev time by 30%",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 text-center opacity-0 animate-fade-up">
            Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center opacity-0 animate-fade-up animation-delay-100">
            Work History
          </h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
            My professional journey building impactful software.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative pl-6 border-l-2 border-border opacity-0 animate-slide-left"
                style={{ animationDelay: `${300 + index * 150}ms` }}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
