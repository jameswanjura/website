new Glide(".glide", {
  type: "carousel",
  autoplay: 8000,
  animationDuration: 600,
  // *Larger* than $breakpoint-lg
  gap: 128, // px between each item
  peek: 56, // px on side margins
  perView: 2,
  breakpoints: {
    // $breakpoint-lg and *smaller*
    1280: {
      gap: 16,
      peek: 56,
      perView: 1,
    },
  },
}).mount();
