import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Lonwabo <span className="text-primary">Zimela</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Lonwabo.zimela@gmail.com?subject=Project%20Inquiry"
            className="btn-press bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-sm border border-border p-2 md:hidden"
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
          className="border-t border-border bg-background px-6 pb-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Lonwabo.zimela@gmail.com"
            className="mt-2 block bg-foreground px-5 py-2.5 text-center text-sm font-semibold text-background"
          >
            Start a project
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
