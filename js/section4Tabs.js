const tabs = document.querySelectorAll(".section-4-tab");
const panels = document.querySelectorAll(".section-4-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    const target = tab.dataset.tab;
    const activePanel = document.querySelector(`[data-panel="${target}"]`);
    activePanel.classList.add("active");

    // animar filas de arriba a abajo
    const rows = activePanel.querySelectorAll(".section-4-row");
    gsap.from(rows, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.08,
    });
  });
});
