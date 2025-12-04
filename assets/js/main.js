// Affichage / masquage du bouton "retour en haut"
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "inline-block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gestion de la classe active sur la nav (optionnel si tu le fais à la main)
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
