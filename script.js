// ==============================
// RAHUL - JAVASCRIPT
// ==============================

// Smooth scroll untuk semua link navigasi
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ==============================
// PRODUCT CARD ANIMATION
// ==============================

const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


cards.forEach(card => {
    observer.observe(card);
});


// ==============================
// BUTTON PESAN
// ==============================

const orderButtons = document.querySelectorAll(".btn-primary, .nav-button");

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Rahul Order Button Clicked");

    });

});


// ==============================
// FOOTER YEAR
// ==============================

const yearElement = document.querySelector("footer p:last-child");

if (yearElement) {
    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Rahul. All Rights Reserved.`;
}