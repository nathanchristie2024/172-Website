// Main app functionality for GriefSupport AI landing page

// Navigation handler
function navigateTo(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
};

// Analytics tracking
const trackEvent = (event) => {
    console.log(`Tracking event: ${event}`);
    // Here you'd implement your analytics tracking logic
};

// Initialize dark mode based on user preference
window.onload = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) toggleDarkMode();
};

// Event listeners
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    toggleDarkMode();
    trackEvent('Toggle Dark Mode');
});

// Example navigation initialization
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        const section = event.target.getAttribute('data-section');
        navigateTo(section);
        trackEvent(`Navigate to ${section}`);
    });
});
