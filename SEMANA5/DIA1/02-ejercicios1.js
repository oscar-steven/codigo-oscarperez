//1. Pedir al usuario sus nombres, apellidos y edad cada uno por separado, el resultado deberia ser un console.log, resumiendo los datos del usuario

// let nombres = prompt("Cual es tu nombre?")
// let apellidos = prompt("Cual es tu apellidos?")
// let edad = prompt("Cual es tu edad?")
// console.log(`Resumen de datos
// Nombres: ${nombres}
// Apellidos: ${apellidos} 
// Edad: ${edad}`)

//alert, es una venta de mensaje
// alert(`Resumen de datos
// Nombres: ${nombres}
// Apellidos: ${apellidos} 
// Edad: ${edad}`)


//a) Que datos necesito ???
//b) Como puedo tener esos datos ???
//c) Esos datos estan en la forma que necesito ???

// let base = prompt("Cual es la base del triangulo?")
// let altura = prompt("Cual es la altura del triangulo")

// let baseNumero = parseFloat(base);
// let alturaNumero = parseFloat(altura);

// let resultado = (baseNumero * alturaNumero) / 2;

// console.log(resultado);

//3. preguntar al usuario por dos numeros y mostrar el residuo de la division

let numero1 = prompt("Ingresar numero 1:")
let numero2 = prompt("Ingresar numero 2:")

let obt1 = parseFloat(numero1);
let obt2 = parseFloat(numero2);

let res3 = (numero1 % numero2);

console.log(`El residuo es ${res3}`);