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
    JS-Quiz 1 - Question 10
*/

const reward = 0.25;
const solved = true;

/*

  ¿Cuál será el valor de la variable 'result' tras ejecutar el siguiente código?

*/

function myFunction(x, y) {
    if (x >= 10) {
        if (x % 2 == 0) {
            return 0;
        }
        else {
            return 1;
        }
    }
    else {
        return y;
    }
}

var result = myFunction(8);
























































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
    show("El condicional (if) principal comprueba si 'x' es mayor o igual a 10, en caso afirmativo, devuelve 0 si 'x' es par y -1 si es impar. En el caso de que 'x' sea menor que 10 (else), la función devuelve el valor de 'y'. Como 'x' vale 8 (que es menor que 10), trataremos de devolver 'y', PERO, como al invocar nuestra función sólo hemos pasado un valor, que se le asignará a 'x', la variable 'y' queda por definir, por tanto, el resultado será: undefined.");
}
else {
    show(students[Math.floor(Math.random() * students.length)]);
}