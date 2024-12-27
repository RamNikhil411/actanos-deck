const lenis = new Lenis({
    lerp:0.05,
    gestureOrientation:"vertical",
    orientation:"horizontal",
    smoothWheel:true
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);