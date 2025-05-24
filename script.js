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
const navBar = document.querySelector('header'); // Adjust selector if nav bar is not <header>
const navBarHeight = navBar.offsetHeight; // Dynamically get nav bar height
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Calculate the adjusted scroll position
        const targetPosition = targetElement.offsetTop - navBarHeight;
        
        // Scroll to the adjusted position with smooth behavior
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

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

// Initialize Typed.js for dynamic role text
var typed = new Typed('.typed', {
    strings: ['Web Developer', 'Computer Science Student', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Array of greetings
const greetings = ['Hi there, Welcome!', 'Hola, Bienvenido!', 'Bonjour, Bienvenue!'];

// Get the greeting element
const greetingElement = document.getElementById('greeting');

// Track current greeting index
let currentGreetingIndex = 0;

// Function to update greeting with sliding animation
function updateGreeting() {
    // Slide out current greeting
    greetingElement.style.animation = 'slideOutLeft 0.5s ease-in-out forwards';
    
    // After slide out, change text and slide in new greeting
    setTimeout(() => {
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[currentGreetingIndex];
        greetingElement.style.animation = 'slideInRight 0.5s ease-in-out forwards';
    }, 500); // Wait for slide-out to finish (0.5s)
}

// Initialize with first greeting (slide in immediately)
greetingElement.textContent = greetings[0];
greetingElement.style.animation = 'slideInRight 0.5s ease-in-out forwards';

// Cycle greetings every 3 seconds
setInterval(updateGreeting, 3000);

// Custom star-shaped mouse pointer with orbiting particles
const mainStar = document.getElementById('main-star');
const particles = document.querySelectorAll('.star-particle');
let lastX = 0;
let lastY = 0;
let speed = 0;

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - 15; // Offset to center (half of 30px width/height)
    const y = e.clientY - 15;

    // Calculate speed
    speed = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
    lastX = x;
    lastY = y;

    // Update main star position
    mainStar.style.left = x + 'px';
    mainStar.style.top = y + 'px';

    // Update orbiting particles
    particles.forEach((particle, index) => {
        // Calculate offset for orbiting effect
        const angle = (index * 120 + Date.now() / 10) % 360; // Unique angle per particle
        const radius = 20; // Orbit radius
        const offsetX = radius * Math.cos(angle * Math.PI / 180);
        const offsetY = radius * Math.sin(angle * Math.PI / 180);
        particle.style.left = (x + offsetX) + 'px';
        particle.style.top = (y + offsetY) + 'px';

        // Adjust particle size based on speed
        const particleSize = 8 + Math.min(speed / 20, 4); // Max size 12px
        particle.style.width = particleSize + 'px';
        particle.style.height = particleSize + 'px';
    });

    // Adjust aura based on speed
    if (speed > 15) {
        mainStar.style.boxShadow = '0 0 25px #ff8c00, 0 0 45px rgba(255, 140, 0, 0.7)';
    } else {
        mainStar.style.boxShadow = '0 0 20px #00eaff, 0 0 40px rgba(0, 234, 255, 0.6)';
    }
});

// Hover effect on links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        mainStar.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
        mainStar.classList.remove('hover');
    });
});