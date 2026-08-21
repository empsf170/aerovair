/**
 * AEROVAIR - Premium Airline Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header Logic ---
    const header = document.querySelector('.site-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-wrapper');
    const body = document.body;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });

        const closeBtns = document.querySelectorAll('.mobile-menu-close');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }
    
    // --- Scroll Animations (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Scroll to Top Logic ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('is-visible');
            } else {
                scrollToTopBtn.classList.remove('is-visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // --- Booking Widget Tabs (Index Page) ---
    const bookingTabs = document.querySelectorAll('.booking-tabs .tab-btn');
    if (bookingTabs.length > 0) {
        bookingTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                bookingTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // --- Offers Filter Tabs (Offers Page) ---
    const offerTabs = document.querySelectorAll('.bg-surface.rounded-pill button');
    const offerCards = document.querySelectorAll('.offer-card');
    if (offerTabs.length > 0) {
        offerTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                offerTabs.forEach(t => {
                    t.classList.remove('btn-primary', 'text-white');
                    t.classList.add('btn-link', 'text-muted');
                });
                this.classList.remove('btn-link', 'text-muted');
                this.classList.add('btn-primary', 'text-white');
                
                const filter = this.textContent.trim();
                offerCards.forEach(card => {
                    if (filter === 'All Offers' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});