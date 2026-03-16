import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import lzLogo from "@/assets/lz-logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="container flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="group flex items-center gap-3 text-lg font-semibold tracking-tight">
          <img
            src={lzLogo}
            alt="LZ logo"
            className="h-14 w-14 rounded-md border border-border/70 object-cover transition-transform duration-300 group-hover:scale-105 md:h-16 md:w-16"
          />
          <span className="leading-tight">
            Lonwabo <span className="text-primary">Zimela</span>
            <span className="mt-0.5 hidden text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:block">
              Video Editor
            </span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Lonwabo.zimela@gmail.com?subject=Project%20Inquiry"
            className="btn-press inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md border border-border bg-secondary p-2.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md border border-border bg-card px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Lonwabo.zimela@gmail.com"
            className="mt-3 block rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Start a project
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
