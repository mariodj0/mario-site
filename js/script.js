$(document).ready(function() {
    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutExpo');
        }
    });

    // Set current year in footer
    var currentYear = new Date().getFullYear();
    $('#2023').text(currentYear);
});

// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close hamburger menu when clicking outside of it
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.hamburger') && !target.closest('.nav-links')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
