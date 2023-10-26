var navLinks = document.getElementById("nav-links");

document.getElementById("menu-toggle").addEventListener("click", function () {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
