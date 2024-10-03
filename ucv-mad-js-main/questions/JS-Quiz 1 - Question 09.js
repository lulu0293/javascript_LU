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
    JS-Quiz 1 - Question 9
*/

const reward = 0.25;
const solved = true;

/*

  ¿Qué valor le darías a la variable 'x' para que 'result' acabe valiendo "Bingo!"?
*/
var x = 5; // Valor a cambiar
var y = 3;
var z = 5;
var result;

var product = x * y;

if (product % z != 0) {
    if (x > 5) {
        result = -1;
    }
    else {
        result = 0;
    }
}
else {
    if (x > 5) {
        result = -1;
    }
    else {
        result = "Bingo!"
    }
}


























































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
    show("El condicional (if) principal, comprueba si el producto de 'x' e 'y' es divisible entre 'z', en caso negativo, si 'x' es mayor que 5 asignará el valor -1 al resultado, y el valor 0 si es menor o igual.\n\nEn caso de que SÍ sea divisible, se asigna el valor -1 en caso de que 'x' sea mayor que 5, y 'Bingo!' si es menor o igual. La respuesta, pues, es que 'x' debe valer 5, de esa forma 5 * 3 = 15, que es divisible entre 5, y además 'x' es igual a 5, entrando en el último de los casos y obteniendo el resultado esperado: Bingo!");
}
else {
    show(students[Math.floor(Math.random() * students.length)]);
}