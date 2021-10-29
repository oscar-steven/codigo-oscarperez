// App.js es mi JS principal
// 1. Tener MockAPI listo
// 2. Obtener los datos (GET) fetch
// 3. Converti esos datos a HTML entendible por el navegador

// importar
import { obtenerProductos } from "./comunicacion";

//variables globales - los elementos del DOM

const getProductos = async () => {
  try {
    let productosObteneidos = await obtenerProductos();
    console.table(productosObteneidos);
  } catch (error) {
    console.log(error);
  }
};

getProductos();
