/* Gif de portada */
let currentIndex = 0;

function changeImage() {
    const images = document.querySelectorAll('.slider img or video');
    images[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = '1';
    setTimeout(changeImage, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.style.display = 'block';
        changeImage();
    }
});

// archivo main.js
function irAPágina2() {
    window.location.href = "pagina2.html";
}
