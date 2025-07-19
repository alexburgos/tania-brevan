// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Navbar background change and parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  e
  const navbar = document.querySelector('.navbar');
  if (scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
  n
  const hero = document.querySelector('.hero');
  if (hero) {
    const rate = scrollY * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('about-image')) {
        entry.target.classList.add('slide-in-right');
      } else {
        entry.target.classList.add('fade-in-up');
      }
    }
  });
}, observerOptions);

// Add some interactive elements and observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.about-image');
  animateElements.forEach(el => {
    observer.observe(el);
  });

  // Add typing effect to hero title
  const heroTitle = document.querySelector('.hero-text h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
  }

  // Add counter animation to prices
  const prices = document.querySelectorAll('.price');
  prices.forEach(price => {
    const priceText = price.textContent.replace('$', '');
    const finalValue = parseInt(priceText);

    // Only animate if we have a valid number
    if (!isNaN(finalValue) && finalValue > 0) {
      let currentValue = 0;
      const increment = finalValue / 50;

      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(counter);
        }
        price.textContent = `$${Math.floor(currentValue)}`;
      }, 30);
    }
  });
});

// Calendly integration links
document.querySelector('.btn-primary').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  window.open('https://calendly.com/taniabrevan/sesion-exploratoria-clon', '_blank');
});

document.querySelectorAll('.service-button').forEach((button, index) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Get all service buttons to determine which is the last one
    const allServiceButtons = document.querySelectorAll('.service-button');
    const isLastButton = index === allServiceButtons.length - 1;

    if (isLastButton) {
      // Different link for the last service button (Cierre de Ciclo Energético)
      window.open('https://calendly.com/taniabrevan/cierre-de-ciclo', '_blank');
    } else {
      // Default link for all other service buttons
      window.open('https://calendly.com/taniabrevan/experiencia', '_blank');
    }
  });
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});