let nombre = "Oscar"
let apellido = "Perez"

// console.log(nombre + " " + apellido)

//TEMPLATE STRING / TEMPLATE LITERAL
//Backsticks `` ALT + 96

let texto = `Hola soy ${nombre} ${apellido} y soy de Lima`;
console.log(texto);

//PROMPT, capturar datos, del usuario
let cantidadMascotas = prompt(`Hola ${nombre} ${apellido} cuantas mascotas tienes?`)

console.log(`Mascotas : ${cantidadMascotas}`)

//Todo lo ingresado de un prompt es STRING

//let convertido = +cantidadMascotas;
//parseInt, parse = interpretar, convierte a un entero
//int - solo enteros
//float - acepta decimales
//let convertido = parseInt(cantidadMascotas);
let convertido = parseFloat(cantidadMascotas);

console.log(typeof convertido);
