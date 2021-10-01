//objeto Date nos sirve para manejar fechas
let hoy = new Date();

//clases(class),plano, diseño, molde
//cuando invocamos una clase utilizamos la palabra new

//.toLocaleDateString() formato de fecha

console.log(hoy.toLocaleDateString());
console.log(typeof hoy);

//año
console.log(hoy.getFullYear());

//mes, Enero es 0 y Diciembre es 11
console.log(hoy.getMonth()+1);

//dia
console.log(hoy.getDate());

let navidad = new Date(2021,11,25)

console.log(navidad)

//gettime() me devuelve el timestamp de navidad
console.log(navidad.getTime())


let hastaNavidad = navidad - hoy
console.log(hastaNavidad)

let fecha1 = new Date('2021/12/25');
let fecha2 = new Date()

let resta = fecha2.getTime() - fecha1.getTime()
console.log(Math.round(resta/ (1000*60*60*24)))

let diasParaNAvidad = hastaNavidad / 1000 / 60 / 60 / 24

console.log(diasParaNAvidad.toFixed(0))

//Math

//Raiz cuadrada
console.log(Math.sqrt(144))

//Potencia
console.log(Math.pow(5,3))

//Aleatorio
console.log(Math.random())

function aleatorio(min, max){
    let resultado = Math.random() * (max - min) + min;
    return resultado
}

console.log(aleatorio(5,50))

for (let i = 0; i<5; i++){
    console.log(aleatorio(5,50))
}