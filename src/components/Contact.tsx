import { useToast } from "@/hooks/use-toast";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const CONTACT_EMAIL = "faithnatasha2024@gmail.com";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

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

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      toast({
        title: "Email copied",
        description: "Email address copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast({
        title: "Copy failed",
        description: "Please copy the email manually.",
      });
    }
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

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <ScrollReveal delay={300} className="lg:col-span-2">
              <div className="space-y-6 rounded-xl border border-border bg-background p-6">
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={copyEmail}
                      className="w-full justify-between gap-2 h-12 sm:h-auto sm:py-3 px-4 text-left hover:border-primary/50">
                      <span className="flex items-center gap-3 min-w-0">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="truncate text-foreground/80">
                          {CONTACT_EMAIL}
                        </span>
                      </span>
                      {copied ? (
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      ) : (
                        <Copy className="h-4 w-4 text-foreground/70 flex-shrink-0" />
                      )}
                    </Button>
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
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://github.com/faith200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-md bg-background border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover-scale transition-colors min-h-11 min-w-11 flex items-center justify-center"
                      aria-label="GitHub">
                      <Github size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/faithnatasha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-md bg-background border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover-scale transition-colors min-h-11 min-w-11 flex items-center justify-center"
                      aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://x.com/faithnatasha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-md bg-background border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover-scale transition-colors min-h-11 min-w-11 flex items-center justify-center"
                      aria-label="Twitter/X">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={350} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-xl border border-border bg-background p-6">
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
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    className={`transition-shadow focus:shadow-md ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-sm text-destructive mt-1">
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
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className={`transition-shadow focus:shadow-md ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-sm text-destructive mt-1">
                      {errors.email}
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
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                    className={`transition-shadow focus:shadow-md ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-sm text-destructive mt-1">
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
