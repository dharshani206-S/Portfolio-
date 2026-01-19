const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
  }, {
  threshold: 0.1,  // Trigger when 10% of element is visible
  rootMargin: "0px 0px -50px 0px"  // Trigger slightly before element enters viewport
});
elements.forEach(el => observer.observe(el));

