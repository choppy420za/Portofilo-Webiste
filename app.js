const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");
const reveals = document.querySelectorAll(".reveal");

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener("click", () => {
    const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("is-open", !expanded);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    });
  });
}

if (reveals.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  reveals.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 0.06, 0.32)}s`;
    observer.observe(element);
  });
}
