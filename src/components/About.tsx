import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-primary mb-3">
              About Me
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Building software that solves real problems
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Bio */}
            <ScrollReveal delay={200} className="md:col-span-2">
              <div className="space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  I'm Faith Natasha, a full-stack developer with 3+ years of
                  experience crafting clean, efficient, and scalable web
                  applications that serve 100,000+ users monthly. My journey in
                  software engineering started with curiosity about how digital
                  products work and evolved into a career building them from the
                  ground up.
                </p>
                <p>
                  I specialize in the JavaScript ecosystem, working primarily
                  with React for dynamic frontends and Node.js for robust
                  backend services. I've successfully delivered 25+ projects,
                  from fintech platforms processing millions in transactions to
                  healthcare dashboards monitoring thousands of patients.
                </p>
                <p>
                  What drives me is the intersection of engineering excellence
                  and user experience. I've consistently achieved 40-60%
                  performance improvements through optimization, while
                  maintaining 99.5%+ system reliability. I believe that great
                  software should be invisible users should achieve their goals
                  without friction, backed by systems that are maintainable and
                  performant.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <ScrollReveal delay={300}>
                <div className="p-5 rounded-lg bg-background border border-border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-foreground/70">
                    Years Experience
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="p-5 rounded-lg bg-background border border-border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-foreground/70">
                    Projects Completed
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="p-5 rounded-lg bg-background border border-border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">18+</div>
                  <div className="text-sm text-foreground/70">Happy Clients</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <div className="p-5 rounded-lg bg-background border border-border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">8+</div>
                  <div className="text-sm text-foreground/70">Technologies Mastered</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
