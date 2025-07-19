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

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.service-card, .pillar, .about-text, .about-image');
  animateElements.forEach(el => {
    observer.observe(el);
  });
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

// Button click effects
document.querySelectorAll('.service-button, .btn-primary, .btn-secondary').forEach(button => {
  button.addEventListener('click', function (e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .service-button, .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const rate = scrolled * -0.5;

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`;
  }
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

// Add active link styles
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: #1e3a8a !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(activeStyle);

// Form validation for contact form (if added later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Service card click handlers
document.querySelectorAll('.link-calendly, .service-button').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://calendly.com/taniabrevan/experiencia', '_blank');
  });
});

// Hero button click handlers
document.querySelector('.btn-primary').addEventListener('click', () => {
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

// Add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
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
    const finalValue = parseInt(price.textContent.replace('$', ''));
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
  });
}); 