const rows = document.querySelectorAll(".section-5-row");

// estado inicial
rows.forEach((row, i) => {
  const img = row.querySelector(".section-5-image");
  gsap.set(img, { scaleX: i === 0 ? 1 : 0.6, transformOrigin: "right center" });
});

rows.forEach((row) => {
  const img = row.querySelector(".section-5-image");

  ScrollTrigger.create({
    trigger: row,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      gsap.to(img, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.inOut",
        transformOrigin: "right center",
      });
    },
    onLeave: () => {
      gsap.to(img, {
        scaleX: 0.6,
        duration: 1.2,
        ease: "power2.inOut",
        transformOrigin: "right center",
      });
    },
    onEnterBack: () => {
      gsap.to(img, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.inOut",
        transformOrigin: "right center",
      });
    },
    onLeaveBack: () => {
      gsap.to(img, {
        scaleX: 0.6,
        duration: 1.2,
        ease: "power2.inOut",
        transformOrigin: "right center",
      });
    },
  });
});

const projectCursor = document.querySelector(".project-cursor");

rows.forEach((row) => {
  const image = row.querySelector(".section-5-image");

  image.addEventListener("mouseenter", () => {
    gsap.to(projectCursor, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  image.addEventListener("mouseleave", () => {
    gsap.to(projectCursor, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.in",
    });
  });

  image.addEventListener("mousemove", (e) => {
    gsap.to(projectCursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});
