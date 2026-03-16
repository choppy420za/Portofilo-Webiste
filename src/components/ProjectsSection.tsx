import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imvelogyImage from "@/assets/imvelogy.jpeg";
import omsLogoImage from "@/assets/oms-logo.png";
import youtubeImage from "@/assets/youtube.png";

const projects = [
  {
    kicker: "Documentary",
    title: "Imvelogy",
    desc: "Documentary editing work for Imvelogy, shaped for emotional pacing, cultural context, and narrative clarity.",
    meta: ["Story edit + finishing", "SABC+"],
    image: imvelogyImage,
    href: "https://sabc-plus.com/show/230045/Imvelogy",
  },
  {
    kicker: "Website",
    title: "OMS Africa",
    desc: "Web-focused creative work connected to OMS Africa, presenting a sharper digital presence and clearer brand communication.",
    meta: ["Website reference", "oms.africa"],
    image: omsLogoImage,
    href: "https://www.oms.africa",
  },
  {
    kicker: "Video Editor",
    title: "YouTube Video Editing",
    desc: "Video editing direction for YouTube content, focused on pacing, clarity, and audience retention across episodes.",
    meta: ["Video editing", "YouTube"],
    image: youtubeImage,
    href: "https://www.youtube.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32" ref={ref}>
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="kicker mb-3">Selected Work</div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[0.95] letter-tight">
              Projects shaped for<br />attention and recall.
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
            A mix of editorial styles, each driven by a different audience need: trust, emotion, clarity, or momentum.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="rim-border card-hover group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="kicker mb-1 text-[10px]">{p.kicker}</div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                  <span>{p.meta[0]}</span>
                  <span>{p.meta[1]}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
