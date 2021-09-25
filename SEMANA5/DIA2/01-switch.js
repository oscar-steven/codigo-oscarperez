// let producto = +prompt("Ingrese el codigo del producto");

// switch (producto) {
//   //case posible valor, este puede ser un numero, booleano, string
//   case 1:
//     console.log("Chocolate");
//     //todo el codigo que quiera
//     break; //corta la ejecucion como un return

//   case 2:
//     console.log("Papitas");
//     break;

//   case 3:
//     console.log("Galletas");
//     break;
//   case 4:
//   case 5:
//     console.log("Pollo");
//     break;
//   default:
//     // Else
//     console.log("Codigo no encontrado");
// }



let horas = 40 +prompt("Ingrese sus horas semanales")

//si el trabajador trabaja mas de 35 horas tiene horas extra

//si el trabajador tiene igual o mas de 30 hasta menos de 35 horas, cumplio con su jornada

//si tiene menos de 30 se le debe mandar un aviso

switch(true){
    case horas>35:
    console.log("horas extra!")
    break;
    case horas>=30 && horas<=35:
    console.log("Cumplio su jornada");
    break;

}