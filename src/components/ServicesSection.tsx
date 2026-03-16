import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Video Editing",
    desc: "Narrative editing for documentaries, branded films, YouTube, interviews, and internal company content. I focus on structure first, then refine rhythm, performance, and clarity.",
    tags: ["Premiere Pro", "Story Edit", "Sound Polish"],
  },
  {
    num: "02",
    title: "Motion & Finishing",
    desc: "Titles, transitions, subtle motion graphics, and delivery-ready exports that elevate the final cut without overwhelming the core story.",
    tags: ["After Effects", "Color Prep", "Social Formats"],
  },
  {
    num: "03",
    title: "UX-Led Creative Direction",
    desc: "When a project needs more than editing, I apply UX thinking to make the viewer journey easier to follow, more persuasive, and more memorable.",
    tags: ["Figma", "User Flow", "Content Systems"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32" ref={ref}>
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="kicker mb-3">Services</div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[0.95] letter-tight">
              What I bring<br />into the room.
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
            The strongest projects need editorial judgment, reliable collaboration, and an eye for how audiences move through a story.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="rim-border card-hover flex min-h-[320px] flex-col justify-between rounded-lg p-6"
            >
              <div className="mb-8 font-mono text-2xl text-muted-foreground/40">{s.num}</div>
              <div>
                <h3 className="mb-3 text-xl font-semibold letter-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
