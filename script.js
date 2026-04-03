document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lang-toggle');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('lang-en')) {
            // Switch to Spanish
            body.classList.remove('lang-en');
            body.classList.add('lang-es');
            toggleBtn.textContent = 'English';
            toggleBtn.setAttribute('aria-label', 'Switch to English');
        } else {
            // Switch to English
            body.classList.remove('lang-es');
            body.classList.add('lang-en');
            toggleBtn.textContent = 'Español';
            toggleBtn.setAttribute('aria-label', 'Cambiar a Español');
        }
    });
});
