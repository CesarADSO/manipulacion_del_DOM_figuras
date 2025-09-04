const figura = document.getElementById('figure');
const titulo = document.getElementById('mainTitle');
const parrafo = document.getElementById('mainParagraph');
let tituloCambiado = "";
let parrafoCambiado = "";
const lugarDondeVaElParrafo = document.querySelector('.media');
const nuevoParrafo = document.createElement('p');
let texto = "";

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

function animacion() {
    figura.classList.add('girar')
}

function moverArriba() {
    figura.style.transform = 'translateY(-30px)'
}

function moverAbajo() {
    figura.style.transform = 'translateY(30px)'
}

function moverIzquierda() {
    figura.style.transform = 'translateX(-200px)'
}

function moverDerecha() {
    figura.style.transform = 'translateX(200px)'
}

function cambiarTitulo() {
    tituloCambiado = prompt('Por favor Escriba el nuevo título que quiere que aparezca en la sección inferior de la derecha')
    titulo.textContent = tituloCambiado;
}

function cambiarParrafo() {
    parrafoCambiado = prompt('Por favor escriba el nuevo párrafo que quiere que aparezca en la sección inferior de la derecha después del título')
    parrafo.textContent = parrafoCambiado;
}

function agregarParrafo() {
    texto = prompt('Por favor ingrese un nuevo párrafo para que se agregé a la parte final de la página web');
    nuevoParrafo.textContent = texto;
    lugarDondeVaElParrafo.appendChild(nuevoParrafo);
}

function eliminarParrafo() {
    nuevoParrafo.remove()
}

document.addEventListener('DOMContentLoaded', function () {
    // BOTONES PARA CAMBIAR LOS ESTILOS DE LA FIGURA
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', moverArriba);
    document.getElementById('btnMoveDown').addEventListener('click', moverAbajo);
    document.getElementById('btnMoveLeft').addEventListener('click', moverIzquierda);
    document.getElementById('btnMoveRight').addEventListener('click', moverDerecha);
    // BOTONES PARA CAMBIAR LOS CONTENIDOS
    document.getElementById('btnChangeTitle').addEventListener('click', cambiarTitulo);
    document.getElementById('btnChangeParagraph').addEventListener('click', cambiarParrafo);
    document.getElementById('btnAddParagraph').addEventListener('click', agregarParrafo);
    document.getElementById('btnRemoveParagraph').addEventListener('click', eliminarParrafo);
}

); 