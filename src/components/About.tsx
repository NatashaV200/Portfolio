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
                  I'm Faith Natasha, a full-stack developer with a passion for
                  crafting clean, efficient, and scalable web applications. My
                  journey in software engineering started with curiosity about
                  how digital products work—and evolved into a career building
                  them from the ground up.
                </p>
                <p>
                  I specialize in the JavaScript ecosystem, working primarily
                  with React for dynamic frontends and Node.js for robust
                  backend services. I approach every project with a full-stack
                  mindset, considering the UI, API design, database
                  architecture, and deployment pipeline.
                </p>
                <p>
                  What drives me is the intersection of engineering excellence
                  and user experience. I believe that great software should be
                  invisible—users should achieve their goals without friction,
                  backed by systems that are maintainable and performant.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <div className="flex flex-row md:flex-col gap-4">
              <ScrollReveal delay={300}>
                <div className="flex-1 p-5 rounded-lg bg-background border border-border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">4+</div>
                  <div className="text-sm text-foreground/70">
                    Years Experience
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex-1 p-5 rounded-lg bg-background border border-border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-foreground/70">
                    Projects Built
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex-1 p-5 rounded-lg bg-background border border-border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-foreground/70">Happy Clients</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
