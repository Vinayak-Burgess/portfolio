// QR Code Generation
document.addEventListener('DOMContentLoaded', function() {
    // Generate QR codes
    generateQRCode('qr-github', 'https://github.com/Vinayak-Burgess');
    generateQRCode('qr-linkedin', 'https://linkedin.com/in/vinayak-vinayak');
    generateQRCode('qr-google', 'https://g.dev/VINAYAKBURGESS');
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
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
    
    // Observe all sections and cards
    document.querySelectorAll('.section, .skill-item, .timeline-item, .day-card, .affiliation-card, .uplink-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Progress bar animation
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.transition = 'width 1s ease-out';
                        progressBar.style.width = width;
                    }, 100);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-item').forEach(el => {
        progressObserver.observe(el);
    });
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

// Add animate-in class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Terminal typing effect
const terminalText = document.querySelector('.terminal-text');
if (terminalText) {
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
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// Navigation highlight on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update nav header style on scroll
    const nav = document.querySelector('.nav-header');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.98)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 15, 0.95), transparent)';
    }
});

// Hover effects for cards
document.querySelectorAll('.stat-card, .tool-item, .day-card, .affiliation-card, .uplink-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

console.log('Portfolio loaded successfully!');
console.log('Made with passion by Vinayak Burgess');
