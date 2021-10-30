// App.js es mi JS principal
// 1. Tener MockAPI listo
// 2. Obtener los datos (GET) fetch
// 3. Converti esos datos a HTML entendible por el navegador
// 4. Crear un Modal de Boostrap

// importar
import { obtenerProductos, crearProducto } from "./Comunicacion.js";
import { imprimirProductos } from "./Interfaz.js";

//variables globales - los elementos del DOM
let btnCrear = document.getElementById("btnCrear");
// let modalCrear = document.getElementById("modalCrear")
let modalCrear = new bootstrap.Modal(document.getElementById("modalCrear")); //convertirlo en un obj de Bootstrap
let btnGuardar = document.getElementById("btnGuardar");

const getProductos = async () => {
  try {
    let productosObteneidos = await obtenerProductos(); //devuelve una promesa, por eso el await
    console.table(productosObteneidos);
    imprimirProductos(productosObteneidos);
  } catch (error) {
    console.log(error);
  }
};

getProductos();

//llamar al evento click de btnCrear
btnCrear.addEventListener("click", () => {
  modalCrear.show();
});

btnGuardar.addEventListener("click", async () => {
  let formulario = document.getElementById("formCrear");
  let nuevoProducto = {
    nombre: formulario.nombre.value, //por el name="nombre" obtiene el value de cada input dentro del form
    descripcion: formulario.descripcion.value,
    precio: formulario.precio.value,
  };

  //utilizo la funcion de crearProducto de Comunicacion y le paso el objeto con la info de los inputs

  try {
    let productoCreado = await crearProducto(nuevoProducto);
    //EXITO CREANDO PRODUCTO
    formulario.reset(); //Limpia los campos del formulario, los input
    modalCrear.hide(); //modal escondete
    getProductos(); //para que vuelva a obtener los productos y apazesca mi producto creado
  } catch (error) {
    console.log(error);
  }

  //   console.log(nuevoProducto)

  //POST
});
