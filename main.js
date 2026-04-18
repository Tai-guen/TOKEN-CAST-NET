// TOKEN CAST NET – main.js

// ── NAV SCROLL EFFECT ──
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.style.background = window.scrollY > 50
      ? "rgba(5,10,15,0.95)"
      : "rgba(5,10,15,0.8)";
  });
}

// ── HAMBURGER MENU ──
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
  // close on link click
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });
}

// ── INTERSECTION OBSERVER (fade-in) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".blog-card, .product-card, .overview-card, .skill-item, .trend-card, .signal-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// ── TICKER PAUSE ON HOVER ──
const ticker = document.getElementById("ticker");
if (ticker) {
  ticker.addEventListener("mouseenter", () => ticker.style.animationPlayState = "paused");
  ticker.addEventListener("mouseleave", () => ticker.style.animationPlayState = "running");
}
