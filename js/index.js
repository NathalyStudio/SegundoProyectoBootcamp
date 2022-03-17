window.sr = ScrollReveal();

sr.reveal('.ribbon', {
    duration: 3000,
    origin: 'left',
    reset: true,
    delay: 50
        /* distance: '-100px' */
});
/* animación con origen desde la izquierda */
sr.reveal('.tarjeta, .left-animation, .how-works-1', {
    duration: 3000,
    origin: 'left',
    distance: '-100px',
    delay: 200,
    reset: true
});
/* animación con origen desde la derecha y delay */
sr.reveal('.right-animation, .how-works-3', {
    duration: 3000,
    origin: 'right',
    distance: '-200px',
    delay: 200,
    reset: true
});
/* animación desde abajo y delay */
sr.reveal('.how-works-2, .btn-see-more', {
    duration: 3000,
    origin: 'top',
    distance: '-200px',
    delay: 200,
    reset: true
});
/* animación top sin delay */
sr.reveal('.btn-card,  #contact-us', {
    duration: 3000,
    origin: 'top',
    distance: '-200px',
    reset: true
});