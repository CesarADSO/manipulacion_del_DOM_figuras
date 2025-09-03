const figura = document.getElementById('figure');


function circulo() {
    // CREAMOS LA FUNCIONALIDAD
    figura.style.borderRadius = '50%'
    figura.style.backgroundColor = '#007bff'
}

function estrella() {
    //CREAMOS LA FUNCIONALIDAD
    figura.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
}

function gif() {
    figura.style.backgroundImage = 'url("../img/Happy Skeleton GIF.gif")'
    figura.style.backgroundSize = 'cover'
}





document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', moverArriba);
    document.getElementById('btnMoveDown').addEventListener('click', moverAbajo);
    document.getElementById('btnMoveLeft').addEventListener('click', moverIzquierda);
    document.getElementById('btnMoveRight').addEventListener('click', moverDerecha);
}

); 