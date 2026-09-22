/* MealTrain Direct - Shared Main JavaScript */

function toggleMenu() {
    const m = document.getElementById('mobileMenu');
    if (!m) return;
    const open = m.classList.toggle('hidden') === false;
    const icon = document.getElementById('menuIcon');
    if (icon) icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const dark = document.documentElement.classList.contains('dark');
    localStorage.setItem('mtd-theme', dark ? 'dark' : 'light');
    
    const themeIcon = document.getElementById('themeIcon'); 
    if (themeIcon) themeIcon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    
    const navThemeIcon = document.getElementById('navThemeIcon'); 
    if (navThemeIcon) navThemeIcon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function toggleRTL() {
    const html = document.documentElement;
    const rtl = html.getAttribute('dir') !== 'rtl';
    html.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    localStorage.setItem('mtd-dir', rtl ? 'rtl' : 'ltr');
}

function createTrain(e) {
    if (e) e.preventDefault();
    alert('Meal Train created successfully! Opening the Coordinator Dashboard.');
    window.location.href = 'dashboard.html';
}

function loginDemo(e) {
    if (e) e.preventDefault();
    alert('Demo login successful! Opening the Coordinator Dashboard.');
    window.location.href = 'dashboard.html';
}

function registerDemo(e) {
    if (e) e.preventDefault();
    alert('Demo account created successfully! Opening the Coordinator Dashboard.');
    window.location.href = 'dashboard.html';
}

function socialDemo(provider) {
    alert(provider + ' sign-in is a demo. Opening the Coordinator Dashboard.');
    window.location.href = 'dashboard.html';
}

function joinTrain(name) {
    alert('Opening sign-up calendar for ' + name + '.');
}

function filterTrains() {
    const searchInput = document.getElementById('searchTrains');
    const typeSelect = document.getElementById('typeFilter');
    if (!searchInput || !typeSelect) return;

    const q = (searchInput.value || '').toLowerCase();
    const type = typeSelect.value.toLowerCase();
    let shown = 0;

    document.querySelectorAll('.train-card').forEach(card => {
        const data = (card.dataset.search || '').toLowerCase();
        const okQ = !q || data.includes(q);
        const okT = type === 'all support types' || data.includes(type.replace('medical recovery', 'medical recovery').replace('new parents', 'new parents').replace('bereavement', 'bereavement'));
        card.style.display = okQ && okT ? 'block' : 'none';
        if (okQ && okT) shown++;
    });

    const noResults = document.getElementById('noResults');
    if (noResults) {
        noResults.classList.toggle('hidden', shown !== 0);
    }
}

// Initialize theme and text direction settings on page load
(function initSettings() {
    const theme = localStorage.getItem('mtd-theme');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        const i = document.getElementById('themeIcon');
        if (i) i.className = 'fa-solid fa-sun';
        const ni = document.getElementById('navThemeIcon');
        if (ni) ni.className = 'fa-solid fa-sun';
    }
    
    const dir = localStorage.getItem('mtd-dir');
    if (dir) {
        document.documentElement.setAttribute('dir', dir);
    }
})();

// Warm Hearth Button Tactile Ripple Feedback
document.addEventListener('pointerdown', function (e) {
    const btn = e.target.closest('button, .nav-signup, .nav-btn, .contact-submit, .reminder-main-btn, .social-btn, a[class*="rounded-xl"][class*="bg-"], a[class*="rounded-2xl"][class*="bg-"], a[class*="rounded-xl"][class*="border"], button[class*="rounded-"]');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'hearth-ripple';
    
    const size = Math.max(rect.width, rect.height) * 1.5;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    btn.appendChild(ripple);
    setTimeout(function () {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 580);
});

// Dynamic Warm Hearth Spotlight Tracking for Cards
document.addEventListener('pointermove', function (e) {
    const card = e.target.closest('.card-hover, .train-card, .dashboard-stat-card, .dashboard-panel, .contact-info-card, .contact-form-card, div[class*="rounded-2xl"][class*="border"]');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--card-x', x + 'px');
    card.style.setProperty('--card-y', y + 'px');
});

// Warm Hearth Scroll-To-Top Button Controller (Single Instance)
(function initScrollToTop() {
    function setupBtn() {
        let btn = document.getElementById('scrollTopBtn') || document.getElementById('scrollToTopBtn');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'scrollTopBtn';
            btn.className = 'scroll-top-btn';
            btn.type = 'button';
            btn.setAttribute('aria-label', 'Scroll to top');
            btn.setAttribute('title', 'Scroll to top');
            btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            document.body.appendChild(btn);
        } else {
            btn.classList.add('scroll-top-btn');
        }

        // Remove any extra duplicate scroll top buttons if they exist
        const allBtns = document.querySelectorAll('#scrollTopBtn, #scrollToTopBtn, .scroll-top-btn');
        allBtns.forEach((b, idx) => {
            if (idx > 0) b.remove();
        });

        function checkScroll() {
            const dashMain = document.querySelector('.dashboard-main');
            const scrollPos = window.scrollY || document.documentElement.scrollTop || (dashMain ? dashMain.scrollTop : 0);
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
            btn.style.pointerEvents = 'auto';
        }

        window.addEventListener('scroll', checkScroll, { passive: true });
        
        const dashMain = document.querySelector('.dashboard-main');
        if (dashMain) {
            dashMain.addEventListener('scroll', checkScroll, { passive: true });
        }

        btn.onclick = function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const dm = document.querySelector('.dashboard-main');
            if (dm) dm.scrollTo({ top: 0, behavior: 'smooth' });
        };

        checkScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupBtn);
    } else {
        setupBtn();
    }
})();



