//objeto Date nos sirve para manejar fechas
let hoy = new Date();

//clases(class),plano, diseño, molde
//cuando invocamos una clase utilizamos la palabra new

console.log(hoy);
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