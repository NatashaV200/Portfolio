const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible interfaces with modern React patterns including hooks, context, and state management.",
    skills: ["React", "JavaScript", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Redux", "Next.js"],
  },
  {
    title: "Backend Development",
    description: "Designing RESTful APIs and server-side logic with Node.js, focusing on security, performance, and clean architecture.",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT", "OAuth2", "API Design"],
  },
  {
    title: "Database & Storage",
    description: "Working with both SQL and NoSQL databases, designing schemas, writing optimized queries, and managing data integrity.",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Redis", "Data Modeling"],
  },
  {
    title: "DevOps & Tools",
    description: "Deploying and maintaining applications in cloud environments with CI/CD pipelines and containerization.",
    skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "Railway", "Linux", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Technical Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h3>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit refined through real-world projects and continuous learning.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-8 rounded-2xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-semibold mb-3">{category.title}</h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
