$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutExpo');
        }
    });
});


// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.hamburger') && !target.closest('.nav-links')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
