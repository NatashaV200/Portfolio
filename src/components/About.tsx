export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Building software that <span className="gradient-text">solves real problems</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Faith Natasha, a full-stack developer with a passion for crafting 
                clean, efficient, and scalable web applications. My journey in software 
                engineering started with curiosity about how digital products work—and 
                evolved into a career building them from the ground up.
              </p>
              <p>
                I specialize in the <span className="text-foreground">JavaScript ecosystem</span>, 
                working primarily with React for dynamic frontends and Node.js for robust 
                backend services. I approach every project with a full-stack mindset, 
                considering not just the UI, but also the API design, database architecture, 
                and deployment pipeline.
              </p>
              <p>
                What drives me is the intersection of engineering excellence and user 
                experience. I believe that great software should be invisible—users 
                should achieve their goals without friction, backed by systems that 
                are maintainable and performant.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to 
                open source, or diving into system design concepts that help me build 
                better architectures.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border card-hover">
                <div className="text-4xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border card-hover">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border card-hover">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
