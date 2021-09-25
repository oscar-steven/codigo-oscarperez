let restaurante = {
  nombre: "La Nueva Palomino",
  platillos: [
    {
      id: 1,
      nombrePlatillo: "Sencca",
      precio: 30,
    },
    {
      id: 2,
      nombrePlatillo: "Pepian de Cuy",
      precio: 36,
    },
    {
      id: 3,
      nombrePlatillo: "Americano",
      precio: 40,
    },
  ],

  mostrarPlatillos: function () {
    console.log(restaurante.platillos);
  },
};

// console.log(restaurante.platillos);

// restaurante.mostrarPlatillos()

//una funcion dentro de un objeto es un metodo

let jugador = {
  nombre: "Dybala",
  nacionalidad: "Argentina",
  posicion: "volante, delantero",
  estatura: 1.85,
  corre: function () { 
    console.log("corre corre coreeeee");
  },
  cabecear: function () { 
    console.log("salta y cabecea la pelota");
  },
  patear: function () { 
    console.log("pateaaaaaaaa");
  },
};

jugador.cabecear();
