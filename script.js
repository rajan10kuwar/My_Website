// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId); // Find the target element
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the target
    });
});

/* Toggle hamburger menu */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});