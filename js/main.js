const figura = document.getElementById('figure');


function circulo() {
    // CREAMOS LA FUNCIONALIDAD
    figura.style.borderRadius = '50%'
    figura.style.backgroundColor = '#007bff'
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