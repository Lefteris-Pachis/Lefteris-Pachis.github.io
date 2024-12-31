document.addEventListener('DOMContentLoaded', () => {
    // Update footer year
    // const footerYearElement = document.getElementById('current-year');
    // if (footerYearElement) {
    //     footerYearElement.textContent = new Date().getFullYear();
    // }

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to set theme
    const setTheme = (theme) => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
    };

    // Function to update toggle button icon
    const updateToggleIcon = (theme) => {
        const sunIcon = themeToggleBtn.querySelector('.fa-sun');
        const moonIcon = themeToggleBtn.querySelector('.fa-moon');
        
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    };

    // Initial theme setup
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    setTheme(initialTheme);

    // Theme toggle button event listener
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!savedTheme) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
});
