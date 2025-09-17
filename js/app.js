const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key
const SERVICE = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
const TEMPLATE = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID

// Initialize EmailJS

(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

const contactForm = document.getElementById("contact-form")
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
            .then(() => alert("Message sent successfully!"))
            .catch(err => alert("Error: " + JSON.stringify(err)));
    });
}

//------------------------------------------------
const scrollBtn = document.querySelector('.scroll-btn')
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
//Scroll to top by scroll-btn
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// --------------------------
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

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
