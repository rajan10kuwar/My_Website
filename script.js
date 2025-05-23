/* Initialize particles.js with enhanced shapes */
particlesJS('particles-js', {
    particles: {
        number: { value: 300, density: { enable: true, value_area: 800 } },
        color: { value: ['#00eaff', '#ff8c00'] }, // Neon blue and orange
        shape: { 
            type: ['circle', 'triangle', 'star', 'edge', 'polygon', 'square'],
            polygon: { nb_sides: 6 }
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

/* Smooth scrolling, description display, and active indicator for nav links */
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to section

        // Remove active class from all nav items
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
        // Add active class to the clicked nav item's parent li
        link.parentElement.classList.add('active');

        // Hide all description boxes
        document.querySelectorAll('.nav-description').forEach(desc => desc.style.display = 'none');
        // Show the corresponding description box
        const descBox = link.nextElementSibling;
        if (descBox && descBox.classList.contains('nav-description')) {
            descBox.style.display = 'block';
            setTimeout(() => {
                descBox.style.display = 'none';
            }, 3000); // Hide after 3 seconds
        }
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

// Scroll to bottom when top arrow is clicked
document.querySelector('.top-arrow').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Scroll to top when bottom arrow is clicked
document.querySelector('.bottom-arrow').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set "Home" as active on page load
document.querySelector('.nav-menu li:first-child').classList.add('active');


const wheelContainer = document.querySelector('.wheel-container');
const wheelWrapper = document.querySelector('.wheel-wrapper');
let rotation = 0;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const delta = scrollY - lastScrollY;
  
  // Update rotation based on scroll direction
  rotation += delta > 0 ? 20 : -20;
  wheelWrapper.style.transform = `rotate(${rotation}deg)`;

  // Update vertical position
  const maxTop = window.innerHeight - 40; 
  const currentTop = parseFloat(wheelContainer.style.top) || window.innerHeight / 2;
  const newTop = currentTop + delta;
  const clampedTop = Math.max(0, Math.min(newTop, maxTop));
  wheelContainer.style.top = `${clampedTop}px`;

  lastScrollY = scrollY;
});