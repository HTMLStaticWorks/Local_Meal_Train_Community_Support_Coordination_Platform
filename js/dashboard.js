/* MealTrain Direct - Dashboard JavaScript */

function dashboardScroll(id, btn) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.querySelectorAll('.side-nav-btn').forEach(x => x.classList.remove('active'));
    if (btn) {
        btn.classList.add('active');
    }
}

function toggleDashboardTheme() {
    if (typeof toggleTheme === 'function') {
        toggleTheme();
    }
}

function toggleDashboardRTL() {
    if (typeof toggleRTL === 'function') {
        toggleRTL();
    }
}

function dashboardLogout() {
    alert('You have been logged out of the coordinator demo.');
    window.location.href = '../index.html';
}

function sendReminder(person) {
    alert('Reminder sent to ' + person + '.');
}

/* Dynamically adjust content padding on mobile/tablet to account for fixed navbar height */
function adjustDashboardPadding() {
    const sidebar = document.querySelector('.dashboard-sidebar');
    const main = document.querySelector('.dashboard-main');
    if (!sidebar || !main) return;

    if (window.innerWidth < 1024) {
        const height = sidebar.offsetHeight;
        if (height > 0) {
            const topOffset = (height + 14) + 'px';
            document.documentElement.style.setProperty('--dashboard-nav-height', topOffset);
            main.style.paddingTop = topOffset;
        }
    } else {
        document.documentElement.style.removeProperty('--dashboard-nav-height');
        main.style.paddingTop = '';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', adjustDashboardPadding);
} else {
    adjustDashboardPadding();
}
window.addEventListener('load', adjustDashboardPadding);
window.addEventListener('resize', adjustDashboardPadding);
window.addEventListener('orientationchange', adjustDashboardPadding);

