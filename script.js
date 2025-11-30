// Smooth scrolling functions
function scrollToAbout() {
    document.getElementById("about-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    closeNavbarOnMobile();
}

function scrollToProjects() {
    document.getElementById("projects-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    closeNavbarOnMobile();
}

function scrollToContact() {
    document.getElementById("contact-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    closeNavbarOnMobile();
}

// Close mobile navbar when clicking nav links
function closeNavbarOnMobile() {
    const navbar = document.getElementById('navbarNav');
    const toggleButton = document.querySelector('.navbar-toggler');
    
    if (window.innerWidth < 992 && navbar.classList.contains('show')) {
        toggleButton.click();
    }
}

// Add loading animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add staggered animation to sections
    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });

    // Add hover effect to project containers
    const projectContainers = document.querySelectorAll('.project-container');
    projectContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.01)';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.8)';
            img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            imageObserver.observe(img);
        });
    }

    // Form enhancement
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Re-enable after 3 seconds (in case of error)
            setTimeout(() => {
                submitBtn.textContent = 'Send';
                submitBtn.disabled = false;
            }, 3000);
        });
    }
});