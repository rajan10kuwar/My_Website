/* Toggle hamburger menu */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/* Smooth scrolling for nav links */
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Stop default jump
        const targetId = link.getAttribute('href').substring(1); // Get section ID
        const targetElement = document.getElementById(targetId); // Find section
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly
    });
});

/* Contact form validation */
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    let isValid = true;

    // Validate name
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.classList.add('active');
        name.classList.add('invalid');
        isValid = false;
    } else {
        nameError.classList.remove('active');
        name.classList.remove('invalid');
    }

    // Validate email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Valid email is required';
        emailError.classList.add('active');
        email.classList.add('invalid');
        isValid = false;
    } else {
        emailError.classList.remove('active');
        email.classList.remove('invalid');
    }

    // Validate message
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        messageError.classList.add('active');
        message.classList.add('invalid');
        isValid = false;
    } else {
        messageError.classList.remove('active');
        message.classList.remove('invalid');
    }

    // If valid, simulate form submission
    if (isValid) {
        alert('Form submitted successfully!'); 
        form.reset();
    }
});