// ================================
// MOBILE NAVBAR
// ================================

const nav = document.querySelector(".nav");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


// ================================
// BACK TO TOP BUTTON
// ================================

const topButton = document.querySelector("#top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "grid";

    } else {

        topButton.style.display = "none";

    }

});


// Scroll to top

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ================================
// PROJECT CARD HOVER EFFECT
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            ((e.clientX - rect.left) / rect.width) * 100;

        const y =
            ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);

    });

});


// ================================
// CURRENT YEAR IN FOOTER
// ================================

const footer = document.querySelector("footer");

if (footer) {

    const currentYear = new Date().getFullYear();

    footer.innerHTML =
        `© ${currentYear} Vaibhav Dixit · Designed & Built with <span>♥</span>`;

}