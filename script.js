// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded'); // Add the 'loaded' class to the body to trigger the transition
    document.body.style.overflowY = 'auto'; // Enable vertical scrolling after the page is loaded
});

