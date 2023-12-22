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

/* Botón de iniciar sesión */
document.addEventListener('DOMContentLoaded', function () {
    var iniciarSesionBtn = document.querySelector('.iniciarSesion');
   
    iniciarSesionBtn.addEventListener('click', function () {
       // Aquí puede agregar la lógica para iniciar sesión
       alert('Botón de inicio de sesión');
    });
   });
   