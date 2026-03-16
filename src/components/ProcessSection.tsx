import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Story Mapping",
    desc: "I review footage, define the narrative spine, and identify what the audience needs to feel or understand first.",
  },
  {
    step: "02",
    title: "Editorial Assembly",
    desc: "The first cut focuses on structure, pacing, and message clarity before aesthetic polishing begins.",
  },
  {
    step: "03",
    title: "Refine & Deliver",
    desc: "Feedback is translated into precise revisions, then finalized for the right platforms, formats, and audiences.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32" ref={ref}>
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="kicker mb-3">Process</div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[0.95] letter-tight">
              A workflow designed to<br />reduce revision drag.
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
            Clean communication matters as much as clean cuts. I keep feedback cycles structured, visible, and practical.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.article
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="rim-border rounded-lg p-6"
            >
              <div className="kicker mb-4">Step {s.step}</div>
              <h3 className="mb-3 text-xl font-semibold letter-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
