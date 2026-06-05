// navbar.js

ScrollTrigger.create({
  trigger: ".hero",
  start: "bottom bottom",
  endTrigger: "body",
  end: "top top",
  onEnter: () => {
    gsap.set(".navbar", {
      position: "fixed",
      bottom: 0,
      top: "auto",
    });
  },
  onLeaveBack: () => {
    gsap.set(".navbar", {
      position: "absolute",
      bottom: 0,
      top: "auto",
    });
  },
});

ScrollTrigger.create({
  trigger: ".navbar",
  start: "top top",
  onEnter: () => {
    gsap.set(".navbar", {
      position: "fixed",
      top: 0,
      bottom: "auto",
    });
  },
});
