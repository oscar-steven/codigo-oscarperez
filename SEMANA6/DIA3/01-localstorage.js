let nombre = prompt("Ingresa tu nombre");

// console.log(nombre)

localStorage.setItem("nombreUsuario",nombre)

// setTimeout(function(){
//     //leer contenido del localstorage
//     //.getItem("nombre_algo_guardado_en_el_LS")
//     let obtenido = localStorage.getItem("nombreUsuario")
//     alert(obtenido)
// },4000)

// setTimeout(function(){
//     //eliminar algo
//     //removeItem("nombre_algo_guardado_en_el_LS")
//     localStorage.removeItem("nombreUsuario")
// },12000)
