document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in-right");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 1度だけ発火するように
        }
      });
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  