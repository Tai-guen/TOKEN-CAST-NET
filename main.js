// TOKEN CAST NET – main.js v3

// ── NAV SCROLL ──
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 40 ? "0 2px 20px rgba(0,0,0,0.3)" : "none";
  }, { passive: true });
}

// ── HAMBURGER ──
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
  // Close on outside click
  document.addEventListener("click", e => {
    if (navLinks.classList.contains("open") && !navbar.contains(e.target)) {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// ── INTERSECTION OBSERVER (fade-in) ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity  = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  ".blog-card, .product-card, .overview-card, .skill-item, .trend-card, .signal-card, .blog-card-full"
).forEach(el => {
  el.style.opacity   = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  obs.observe(el);
});

// ── SMOOTH SCROLL for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
