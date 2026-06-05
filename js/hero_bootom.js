window.addEventListener("load", () => {
  // MARQUEE
  gsap.to(".hero-marquee-track", {
    x: "-50%",
    duration: 15,
    ease: "none",
    repeat: -1,
  });

  // POSICIONAR CRUZ
  gsap.set(".hero-cross-wrapper", {
    xPercent: -50,
    yPercent: -50,
  });

  // CRUZ GIRANDO
  gsap.to(".hero-cross-wrapper", {
    rotation: 360,
    duration: 8,
    ease: "none",
    repeat: -1,
    transformOrigin: "center center",
  });

  // IMAGEN CONTRA-ROTA
  gsap.to(".hero-cross-img img", {
    rotation: -360,
    duration: 8,
    ease: "none",
    repeat: -1,
    transformOrigin: "center center",
  });
});
