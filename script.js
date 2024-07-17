// Initialize EmailJS
emailjs.init('n-E9DLMkg_j4IBPM_'); // Your Public API Key 

// Form submit handler
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get email from input field
    const email = document.getElementById('emailInput').value;

    // Send email using EmailJS
    emailjs.sendForm('service_uoa56zz', 'template_k3ak7x4', {
        'to_email': 'siamf813@gmail.com', // Email address to send to
        'user_email': email, // User's email
        // Add other relevant data as needed
    }, 'n-E9DLMkg_j4IBPM_')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // You can show a success message to the user here
        })
        .catch((error) => {
            console.error('FAILED...', error);
            // You can show an error message to the user here
        });
});
