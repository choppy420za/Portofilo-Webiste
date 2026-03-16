import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const metrics = [
  { value: "6+", label: "Years editing documentary, short-form, and branded content" },
  { value: "40+", label: "Projects delivered across agencies, founders, and creative teams" },
  { value: "3×", label: "Specialist focus: story structure, motion rhythm, and UX thinking" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-[20vh]" id="top">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left: Copy */}
          <div>
            <motion.div variants={item} className="kicker mb-6">
              Johannesburg-based editor
            </motion.div>

            <motion.h1
              variants={item}
              className="gradient-text mb-6 text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.95] letter-tight"
            >
              Video editing with cinematic discipline.
            </motion.h1>

            <motion.p variants={item} className="max-w-[48ch] text-base leading-relaxed text-muted-foreground">
              I help brands, filmmakers, and digital teams shape footage into narratives that feel sharp,
              human, and intentional. From documentary pacing to polished corporate campaigns.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="btn-press bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary hover:text-primary-foreground"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="btn-press border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all card-hover"
              >
                Book a call
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-16 grid gap-4 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.value} className="rim-border rounded-lg p-4">
                  <div className="mb-1 text-2xl font-semibold text-primary">{m.value}</div>
                  <div className="text-xs leading-snug text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Showreel panel */}
          <motion.div variants={item} className="relative">
            <div className="rim-border overflow-hidden rounded-lg">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="kicker text-[10px]">Showreel 2026</span>
                <span className="text-xs text-muted-foreground">Editor · Storyteller · Interface thinker</span>
              </div>
              <div className="relative aspect-video overflow-hidden bg-card">
                <iframe
                  src="https://drive.google.com/file/d/15Nqa5lh-AkfCo1JC8IjvZUb647psf7dS/preview"
                  title="Lonwabo Zimea showreel"
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  loading="eager"
                />
              </div>
              <div className="flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground">
                <span>Documentary · Short film · Social campaigns</span>
                <span>Premiere Pro · After Effects · Figma</span>
              </div>
            </div>

          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 flex justify-center"
        >
          <ArrowDown size={20} strokeWidth={1.5} className="animate-bounce text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
