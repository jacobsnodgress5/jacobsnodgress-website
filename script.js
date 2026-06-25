/**
 * Jacob Snodgress Website Interaction Script
 * Handles sticky nav states, mobile menu toggle, scroll spy highlights,
 * scroll entrance animations, and contact form feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Sticky Navigation & Header Adjustments ---
  const header = document.querySelector('.header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on load in case page was refreshed halfway down

  // --- Mobile Hamburger Menu ---
  const burger = document.querySelector('.burger');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  const toggleMenu = () => {
    burger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    // Prevent background scrolling when mobile menu is open
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
  };

  burger.addEventListener('click', toggleMenu);

  // Close menu when a navigation item is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Only toggle if menu is actually open (mobile layout)
      if (navLinksContainer.classList.contains('active')) {
        toggleMenu();
      }
      
      // External links (like Resume Google Doc) should just navigate normally
      if (link.getAttribute('target') === '_blank') return;

      // Clean active highlight class from all internal links
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // --- Navigation Scroll Spy ---
  const sections = document.querySelectorAll('section[id]');
  const scrollSpy = () => {
    const scrollPosition = window.scrollY + 160; // offset for nav header height + buffer

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

      if (correspondingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          correspondingLink.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', scrollSpy);
  scrollSpy(); // Initial check

  // --- Scroll-Triggered Fade In Animations ---
  const animateItems = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appeared');
          observer.unobserve(entry.target); // Unobserve to keep animate once
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px' // Trigger slightly before element is fully visible
    });

    animateItems.forEach(item => observer.observe(item));
  } else {
    // Fallback if IntersectionObserver isn't supported
    animateItems.forEach(item => item.classList.add('appeared'));
  }

  // --- Contact Form Handling (Simulated Submission) ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const nameInput = contactForm.querySelector('#form-name');
      const emailInput = contactForm.querySelector('#form-email');
      const messageInput = contactForm.querySelector('#form-message');
      
      // Basic client validation
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill out all fields before sending.');
        return;
      }

      // Visual feedback loop
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate network request duration
      setTimeout(() => {
        alert(`Thank you, ${nameInput.value}! Your message has been simulated. Jacob will respond at jacobsnodgress5@gmail.com.`);
        
        // Reset inputs
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1200);
    });
  }
});
