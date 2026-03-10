import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-primary mb-3 text-center">
              Contact
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Get in Touch
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <ScrollReveal delay={300} className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:faith@example.com"
                      className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>faithnatasha2024@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-foreground/70">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Available for Remote Work</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground mb-4">
                    Social
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/faith200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-md bg-background border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover-scale transition-colors"
                      aria-label="GitHub">
                      <Github size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/faithnatasha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-md bg-background border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover-scale transition-colors"
                      aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={350} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`transition-shadow focus:shadow-md ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`transition-shadow focus:shadow-md ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`transition-shadow focus:shadow-md ${errors.subject ? "border-destructive" : ""}`}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`transition-shadow focus:shadow-md ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="hover-lift">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
