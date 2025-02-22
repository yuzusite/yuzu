document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector("header");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      header.classList.toggle("hidden"); // ヘッダーを隠す/表示
    });
  });
  
  document.body.style.backgroundColor = "red";
