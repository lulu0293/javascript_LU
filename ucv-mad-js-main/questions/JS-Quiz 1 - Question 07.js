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
    JS-Quiz 1 - Question 7
*/

const reward = 0.2;
const solved = true;

/*

  ¿Cuál será el valor de la variable 'result' tras ejecutar el siguiente código?

*/

function myFunction(x, y) {
    if (x > y) {
        return 1;
    }
    else if (x < y) {
        return -1;
    }
    else {
        return 0;
    }
}

var result = myFunction(3, 7);





















































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
    show("Nuestra función es básicamente un comparador. Devuelve 1 si la primera variable que le pasamos es mayor que la segunda, -1 en caso contrario, y 0 si las dos variables son iguales.");
}
else {
    show(students[Math.floor(Math.random() * students.length)]);
}