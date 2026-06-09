gsap.registerPlugin(ScrollTrigger);

// IMAGEN BASE — sube con el scroll desde abajo
gsap.from(".section-2-img--base", {
  yPercent: 150,
  scale: 0.5,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-2",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});

// IMAGEN MID — empieza después de base
gsap.from(".section-2-img--mid", {
  yPercent: 100,
  scale: 0.5,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-2",
    start: "top top",
    end: "+=300",
    scrub: true,
    pinnedContainer: ".section-2",
  },
});

// IMAGEN TOP — empieza después de mid
gsap.from(".section-2-img--top", {
  yPercent: 100,
  scale: 0.5,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-2",
    start: "top top+=300",
    end: "+=300",
    scrub: true,
    pinnedContainer: ".section-2",
  },
});
document.querySelectorAll(".section-2-text").forEach((el) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "top 70%",
      scrub: true,
      pinnedContainer: ".section-2",
    },
  });
});
