document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling with more robust section targeting
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Map anchor links to actual section IDs
            const sectionMap = {
                '#about': '#bep-about',
                '#resume': '#bep-resume',
                '#projects': '#bep-features',
                '#skills': '#bep-skills',
                '#contact': '#bep-contact'
            };

            const actualTargetId = sectionMap[targetId] || targetId;
            const targetSection = document.querySelector(actualTargetId);
            
            if (targetSection) {
                // Adjust for fixed header height
                const headerHeight = document.querySelector('.fixed-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mainNav = document.querySelector('.main-nav ul');
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    navToggle.addEventListener('click', function() {
        mainNavUl.classList.toggle('active');
        
        // Toggle hamburger menu animation
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNavUl.contains(event.target) || navToggle.contains(event.target);
        
        if (!isClickInsideNav && mainNavUl.classList.contains('active')) {
            mainNavUl.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});
