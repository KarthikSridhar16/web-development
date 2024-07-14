// Initialize EmailJS
(function(){
    emailjs.init("iNQiQD0gjVoDXImLu");  
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Prepare the template parameters
    const templateParams = {
        name: name,
        email: email,
        message: message
    };
    
    // Send email
    emailjs.send('service_nky1l36', 'template_22rfqc8', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           document.getElementById('form-response').textContent = 'Thank you for contacting us! We will get back to you soon.';
           document.getElementById('contact-form').reset();
        }, function(error) {
           console.log('FAILED...', error);
           document.getElementById('form-response').textContent = 'Oops! Something went wrong. Please try again later.';
        });
});
function adjustFontSize() {
    var viewportWidth = window.innerWidth;

    // Adjust font size based on viewport width
    if (viewportWidth >= 768) {
        document.body.style.fontSize = '18px'; // Larger font size for desktop
    } else {
        document.body.style.fontSize = '16px'; // Default font size for mobile
    }
}

// Initial call to adjust font size on page load
adjustFontSize();

// Adjust font size on window resize
window.addEventListener('resize', adjustFontSize);
