/* Esto es para hacer el slideshow */
/* La variable slider es para definir todo el espacio donde está el contenido total de las sliders*/
let slider = document.querySelector(".slider-contenedor")
    /* Aquí, se define el contenido de cada slider, en nuestro caso, cada sección */
let sliderIndividual = document.querySelectorAll(".contenido-slider")
    /* Esto es un contador para hacer el ciclo con un condicional */
let contador = 1;
/* Define el ancho de cada slider */
let width = sliderIndividual[0].clientWidth;
/* Duración entre cada animación */
let intervalo = 3500;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function() {
    slides();
}, intervalo);


/* esta es la función de la animación para que pase de forma automática */
function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, intervalo)
    }
}