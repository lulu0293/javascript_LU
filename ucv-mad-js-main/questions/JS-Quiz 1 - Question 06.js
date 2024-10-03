function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);
}
function show(input) {
    console.log(input);
}

/*
    JS-Quiz 1 - Question 6
*/

const reward = 0.15;
const solved = true;

/*

  ¿Cuál será el valor de la variable 'result' tras ejecutar el siguiente código?

*/

function myFunction(x) {
    return x > 10;
}

var result = myFunction(10);





















































var students = [
    "José María Carreño Meléndez",
    "Laura Camila Chaves Urrego",
    "José Daniel Expósito Morata",
    "Alicia Fernández Ballester",
    "Almudena Flores Rodríguez",
    "Elena García Arenes",
    "Matilde María Godos García-Felipeneri",
    "Lucía de las Mercedes González Royo",
    "María Elena Guijarro Blanco",
    "Delfina Janer Pujol",
    "Joaquim Miquel López Tomás (Ximo)",
    "Alonso Martín Toledano Medina",
    "Pilar Martínez Lozano",
    "Pablo Mateo Navarro",
    "Raquel Esther Menzel Gutiérrez",
    "Carmen Carlota Miquel Soucase",
    "Álvaro Molins Castillo",
    "Alba Morcillo Peinado",
    "Daniel Parra Riera",
    "Laura Pérez Martínez",
    "Carlos Pérez Torralba",
    "Paula Picos Catalá",
    "Fernando Pruñonosa Orero",
    "Lucía Santamaría Molina",
    "Javier Sierra Ferrer",
    "José Torres Ramírez"]


if (solved) {
    show("La variable 'result' vale: " + result);
    show("Al estar usando un operador de comparación, como es > (mayor que), el resultado de evaluar la expresión será siempre 'true' o 'false' (un valor booleano). Será 'true' cuando el número que le pasamos a la función sea mayor que 10 y 'false' en caso contrario.");
}
else {
    show(students[Math.floor(Math.random() * students.length)]);
}