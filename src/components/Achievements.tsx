import { ScrollReveal } from "./ScrollReveal";

const achievements = [
  {
    icon: "🚀",
    title: "Performance Optimization",
    description:
      "Improved application performance across 10+ projects, achieving average 55% faster load times and 40% reduction in bounce rates.",
  },
  {
    icon: "💰",
    title: "Cost Savings",
    description:
      "Implemented cost-saving measures saving clients $50K+ annually through optimized cloud resource utilization and efficient code architecture.",
  },
  {
    icon: "👥",
    title: "Team Impact",
    description:
      "Conducted 30+ technical workshops and code reviews, helping teams adopt modern development practices and reducing onboarding time by 50%.",
  },
  {
    icon: "📈",
    title: "Scalability",
    description:
      "Built systems that successfully scaled from 1,000 to 500,000+ users without downtime or performance degradation.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-primary mb-3 text-center">
              Achievements
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Key Achievements & Impact
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Measurable outcomes and real-world impact delivered across projects and teams.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <ScrollReveal key={item.title} delay={300 + index * 100}>
                <div className="p-6 rounded-lg bg-background border border-border hover-lift h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
