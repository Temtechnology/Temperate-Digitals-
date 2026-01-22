// Image sources array
const images = [
    'images/HOME.jpeg',
    'images/about-us.jpeg',
    'images/contact-us.jpeg',
    'images/our services.jpeg',
    'images/our-project.jpeg',
    'images/why-us.jpeg'
];

let currentIndex = 0;

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox-img').src = images[currentIndex];
    document.getElementById('lightbox').classList.add('active');
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Change image (prev/next)
function changeImage(direction) {
    currentIndex += direction;
    
    // Loop around
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    
    document.getElementById('lightbox-img').src = images[currentIndex];
}

// Keyboard support
document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});