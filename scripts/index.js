// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initButtonAnimations();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.nav-mobile-link');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    let isMenuOpen = false;
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.add('show');
            mobileMenu.style.display = 'block';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on mobile links
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            isMenuOpen = false;
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            isMenuOpen = false;
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            isMenuOpen = false;
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav-fixed').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for feature cards
                if (entry.target.classList.contains('features')) {
                    animateFeatureCards(entry.target);
                }
                
                // Add staggered animation for testimonials
                if (entry.target.classList.contains('testimonials')) {
                    animateTestimonialCards(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe sections with scroll animations
    const animatedSections = document.querySelectorAll('.animate-on-scroll');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
}

// Animate feature cards with stagger effect
function animateFeatureCards(section) {
    const featureCards = section.querySelectorAll('.feature-card-large, .feature-card-small');
    
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
}

// Animate testimonial cards with stagger effect
function animateTestimonialCards(section) {
    const testimonialCards = section.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, index * 150);
    });
}

// Button Animations and Interactions
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
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
        
        // Add hover sound effect (optional)
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Parallax Effect for Hero Background Elements
function initParallaxEffect() {
    const heroElements = document.querySelectorAll('.hero-bg-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        heroElements.forEach((element, index) => {
            const speed = (index + 1) * 0.2;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', function() {
    initParallaxEffect();
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-fixed');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(241, 237, 230, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(241, 237, 230, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
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
    
    .btn:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(203, 173, 141, 0.3);
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Scroll-based animations can be added here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        if (mobileMenu && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});

// Form handling (if you add contact forms later)
function handleFormSubmission(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form submission logic here
        console.log('Form submitted');
        
        // Show success message
        showNotification('Thank you! We\'ll be in touch soon.', 'success');
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Startup Research Agent landing page loaded successfully!');
    
    // Add any additional initialization here
    
    // Example: Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Feature coming soon! Stay tuned.', 'info');
        });
    });
});
