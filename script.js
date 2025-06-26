// Mobile Navigation Toggle
const navMenu   = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.querySelectorAll('.nav__link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// Countdown Timer
const countdown = () => {
  const countDate = new Date('July 26, 2025 10:00:00').getTime();
  const now       = Date.now();
  const gap       = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour   = minute * 60;
  const day    = hour * 24;

  const textDay    = Math.floor(gap / day);
  const textHour   = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  if (gap > 0) {
    countdownEl.innerHTML = `
      <div class="countdown-item"><span>${textDay}</span><p>Days</p></div>
      <div class="countdown-item"><span>${textHour}</span><p>Hours</p></div>
      <div class="countdown-item"><span>${textMinute}</span><p>Minutes</p></div>
      <div class="countdown-item"><span>${textSecond}</span><p>Seconds</p></div>
    `;
  } else {
    countdownEl.innerHTML = '<h3 style="color: var(--primary-accent);">The event has started!</h3>';
    clearInterval(countdownInterval);
  }
};

const countdownInterval = setInterval(countdown, 1000);
countdown();

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop     = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
