const figura = document.getElementById('figure');
const titulo = document.getElementById('mainTitle');
const parrafo = document.getElementById('mainParagraph');
let tituloCambiado = "";
let parrafoCambiado = "";
const lugarDondeVaElParrafo = document.querySelector('.media');
const nuevoParrafo = document.createElement('p');
let texto = "";
let color = "";
let cambiarFiguraPrompt = "";
const arregloDeImagenes = [
    '../img/imagen.jpg',
    '../img/imagen2.jpg',
    '../img/imagen3.jpg'
];
const imagen = document.getElementById('mainImage');
let index = 0;
let index2 = 0;
let alt = "";
const enlace = document.getElementById('mainLink');
let pedirEnlace = "";

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

function colorHEX() {
    color = prompt('Por favor escriba un color en formato #HEX');
    figura.style.backgroundColor = color;
}

function elegirFigura() {
    cambiarFiguraPrompt = prompt('Por favor escoja entre círculo, estrella o cuadrado para cambiar la figura');
    switch (cambiarFiguraPrompt) {
        case 'círculo':
            figura.style.borderRadius = '50%';
            figura.style.clipPath = '';
            break;
        
        case 'estrella':
            figura.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
            figura.style.borderRadius = '';
            break;

        case 'cuadrado':
            figura.style.width = '200px';
            figura.style.height = '200px';
            figura.style.borderRadius = '';
            figura.style.clipPath = '';
            break;
    }
}

function cambiarImagenSiguiente() {
    index++;
    
    if (index >=arregloDeImagenes.length) {
        index = 0;
    }

    imagen.setAttribute('src', arregloDeImagenes[index]);
}

function cambiarImagenAtras() {
    index2--;

    if (index2 < 0) {
        index2 = arregloDeImagenes.length - 1;
    }

    imagen.setAttribute('src', arregloDeImagenes[index2]);
}

function MostrarOcultarImagen() {
    imagen.classList.toggle('disabled');
}

function cambiarAtributoAlt() {
    alt = prompt('Ingrese por favor un texto alternativo para la imagen que está observando a continuación');
    imagen.setAttribute('alt', alt);
}

function cambiarEnlace() {
    pedirEnlace = prompt('Por favor escriba una url para agregársela al enlace de abajo');
    enlace.setAttribute('href', pedirEnlace);
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
    //BOTONES PARA CAMBIAR LOS ATRIBUTOS
    document.getElementById('btnHexColor').addEventListener('click', colorHEX);
    document.getElementById('btnChooseFigure').addEventListener('click', elegirFigura);
    document.getElementById('btnChangeImageNext').addEventListener('click', cambiarImagenSiguiente);
    document.getElementById('btnChangeImagePrev').addEventListener('click', cambiarImagenAtras);
    document.getElementById('btnToggleImage').addEventListener('click', MostrarOcultarImagen);
    document.getElementById('btnChangeAlt').addEventListener('click', cambiarAtributoAlt);
    document.getElementById('btnChangeLink').addEventListener('click', cambiarEnlace);
    document.getElementById('btnOpenLink').addEventListener('click', AbrirEnlace);
    document.getElementById('btnDisabledLink').addEventListener('click', desabilitarEnlace);
}

); 