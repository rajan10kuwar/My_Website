/* Initialize particles.js with enhanced shapes */
particlesJS('particles-js', {
    particles: {
        number: { value: 300, density: { enable: true, value_area: 800 } },
        color: { value: ['#00eaff', '#ff8c00'] }, // Neon blue and orange
        shape: { 
            type: ['circle', 'triangle', 'star', 'edge', 'polygon', 'square'], // Added edge and polygon
            polygon: { nb_sides: 6 } // Hexagons for polygon
        },
        opacity: { value: 0.5, random: true },
        size: { value: 5, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 120, color: '#00eaff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 10, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

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
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

/* Contact form validation */
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
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