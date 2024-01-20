
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const heroContainer = document.getElementById('hero-container');
        const parallax = document.getElementById('parallax');
        const scrolled = window.scrollY;                                                                                                                 
        const maxTranslation = heroContainer.offsetHeight * 0.5; // Adjust multiplier for intensity

        // Apply the parallax effect with a limit
        parallax.style.transform = 'translateY(' + Math.min(scrolled * 0.2, maxTranslation) + 'px)';
    });




const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.animated').forEach(item => {
    observer.observe(item);
});

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
// Add the navbar-scrolled class when scrolled down, remove it when at the top
if (window.scrollY > 0) {
    navbar.classList.add('navbar-scrolled');
} else {
    navbar.classList.remove('navbar-scrolled');
}
});

function scrollToNextSection() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }



    document.getElementById('copyrightYear').innerText = new Date().getFullYear();


});