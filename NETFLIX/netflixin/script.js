function changeBackground() {
    const heroSection = document.getElementById('hero');
    const backgrounds = [
        'background1.jpg', // Add paths to your background images here
        'background2.jpg',
        // Add more images as needed
    ];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    heroSection.style.backgroundImage = `url('${randomBackground}')`;
}
document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector('.animation-container');
    animationContainer.addEventListener('animationend', function() {
        animationContainer.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector('.animation-container');
    animationContainer.addEventListener('animationend', function() {
        animationContainer.style.display = 'none';
        sessionStorage.setItem('animationShown', 'true');
    });

    const animationShown = sessionStorage.getItem('animationShown');
    if (animationShown) {
        animationContainer.style.display = 'none';
    }
});
