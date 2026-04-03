document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle
    const toggleBtn = document.getElementById('lang-toggle');
    const body = document.body;

    const toggleLanguage = () => {
        if (body.classList.contains('lang-en')) {
            body.classList.remove('lang-en');
            body.classList.add('lang-es');
            toggleBtn.textContent = 'English';
            toggleBtn.setAttribute('aria-label', 'Switch to English');
        } else {
            body.classList.remove('lang-es');
            body.classList.add('lang-en');
            toggleBtn.textContent = 'Español';
            toggleBtn.setAttribute('aria-label', 'Cambiar a Español');
        }
    };

    toggleBtn.addEventListener('click', toggleLanguage);

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once animated, stop observing if you want it to stay
                // observer.unobserve(entry.target); 
            } else {
                // Remove to re-animate on scroll (optional, but keep for "dynamic" feel)
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // Handle Hero initial Entrance
    setTimeout(() => {
        document.querySelectorAll('.hero h1, .hero .subtitle, .hero-image-wrapper').forEach(el => {
            el.classList.add('active');
        });
    }, 100);
});
