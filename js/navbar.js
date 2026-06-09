ScrollTrigger.create({
  trigger: ".navbar",
  start: "top top",
  onEnter: () => {
    gsap.set(".navbar", {
      position: "fixed",
      top: 20,
      bottom: "auto",
    });
  },
  onLeaveBack: () => {
    gsap.set(".navbar", {
      position: "absolute",
      top: "auto",
      bottom: "30px",
    });
  },
});
