import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36" id="top">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,255,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(0,130,255,0.12),transparent_35%)]" />
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left: Copy */}
          <div>
            <motion.div variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
              <Sparkles size={14} className="text-primary" />
              <span className="kicker !text-[10px]">Johannesburg-based editor</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="gradient-text mb-5 text-[clamp(2.8rem,9vw,5.8rem)] font-semibold leading-[0.92] letter-tight"
            >
              Video editing with cinematic discipline and UX clarity.
            </motion.h1>

            <motion.p variants={item} className="max-w-[48ch] text-base leading-relaxed text-muted-foreground">
              I help brands, filmmakers, and digital teams shape footage into narratives that feel sharp,
              human, and intentional. From documentary pacing to polished corporate campaigns.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              <a href="#services" className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                Documentary edits
              </a>
              <a href="#work" className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                Campaign content
              </a>
              <a href="#contact" className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                Book discovery call
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="btn-press inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                <Play size={16} />
                View selected work
              </a>
              <a
                href="#contact"
                className="btn-press rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all card-hover"
              >
                Book a call
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-16 grid gap-4 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.value} className="rim-border rounded-lg bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                  <div className="mb-1 text-2xl font-semibold text-primary">{m.value}</div>
                  <div className="text-xs leading-snug text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Showreel panel */}
          <motion.div variants={item} className="relative lg:pl-2">
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
          <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground hover:text-foreground">
            Scroll to work
            <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
