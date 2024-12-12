// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll <= 0) {
    navbar.style.boxShadow = 'none';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    navbar.style.backdropFilter = 'blur(10px) saturate(180%)';
  }
  
  lastScroll = currentScroll;
});

// Service cards animation
const observerOptions = {
  threshold: 0.2,
  rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
  observer.observe(card);
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Here you would typically handle the form submission
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

// Dynamic copyright year
document.querySelector('.copyright-year').textContent = new Date().getFullYear();