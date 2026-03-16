import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-4 md:grid-cols-2"
        >
          {/* Left: CTA */}
          <div className="flex flex-col justify-center">
            <div className="kicker mb-3">Contact</div>
            <h2 className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[0.95] letter-tight">
              Need an editor who thinks beyond the timeline?
            </h2>
            <p className="mb-8 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
              If you have a documentary, short campaign, branded video, or product story in motion, I can help shape it into something tighter, clearer, and more watchable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:Lonwabo.zimela@gmail.com"
                className="btn-press inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Mail size={16} strokeWidth={1.5} />
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/lonwabo-zimela-5a6707355"
                target="_blank"
                rel="noreferrer"
                className="btn-press inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all card-hover"
              >
                <ExternalLink size={16} strokeWidth={1.5} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Info panel */}
          <div className="rim-border rounded-lg p-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Available for freelance and collaborative projects
            </div>

            <div className="space-y-0">
              {[
                { label: "Email", value: "Lonwabo.zimela@gmail.com", href: "mailto:Lonwabo.zimela@gmail.com" },
                { label: "Showreel", value: "Open video", href: "https://drive.google.com/file/d/15Nqa5lh-AkfCo1JC8IjvZUb647psf7dS/view" },
                { label: "LinkedIn", value: "lonwabo-zimela", href: "https://www.linkedin.com/in/lonwabo-zimela-5a6707355" },
                { label: "Location", value: "Johannesburg, South Africa" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-border py-4 last:border-0">
                  <span className="text-sm font-semibold">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
