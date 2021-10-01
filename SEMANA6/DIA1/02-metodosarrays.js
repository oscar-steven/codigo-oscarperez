let frutas = ["fresa", "mango", "piña", "lucuma"];

// for(let i=0; i<frutas.length;i++){
//     console.log(frutas[i])
// }

//recuerden los arreglos tambien son objetos
//forEach(function(){})
frutas.forEach(function (fru) {
  console.log(fru);
});

//foreach por cada elemento que encuentre vas a ejecutar una funcion y cada vez que se ejecute esa funcion vas a recibir c/iem en orden y este item lo podemos utilizar dentro de la funcion

let energia = [89, 90, 86, 85, 100];

//energia se va a dividir en 2
//como podria tener un nuevo arreglo con los valores que representen la mitad de la energia

//crea un nuevo array pero con informacion transformada
let energiacima = energia.map(function (energy) {
  return energy / 2;
});

console.log(energiacima);

//Filter
let conductores = [
  {
    nombre: "Jose",
    vacunado: true,
  },
  {
    nombre: "Glenda",
    vacunado: true,
  },
  {
    nombre: "Osmar",
    vacunado: false,
  },
];


let puedePasar = conductores.filter(function(driver){
    return driver.vacunado == true;
})

console.log(puedePasar)

let dniDB = [
    "42857584","48074339","08074393"
]

let encontrado=dniDB.find(function(doc){
    if (doc.includes("8")){
        return doc
    }
})
console.log(encontrado);



