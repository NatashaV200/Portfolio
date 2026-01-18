import { ArrowRight, Github, Linkedin, Mail, Camera } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <div className="opacity-0 animate-fade-up">
              <p className="mono text-primary mb-4 text-sm tracking-wide">
                Hi, my name is
              </p>
            </div>

            <h1 className="opacity-0 animate-fade-up animation-delay-100">
              <span className="block text-5xl md:text-7xl font-bold text-foreground mb-2">
                Faith Natasha.
              </span>
              <span className="block text-4xl md:text-6xl font-bold text-muted-foreground">
                I build things for the web.
              </span>
            </h1>

            <p className="opacity-0 animate-fade-up animation-delay-200 mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm a full-stack software developer specializing in building exceptional 
              digital experiences. Currently focused on creating accessible, performant 
              applications with <span className="text-primary">React</span>, <span className="text-primary">Node.js</span>, 
              and modern cloud infrastructure.
            </p>

            <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 mt-10">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="opacity-0 animate-fade-up animation-delay-400 flex gap-6 mt-12">
              <a
                href="https://github.com/faithnatasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/faithnatasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:faith@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className="opacity-0 animate-fade-up animation-delay-200 flex-shrink-0">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl" />
              
              {/* Main photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-2xl">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Faith Natasha - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted/50 to-muted text-muted-foreground">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Camera className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-sm font-medium">Add Your Photo</p>
                    <p className="text-xs mt-1 opacity-70">Click to upload</p>
                  </div>
                )}
                
                {/* Upload overlay */}
                <label className="absolute inset-0 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center">
                  <Camera className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-foreground">
                    {profileImage ? 'Change Photo' : 'Upload Photo'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Creative corner accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
