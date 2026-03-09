// ===========================
// MENU MOBILE
// ===========================

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("open");
});

function closeMobileMenu() {
    mobileNav.classList.remove("open");
}

// ===========================
// SCROLL : APPARITION DES SECTIONS
// ===========================

const fadeElements = document.querySelectorAll(".section");

fadeElements.forEach(function (element) {
    element.classList.add("fade-in");
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(function (element) {
    observer.observe(element);
});

// ===========================
// SCROLL : HEADER OPAQUE AU DÉFILEMENT
// ===========================

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(13, 15, 20, 0.98)";
    } else {
        header.style.backgroundColor = "rgba(13, 15, 20, 0.92)";
    }
});

// ===========================
// NAVIGATION ACTIVE AU SCROLL
// ===========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.style.color = "";
        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#4a9eff";
        }
    });
});
