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