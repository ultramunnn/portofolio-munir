document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const main = document.querySelector("main");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    main.classList.toggle("active");
    menuToggle.classList.toggle("active");
    
  });
});
