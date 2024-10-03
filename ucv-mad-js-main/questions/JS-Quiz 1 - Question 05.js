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
    JS-Quiz 1 - Question 5
*/

const reward = 0.15;
const solved = true;

/*

  ¿Cuál será el valor de la variable 'result' tras ejecutar el siguiente código?

*/

function myFunction(x) {
    if (x % 2 == 0) {
        return x;
    }
    else {
        return x - 1;
    }
}

var result = myFunction(7);





















































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
    show("Con el operador resto (%), al dividir entre 2, estamos comprobando si el número en cuestión es par. En caso afirmativo, la función devuelve el número intacto. En caso contrario, se le resta una unidad al número antes de devolverlo. Nuestra función en este caso, devuelve siempre un número par, diezmando 1 unidad los números impares que se le pasen.");
}
else {
    show(students[Math.floor(Math.random() * students.length)]);
}