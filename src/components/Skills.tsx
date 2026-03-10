import { ScrollReveal } from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 text-center">
              Skills
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Technical Expertise
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Technologies I work with to build modern web applications.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={300 + index * 100}>
                <div className="p-6 rounded-lg bg-background border border-border hover-lift">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 cursor-default">
                        {skill}
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
