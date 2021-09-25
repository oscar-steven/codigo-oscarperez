/**
 *
 * Ejercicio
 *
 * Tenemos 02 tipos de hamburguesa, una simple y una doble.
 *
 * Cree un algoritmo que permita pedir X hamburguesas simples o dobles, y despues dar el total a pgar segun el pedido
 *
 * La hamburguesa simples cuesta 5 soles.
 * La hamburguesa doble cuesta 9 soles.
 *
 */

/**
 *
 * a) que datos necesito?
 * cantidad de hamburguesa simple
 * cantidad de haburguesa doble
 * precio de las simples
 * precio de las dobles
 * variable que me diga que ya voy a finalizar el pedido
 * b) de donde obtenos esos datos?
 * precio en variables porque ya lo tenemos
 * cantidad de dobles y simples, preguntamos al usuario
 * si finaliza tambien preguntamos al usuario
 *
 * c) esos datos estan en la forma que necesito
 *
 *
 */

let precioSimple = 5;
let precioDoble = 9;

let cantidadSimple = 0;
let cantidadDoble = 0;

//Finalizar indicara si termino el pedido
//si es true, significa que ya no agregare mas hamburguesas
let finalizar = false;

do {
  //codigo a ejecutar
  let eleccion = +prompt(
    "Ingrese 1. para una Simple, 2. para una doble y 3. para finalizar el pedido"
  );

  switch (eleccion) {
    case 1:
      console.log("Una Simple !!");
      cantidadSimple++;
      break;
    case 2:
      console.log("Una doble !!!");
      cantidadDoble++;
      break;

    case 3:
      finalizar = true;
      break;
    default:
      console.log("Opcion Incorrecta");
  }
} while (finalizar == false);


