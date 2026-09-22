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
