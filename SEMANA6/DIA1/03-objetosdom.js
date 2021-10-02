// window.console.log("Hola");

//Info del navegador
console.log(`Info Navegador: ${window.navigator.userAgent}`);

//Cúal es mi url
console.log(`URL: ${window.location}`);

// navigator.geolocation.getCurrentPosition(function (ubicacion) {
//   console.log(ubicacion);
// });
//Javascript a traves del objeto window
//window = pestaña del navegador

console.log(window.document);

//estoy capturando un elemento
let miTitulo = document.querySelector("h1");

console.log(miTitulo);

//innerHTML, es el contenido HTML de un elemento
miTitulo.innerHTML = "Hola soy un nuevo Titulo";

//EL HTML DENTRO DE LA ETIQUETA
console.log(miTitulo.innerHTML);

//obtener un elemento
let miCaja = document.getElementById("caja");

console.log(miCaja);

//innerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Titulo Caja</h2>";

//background-color = backgroundColor
miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";

let misItems = document.getElementsByClassName("lista_item");

console.log(misItems);

//
let arregloItems = Array.from(misItems);

console.log(arregloItems);

arregloItems.forEach(function (item, indice, arre) {
  item.style.backgroundColor = "skyblue";
  item.innerHTML = `Patata ${indice}`;
  console.log(arre);
});

//obtener elemebt de duferentes maneras
let miTexto = document.querySelector("#texto");

console.log(miTexto);

let boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach(function (bx) {
  bx.innerHTML = `<p>Soy un parrafo</p>`;
});

console.log(boxes[0].innerHTML);

//crear elementos
let series = [
  "Squid Game",
  "Pasion de Gavilanes",
  "Dark",
  "Billions",
  "Got",
  "Suits",
  "Mr. Robot",
  "House of dragons",
  "Chernobyl",
  "Breakin Bad",
];

let divContenido = document.getElementById("contenido");

//createElement("letiqueta") :"p","ul","h1","td"
let lista = document.createElement("ul");
divContenido.appendChild(lista);

let textoLI = "";
series.forEach(function (programaTv) {
  textoLI = textoLI + `<li>${programaTv}</li>`;
});

// console.log(textoLI);

lista.innerHTML = textoLI


let imagen = document.createElement("img")

divContenido.appendChild(imagen)

imagen.setAttribute("src","https://picsum.photos/200/300")


// var img = document.createElement("img");
// img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

// var src = document.getElementById("contenido");
// src.appendChild(img);

//clases de css
//a un elemento le podemos aplicar varias clases
//add("nombreclase")
lista.classList.add("resalto")
lista.classList.add("redondeado")
lista.classList.remove("resalto")