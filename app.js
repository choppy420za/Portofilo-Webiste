const projects = [
  {
    title: "Pulse Energy Launch",
    type: "Commercial",
    year: "2026",
    role: "Lead Editor",
    deliverables: "Hero cut, 30s/15s cutdowns",
    description: "Brand campaign edit focused on product clarity and emotional pacing.",
  },
  {
    title: "Midnight Echo",
    type: "Music Video",
    year: "2025",
    role: "Editor",
    deliverables: "Main edit + teaser versions",
    description: "Performance and narrative intercut with beat-synced transitions.",
  },
  {
    title: "Beyond the Frame",
    type: "Documentary",
    year: "2025",
    role: "Trailer Editor",
    deliverables: "2-minute festival trailer",
    description: "Documentary trailer shaping interviews into a clear story arc.",
  },
  {
    title: "Streetwise Episode 4",
    type: "Series",
    year: "2024",
    role: "Episode Editor",
    deliverables: "24-minute episode",
    description: "Character-driven episode edit built for tension and narrative continuity.",
  },
  {
    title: "Nova Phone Social Set",
    type: "Social",
    year: "2024",
    role: "Social Editor",
    deliverables: "9:16 set, captions, hooks",
    description: "Short-form cuts optimized for early retention and repeat views.",
  },
];

const filtersEl = document.getElementById("filters");
const projectGridEl = document.getElementById("projectGrid");
const yearEl = document.getElementById("year");

const allTypes = ["All", ...new Set(projects.map((project) => project.type))];
let activeType = "All";

function renderFilters() {
  filtersEl.innerHTML = "";

  for (const type of allTypes) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${activeType === type ? " active" : ""}`;
    button.textContent = type;

    button.addEventListener("click", () => {
      activeType = type;
      renderFilters();
      renderProjects();
    });

    filtersEl.appendChild(button);
  }
}

function renderProjects() {
  projectGridEl.innerHTML = "";

  const visibleProjects =
    activeType === "All"
      ? projects
      : projects.filter((project) => project.type === activeType);

  for (const project of visibleProjects) {
    const card = document.createElement("article");
    card.className = "credit-card reveal";
    card.innerHTML = `
      <div class="credit-top">
        <span class="credit-type">${project.type}</span>
        <span class="credit-year">${project.year}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="credit-meta">${project.role} • ${project.deliverables}</p>
      <p class="credit-desc">${project.description}</p>
    `;

    projectGridEl.appendChild(card);
  }
}

yearEl.textContent = new Date().getFullYear().toString();
renderFilters();
renderProjects();
