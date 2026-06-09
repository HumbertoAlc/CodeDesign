document.addEventListener("DOMContentLoaded", () => {
  const preview = document.querySelector(".section-6-preview");
  const previewImg = preview.querySelector("img");
  const section6Rows = document.querySelectorAll(".section-6-row");

  section6Rows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      previewImg.src = row.dataset.img;
      gsap.to(preview, { opacity: 1, duration: 0.3, ease: "power2.out" });
      row.querySelector(".row-desc").style.color = "white";
      row.querySelector(".row-desc").style.opacity = "1";
    });

    row.addEventListener("mouseout", () => {
      gsap.to(preview, { opacity: 0, duration: 0.3, ease: "power2.in" });
      row.querySelector(".row-desc").style.color = "";
      row.querySelector(".row-desc").style.opacity = "";
    });

    row.addEventListener("mousemove", (e) => {
      gsap.to(preview, {
        x: e.clientX - 90,
        y: e.clientY - 110,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
});
