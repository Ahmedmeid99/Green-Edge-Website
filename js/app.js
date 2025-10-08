const PUBLIC_KEY = "ThijL73HGDMaw4i7L";
const SERVICE = "service_hyf2ufd";
const TEMPLATE = "template_1usngjq";

//----------------------------------------
// EmailJS functionality
//----------------------------------------
if (typeof emailjs !== "undefined") {
    emailjs.init(PUBLIC_KEY);

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            emailjs.sendForm(SERVICE, TEMPLATE, this)
                .then(() => {
                    alert("Message sent successfully!");
                    contactForm.reset();
                })
                .catch(err => alert("Error: " + JSON.stringify(err)));
        });
    }
}

//----------------------------------------
// Scroll Button
//----------------------------------------
const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) scrollBtn.classList.add("show-scroll-btn");
        else scrollBtn.classList.remove("show-scroll-btn");
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

//----------------------------------------
// Hero Section
//----------------------------------------
const heroSection = document.getElementById("hero-bg");
if (heroSection) {
    const heroImages = [
        "images/hero1.jpg",
        "images/hero2.jpg",
        "images/hero3.jpg",
    ];

    let current = 0;
    const loadedImages = heroImages.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    function changeHeroImage() {
        heroSection.style.backgroundImage = `url('${loadedImages[current].src}')`;
        heroSection.style.backgroundSize = "cover";
        heroSection.style.backgroundPosition = "center";
        heroSection.style.backgroundRepeat = "no-repeat";
        current = (current + 1) % loadedImages.length;
    }

    changeHeroImage();
    setInterval(changeHeroImage, 5000);
}

//----------------------------------------
// Loader
//----------------------------------------
const loader = document.getElementById("loader");
if (loader) {
    window.addEventListener("load", () => {
        setTimeout(() => loader.classList.add("hidden"), 2000);
    });
}

// //----------------------------------------
// // Project Filtering (only on Projects page)
// //----------------------------------------
// const statusFilter = document.getElementById("statusFilter");
// const sectorFilter = document.getElementById("sectorFilter");
// const regionFilter = document.getElementById("regionFilter");

// if (statusFilter && sectorFilter && regionFilter) {
//     const projectCards = document.querySelectorAll(".project-card");

//     function filterProjects() {
//         const statusValue = statusFilter.value;
//         const sectorValue = sectorFilter.value;
//         const regionValue = regionFilter.value;

//         projectCards.forEach(card => {
//             const status = card.dataset.status;
//             const sector = card.dataset.sector;
//             const region = card.dataset.region;

//             card.style.display =
//                 (statusValue === "all" || status === statusValue) &&
//                     (sectorValue === "all" || sector === sectorValue) &&
//                     (regionValue === "all" || region === regionValue)
//                     ? "block"
//                     : "none";
//         });
//     }

//     statusFilter.addEventListener("change", filterProjects);
//     sectorFilter.addEventListener("change", filterProjects);
//     regionFilter.addEventListener("change", filterProjects);
// }

//----------------------------------------
// Auto Update Current Year
//----------------------------------------
const yearElement = document.getElementById("current-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}