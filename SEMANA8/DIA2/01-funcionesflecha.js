// function saludar(nombre) {
//   return `Hola soy ${nombre}`;
// }

const despedida = function (mensaje) {
  return `Bye ${mensaje}`;
};

//Funcion Flecha
const saludar = (nombre,apellido) => {
    return `Hola soy ${nombre} ${apellido}`
}

//si es algo sencillo directamente puede indicar en la misma linea
//lo que se va a retornar

console.log(saludar("Daniel","Perez"));

console.log(despedida("cuidate"));

let mouse = {
    nombre:"Miguelito",
    roer: () => {
        console.log(`${this.nombre} roe queso`)
    },

}

mouse.roer()