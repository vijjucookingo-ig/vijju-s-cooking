// ===============================
// VIJJU COOKING - SCRIPT.JS
// ===============================

// Loader Animation
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 3000);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Recipe Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20);
        const rotateY = ((centerX - x) / 20);

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

});

// Navbar Background on Scroll
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 100) {

        nav.style.background =
            "rgba(0,0,0,0.85)";

        nav.style.backdropFilter =
            "blur(10px)";

    } else {

        nav.style.background =
            "transparent";
    }

});

// Fade-In Animation on Scroll
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".card, .video-box, #about"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform =
        "translateY(60px)";
    el.style.transition =
        "all 0.8s ease";

    observer.observe(el);

});

// Floating Golden Particles
function createParticle() {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    document.body.appendChild(particle);

    const size =
        Math.random() * 6 + 2;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.bottom =
        "-10px";

    particle.style.position =
        "fixed";

    particle.style.borderRadius =
        "50%";

    particle.style.background =
        "#f6b000";

    particle.style.pointerEvents =
        "none";

    particle.style.zIndex =
        "1";

    const duration =
        Math.random() * 5 + 4;

    particle.animate([
        {
            transform:
            "translateY(0)",
            opacity: 1
        },
        {
            transform:
            "translateY(-100vh)",
            opacity: 0
        }
    ], {
        duration: duration * 1000,
        easing: "linear"
    });

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);

}

// Generate Particles Continuously
setInterval(createParticle, 300);

// Hero Parallax Effect
window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    let offset =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.4 + "px";

});

console.log(
    "🔥 VIJJU COOKING Loaded Successfully!"
);