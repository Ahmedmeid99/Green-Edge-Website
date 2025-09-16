const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key
const SERVICE = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
const TEMPLATE = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID

// Initialize EmailJS

(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => alert("Message sent successfully!"))
        .catch(err => alert("Error: " + JSON.stringify(err)));
});

//------------------------------------------------
const scrollBtn = document.querySelector('.scroll-btn')

//Scroll to top by scroll-btn
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})