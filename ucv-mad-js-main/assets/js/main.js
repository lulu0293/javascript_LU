
/* VARIABLES Y CONSTANTES */

const diaNoche = [
    "M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278",
    "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
];

const dice = [
    'M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3',
    'M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3',
    'M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3',
    'M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3',
    'M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3',
    'M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3'
];

var tema = 'claro';

/*****************************/





/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(updateClock(), 10000);

function updateClock() {

}

function stopClock() {
    clearInterval(intervalId);
}
/*****************************************/



/* Función para cambiar el color del elemento SVG que la invoca */
function cambiarColorIcono(elem) {
    const r = randInt(0, 255);
    const g = randInt(0, 255);
    const b = randInt(0, 255);
    elem.style.fill = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

/* Función para cambiar de color el icono del dado cuando el ratón pasa por encima */
function elRatonEstaEncima(elem) {
    elem.style.fill = '#68c33f';
}

/* Función para volver a cambiar de color el icono del dado cuando el ratón sale */
function elRatonHaSalido(elem) {
    elem.style.fill = 'white';
}

/* Función para generar una tirada aleatoria entre 0 y 5 y cambiar el icono del dado a su forma correspondiente */
function lanzarDados(elem) {
    elem.children[0].setAttribute('d', dice[numeroAleatorio(0, 5)])
}

/* Función para alternar entre tema claro y oscuro */
function cambiarTema(elem) {

    // Podemos ver las diferentes funciones que nos ofrece JavaScript para seleccionar elementos del documento en: https://www.w3schools.com/js/js_htmldom_elements.asp
    // Y los diferentes eventos de ratón que podemos interceptar en: https://www.w3schools.com/jsref/obj_mouseevent.asp

    // En estos casos tengo que recuperar el primer elemento del array con el selector [0] porque getElementsByTagName() devuelve siempre arrays
    const cabecera = document.getElementsByTagName('header')[0];
    const pieDePagina = document.getElementsByTagName('footer')[0];
    const principal = document.getElementsByTagName('main')[0];

    // En este caso no porque querySelector() sólo devuelve la primera ocurrencia. querySelectorAll() devolvería todas las ocurrencias, esta vez sí, en un array
    const titulo = document.querySelector("header h1");


    if (tema == 'claro') {
        // Cambio color de fondo y color de texto de la cabecera
        cabecera.style.backgroundColor = "rgb(43, 46, 54)";
        cabecera.style.color = "white";

        // Cambio color de fondo y color de texto del pie de página
        pieDePagina.style.backgroundColor = "rgb(43, 46, 54)";
        pieDePagina.style.color = "white";

        // Cambio color de texto del título de la página
        titulo.style.color = "white";

        // Cambio de la imagen de fondo del contenedor "main"
        principal.style.backgroundImage = "url('../assets/img/moonlit-lake.jpg')";

        // Cambio icono luna por icono sol
        elem.children[0].setAttribute('d', diaNoche[1]);
        elem.children[0].style.fill = "#fbb301";

        // Cambio el valor de mi variable auxiliar "tema"  para alternar entre tema claro y oscuro
        tema = 'oscuro';
    }
    else {
        // Cambio color de fondo y color de texto de la cabecera
        cabecera.style.backgroundColor = "white";
        cabecera.style.color = "black";

        // Cambio color de fondo y color de texto del pie de página
        pieDePagina.style.backgroundColor = "white";
        pieDePagina.style.color = "black";

        // Cambio color de texto del título de la página
        titulo.style.color = "black";

        // Cambio de la imagen de fondo del contenedor "main"
        principal.style.backgroundImage = "url('../assets/img/park-sunset.jpg')";

        // Cambio icono sol por icono luna
        elem.children[0].setAttribute('d', diaNoche[0]);
        elem.children[0].style.fill = "#b6cdff";

        // Cambio el valor de mi variable auxiliar "tema"  para alternar entre tema claro y oscuro
        tema = 'claro';
    }
}

/* Función para generar números ENTEROS aleatorios entre un mínimo y un máximo */
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function () {
    //console.log("This is my JavaScript project!");
}