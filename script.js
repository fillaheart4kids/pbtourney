// Mobile Navigation Toggle
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Countdown Timer
const countdown = () => {
    // Set the date for the countdown
    const countDate = new Date('July 29, 2025 10:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate remaining time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    const countdownElement = document.getElementById('countdown');

    // Update the HTML
    if (countdownElement) {
        if (gap > 0) {
            countdownElement.innerHTML = `
                <div class="countdown-item"><span>${textDay}</span><p>Days</p></div>
                <div class="countdown-item"><span>${textHour}</span><p>Hours</p></div>
                <div class="countdown-item"><span>${textMinute}</span><p>Minutes</p></div>
                <div class="countdown-item"><span>${textSecond}</span><p>Seconds</p></div>
            `;
        } else {
            // What to display when the countdown is over
            countdownElement.innerHTML = '<h3 style="color: var(--primary-accent);">The event has started!</h3>';
            clearInterval(countdownInterval); // Stop the timer
        }
    }
};

// Initialize countdown and update every second
const countdownInterval = setInterval(countdown, 1000);
// Run once immediately on load
countdown();

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; // Distance from bottom of viewport to trigger animation

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        } else {
            // Optional: remove class to re-animate on scroll up.
            // el.classList.remove('active'); 
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Check for reveal elements on initial page load
revealOnScroll();