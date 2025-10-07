const PUBLIC_KEY = "ThijL73HGDMaw4i7L"; // EmailJS Public Key
const SERVICE = "service_hyf2ufd"; // EmailJS Service ID
const TEMPLATE = "template_1usngjq"; // EmailJS Template ID

// Initialize EmailJS

// auto call function 
(function () {
    emailjs.init(PUBLIC_KEY);
})();

const contactForm = document.getElementById("contact-form")
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        emailjs.sendForm(SERVICE, TEMPLATE, this)
            .then(() => {
                alert("Message sent successfully!")
                // clear form inputs
                contactForm.reset();
            }
            ).catch(err => alert("Error: " + JSON.stringify(err)));
    });
}

//------------------------------------------------
// show scrollBtn 
const scrollBtn = document.querySelector('.scroll-btn')
if (scrollBtn) {

    // OnScroll event
    window.addEventListener('scroll', () => {
        // Show & Hidden scroll-btn
        if (window.scrollY > 400) {
            scrollBtn.classList.add('show-scroll-btn')
        }
        else if (window.scrollY < 400) {
            scrollBtn.classList.remove('show-scroll-btn')
        }
    })

    //Scroll to top by scroll-btn
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}


// -------------------------------------------
const statusFilter = document.getElementById("statusFilter");
const sectorFilter = document.getElementById("sectorFilter");
const regionFilter = document.getElementById("regionFilter");
const projectCards = document.querySelectorAll(".project-card");

function filterProjects() {
    const statusValue = statusFilter.value;
    const sectorValue = sectorFilter.value;
    const regionValue = regionFilter.value;

    projectCards.forEach(card => {
        const status = card.dataset.status;
        const sector = card.dataset.sector;
        const region = card.dataset.region;

        // تحقق إذا المشروع ينطبق عليه الفلاتر
        if (
            (statusValue === "all" || status === statusValue) &&
            (sectorValue === "all" || sector === sectorValue) &&
            (regionValue === "all" || region === regionValue)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Event Listeners
statusFilter.addEventListener("change", filterProjects);
sectorFilter.addEventListener("change", filterProjects);
regionFilter.addEventListener("change", filterProjects);



// ----------------------------------------

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    // "images/hero4.jpg",
    // "images/hero5.jpg"

];

// Preload images
heroImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

let current = 0;
const heroSection = document.getElementById("hero-bg");

function changeHeroImage() {
    heroSection.style.backgroundImage =
        " url('" +
        heroImages[current] +
        "')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
    heroSection.style.backgroundRepeat = "no-repeat";
    current = (current + 1) % heroImages.length;
}
// أول تحميل
changeHeroImage();

// تغيير كل 5 ثوانٍ
setInterval(changeHeroImage, 5000);