document.addEventListener("portfolio:rendered", function () {
  const social = PORTFOLIO_DATA.social;

  generateQRCode("qr-github", social.github);
  generateQRCode("qr-linkedin", social.linkedin);
  generateQRCode("qr-google", social.googleDev);


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section, .skill-item, .timeline-item, .day-card, .affiliation-card, .uplink-card, .cf-section, .cf-visual').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.progress-bar');
        if (progressBar) {
          const target = progressBar.dataset.targetWidth || 0;
          progressBar.style.transition = 'width 1.1s cubic-bezier(0.16, 1, 0.3, 1)';
          progressBar.style.width = target + '%';
        }
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-item').forEach(el => {
    progressObserver.observe(el);
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const terminalText = document.querySelector('.terminal-text');
  if (terminalText && !prefersReducedMotion) {
    const text = terminalText.textContent.replace('_', '');
    terminalText.innerHTML = '<span class="typed"></span><span class="cursor">_</span>';
    const typedSpan = terminalText.querySelector('.typed');
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        typedSpan.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 1000);
  }

  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    const nav = document.querySelector('.nav-header');
    if (nav) {
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.98)';
      } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 15, 0.95), transparent)';
      }
    }
  });

  document.querySelectorAll('.stat-card, .tool-item, .day-card, .affiliation-card, .uplink-card, .cf-visual').forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.2)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.boxShadow = 'none';
    });
  });

  console.log('Portfolio loaded successfully!');
  console.log('Made with passion by Vinayak Burgess!');
});

function generateQRCode(elementId, url) {
  const container = document.getElementById(elementId);
  if (container && typeof QRCode !== 'undefined') {
    new QRCode(container, {
      text: url,
      width: 130,
      height: 130,
      colorDark: '#0a0a0f',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}
 
const animateStyle = document.createElement('style');
animateStyle.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animateStyle);

//Copyright (c) 2026 Vinayak. All Rights Reserved.
