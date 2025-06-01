// Function to get season based on month
function getSeasonClass() {
    const month = new Date().getMonth(); // 0-11
    
    // Winter: December (11), January (0), February (1)
    if (month === 11 || month === 0 || month === 1) {
        return 'winter';
    }
    // Spring: March (2), April (3), May (4)
    else if (month >= 2 && month <= 4) {
        return 'spring';
    }
    // Summer: June (5), July (6), August (7)
    else if (month >= 5 && month <= 7) {
        return 'summer';
    }
    // Autumn: September (8), October (9), November (10)
    else {
        return 'autumn';
    }
}

// Apply seasonal colors
function applySeasonalColors() {
    const seasonClass = getSeasonClass();
    const elements = document.querySelectorAll('h1, .links a, .contact p, .contact a');
    
    elements.forEach(element => {
        // Remove all season classes
        element.classList.remove('winter', 'spring', 'summer', 'autumn');
        // Add current season class
        element.classList.add(seasonClass);
    });
}

// Apply colors when page loads
document.addEventListener('DOMContentLoaded', applySeasonalColors); 