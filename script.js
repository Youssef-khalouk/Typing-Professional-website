// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-05HQWEKPEK');

// Initialize EmailJS
(function () {
    emailjs.init("MDau2j_FXMQtfgVgD"); // Replace with your user ID from EmailJS
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS
    const params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send("service_376x694", "template_s5ifpvn", params)
        .then((response) => {
            alert("Your message has been sent!");
            document.getElementById("contact-form").reset(); // Reset the form
        })
        .catch((error) => {
            alert("Error: " + JSON.stringify(error));
        });
}

function switchLanguage(lang) {
    if (lang === 'en') {
        window.location.href = '../en/index.html';
    } else if (lang === 'fr') {
        window.location.href = '../fr/index.html';
    } else if (lang === 'ar') {
        window.location.href = '../ar/index.html';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links ul li a'); // Select all menu links

    // Toggle the menu when the hamburger button is clicked
    menuToggle.addEventListener('click', function (event) {
        navLinks.classList.toggle('active');
        event.stopPropagation(); // Prevent the click from propagating to the document
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active'); // Remove the "active" class to hide the menu
        }
    });

    // Close the menu when clicking on any menu item
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            navLinks.classList.remove('active'); // Remove the "active" class to hide the menu
        });
    });
});