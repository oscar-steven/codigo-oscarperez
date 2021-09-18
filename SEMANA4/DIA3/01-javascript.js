// console.log permite mostrar en la consolo de JS, lo que se nos antoje, es muy util para saber que esta pasando internamente dentro de JS
console.log("Hola Mundo!");

// Variables
// Palabras reservadas, JS las usa
// Los nombres de variables son sensibles a Mayus y Minus
var nombre = "Oscar";

console.log(nombre);

// Tipos de datos - texto, numeos, booleanos

//string = texto
//Comillas significa texto
//sin comillas es un numero
var nombre2 ="Steven";

var edad=28;

console.log(edad)

//Boolean - Booleano - sirve para hace pregunta
var esDeNoche = true; //true o false
console.log(esDeNoche);

// para ver el tipo de dato
console.log(typeof esDeNoche)

// para cambiar de valor a una variable, me basta con llamarla
// la variable tiene que existir antes
edad = 25

console.log(edad);

nombre = "Eduardo"

console.log(nombre);

//cambiar de tipo de datos

var anio = 2021;

anio = "dos mil veintidos";

console.log(anio);

//JS es un lenguaje que no es tipado, no pre declaramos los tipos de datos

//VALORES RAROS EN VARIABLE

var nota;

console.log(nota);

var nulo = null;

console.log(nulo)

//NAN = Not a Number

var rareza = (100/"cebollas")

console.log(rareza)