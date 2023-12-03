// Smooth scrolling to sections when clicking on buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle clicking interactions for clickable components
document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the Donate button
    document.querySelector('#donation-form button').addEventListener('click', function () {
        alert('Thank you for your donation!');
        // Add any other interactions you want for the Donate button
    });
});
